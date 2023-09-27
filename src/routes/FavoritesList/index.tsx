import React from "react";
import CharactersCard from "../../components/Cards/CharactersCard";
import { LargeTitle } from "../../components/Typography/styled";
import NavigationHeader from "../../components/NavigationHeader";

const FavoritesList: React.FC = () => {
  const storedSelectedItems = JSON.parse(
    localStorage.getItem("selectedItems") || "[]"
  );

  return (
    <>
      <NavigationHeader />
      <LargeTitle>Favorite characters</LargeTitle>
      <CharactersCard data={storedSelectedItems} />
    </>
  );
};

export default FavoritesList;
