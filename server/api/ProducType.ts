export default defineEventHandler((event) => {
  return {
    products: [
      {
        Id: 1,
        Name: "Panetterie",
        component: {
          BtnText: "Panetterie",
          Title: "Macchine per Panetterie<br/>Vendita e Assistenza",
          Description:
            "Vendo macchinari e strumenti progettati per ottimizzare ogni fase della panificazione, dal dosaggio degli ingredienti alla cottura perfetta. Con le migliori attrezzature potrai sperimentare nuove ricette, migliorare la qualità del pane e garantire un prodotto fragrante e irresistibile, giorno dopo giorno.",
          ImgUrl: "/img/IMG_SERVIZI_MOBILE/IMG_SERVIZI_MOB_PANETTERIE.png",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PANETTERIE/ROTO_AVANT.png",
            },
            {
              shId: 2,
              Brand: "MIXER",
              Model: "ASM EVO RS",
              Description: "IMPASTATRICE A SPIRALE",
              ImgUrl: "/img/PANETTERIE/ASM_EVO_RS.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "ELETTRODRAGO AVANT",
              Description: "FORNO ELETTRICO PER PANE",
              ImgUrl: "/img/PANETTERIE/ELETTRODRAGO_AVANT.png",
            },
          ],
        },
        pages: {
          Title: "MACCHINARI PROFESSIONALI PER PANETTERIE",
          SubTitle: "Fatti in Italia, i migliori per i Panettieri.",
          Intro:
            "Offro una <b>gamma completa</b> di <b>forni</b> e <b>attrezzature</b> per <b>panifici</b>, pensata per garantire <b>qualità costante</b> e <b>massima resa produttiva</b>.<br/>Che tu gestisca un <b>panificio artigianale</b> o una produzione più strutturata, troverai <b>soluzioni adatte</b> a ogni esigenza.",
          Title_2: "Affidabilità e qualità per la tua attività",
          Desc: "Collaboro con <b>Polin</b>, uno dei <b>marchi di riferimento</b> nel settore, per offrirti <b>attrezzature</b> che uniscono <b>tecnologia avanzata</b> e <b>durabilità</b>.<br/>Nel <b>Nord Est</b> fornisco:",
          list: [
            "<b>Forni a tunnel</b>, a <b>vapore</b> e a <b>cupola</b>, per adattarsi a differenti modalità di <b>cottura</b>",
            "<b>Forni ventilati</b>, ideali per una <b>distribuzione uniforme</b> del calore",
            "<b>Impastatrici professionali</b>, adatte alla preparazione di qualsiasi tipo di <b>impasto</b>",
            "<b>Accessori</b> e <b>macchinari ausiliari</b> per <b>ottimizzare</b> i flussi di lavoro e migliorare l’<b>efficienza</b>",
          ],
          ImgUrl: "/img/IMG_INIZIALI_MOBILE/IMG_MOB_PANETETRIE.png",
        },
      },
      {
        Id: 2,
        Name: "Pasticcerie",
        component: {
          BtnText: "Pasticcerie",
          Title: "Macchine per Pasticcerie<br/>Vendita e Assistenza",
          Description:
            "Precisione e creatività si incontrano con le attrezzature giuste. Dagli abbattitori ai forni ventilati, passando per sfogliatrici e planetarie, ogni strumento è pensato per aiutarti a realizzare dolci impeccabili, dalla più soffice crema al più raffinato impasto.",
          ImgUrl: "/img/IMG_SERVIZI_MOBILE/IMG_SERVIZI_MOB_PASTICCERIE.png",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "SCOOTER 4060",
              Description: "FORNO ROTATIVO PER PASTICCERIA",
              ImgUrl: "/img/PASTICCERIE/SCOOTER_4060.png",
            },
            {
              shId: 2,
              Brand: "ICB",
              Model: "DOSICREAM",
              Description: "RIEMPITRICE E DOSATRICE",
              ImgUrl: "/img/PASTICCERIE/DOSICREAM.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "MULTIDROP",
              Description: "MACCHINA PER BISCOTTI",
              ImgUrl: "/img/PASTICCERIE/MULTIDROP_NORMAL.png",
            },
          ],
        },
        pages: {
          Title: "MACCHINARI PROFESSIONALI PER PASTICCERIE",
          SubTitle:
            "Innovazione e precisione al servizio della tua pasticceria",
          Intro:
            "Metto a disposizione un’ampia selezione di <b>macchinari professionali</b> e <b>attrezzature</b> per <b>pasticceria</b>, studiati per migliorare l’<b>efficienza</b> e garantire <b>risultati eccellenti</b>.<br/>Dalle <b>pasticcerie artigianali</b> ai laboratori più strutturati, offro <b>soluzioni personalizzate</b> per ogni <b>necessità produttiva</b>.",
          Title_2: "Soddisfa e sorprendi i tuoi clienti",
          Desc: "Collaboro con i <b>migliori marchi</b> del settore, tra cui <b>Polin</b>, <b>RAM</b>, <b>OSTALI</b> e <b>Longoni</b>, selezionando <b>macchinari</b> che combinano <b>innovazione</b>, <b>prestazioni elevate</b> e <b>affidabilità</b> nel tempo.<br/>Nel <b>Nord Est</b> fornisco:",
          list: [
            "<b>Forni statici</b> ed <b>elettrici</b>, disponibili in varie configurazioni per una <b>cottura ottimale</b>",
            "<b>Forni ventilati</b>, a <b>gas</b> ed <b>elettrici</b>, ideali per <b>lavorazioni specifiche</b>",
            "<b>Impastatrici planetarie</b>, <b>sfogliatrici</b> e <b>spezzatrici</b>, progettate per facilitare la preparazione di <b>impasti</b> e <b>creme</b>",
            "<b>Macchinari complementari</b> per migliorare l’<b>organizzazione</b> del laboratorio e <b>ottimizzare</b> la produzione",
          ],
          ImgUrl: "/img/IMG_INIZIALI_MOBILE/IMG_MOB_PASTICCERIE.png",
        },
      },
      {
        Id: 3,
        Name: "Pizzerie",
        component: {
          BtnText: "Pizzerie",
          Title: "Macchine per Pizzerie<br>Vendita e Assistenza",
          Description:
            "Attrezzature professionali per una pizza sempre perfetta. Dai forni di ultima generazione agli impastatrici, offro strumenti che garantiscono prestazioni elevate, uniformità di cottura e la massima qualità per ogni impasto. Ideali per chi vuole innovare senza rinunciare alla tradizione.",
          ImgUrl: "/img/IMG_SERVIZI_MOBILE/IMG_SERVIZI_MOB_PIZZERIE.png",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PANETTERIE/ROTO_AVANT.png",
            },
            {
              shId: 2,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PANETTERIE/ROTO_AVANT.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PANETTERIE/ROTO_AVANT.png",
            },
          ],
        },
        pages: {
          Title: "MACCHINARI PROFESSIONALI PER PIZZERIE",
          SubTitle: "Efficienza e qualità per valorizzare la tua pizzeria",
          Intro:
            "Metto a tua disposizione una vasta gamma di <b>forni</b> e <b>macchinari per pizzeria</b> che ti permetteranno di <b>ottimizzare</b> la tua attività e dare vita a nuove <b>ricette</b>.<br/>Dalle <b>pizzerie artigianali</b> alle grandi catene di <b>ristoranti</b>, offro <b>soluzioni su misura</b> per soddisfare ogni <b>esigenza produttiva</b>.",
          Title_2: "La soluzione giusta per ogni esigenza",
          Desc: "Collaboro con il <b>brand più prestigioso</b> del settore, <b>Polin</b>, e seleziono solo <b>attrezzature</b> in grado di garantire <b>qualità</b>, <b>efficienza</b> e <b>affidabilità</b>.<br/>Il mio obiettivo è fornirti nel <b>Nord Est</b>:",
          list: [
            "<b>Forni statici</b> ed <b>elettrici</b> (modulari, a tunnel, a cupola)",
            "<b>Forni ventilati</b> per cotture più rapide e omogenee",
            "<b>Forni a gas</b> e <b>forni elettrici</b> in diverse dimensioni e potenze",
            "<b>Impastatrici</b> e altre <b>attrezzature professionali</b> per la preparazione dell’<b>impasto</b>",
            "<b>Macchinari ausiliari</b> e complementi per <b>ottimizzare</b> il tuo spazio di lavoro",
          ],
          ImgUrl: "/img/IMG_INIZIALI_MOBILE/IMG_MOB_PIZZERIA.png",
        },
      },
      {
        Id: 4,
        Name: "Gelaterie",
        component: {
          BtnText: "Gelaterie",
          Title: "Macchine per Gelaterie<br/>Vendita e Assistenza",
          Description:
            "Scopri le attrezzature ideali per una produzione artigianale di alta qualità. Dai mantecatori ai banchi espositivi, ogni strumento è pensato per offrirti massima efficienza e libertà creativa. Con macchinari professionali, puoi trasformare ogni ingrediente in gelati e sorbetti unici, capaci di conquistare ogni cliente al primo assaggio.",
          ImgUrl: "/img/IMG_SERVIZI_MOBILE/IMG_SERVIZI_MOB_GELATERIE.png",
          show: [
            {
              shId: 1,
              Brand: "CATTABRIGA",
              Model: "MASTERCHEF",
              Description: "MACCHINA MULTIFUNZIONE",
              ImgUrl: "/img/GELATERIE/MASTERCHEF.png",
            },
            {
              shId: 2,
              Brand: "ICB",
              Model: "CHOCOTEMPER TOP",
              Description: "TEMPERATRICE DA BANCO",
              ImgUrl: "/img/GELATERIE/CHOCOTEMPER.png",
            },
            {
              shId: 3,
              Brand: "CATTABRIGA",
              Model: "MULTIFREEZE 8 PRO",
              Description: "MANTECATORE PER GELATO",
              ImgUrl: "/img/GELATERIE/MULTIFREEZE_8_PRO.png",
            },
          ],
        },
        pages: {
          Title: "MACCHINARI PROFESSIONALI PER GELATERIE",
          SubTitle:
            "Attrezzature specializzate per garantire gelato artigianale di alto livello",
          Intro:
            "Metto a tua disposizione una vasta selezione di <b>macchinari</b> e <b>soluzioni per gelaterie</b>, perfette per trasformare la tua attività in un ambiente ideale dove produrre <b>gelato artigianale</b> di altissima <b>qualità</b>.",
          Title_2: "Distinguiti con attrezzature d’eccellenza",
          Desc: "Collaboro con i <b>brand più affidabili</b> del settore per assicurarti <b>efficienza</b>, <b>facilità d’uso</b> e risultati <b>costanti nel tempo</b>.<br/>Grazie a <b>partnership</b> con aziende leader, come <b>Catabriga</b> per le <b>macchine gelato</b> e <b>Polin, RAM, OSTALI</b> e <b>Longoni</b> per <b>frigoriferi</b>, <b>armadi refrigerati</b>, <b>vetrine</b> e <b>banchi freddi</b>.<br/>Il mio obiettivo è fornirti nel <b>Nord Est</b>:",
          list: [
            "<b>Macchine per gelato</b> di ultima generazione, progettate per mantenere la massima <b>cremosità</b> e garantire la corretta <b>pastorizzazione</b>",
            "<b>Sistemi di refrigerazione</b> e <b>conservazione</b> (<b>armadi</b>, <b>vetrine</b>, <b>banchi freddi</b>) per mantenere il <b>gelato</b> sempre alla <b>temperatura ideale</b>",
            "<b>Soluzioni modulari</b> e <b>personalizzabili</b>, in base allo <b>spazio disponibile</b> e al <b>volume di produzione</b> della tua attività",
          ],
          ImgUrl: "/img/IMG_INIZIALI_MOBILE/IMG_MOB_GELATERIE.png",
        },
      },
      {
        Id: 5,
        Name: "Attrezzature",
        component: {
          BtnText: "Attrezzature",
          Title: "Attrezzature per <br/>Laboratori e Cucine <br/>Professionali",
          Description:
            "Propongo attrezzature professionali pensate per ottimizzare ogni area di lavoro, dalla conservazione alla refrigerazione fino al lavaggio. Ogni soluzione è studiata per aumentare l’efficienza operativa, migliorare la produttività e garantire standard elevati di igiene e qualità.",
          ImgUrl: "/img/IMG_SERVIZI_MOBILE/IMG_SERVIZI_MOB_ATTREZZATURE.png",
          show: [
            {
              shId: 1,
              Brand: "COLDLINE",
              Model: "THAW PRO",
              Description: "DECONGELATORE",
              ImgUrl: "/img/ATTREZZATURE/THAW_PRO.png",
            },
            {
              shId: 2,
              Brand: "HOONVED",
              Model: "HPW 80",
              Description: "LAVAOGGETTI",
              ImgUrl: "/img/ATTREZZATURE/HPW_80.PNG",
            },
            {
              shId: 3,
              Brand: "COLDLINE",
              Model: "MODI",
              Description: "ABBATTITORE",
              ImgUrl: "/img/ATTREZZATURE/ABBATTITORE_MODI.png",
            },
          ],
        },
        pages: {
          Title: "ATTREZZATURE PROFESSIONALI PER LABORATORI E CUCINE",
          SubTitle: "Qualità e innovazione per ogni esigenza professionale",
          Intro:
            "Per ottimizzare il tuo spazio di lavoro e garantire efficienza, offro una selezione di attrezzature professionali dedicate alla conservazione, refrigerazione, lavaggio<br/><br/>Dai banchi refrigerati agli armadi di stoccaggio, ogni soluzione è pensata per migliorare la produttività e mantenere elevati standard di igiene e qualità.",
          Title_2: "Tecnologia al servizio della tua attività",
          Desc: "Collaboro con i migliori marchi di riferimento nel settore per garantirti attrezzature affidabili, performanti e durevoli Hoonved, Mittel, Longoni, Coldline<br/><br/>Che tu gestisca una piccola attività artigianale o una grande produzione, offro soluzioni su misura per:",
          list: [
            "Conservazione e refrigerazione: armadi, banchi e vetrine refrigerate per ingredienti sempre freschi.",
            "Lievitazione e stoccaggio: fermalievitazione, decongelatori e roll-in per una gestione ottimale dell'impasto.",
            "Igiene e lavaggio: lavastoviglie e lavapentole per rispettare i più alti standard di pulizia.",
            "Arredi e acciaio inox: tavoli da lavoro e scaffalature per un ambiente organizzato e funzionale.",
          ],
          ImgUrl: "/img/IMG_INIZIALI_MOBILE/IMG_MOB_ATTREZZATURE.png",
        },
      },
      {
        Id: 6,
        Name: "Arredamento",
        component: {
          BtnText: "Arredamento",
          Title:
            "Arredamenti per <br/>Laboratori e Cucine <br/>Vendita e Progettazione <br/>su Misura",
          Description:
            "Progetto e realizzo arredamenti su misura pensati per ottimizzare ogni ambiente di lavoro professionale. Dalla scelta dei materiali alla disposizione funzionale degli spazi, ogni soluzione è studiata per migliorare il flusso operativo, garantire comfort e durabilità e creare un ambiente efficiente e armonioso. ",
          ImgUrl: "/img/IMG_SERVIZI_MOBILE/IMG_SERVIZI_MOB_ARREDAMENTI.png",
          show: [
            {
              shId: 1,
              ImgUrl: "/img/ARREDAMENTI/ARREDAMENTO_7.png",
            },
            {
              shId: 2,
              ImgUrl: "/img/ARREDAMENTI/ARREDAMENTO_2.png",
            },
            {
              shId: 3,
              ImgUrl: "/img/ARREDAMENTI/ARREDAMENTO_3.png",
            },
          ],
        },
        pages: {
          Title: "ARREDAMENTI SU MISURA E PROGETTAZIONE DI LABORATORI",
          SubTitle:
            "Funzionalità, design e innovazione per il tuo spazio di lavoro",
          Intro:
            "Offro soluzioni complete per l’arredamento e la progettazione di laboratori e cucine professionali.<br/>Dalla scelta dei materiali alla disposizione degli spazi, ogni progetto è studiato per ottimizzare il flusso di lavoro, migliorare l’efficienza e garantire il massimo comfort operativo.<br/>Ogni elemento è pensato per rispondere alle tue esigenze specifiche, con un perfetto equilibrio tra estetica, praticità e resistenza nel tempo.",
          Title_2: "",
          Desc: "",
          list: [],
          ImgUrl: "/img/ARREDAMENTI/IMG_ARREDAMENT0.jpg",
        },
      },
    ],
  };
});
