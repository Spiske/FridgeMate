import type { DeepPartial } from "../utils";
import { ButtonConfiguration } from "../common/Common";
import { StyledText } from "../common/Common";
/**
The image for the introduction screen of a VIN scanner screen.
*/
export type VinScannerIntroImage = VinIntroDefaultImage | VinIntroNoImage | VinIntroCustomImage;
/** @internal */
export declare namespace VinScannerIntroImage {
    /** @internal */
    function from(source: DeepPartial<VinScannerIntroImage>): VinScannerIntroImage;
}
/**
The default image for the introduction screen.
*/
export declare class VinIntroDefaultImage {
    readonly _type: "VINIntroDefaultImage";
    /** @param source {@displayType `DeepPartial<VinIntroDefaultImage>`} */
    constructor(source?: DeepPartial<VinIntroDefaultImage>);
}
/**
No image for the introduction screen.
*/
export declare class VinIntroNoImage {
    readonly _type: "VINIntroNoImage";
    /** @param source {@displayType `DeepPartial<VinIntroNoImage>`} */
    constructor(source?: DeepPartial<VinIntroNoImage>);
}
/**
A custom image for the introduction screen.
*/
export declare class VinIntroCustomImage {
    readonly _type: "VINIntroCustomImage";
    /**
      The web or file URI to the image.
      */
    uri: string;
    /** @param source {@displayType `DeepPartial<VinIntroCustomImage>`} */
    constructor(source?: DeepPartial<VinIntroCustomImage>);
}
/**
Configuration of the introduction screen for the VIN scanner.
*/
export declare class VinScannerIntroScreenConfiguration {
    /**
      The image for the introduction screen.
      @defaultValue new VinIntroDefaultImage({});
      */
    image: VinScannerIntroImage;
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
    /** @param source {@displayType `DeepPartial<VinScannerIntroScreenConfiguration>`} */
    constructor(source?: DeepPartial<VinScannerIntroScreenConfiguration>);
}
