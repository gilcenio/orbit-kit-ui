# Orbit Kit UI

`orbit-kit-ui` A modern, versatile React Native component library with smooth animations, responsive layouts, and intuitive design, perfect for building clean and futuristic mobile interfaces.

# MenuRotaryOrbit Component

A customizable and animated menu component for React Native that arranges menu items in a circular or semi-circular pattern, providing options for center content, gesture handling, and opacity effects.

# Check out this examples!

| Example 1               | Example 2               | Example 3               | Example 4               |
|-----------------------|-----------------------|-----------------------|-----------------------|
| ![Example1](https://github.com/gilcenio/orbit-kit-ui/blob/main/gifs/video%202.gif?raw=true) | ![Example2](https://github.com/gilcenio/orbit-kit-ui/blob/main/gifs/video%203.gif?raw=true) | ![Example3](https://github.com/gilcenio/orbit-kit-ui/blob/main/gifs/video%204.gif?raw=true) | ![Example4](https://github.com/gilcenio/orbit-kit-ui/blob/main/gifs/video%205.gif?raw=true)


## Features

- **Circular and Semi-Circular Arrangements**: Display menu items around a circular or semi-circular path.
- **Animated Gestures**: Rotate the menu using gestures with customizable animations.
- **Center Content**: Include a centered item, optionally rotating with the menu.
- **Opacity Layer**: Optional opacity effect with customizable properties.
- **Highly Configurable**: Easily configure properties like size, radius, animation, and more.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Reference](#api-reference)
3. [Author](#author)

## Installation

To use `MenuRotaryOrbit`, make sure you have the following dependencies installed:

To use the library `orbit-kit-ui`, install it together with `react-native-gesture-handler`  and  `react-native-reanimated`

```bash
npm i orbit-kit-ui
# or
yarn add orbit-kit-ui
```
# Usage

## Example in TSX

```tsx
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text } from 'react-native';
import MenuApp from './src/MenuApp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';


export function Item(emoji: string, onPress: () => void): React.JSX.Element {
  return(
    <Pressable 
      onPress={onPress} 
      style={{
        width: 50, 
        height: 50, 
        backgroundColor: 'white', 
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.3
      }}
    >
      <Text style={{fontSize: 24}}>{emoji}</Text>
    </Pressable>
  )
}

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const content: React.JSX.Element[] = [
    Item("😁", () => alert("😁")),
    Item("😒", () => alert("😒")),
    Item("😊", () => alert("😊")),
    Item("😂", () => alert("😂"))
  ]

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <MenuApp
        coreContent={Item("😂", () => setIsOpen(!isOpen))}
        content={content}
        isOpenMenu={isOpen}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
```

# API Reference

## IMenuProps

Properties for configuring the `MenuApp` component:

| Property              | Type                              | Description                                                    |
|-----------------------|-----------------------------------|----------------------------------------------------------------|
| `isOpenMenu`          | `boolean`                         | Determines if the menu is open.                                |
| `content`             | `JSX.Element[]` or `string[]`     | Array of content items to display in the menu.                 |
| `contentStyles`       | `ViewStyle & ViewProps`           | Additional styles for the content container.                   |
| `contentItemStyle`    | `ViewStyle & ViewProps`           | Styles for individual content items.                           |
| `coreContent`         | `JSX.Element`                     | Center element to display in the menu.                         |
| `centerContentSize`   | `number`                          | Size of the center content element.                            |
| `centerContainerStyle`| `ViewStyle & ViewProps`           | Styles for the center content container.                       |
| `centerRotateContent` | `boolean`                         | Enables rotation of the center content with the menu.          |
| `animationEntering`   | `[Entering/animations](https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/)`                             | Animation configuration for menu entry.                        |
| `animationExiting`    | `[Exiting/animations](https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/)`                             | Animation configuration for menu exit.                         |
| `radiusMenus`         | `number`                          | Multiplier for the menu radius.                                |
| `isOpacityMenu`       | `boolean`                         | Enables an opacity effect overlay.                             |
| `opacityProps`        | `IOpacityApp`                     | Custom properties for the opacity effect.                      |
| `isSemicircle`        | `boolean`                         | Configures menu layout as a semi-circle.                       |
| `actionOpacity`       | `() => void`                      | Function triggered when opacity is pressed.                    |

## IOpacityApp

Properties for managing opacity effects:

| Property              | Type          | Description                                                    |
|-----------------------|---------------|----------------------------------------------------------------|
| `color`               | `string`      | Optional background color.                                     |
| `opacity`             | `0-1`         | Opacity level between 0 and 1.                                 |

## IStylesheet

Container styles and sizes:

| Property              | Type              | Description                                                    |
|-----------------------|-------------------|----------------------------------------------------------------|
| `size`                | `number`          | Size of the component.                                         |
| `elContainerSizeX`    | `number`          | Width of the container.                                        |
| `elContainerSizeY`    | `number`          | Height of the container.                                       |
| `elContainerCoOrdinates` | `IPoint`       | Coordinates of the container center.                           |
| `backgroundColor`     | `string`          | Background color.   

## Author

© 2024 Gilcenio Santos Vilanova Junior. All rights reserved.


