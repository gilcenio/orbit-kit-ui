import { IStylesheet } from "./@Types/interfaces";
/**
 * Creates a stylesheet based on the provided styles configuration.
 * @param size - The size of the container (width and height).
 * @param elContainerSizeX - The width of the element container.
 * @param elContainerSizeY - The height of the element container.
 * @param elContainerCoOrdinates - The coordinates for positioning the element container (default is { x: 0, y: 0 }).
 * @param backgroundColor - The background color of the container.
 * @returns A StyleSheet object with the defined styles.
 */
export declare const styles: ({ size, elContainerSizeX, elContainerSizeY, elContainerCoOrdinates, backgroundColor }: IStylesheet) => {
    /**
     * Style for the main container of the component.
     */
    container: {
        width: number;
        height: number;
        backgroundColor: string | undefined;
        zIndex: number;
    };
    /**
     * Style for text elements within the component.
     */
    textStyle: {
        marginTop: number;
        textAlign: "center";
        color: string;
        overflow: "visible";
    };
    /**
     * Style for image elements within the component.
     */
    imageStyle: {
        width: "100%";
        height: "100%";
    };
    /**
     * Style for elements positioned absolutely within the container.
     */
    elContainer: {
        position: "absolute";
        left: number;
        top: number;
        width: any;
        height: any;
        justifyContent: "center";
        alignItems: "center";
    };
};
