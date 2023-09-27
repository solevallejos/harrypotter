import styled, { createGlobalStyle } from "styled-components";

interface TextProps {
  bold?: boolean;
}

const baseTextStyles = () => `
  margin-bottom: 0;
  margin-top: 0;
`;

const TextBase = styled.p<TextProps>`
  ${baseTextStyles}
  margin-top: 0;
  ${(props) => props.bold && `font-weight: 700;`};
`;

export const LargeTitle = styled.h1`
  ${baseTextStyles};
  font-size: 32px;
`;

export const Title = styled.h2`
  ${baseTextStyles};
  font-size: 24px;
`;

export const SubTitle = styled.h3`
  ${baseTextStyles};
  font-size: 20px;
`;

export const LargeBody = styled(TextBase)`
  font-size: 18px;

`;

export const Body = styled(TextBase)`
  font-size: 16px;
`;

export const SmallBody = styled(TextBase)`
  font-size: 14px;
`;
