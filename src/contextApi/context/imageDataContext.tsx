/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch } from 'react';
import ImageDataInterface from '../../interface/imageData';

interface ImageDataContextInterface {
  dispatchImageDataArray: Dispatch<{
    payload: ImageDataInterface[];
    type: string;
  }>;
  imageDataArray: ImageDataInterface[];
}

const imageDataDefault: ImageDataContextInterface = {
  dispatchImageDataArray: () => {},
  imageDataArray: [],
};
const ImageDataContext = createContext(imageDataDefault);

export default ImageDataContext;
