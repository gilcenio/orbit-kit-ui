import { useRef } from "react";
import { calculateAngleBetweenTwoPoints, calculateRadius } from "../functions";
import { I18nManager } from "react-native";

/**
 * Custom hook to handle gesture events and calculate angles and distances.
 */
export default function useHandler() {
  // Ref to store current touch event coordinates
  const touchEvent = useRef<any>({ x: undefined, y: undefined });
  // Ref to store previous touch event coordinates
  const touchEventPrev = useRef<any>({ x: undefined, y: undefined });
  // Ref to store the initial touch event and angle
  const touchStart = useRef<any>(undefined);
  
  /**
   * Handles gesture events to calculate and update the angle based on touch movements.
   * @param e - The gesture event containing touch coordinates.
   * @param setOffsetAngle - Function to update the angle state.
   * @param offsetAngle - The current angle offset.
   * @param radius - The radius of the area where touch is valid.
   * @param center - The center coordinates of the touch area.
   */
  const handleGesture = (
    e: any,
    setOffsetAngle: (value: React.SetStateAction<number>) => void,
    offsetAngle: number,
    radius: number,
    center: { x: number; y: number; }
  ) => {
    touchEvent.current = e.nativeEvent;
    
    // Initialize touch start values if not set
    if (!touchStart.current) {
      touchStart.current = {
        touchEvent: e.nativeEvent,
        angle: offsetAngle
      };
      touchEventPrev.current = e.nativeEvent;
      return;
    }
    
    // Calculate the distance from the center
    const touchDistanceFromCenter = calculateRadius(center, touchEvent.current);
    if (touchDistanceFromCenter > radius * 0.3 && touchDistanceFromCenter < radius * 1.5) {
      // Calculate the angle moved between the previous and current touch events
      const angleMoved = calculateAngleBetweenTwoPoints(center, touchEventPrev.current, touchEvent.current);
      touchEventPrev.current = e.nativeEvent;
      // Update the angle considering RTL layout direction
      setOffsetAngle(offsetAngle + (I18nManager.isRTL ? -angleMoved : angleMoved));
    }
  };

  /**
   * Resets touch event states when the touch is released.
   * @param e - The gesture event indicating the touch has ended.
   */
  const onTouchRelease = (e: any) => {
    if (e.nativeEvent.oldState === 4) { // 4 indicates the end of touch gesture
      touchEventPrev.current = undefined;
      touchStart.current = undefined;
    }
  };

  return {
    handleGesture,
    onTouchRelease
  };
}
