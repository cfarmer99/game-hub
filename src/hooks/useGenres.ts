import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false); // have to put this when in strict mode. Finally doesn't work
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })
      .finally(() => {
        //setLoading(false);
      });
    return () => controller.abort();
    // must pass empty array as 2nd parameter or this will run continuously!
    // this is because every time the callout is resolved, the state changes, resulting in
    // another callout, resulting in an infinite loop
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
