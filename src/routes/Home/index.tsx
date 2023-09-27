import React, { useState } from "react";
import { Message } from "../../components/Container/styled";
import Header from "../../components/Header";
import Options from "../../components/Options";
import CharactersCard from "../../components/Cards/CharactersCard";
import { SubTitle } from "../../components/Typography/styled";
import { useMagic } from "../../hooks/useMagic";
import Loader from "../../components/Loader";

interface Character {
  name: string;
  id: string;
  image: string;
};

const Home = () => {
  const [magicValue, setMagicValue] = useState('')
  const { data, error, loading } = useMagic(magicValue);

  const renderContent = (
    data: Character[] | null,
    error: string | null,
    loading: boolean
  ) => {
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
    if (data) {
      return <CharactersCard data={data} />;
    }
    return null;
  };

  return (
    <>
      <Header />
      <Options setMagicValue={setMagicValue} />
      {renderContent(data, error, loading)}
    </>
  );
};

export default Home;
