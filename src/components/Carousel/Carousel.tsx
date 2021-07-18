import React, {  CSSProperties, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import httpsWithQuality from '../../utils/httpsWithQuality';

interface ImageInterface {
  deleted_at: string,
  is_deleted: boolean,
  villa: string,
  coliving: boolean,
  created_at: string,
  description: string,
  updated_at: string,
  filename: string,
  image_url: string,
  file: number,
  backup_image_of: string,
  guest_service: boolean,
  property: number,
  order: number,
  page: number
}

interface CarouselProps {
  images: ImageInterface[]
}

const Carousel = (props: CarouselProps): JSX.Element => {
  const settings: Settings = {
    dots: false,
    lazyLoad: 'ondemand',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselContainerStyle: CSSProperties = {
		background: 'white',
		margin: 'auto',
		padding: '15px 0px 30px 0px',
		textAlign: 'center',
	};

  return (
    <div style={carouselContainerStyle}>
      <Slider { ...settings }>
        {props.images.map((image, id) => (
          <div key={id}>
            <img
              src={httpsWithQuality(image.image_url, 450)}
              alt={image.filename}
              className="img-responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default Carousel;