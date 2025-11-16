import type { DeepPartial } from "../utils";
import { ButtonConfiguration } from "../common/Common";
import { StyledText } from "../common/Common";
/**
The image for the introduction screen of a check scanner screen.
*/
export type CheckScannerIntroImage = CheckIntroDefaultImage | CheckNoImage | CheckIntroCustomImage;
/** @internal */
export declare namespace CheckScannerIntroImage {
    /** @internal */
    function from(source: DeepPartial<CheckScannerIntroImage>): CheckScannerIntroImage;
}
/**
No image for the introduction screen.
*/
export declare class CheckIntroDefaultImage {
    readonly _type: "CheckIntroDefaultImage";
    /** @param source {@displayType `DeepPartial<CheckIntroDefaultImage>`} */
    constructor(source?: DeepPartial<CheckIntroDefaultImage>);
}
/**
No image for the introduction screen.
*/
export declare class CheckNoImage {
    readonly _type: "CheckNoImage";
    /** @param source {@displayType `DeepPartial<CheckNoImage>`} */
    constructor(source?: DeepPartial<CheckNoImage>);
}
/**
A custom image for the introduction screen.
*/
export declare class CheckIntroCustomImage {
    readonly _type: "CheckIntroCustomImage";
    /**
      The web or file URI to the image.
      */
    uri: string;
    /** @param source {@displayType `DeepPartial<CheckIntroCustomImage>`} */
    constructor(source?: DeepPartial<CheckIntroCustomImage>);
}
/**
Configuration of the introduction screen for the check scanner.
*/
export declare class CheckScannerIntroScreenConfiguration {
    /**
      The image for the introduction screen.
      @defaultValue new CheckIntroDefaultImage({});
      */
    image: CheckScannerIntroImage;
    /**
      The background color of the introduction screen.
      @defaultValue "?sbColorSurface";
      */
    backgroundColor: string;
    /**
      The divider color of the introduction screen.
      @defaultValue "?sbColorOutline";
      */
    dividerColor: string;
    /**
      The handle color of the introduction screen.
      @defaultValue "?sbColorOutline";
      */
    handlerColor: string;
    /**
      Determines whether the introduction screen should automatically be shown or not when the scanning session starts.
      @defaultValue false;
      */
    showAutomatically: boolean;
    /**
      The title of the introduction screen, located in the top bar.
      @defaultValue new StyledText({
          "text": "?introScreenTitle",
          "color": "?sbColorOnSurface"
      });
      */
    title: StyledText;
    /**
      The text explanation of the introduction screen.
      @defaultValue new StyledText({
          "text": "?introScreenText",
          "color": "?sbColorOnSurface"
      });
      */
    explanation: StyledText;
    /**
      Configuration of the 'Done' / 'Start scanning' button.
      @defaultValue new ButtonConfiguration({
          "text": "?introScreenDoneButton",
          "accessibilityDescription": "?accessibilityDescriptionIntroScreenDoneButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "?sbColorPrimary",
              "strokeWidth": 0.0
          }),
          "foreground": new ForegroundStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    doneButton: ButtonConfiguration;
    /** @param source {@displayType `DeepPartial<CheckScannerIntroScreenConfiguration>`} */
    constructor(source?: DeepPartial<CheckScannerIntroScreenConfiguration>);
}
