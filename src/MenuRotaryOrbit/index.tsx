import React, { useState } from "react";
import { View, I18nManager } from "react-native";
import { pointOnCircle } from "./functions";
import { PanGestureHandler } from "react-native-gesture-handler";
import { IMenuProps } from "./@Types/interfaces";
import Animated, { LinearTransition } from "react-native-reanimated";
import useHandler from "./Hooks/useHandler";
import { styles } from "./styles";
import OpacityApp from "./OpacityApp";

// Create animated components for better performance with reanimated
const ContentView = Animated.createAnimatedComponent(View);
const CenterContentView = Animated.createAnimatedComponent(View);

// Default size for the menu
const size = 60;

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
const MenuRotaryOrbit = ({
  isOpenMenu,
  content = [],
  contentStyles,
  contentItemStyle,
  coreContent,
  centerContentSize = size / 4,
  centerContainerStyle,
  centerRotateContent,
  animationEntering,
  animationExiting,
  radiusMenus = 1,
  isOpacityMenu = false,
  opacityProps,
  isSemicircle = false,
  actionOpacity
}: IMenuProps) => {
    
  const center = { x: size / 2, y: size / 2 }; // Center coordinates of the menu
  const radius = size * radiusMenus; // Radius of the menu
  const itemCount = content.length;
  const divisionAngle = itemCount > 1 ? (isSemicircle ? 180 / (itemCount - 1) : 360 / itemCount) : 180; // Angle between each menu item
  const [offsetAngle, setOffsetAngle] = useState(0); // State for angle offset
  const { onTouchRelease, handleGesture } = useHandler(); // Custom hook for gesture handling

  const rotationAdjustment = isSemicircle ? itemCount > 1 ? 180 : -90 : -90;

  return (
    <>
      {isOpenMenu && isOpacityMenu && <OpacityApp onPress={actionOpacity} {...opacityProps}/>}
      <PanGestureHandler
        enabled={isSemicircle ? false : true}
        onHandlerStateChange={onTouchRelease} // Handle touch release
        onGestureEvent={(e) =>
          handleGesture(e, setOffsetAngle, offsetAngle, radius, center) // Handle gesture events
        }
      >
        <View style={[styles({ size }).container, contentStyles]}>
          
          {isOpenMenu && content.map((item, index) => {
            // Calculate position of each menu item
            const [x, y] = pointOnCircle({
              radius,
              angle: divisionAngle ? (divisionAngle * index + offsetAngle + rotationAdjustment) : 0,
              cx: center.x,
              cy: center.y,
            });
            const elContainerSizeX = size / 4;
            const elContainerSizeY = size / 4;

            return (
              <ContentView
                layout={LinearTransition.springify()} // Animated layout transition
                key={index}
                entering={animationEntering}
                exiting={animationExiting}
              >
                <View
                  style={[
                    styles({
                      elContainerSizeX,
                      elContainerSizeY,
                      elContainerCoOrdinates: { x, y },
                    }).elContainer,
                    contentItemStyle
                  ]}
                >
                  {item}
                </View>
              </ContentView>
            );
          })}

          {coreContent && 
            <CenterContentView
              style={[
                {
                  transform: centerRotateContent
                    ? [
                        {
                          rotate: I18nManager.isRTL
                            ? -offsetAngle + "deg"
                            : offsetAngle + "deg",
                        },
                      ]
                    : [{ scale: 1 }],
                  left: center.x - centerContentSize / 2,
                  top: center.x - centerContentSize / 2,
                  width: centerContentSize,
                  height: centerContentSize,
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "red" // Background color of the center content
                },
                centerContainerStyle
              ]}
            >
              {coreContent}
            </CenterContentView>
          }
        </View>
      </PanGestureHandler>
    </>
  );
};

export default MenuRotaryOrbit;
