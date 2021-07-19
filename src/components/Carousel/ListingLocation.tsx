import React, { CSSProperties } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface ListingLocationProps {
  location: string;
}

const ListingLocation = (props: ListingLocationProps): JSX.Element => {
  const listingLocationContainerStyle: CSSProperties = {
    display: 'flex',
  };

  const listingLocationStyle: CSSProperties = {
    fontSize: '15px',
    fontWeight: 400,
    marginLeft: '2pxpx',
  };

  const iconSize = '11px';

  return (
    <div style={listingLocationContainerStyle}>
      <span>
        <FaMapMarkerAlt size={iconSize} />
      </span>
      <div style={listingLocationStyle}>{props.location}</div>
    </div>
  );
};

export default ListingLocation;
