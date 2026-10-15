# Portfolio — Issotina Abdou Wadoudou

Portfolio personnel en français, réalisé avec React, Vite, JavaScript et Tailwind CSS.

## Prérequis

- Node.js 20.19+ ou 22.12+.
- npm.

## Lancer le projet en local

Dans PowerShell, depuis le dossier du projet :

```powershell
npm.cmd install
npm.cmd run dev
```

Ouvrez l’adresse locale affichée par Vite. Pour générer et prévisualiser la version de
production :

```powershell
npm.cmd run build
npm.cmd run test:seo
npm.cmd run preview
```

Dans un terminal qui autorise les scripts npm, les commandes équivalentes sont
`npm install`, `npm run dev`, `npm run build`, `npm run test:seo` et `npm run preview`.

La page comprend une navigation indiquant la section consultée, une progression de
défilement, un retour au haut de page et une FAQ accessible au clavier. Dans les projets,
EduBenin est présenté en étude de cas avec son périmètre fonctionnel fourni; les détails
techniques, visuels et statuts non vérifiés restent explicitement à compléter.

## Formulaire de contact

Le formulaire vérifie les champs puis propose de préparer un message pour WhatsApp ou
un e-mail à `issotinaabdoulwad@gmail.com`. Un lien apparaît ensuite pour ouvrir le message
prérempli; le visiteur doit le vérifier et confirmer l’envoi dans l’application
correspondante. Aucune donnée n’est envoyée automatiquement à un serveur et aucune clé
secrète n’est nécessaire.

## Contenus à compléter après vérification

- Les niveaux des compétences, les technologies utilisées pour EduBenin et les créations
  numériques, les statuts de ces projets, ainsi que leurs visuels réels.
- Les URL GitHub et LinkedIn, les liens de démonstration et les visuels réels.
  L’adresse e-mail et le numéro WhatsApp sont centralisés dans `src/data/portfolio.js`.
- Le CV PDF et les formations complémentaires.

Ces informations sont centralisées dans `src/data/portfolio.js`. Les projets dont les
informations ne sont pas confirmées affichent un état d’attente plutôt qu’un résultat ou
une technologie supposés.

Le portrait professionnel publié par le site se trouve dans `public/images/profile.jpeg`.
Le fichier source `jpeg3.jpeg` est conservé localement et n’est pas requis pour la
compilation ou le déploiement.

## Référencement

Le titre demandé, la meta description, les métadonnées Open Graph et les données
structurées Schema.org `Person` et `WebSite` sont définis dans `index.html`. L’application
est pré-rendue au build pour que le contenu des sections apparaisse dans le HTML initial,
puis hydratée par React. Elle présente une seule page publique : les sections sont des
ancres, pas des routes séparées. Les routes inexistantes renvoient une véritable erreur 404
avec une page dédiée marquée `noindex`.

Quand l’URL HTTPS réelle du site est connue :

1. Copiez `.env.example` vers `.env.production` et définissez `VITE_SITE_URL` sur l’URL
   publique HTTPS réellement publiée, sans slash final. Si le site est publié sous un
   préfixe de chemin, configurez également `base` dans `vite.config.js` pour ce même
   préfixe.
2. Exécutez `npm run build`. Le pré-rendu ajoute alors le lien canonical, les URL Open Graph
   et Schema.org, génère `dist/sitemap.xml` avec la page publique et ajoute l’URL du sitemap
   à `dist/robots.txt`.
3. Publiez le nouveau `dist/` et vérifiez que `/robots.txt` et `/sitemap.xml` renvoient
   leurs fichiers. Dans Google Search Console, ajoutez la propriété correspondant au
   domaine publié, prouvez-en la propriété par DNS ou par la méthode URL-prefix proposée,
   puis soumettez le chemin `/sitemap.xml`. Vous pourrez ensuite demander l’indexation de
   la page d’accueil et surveiller le rapport d’indexation.

Tant que `VITE_SITE_URL` est vide, le build ne fabrique ni URL canonique ni sitemap; le
HTML pré-rendu et les métadonnées sans URL restent disponibles. Renseignez séparément les
URL exactes de GitHub et LinkedIn avant de les ajouter aux profils publics ou à Schema.org.
L’indexation et le classement restent décidés par les moteurs de recherche.

## Publication

Exécutez `npm run build` et publiez le dossier `dist/` sur un hébergeur de site statique
compatible avec Vite (par exemple Netlify ou Vercel). Aucune configuration de service
d’envoi n’est requise pour le formulaire. Aucune route côté client ne nécessite de règle de réécriture. Pour
GitHub Pages sous une URL de projet, configurez également `base` dans `vite.config.js` avec
le nom du dépôt avant de construire le site.
