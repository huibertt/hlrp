export const articles = [
  {
    label: "Artikel 1: Cheats",
    description: "Het gebruik maken van software (van derde partijen) om een voordeel in het spel te krijgen is niet toegestaan. Hieronder vallen o.a. cheats/hacks.",
    punishmentCategory: "8",
    subarticles: [
      {
        label: "Artikel 1A: Externe Software",
        description: "Het gebruik maken van instellingen/programma's waardoor je voordelen krijgt is niet toegestaan. Hier vallen o.a. de volgende zaken onder:",
        list: [
          "Crosshair - zowel software als hardware",
          "Aangepaste schermresolutie (enige toegestane resoluties zijn AUTO, 16:9 en 16:10)",
          "Reshade",
          "Kill effects",
          "Tracers"
        ],
        punishmentCategory: "7"
      }
    ]
  },
  {
    label: "Artikel 2: Exploits/Bugs",
    description: "Hieronder wordt verstaan het doelbewust gebruik maken van een bug/exploit die in jou of andermans voordeel werkt.",
    list: [
      "Het dupliceren van ingame items, zonder dit te melden.",
      "Het niet aangeven van gedupliceerde items na server restarts/crashes of bij directe constatering.",
      "Het gebruik maken van een emote om aan de andere kant van een muur/deur te komen of uit te breken van bijvoorbeeld de gevangenis.",
      "Handelingen uitvoeren terwijl je dood bent. Hieronder valt ook praten in /me of het gebruik van emotes.",
      "Reloggen om zo weer meer health er bij te krijgen.",
      "De bug ‘one punch’ zal bestraft worden met een straf volgens de 5de categorie.",
      "Wanneer er sprake is van gedupliceerde items/geld, volgt er een straf van zowel de 7de als de 8ste categorie."
    ],
    punishmentCategory: "7",
    subarticles: [
      {
        label: "Artikel 2A: IRL Trade",
        description: "Het verhandelen van items, valuta, diensten en/of accounts voor echt geld is verboden.",
        punishmentCategory: "10"
      }
    ]
  },
  {
    label: "Artikel 3: Alt Characters",
    description: "Onder een alt character wordt verstaan dat een persoon meerdere accounts aanmaakt om binnen de stad Haarlem te spelen.",
    list: [
      "Het is verboden om een alt account aan te maken om vervolgens het banksaldo van dit account te overhandigen aan een speler, op welke manier dan ook.",
      "Het is niet toegestaan te spoofen om op die manier weer toegang te krijgen tot je account op Haarlem."
    ],
    punishmentCategory: "8",
    subarticles: [
      {
        label: "Artikel 3A: Startersgeld",
        list: [
          "Het is niet toegestaan startersgeld aan anderen te geven zonder enige bedoeling zelf te gaan spelen.",
          "Het is niet toegestaan om de speeltijd zonder enige doel af te wachten en dan als nog geld over te maken zonder doel te hebben langer te gaan spelen."
        ],
        punishmentCategory: "8"
      },
      {
        label: "Artikel 3B: Starterspakket",
        description: "Het dwingen van nieuwe spelers om het starterspakket te claimen, om die al dan niet te rippen.",
        punishmentCategory: "4"
      }
    ]
  },
  {
    label: "Artikel 4: Dreigen en intimideren",
    description: "Onder dit artikel vallen alle zaken die als bedreigend of intimiderend kunnen worden ervaren. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen.",
    list: [
      "Dreigen met of daadwerkelijk 'doxen' van personen.",
      "Dreigen met of daadwerkelijk 'DDOSsen' van personen.",
      "Dreigen met of daadwerkelijk bedreigen van personen."
    ],
    punishmentCategory: "8"
  },
  {
    label: "Artikel 5: Fail RP",
    description: "Onder deze regel vallen alle facetten die als onrealistisch kunnen worden beschouwd. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen. Vraag je tijdens het spelen in onze stad altijd af: 'Zou dit in het echt ook op deze manier kunnen gebeuren?'.",
    punishmentCategory: "4",
    list: [
      "Het roleplay scenario vermijden tijdens ernstige verwondingen met andere burgers of overheidsdiensten.",
      "Het roleplay scenario vermijden/niet uitspelen van verwondingen tijdens ernstige aanrijdingen met andere burgers of overheidsdiensten. Deze bepaling is niet exclusief en sluit andere gevallen niet uit.",
      {
        sublist: [
          "Met 80 km/h over de kop raken met je voertuig, ook al land je hem op de wielen.",
          "Met 80 km/h crashen tegen onverwoestbare objecten. (gebouwen, palen of props die NIET kapot gaan)",
          "Met 120 km/h crashen tegen andere voertuigen.",
          "Met 80 km/h crashen met een motor.",
          "Met 80 km/h van je motor afgeschoten worden.",
          "Crash effect hebben.",
          "Alle andere vormen die ook als GTA rijstijl gezien kunnen worden, zoals stuntjumps of je auto die (al dan niet bewust) door de lucht vliegt."
        ]
      },
      "(Overmatig) gebruik van ongepaste emotes.",
      "Praten in de porto of bellen onder water.",
      "Onjuist gebruik maken van een F6 menu tijdens scenarios.",
      "Zonder goede reden iemand zijn band lek steken/schieten.",
      "Het schieten op voertuigen van spelers zonder enige aanleiding of reden zonder <strong>minimaal 3 keer duidelijk (mondeling/verbaal) te waarschuwen</strong> met een tijd tussen de waarschuwingen van ten minste 30 seconden. Daarnaast moet je eerst proberen het voertuig tot stilstand te brengen door te pitten.",
      "Het stelen van een voertuig wanneer iemand bezig is met zijn voertuig. Deze regel is van toepassing op onderstaande handelingen, maar kan ook breder geïnterpreteerd worden.",
      {
        sublist: [
          "Inladen",
          "Uitladen",
          "Tanken",
          "Repareren"
        ]
      },
      "Praten/communiceren op wat voor manier dan ook, terwijl je dood bent.",
      "Het campen op locaties die veel spelers trekken (drugslocaties, appartementen, garages, greenzones, bosjes) in de stad of op het eiland, waardoor je je langdurig (langer dan 2 minuten) op die locatie begeeft, met als doel het ten uitvoer brengen van illegale activiteiten zal worden bestraft met een straf uit de <strong>3de categorie</strong>. Enkele voorbeelden zijn:",
      {
        sublist: [
          "Wachten in een bosje, om als er een mule uit de garage wordt gehaald eropaf te lopen om goederen te ontvreemden.",
          "Wachten in het openbaar, om een voertuig mee te nemen welke niet van jou is om die vervolgens leeg te halen.",
          "Wachten in een bosje, om vervolgens mensen te rippen van hun goederen of wapens.",
          "Wachten in het openbaar, op drugs- of witwaslocaties om vervolgens personen te rippen van hun goederen"
        ]
      },
      "Een scenario waarin je je eigen belang boven dat van een ander zet, of waarbij de roleplay van andere ingevuld wordt voor eigen belang en leidt tot onrealistische dwang welke een scenario onredelijk veranderd, zal worden gezien als een combinatie van Powergaming en FailRP.",
      "Indien een speler totaal geen intentie heeft om te roleplayen, kan een straf worden gegeven tot de 8e categorie.",
      "Wanneer je gevorderd wordt door een overheidsinstantie, dien je hieraan te voldoen. Mocht je aan deze vorderingen niet voldoen en je verstoord hierdoor een scenario, zal dit leiden tot een straf tot de 3e categorie.",
      "Als een heli beschoten wordt, en de impact is te zien/horen op de heli, dient de heli af te koppelen en te landen om deze te inspecteren en te repareren. Pas dan mag er weer verder gevlogen worden."   
    ]
  },
  {
    label: "Artikel 6: Powergamen",
    description: "Het bewust veranderen van een scenario, door onrealistische/onmogelijke componenten toe te voegen waardoor het voor de andere partij niet uit te spelen is.",
    list: [
      "Het roleplay scenario vermijden tijdens ernstige verwondingen met andere burgers of overheidsdiensten.",
      "Het roleplay scenario vermijden/niet uitspelen van verwondingen tijdens ernstige aanrijdingen    
    ],
    punishmentCategory: "3",


  }
];
