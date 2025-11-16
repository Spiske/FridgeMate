import React, { CSSProperties, Ref } from "react";
import { StyledText as StyledTextConfig } from "../../configuration";
export declare class Props {
    style?: React.CSSProperties;
    config: StyledTextConfig;
    innerRef?: Ref<HTMLSpanElement>;
    replacementArgs?: string[];
    asHtml?: boolean;
    debugName?: string;
}
export declare function styledTextStyle(config: {
    color: string;
    useShadow: boolean;
}): CSSProperties;
export declare function StyledText(props: Props): React.JSX.Element;
