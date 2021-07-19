import React, { CSSProperties } from 'react';
import httpsWithQuality from '../../utils/httpsWithQuality';

interface ListingImageProps {
  filename: string;
  image_url: string;
}

const ListingImage = (props: ListingImageProps): JSX.Element => {
  const listingImageStyle: CSSProperties = {
    height: 'auto',
    marginBottom: '10px',
    maxWidth: '450px',
    minWidth: '300px',
    textAlign: 'center',
    width: '100%',
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
