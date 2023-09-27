import styled from "styled-components";
import { COLORS } from "../../../assets/color/colors";

export const CharacterCard = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    display: initial;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  margin-right: 32px;
  border-radius: 16px;

  @media screen and (max-width: 1024px) {
    max-width: initial;
    margin-bottom: 16px;
  }
`;

export const Container = styled.div`
  background-color: ${COLORS.CARD};
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 16px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;

export const Row = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

export const Section = styled.div`
  margin-top: 16px;
`;
