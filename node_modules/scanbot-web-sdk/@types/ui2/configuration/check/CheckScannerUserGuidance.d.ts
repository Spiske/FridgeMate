import type { DeepPartial } from "../utils";
import { BackgroundStyle } from "../common/Common";
import { StyledText } from "../common/Common";
/**
Configure the captions of the user guidance hints for different scanning states.
*/
export declare class CheckScannerGuidanceStates {
    /**
      The user guidance text displayed when no check is found. Initial state.
      @defaultValue "?checkUserGuidanceNoCheckFound";
      */
    noCheckFound: string;
    /**
      The user guidance text displayed when a check presence was detected and scanning is in progress.
      @defaultValue "?checkUserGuidanceScanningProgress";
      */
    scanningProgress: string;
    /**
      The user guidance text displayed when it is too dark to capture an adequate image.
      @defaultValue "?checkUserGuidanceTooDark";
      */
    tooDark: string;
    /**
      The user guidance text displayed when the detected check is too far away and appears too small.
      @defaultValue "?checkUserGuidanceTooSmall";
      */
    tooSmall: string;
    /**
      The user guidance text displayed when the detected check is not in a good perspective (device tilted).
      @defaultValue "?checkUserGuidanceBadPerspective";
      */
    badPerspective: string;
    /** @param source {@displayType `DeepPartial<CheckScannerGuidanceStates>`} */
    constructor(source?: DeepPartial<CheckScannerGuidanceStates>);
}
/**
Configuration of the hints guiding users through the check scanning process.
*/
export declare class CheckScannerGuidanceConfiguration {
    /**
      Determines whether the user guidance hints should be visible (enabled).
      @defaultValue true;
      */
    visibility: boolean;
    /**
      Configure the text style for the user guidance hints.
      @defaultValue new StyledText({
          "text": "?checkUserGuidanceNoCheckFound",
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
      @defaultValue new CheckScannerGuidanceStates({});
      */
    statesTitles: CheckScannerGuidanceStates;
    /** @param source {@displayType `DeepPartial<CheckScannerGuidanceConfiguration>`} */
    constructor(source?: DeepPartial<CheckScannerGuidanceConfiguration>);
}
