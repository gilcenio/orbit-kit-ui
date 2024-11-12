/**
 * Custom hook to handle gesture events and calculate angles and distances.
 */
export default function useHandler(): {
    handleGesture: (e: any, setOffsetAngle: (value: React.SetStateAction<number>) => void, offsetAngle: number, radius: number, center: {
        x: number;
        y: number;
    }) => void;
    onTouchRelease: (e: any) => void;
};
