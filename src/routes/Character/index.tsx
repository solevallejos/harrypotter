import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import {
  Container,
  CharacterCard,
  Image,
  Section,
  Row,
} from "../../components/Cards/CharacterCard/styled";
import { LargeBody, SubTitle, Title } from "../../components/Typography/styled";
import { Message } from "../../components/Container/styled";
import Loader from "../../components/Loader";
import NavigationHeader from "../../components/NavigationHeader";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (loading) {
    return (
      <Message>
        <Loader />
      </Message>
    );
  }

  if (error) {
    return (
      <Message>
        <SubTitle>{error}</SubTitle>
      </Message>
    );
  }

  const { name, house, dateOfBirth, species, patronus, wand } = data || {};

  return (
    <>
      <NavigationHeader />
      <Container>
        <CharacterCard>
          <div>
            <Image src={data?.image} alt={data?.image} />
          </div>
          <div>
            <Title>{name}</Title>
            <Section>
              <Row>
                <LargeBody bold>House: </LargeBody>
                <LargeBody>{house}</LargeBody>
              </Row>
              <Row>
                <LargeBody bold>Birthday: </LargeBody>
                <LargeBody>{dateOfBirth}</LargeBody>
              </Row>
              <Row>
                <LargeBody bold>Species: </LargeBody>
                <LargeBody>{species}</LargeBody>
              </Row>
              <Row>
                <LargeBody bold>Patronus:</LargeBody>
                <LargeBody>{patronus}</LargeBody>
              </Row>
            </Section>

            <Section>
              <Row>
                <SubTitle>Wand</SubTitle>
              </Row>
              <Row>
                <LargeBody bold>Core</LargeBody>
                <LargeBody>{wand?.core}</LargeBody>
              </Row>
              <Row>
                <LargeBody bold>Length</LargeBody>
                <LargeBody>{wand?.length}</LargeBody>
              </Row>
              <Row>
                <LargeBody bold>Wood</LargeBody>
                <LargeBody>{wand?.wood}</LargeBody>
              </Row>
            </Section>
          </div>
        </CharacterCard>
      </Container>
    </>
  );
};

export default Character;
