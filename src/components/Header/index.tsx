import React from "react";
import { Container, Favorites } from "./styled";
import { LargeTitle, LargeBody } from "../Typography/styled";
import { Link } from "react-router-dom";

const Button: React.FC = () => (
  <Container>
    <LargeTitle>Harry Potter API</LargeTitle>
    <LargeBody>
      All characters from this magical world are displayed by default.
    </LargeBody>
    <LargeBody>You can filter them using the buttons below</LargeBody>
    <Favorites>
      <Link to="/favorites">See your favorite characters here</Link>
    </Favorites>
  </Container>
);

export default Button;
