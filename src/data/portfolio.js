export const profile = {
  name: 'Issotina Abdou Wadoudou',
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
  github: '',
  linkedin: '',
  whatsapp: '',
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
    technologies: [],
    status: 'À confirmer',
    preview: 'Aperçu à ajouter',
    github: '',
    demo: '',
  },
  {
    name: 'Portfolio personnel',
    category: 'Site web',
    description:
      'Portfolio personnel conçu pour présenter mon parcours, mes domaines d’intérêt et mes projets.',
    technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    status: 'En cours',
    preview: 'Aperçu à ajouter',
    github: '',
    demo: '',
  },
  {
    name: 'Créations numériques',
    category: 'Communication visuelle',
    description:
      'Sélection de supports publicitaires et de contenus de communication numérique.',
    technologies: [],
    status: 'À confirmer',
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
  { href: '#contact', label: 'Contact' },
];
