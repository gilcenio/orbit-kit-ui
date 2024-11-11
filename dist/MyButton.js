"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MyButton = ({ title, onPress, color = '#2196F3' }) => {
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.button, { backgroundColor: color }], onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, title)));
};
const styles = react_native_1.StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});
exports.default = MyButton;
