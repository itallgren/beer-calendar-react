const beers = [
  {
    id: 1,
    name: "Lapin Kulta Original",
    category: "Lager",
    rating: 7,
    comment: "Mycket godare än den som började tillverkas 1963. Mera smak.",
    imageUrl:
      "https://i.ibb.co/VQ4xzYf/01original-to-cc-88lkki-330-2-removebg-preview.png",
  },
  {
    id: 2,
    name: "Kronenbourg 1664 Blanc",
    category: "Weissbier",
    rating: 5,
    comment: "Gammal bekant. God!",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/785294/kronenbourg-1664-blanc.jpg",
  },
  {
    id: 3,
    name: "Sininen Pils",
    category: "Lager",
    rating: 6,
    comment: "Lite bättre än vanlig öl som Lapin Kulta, Koff etc.",
    imageUrl:
      "https://www.hartwall.fi/globalassets/hartwall.fi/juomat/oluet/sininen/sininen-50cl-tolkki-.png",
  },
  {
    id: 4,
    name: "Fiskarsin Panimo Wild Berry Sour",
    category: "Sour",
    rating: 2,
    comment:
      "Intressant. Fruktig, men inte i min smak. Dock kul att ha testat den.",
    imageUrl:
      "https://www.viinikartta.fi/media/item_images/alko/FIN/w959218_alko.jpg",
  },
  {
    id: 5,
    name: "Peroni Nastro Azzuro",
    category: "Lager",
    rating: 6,
    comment: "En ljus, god lager. Lättdrucken.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/755404/peroni-nastro-azzurro.jpg",
  },
  {
    id: 6,
    name: "Franziskaner Hefe-Weissbier",
    category: "Weissbier",
    rating: 8.5,
    comment: "En mycket god weissbier som är en gammal bekant.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/009475/franziskaner-hefe-weissbier.jpg",
  },
  {
    id: 7,
    name: "Bock's Oktoberfest",
    category: "Lager",
    rating: 9,
    comment: "Hittills bäst. Mustig smak. Lite mörkare ton i färgen.",
    imageUrl:
      "https://public.keskofiles.com/f/k-ruoka/product/6430058481706?w=480&h=480&fit=max&auto=format&fm=jpg&cs=srgb&q=40&dpr=2",
  },
  {
    id: 8,
    name: "Lahden Erikois Vehnä",
    category: "Weissbier",
    rating: 8,
    comment: "En god veteöl från Finland.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/922413/lahden-erikois-vehna-tolkki.jpg",
  },
  {
    id: 9,
    name: "Tornion Panimo North Arctic Neipa",
    category: "IPA",
    rating: 4,
    comment:
      "Första tanken var att den var för fruktig och blir låga betyg men sakta men säkert blir den bättre.",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    id: 10,
    name: "Aura",
    category: "Lager",
    rating: 8,
    comment: "Mycket god lager",
    imageUrl: "https://public.keskofiles.com/f/k-ruoka/product/6413600007760",
  },
  {
    id: 11,
    name: "Staropramen",
    category: "Pilsner",
    rating: 9,
    comment: "Tjeckerna kan laga öl! Gott. Speciellt efter bastun. Wunderbar.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/726066/staropramen-premium.jpg",
  },
  {
    id: 12,
    name: "Big Wave Ale",
    category: "Ale",
    rating: 7,
    comment: "Faktiskt riktigt god ale. Börjat tycka om ale mer o mer.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/911982/kona-big-wave-golden-ale.jpg",
  },
  {
    id: 13,
    name: "Hoegaarden Witbier",
    category: "Weissbier",
    rating: 8.5,
    comment: "En god veteöl. Gillar och dricker en gärna igen.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/725704/hoegaarden-witbier.jpg",
  },
  {
    id: 14,
    name: "Tornion Panimo North Arctic Lager",
    category: "Lager",
    rating: 9,
    comment: "Mycket god lager. Rekommenderar.",
    imageUrl: "https://public.keskofiles.com/f/k-ruoka/product/6430064997574",
  },
  {
    id: 15,
    name: "Kvarken Brewery Czech Pils",
    category: "Pilsner",
    rating: 9,
    comment: "En öl i min smak.",
    imageUrl:
      "https://i.ibb.co/x352X3S/01post-4402267-111814666-removebg-preview.png",
  },
  {
    id: 16,
    name: "Sol",
    category: "Lager",
    rating: 8.5,
    comment:
      "Sol är gott. Dock tror jag att den fick högre betyg pga. maten som passade utmärkt till en latinoöl, nämligen tacogratäng.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/009716/sol.jpg",
  },
  {
    id: 17,
    name: "Daring Daughter Tropical Lager",
    category: "Lager",
    rating: 7,
    comment:
      "Jag gillar öl, och jag gillar olika slags öl. Kanske lite för fruktig till entrecôte och pommes.",
    imageUrl: "https://kalori.info/pimg/6419800012047.jpg",
  },
  {
    id: 18,
    name: "Hoppy Amber Lager Brooklyn Lager",
    category: "Lager",
    rating: 7,
    comment: "En god, mörkare, lager.",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/772154/brooklyn-lager.jpg",
  },
  {
    id: 19,
    name: "Põhjala",
    category: "Porter",
    rating: 2,
    comment:
      "Jag hann skryta igår att jag gillar all öl. Nu tar jag tillbaka min kommentar. Denna föll mig inte i smaken.",
    imageUrl:
      "https://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_681428.jpg",
  },
  {
    id: 20,
    name: "Stella Artois",
    category: "Lager",
    rating: 6,
    comment: "Ingen dunderbira, helt okej lager men inget mer än så",
    imageUrl:
      "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/797624/stella-artois.jpg",
  },
  {
    id: 21,
    name: "Kvarken Watchman",
    category: "Pilsner",
    rating: 9,
    comment: "Kanske den godaste hittills. ¡Fantastico! ¡Muy bien!",
    imageUrl:
      "https://i.ibb.co/f2SkvJJ/01watchman-front-back2-removebg-preview.png",
  },
  {
    id: 22,
    name: "Brewdog Pale Ale",
    category: "Ale",
    rating: 8,
    comment: "Har börjat gilla ale/pale ale mer och mer.",
    imageUrl: "https://www.juomavarasto.com/tuotekuvat/BrewDog_Pale_Ale.jpg",
  },
  {
    id: 23,
    name: "Brooklyn Bel Air Sour",
    category: "Sour",
    rating: 0,
    comment:
      "Troligen den värsta öl jag nånsin druckit! Rekommenderar inte ens till mina värsta fiender.",
    imageUrl:
      "https://www.sinebrychoff.fi/media/27302/fi_brooklyn-bel-air-sour.png",
  },
  {
    id: 24,
    name: "Lahden Erikois Joulu",
    category: "Lager",
    rating: 7.5,
    comment:
      "En mörk öl som var överraskande god. Mörka öl kan faktiskt vara riktigt goda.",
    imageUrl:
      "https://www.metrotukku.fi/medias/6413600147084-515Wx515H?context=bWFzdGVyfGltYWdlc3w1MDc4MzZ8aW1hZ2UvcG5nfGhlOS9oMTAvOTE5OTA0ODY1NDg3OC82NDEzNjAwMTQ3MDg0XzUxNVd4NTE1SHwxMGI4ODNhZWE4NjMxYzY2ZTcxMWUzMGUxMzQ0YTMwNGJlYmQ5NDIzNDE5ZTA5NTU1MDQ2MGIwMTMxOGU5MzBj",
  },
];

export default beers;
