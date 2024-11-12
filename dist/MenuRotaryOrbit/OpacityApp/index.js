"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OpacityApp;
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
/**
 * A component that renders a view with adjustable background color and opacity.
 * @param color - The background color of the view (default is "black").
 * @param opacity - The opacity of the view (default is 0.4).
 */
function OpacityApp({ color = "black", opacity = 0.4, ...res }) {
    return (react_1.default.createElement(react_native_1.Pressable, { ...res, style: {
            ...react_native_1.StyleSheet.absoluteFillObject, // Faz o overlay cobrir toda a tela
            position: "absolute", // Position the view absolutely
            top: 0, // Align to the top of the parent
            bottom: 0, // Align to the bottom of the parent
            left: 0, // Align to the left of the parent
            right: 0, // Align to the right of the parent
            backgroundColor: color, // Set the background color
            opacity, // Set the opacity of the view
            zIndex: 1
        } }));
}
