import React, { CSSProperties } from 'react';

interface ListingResidentsProps {
  residentsCount: number;
}

const ListingResidents = (props: ListingResidentsProps): JSX.Element => {
  const listingResidentsStyle: CSSProperties = {
    fontSize: '12px',
    fontWeight: 400,
    textAlign: 'left',
    marginTop: '4px',
  };

  return (
    <div style={listingResidentsStyle}>
      Max residents: {props.residentsCount}
    </div>
  );
};

export default ListingResidents;
