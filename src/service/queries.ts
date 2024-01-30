import { useQuery } from "react-query";
import ApiService from "./api.service";

// Hook personnalisé utilisant react-query pour obtenir la liste des épisodes
export const useEpisodes = (): any => {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: async () => {
      try {
        // Appeler la fonction GET de l'ApiService pour obtenir la liste des épisodes
        const data = await ApiService.GET("episode");
        return data;
      } catch (error) {
        throw error;
      }
    },
    // Durée pendant laquelle les données sont considérées comme "fraîches" (en millisecondes)
    staleTime: 60_000,
  });
};

// Hook personnalisé utilisant react-query pour obtenir les détails d'un épisode spécifique
export const useEpisode = (id: string | undefined): any => {
  return useQuery({
    queryKey: ["episode"],
    queryFn: async () => {
      try {
        // Appeler la fonction GETONE de l'ApiService pour obtenir les détails de l'épisode spécifié
        const data = await ApiService.GETONE(`episode/${id}`);
        return data;
      } catch (error) {
        throw error;
      }
    },
    // Durée pendant laquelle les données sont considérées comme "fraîches" (en millisecondes)
    staleTime: 60_000,
  });
};
