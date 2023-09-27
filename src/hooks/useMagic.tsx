import { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";

interface MagicData {
  name: string;
  image: string;
  id: string;
}

export const useMagic = (magicData?: string | undefined) => {
  const [data, setData] = useState<MagicData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = magicData ? `/${magicData}` : "/characters";
        const response = await axiosInstance.get(url);
        setData(response.data);
      } catch (err) {
        setError(
          "There was an error retrieving the data. Please select another option."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [magicData]);

  return { data, error, loading };
}
