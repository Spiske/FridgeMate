import type { DeepPartial } from "../utils";
import { BackgroundStyle } from "../common/Common";
import { StyledText } from "../common/Common";
/**
Configure the captions of the user guidance hints for different scanning states.
*/
export declare class CreditCardScannerGuidanceStates {
    /**
      The user guidance text displayed when no credit card is found. Initial state.
      @defaultValue "?creditCardUserGuidanceNoCardFound";
      */
    noCardFound: string;
    /**
      The user guidance text displayed when a card presence was detected and scanning is in progress.
      @defaultValue "?creditCardUserGuidanceScanningProgress";
      */
    scanningProgress: string;
    /**
      The user guidance text displayed when it is too dark to capture an adequate image.
      @defaultValue "?creditCardUserGuidanceTooDark";
      */
    tooDark: string;
    /**
      The user guidance text displayed when the detected card is too far away and appears too small.
      @defaultValue "?creditCardUserGuidanceTooSmall";
      */
    tooSmall: string;
    /**
      The user guidance text displayed when the detected card is not in a good perspective (device tilted).
      @defaultValue "?creditCardUserGuidanceBadPerspective";
      */
    badPerspective: string;
    /** @param source {@displayType `DeepPartial<CreditCardScannerGuidanceStates>`} */
    constructor(source?: DeepPartial<CreditCardScannerGuidanceStates>);
}
/**
Configuration of the hints guiding users through the credit card scanning process.
*/
export declare class CreditCardScanGuidanceConfiguration {
    /**
      Determines whether the user guidance hints should be visible (enabled).
      @defaultValue true;
      */
    visibility: boolean;
    /**
      Configure the text style for the user guidance hints.
      @defaultValue new StyledText({
          "text": "?creditCardUserGuidanceNoCardFound",
          "color": "?sbColorOnPrimary"
      });
      */
    title: StyledText;
    /**
      Configure the background style for the user guidance hints.
      @defaultValue new BackgroundStyle({
          "strokeColor": "#00000000",
          "fillColor": "?sbColorSurfaceLow"
      });
      */
    background: BackgroundStyle;
    /**
      Configure the captions of the user guidance hints for different states.
      @defaultValue new CreditCardScannerGuidanceStates({});
      */
    statesTitles: CreditCardScannerGuidanceStates;
    /** @param source {@displayType `DeepPartial<CreditCardScanGuidanceConfiguration>`} */
    constructor(source?: DeepPartial<CreditCardScanGuidanceConfiguration>);
}
