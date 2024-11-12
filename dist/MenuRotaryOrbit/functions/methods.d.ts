import { IPoint, IPointOnCircle } from '../@Types/interfaces';
/**
 * Calculates the width percentage of the screen.
 * @param percentage - Percentage of the screen width to calculate.
 * @returns Calculated width in pixels.
 */
export declare const WidthPercentage: (percentage: number | string) => number;
/**
 * Calculates the coordinates of a point on a circle.
 * @param params - Parameters including radius, angle in degrees, and center coordinates.
 * @returns [x, y] coordinates of the point on the circle.
 */
export declare function pointOnCircle({ radius, angle, cx, cy }: IPointOnCircle): [number, number];
/**
 * Calculates the distance (radius) between two points.
 * @param center - Coordinates of the center point.
 * @param point - Coordinates of the point to measure.
 * @returns Distance between the center and the point.
 */
export declare const calculateRadius: (center: IPoint, point: IPoint) => number;
/**
 * Calculates the angle between two points relative to a center point.
 * @param center - Coordinates of the center point.
 * @param p1 - Coordinates of the first point.
 * @param p2 - Coordinates of the second point.
 * @returns Angle in degrees between the two points.
 */
export declare const calculateAngleBetweenTwoPoints: (center: IPoint, p1: IPoint, p2: IPoint) => number;
