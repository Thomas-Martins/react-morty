# CAS PRATIQUE REACT - REACT MORTY

## Introduction

Ce projet a été développé en utilisant React, conforme aux spécifications mobiles et desktop fournies dans la maquette. Le choix de conception, les étapes de développement et les outils utilisés sont détaillés ci-dessous.

## Analyse et Préparation

1. **Analyse de la Maquette :**

   - Le projet a débuté par une analyse approfondie de la maquette, couvrant à la fois les versions mobile et desktop.

2. **Ressources :**

   - Les assets nécessaires, tels que les images et les polices, ont été rassemblés pour garantir une intégration fidèle à la maquette.

3. **Choix Techniques :**

   - Framework : React a été choisi, conformément aux directives.
   - Styling : Tailwind CSS a été utilisé pour la simplicité, bien que SCSS aurait pu être une alternative, compte tenu des contraintes de temps.

4. **Contraintes :**

   - La principale contrainte était le temps, en particulier en raison de l'apprentissage parallèle de TypeScript et React-query, qui n'était pas maîtrisé au début du projet.

## Développement

1. **Intégration de la Maquette :**

   - La maquette mobile a été intégrée en premier, suivie de son adaptation pour la version desktop, en suivant une approche "mobile first".
   - La structure de l'application a été divisée en plusieurs pages : Home, Episodes, et Episode.

2. **Composants Réutilisables :**

   - Pour garantir la maintenabilité et la lisibilité du code, des composants tels que Button, EpisodeCard, Footer, Navbar, et un composant de pagination ont été créés.

3. **Gestion des Données et API :**

   - Étude de l'API : Compréhension approfondie de l'API et de ses fonctionnalités.
   - Récupération des Épisodes : En raison de la pagination API (20 éléments par page), les données ont été récupérées pour gérer la pagination avec 6 épisodes par page.
   - Détails des Épisodes : En utilisant les IDs des épisodes, une requête spécifique a été effectuée pour obtenir tous les détails d'un épisode.

4. **Optimisations :**

   - Utilisation de React Query (Tanstack Query) pour la gestion du cache et éviter les requêtes inutiles.
   - Intégration de framer-motion pour des transitions fluides entre les composants.
   - Utilisation de react-icons pour les icônes et react-spinners pour un loader de chargement.

## Conclusion

Ce projet a été une opportunité d'apprendre et d'appliquer divers concepts React tout en respectant les spécifications du client. Les choix de conception et les outils utilisés ont été guidés par une approche pragmatique pour relever les défis liés aux contraintes de temps et aux exigences du projet.

[SITE](https://react-morty-thomas.netlify.app/)
