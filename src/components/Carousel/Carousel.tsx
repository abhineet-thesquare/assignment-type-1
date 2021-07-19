import React, { CSSProperties, useContext, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageDataInterface from '../../interface/imageData';
import ImageDataContext from '../../contextApi/context/imageDataContext';
import Listing from './Listing';
import CarouselHeader from './CarouselHeader';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import {
  getDisplayTextForSelectOptionFromImageData,
  getIsIndexValid,
  getSelectOptionsFromImageDataArray,
} from './functions/carouselFunc';
import DropdownSelect from '../common/DropdownSelect';

interface CarouselProps {
  imageDataArray: ImageDataInterface[];
  indexSelected: number;
}

const Carousel = (props: CarouselProps): JSX.Element => {
  const { imageDataArray, dispatchImageDataArray } = useContext(
    ImageDataContext,
  );
  dispatchImageDataArray({
    payload: props.imageDataArray,
    type: 'SET_IMAGE_DATA',
  });
  const indexMax = imageDataArray?.length - 1;

  const indexSelectedDefault = 0;

  const [dropdownSelectedValue, setDropdownSelectedValue] = useState('');
  const [indexSelected, setIndexSelected] = useState(indexSelectedDefault);

  const iconSize = '20px';
  const iconColor = 'red';
  const iconColorDisabled = 'pink';

  const prevArrowIconColor =
    indexSelected === 0 ? iconColorDisabled : iconColor;
  const nextArrowIconColor =
    indexSelected + 1 === imageDataArray.length ? iconColorDisabled : iconColor;

  const afterChange = (indexSelectedUpdated: number): void => {
    const isIndexValid = getIsIndexValid(indexSelectedUpdated, indexMax);
    if (!isIndexValid) return;
    setIndexSelected(indexSelectedUpdated);

    const dropdownSelectedValueUpdated =
      imageDataArray[indexSelectedUpdated].id;
    setDropdownSelectedValue(dropdownSelectedValueUpdated);
  };

  const clickListing = (indexClicked: number): void => {
    setIndexSelected(indexClicked);

    const dropdownSelectedValueUpdated = imageDataArray[indexClicked].id;
    setDropdownSelectedValue(dropdownSelectedValueUpdated);
  };

  const onChangeSelectElement = (selectValue: string): void => {
    setDropdownSelectedValue(selectValue);

    const indexSelectedUpdated = parseInt(selectValue);
    setIndexSelected(indexSelectedUpdated);
  };

  const onSwipe = (swipeDirection: string): void => {
    let indexSelectedUpdated =
      swipeDirection === 'left' ? indexSelected - 1 : indexSelected + 1;
    const isIndexValid = getIsIndexValid(indexSelectedUpdated, indexMax);
    if (!isIndexValid) return;
    setIndexSelected(indexSelectedUpdated);

    const dropdownSelectedValueUpdated =
      imageDataArray[indexSelectedUpdated].id;
    setDropdownSelectedValue(dropdownSelectedValueUpdated);
  };

  const settings: Settings = {
    arrows: true,
    dots: true,
    lazyLoad: 'ondemand',
    prevArrow: <BsArrowLeft size={iconSize} color={prevArrowIconColor} />,
    nextArrow: <BsArrowRight size={iconSize} color={nextArrowIconColor} />,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: indexSelectedDefault,
    autoplay: true,
    autoplaySpeed: 60000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: afterChange,
    onSwipe: onSwipe,
  };

  const carouselContainerStyle: CSSProperties = {
    background: 'rgb(246, 248, 248)',
    fontFamily: 'Montserrat,Helvetica,Arial,sans-serif',
    fontSize: '14px',
    margin: '30px auto 10px auto',
    minHeight: '400px',
    padding: '0px 20px 30px',
    maxWidth: '750px',
  };

  const selectOptions = getSelectOptionsFromImageDataArray(imageDataArray);

  return (
    <div style={carouselContainerStyle}>
      <CarouselHeader headerText={'Apartment Type'} />
      <DropdownSelect
        dropdownSelectedValue={dropdownSelectedValue}
        onChangeSelectElement={onChangeSelectElement}
        selectOptions={selectOptions}
      />
      <Slider {...settings}>
        {imageDataArray?.map((imageData, index) => (
          <div key={index}>
            <Listing
              imageData={imageData}
              index={index}
              indexSelected={indexSelected}
              clickListing={clickListing}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
