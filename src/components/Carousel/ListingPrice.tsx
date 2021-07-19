import React, { CSSProperties } from 'react';

interface ListingPriceProps {
  price: string;
  period: string;
}

const ListingPrice = (props: ListingPriceProps): JSX.Element => {
  const listingPriceContainerStyle: CSSProperties = {
    float: 'right',
    fontSize: '15px',
  };

  const listingPriceStyle: CSSProperties = {
    fontWeight: 800,
  };

  const listingPeriodStyle: CSSProperties = {
    fontWeight: 400,
  };

  return (
    <div style={listingPriceContainerStyle}>
      <span style={listingPriceStyle}>{props.price} </span>
      <span style={listingPeriodStyle}>/{props.period}</span>
    </div>
  );
};

export default ListingPrice;
