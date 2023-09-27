import React from "react";
import CharactersCard from "../../components/Cards/CharactersCard";
import { LargeTitle, SubTitle } from "../../components/Typography/styled";
import NavigationHeader from "../../components/NavigationHeader";

const FavoritesList: React.FC = () => {
  const storedSelectedItems = JSON.parse(
    localStorage.getItem("selectedItems") || "[]"
  );

  return (
    <>
      <NavigationHeader />
      <LargeTitle>Favorite characters</LargeTitle>
      {storedSelectedItems.length === 0 ? (
        <SubTitle> No favorite characters selected</SubTitle>
      ) : (
        <CharactersCard data={storedSelectedItems} />
      )}
    </>
  );
};

export default FavoritesList;
