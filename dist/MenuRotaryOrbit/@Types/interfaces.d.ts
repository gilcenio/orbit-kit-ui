import { ViewStyle, ViewProps, PressableProps } from "react-native";
/**
 * Opacity properties.
 */
export type IOpacityApp = PressableProps & {
    color?: string;
    opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
};
/**
 * Point on a circle.
 */
export interface IPointOnCircle {
    radius: number;
    angle: number;
    cx: number;
    cy: number;
}
/**
 * Point with x and y coordinates.
 */
export interface IPoint {
    x: number;
    y: number;
}
/**
 * Styles and sizes for a container.
 */
export interface IStylesheet {
    size?: number;
    elContainerSizeX?: number | any;
    elContainerSizeY?: number | any;
    elContainerCoOrdinates?: IPoint;
    backgroundColor?: string;
}
/**
 * Menu properties.
 */
export interface IMenuProps {
    isOpenMenu?: boolean;
    content?: JSX.Element[] | string[];
    contentStyles?: ViewStyle & ViewProps;
    contentItemStyle?: ViewStyle & ViewProps;
    coreContent?: JSX.Element;
    centerContentSize?: number;
    centerContainerStyle?: ViewStyle & ViewProps;
    centerRotateContent?: boolean;
    animationEntering?: any;
    animationExiting?: any;
    radiusMenus?: number;
    isOpacityMenu?: boolean;
    opacityProps?: IOpacityApp;
    isSemicircle?: boolean;
    actionOpacity?: () => void;
}
