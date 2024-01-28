import { useQuery } from "react-query";
import ApiService from "./api.service";

export const useEpisodes = (): any => {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: () => ApiService.GET("episode"),
  });
};

export const useEpisode = (id: string | undefined): any => {
  return useQuery({
    queryKey: ["episode"],
    queryFn: () => ApiService.GETONE(`episode/${id}`),
  });
};
