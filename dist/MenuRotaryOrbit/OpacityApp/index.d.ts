import React from 'react';
import { IOpacityApp } from '../@Types/interfaces';
/**
 * A component that renders a view with adjustable background color and opacity.
 * @param color - The background color of the view (default is "black").
 * @param opacity - The opacity of the view (default is 0.4).
 */
export default function OpacityApp({ color, opacity, ...res }: IOpacityApp): React.JSX.Element;
