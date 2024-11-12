import { ViewStyle, ViewProps, PressableProps } from "react-native";

/**
 * Opacity properties.
 */
export type IOpacityApp = PressableProps & {
  color?: string; // Optional color
  opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1; // Opacity level between 0 and 1
}

/**
 * Point on a circle.
 */
export interface IPointOnCircle {
  radius: number; // Circle radius
  angle: number; // Angle in degrees
  cx: number; // X coordinate of the circle center
  cy: number; // Y coordinate of the circle center
}

/**
 * Point with x and y coordinates.
 */
export interface IPoint {
  x: number; // X coordinate
  y: number; // Y coordinate
}

/**
 * Styles and sizes for a container.
 */
export interface IStylesheet {
  size?: number; // Component size
  elContainerSizeX?: number | any; // Container size on the X axis
  elContainerSizeY?: number | any; // Container size on the Y axis
  elContainerCoOrdinates?: IPoint; // Container coordinates
  backgroundColor?: string; // Background color
}

/**
 * Menu properties.
 */
export interface IMenuProps {
  isOpenMenu?: boolean; // Whether the menu is open or closed
  content?: JSX.Element[] | string[]; // Menu content
  contentStyles?: ViewStyle & ViewProps; // Styles for the content
  contentItemStyle?: ViewStyle & ViewProps; // Styles for each content item
  coreContent?: JSX.Element; // Center content
  centerContentSize?: number; // Size of the center content
  centerContainerStyle?: ViewStyle & ViewProps; // Styles for the center container
  centerRotateContent?: boolean; // Whether the center content should rotate
  animationEntering?: any; // Entering animation
  animationExiting?: any; // Exiting animation
  radiusMenus?: number; // Radius of the menus
  isOpacityMenu?: boolean; // Whether the menu has opacity
  opacityProps?: IOpacityApp; // Opacity properties
  isSemicircle?: boolean
  actionOpacity?: () => void
}
