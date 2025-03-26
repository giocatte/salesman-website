export default defineEventHandler((event) => {
  return {
    products: [
      {
        Id: 1,
        Name: "Panetterie",
        component: {
          BtnText: "Panetterie",
          Title: "Macchine per Panetterie</br>Vendita e Assistenza",
          Description:
            "Vendo <b>macchinari</b> e <b>strumenti</b> progettati per ottimizzare ogni fase della <b>panificazione</b>, dal dosaggio degli ingredienti alla cottura perfetta. Con le <b>migliori attrezzature</b> potrai sperimentare nuove ricette, migliorare la qualità del pane e garantire un prodotto fragrante e irresistibile, giorno dopo giorno.",
          ImgUrl: "/img/PizzaInOven.jpg",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/tmp_Stratos.png",
            },
            {
              shId: 2,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/tmp_Stratos.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/tmp_Stratos.png",
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
          ImgUrl: "/img/PanetterieTemp.png",
        },
      },
      {
        Id: 2,
        Name: "Pasticcerie",
        component: {
          BtnText: "Pasticcerie",
          Title: "Macchine per Pasticcerie</br>Vendita e Assistenza",
          Description:
            "Precisione e creatività si incontrano con le attrezzature giuste. Dagli abbattitori ai forni ventilati, passando per sfogliatrici e planetarie, ogni strumento è pensato per aiutarti a realizzare dolci impeccabili, dalla più soffice crema al più raffinato impasto.",
          ImgUrl: "/img/PizzaInOven.jpg",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/tmp_Stratos.png",
            },
            {
              shId: 2,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/tmp_Stratos.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/tmp_Stratos.png",
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
          ImgUrl: "/img/PanetterieTemp.png",
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
          ImgUrl: "/img/PizzaInOven.jpg",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
            },
            {
              shId: 2,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
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
          ImgUrl: "/img/PanetterieTemp.png",
        },
      },
      {
        Id: 4,
        Name: "Gelaterie",
        component: {
          BtnText: "Gelaterie",
          Title: "Macchine per Gelaterie</br>Vendita e Assistenza",
          Description:
            "Scopri le attrezzature ideali per una produzione artigianale di alta qualità. Dai mantecatori ai banchi espositivi, ogni strumento è pensato per offrirti massima efficienza e libertà creativa. Con macchinari professionali, puoi trasformare ogni ingrediente in gelati e sorbetti unici, capaci di conquistare ogni cliente al primo assaggio.",
          ImgUrl: "/img/PizzaInOven.jpg",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
            },
            {
              shId: 2,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
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
          ImgUrl: "/img/PanetterieTemp.png",
        },
      },
      {
        Id: 5,
        Name: "Arredamento",
        component: {
          BtnText: "Arredamento",
          Title: "Progettazione Arredamenti</br>per Laboratori e Cucine",
          Description:
            "Progetto <b>laboratori</b> e <b>cucine professionali</b> su misura, curando ogni dettaglio per migliorare il <b>flusso di lavoro</b> e garantire un ambiente <b>pratico</b> e <b>confortevole</b>.<br/>Dalla disposizione degli spazi alla scelta dei materiali, ogni elemento è pensato per combinare <b>design moderno</b> e <b>funzionalità</b>.",
          ImgUrl: "/img/PizzaInOven.jpg",
          show: [
            {
              shId: 1,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
            },
            {
              shId: 2,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
            },
            {
              shId: 3,
              Brand: "POLIN",
              Model: "STRATOS OLD STYLE",
              Description: "FORNO PIZZA MODULARE",
              ImgUrl: "/img/PanetterieTemp.png",
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
          ImgUrl: "/img/PanetterieTemp.png",
        },
      },
    ],
  };
});
