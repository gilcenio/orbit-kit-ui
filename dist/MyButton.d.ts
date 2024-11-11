import React from 'react';
import { GestureResponderEvent } from 'react-native';
interface MyButtonProps {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    color?: string;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
