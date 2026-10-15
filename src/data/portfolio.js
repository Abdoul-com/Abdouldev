export const profile = {
  name: 'Issotina Abdou Wadoudou',
  givenName: 'Issotina Abdou',
  familyName: 'Wadoudou',
  title: 'Développeur Web en devenir',
  location: 'Cotonou, Bénin',
  education: 'BAC+2 en informatique de gestion',
  institution: 'ESGT Bénin',
  languages: ['Français', 'Dendi', 'Lokpa'],
  domains: [
    'Développement web',
    'Informatique de gestion',
    'Programmation',
    'Solutions numériques',
  ],
  photo: `${import.meta.env.BASE_URL}images/profile.jpeg`,
};

export const socialLinks = {
  github: 'https://github.com/Abdoul-com',
  facebook: 'https://www.facebook.com/share/1F28kAdSxv/',
  linkedin: '',
  whatsapp: 'https://wa.me/229015120106',
  email: 'issotinaabdoulwadoud@gmail.com',
};

export const skillGroups = [
  {
    title: 'Développement web',
    description: 'Technologies dont le niveau de pratique reste à préciser.',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Outils',
    description: 'Environnements et outils utilisés dans les projets.',
    items: ['VS Code', 'Git', 'GitHub'],
  },
  {
    title: 'Informatique de gestion',
    description: 'Domaines liés à la formation en informatique de gestion.',
    items: ['Analyse des systèmes d’information', 'Conception des systèmes d’information'],
  },
  {
    title: 'Domaines complémentaires',
    description: 'Centres d’intérêt, sans niveau de maîtrise présumé.',
    items: ['Intelligence artificielle', 'Marketing digital', 'Création de contenus numériques'],
  },
];

export const projects = [
  {
    name: 'EduBenin',
    category: 'Application de gestion scolaire',
    description:
      'Application couvrant la gestion des élèves, des inscriptions, des paiements, du personnel, des notes et des bulletins.',
    scope: ['Élèves', 'Inscriptions', 'Paiements', 'Personnel', 'Notes', 'Bulletins'],
    technologies: [],
    status: 'Statut à confirmer',
    preview: 'Périmètre fonctionnel',
    github: '',
    demo: '',
  },
  {
    name: 'Portfolio personnel',
    category: 'Site web',
    description:
      'Portfolio personnel conçu pour présenter mon parcours, mes domaines d’intérêt et mes projets.',
    technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    status: 'En évolution',
    preview: 'Aperçu du site à ajouter',
    github: '',
    demo: '',
  },
  {
    name: 'Créations numériques',
    category: 'Communication visuelle',
    description:
      'Sélection de supports publicitaires et de contenus de communication numérique.',
    technologies: [],
    status: 'Visuels à ajouter',
    preview: 'Visuels à ajouter',
    github: '',
    demo: '',
  },
];

export const sectionLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#formation', label: 'Formation' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];
