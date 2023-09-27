import styled from "styled-components";
import { COLORS } from "../../../assets/color/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const Photo = styled.img`
  border-radius: 16px;
  width: 100%;
  height: auto;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const NoPhoto = styled.div`
  padding: 16px;
  background-color: ${COLORS.BACKGROUND};
  border-radius: 16px;
  margin-bottom: 16px;
`;