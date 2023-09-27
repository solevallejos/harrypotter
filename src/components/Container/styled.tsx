import styled, { createGlobalStyle } from "styled-components";
import { COLORS } from "../../assets/color/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${COLORS.BACKGROUND};
  }
`;

export const Container = styled.div`
  padding: 32px;
`;

export const Message = styled.div`
  text-align: center;
  margin-top: 32px;
`;
