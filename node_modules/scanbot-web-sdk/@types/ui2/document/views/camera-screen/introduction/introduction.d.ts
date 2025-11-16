import React from "react";
import { IntroductionScreenConfiguration } from "../../../../configuration/document/IntroductionScreenConfiguration";
type Props = {
    config: IntroductionScreenConfiguration;
    isOpen: boolean;
    onClose: () => void;
};
export declare function Introduction(props: Props): React.JSX.Element;
export {};
