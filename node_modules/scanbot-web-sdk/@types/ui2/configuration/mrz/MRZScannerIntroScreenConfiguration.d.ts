import type { DeepPartial } from "../utils";
import { ButtonConfiguration } from "../common/Common";
import { StyledText } from "../common/Common";
/**
Determines the image for the introduction screen.
*/
export type MrzScannerIntroImage = MrzIntroDefaultImage | MrzIntroNoImage | MrzIntroCustomImage;
/** @internal */
export declare namespace MrzScannerIntroImage {
    /** @internal */
    function from(source: DeepPartial<MrzScannerIntroImage>): MrzScannerIntroImage;
}
/**
No image for the introduction screen.
*/
export declare class MrzIntroDefaultImage {
    readonly _type: "MrzIntroDefaultImage";
    /** @param source {@displayType `DeepPartial<MrzIntroDefaultImage>`} */
    constructor(source?: DeepPartial<MrzIntroDefaultImage>);
}
/**
No image for the introduction screen.
*/
export declare class MrzIntroNoImage {
    readonly _type: "MrzIntroNoImage";
    /** @param source {@displayType `DeepPartial<MrzIntroNoImage>`} */
    constructor(source?: DeepPartial<MrzIntroNoImage>);
}
/**
A custom image for the introduction screen.
*/
export declare class MrzIntroCustomImage {
    readonly _type: "MrzIntroCustomImage";
    /**
      The web or file URI to the image.
      */
    uri: string;
    /** @param source {@displayType `DeepPartial<MrzIntroCustomImage>`} */
    constructor(source?: DeepPartial<MrzIntroCustomImage>);
}
/**
Configuration of the introduction screen for the MRZ scanner.
*/
export declare class MrzScannerIntroScreenConfiguration {
    /**
      The image for the introduction screen.
      @defaultValue new MrzIntroDefaultImage({});
      */
    image: MrzScannerIntroImage;
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
    /** @param source {@displayType `DeepPartial<MrzScannerIntroScreenConfiguration>`} */
    constructor(source?: DeepPartial<MrzScannerIntroScreenConfiguration>);
}
