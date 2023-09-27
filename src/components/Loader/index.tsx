import React from "react";
import { Wand } from "./styled";
import { SubTitle } from "../Typography/styled";
import { IMAGES } from "../../assets/images/images";

const Loader: React.FC = () => {
  return (
    <>
      <Wand src={IMAGES.LOADING} alt="Loading content" />
      <SubTitle>Loading</SubTitle>
    </>
  );
};

export default Loader;
