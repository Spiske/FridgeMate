import type { DeepPartial } from "../utils";
import { ButtonConfiguration } from "../common/Common";
import { StyledText } from "../common/Common";
/**
The image for the introduction screen of a credit card scanner screen.
*/
export type CreditCardScannerIntroImage = CreditCardIntroOneSideImage | CreditCardIntroTwoSidesImage | CreditCardNoImage | CreditCardIntroCustomImage;
/** @internal */
export declare namespace CreditCardScannerIntroImage {
    /** @internal */
    function from(source: DeepPartial<CreditCardScannerIntroImage>): CreditCardScannerIntroImage;
}
/**
The image for the introduction screen with one side of a credit card.
*/
export declare class CreditCardIntroOneSideImage {
    readonly _type: "CreditCardIntroOneSideImage";
    /** @param source {@displayType `DeepPartial<CreditCardIntroOneSideImage>`} */
    constructor(source?: DeepPartial<CreditCardIntroOneSideImage>);
}
/**
The image for the introduction screen with two sides of a credit card.
*/
export declare class CreditCardIntroTwoSidesImage {
    readonly _type: "CreditCardIntroTwoSidesImage";
    /** @param source {@displayType `DeepPartial<CreditCardIntroTwoSidesImage>`} */
    constructor(source?: DeepPartial<CreditCardIntroTwoSidesImage>);
}
/**
No image for the introduction screen.
*/
export declare class CreditCardNoImage {
    readonly _type: "CreditCardNoImage";
    /** @param source {@displayType `DeepPartial<CreditCardNoImage>`} */
    constructor(source?: DeepPartial<CreditCardNoImage>);
}
/**
A custom image for the introduction screen.
*/
export declare class CreditCardIntroCustomImage {
    readonly _type: "CreditCardIntroCustomImage";
    /**
      The web or file URI to the image.
      */
    uri: string;
    /** @param source {@displayType `DeepPartial<CreditCardIntroCustomImage>`} */
    constructor(source?: DeepPartial<CreditCardIntroCustomImage>);
}
/**
Configuration of the introduction screen for the credit card scanner.
*/
export declare class CreditCardScannerIntroScreenConfiguration {
    /**
      The image for the introduction screen.
      @defaultValue new CreditCardIntroOneSideImage({});
      */
    image: CreditCardScannerIntroImage;
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
    /** @param source {@displayType `DeepPartial<CreditCardScannerIntroScreenConfiguration>`} */
    constructor(source?: DeepPartial<CreditCardScannerIntroScreenConfiguration>);
}
