import ImageDataInterface from '../../../interface/imageData';
import SelectOptionsInterface from '../../../interface/selectOptions';

export function getIsIndexValid(
  indexSelected: number,
  indexMax: number,
): boolean {
  const isIndexValid = indexSelected <= indexMax && indexSelected >= 0;
  return isIndexValid;
}

export function getDisplayTextForSelectOptionFromImageData(
  imageData: ImageDataInterface,
): string {
  const displayText = `${imageData.bedroomsCount} Bedroom  ${imageData.price} /${imageData.period}`;
  return displayText;
}

export function getSelectOptionsFromImageDataArray(
  imageDataArray: ImageDataInterface[],
): SelectOptionsInterface[] {
  const selectOptions = imageDataArray.map((imageData) => {
    const displayText = getDisplayTextForSelectOptionFromImageData(imageData);
    return {
      displayText: displayText,
      value: imageData.id,
    };
  });
  return selectOptions;
}
