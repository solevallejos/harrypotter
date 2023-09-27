import React, { useEffect, useState } from "react";
import { Favorite } from "./styled";
import { IMAGES } from "../../assets/images/images";
import { SubTitle } from "../Typography/styled";

interface Character {
  name: string;
  image: string;
  id: string;
}

interface FavoritesProps {
  data: Character;
}

const Favorites: React.FC<FavoritesProps> = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState<Character[]>(
    JSON.parse(localStorage.getItem('selectedItems') || '[]')
  );
  const isSelected = selectedItems.some(item => item.id === data.id);

  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleItemClick = (item: Character) => {
    let updatedSelection;
    if (selectedItems.some(selectedItem => selectedItem.id === item.id)) {
      updatedSelection = selectedItems.filter(
        selectedItem => selectedItem.id !== item.id
      );
    } else {
      updatedSelection = [...selectedItems, item];
    }
    setSelectedItems(updatedSelection);
  };

  return selectedItems.length === 0 ? (
    <SubTitle>There are no favorite characters saved</SubTitle>
  ) : (
    <Favorite
      src={isSelected ? IMAGES.FAVORITE : IMAGES.NOT_FAVORITE}
      onClick={() => handleItemClick(data)}
    />
  );
};

export default Favorites;
