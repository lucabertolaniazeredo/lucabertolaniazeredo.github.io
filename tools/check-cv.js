/*
   check-cv.js — confronta il CV (tools/cv-source.html) con i dati del sito
   (site-data.js) e segnala che cosa è stato aggiunto al sito ma non al CV.

   I contenuti del CV sono scritti a mano e non si aggiornano da soli: senza
   questo controllo il sito e il CV scaricabile divergono in silenzio.

   Uso:  node tools/check-cv.js
*/
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

global.window = {};
require(path.join(ROOT, 'site-data.js'));
const D = global.window.SITE_DATA;
if (!D) { console.error('site-data.js non ha definito window.SITE_DATA'); process.exit(1); }

const cv = fs.readFileSync(path.join(ROOT, 'tools', 'cv-source.html'), 'utf8');

/* Normalizza per il confronto: via i tag, le virgolette tipografiche,
   gli accenti e gli spazi multipli, così le differenze di composizione
   non producono falsi allarmi. */
const norm = (s) => String(s)
  .replace(/<[^>]*>/g, ' ')
  .replace(/&[a-z]+;/gi, ' ')
  .replace(/[«»“”„‟"'’‘]/g, '')
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/gi, ' ')
  .toLowerCase().trim();

/* Le parole di una o due lettere si perdono facilmente nella composizione
   tipografica del CV: le tolgo da entrambi i lati del confronto. */
const soloParole = (s) => norm(s).split(' ').filter((w) => w.length > 2).join(' ');
const haystack = soloParole(cv);

/* Una voce si considera presente se nel CV compare una sequenza
   sufficientemente lunga tratta dal suo titolo. */
const presente = (titolo) => {
  const t = soloParole(titolo);
  if (!t) return true;
  const chiave = t.split(' ').slice(0, 6).join(' ');
  return chiave.length >= 12 ? haystack.includes(chiave) : haystack.includes(t);
};

const mancanti = [];
const controlla = (voci, etichetta, titolo) => {
  (voci || []).forEach((v) => { if (!presente(titolo(v))) mancanti.push(`${etichetta}: ${titolo(v)}`); });
};

controlla(D.publications, 'Pubblicazione', (v) => v.title);
controlla(D.talks, 'Intervento', (v) => v.title);
controlla(D.teaching, 'Didattica', (v) => v.title_en || v.title_it);
controlla(D.cv && D.cv.grants, 'Premio/borsa', (v) => v.body_en || v.body_it);

console.log(`Sito: ${(D.publications||[]).length} pubblicazioni, ${(D.talks||[]).length} interventi, ${(D.teaching||[]).length} voci di didattica.`);
if (!mancanti.length) {
  console.log('OK — ogni voce del sito risulta presente anche nel CV.');
} else {
  console.log(`\nATTENZIONE — ${mancanti.length} voci sono sul sito ma non nel CV:\n`);
  mancanti.forEach((m) => console.log('  · ' + m));
  console.log('\nAggiungile a tools/cv-source.html, poi rigenera il PDF (vedi LEGGIMI.md).');
  process.exitCode = 1;
}
