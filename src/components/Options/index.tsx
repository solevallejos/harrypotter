import React from "react";
import { Option, Container } from "./styled";
import { options } from "../../misc/options";
import { LargeBody } from "../Typography/styled";

const Options: React.FC<{ setMagicValue: (value: string) => void }> = (props) => {

  const onFilterClick = (option: string) => {
    props.setMagicValue(option);
  };

  return (
    <Container>
      {options.map((option, index) => (
        <Option
          backgroundColor={option.color}
          key={index}
          onClick={() => onFilterClick(option.value)}
        >
          <LargeBody bold>{option.text}</LargeBody>
        </Option>
      ))}
    </Container>
  );
};

export default Options;
