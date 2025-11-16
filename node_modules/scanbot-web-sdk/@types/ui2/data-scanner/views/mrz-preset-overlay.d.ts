import React from "react";
import MrzScannerView from "../../../mrz-scanner-view";
import { MrzFinderLayoutPreset } from "../../configuration/mrz/MRZFinderLayoutPreset";
declare class Props {
    visible?: boolean;
    scanner?: React.MutableRefObject<MrzScannerView | undefined>;
    config?: MrzFinderLayoutPreset;
    top?: number;
    isTopBarGradient?: boolean;
}
export declare function MrzPresetOverlay(props: Props): React.JSX.Element;
export {};
