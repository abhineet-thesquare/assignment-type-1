import React, { CSSProperties } from 'react';
import { FaBath } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';

interface ListingInfoIconsProps {
  bedroomsCount: number;
  bathsCount: number;
}

const ListingInfoIcons = (props: ListingInfoIconsProps): JSX.Element => {
  const listingInfoIconsContainerStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: 400,
    display: 'flex',
    borderBottom: '1px solid gainsboro',
    margin: '10px 0px 20px 0px',
    paddingBottom: '15px',
  };

  const listingInfoCountStyle: CSSProperties = {
    marginRight: '10px',
    marginLeft: '5px',
  };

  const iconSize = '16px';

  return (
    <div style={listingInfoIconsContainerStyle}>
      <div>
        <FaBed size={iconSize} />
      </div>
      <div style={listingInfoCountStyle}>{props.bedroomsCount}</div>
      <div>
        <FaBath size={iconSize} />
      </div>
      <div style={listingInfoCountStyle}>{props.bathsCount}</div>
    </div>
  );
};

export default ListingInfoIcons;
