import React, { CSSProperties, useContext } from 'react';
import SelectOptionsInterface from '../../interface/selectOptions';

type SelectOptionProps = SelectOptionsInterface;

const SelectOption = (props: Readonly<SelectOptionProps>): JSX.Element => {
  const selectOptionStyle: CSSProperties = {
    fontSize: '24px',
  };

  return (
    <option style={selectOptionStyle} value={props.value}>
      {props.displayText}
    </option>
  );
};

export default SelectOption;
