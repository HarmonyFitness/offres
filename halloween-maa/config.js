/* =========================================================
   CONFIG · Offre Halloween MAA (offres.harmony.ch/halloween-maa)
   Tout le contenu de la page vient d'ici : textes, dates, produits, visuels, thème.
   Même trame que la landing Halloween Fitness (/halloween), charte Martial Arts Academy.

   Pour le Black Friday (25 au 29 novembre 2026) : dupliquer le dossier en /blackfriday-maa,
   passer slug à 'blackfriday-maa' et theme à 'blackfriday', couper la déco, mettre à jour
   les textes, dates, IDs produits et utmCampaign ('offre_blackfriday_maa').

   Rappels de rédaction (brief) :
   vouvoiement, boutons à la 1re personne, prix au format "CHF 666.–",
   pas de tiret cadratin, aucune comparaison avec les tarifs standards (ni prix barré, ni "au lieu de").
   Mensualités HeyLight : toujours "6x CHF 148.–", jamais "CHF 148.– par mois".
   Kobe (titres) toujours en capitales. Pas de flèche dans les boutons.
   Aucun lien externe sauf le e-commerce (souscription.harmony.ch), hors pied de page légal.
   Un texte qui contient "[À " est surligné sur la page (contenu en attente).
   ========================================================= */
