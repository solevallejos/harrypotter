import React, { useState } from 'react';
import { Favorite } from './styled';
import { IMAGES } from '../../assets/images/images';

interface Character {
  name: string;
  image: string;
  id: string;
}

interface FavoritesProps {
  data: Character;
}

const Favorites: React.FC<FavoritesProps> = ({ data }) => {
  const storageItems: Character[] = JSON.parse(
    localStorage.getItem('selectedItems') || '[]'
  );
  const [isSelected, setIsSelected] = useState(
    storageItems.some((item) => item?.id === data.id)
  );
  const handleItemClick = (item: Character) => {
    let updatedSelection: Character[] = JSON.parse(
      localStorage.getItem('selectedItems') || '[]'
    );
    if (updatedSelection.some((selectedItem) => selectedItem.id === item.id)) {
      updatedSelection = updatedSelection.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
      setIsSelected(false);
    } else {
      updatedSelection = [...updatedSelection, item];
      setIsSelected(true);
    }
    localStorage.setItem('selectedItems', JSON.stringify(updatedSelection));
    console.log(updatedSelection);
  };

  return (
    <Favorite
      src={isSelected ? IMAGES.FAVORITE : IMAGES.NOT_FAVORITE}
      onClick={() => handleItemClick(data)}
    />
  );
};

export default Favorites;