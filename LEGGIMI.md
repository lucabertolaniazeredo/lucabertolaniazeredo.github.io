# Sito personale — come pubblicarlo e aggiornarlo

Indirizzo previsto: **https://lucabertolaniazeredo.com**

## Cosa contiene la cartella

| File / cartella | A cosa serve |
| --- | --- |
| `index.html` | Il sito: tutte e nove le pagine, in italiano e inglese |
| `site-data.js` | **I contenuti.** È l'unico file da modificare per aggiornare il sito |
| `support.js` | Il motore che fa funzionare la pagina. Non modificare |
| `img/` | Ritratto e fotografie · `img/slides/` le anteprime delle presentazioni |
| `presentations/` | I PDF delle slide |
| `.nojekyll` | Dice a GitHub Pages di pubblicare i file così come sono. Non toccare |
| `Luca Bertolani Azeredo.dc.html` | Copia di lavoro, identica a `index.html`. Non serve online |
| `_lavoro/` | Materiale di servizio. Non serve online |

## Pubblicarlo la prima volta

1. Su github.com, con l'account che possiede l'organizzazione *italians-in-ireland*, crea un repository nuovo chiamato `lucabertolaniazeredo.github.io` (sostituisci `lucabertolani` con il tuo nome utente GitHub: il nome del repository deve essere esattamente `<utente>.github.io`). Pubblico, senza README.
2. Con GitHub Desktop: *File → Clone repository*, scegli quello appena creato, salvalo in una cartella locale.
3. Copia dentro la cartella clonata tutto il contenuto di questa cartella tranne `_lavoro/` e `Luca Bertolani Azeredo.dc.html`.
4. In GitHub Desktop scrivi un messaggio di commit ("primo caricamento") e premi *Push origin*.
5. Sul repository, *Settings → Pages*: come *Source* scegli *Deploy from a branch*, ramo `main`, cartella `/ (root)`. Salva.

Dopo un minuto circa il sito è online.

## Provarlo prima di pubblicare

Doppio clic su `index.html`: funziona anche senza server, i PDF compresi.

## Aggiornare i contenuti

Apri `site-data.js` con un editor di testo (Notepad++, VS Code, o il Blocco note). Ogni voce è una riga fra parentesi graffe: per aggiungerne una, copia una riga esistente e cambiane il contenuto. I campi che finiscono in `_it` e `_en` sono le due lingue; se ometti `_en` il sito usa l'italiano.

Sezioni disponibili: `person` (nome, ruolo, contatti), `research` (i due filoni), `projects` (siti collegati), `publications`, `talks`, `teaching`, `notes` (note di ricerca), `cv`.

### Aggiungere un intervento con le slide

1. Metti il PDF in `presentations/` col nome `AAAA-MM-GG-titolo-breve-sede.pdf`.
2. Genera un PNG della prima slide (in Acrobat: *Esporta in → Immagine → PNG*, larghezza ~520 px) e salvalo in `img/slides/` con lo stesso nome, estensione `.png`.
3. In `site-data.js` aggiungi la voce in cima a `talks`, col campo `pdf: "presentations/nome-del-file.pdf"`.
4. In `index.html` cerca `const HAS = [` e aggiungi il nome del file (senza estensione) all'elenco.

Se salti i punti 2 e 4 l'intervento compare comunque, solo senza anteprima.

### Mandare online le modifiche

Con GitHub Desktop: le modifiche appaiono da sole, scrivi un messaggio di commit e premi *Push origin*. Il sito si aggiorna in un minuto.

## Il collegamento con Italians in Ireland

Questo sito rimanda all'altro dalla pagina *Progetti* e dal piè di pagina.

Per il collegamento inverso, ricorda che `index.html` di *italians-in-ireland.github.io* viene rigenerato da `build_web.py`: una modifica fatta a mano sul repository verrebbe cancellata alla build successiva. Il link va aggiunto dentro lo script, nella sezione che costruisce il colofone (`add_colophon.py`). Il codice da inserire:

```html
<a href="https://lucabertolaniazeredo.com" target="_blank" rel="noopener">Luca Bertolani Azeredo</a>
```

---

# Manutenzione tecnica (aggiornato 9 settembre 2026)

Questa parte riguarda i file che fanno funzionare il sito dietro le quinte: di
norma non c'è bisogno di toccarli, ma è utile sapere che ci sono e perché.

## Cosa è stato aggiunto

