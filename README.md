# Orbit Kit UI

`orbit-kit-ui` A modern, versatile React Native component library with smooth animations, responsive layouts, and intuitive design, perfect for building clean and futuristic mobile interfaces.

# MenuApp Component

A customizable and animated menu component for React Native that arranges menu items in a circular or semi-circular pattern, providing options for center content, gesture handling, and opacity effects.

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
4. [Custom Hooks](#custom-hooks)
5. [Helper Functions](#helper-functions)
6. [Contributing](#contributing)

## Installation

To use `MenuApp`, make sure you have the following dependencies installed:

To use the library `orbit-kit-ui`, install it together with `react-native-gesture-handler`:

```bash
npm install orbit-kit-ui react-native-gesture-handler
# ou
yarn add orbit-kit-ui react-native-gesture-handler

# Usage

## Example in TSX

```tsx
import React from "react";
import MenuApp from "./MenuApp";
import { View } from "react-native";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <MenuApp
      isOpenMenu={true}
      content={[<View style={{ width: 20, height: 20, backgroundColor: "blue" }} />]}
      coreContent={<View style={{ width: 50, height: 50, backgroundColor: "green" }} />}
      radiusMenus={1.5}
      centerRotateContent={true}
      isOpacityMenu={true}
    />
  </View>
);

export default App;

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
| `animationEntering`   | `any`                             | Animation configuration for menu entry.                        |
| `animationExiting`    | `any`                             | Animation configuration for menu exit.                         |
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
