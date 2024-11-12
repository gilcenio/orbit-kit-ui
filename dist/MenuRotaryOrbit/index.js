"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const functions_1 = require("./functions");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const useHandler_1 = __importDefault(require("./Hooks/useHandler"));
const styles_1 = require("./styles");
const OpacityApp_1 = __importDefault(require("./OpacityApp"));
// Create animated components for better performance with reanimated
const ContentView = react_native_reanimated_1.default.createAnimatedComponent(react_native_1.View);
const CenterContentView = react_native_reanimated_1.default.createAnimatedComponent(react_native_1.View);
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
const MenuRotaryOrbit = ({ isOpenMenu, content = [], contentStyles, contentItemStyle, coreContent, centerContentSize = size / 4, centerContainerStyle, centerRotateContent, animationEntering, animationExiting, radiusMenus = 1, isOpacityMenu = false, opacityProps, isSemicircle = false, actionOpacity }) => {
    const center = { x: size / 2, y: size / 2 }; // Center coordinates of the menu
    const radius = size * radiusMenus; // Radius of the menu
    const itemCount = content.length;
    const divisionAngle = itemCount > 1 ? (isSemicircle ? 180 / (itemCount - 1) : 360 / itemCount) : 180; // Angle between each menu item
    const [offsetAngle, setOffsetAngle] = (0, react_1.useState)(0); // State for angle offset
    const { onTouchRelease, handleGesture } = (0, useHandler_1.default)(); // Custom hook for gesture handling
    const rotationAdjustment = isSemicircle ? itemCount > 1 ? 180 : -90 : -90;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isOpenMenu && isOpacityMenu && react_1.default.createElement(OpacityApp_1.default, { onPress: actionOpacity, ...opacityProps }),
        react_1.default.createElement(react_native_gesture_handler_1.PanGestureHandler, { enabled: isSemicircle ? false : true, onHandlerStateChange: onTouchRelease, onGestureEvent: (e) => handleGesture(e, setOffsetAngle, offsetAngle, radius, center) // Handle gesture events
         },
            react_1.default.createElement(react_native_1.View, { style: [(0, styles_1.styles)({ size }).container, contentStyles] },
                isOpenMenu && content.map((item, index) => {
                    // Calculate position of each menu item
                    const [x, y] = (0, functions_1.pointOnCircle)({
                        radius,
                        angle: divisionAngle ? (divisionAngle * index + offsetAngle + rotationAdjustment) : 0,
                        cx: center.x,
                        cy: center.y,
                    });
                    const elContainerSizeX = size / 4;
                    const elContainerSizeY = size / 4;
                    return (react_1.default.createElement(ContentView, { layout: react_native_reanimated_1.LinearTransition.springify(), key: index, entering: animationEntering, exiting: animationExiting },
                        react_1.default.createElement(react_native_1.View, { style: [
                                (0, styles_1.styles)({
                                    elContainerSizeX,
                                    elContainerSizeY,
                                    elContainerCoOrdinates: { x, y },
                                }).elContainer,
                                contentItemStyle
                            ] }, item)));
                }),
                coreContent &&
                    react_1.default.createElement(CenterContentView, { style: [
                            {
                                transform: centerRotateContent
                                    ? [
                                        {
                                            rotate: react_native_1.I18nManager.isRTL
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
                            },
                            centerContainerStyle
                        ] }, coreContent)))));
};
exports.default = MenuRotaryOrbit;
