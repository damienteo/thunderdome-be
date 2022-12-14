const POKEMON_DETAILS = [
  {
    name: "bulbasaur",
    description: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "ivysaur",
    description: 2,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "venusaur",
    description: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    name: "charmander",
    description: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "charmeleon",
    description: 5,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    name: "caterpie",
    description: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    name: "charizard",
    description: 6,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    name: "wartortle",
    description: 8,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    name: "metapod",
    description: 11,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    name: "squirtle",
    description: 7,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    name: "blastoise",
    description: 9,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    name: "butterfree",
    description: 12,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    name: "weedle",
    description: 13,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    name: "beedrill",
    description: 15,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    name: "kakuna",
    description: 14,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    name: "pidgey",
    description: 16,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    name: "pidgeotto",
    description: 17,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    name: "pidgeot",
    description: 18,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    name: "rattata",
    description: 19,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    name: "spearow",
    description: 21,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  },
  {
    name: "raticate",
    description: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
  {
    name: "fearow",
    description: 22,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  },
  {
    name: "ekans",
    description: 23,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  },
  {
    name: "arbok",
    description: 24,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  },
  {
    name: "pikachu",
    description: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    name: "raichu",
    description: 26,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  },
  {
    name: "sandshrew",
    description: 27,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  },
  {
    name: "sandslash",
    description: 28,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  },
  {
    name: "nidoran-f",
    description: 29,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  },
  {
    name: "nidorina",
    description: 30,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  },
  {
    name: "nidoqueen",
    description: 31,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  },
  {
    name: "nidoran-m",
    description: 32,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  },
  {
    name: "nidorino",
    description: 33,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  },
  {
    name: "nidoking",
    description: 34,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  },
  {
    name: "clefairy",
    description: 35,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  },
  {
    name: "clefable",
    description: 36,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  },
  {
    name: "vulpix",
    description: 37,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  },
  {
    name: "ninetales",
    description: 38,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  },
  {
    name: "jigglypuff",
    description: 39,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    name: "wigglytuff",
    description: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  },
  {
    name: "zubat",
    description: 41,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  },
  {
    name: "golbat",
    description: 42,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  },
  {
    name: "oddish",
    description: 43,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  },
  {
    name: "gloom",
    description: 44,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  },
  {
    name: "vileplume",
    description: 45,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  },
  {
    name: "paras",
    description: 46,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  },
  {
    name: "parasect",
    description: 47,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  },
  {
    name: "venonat",
    description: 48,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  },
  {
    name: "arcanine",
    description: 59,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  },
  {
    name: "venomoth",
    description: 49,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  },
  {
    name: "diglett",
    description: 50,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  },
  {
    name: "dugtrio",
    description: 51,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  },
  {
    name: "meowth",
    description: 52,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    name: "persian",
    description: 53,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  },
  {
    name: "psyduck",
    description: 54,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    name: "golduck",
    description: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  },
  {
    name: "primeape",
    description: 57,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  },
  {
    name: "growlithe",
    description: 58,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  },
  {
    name: "poliwag",
    description: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  },
  {
    name: "poliwhirl",
    description: 61,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  },
  {
    name: "poliwrath",
    description: 62,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  },
  {
    name: "mankey",
    description: 56,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  },
  {
    name: "abra",
    description: 63,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  },
  {
    name: "kadabra",
    description: 64,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  },
  {
    name: "alakazam",
    description: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  },
  {
    name: "machop",
    description: 66,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  },
  {
    name: "machoke",
    description: 67,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  },
  {
    name: "machamp",
    description: 68,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  },
  {
    name: "bellsprout",
    description: 69,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
  },
  {
    name: "weepinbell",
    description: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  },
  {
    name: "victreebel",
    description: 71,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  },
  {
    name: "tentacool",
    description: 72,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
  },
  {
    name: "tentacruel",
    description: 73,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  },
  {
    name: "geodude",
    description: 74,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  },
  {
    name: "graveler",
    description: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  },
  {
    name: "golem",
    description: 76,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  },
  {
    name: "ponyta",
    description: 77,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
  },
  {
    name: "rapidash",
    description: 78,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
  },
  {
    name: "slowpoke",
    description: 79,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
  },
  {
    name: "slowbro",
    description: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
  {
    name: "magnemite",
    description: 81,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  },
  {
    name: "magneton",
    description: 82,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  },
  {
    name: "farfetchd",
    description: 83,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
  },
  {
    name: "doduo",
    description: 84,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
  },
  {
    name: "dodrio",
    description: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
  },
  {
    name: "seel",
    description: 86,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
  },
  {
    name: "dewgong",
    description: 87,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
  },
  {
    name: "grimer",
    description: 88,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
  },
  {
    name: "muk",
    description: 89,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
  },
  {
    name: "shellder",
    description: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
  },
  {
    name: "cloyster",
    description: 91,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
  },
  {
    name: "gastly",
    description: 92,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  },
  {
    name: "haunter",
    description: 93,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  },
  {
    name: "gengar",
    description: 94,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  {
    name: "onix",
    description: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  },
  {
    name: "drowzee",
    description: 96,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
  },
  {
    name: "hypno",
    description: 97,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
  },
  {
    name: "krabby",
    description: 98,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
  },
  {
    name: "kingler",
    description: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
  },
  {
    name: "voltorb",
    description: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  },
  {
    name: "electrode",
    description: 101,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
  },
  {
    name: "exeggcute",
    description: 102,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
  },
  {
    name: "exeggutor",
    description: 103,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
  },
  {
    name: "cubone",
    description: 104,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
  },
  {
    name: "marowak",
    description: 105,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  },
  {
    name: "hitmonlee",
    description: 106,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  },
  {
    name: "hitmonchan",
    description: 107,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
  },
  {
    name: "lickitung",
    description: 108,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
  },
  {
    name: "koffing",
    description: 109,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
  },
  {
    name: "weezing",
    description: 110,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
  },
  {
    name: "rhyhorn",
    description: 111,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
  },
  {
    name: "rhydon",
    description: 112,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
  },
  {
    name: "chansey",
    description: 113,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
  },
  {
    name: "tangela",
    description: 114,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
  },
  {
    name: "kangaskhan",
    description: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
  },
  {
    name: "horsea",
    description: 116,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
  },
  {
    name: "seadra",
    description: 117,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
  },
  {
    name: "goldeen",
    description: 118,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
  },
  {
    name: "seaking",
    description: 119,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  },
  {
    name: "staryu",
    description: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
  },
  {
    name: "starmie",
    description: 121,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
  },
  {
    name: "mr-mime",
    description: 122,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
  },
  {
    name: "scyther",
    description: 123,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  },
  {
    name: "jynx",
    description: 124,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  },
  {
    name: "electabuzz",
    description: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
  },
  {
    name: "magmar",
    description: 126,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
  },
  {
    name: "pinsir",
    description: 127,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
  },
  {
    name: "tauros",
    description: 128,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
  },
  {
    name: "magikarp",
    description: 129,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
  },
  {
    name: "gyarados",
    description: 130,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  },
  {
    name: "lapras",
    description: 131,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  },
  {
    name: "ditto",
    description: 132,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
  {
    name: "eevee",
    description: 133,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    name: "vaporeon",
    description: 134,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  },
  {
    name: "jolteon",
    description: 135,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  },
  {
    name: "flareon",
    description: 136,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  },
  {
    name: "porygon",
    description: 137,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
  },
  {
    name: "omanyte",
    description: 138,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
  },
  {
    name: "omastar",
    description: 139,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
  },
  {
    name: "kabuto",
    description: 140,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
  },
  {
    name: "kabutops",
    description: 141,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
  },
  {
    name: "aerodactyl",
    description: 142,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
  },
  {
    name: "snorlax",
    description: 143,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  },
  {
    name: "articuno",
    description: 144,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
  },
  {
    name: "zapdos",
    description: 145,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  },
  {
    name: "moltres",
    description: 146,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
  },
  {
    name: "dratini",
    description: 147,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  },
  {
    name: "dragonair",
    description: 148,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
  },
  {
    name: "dragonite",
    description: 149,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  },
  {
    name: "mewtwo",
    description: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    name: "mew",
    description: 151,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
  },
];

export default POKEMON_DETAILS;
