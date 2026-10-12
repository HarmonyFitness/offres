/* =========================================================
   CONFIG · Offre Halloween 888 (offres.harmony.ch/halloween)
   Tout le contenu de la page vient d'ici : textes, dates, produits, visuels, thème.
   Pour le Black Friday : dupliquer le dossier en /blackfriday, passer slug et theme
   à 'blackfriday', mettre à jour les textes, dates, IDs produits et utm_campaign.

   Rappels de rédaction (cahier des charges) :
   vouvoiement, boutons à la 1re personne, prix au format "CHF 888.–",
   "club" (jamais "salle"), "Canton de Genève / de Vaud", pas de tiret cadratin.
   Eliptik Harmony toujours en capitales (charte). Pas de flèche dans les boutons.
   Un texte qui contient "[À " est surligné sur la page (contenu en attente).
   ========================================================= */
window.OFFRE = {
  slug: 'halloween',                         // = nom du dossier et de l'URL (offres.harmony.ch/halloween)
  nom: 'Offre Halloween 888',
  theme: 'halloween',                       // 'halloween' | 'blackfriday'

  /* Habillage saisonnier (à désactiver pour le Black Friday) */
  deco: {
    araignee: true,          // araignée qui descend du header dans le hero
    curseurFantome: true     // pointeur de souris remplacé par 👻 (ordinateur uniquement)
  },
  utmCampaign: 'offre_halloween_888',
  gtmEvent: 'offre_cta_click',              // dataLayer · clic sur un bouton d'achat

  /* Dates · heure de Zurich. Heure d'hiver dès le 25 octobre → +01:00. */
  dates: {
    ouverturePublique: '2026-10-28T00:00:00+01:00', // bandeau + compte à rebours
    fin:               '2026-11-01T23:59:59+01:00'  // après : CTA masqués
  },

  /* Lien d'achat : /paiement/ (checkout direct, cf. offres 222 et 888 précédentes) */
  checkoutUrl: 'https://souscription.harmony.ch/paiement/?add-to-cart=',

  visuels: {
    hero: 'images/hero-halloween.jpg',  // visuel Halloween d'Axelle (1600x900) · vide = fond sombre "Photo à venir"
    heroAlt: 'Membres Harmony masqués pour Halloween pendant un cours d\'Indoor Cycling'
  },

  liens: {
    conditions:      '',                                          // [À CONFIRMER] CGV promo
    mentionsLegales: 'https://www.harmony.ch/mentions-legales',
    confidentialite: 'https://www.harmony.ch/politique-de-confidentialite',
    contactEmail:    'info@harmony.ch'
  },

  bandeau: 'Offre diabolique : jusqu\'au 1er novembre seulement',

  hero: {
    badgeSaison: 'Offre Halloween',            // pastille orange, police Creepster (thème halloween)
    surtitre: 'Abonnement fitness',
    titre: 'Une offre diabolique :',
    prix: 'CHF 888.–',
    sousTitre: '12 mois dans 7 clubs, ou 8 mois dans les 10 clubs Harmony des cantons de Genève et de Vaud. Payable en 12x CHF 74.– sans frais. Le seul frisson, c\'est à l\'entraînement.',
    cta: 'Je choisis ma formule',
    recapTitre: 'Deux formules, un seul prix'   // encart à droite du hero (desktop), mène aux cartes
  },

  topbarCta: 'Je choisis ma formule',

  formulesSection: {
    titre: 'Choisissez votre formule',
    sousTitre: 'Tout ce qui est compris, ligne par ligne.'
  },

  reassurance: 'Paiement sécurisé, HeyLight proposé au paiement.',   // sous chaque bouton d'achat
  tagDiff: 'Premium',                                               // étiquette des lignes réservées au Premium

  /* Clubs · catégorie : 'gym' | 'essential' | 'premium'
     Essential couvre gym + essential, Premium couvre tout. */
  clubs: [
    { nom: 'Pâquis',              categorie: 'gym',       canton: 'Genève', lat: 46.2148, lon: 6.1472 },
    { nom: 'Eaux-Vives',          categorie: 'essential', canton: 'Genève', lat: 46.2021, lon: 6.1606 },
    { nom: 'Blandonnet',          categorie: 'essential', canton: 'Genève', lat: 46.2213, lon: 6.0972 },
    { nom: 'Meyrin',              categorie: 'essential', canton: 'Genève', lat: 46.2219, lon: 6.0665 },
    { nom: 'Versoix',             categorie: 'essential', canton: 'Genève', lat: 46.2750, lon: 6.1673 },
    { nom: 'La Praille',          categorie: 'premium',   canton: 'Genève', lat: 46.1796, lon: 6.1272 },
    { nom: 'Veyrier',             categorie: 'premium',   canton: 'Genève', lat: 46.1668, lon: 6.1808 },
    { nom: 'Signy',               categorie: 'essential', canton: 'Vaud',   lat: 46.3973, lon: 6.2060 },
    { nom: 'Gland',               categorie: 'essential', canton: 'Vaud',   lat: 46.4159, lon: 6.2792 },
    { nom: 'Denges',              categorie: 'premium',   canton: 'Vaud',   lat: 46.5272, lon: 6.5429 }
  ],

  /* Carte des clubs · fond SVG généré depuis OpenStreetMap (Léman + canton de Genève).
     L'emprise doit rester celle utilisée pour générer images/carte-leman.svg. */
  carte: {
    image: 'images/carte-leman.svg',
    lon0: 6.02, lon1: 6.60, lat0: 46.145, lat1: 46.555,
    libelles: [
      { texte: 'Canton de Genève', lat: 46.151, lon: 6.030 },
      { texte: 'Canton de Vaud',   lat: 46.470, lon: 6.150 },
      { texte: 'Léman',            lat: 46.400, lon: 6.400 }
    ]
  },

  /* Lignes d'inclusion · même ordre sur les deux cartes et dans le tableau */
  lignes: [
    { cle: 'fitness',   label: 'Plateau fitness' },
    { cle: 'wellness',  label: 'Espaces wellness' },
    { cle: 'cours',     label: 'Cours collectifs' },
    { cle: 'aqua',      label: 'Espaces et cours aquatiques' },
    { cle: 'linge',     label: 'Linge d\'entraînement' },
    { cle: 'coaching',  label: 'Coaching' }
  ],

  formules: [
    {
      id: 'essential',
      produitId: 'ID_ESSENTIAL',            // [À RENSEIGNER] ID WooCommerce
      titre: '888 Essential',
      badge: '',
      categories: ['gym', 'essential'],
      accroche: 'Toute l\'année pour vous entraîner, près de chez vous.',
      resume: '12 mois, 7 clubs',              // encart du hero
      prix: 'CHF 888.–',
      duree: '12 mois',
      sousPrix: 'soit 12x CHF 74.– sans frais avec HeyLight',
      inclus: {
        fitness: true, wellness: true, cours: true, aqua: false, linge: false,
        coaching: '4 séances (valeur CHF 400.–)'
      },
      cta: 'Je prends le 888 Essential'
    },
    {
      id: 'premium',
      produitId: 'ID_PREMIUM',              // [À RENSEIGNER] ID WooCommerce
      titre: '888 Premium',
      badge: 'Accès complet',
      categories: ['gym', 'essential', 'premium'],
      accroche: 'Tous les clubs, les piscines et le linge fourni.',
      resume: '8 mois, 10 clubs',
      prix: 'CHF 888.–',
      duree: '8 mois',
      sousPrix: 'soit 6x CHF 148.– sans frais avec HeyLight',
      inclus: {
        fitness: true, wellness: true, cours: true, aqua: true, linge: true,
        coaching: '6 séances (valeur CHF 600.–)'
      },
      cta: 'Je prends le 888 Premium'
    }
  ],

  /* Dans les clubs : 3 photos (images optimisées dans images/), puis l'aperçu des cours */
  dansLesClubs: {
    titre: 'Dans les clubs',
    photos: [
      { image: 'images/gallery-fitness.jpg', titre: 'Plateau fitness',
        texte: 'Cardio, renforcement musculaire et accompagnement par nos coachs.',
        alt: 'Coach accompagnant un membre sur le plateau fitness Harmony' },
      { image: 'images/gallery-aquatiques.jpg', titre: 'Espaces aquatiques', premium: true,
        texte: 'Bassins, aquagym et aquabike.',
        alt: 'Coach animant un cours d\'aquagym dans la piscine Harmony' },
      { image: 'images/gallery-wellness.jpg', titre: 'Espaces wellness',
        texte: 'Sauna et hammam pour récupérer après l\'effort.',
        alt: 'Espace wellness sauna Harmony Fitness' }
    ],
    notePremium: 'Avec le 888 Premium uniquement'
  },

  /* Cours collectifs · sélection tirée de cours-harmony.xlsx (onglet Cours), classée par objectif principal.
     premium: true = cours donné uniquement dans les clubs Premium (La Praille, Veyrier, Denges).
     Les Small Group Training sont payants en plus (Extra) : jamais présentés comme inclus.
     Pas de cours Hyrox pour le moment (Les Mills Ceremony Hyrox, Ceremony Hyrox Max retirés). */
  coursSection: {
    titre: 'Cours collectifs : un aperçu',
    sousTitre: 'Quelques-uns des cours inclus dans votre formule, parmi bien d\'autres. Le planning varie d\'un club à l\'autre.',
    plusLabel: 'et d\'autres',                  // dernière étiquette de chaque objectif
    legendePremium: 'Uniquement avec le 888 Premium',
    groupes: [
      { objectif: 'Se renforcer et sculpter', cours: [
        { nom: 'Les Mills Body Pump' }, { nom: 'Pilates' }, { nom: 'Les Mills Shapes' }, { nom: 'Cardio Sculpt' } ] },
      { objectif: 'Se dépenser', cours: [
        { nom: 'HIIT' }, { nom: 'Boxe' }, { nom: 'Indoor Cycling' }, { nom: 'Aqua Bike', premium: true }, { nom: 'Aqua Gym', premium: true } ] },
      { objectif: 'Se dépasser', cours: [
        { nom: 'Hybrid Training by Harmony' }, { nom: 'Les Mills Grit', premium: true } ] },
      { objectif: 'Danser', cours: [
        { nom: 'Zumba' }, { nom: 'All Styles Dance' }, { nom: 'Aqua Zumba', premium: true } ] },
      { objectif: 'Bouger mieux et soulager son dos', cours: [
        { nom: 'Mobilité Stretching' }, { nom: 'Gym Douce Dos' }, { nom: 'Move & Mind' } ] },
      { objectif: 'Se détendre', cours: [
        { nom: 'Yoga' }, { nom: 'Cours Zen' }, { nom: 'Sophrologie Stretching' }, { nom: 'Air Yoga', premium: true } ] }
    ],
    note: 'Ce n\'est qu\'un aperçu : tous les cours et leurs horaires sont dans le planning de votre club.',
    sgt: {
      titre: 'Small Group Training',
      badge: 'En supplément, non inclus',
      texte: 'En petit groupe avec un coach, sur réservation. Ces séances se paient en plus de votre abonnement.',
      cours: [ 'Cross Training', 'HIIT Boxing', 'TRX Pilates', 'Flow' ]
    }
  },

  /* Clubs listés à titre d'information (pas de lien : la landing ne mène qu'au checkout) */
  clubsSection: {
    titre: 'Vos clubs, sans prise de tête',
    legendeEssential: 'Inclus dans les deux formules',
    legendePremium: 'Uniquement avec le 888 Premium, espaces aquatiques inclus'
  },

  faqTitre: 'Questions fréquentes',
  faq: [
    { q: 'Jusqu\'à quand puis-je profiter de l\'offre diabolique ?',
      r: 'Jusqu\'au dimanche 1er novembre 2026 à minuit. Après, elle disparaît comme un fantôme.' },
    { q: 'Quelle différence entre Essential et Premium ?',
      r: '888 Essential : 12 mois dans 7 clubs. 888 Premium : 8 mois dans les 10 clubs, avec les espaces aquatiques et le linge.' },
    { q: 'Quand démarre mon abonnement ?',
      r: '[À CONFIRMER]' },
    { q: 'Comment fonctionne HeyLight ?',
      r: 'Vous payez en 12x (Essential) ou 6x (Premium) sans frais. La demande se fait au moment du paiement.' },
    { q: 'Je suis déjà membre, je peux en profiter ?',
      r: '[À CONFIRMER]' }
  ],

  final: {
    titre: 'Ne laissez pas filer l\'offre diabolique',
    texteAvantPublic: 'Vous avez jusqu\'au 1er novembre pour choisir votre 888.',
    textePublic: 'Plus que quelques jours pour choisir votre 888.',
    cta: 'Je choisis ma formule'
  },

  termine: {
    titre: 'L\'offre diabolique est terminée',
    texte: 'Merci pour votre intérêt. Retrouvez toutes nos formules sur harmony.ch.',
    lien: 'https://www.harmony.ch/'
  },

  compteRebours: 'Fin de l\'offre dans',

  mentions: 'Offre Halloween valable jusqu\'au 1er novembre 2026 sur offres.harmony.ch et dans les clubs Harmony.'
};
