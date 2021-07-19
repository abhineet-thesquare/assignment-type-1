import React, { CSSProperties } from 'react';
import SelectOptionsInterface from '../../interface/selectOptions';
import SelectOption from './SelectOption';

interface DropdownSelectProps {
  dropdownSelectedValue: string;
  onChangeSelectElement: (selectValue: string) => void;
  selectOptions: SelectOptionsInterface[];
}

const DropdownSelect = (props: Readonly<DropdownSelectProps>): JSX.Element => {
  const onChangeSelectElement = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    props.onChangeSelectElement(event.target.value);
  };

  const containerStyle: CSSProperties = {
    margin: '12px auto',
    maxWidth: '500px',
    textAlign: 'center',
    textDecoration: 'none',
  };

  const selectStyle: CSSProperties = {
    border: '1px solid gainsboro',
    borderRadius: '18px',
    color: 'gray',
    height: '36px',
    outline: 'none',
    textIndent: '22px',
    width: '280px',
  };

  return (
    <div className={'DropdownSelect.tsx'} style={containerStyle}>
      <select
        style={selectStyle}
        value={props.dropdownSelectedValue}
        onBlur={onChangeSelectElement}
        onChange={onChangeSelectElement}
      >
        {props.selectOptions?.map((selectOption, index) => (
          <SelectOption
            key={index}
            displayText={selectOption.displayText}
            value={selectOption.value}
          />
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