window.OFFRE = {
  slug: 'halloween-maa',                     // = nom du dossier et de l'URL (offres.harmony.ch/halloween-maa)
  nom: 'Offre Halloween MAA',
  theme: 'halloween',                        // 'halloween' | 'blackfriday'

  /* Habillage saisonnier, léger (à désactiver pour le Black Friday) */
  deco: {
    araignee: true,          // araignée qui descend du header dans le hero
    curseurFantome: false    // pointeur de souris remplacé par 👻 (ordinateur uniquement)
  },
  utmCampaign: 'offre_halloween_maa',
  gtmEvent: 'offre_cta_click',               // dataLayer · clic sur un bouton d'achat (formule : one_maa / full_maa)

  /* Dates · heure de Zurich. Heure d'hiver dès le 25 octobre → +01:00. */
  dates: {
    ouverturePublique: '2026-10-28T00:00:00+01:00', // bandeau + compte à rebours
    fin:               '2026-11-01T23:59:59+01:00'  // après : CTA masqués
  },

  /* Lien d'achat : /paiement/ (checkout direct, comme la landing Fitness) */
  checkoutUrl: 'https://souscription.harmony.ch/paiement/?add-to-cart=',

  visuels: {
    hero: 'images/hero-halloween-maa.jpg',    // visuel d'Axelle · vide = fond sombre "Visuel à venir"
    heroPosition: '50% 0',                    // cadrage du visuel sur ordinateur (défaut '50% 0')
    heroAlt: 'Deux combattants de la Martial Arts Academy à l\'entraînement, l\'un armant un coup de pied',
    final: 'images/final-halloween-maa.jpg',  // fond du bloc final · vide = dégradé bleu
    finalAlt: 'Entraînement de sports de combat sur les tapis de la Martial Arts Academy'
  },

  liens: {
    conditions:      '',   // [À FOURNIR] lien vers les conditions de l'offre MAA · vide = mention surlignée
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

  bandeau: 'Offre diabolique · jusqu\'au 1er novembre seulement',

  hero: {
    badgeSaison: 'Offre Halloween',            // pastille orange, police Creepster (thème halloween)
    surtitre: 'Martial Arts Academy',
    titre: 'Une offre diabolique pour les combattants',
    // Variantes du brief : 'Frappez fort avant le 1er novembre' · 'L\'offre qui fait peur à vos adversaires'
    sousTitre: '12 mois dans la discipline de votre choix pour CHF 666.–, ou 8 mois dans toutes les disciplines pour CHF 888.–. L\'accès au Gym by Harmony, le club de fitness situé dans la même rue aux Pâquis, est inclus dans les deux formules.',
    cta: 'Je choisis ma formule',
    recapTitre: 'Deux formules'                // encart à droite du hero (desktop), mène aux cartes
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
      produitId: '',                        // [À CRÉER] Offre Halloween ONE MAA (WooCommerce, produit caché)
      titre: 'ONE MAA',
      badge: '',
      accroche: 'Toute l\'année pour progresser dans votre discipline.',   // phrase avant les puces
      resume: '12 mois, 1 discipline',      // encart du hero
      prix: 'CHF 666.–',
      duree: '12 mois',
      sousPrix: 'soit 12x CHF 55.50 sans frais avec HeyLight',
      puces: [
        'Abonnement 12 mois',
        'Accès à tous les cours collectifs de la MAA dans une discipline de votre choix',
        'Accès au club de fitness Gym by Harmony aux Pâquis : 650 m² dédiés à la musculation, zone cardio, zone poids libres et street workout',
        'Payable en 12x sans frais avec HeyLight'
      ],
      cta: 'Je choisis cette formule'
    },
    {
      id: 'full_maa',
      produitId: '',                        // [À CRÉER] Offre Halloween FULL MAA (WooCommerce, produit caché)
      titre: 'FULL MAA',
      badge: 'Toutes les disciplines',      // carte mise en avant (contour bleu + étiquette)
      accroche: 'Toutes les disciplines de l\'Academy, pour varier vos entraînements.',
      resume: '8 mois, toutes disciplines',
      prix: 'CHF 888.–',
      duree: '8 mois',
      sousPrix: 'soit 6x CHF 148.– sans frais avec HeyLight',
      puces: [
        'Abonnement 8 mois',
        'Accès à tous les cours collectifs de la MAA, toutes disciplines',
        'Accès au club de fitness Gym by Harmony aux Pâquis : 650 m² dédiés à la musculation, zone cardio, zone poids libres et street workout',
        'Payable en 6x sans frais avec HeyLight'
      ],
      cta: 'Je choisis cette formule'
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
    chiffre: '650 m²',
    chiffreLabel: '',                       // petit texte à côté du chiffre (facultatif)
    texte: 'Le Gym by Harmony est un club de fitness de 650 m² aux Pâquis, dédié à la musculation, avec zone cardio, zone poids libres et street workout. Il se trouve dans la même rue que l\'Academy, pour travailler votre condition physique entre deux entraînements.',
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
    { q: 'Jusqu\'à quand puis-je profiter de l\'offre diabolique ?',
      r: 'Jusqu\'au dimanche 1er novembre 2026 à 23h59.' },
    { q: 'Quelle différence entre ONE MAA et FULL MAA ?',
      r: 'ONE MAA : 12 mois dans la discipline de votre choix. FULL MAA : 8 mois dans toutes les disciplines. Le club de fitness Gym by Harmony est inclus dans les deux.' },
    { q: 'Quand choisir ma discipline avec la ONE MAA ?',
      r: 'Au centre, lors de votre première venue.' },
    { q: 'Quand démarre mon abonnement ?',
      r: 'Quand vous le souhaitez : vous choisissez votre date de début, entre le jour de votre achat et le 30 novembre 2026.' },
    { q: 'Comment fonctionne HeyLight ?',
      r: 'Vous payez en 12x (ONE MAA) ou 6x (FULL MAA) sans frais. La demande se fait au moment du paiement.' },
    { q: 'Je suis déjà membre, je peux en profiter ?',
      r: 'Oui. Si votre abonnement actuel est sans engagement, c\'est l\'occasion de passer à une formule avec engagement, à prix diabolique. Si vous êtes déjà engagé, l\'offre ne met pas fin à votre abonnement en cours. Pour limiter le chevauchement, vous pouvez faire démarrer votre nouvel abonnement jusqu\'au 30 novembre 2026.' }
  ],

  final: {
    titre: 'Ne laissez pas filer l\'offre diabolique',
    texteAvantPublic: 'Vous avez jusqu\'au 1er novembre pour monter sur le tatami.',
    textePublic: 'Plus que quelques jours pour monter sur le tatami.',
    cta: 'Je choisis ma formule'
  },

  termine: {
    titre: 'L\'offre diabolique est terminée',
    texte: 'Merci pour votre intérêt. Retrouvez toutes nos formules sur maa-academy.ch.'
  },

  compteRebours: 'Fin de l\'offre dans',

  mentions: 'Offre Halloween valable jusqu\'au 1er novembre 2026 sur offres.harmony.ch et à la Martial Arts Academy.',
  copyright: 'Martial Arts Academy by Harmony'
};
