import styled from "styled-components";
import { LargeBody, SubTitle } from "../Typography/styled";
import { COLORS } from "../../assets/color/colors";

export const Container = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const Favorites = styled(SubTitle)`
  color: ${COLORS.RAVENCLAW};
  font-weight: 700;
  margin-top: 16px;

  > a {
    text-decoration: none;
  }
`;
