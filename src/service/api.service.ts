import { Episode } from "../types";
import { Episodes } from "../types/episodes";

const BASE_URL = "https://rickandmortyapi.com/api";

const GET = async (endpoint: string) => {
  try {
    let allResults: Episodes[] = [];
    let nextPage = `${BASE_URL}/${endpoint}`;

    while (nextPage) {
      const response = await fetch(nextPage, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: {
        info: {
          next: string;
          prev: string | null;
        };
        results: Episodes[];
      } = await response.json();

      allResults = [...allResults, ...data.results];
      nextPage = data.info.next;
    }

    return allResults;
  } catch (error) {
    throw error;
  }
};

const GETONE = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
    });

    if (!response.ok) {
      console.log(endpoint);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Episode = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const ApiService = {
  GET,
  GETONE,
};

export default ApiService;
