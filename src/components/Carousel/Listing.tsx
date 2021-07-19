import React, { CSSProperties } from 'react';
import ImageDataInterface from '../../interface/imageData';
import ListingBedrooms from './ListingBedrooms';
import ListingImage from './ListingImage';
import ListingInfoIcons from './ListingInfoIcons';
import ListingLocation from './ListingLocation';
import ListingPrice from './ListingPrice';
import ListingResidents from './ListingResidents';

interface ListingProps {
  imageData: ImageDataInterface;
  indexSelected: number;
  index: number;
  clickListing: (indexClicked: number) => void;
}

const Listing = (props: ListingProps): JSX.Element => {
  const clickListing = (): void => {
    props.clickListing(props.index);
  };

  const listingContainerStyle: CSSProperties = {
    backgroundColor: 'white',
    maxWidth: '326px',
    padding: '8px',
    boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
    transition: 'all .3s cubic-bezier(.25,.8,.25,1)',
  };

  const isSelected = props.indexSelected === props.index;
  if (isSelected) {
    listingContainerStyle.border = '1px solid rgb(225, 52, 53)';
  }

  return (
    <div style={listingContainerStyle} onClick={clickListing}>
      <ListingImage
        filename={props.imageData.filename}
        image_url={props.imageData.image_url}
      />
      <ListingPrice
        price={props.imageData.price}
        period={props.imageData.period}
      />
      <ListingBedrooms bedroomsCount={props.imageData.bedroomsCount} />
      <ListingInfoIcons
        bedroomsCount={props.imageData.bedroomsCount}
        bathsCount={props.imageData.bathsCount}
      />
      <ListingLocation location={props.imageData.location} />
      <ListingResidents residentsCount={props.imageData.residentsCount} />
    </div>
  );
};

export default Listing;
