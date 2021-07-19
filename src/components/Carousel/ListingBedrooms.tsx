import React, { CSSProperties } from 'react';

interface ListingBedroomsProps {
  bedroomsCount: number;
}

const ListingBedrooms = (props: ListingBedroomsProps): JSX.Element => {
  const listingBedroomsStyle: CSSProperties = {
    fontSize: '15px',
    fontWeight: 400,
  };

  return <div style={listingBedroomsStyle}>{props.bedroomsCount} Bedroom</div>;
};

export default ListingBedrooms;