| File / cartella | A cosa serve |
| --- | --- |
| `fonts/` | I caratteri Figtree e Caprasimo ospitati qui, non più caricati da Google. Serve a non trasmettere l'IP dei visitatori a terzi (GDPR) e a non dipendere da un servizio esterno |
| `vendor/` | Le librerie React e Babel, per la stessa ragione |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | L'icona del sito nella scheda del browser e sulla schermata home dei telefoni |
| `share.jpg` | L'anteprima che compare quando il link viene mandato per email, WhatsApp, LinkedIn o Bluesky |
| `privacy.html` | Informativa privacy e note su copyright e riuso. Collegata dal piè di pagina |
| `404.html` | La pagina mostrata quando un indirizzo non esiste |
| `robots.txt`, `sitemap.xml` | Istruzioni per i motori di ricerca |
| `cv/` | Il CV in PDF, scaricabile dalla pagina CV |
| `tools/build-seo.js` | Rigenera il blocco `<noscript>` e la sitemap partendo da `site-data.js` |
| `tools/cv-source.html` | La sorgente del CV in PDF |

## Dopo ogni aggiornamento dei contenuti

Quando aggiungi una pubblicazione o un intervento a `site-data.js`, lancia:

```
node tools/build-seo.js
```

Rigenera il blocco `<noscript>` dentro `index.html` (l'unico contenuto che i
crawler vedono senza eseguire JavaScript: Bing, LinkedIn, WhatsApp, Slack e
Bluesky non ne eseguono) e aggiorna `sitemap.xml`. Se salti questo passaggio il
sito resta corretto per i visitatori, ma le novità non compaiono nelle anteprime
e nei motori diversi da Google.

Subito dopo, lancia anche:

```
node tools/check-cv.js
```

Confronta `tools/cv-source.html` con `site-data.js` e dice quali voci hai
aggiunto al sito ma non al CV. I contenuti del CV sono scritti a mano e non si
aggiornano da soli: senza questo controllo il sito e il CV scaricabile
divergono in silenzio, e te ne accorgi solo quando qualcuno se ne accorge prima
di te. Se segnala qualcosa, aggiungi le voci a `tools/cv-source.html`, poi apri
quel file nel browser e stampalo in PDF (Ctrl+P, «Salva come PDF», margini
predefiniti, senza intestazioni ne pie' di pagina) salvando in
`cv/luca-bertolani-azeredo-cv.pdf`.

### La lingua del sito

Il sito si apre in inglese. Chi sceglie l'italiano col pulsante IT se lo vede
ricordato alle visite successive. Nell'indirizzo si puo' forzare la lingua:
`?lang=it` apre in italiano, `?lang=en` in inglese. Usa
`https://lucabertolaniazeredo.com/?lang=it` nelle firme e nelle candidature
italiane.

### Attenzione: `index.html` e' un file esportato

`index.html` contiene un blocco `text/x-dc` e un attributo `data-props`: e'
stato generato da un editor visuale. Le modifiche fatte a mano in quel file
— lo script della lingua in testa, i metadati, il valore predefinito della
lingua — verrebbero cancellate da una nuova esportazione. Se riesporti il
sito, riapplicale.

Il blocco è delimitato da `<!-- SEO:START -->` e `<!-- SEO:END -->`: non
modificarlo a mano, viene sovrascritto.

## Aggiornare il CV in PDF

Apri `tools/cv-source.html` in un browser, correggi quello che serve nel file,
poi stampa in PDF (Ctrl+P, destinazione *Salva come PDF*, margini predefiniti,
intestazioni e piè di pagina disattivati) salvando in
`cv/luca-bertolani-azeredo-cv.pdf`. Per togliere il pulsante di download dalla
pagina CV basta svuotare il campo `cvPdf` in `site-data.js`.

## Aggiungere un profilo alla pagina Contatti

In `site-data.js`, dentro `person.links`, ci sono righe già pronte per Google
Scholar, Academia.edu e Bluesky: basta compilarne `url` e `value`. Le righe con
`url` vuoto non vengono mostrate. Stessa cosa per `linkedin`, che va compilato
con l'indirizzo completo del profilo.

## Regole da non violare

- **Niente risorse caricate da domini esterni.** Font, script, immagini e fogli
  di stile devono stare in questa cartella. Aggiungere un `<script>` che punta a
  un CDN, o un carattere di Google Fonts, rimette in piedi il problema privacy
  che l'informativa dichiara risolto: in quel caso `privacy.html` diventerebbe
  falsa e servirebbe un banner di consenso.
- **Niente Google Analytics.** Se un giorno servono le statistiche, usare uno
  strumento senza cookie e con dati in UE (Plausible, Umami): niente banner e
  informativa da aggiornare in un punto solo.
- Se cambi indirizzo (dominio proprio), vanno aggiornati: `link rel="canonical"`
  e i tag `og:` in `index.html`, `robots.txt`, `sitemap.xml`, `privacy.html` e
  `tools/build-seo.js` (costante `SITE`).
