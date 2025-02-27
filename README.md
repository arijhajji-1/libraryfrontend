# 📚 Frontend Bibliothèque Personnelle (React + TypeScript + Vite)

Ce projet est le **frontend de la bibliothèque personnelle "Zlib"**.  
Il permet aux utilisateurs de s'inscrire, se connecter, visualiser et gérer leurs livres, et de consulter les fichiers PDF directement via un lecteur intégré.  
L'application est construite avec **React, TypeScript, Vite, Tailwind CSS et DaisyUI**.

---

## 🚀 Fonctionnalités

- **Authentification Utilisateur**  
  Inscription, connexion et déconnexion avec gestion du token via localStorage.

- **Tableau de Bord des Livres**  
  Affichage des livres sous trois vues :

  - Tous les livres
  - Mes livres
  - Livres favoris  
    via un système d’onglets.

- **Affichage Détail d’un Livre**  
  Une page dédiée affiche le détail d’un livre (titre, auteur, note) et intègre un lecteur PDF.

- **Recherche**  
  Une barre de recherche dans la NavBar permet de filtrer la liste des livres en temps réel.

- **Thème Sombre/Clair**  
  Commutateur de thème intégré via DaisyUI.

- **Dockerisation**  
  Le projet peut être containerisé pour un déploiement simplifié.

---

## 🏗 Technologies Utilisées

- **Frontend** : React, TypeScript, Vite
- **UI** : Tailwind CSS, DaisyUI
- **Routage** : React Router
- **Lecteur PDF** : pdf-viewer-reactjs (ou une autre solution)
- **Outils de Build & Dev** : Vite, ESLint, Prettier

---

## 🔧 Installation et Configuration

### 1️⃣ Cloner le projet

```sh
git clone https://github.com/votre-utilisateur/frontendbook.git
cd frontendbook
```

## 2️⃣ Installer les dépendances

Ce projet utilise **pnpm** pour la gestion des dépendances :

```sh
pnpm install
```

## 3️⃣ Configuration des Variables d'Environnement

Créez un fichier `.env` à la racine du projet et ajoutez-y, par exemple :

```env
VITE_API_URL=http://localhost:5000
```

Remarque : Toutes les variables d'environnement dans Vite doivent commencer par VITE\_.

## 🚀 Lancement de l'Application

Mode Développement
Démarrez le serveur de développement :

```sh
pnpm run dev
```

L’application sera accessible sur http://localhost:3000.

## 🐳 Dockerisation

Un Dockerfile est fourni pour containeriser l’application. Pour construire et exécuter l’image Docker :

Construire l’image Docker :

```sh

docker build -t zlib-frontend .
```

Exécuter le conteneur :

```sh

docker run -d -p 80:80 zlib-frontend
```

L’application sera alors accessible sur http://localhost.

## 📁 Structure du Projet

Le projet est organisé comme suit :

src/
├── assets/
├── entities/
├── pages/
├── service/
├── shared/
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── privateRoute.tsx
└── vite-env.d.ts

assets/ : Contient les ressources statiques (images, etc.)
entities/ : Types ou interfaces métier
pages/ : Composants de pages (ex. Home, Auth, BookDetails, etc.)
service/ : Fonctions de logique métier ou appels API
shared/ : Composants et utilitaires partagés (layout, hooks, etc.)
App.tsx / main.tsx : Points d’entrée de l’application
privateRoute.tsx : Garde de route pour la protection des pages
vite-env.d.ts : Déclarations de types pour Vite

## ⚙️ Utilisation

Navigation :
L’utilisateur doit se connecter pour accéder au tableau de bord.
S’il n’est pas authentifié, il est redirigé vers la page de connexion.

Ajout/Modification de Livres :
Le tableau de bord permet d’ajouter, modifier et supprimer des livres via un formulaire.
Chaque livre dispose d’une page dédiée, affichant ses informations et un lecteur PDF.

Recherche :
La barre de recherche dans la NavBar filtre la liste des livres affichés.

## 🛡 Qualité du Code

Ce projet utilise ESLint, Prettier et Husky pour maintenir un code propre et formaté :

ESLint : Analyse statique du code
Prettier : Formatage automatique
Husky : Exécute ESLint/Prettier avant chaque commit
Exécutez manuellement :

```sh

pnpm run lint
pnpm run prettier:check
```

## ⚠️ Backend Nécessaire

Ce frontend nécessite un backend pour fonctionner. Assurez-vous de lancer l’API depuis le dépôt suivant :
https://github.com/arijhajji-1/librarybackend

Le backend tourne par défaut sur le port 5000 (modifiable).
Mettez à jour VITE_API_URL dans votre .env si nécessaire.
