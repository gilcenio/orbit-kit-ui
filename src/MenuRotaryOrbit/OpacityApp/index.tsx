import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { IOpacityApp } from '../@Types/interfaces';

/**
 * A component that renders a view with adjustable background color and opacity.
 * @param color - The background color of the view (default is "black").
 * @param opacity - The opacity of the view (default is 0.4).
 */
export default function OpacityApp({ color = "black", opacity = 0.4, ...res }: IOpacityApp) {
  return (
    <Pressable 
      {...res}
      style={{
        ...StyleSheet.absoluteFillObject, // Faz o overlay cobrir toda a tela
        position: "absolute", // Position the view absolutely
        top: 0, // Align to the top of the parent
        bottom: 0, // Align to the bottom of the parent
        left: 0, // Align to the left of the parent
        right: 0, // Align to the right of the parent
        backgroundColor: color, // Set the background color
        opacity, // Set the opacity of the view
        zIndex: 1
      }}
    />
  );
}
