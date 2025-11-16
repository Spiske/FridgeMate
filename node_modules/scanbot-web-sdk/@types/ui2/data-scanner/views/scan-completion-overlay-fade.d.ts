import React from "react";
import { ScanCompletionOverlay } from "../../configuration/common/ScanCompletionOverlay";
declare class Props {
    visible: boolean;
    configuration: ScanCompletionOverlay;
    transitionComplete: () => void;
}
export declare function ScanCompletionOverlayFade(props: Props): React.JSX.Element;
export {};
