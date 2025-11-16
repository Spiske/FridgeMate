import React from "react";
import { MrzScannerIntroScreenConfiguration } from "../../configuration/mrz/MRZScannerIntroScreenConfiguration";
type Props = {
    config: MrzScannerIntroScreenConfiguration;
    isOpen: boolean;
    onClose: () => void;
};
export declare function IntroductionPopup(props: Props): React.JSX.Element;
export {};
