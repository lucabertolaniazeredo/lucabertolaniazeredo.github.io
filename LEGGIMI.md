# Sito personale — come pubblicarlo e aggiornarlo

Indirizzo previsto: **https://lucabertolani.github.io**

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

1. Su github.com, con l'account che possiede l'organizzazione *italians-in-ireland*, crea un repository nuovo chiamato `lucabertolani.github.io` (sostituisci `lucabertolani` con il tuo nome utente GitHub: il nome del repository deve essere esattamente `<utente>.github.io`). Pubblico, senza README.
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
<a href="https://lucabertolani.github.io" target="_blank" rel="noopener">Luca Bertolani Azeredo</a>
```
