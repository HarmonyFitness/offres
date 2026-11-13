/* =========================================================
   CONFIG · Offre Black Friday MAA (offres.harmony.ch/blackfriday-maa)
   Tout le contenu de la page vient d'ici : textes, dates, produits, visuels, thème.
   Dupliquée depuis /halloween-maa, habillage de la landing Black Friday Fitness (/blackfriday) :
   noir + jaune (#FFD500), couleurs de l'annonce.

   Après chaque modification de ce fichier : incrémenter ?v=N sur config.js dans index.html.

   Rappels de rédaction (brief) :
   vouvoiement, boutons à la 1re personne, prix au format "CHF 888.–",
   pas de tiret cadratin, aucune comparaison avec les tarifs standards (ni prix barré, ni "au lieu de").
   Mensualités HeyLight : toujours "6x CHF 148.–", jamais "CHF 148.– par mois".
   Kobe (titres) toujours en capitales. Pas de flèche dans les boutons.
   "Gym by Harmony" (aux Pâquis), jamais "Gym-Pâquis".
   Aucun lien externe sauf le e-commerce (souscription.harmony.ch), hors pied de page légal.
   Un texte qui contient "[À " est surligné sur la page (contenu en attente).
   ========================================================= */
window.OFFRE = {
  slug: 'blackfriday-maa',                   // = nom du dossier et de l'URL (offres.harmony.ch/blackfriday-maa)
  nom: 'Offre Black Friday MAA',
  theme: 'blackfriday',

  utmCampaign: 'offre_blackfriday_maa',
  gtmEvent: 'offre_cta_click',               // dataLayer · clic sur un bouton d'achat (formule : one_maa / full_maa)

  /* Dates · heure de Zurich (+01:00). Prévente ouverte dès maintenant (phase « avant » : achat possible,
     bandeau et compte à rebours), Black Friday du mercredi 25 au lundi 30 novembre 2026. */
  dates: {
    ouverturePublique: '2026-11-25T00:00:00+01:00', // début du Black Friday (textes « public »)
    fin:               '2026-11-30T23:59:59+01:00'  // après : CTA masqués
  },

  /* Lien d'achat : /paiement/ (checkout direct, comme la landing Fitness) */
  checkoutUrl: 'https://souscription.harmony.ch/paiement/?add-to-cart=',

  visuels: {
    hero: 'images/hero-blackfriday-maa-2.jpg',  // deux combattants en garde devant la cage (fresque Andy Hug) · vide = fond noir + logo en filigrane
    heroPosition: '50% 0',                    // cadrage du visuel sur ordinateur (photo en pleine largeur)
    heroAlt: 'Deux combattants de la Martial Arts Academy à l\'entraînement devant la cage, l\'un en garde haute, l\'autre lançant un direct',
    final: 'images/final-blackfriday-maa.jpg', // fond du bloc final, sous un voile noir · vide = dégradé noir
    finalAlt: 'Entraînement de sports de combat sur les tapis de la Martial Arts Academy'
  },

  liens: {
    conditions:      'https://souscription.harmony.ch/maa-termes-et-conditions/',   // CGV MAA (nouvel onglet)
    mentionsLegales: 'https://www.maa-academy.ch/mention-legal',
    confidentialite: 'https://www.harmony.ch/politique-de-confidentialite'
  },

  contact: {
    nom: 'Martial Arts Academy Geneva',
    sousTitre: 'Cours collectifs MAA',
    adresse: 'Rue Jean-Charles-Amat 12a',
    ville: '1202 Genève',
    horaires: [
      { jours: 'Lundi au vendredi', heures: '11h00 à 21h00' },
      { jours: 'Samedi',            heures: '9h00 à 14h00' }
    ]
  },

  /* Bandeau noir fixé en haut, avec le décompte jusqu'à la fin de l'offre (affiché dès la prévente) */
  bandeau: { titre: 'Black Friday', texte: 'Fin de l\'offre dans' },

  hero: {
    badgeSaison: 'Black Friday',               // bandeau noir et jaune, comme sur l'annonce
    surtitre: 'Martial Arts Academy',
    titre: 'L\'offre de l\'année :',
    prix: 'dès CHF 666.–',                     // en jaune sous le titre
    sousTitre: '12 mois dans la discipline de votre choix pour CHF 666.–, ou 8 mois dans toutes les disciplines pour CHF 888.–. L\'accès au Gym by Harmony, le club de fitness situé dans la même rue aux Pâquis, est inclus dans les deux formules.',
    cta: 'Je choisis ma formule',
    recapTitre: 'Deux formules'                 // encart à droite du hero (desktop), mène aux cartes
  },

  topbarCta: 'Je choisis ma formule',

  formulesSection: {
    titre: 'Choisissez votre formule',
    sousTitre: 'Deux formules, avec l\'accès au club de fitness Gym by Harmony dans les deux.'
  },

  reassurance: 'Paiement sécurisé, HeyLight proposé au paiement.',   // sous chaque bouton d'achat

  formules: [
    {
      id: 'one_maa',
      produitId: '62272',                   // OFFRE BLACK FRIDAY ONE MAA (WooCommerce · 666, 12 mois)
      titre: 'ONE MAA',
      badge: '',
      accroche: 'Toute l\'année pour progresser dans votre discipline.',   // phrase avant les puces
      resume: '12 mois, 1 discipline',      // encart du hero
      prix: 'CHF 666.–',
      duree: '12 mois',
      // Encadrés en haut de carte : ce qui distingue les formules (pastilles = disciplines incluses sur les 7)
      faits: [
        { label: 'Durée', valeur: '12', unite: 'mois' },
        { label: 'Disciplines', valeur: '1', unite: 'au choix', pastilles: 1 }
      ],
      sousPrix: 'soit 12x CHF 55.50 sans frais avec HeyLight',
      puces: [   // { texte, diff: true } = ligne mise en gras (ce qui change d'une formule à l'autre)
        'Abonnement 12 mois',
        { texte: 'Accès à tous les cours collectifs de la MAA dans une discipline de votre choix', diff: true },
        'Accès au club de fitness Gym by Harmony aux Pâquis : musculation, zone cardio, zone poids libres et street workout',
        'Payable en 12x sans frais avec HeyLight'
      ],
      cta: 'Je m\'abonne à l\'offre ONE MAA'
    },
    {
      id: 'full_maa',
      produitId: '62271',                   // OFFRE BLACK FRIDAY FULL MAA (WooCommerce · 888, 8 mois)
      titre: 'FULL MAA',
      badge: 'Toutes les disciplines',      // carte mise en avant (contour + étiquette)
      accroche: 'Toutes les disciplines de l\'Academy, pour varier vos entraînements.',
      resume: '8 mois, toutes disciplines',
      prix: 'CHF 888.–',
      duree: '8 mois',
      faits: [
        { label: 'Durée', valeur: '8', unite: 'mois' },
        { label: 'Disciplines', valeur: '7', unite: 'sur 7', pastilles: 7 }
      ],
      sousPrix: 'soit 6x CHF 148.– sans frais avec HeyLight',
      puces: [
        'Abonnement 8 mois',
        { texte: 'Accès à tous les cours collectifs de la MAA, toutes disciplines', diff: true },
        'Accès au club de fitness Gym by Harmony aux Pâquis : musculation, zone cardio, zone poids libres et street workout',
        'Payable en 6x sans frais avec HeyLight'
      ],
      cta: 'Je m\'abonne à l\'offre FULL MAA'
    }
  ],

  /* Disciplines adultes · menu actuel de maa-academy.ch (sans lien : la landing ne mène qu'au checkout) */
  disciplinesSection: {
    titre: 'Les disciplines de l\'Academy',
    sousTitre: 'Sept disciplines pour adultes, tous niveaux.',
    // Dernière case de la grille : ce que chaque formule donne (même ordre que "formules")
    notes: [
      'Une discipline, que vous choisissez au centre.',
      'Tous les cours collectifs de la MAA, toutes disciplines.'
    ]
  },
  disciplines: [   // descriptions reprises des pages disciplines de maa-academy.ch
    { nom: 'MMA',            texte: 'Le sport de combat complet : debout, au corps à corps et au sol.' },
    { nom: '100% Féminin',   texte: 'Les sports de combat entre femmes, tous niveaux, dans un cadre bienveillant.' },
    { nom: 'Boxe Anglaise',  texte: 'Le combat aux poings : technique, cardio et sens de la mesure.' },
    { nom: 'Boxe Thaï',      texte: 'L\'art des huit membres : poings, pieds, genoux et coudes, avec saisies et corps à corps.' },
    { nom: 'Lutte',          texte: 'Contrôle, projections et immobilisations, sans frappe.' },
    { nom: 'Grappling',      texte: 'La lutte au sol, sans frappe, jusqu\'à la soumission.' },
    { nom: 'Cardio Boxing',  texte: 'Les techniques de la boxe et le cardio-training, accessibles à tous.' }
  ],

  gym: {
    surtitre: 'Club de fitness aux Pâquis',
    titre: 'Le Gym by Harmony inclus',
    chiffre: '',                            // grand chiffre facultatif (vide = non affiché)
    chiffreLabel: '',                       // petit texte à côté du chiffre (facultatif)
    texte: 'Le Gym by Harmony est un club de fitness aux Pâquis, dédié à la musculation, avec zone cardio, zone poids libres et street workout. Il se trouve dans la même rue que l\'Academy, pour travailler votre condition physique entre deux entraînements.',
    zones: ['Zone cardio', 'Zone poids libres', 'Street workout']
  },

  /* Carte du quartier · fond SVG généré depuis OpenStreetMap (rues, bâtiments, rue Jean-Charles-Amat en évidence).
     L'emprise et l'échelle doivent rester celles utilisées pour générer images/carte-paquis.svg. */
  carte: {
    image: 'images/carte-paquis.svg',
    lon0: 6.1444, lon1: 6.1512, lat0: 46.2128, lat1: 46.2164, echelle: 100000,
    rue: { texte: 'Rue Jean-Charles-Amat', angle: 32 },   // nom de la rue, posé le long de la rue (ordinateur)
    // cote : position de l'étiquette ('haut' | 'bas' | 'gauche' | 'droite'), sur mobile toujours au-dessus ou en dessous
    lieux: [
      { nom: 'Gym by Harmony', detail: 'Club de fitness, n° 17', logo: 'images/logo-harmony.png',
        lat: 46.2148056, lon: 6.1471820, cote: 'haut' },
      { nom: 'Martial Arts Academy', detail: 'N° 12a', logo: 'images/logo-maa.svg',
        lat: 46.2144176, lon: 6.1484321, cote: 'droite' }
    ],
    legende: 'Rue Jean-Charles-Amat : environ 100 m à pied.',
    credit: 'Fond de carte © OpenStreetMap.'
  },

  infosTitre: 'Infos pratiques',
  /* Deuxième colonne des infos pratiques (la première reprend "contact", la MAA) */
  gymInfos: {
    nom: 'Gym by Harmony',
    sousTitre: 'Club de fitness aux Pâquis',
    adresse: 'Rue Jean-Charles-Amat 17',
    ville: '1202 Genève',
    horaires: [
      { jours: 'Tous les jours', heures: '6h00 à 23h00' }
    ]
  },

  faqTitre: 'Questions fréquentes',          // à valider avec Axelle
  faq: [
    { q: 'Jusqu\'à quand puis-je profiter de l\'offre Black Friday ?',
      r: 'Jusqu\'au lundi 30 novembre 2026 à 23h59.' },
    { q: 'Quelle différence entre ONE MAA et FULL MAA ?',
      r: 'ONE MAA : 12 mois dans la discipline de votre choix. FULL MAA : 8 mois dans toutes les disciplines. Le club de fitness Gym by Harmony est inclus dans les deux.' },
    { q: 'Quand choisir ma discipline avec la ONE MAA ?',
      r: 'Au centre, lors de votre première venue.' },
    { q: 'Quand démarre mon abonnement ?',
      r: 'Quand vous le souhaitez : vous choisissez votre date de début, entre le jour de votre achat et le 30 novembre 2026.' },
    { q: 'Comment fonctionne HeyLight ?',
      r: 'Vous payez en 12x (ONE MAA) ou 6x (FULL MAA) sans frais. La demande se fait au moment du paiement.' },
    { q: 'Je suis déjà membre, je peux en profiter ?',
      r: 'Oui. Si votre abonnement actuel est sans engagement, c\'est l\'occasion de passer à une formule avec engagement, au prix Black Friday. Si vous êtes déjà engagé, l\'offre ne met pas fin à votre abonnement en cours. Pour limiter le chevauchement, vous pouvez faire démarrer votre nouvel abonnement jusqu\'au 30 novembre 2026.' }
  ],

  final: {
    titre: 'L\'offre Black Friday se termine bientôt',
    texteAvantPublic: 'Vous avez jusqu\'au 30 novembre pour monter sur le tatami.',
    textePublic: 'Plus que quelques jours pour monter sur le tatami.',
    cta: 'Je choisis ma formule'
  },

  termine: {
    titre: 'L\'offre Black Friday est terminée',
    texte: 'Merci pour votre intérêt. Retrouvez toutes nos formules sur maa-academy.ch.'
  },

  compteRebours: 'Fin de l\'offre dans',

  mentions: 'Offre Black Friday valable jusqu\'au 30 novembre 2026 sur offres.harmony.ch et à la Martial Arts Academy.',
  copyright: 'Martial Arts Academy by Harmony'
};
