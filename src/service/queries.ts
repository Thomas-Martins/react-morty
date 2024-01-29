import { useQuery } from "react-query";
import ApiService from "./api.service";

export const useEpisodes = (): any => {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: async () => {
      try {
        const data = await ApiService.GET("episode");
        return data;
      } catch (error) {
        throw error;
      }
    },
    staleTime: 60_000,
  });
};

export const useEpisode = (id: string | undefined): any => {
  return useQuery({
    queryKey: ["episode"],
    queryFn: async () => {
      try {
        const data = await ApiService.GETONE(`episode/${id}`);
        return data;
      } catch (error) {
        throw error;
      }
    },
  });
};
