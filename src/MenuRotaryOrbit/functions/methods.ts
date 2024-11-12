import { Dimensions } from 'react-native';
import { IPoint, IPointOnCircle } from '../@Types/interfaces';

/**
 * Calculates the width percentage of the screen.
 * @param percentage - Percentage of the screen width to calculate.
 * @returns Calculated width in pixels.
 */
export const WidthPercentage = (percentage: number | string): number => {
    const { width } = Dimensions.get('screen');
    return width * parseFloat(String(percentage)) / 100;
}

/**
 * Calculates the coordinates of a point on a circle.
 * @param params - Parameters including radius, angle in degrees, and center coordinates.
 * @returns [x, y] coordinates of the point on the circle.
 */
export function pointOnCircle({ radius, angle, cx, cy }: IPointOnCircle): [number, number] {
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
export const calculateRadius = (center: IPoint, point: IPoint): number => {
    const deltaX = center.x - point.x;
    const deltaY = center.y - point.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

/**
 * Calculates the angle between two points relative to a center point.
 * @param center - Coordinates of the center point.
 * @param p1 - Coordinates of the first point.
 * @param p2 - Coordinates of the second point.
 * @returns Angle in degrees between the two points.
 */
export const calculateAngleBetweenTwoPoints = (center: IPoint, p1: IPoint, p2: IPoint): number => {
    const angle1 = Math.atan2(p1.y - center.y, p1.x - center.x);
    const angle2 = Math.atan2(p2.y - center.y, p2.x - center.x);
    return (angle2 - angle1) * (180 / Math.PI); // Convert radians to degrees
}
