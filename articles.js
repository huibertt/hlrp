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
    description: "Onder dit artikel vallen alle zaken die als bedreigend of intimiderend kunnen worden ervaren. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen:",
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
    description: "Het bewust veranderen van een scenario, door onrealistische/onmogelijke componenten toe te voegen waardoor het voor de andere partij niet uit te spelen is. Hieronder enkele voorbeelden, maar deze regel is niet beperkt tot deze voorbeelden:",
    list: [
      "Het vluchten in je appartement/greenzones/loods tijdens een scenario.",
      "Tijdens een achtervolging met zowel onder- als bovenwereld je auto wegzetten in een garage. Wil je in een achtervolging van auto willen wisselen? Dan moet je de oude auto laten staan.",
      "Je auto wegzetten tijdens een scenario.",
      "Binnen 10 minuten na het trekken van je wapen je wapen wegleggen of uit de stad gaan. Valt ook onder combatloggen.",
      "Een speler meenemen naar het eiland om hem daar te doden, of te kunnen rippen van zijn ongeziene wapen.",
      "Gebruik maken van het Z menu om de ID's van andere spelers te zien door muren, in bosjes, in auto's etc.",
      "Emotes gebruiken wanneer je beschoten wordt. (Emote abuse)",
      "Het liggen op een locatie om vervolgens in third person te kunnen kijken en zo niet op te vallen.",
      "Iemand vastbinden met F6 zonder geldige reden.",
      "Iemand fouilleren met F6 zonder geldige reden/zonder wapen.",
      "In een shootout je handen omhoog doen om zo te forceren dat je niet doodgeschoten mag worden door een agent.",
      "Onder dwang iemand iets uit zijn huis laten halen.",
      "Onder dwang iemand zijn auto uit de garage laten halen. Behalve wanneer je die auto eerder hebt gezien, en je aantoonbaar een achtervolging bent gestart.",
      "Het is niet toegestaan om de politie te forceren om een persoon af te fouilleren en af te geven."
    ],
    punishmentCategory: "4"
  },
  {
    label: "Artikel 7: OOC / Karakter breken",
    description: "Het is nooit toegestaan om karakter te breken. Out of character gaan is dus niet de bedoeling, ook niet als er iets gebeurd wat tegen de APV is. Ook woorden als 'goden', 'staff', 'broodje', 'tickets', 'refund', 'bug', 'vakantie' enzovoorts.",
    list: [
      "Het is alleen toegestaan om de Nederlandse of Engelse taal te typen/spreken in Haarlem.",
      "OOC gaan in porto."
    ],
    punishmentCategory: "3"
  },
  {
    label: "Artikel 8: Copbaiten",
    description: "Onder dit artikel vallen de onderstaande zaken. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen:",
    list: [
      "Het uitlokken van reactie van overheidsdiensten.",
      "Het uitlokken/aangaan van achtervolgingen zonder illegale goederen/wapens/gezochtstatus te hebben.",
      "Het schieten op agenten zonder duidelijk aanwijsbare reden.",
      "Het verstoren van een scenario van agenten, denk daarbij aan het telkens heen en weer rijden bij een overval.",
      {
        sublist: [
          "Het mengen in scenario mag alleen van personen in dezelfde gang",
        ]
      },
    ],
    punishmentCategory: "2"
  },
  {
    label: "Artikel 9: No value of life (NVOL)",
    description: "Het is verplicht waarde te hechten aan je leven. Enkele voorbeelden van NVOL vind je hieronder:",
    list: [
      "Het moedwillig beëindigen van je eigen leven of dat van een ander.",
      "Het indrukken van de noodknop en/of het (meermaals) indrukken van de porto terwijl er een wapen op je gericht staat.",
      "Het uitlokken/aangaan van achtervolgingen zonder illegale goederen/wapens/gezochtstatus te hebben.",
      "Het schieten op agenten zonder duidelijk aanwijsbare reden.",
      "Het verstoren van een scenario van agenten, denk daarbij aan het telkens heen en weer rijden bij een overval.",
      {
        sublist: [
          "Het mengen (dus niet verstoren) in scenario mag alleen van personen in dezelfde gang.",
        ]
      },
      "Het niet meewerken wanneer er binnen de <strong>derde praatcirkel</strong> (shouting/schreeuwen) daadwerkelijk een vuurwapen op je gericht staat.",
      "Het niet meewerken wanneer er binnen armlengte een slag- of steekwapen op je gericht staat.",
      "Het niet meewerken wanneer er (buiten een gesloten voer-, vaar- of vliegtuig) een taser op je gericht staat",
      "Het actie ondernemen wanneer iemand zijn wapen laat zakken om gebruik te maken van zijn F6 menu, het typen in /me of gebruik te maken van het derde oog (ALT).",
      "Elke andere vorm waarin je jouw leven bewust in een te groot gevaar brengt valt onder dit artikel.",
      {
        sublist: [
          "Indien dit artikel meer dan twee keer op jouw naam staat, wordt er naast een ban elke opvolgende keer je wapen ingenomen.",
        ]
      },
    ],
    punishmentCategory: "4"
  },  
  {
    label: "Artikel 10: New life rule",
    description: "Wanneer een speler is doodgegaan in een scenario, dient een speler alles te vergeten uit dat specifieke scenario en de aanloop er naar toe. Je kan niet meer deelnemen aan dat scenario, en mag dus ook niet meer teruggaan naar de plek als het scenario zich daar nog bevind of om wraak te nemen. Ditzelfde geld voor een scenario verdeeld over meerdere dagen.",
    punishmentCategory: "3"
  },
  {
    label: "Artikel 11: Microfoon",
    description: "Iedere speler die speelt in onze stad is verplicht een microfoon te hebben en die ook te gebruiken. Mocht je hiervoor een sanctie ontvangen dien je te bewijzen, na het maken van een afspraak met een stafflid, dat je microfoon weer werkend is. Daarnaast is het verplicht om push to talk te gebruiken in de stad, zodat anderen geen last hebben van jouw achtergrond geluid.",
    punishmentCategory: "2",
    subarticles: [
      {
        label: "Artikel 11A: Voice changer en soundpad",
        description: "Het is voor een ieder toegestaan een voice changer te gebruiken, mits je voldoet aan onderstaande eisen:",
        list: [
          "Het is passend in de roleplay.",
          "In geval van stemvervorming om anoniem te blijven dien je een masker op te hebben die je mond bedekt.",
          "Als je gebruik wil maken van een soundpad is het niet toegestaan dit overmatig te gebruiken.",
        ],
        punishmentCategory: "1"
      },
      {
        label: "Artikel 11B: Earrape",
        description: "Het is niet toegestaan om anderen tot last te zijn met je microfoon, voicechanger of soundpad door overmatig of extreem luid gebruik te maken van voornoemde middelen.",
        punishmentCategory: "2"
      }
    ]
  },
  {
    label: "Artikel 12: VDM",
    description: "Onder VDM (Vehicle Deathmatch) wordt verstaan dat het niet toegestaan is je voer-, vaar- of vliegtuig te gebruiken als wapen. Hieronder vallen onderstaande voorbeelden, maar is niet beperkt tot deze gevallen.",
    list: [
      "Het rammen van andere voertuigen.",
      "Het rammen van andere burgers.",
      "Het rijdend blokkeren van op jou afkomende voertuigen. Bij een blokkade moet jij <strong>altijd stilstaan</strong>.",
      "Het pitten op een onjuiste manier.",
      {
        sublist: [
          "Afhankelijk van de ernst van de situatie kan een stafflid een hogere sanctie opleggen.",
        ]
      },
    ],
    punishmentCategory: "3"
  },
  {
    label: "Artikel 13: RDM",
    description: "Onder RDM (Random Deathmatch) wordt verstaan dat het niet toegestaan is burgers te vermoorden zonder aanleiding. <strong>Geldige redenen</strong> kunnen zijn, maar zijn niet beperkt tot:",
    list: [
      "Het in grove mate uitdagen in de stad, via de telefoon of via de sociale media die de stad gebruikt. Zorg hier voor voldoende en sluitend bewijs.",
      "Het in grove mate uitdagen in de stad van een organisatie.",
      "Verbaal provoceren is totaal op eigen risico, en kan gezien de omstandigheid vallen onder NVOL (artikel 9).",
      "Een lid verlaat jouw gang, echter moet dit <strong>binnen 48 uur</strong> na het moment van verlaten van de gang beslecht worden.",
      {
        sublist: [
          "Het is niet toegestaan iemand te vermoorden voor de volgende zaken/op de volgende manieren. <strong>Ongeldige redenen/manieren</strong> kunnen zijn, maar zijn niet beperkt tot:",
        ]
      },
      "Iemand die niet voldoet aan het commando om vernederende dingen te doen, zoals 'blaffen', 'zingen' of 'dansen'.",
      "Het in grove mate uitdagen in de stad van een organisatie.",
      "Kill on sight.",
      {      
        sublist: [
          "Afhankelijk van de ernst van de situatie kan een stafflid een hogere sanctie opleggen. Indien dit artikel meer dan twee keer op jouw naam staat, wordt er naast een ban elke opvolgende keer je wapen ingenomen.",
        ]
      },
    ],
    punishmentCategory: "3"
  },
  {
    label: "Artikel 14: Metagamen",
    description: "Informatie verkregen buiten de game, mag niet ingame gebruikt worden (met uitzondering van 'in karakter' kanalen in de officiële Haarlem discords). Verder hanteren wij de volgende regels:",
    list: [
      "Wanneer je in Haarlem zit is het niet toegestaan om te screensharen.",
      "Wanneer je in Haarlem zit is het niet toegestaan om een prive stream te hebben. Deze moet openbaar zijn en deze moet HaarlemRP of Haarlem Roleplay in de titel hebben.
      "Wanneer je in Haarlem zit is het niet toegestaan te praten in je oortje terwijl je in scenario zit. Je moet dus gemute zitten.",
      "Het is niet toegestaan om ingame informatie te versturen via Discord. (met uitzondering van 'in karakter' kanalen in de officiële Haarlem discords)",
    ],
    punishmentCategory: "3"
  },
  {
    label: "Artikel 15: Voertuig gebruik",
    description: "Naast de bepalingen die besproken zijn in artikel 12: VDM, gelden de onderstaande regels. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen:",
    list: [
      "Een voertuig mag geen hogere categorie pitten of brake checken.",
      "Wij hanteren de volgende volgorde in klasses, van groot naar klein:",
      {
        sublist: [
          "Vrachtwagens, 6x6 aangedreven voertuigen",
          "Busjes",
          "SUV's",
          "Personenauto's",
          "Sportauto's",
          "Hypercars",
        ]
      },
      "Brakechecken is toegestaan indien dit realistisch blijft. Wanneer jij iemand brake checkt, is dit op eigen risico! Het is niet mogelijk om hiervoor een refund aan te vragen indien dit nadelig uitpakt voor jou.",
      "Alle voertuigen mogen op gebaande paden rijden. Dit zijn paden die ook op je map staan, met uitzondering van kleine, steile zandpaden (bijv. die bij Mount Chiliad).",
      "Alleen offroaders mogen offroad. Offroad banden maken hierin niks uit.",
      "Het is niet toegestaan gebouwen te betreden met voertuigen die daarvoor niet geschikt zijn.",
      "Het is niet toegestaan om een motor te pitten.",
      "Het is niet toegestaan om een lesauto voor andere doeleinden te gebruiken dan je rijbewijs te halen.",
    ],
    punishmentCategory: "1",
    subarticles: [
      {
        label: "Artikel 15A: GTA rijstijl",
        description: "Het onjuist gebruik van je voertuig, door onrealistisch rijgedrag. Enkele voorbeelden van GTA rijstijl zijn:",
        list: [
          "Stunt jumps over ramps, bergen of gebouwen.",
          "Onrealistisch offroad rijden.",
          "Het rammen of onnodig beuken van voertuigen.",
          "Het gebruik maken van obstakels om ergens overheen te jumpen."
          "Wanneer je 1 of meerdere lekke banden hebt, mag je niet harder dan 150 km/h rijden.",
        ],
        punishmentCategory: "2"
      }
    ]
  },
  {
    label: "Artikel 16: Illegale activiteiten via social media",
    description: "Het uitvoeren van criminele activiteiten via social media is niet toegestaan. Voorbeelden hiervan zijn:",
    list: [
      "Vragen om of het aanbieden van:",
      {
        sublist: [
          "Witwas",
          "Locaties",
          "Wapens",
          "Drugs",
          "Aanwezigheid van gangs",
        ]
      },
      "Het is daarnaast niet toegestaan om synoniemen of vervormingen van bovenstaande woorden te gebruiken. Denk aan 'snoepjes', 'honkbal spullen', 'poedersuiker' of 'sokken wassen'.",
    ],
    punishmentCategory: "3"
  },



];







// Wanneer een speler uit een gang gaat, of word gekickt hebben beide partijen 48 uur de tijd om elkaar (speler of gang) te vermoorden met deze reden. Anders valt het onder RDM.



//      "Het pitten boven de 160 km/h.",

//suggesties op het kopje: ARtikel 13: RDM, Artikel 5: Fail RP en dan vooral de snelheden, 15A lekke band 150km/h.
//sleutelpunten veranderingen:
//Pitten 160 kmh (VDM)
//Nvol derde praatcirkel
//
