import React from "react";
import { SelectContainer, Option } from "./styles/Select";

const Select = props => {
  const { value, options, onChange } = props;

  return (
    <SelectContainer
      onChange={event => onChange(event.target.value)}
      value={value}
    >
      {options &&
        options.length &&
        options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
    </SelectContainer>
  );
};

export default Select;
