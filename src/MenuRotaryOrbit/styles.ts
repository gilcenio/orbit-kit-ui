import { WP } from "./functions";
import { IStylesheet } from "./@Types/interfaces";
import { StyleSheet } from 'react-native';

/**
 * Creates a stylesheet based on the provided styles configuration.
 * @param size - The size of the container (width and height).
 * @param elContainerSizeX - The width of the element container.
 * @param elContainerSizeY - The height of the element container.
 * @param elContainerCoOrdinates - The coordinates for positioning the element container (default is { x: 0, y: 0 }).
 * @param backgroundColor - The background color of the container.
 * @returns A StyleSheet object with the defined styles.
 */
export const styles = ({
  size,
  elContainerSizeX,
  elContainerSizeY,
  elContainerCoOrdinates = { x: 0, y: 0 },
  backgroundColor
}: IStylesheet) => StyleSheet.create({
  /**
   * Style for the main container of the component.
   */
  container: {
    width: size ? size : WP('100'), // Width of the container
    height: size ? size : WP('100'), // Height of the container
    backgroundColor, // Background color of the container
    zIndex: 100, // Z-index for stacking order
  },
  /**
   * Style for text elements within the component.
   */
  textStyle: {
    marginTop: 10, // Top margin for text
    textAlign: 'center', // Center align text
    color: "#000000", // Text color
    overflow: 'visible', // Make overflow visible
  },
  /**
   * Style for image elements within the component.
   */
  imageStyle: {
    width: '100%', // Full width
    height: '100%' // Full height
  },
  /**
   * Style for elements positioned absolutely within the container.
   */
  elContainer: {
    position: "absolute", // Absolute positioning
    left: elContainerCoOrdinates.x - elContainerSizeX / 2, // Horizontal position
    top: elContainerCoOrdinates.y - elContainerSizeY / 2, // Vertical position
    width: elContainerSizeX, // Width of the element container
    height: elContainerSizeY, // Height of the element container
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  }
});
