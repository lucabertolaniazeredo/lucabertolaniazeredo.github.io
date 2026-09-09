/* ─────────────────────────────────────────────────────────────────────────
   SITE DATA — tutto il contenuto del sito sta qui.
   Per aggiungere una voce: copia una riga esistente e modificala.
   Ogni campo con _it / _en ha le due lingue. Se ometti _en, viene usato _it.
   ───────────────────────────────────────────────────────────────────────── */

window.SITE_DATA = {

  person: {
    name: "Luca Bertolani Azeredo",
    suffix: "PhD",
    role_it: "Storico della violenza politica",
    role_en: "Historian of political violence",
    lede_it: "Dottore di ricerca in Global History and Governance (2026, Scuola Superiore Meridionale, Napoli). Mi occupo di Irlanda in età moderna e contemporanea, con ricerche di taglio politico, sociale e culturale. La mia ultima ricerca studia gli italiani in Irlanda dal XIX secolo a oggi.",
    lede_en: "PhD in Global History and Governance (2026, Scuola Superiore Meridionale, Naples). I work on modern and contemporary Ireland, across political, social and cultural history. My current research studies Italians in Ireland from the nineteenth century to the present.",
    pronouns: "he/him",
    email: "luca.bertolani.azeredo@gmail.com",
    orcid: "0009-0002-3315-8544",
    orcidUrl: "https://orcid.org/0009-0002-3315-8544",
    linkedin: "",                      // incolla qui l'URL completo del profilo, es. "https://www.linkedin.com/in/..."

    /* CV scaricabile: metti il PDF in cv/ e lascia questo percorso, oppure svuota
       la stringa per far sparire il pulsante dalla pagina CV. */
    cvPdf: "cv/luca-bertolani-azeredo-cv.pdf",

    /* Altri profili mostrati nella pagina Contatti. Per aggiungerne uno copia una
       riga: label_it / label_en sono l'etichetta, value il testo mostrato, url il link.
       Le righe con url vuoto non vengono mostrate. */
    links: [
      { label_it: "Google Scholar", label_en: "Google Scholar", value: "", url: "" },
      { label_it: "Academia.edu",   label_en: "Academia.edu",   value: "", url: "" },
      { label_it: "Bluesky",        label_en: "Bluesky",        value: "", url: "" },
      { label_it: "Irish Historians", label_en: "Irish Historians",
        value: "irishhistorians.ie/members/lucaba", url: "https://irishhistorians.ie/members/lucaba/" },
      { label_it: "Italians in Ireland", label_en: "Italians in Ireland",
        value: "italians-in-ireland.github.io", url: "https://italians-in-ireland.github.io/" }
    ],
    location_it: "Padova, Italia",
    location_en: "Padua, Italy",
    portrait: "img/ritratto.jpg"
  },

  /* Filoni di ricerca — la pagina "Ricerca" e i due blocchi in home */
  research: [
    {
      kicker_it: "Filone principale", kicker_en: "First strand",
      title_it: "Violenza politica e paramilitarismo in Irlanda, 1909–1916",
      title_en: "Political violence and paramilitarism in Ireland, 1909–1916",
      body_it: "La ricerca dottorale indaga i corpi paramilitari irlandesi nel decennio che precede la Grande Guerra: come si armano, come si addestrano, come costruiscono la propria legittimità in uno spazio dove — secondo la formula che dà il titolo alla tesi — «esistono illegalità che non sono reati». Il lavoro attraversa nazionalismo e unionismo, guardando alle organizzazioni giovanili, alla disciplina dei corpi, alla stampa e al modo in cui lo Stato britannico sceglie di non intervenire.",
      body_en: "My doctoral research investigates Irish paramilitary bodies in the decade before the Great War: how they armed, drilled and built their own legitimacy in a space where — in the phrase that gives the thesis its title — “there are illegalities that are not crimes”. It cuts across nationalism and unionism, looking at youth organisations, the discipline of the body, the press, and the ways the British state chose not to intervene.",
      photo: "img/panel-ssm.jpg",
      caption_it: "",   // ← didascalia: aggiungi evento, luogo e data
      caption_en: ""
    },
    {
      kicker_it: "Ricerca in corso", kicker_en: "Current research",
      title_it: "Italiani in Irlanda, dal XIX secolo a oggi",
      title_en: "Italians in Ireland, from the nineteenth century to today",
      body_it: "Una storia della migrazione italiana in Irlanda costruita dal basso: censimenti, registri parrocchiali, gelaterie e fish and chips, famiglie che attraversano il confine di una terra divisa. Il progetto ricostruisce nomi, mestieri e percorsi, e li rende consultabili in una mappa pubblica.",
      body_en: "A history of Italian migration to Ireland built from the ground up: censuses, parish registers, ice-cream parlours and chip shops, families crossing the border of a divided land. The project reconstructs names, trades and itineraries, and makes them searchable on a public map.",
      photo: "img/strasburgo.jpg",
      caption_it: "",   // ← didascalia: aggiungi evento, luogo e data
      caption_en: ""
    }
  ],

  /* Progetti digitali e siti collegati */
  projects: [
    {
      name: "Italians in Ireland",
      url: "https://italians-in-ireland.github.io/",
      kind_it: "Mappa e archivio prosopografico", kind_en: "Map and prosopographical archive",
      body_it: "Il censimento delle famiglie italiane emigrate in Irlanda tra Otto e Novecento: schede biografiche, fonti censuarie e una mappa navigabile dei luoghi di insediamento.",
      body_en: "A census of the Italian families who migrated to Ireland between the nineteenth and twentieth centuries: biographical records, census sources and a navigable map of settlement."
    }
  ],

  /* Pubblicazioni — type: chapter | article | review | forthcoming */
  publications: [
    { year: "2026", type: "forthcoming",
      title: "Cittadini virili, armati, e patriottici? Il caso degli Young Citizen Volunteers, Belfast 1912-16",
      where: "in Matteo Millan, Marco Maria Aterrano, Enrico Acciai (a cura di), Percezioni e pratiche di (in)sicurezza in Italia, Viella" },
    { year: "2026", type: "forthcoming",
      title: "‘There are things stronger than Parliamentary majorities’. For a political use of violence in Ireland, 1909–1916",
      where: "in Karina Bénazech Wendling, Vanessa Boullet, Pauline Collombier, Tim Heron (eds), Radicalism, Radicalisation and de-Radicalization in Ireland from 1798 to the Present Day, Éditions de l’Université de Lorraine" },
    { year: "2026", type: "review",
      title: "Review of The Science of the Child in Liberal Italy, by Luisa Tasca",
      where: "Journal of the History of Childhood and Youth, vol. 19, no. 1, Winter 2026, pp. 76–77", url: "https://doi.org/10.1353/hcy.2026.a979016" },
    { year: "2025", type: "review",
      title: "Review of Conflict, Diaspora, and Empire: Irish Nationalism in Britain, 1912–1922, by Darragh Gannon",
      where: "Irish Studies Review, vol. 33, no. 3, pp. 440–442", url: "https://doi.org/10.1080/09670882.2025.2535780" },
    { year: "2024", type: "chapter",
      title: "Il manuale del giovane terrorista. Na Fianna Éireann e la nascita del paramilitarismo irlandese",
      where: "in Generoso Cefalo e Riccardo Mardegan (a cura di), Con quale autorità? La narrazione storica come strumento di (de)legittimazione, Edizioni dell’Orso, Alessandria, pp. 85–92", url: "https://www.ediorso.it/con-quale-autorita.html" },
    { year: "2024", type: "chapter",
      title: "Manly Physique, Attractive Uniforms and Drill Manoeuvres",
      where: "in Maria Gaviña-Costero, Dina Pedro, Dónall Mac Cathmhaoill (eds), ‘Lost, Unhappy and at Home’: The Impact of Violence on Irish Culture. Volume II: Socio-Cultural Aspects, Peter Lang, Oxford, pp. 15–30", url: "https://www.peterlang.com/document/1487257" },
    { year: "2024", type: "chapter",
      title: "The Irish Labour Party 1922-32: A Decade of Opposition",
      where: "in Sarah-Anne Buckle, Olivier Coquelin, Francis Devine (eds), Retreat From Revolution. Irish Working Class Politics in the 1920s, Umiskin Press, Dublin", url: "https://umiskinpress.wordpress.com/retreat-from-revolution/" },
    { year: "2024", type: "chapter",
      title: "Italian Labour & Unions in the ’70s. A Decade of Troubles",
      where: "in Jack McGinley, Noel Ward (eds), Visions of Labour and Class in Ireland and Europe. Irish Labour History Society 2nd International Conference, Umiskin Press, Dublin", url: "https://umiskinpress.wordpress.com/conference-proceedings/" },
    { year: "2024", type: "review",
      title: "Review of Roscommon: The Irish Revolution, 1912–23, by John Burke",
      where: "Irish Studies Review, vol. 32, no. 2, pp. 312–313", url: "https://doi.org/10.1080/09670882.2024.2340153" },
    { year: "2024", type: "review",
      title: "Review of The Camp Fire Girls. Gender, Race, and American Girlhood, 1910-1980, by Jennifer Helgren",
      where: "Journal of the History of Childhood and Youth, vol. 17, no. 2, Spring 2024, pp. 315–317", url: "https://doi.org/10.1353/hcy.2024.a926875" },
    { year: "2020", type: "article",
      title: "Come (non) si racconta una pandemia. La Spagnola nelle pagine del «Corriere della Sera»",
      where: "Amici di Passato e Presente, 15 giugno 2020", url: "https://amicidipassatoepresente.wordpress.com/2020/06/15/come-non-si-racconta-una-pandemia-la-spagnola-nelle-pagine-del-corriere-della-sera-luca-bertolani-azeredo/" }
  ],

  /* Conferenze e talk — dal più recente */
  talks: [
    { date: "2026-06-19", pdf: "presentations/2026-06-19-poco-di-gelato-asmi-cambridge.pdf", title: "“Un poco di gelato, if I may”. A New History of Italian Immigration to Ireland (1880s-1926)", event: "Association for the Study of Modern Italy, Postgraduate Summer School 2026", place: "Department of Criminology, Cambridge" },
    { date: "2026-04-23", pdf: "presentations/2026-04-23-pedagogy-violence-jagiellonian-krakow.pdf", title: "The Pedagogy of Violence: Youth, Discipline, and Paramilitary Culture in Early 20th Century Ireland", event: "Comparative Irish Studies from Ancient Times to the Present, Jagiellonian University", place: "Cracovia", place_en: "Kraków" },
    { date: "2026-03-27", pdf: "presentations/2026-03-27-migrants-divided-land-sofeir-strasbourg.pdf", title: "Migrants in a Divided Land: Italian Communities and the Making of Modern Ireland", event: "Colloque SOFEIR “Irish Exceptionalism”", place: "Université de Strasbourg" },
    { date: "2025-11-28", pdf: "presentations/2025-11-28-prin-seminar-uk-crisis-paramilitarism.pdf", title: "“I Fought the Law, and I Won”. The United Kingdom and the Crisis of Paramilitarism, 1900-1916", event: "Engaged Citizens. Seminar PRIN 2022", place: "Università di Napoli Federico II", place_en: "University of Naples Federico II" },
    { date: "2025-11-17", pdf: "presentations/2025-11-17-enniskillen-horse-qub-seminar.pdf", title: "The Enniskillen Horse: Illegality, Legitimacy and the Birth of Irish Paramilitarism", event: "Irish Studies Seminars, Autumn 2025", place: "Queen’s University Belfast" },
    { date: "2025-09-19", pdf: "presentations/2025-09-19-rebels-under-union-jack-efacis-prague.pdf", title: "“Rebels under the Union Jack”. Reassessing Loyalist Radicalisation in the Home Rule Crisis", event: "7th EFACIS International Postgraduate Conference", place: "Charles University, Praga", place_en: "Charles University, Prague" },
    { date: "2025-09-12", pdf: "presentations/2025-09-12-dolce-vita-ice-cream-maynooth.pdf", title: "La Dolce Vita? Story of an Italian Ice-Cream Parlour in Enniskillen", event: "35th Irish Conference of Historians", place: "Maynooth University" },
    { date: "2025-06-17", pdf: "presentations/2025-06-17-phd-workshop-ssm.pdf", title: "«There are illegalities that are not crimes». An Investigation into Political Violence and Paramilitary Bodies in Ireland before the Great War", event: "PhD Workshop 2024-25, discussant Brian Hughes", place: "Scuola Superiore Meridionale, Napoli", place_en: "Scuola Superiore Meridionale, Naples" },
    { date: "2025-05-08", pdf: "presentations/2025-05-08-framing-military-resistance-efacis-turku.pdf", title: "Framing Military Resistance: The Press and the Irish Home Rule Crisis", event: "EFACIS Conference 2025", place: "Åbo / Turku" },
    { date: "2024-12-10", pdf: "presentations/2024-12-10-shaping-youth-conflict-ceph.pdf", title: "Shaping the Youth of Conflict: Religious Divides and the Foundations of Irish Paramilitary Organizations", event: "Religion, Division and Development in Ireland. 3rd CEPH Irish Research Initiative Workshop", place: "CEPH" },
    { date: "2024-12-06", pdf: "presentations/2024-12-06-cittadini-virili-prin-roma.pdf", title: "Cittadini virili, armati, e patriottici? Il caso degli Young Citizen Volunteers, Belfast 1912-16", event: "Percezioni e pratiche di (in)sicurezza in Italia. PRIN 2022", place: "Università di Roma Tor Vergata", place_en: "University of Rome Tor Vergata" },
    { date: "2024-06-20", pdf: "presentations/2024-06-20-enniskillen-horse-acis-mic.pdf", title: "“No Man shall ride armed within the Realm”: The Enniskillen Horse and the Irish Home Rule Crisis", event: "ACIS MIC 2024 Conference", place: "Mary Immaculate College, Limerick" },
    { date: "2024-06-05", pdf: "presentations/2024-06-05-enniskillen-horse-galway.pdf", title: "“It may be tomfoolery – but is it legal?” The Enniskillen Horse and the Irish Home Rule Crisis (1912-14)", event: "Galway Conference of Irish Studies 2024: Slow Violence X Irish Studies", place: "University of Galway" },
    { date: "2024-04-17", pdf: "presentations/2024-04-17-things-stronger-nancy.pdf", title: "“There are things stronger than Parliamentary majorities”: For a Political Use of Violence in Ireland, 1909-1916", event: "Radicalism, Radicalisation, and Deradicalisation in Ireland", place: "Université de Lorraine, Nancy" },
    { date: "2024-04-02", pdf: "presentations/2024-04-02-doctoral-workshop-ssm.pdf", title: "«There are illegalities that are not crimes». An Investigation into Political Violence and Paramilitary Bodies in Ireland before the Great War", event: "Doctoral Workshop, discussants Richard English e Daniel Joseph Macarthur-Seal", place: "Scuola Superiore Meridionale, Napoli", place_en: "Scuola Superiore Meridionale, Naples" },
    { date: "2023-09-23", pdf: "presentations/2023-09-23-children-empire-efacis-prague.pdf", title: "The Children of the Empire. Youth Organisations in British Ireland between Imperialism and Anti-Colonialism, 1909-1916", event: "6th EFACIS International Postgraduate Conference", place: "Charles University, Praga", place_en: "Charles University, Prague" },
    { date: "2023-09-14", pdf: "presentations/2023-09-14-italian-labour-unions-ilhs.pdf", title: "Italian Labour & Unions in the ’70s – a Decade of Troubles", event: "Irish Labour History Society 2nd International Conference", place: "Liberty Hall, Dublino", place_en: "Liberty Hall, Dublin" },
    { date: "2023-08-24", pdf: "presentations/2023-08-24-na-fianna-eireann-efacis-belfast.pdf", title: "Na Fianna Éireann and the Young Citizen Volunteers", event: "EFACIS Conference 2023", place: "Queen’s University Belfast" },
    { date: "2023-05-31", pdf: "presentations/2023-05-31-balloon-bullet-aedei-valencia.pdf", title: "The Balloon and the Bullet. Children and Young People in Irish Early Paramilitarism", event: "21st International AEDEI Conference", place: "Universitat de València" },
    { date: "2023-05-30", pdf: "presentations/2023-05-30-manly-physique-cambridge.pdf", title: "Manly Physique, Attractive Uniforms, and Drill Manoeuvres: Kids and Boys Playing with War in Pre-War Ireland", event: "Gender and Sexuality History Workshop, Easter 2023", place: "University of Cambridge" },
    { date: "2023-03-21", pdf: "presentations/2023-03-21-illegalities-not-crimes-ssm-workshop.pdf", title: "“There are illegalities that are not crimes”. An Investigation into Political Violence and Paramilitary Bodies in Ireland before the Great War", event: "Global History and Governance – Research Workshop 2022-2023", place: "Scuola Superiore Meridionale, Napoli", place_en: "Scuola Superiore Meridionale, Naples" },
    { date: "2023-03-03", pdf: "presentations/2023-03-03-manly-physique-carlow-ihsa.pdf", title: "Manly Physique, Attractive Uniforms, and Drill Manoeuvres. Two Case Studies in Pre-War Ireland", event: "Irish History Students’ Association 74th Annual Conference", place: "Carlow College" },
    { date: "2022-10-29", pdf: "presentations/2022-10-29-handbook-young-terrorist-eshsi.pdf", title: "The Handbook of the Young Terrorist. Na Fianna Éireann and Irish Paramilitarism", event: "Economic and Social History Society of Ireland Conference", place: "Maynooth University" },
    { date: "2022-05-24", pdf: "presentations/2022-05-24-manuale-giovane-terrorista-pavia.pdf", title: "Il manuale del giovane terrorista. Na Fianna Éireann e il paramilitarismo irlandese", event: "Student Conference 2022 — Con quale autorità?", place: "Università degli Studi di Pavia", place_en: "University of Pavia" },
    { date: "2018-11-08", pdf: "presentations/2018-11-08-influenza-spagnola-padova.pdf", title: "1918 – L’influenza Spagnola. Riflessione e discussione a 100 anni dalla più grande epidemia della storia", event: "Simposio Permanente della Storia", place: "Università degli Studi di Padova", place_en: "University of Padua" }
  ],

  /* Didattica */
  teaching: [
    {
      date: "2026-05-11",
      title_it: "Il Novecento visto dall’Irlanda",
      title_en: "The Twentieth Century Seen from Ireland",
      course_it: "Lezione nel corso di Storia del Novecento (prof. Filippo Focardi), Università di Padova",
      course_en: "Guest lecture, Storia del Novecento (Prof. Filippo Focardi), University of Padua",
      photo: "img/lezione-padova.jpg"
    }
  ],

  /* Note di ricerca — appunti brevi dall’archivio. La più recente in cima. */
  notes: [
    {
      date: "2026-09-08",
      title_it: "Apertura del taccuino",
      title_en: "Opening the notebook",
      body_it: "Questa sezione raccoglie appunti brevi presi in archivio: una carta che non torna, un nome che ricompare a vent’anni di distanza, una nota a margine che vale una nota a piè di pagina. Non sono articoli, e non pretendono conclusioni.",
      body_en: "This section collects short notes taken in the archive: a document that does not add up, a name that resurfaces twenty years later, a marginal note worth a footnote. They are not articles, and they claim no conclusions."
    }
  ],

  /* CV */
  cv: {
    education: [
      { period: "2021–2026", title_it: "Dottorato in Global History and Governance (Doctor Europaeus)", title_en: "PhD in Global History and Governance (Doctor Europaeus)",
        place: "Scuola Superiore Meridionale, Napoli", place_en: "Scuola Superiore Meridionale, Naples",
        detail_it: "Tesi: «There are illegalities that are not crimes». An investigation into political violence and paramilitary bodies in Ireland before the Great War. Relatore: Teodoro Tagliaferri. Revisori esterni: Martin O’Donoghue (Max Planck Institute), Edward Burke (University College Dublin). Commissione: Teodoro Tagliaferri, Matteo Millan (Padova), Eugenio F. Biagini (Cambridge). Discussa il 9 febbraio 2026, eccellente con lode.",
        detail_en: "Dissertation: «There are illegalities that are not crimes». An investigation into political violence and paramilitary bodies in Ireland before the Great War. Supervisor: Teodoro Tagliaferri. External reviewers: Martin O’Donoghue (Max Planck Institute), Edward Burke (University College Dublin). Jury: Teodoro Tagliaferri, Matteo Millan (Padua), Eugenio F. Biagini (Cambridge). Defended 9 February 2026, excellent with honours." },
      { period: "2024", title_it: "Visiting Research Fellow", title_en: "Visiting Research Fellow", place: "Trinity College Dublin", detail_it: "Aprile – ottobre 2024.", detail_en: "April – October 2024." },
      { period: "2023", title_it: "Visiting Student", title_en: "Visiting Student", place: "University College Cork", detail_it: "Maggio – ottobre 2023. Supervisore: John Borgonovo.", detail_en: "May – October 2023. Supervisor: John Borgonovo." },
      { period: "2022–2023", title_it: "Visiting Student", title_en: "Visiting Student", place: "Queen’s University Belfast", detail_it: "Settembre 2022 – febbraio 2023. Supervisori: Richard English e Fearghal McGarry.", detail_en: "September 2022 – February 2023. Supervisors: Richard English and Fearghal McGarry." },
      { period: "2017–2020", title_it: "Laurea magistrale in Scienze storiche", title_en: "MA in Historical Science", place: "Università degli Studi di Padova", place_en: "University of Padua",
        detail_it: "110 e lode. Tesi: The Irish Labour Party. From Its Origins to 1938. Relatori: Matteo Millan e Diarmaid Ferriter.",
        detail_en: "110 cum laude, first class honours. Dissertation: The Irish Labour Party. From Its Origins to 1938. Supervisors: Matteo Millan and Diarmaid Ferriter." },
      { period: "2019", title_it: "Erasmus+", title_en: "Erasmus+", place: "University College Dublin", detail_it: "Gennaio – maggio 2019.", detail_en: "January – May 2019." },
      { period: "2013–2017", title_it: "Laurea triennale in Storia", title_en: "BA in History", place: "Alma Mater Studiorum – Università di Bologna", detail_it: "101/110. Relatore: Alberto De Bernardi.", detail_en: "101/110. Supervisor: Alberto De Bernardi." }
    ],
    experience: [
      { period: "2019–2026", title_it: "Ricerca d’archivio", title_en: "Archival research", place: "Regno Unito e Irlanda",
        detail_it: "The National Archives (Londra), National Archives of Ireland, Public Record Office of Northern Ireland, National Library of Ireland, Military Archives (Dublino), UCD Archives, Queen’s University Belfast Archives, Linen Hall Library, Enniskillen Library, Fermanagh County Museum.",
        detail_en: "The National Archives (London), National Archives of Ireland, Public Record Office of Northern Ireland, National Library of Ireland, Military Archives (Dublin), UCD Archives, Queen’s University Belfast Archives, Linen Hall Library, Enniskillen Library, Fermanagh County Museum." },
      { period: "2019", title_it: "Tirocinio", title_en: "Traineeship", place: "Centro per la storia dell’Università di Padova",
        detail_it: "Giugno – ottobre 2019, progetto “Bo 2022”. Supervisori: Andrea Martini e Remigio Pegoraro.",
        detail_en: "June – October 2019, “Bo 2022” project. Supervisors: Andrea Martini and Remigio Pegoraro." }
    ],
    grants: [
      { year: "2026", body_it: "Association for the Study of Modern Italy (ASMI)", body_en: "Association for the Study of Modern Italy (ASMI)" },
      { year: "2025", body_it: "European Federation of Associations and Centres of Irish Studies (EFACIS)", body_en: "European Federation of Associations and Centres of Irish Studies (EFACIS)" },
      { year: "2025", body_it: "Irish Committee for Historical Sciences", body_en: "Irish Committee for Historical Sciences" },
      { year: "2023", body_it: "Irish Labour History Society", body_en: "Irish Labour History Society" },
      { year: "2021–2025", body_it: "Borsa di dottorato, Scuola Superiore Meridionale", body_en: "Doctoral scholarship, Scuola Superiore Meridionale" }
    ]
  }
};
