/* ────────────────────────────────────────────────────────────────────────────
   build-seo.js — rigenera il blocco <noscript> di index.html e sitemap.xml
   a partire da site-data.js.

   A cosa serve: il sito costruisce le pagine con JavaScript, quindi l'HTML
   servito è vuoto. Google esegue il JavaScript, ma Bing, LinkedIn, WhatsApp,
   Slack, Bluesky e gran parte dei crawler no: vedrebbero una pagina bianca.
   Il blocco <noscript> dà loro il contenuto essenziale in HTML puro.

   Quando rilanciarlo: ogni volta che aggiungi una pubblicazione, un intervento
   o cambi il testo di presentazione in site-data.js.

       node tools/build-seo.js

   Non tocca nient'altro: riscrive solo ciò che sta fra i marcatori
   <!-- SEO:START --> e <!-- SEO:END -->.
   ──────────────────────────────────────────────────────────────────────────── */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://lucabertolaniazeredo.com/';

// site-data.js assegna a window.SITE_DATA: gli diamo un window finto.
const window = {};
// eslint-disable-next-line no-eval
eval(fs.readFileSync(path.join(ROOT, 'site-data.js'), 'utf8'));
const D = window.SITE_DATA;
if (!D) { console.error('site-data.js non ha definito window.SITE_DATA'); process.exit(1); }

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const p = D.person;
const out = [];
out.push('<!-- SEO:START — generato da tools/build-seo.js, non modificare a mano -->');
out.push('<noscript>');
out.push('  <div style="max-width:760px;margin:0 auto;padding:40px 28px;font-family:system-ui,sans-serif;line-height:1.6;color:#201e1d">');
out.push(`    <h1>${esc(p.name)}${p.suffix ? ', ' + esc(p.suffix) : ''}</h1>`);
out.push(`    <p><strong>${esc(p.role_en)}</strong> — ${esc(p.role_it)}</p>`);
out.push(`    <p>${esc(p.lede_en)}</p>`);
out.push(`    <p lang="it">${esc(p.lede_it)}</p>`);

out.push('    <h2>Research strands</h2>');
(D.research || []).forEach((r) => {
  out.push(`    <h3>${esc(r.title_en)}</h3>`);
  out.push(`    <p>${esc(r.body_en)}</p>`);
});

const pubs = D.publications || [];
out.push(`    <h2>Publications (${pubs.length})</h2>`);
out.push('    <ul>');
pubs.forEach((x) => {
  const title = x.url
    ? `<a href="${esc(x.url)}">${esc(x.title)}</a>`
    : esc(x.title);
  out.push(`      <li>${esc(x.year)} — ${title}, ${esc(x.where)}</li>`);
});
out.push('    </ul>');

const talks = D.talks || [];
out.push(`    <h2>Conference papers (${talks.length})</h2>`);
out.push('    <ul>');
talks.forEach((k) => {
  out.push(`      <li>${esc((k.date || '').slice(0, 7))} — ${esc(k.title)}. ${esc(k.event)}, ${esc(k.place)}</li>`);
});
out.push('    </ul>');

const projects = D.projects || [];
if (projects.length) {
  out.push('    <h2>Projects</h2>');
  out.push('    <ul>');
  projects.forEach((x) => {
    out.push(`      <li><a href="${esc(x.url)}">${esc(x.name)}</a> — ${esc(x.body_en || x.body_it)}</li>`);
  });
  out.push('    </ul>');
}

out.push('    <h2>Education</h2>');
out.push('    <ul>');
(D.cv && D.cv.education ? D.cv.education : []).forEach((e) => {
  out.push(`      <li>${esc(e.period)} — ${esc(e.title_en || e.title_it)}, ${esc(e.place)}</li>`);
});
out.push('    </ul>');

out.push('    <h2>Contact</h2>');
out.push('    <ul>');
out.push(`      <li>Email: <a href="mailto:${esc(p.email)}">${esc(p.email)}</a></li>`);
if (p.orcidUrl) out.push(`      <li>ORCID: <a href="${esc(p.orcidUrl)}">${esc(p.orcid)}</a></li>`);
if (p.linkedin) out.push(`      <li>LinkedIn: <a href="${esc(p.linkedin)}">${esc(p.linkedin)}</a></li>`);
(p.links || []).filter((l) => l.url).forEach((l) => {
  out.push(`      <li>${esc(l.label_en || l.label_it || l.label)}: <a href="${esc(l.url)}">${esc(l.value || l.url)}</a></li>`);
});
out.push(`      <li>${esc(p.location_en)}</li>`);
out.push('    </ul>');
out.push('    <p><a href="privacy.html">Privacy e note legali</a></p>');
out.push('  </div>');
out.push('</noscript>');
out.push('<!-- SEO:END -->');

const block = out.join('\n');

// ── inserimento in index.html ────────────────────────────────────────────────
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
const START = '<!-- SEO:START';
const END = '<!-- SEO:END -->';

if (idx.includes(START)) {
  const a = idx.indexOf(START);
  const b = idx.indexOf(END) + END.length;
  idx = idx.slice(0, a) + block + idx.slice(b);
} else {
  idx = idx.replace('<body>', '<body>\n' + block + '\n');
}
fs.writeFileSync(idxPath, idx, 'utf8');

// ── sitemap ─────────────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE}privacy.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');

console.log(`OK — noscript rigenerato (${pubs.length} pubblicazioni, ${talks.length} interventi) e sitemap aggiornata al ${today}.`);
