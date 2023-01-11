
### Présentation du projet 
N'avez-vous déjà pas passé de longues minutes à vous demander que regarder ce soir, scrollé toutes les catégories de votre service de vidéo à la demande, avant de changer d'avis et d'aller faire autre chose ? Fini, avec Your Canal (Movie Picker) ! Ce petit outil donne des idées de films à regarder, en fonction du genre désiré, de l'année entrée ou de la langue d'origine. 
Connecté à l'API [The Movie DB](https://developers.themoviedb.org/3), il fournit une liste des films les plus populaires selon le critère donné. Il est aussi possible de choisir la langue dans laquelle sont fournis les résultats. 

### Comment lancer le projet
- En local : 
1. cloner le repository avec la commande : 
 `git clone <lien hTTPS ou SSH>` 
2. Créer un fichier .env dans le projet avec deux variables
`REACT_APP_API_BASE_URL`et `REACT_APP_API_ACCESS_KEY`
Leurs valeurs correspondent respectivement au path de base de l'API The Movie DB et la clé d'accès fournis dans le document de présentation. (PS : Il ne faut pas encadrer les valeurs avec des double quotes)
3. Installer les dépendances du projet avec la commande `npm install`
4. Lancer le projet avec la commande `npm start`

- Version déployée : 
Se rendre sur : [https://your-movie-picker.netlify.app/](https://your-movie-picker.netlify.app/)


### Process utilisé
- Projet versionné avec Github : trois types de branches, `setup/`, `clean/` et `feature/`, avec un numéro de feature pour chaque 
- Branche protégée : `main` 
- Processus de validation : je crée une nouvelle branche tirée de `main`, je fais un développement, je le track, je le commit avec une description en anglais, je push, je fais ensuite une pull request vers `main`
- La pull request ne peut être validée que si : la branche tirée est à jour avec les modifications sur `main` (éventuellement rebase), la branche passe les pipelines de vérification de build et si la PR est approuvée. 
- Pipelines de vérification : Github Action de vérification Node.js (build, ci et test) + Pipelines Netlify pour le déploiement 
- Par souci de transparence, les commits n'ont pas été squashés aux merges et les branches mergées n'ont pas été supprimées, mais il est idéal de le faire pour ne pas surcharger le repository et par souci de clarté.

### Stack technique 
- React 18 (projet créé avec Create React App comme boilerplate)
- Axios 
- Eslint / Prettier pour vérifier les erreurs de syntaxe et faciliter l'indentation
- React Testing Library pour tests 
- Prop-types pour vérifier le type des objets manipulés (en l'absence de Typescript)
- Github Actions pour vérifier le build du projet quand la PR est mergée


### Pourquoi ne pas avoir utilisé
- Redux / Context API : j'ai longtemps hésité à mettre en place l'un des deux. Au vu de la petite taille du projet (deux "branches" partant du composant Home, et la majorité du projet sur une : Results -> Result -> Others), j'ai opté pour un customHook (système que je voulais tester) un passage de données de composant parent <-> enfant en "arbre". Toutefois, cela atteint très rapidement ses limites quand le projet et le nombre de composants sur des branches parallèles de l'arbre grossissent. 
J'avais aussi peur que la syntaxe de Redux soit difficile à se ré-approprier en quelques heures. 
- Librairie de composants Front (ex: Tailwind, Material UI) : aimant pratiquer le CSS, j'ai opté pour du "fait-maison". Toutefois, les librairies actuelles de composants offrent une solution de facilité et d'uniformité dans les pratiques au sein d'une équipe professionnelle. 

### Ce que j'aurais aimé mettre en place 
- Une fonction globale de traduction avec i18next. J'ai déjà utilisé cette librairie, je sais comment elle fonctionne mais elle peut rapidement alourdir la lisibilité du code si elle est mal implémentée. Dans le cadre d'un test, j'ai priorisé la lisibilité. 
- Un système de pagination pour l'affichage des résultats 
- Des tests plus robustes et plus poussés : je me suis cantonnée au rendu, j'aurais aimé plus de garde-fous au niveau des données manipulées. Un souci de configuration au niveau de Jest / React Testing Library m'a fait perdre pas mal de temps au début des tests
- Un système de compte / session pour pouvoir échanger (de manière sécurisée pour l'utilisateur ou utilisatrice) avec l'API The Movie DB, qui fournit également des informations liées à un id de compte
