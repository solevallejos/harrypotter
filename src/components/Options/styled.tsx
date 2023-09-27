import styled from "styled-components";

interface OptionProps {
  backgroundColor?: string;
}

export const Option = styled.div<OptionProps>`
  padding: 16px;
  border-radius: 16px;
  margin-right: 32px;
  background-color: ${props => (props.backgroundColor ? `${props.backgroundColor}` : 'transparent')};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
