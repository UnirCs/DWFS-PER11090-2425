import { useState, useEffect } from "react";
import { mockMovies } from "../mocks/movies.mock";
import { Movie } from "../models";

export const useMockFetch = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockMovies);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          setError(`Error desconocido: ${err}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
