import React, { CSSProperties } from 'react';

interface CarouselHeaderProps {
  headerText: string;
}

const CarouselHeader = (props: CarouselHeaderProps): JSX.Element => {
  const carouselHeaderStyle: CSSProperties = {
    fontSize: '21px',
    fontWeight: 500,
    padding: '10px 15px 20px',
    textAlign: 'left',
  };

  return <div style={carouselHeaderStyle}>{props.headerText}</div>;
};

export default CarouselHeader;
