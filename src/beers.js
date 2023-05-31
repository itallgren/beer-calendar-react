const beers = [
  {
    id: 1,
    name: "Lapin Kulta Original",
    category: "Lager",
    rating: 7,
    comment: "Mycket godare än den som började tillverkas 1963. Mera smak.",
    imageUrl:
      "/images/original-lapland-lager.webp",
  },
  {
    id: 2,
    name: "Kronenbourg 1664 Blanc",
    category: "Weissbier",
    rating: 8.5,
    comment: "Gammal bekant. God!",
    imageUrl:
      "/images/blanc.webp",
  },
  {
    id: 3,
    name: "Sininen Pils",
    category: "Lager",
    rating: 6,
    comment: "Lite bättre än vanlig öl som Lapin Kulta, Koff etc.",
    imageUrl:
      "/images/sininen.webp",
  },
  {
    id: 4,
    name: "Fiskarsin Panimo Wild Berry Sour",
    category: "Sour",
    rating: 2,
    comment:
      "Intressant. Fruktig, men inte i min smak. Dock kul att ha testat den.",
    imageUrl:
      "/images/wild-berry-sour.webp",
  },
  {
    id: 5,
    name: "Peroni Nastro Azzuro",
    category: "Lager",
    rating: 6,
    comment: "En ljus, god lager. Lättdrucken.",
    imageUrl:
      "/images/peroni.webp",
  },
  {
    id: 6,
    name: "Franziskaner Hefe-Weissbier",
    category: "Weissbier",
    rating: 8.5,
    comment: "En mycket god weissbier som är en gammal bekant.",
    imageUrl:
      "/images/franziskaner-weissbier.webp",
  },
  {
    id: 7,
    name: "Bock's Oktoberfest",
    category: "Lager",
    rating: 9,
    comment: "Hittills bäst. Mustig smak. Lite mörkare ton i färgen.",
    imageUrl:
      "/images/bocks-oktoberfest.webp",
  },
  {
    id: 8,
    name: "Lahden Erikois Vehnä",
    category: "Weissbier",
    rating: 8,
    comment: "En god veteöl från Finland.",
    imageUrl:
      "/images/lahden-erikois.webp",
  },
  {
    id: 9,
    name: "Tornion Panimo North Arctic Neipa",
    category: "IPA",
    rating: 4,
    comment:
      "Första tanken var att den var för fruktig och blir låga betyg men sakta men säkert blir den bättre.",
    imageUrl:
      "/images/north-arctic-ipa.webp",
  },
  {
    id: 10,
    name: "Aura",
    category: "Lager",
    rating: 8,
    comment: "Mycket god lager",
    imageUrl: "/images/aura.webp",
  },
  {
    id: 11,
    name: "Staropramen",
    category: "Pilsner",
    rating: 9,
    comment: "Tjeckerna kan laga öl! Gott. Speciellt efter bastun. Wunderbar.",
    imageUrl:
      "/images/staropramen.webp",
  },
  {
    id: 12,
    name: "Big Wave Ale",
    category: "Ale",
    rating: 7,
    comment: "Faktiskt riktigt god ale. Börjat tycka om ale mer o mer.",
    imageUrl:
      "/images/big-wave.webp",
  },
  {
    id: 13,
    name: "Hoegaarden Witbier",
    category: "Weissbier",
    rating: 8.5,
    comment: "En god veteöl. Gillar och dricker en gärna igen.",
    imageUrl:
      "/images/hoegaarden.webp",
  },
  {
    id: 14,
    name: "Tornion Panimo North Arctic Lager",
    category: "Lager",
    rating: 9,
    comment: "Mycket god lager. Rekommenderar.",
    imageUrl: "/images/north-arctic-lager.webp",
  },
  {
    id: 15,
    name: "Kvarken Brewery Czech Pils",
    category: "Pilsner",
    rating: 9,
    comment: "En öl i min smak.",
    imageUrl:
      "/images/kvarken-czech.webp",
  },
  {
    id: 16,
    name: "Sol",
    category: "Lager",
    rating: 8.5,
    comment:
      "Sol är gott. Dock tror jag att den fick högre betyg pga. maten som passade utmärkt till en latinoöl, nämligen tacogratäng.",
    imageUrl:
      "/images/sol.webp",
  },
  {
    id: 17,
    name: "Daring Daughter Tropical Lager",
    category: "Lager",
    rating: 7,
    comment:
      "Jag gillar öl, och jag gillar olika slags öl. Kanske lite för fruktig till entrecôte och pommes.",
    imageUrl: "/images/daring-daughter.webp",
  },
  {
    id: 18,
    name: "Hoppy Amber Lager Brooklyn Lager",
    category: "Lager",
    rating: 7,
    comment: "En god, mörkare, lager.",
    imageUrl:
      "/images/brooklyn-lager.webp",
  },
  {
    id: 19,
    name: "Põhjala",
    category: "Porter",
    rating: 2,
    comment:
      "Jag hann skryta igår att jag gillar all öl. Nu tar jag tillbaka min kommentar. Denna föll mig inte i smaken.",
    imageUrl:
      "/images/pohjala.webp",
  },
  {
    id: 20,
    name: "Stella Artois",
    category: "Lager",
    rating: 6,
    comment: "Ingen dunderbira, helt okej lager men inget mer än så",
    imageUrl:
      "/images/stella-artois.webp",
  },
  {
    id: 21,
    name: "Kvarken Watchman",
    category: "Pilsner",
    rating: 9,
    comment: "Kanske den godaste hittills. ¡Fantastico! ¡Muy bien!",
    imageUrl:
      "/images/watchman-pilsner.webp",
  },
  {
    id: 22,
    name: "Brewdog Pale Ale",
    category: "Ale",
    rating: 8,
    comment: "Har börjat gilla ale/pale ale mer och mer.",
    imageUrl: "/images/brewdog-pale-ale.webp",
  },
  {
    id: 23,
    name: "Brooklyn Bel Air Sour",
    category: "Sour",
    rating: 0,
    comment:
      "Troligen den värsta öl jag nånsin druckit! Rekommenderar inte ens till mina värsta fiender.",
    imageUrl:
      "/images/brooklyn-bel-air-sour.webp",
  },
  {
    id: 24,
    name: "Lahden Erikois Joulu",
    category: "Lager",
    rating: 7.5,
    comment:
      "En mörk öl som var överraskande god. Mörka öl kan faktiskt vara riktigt goda.",
    imageUrl:
      "/images/lahden-erikois.webp",
  },
];

export default beers;
