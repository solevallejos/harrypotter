import React from "react";
import { Container, NoPhoto, Photo } from "./styled";
import Card from "../Card";
import { LargeBody } from "../../Typography/styled";
import { Link } from "react-router-dom";
import Favorites from "../../Favorites";

interface Character {
  name: string;
  image: string;
  id: string;
}

interface CharacterCardProps {
  data: Character[];
}

const CharactersCard: React.FC<CharacterCardProps> = ({ data }) => (
  <Container>
    {data?.map((character, index) => (
      <Card key={index}>
        <>
          {character.image ? (
            <>
              <Favorites data={character} />
              <Link to={`/character/${character.id}`}>
                <Photo
                  src={character.image}
                  loading="lazy"
                  alt={character.name}
                />
              </Link>
            </>
          ) : (
            <NoPhoto>
              <LargeBody>No image available</LargeBody>
            </NoPhoto>
          )}
        </>
        <LargeBody bold>{character.name}</LargeBody>
      </Card>
    ))}
  </Container>
);

export default CharactersCard;

