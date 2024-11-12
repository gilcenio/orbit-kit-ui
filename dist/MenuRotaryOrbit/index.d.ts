import React from "react";
import { IMenuProps } from "./@Types/interfaces";
/**
 * Menu component that displays items in a circular arrangement with optional center content.
 * @param isOpenMenu - Whether the menu is open or closed.
 * @param content - Array of menu items to display.
 * @param contentStyles - Additional styles for the menu items container.
 * @param contentItemStyle - Styles for individual menu items.
 * @param coreContent - JSX.Element to be displayed at the center of the menu.
 * @param centerContentSize - Size of the center content (default is size / 4).
 * @param centerContainerStyle - Styles for the center content container.
 * @param centerRotateContent - Whether the center content should rotate with the menu.
 * @param animationEntering - Animation configuration for when menu items enter.
 * @param animationExiting - Animation configuration for when menu items exit.
 * @param radiusMenus - Multiplier for the menu's radius (default is 1).
 * @param isOpacityMenu - Whether the menu has opacity effect.
 * @param opacityProps - Properties for opacity effect.
 */
declare const MenuRotaryOrbit: ({ isOpenMenu, content, contentStyles, contentItemStyle, coreContent, centerContentSize, centerContainerStyle, centerRotateContent, animationEntering, animationExiting, radiusMenus, isOpacityMenu, opacityProps, isSemicircle, actionOpacity }: IMenuProps) => React.JSX.Element;
export default MenuRotaryOrbit;
