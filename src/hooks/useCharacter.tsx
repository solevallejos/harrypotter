import { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";

interface CharacterInformation {
  id: string;
  name: string;
  species: string;
  house: string;
  dateOfBirth: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  image: string;
}

export const useCharacter = (characterId?: string | undefined) => {
  const [data, setData] = useState<CharacterInformation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const setCharacterData = (data: CharacterInformation) => {
    if (Array.isArray(data)) {
      const newArray = data.map((item: CharacterInformation) => ({
        name: item.name || 'unkown',
        house: item.house || 'unkown',
        dateOfBirth: item.dateOfBirth || 'unkown',
        wand: item.wand || 'unkown',
        core: item.wand.core || 'unkown',
        length: item.wand.length || 'unkown',
        wood: item.wand.wood || 'unkown',
        patronus: item.patronus || 'unkown',
        image: item.image || 'unkown',
        species: item.species || 'unknown'
      }));
  
      const newObject = newArray.reduce(
        (acc: CharacterInformation, item: any) => {
          return { ...acc, ...item };
        },
        {} as CharacterInformation
      );
      return newObject;
    } else {
      return data;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `/character/${characterId}`;
        const response = await axiosInstance.get<CharacterInformation>(url);
        const characterData = setCharacterData(response.data);
        setData(characterData);
      } catch (err) {
        setError(
          "There was an error retrieving the data. Please select another option."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [characterId]);

  return { data, error, loading };
};
