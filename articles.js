
export const articles = [
    {
        label: "Artikel 1: Cheats",
        description: "Het gebruik maken van software (van derde partijen) om een voordeel in het spel te krijgen is niet toegestaan. Hieronder vallen o.a. cheats/hacks.",
        punishmentCategory: "8",
        subarticles: [
            {
                label: "Artikel 1A: Externe Software",
                description: "Het gebruik maken van instellingen/programma's waardoor je voordelen krijgt is niet toegestaan. Denk aan kill effecten en tracers.",
                list: [
                   "Het moedwillig dupliceren van ingame items.",
                   "Het niet aangeven van gedupliceerde items na server restarts/crashes of bij directe constatering.",
                   "Het gebruik maken van een emote om aan de andere kant van een muur/deur te komen of uit te breken van bijvoorbeeld de gevangenis en/of te gebruiken om te ontsnappen.",
                   "Handelingen uitvoeren terwijl je dood bent.",
                   "Reloggen om zo weer meer health er bij te krijgen.",
                   "De bug ‘one punch’ zal bestraft worden met een straf volgens de 5de categorie.",
                   "Wanneer er sprake is van gedupliceerde items/geld, volgt er een straf van zowel de 7de als de 8ste categorie."
                ],
                punishmentCategory: "7"
            }
        ]
    },
    {
        label: "Artikel 2: Exploits/Bugs",
        description: "Hieronder wordt verstaan het doelbewust gebruik maken van een bug/exploit die in jou of andermans voordeel werkt.",
        list: [
            "Het moedwillig dupliceren van ingame items.",
            "Het niet aangeven van gedupliceerde items na server restarts/crashes of bij directe constatering.",
            "Het gebruik maken van een emote om aan de andere kant van een muur/deur te komen of uit te breken van bijvoorbeeld de gevangenis en/of te gebruiken om te ontsnappen.",
            "Handelingen uitvoeren terwijl je dood bent.",
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
            }
        ]
    }
    // Hier zou de rest van de artikelen volgen (ik plaats er een paar ter voorbeeld)
];
