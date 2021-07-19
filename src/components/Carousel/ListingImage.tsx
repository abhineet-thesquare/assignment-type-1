import React, { CSSProperties } from 'react';
import httpsWithQuality from '../../utils/httpsWithQuality';

interface ListingImageProps {
  filename: string;
  image_url: string;
}

const ListingImage = (props: ListingImageProps): JSX.Element => {
  const listingImageStyle: CSSProperties = {
    height: 'auto',
    maxWidth: '450px',
    minWidth: '300px',
    textAlign: 'center',
    width: '100%',
    marginBottom: '10px',
  };

  return (
    <img
      src={httpsWithQuality(props.image_url, 450)}
      alt={props.filename}
      style={listingImageStyle}
    />
  );
};

export default ListingImage;
