import React from "react";
import { Title } from "../../components/Typography/styled";
import { useNavigate } from "react-router-dom";
import { Container } from "./styled";

const NavigationHeader: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container onClick={goBack}>
      <Title> Go back to Home</Title>
    </Container>
  );
};

export default NavigationHeader;
