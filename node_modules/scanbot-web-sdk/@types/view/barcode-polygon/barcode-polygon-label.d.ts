import React from "react";
import { BarcodeOverlay } from "./barcode-overlay";
import { Point } from "../../utils/dto/Point";
import { BarcodePolygonLabelStyle, SelectionOverlayConfiguration, SelectionOverlayTextFormat } from "../../model/configuration/selection-overlay-configuration";
import { BarcodeItem } from "../../core-types";
export declare class BarcodePolygonLabelProps {
    element: BarcodeOverlay;
    configuration: SelectionOverlayConfiguration;
    animateToPoints?: Point[];
    onClick?: (element: BarcodeOverlay) => void;
}
export interface BarcodePolygonLabelState {
    element: BarcodeOverlay;
}
export declare class BarcodePolygonLabel<Props extends BarcodePolygonLabelProps = BarcodePolygonLabelProps> extends React.Component<Props, BarcodePolygonLabelState> {
    customStyle?: BarcodePolygonLabelStyle;
    constructor(props: any);
    style(style: BarcodePolygonLabelStyle): void;
    update(model: BarcodeOverlay): void;
    label: HTMLDivElement;
    formatText(code: BarcodeItem, format: SelectionOverlayTextFormat): string | undefined;
    render(): React.ReactNode;
}
