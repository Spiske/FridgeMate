import React from "react";
import { IntroImage } from "../../../../configuration/document/IntroductionScreenConfiguration";
import { MrzScannerIntroImage } from "../../../../configuration/mrz/MRZScannerIntroScreenConfiguration";
export declare class Props {
    fill?: string;
    source: IntroImage | MrzScannerIntroImage;
}
export declare function IntroductionImage(props: Props): React.JSX.Element;
