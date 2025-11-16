import React from "react";
import { ScanAssistanceOverlay } from "../../../configuration";
declare class Props {
    visible: boolean;
    config: ScanAssistanceOverlay;
    animateOut: boolean;
    constraints: {
        containerHeight: string;
        padding: {
            top: number;
            bottom: number;
        };
    };
}
export declare function ScanAssistanceOverlayView(props: Props): React.JSX.Element;
export {};
