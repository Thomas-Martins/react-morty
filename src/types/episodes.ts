export interface Episodes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: [
    {
      id: string;
      name: string;
      air_date: string;
      episode: string;
      characters: string[];
      url: string;
      created: string;
    }
  ];
}
