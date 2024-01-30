import { Episode } from "../types";
import { Episodes } from "../types/episodes";

// URL de base de l'API Rick and Morty
const BASE_URL = "https://rickandmortyapi.com/api";

// Fonction générique pour effectuer des requêtes GET avec pagination
const GET = async (endpoint: string) => {
  try {
    // Tableau pour stocker tous les résultats paginés
    let allResults: Episodes[] = [];
    let nextPage = `${BASE_URL}/${endpoint}`;

    // Boucle tant qu'il y a une page suivante à récupérer
    while (nextPage) {
      // Effectuer une requête GET à l'URL de la page suivante
      const response = await fetch(nextPage, {
        method: "GET",
      });

      // Vérifier si la réponse est réussie
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Obtenir les données JSON de la réponse
      const data: {
        info: {
          next: string;
          prev: string | null;
        };
        results: Episodes[];
      } = await response.json();

      // Ajouter les résultats actuels au tableau de tous les résultats
      allResults = [...allResults, ...data.results];
      // Mettre à jour l'URL de la page suivante
      nextPage = data.info.next;
    }

    // Renvoyer tous les résultats paginés
    return allResults;
  } catch (error) {
    // Gérer les erreurs lors de la récupération des données
    throw error;
  }
};

// Fonction pour effectuer une requête GET pour un seul élément
const GETONE = async (endpoint: string) => {
  try {
    // Effectuer une requête GET pour obtenir un seul élément à partir de l'URL spécifiée
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
    });

    // Vérifier si la réponse est réussie
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Obtenir les données JSON de la réponse
    const data: Episode = await response.json();

    // Renvoyer les données de l'élément unique
    return data;
  } catch (error) {
    // Gérer les erreurs lors de la récupération des données
    console.error(error);
  }
};

const ApiService = {
  GET,
  GETONE,
};

export default ApiService;
