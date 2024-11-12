"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAngleBetweenTwoPoints = exports.calculateRadius = exports.WidthPercentage = void 0;
exports.pointOnCircle = pointOnCircle;
const react_native_1 = require("react-native");
/**
 * Calculates the width percentage of the screen.
 * @param percentage - Percentage of the screen width to calculate.
 * @returns Calculated width in pixels.
 */
const WidthPercentage = (percentage) => {
    const { width } = react_native_1.Dimensions.get('screen');
    return width * parseFloat(String(percentage)) / 100;
};
exports.WidthPercentage = WidthPercentage;
/**
 * Calculates the coordinates of a point on a circle.
 * @param params - Parameters including radius, angle in degrees, and center coordinates.
 * @returns [x, y] coordinates of the point on the circle.
 */
function pointOnCircle({ radius, angle, cx, cy }) {
    const radians = angle * (Math.PI / 180); // Convert degrees to radians
    const x = cx + radius * Math.cos(radians);
    const y = cy + radius * Math.sin(radians);
    return [x, y];
}
/**
 * Calculates the distance (radius) between two points.
 * @param center - Coordinates of the center point.
 * @param point - Coordinates of the point to measure.
 * @returns Distance between the center and the point.
 */
const calculateRadius = (center, point) => {
    const deltaX = center.x - point.x;
    const deltaY = center.y - point.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};
exports.calculateRadius = calculateRadius;
/**
 * Calculates the angle between two points relative to a center point.
 * @param center - Coordinates of the center point.
 * @param p1 - Coordinates of the first point.
 * @param p2 - Coordinates of the second point.
 * @returns Angle in degrees between the two points.
 */
const calculateAngleBetweenTwoPoints = (center, p1, p2) => {
    const angle1 = Math.atan2(p1.y - center.y, p1.x - center.x);
    const angle2 = Math.atan2(p2.y - center.y, p2.x - center.x);
    return (angle2 - angle1) * (180 / Math.PI); // Convert radians to degrees
};
exports.calculateAngleBetweenTwoPoints = calculateAngleBetweenTwoPoints;
