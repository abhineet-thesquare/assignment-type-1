import ImageDataInterface from '../../interface/imageData';

const ImageDataReducer = (
  state: ImageDataInterface[],
  action: { payload: ImageDataInterface[]; type: string },
): ImageDataInterface[] => {
  switch (action.type) {
    case 'SET_IMAGE_DATA':
      return action.payload;
    default:
      return action.payload;
  }
};

export default ImageDataReducer;
