import styled from "styled-components";
import { COLORS } from "../../../assets/color/colors";

export const Card = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: ${COLORS.CARD};
  margin-bottom: 16px;
  text-align: center;
  margin-right: 16px;
  width: 15%;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 33%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;