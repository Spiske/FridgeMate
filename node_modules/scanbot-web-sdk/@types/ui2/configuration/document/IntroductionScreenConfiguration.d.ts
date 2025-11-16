import type { DeepPartial } from "../utils";
import { ButtonConfiguration } from "../common/Common";
import { StyledText } from "../common/Common";
/**
An entry in the list of scanning steps of the introduction screen.
*/
export declare class IntroListEntry {
    /**
      The image of the entry.
      @defaultValue new NoIntroImage({});
      */
    image: IntroImage;
    /**
      The text of the entry.
      @defaultValue new StyledText({
          "text": "?cameraIntroDescription",
          "color": "?sbColorOnSurface"
      });
      */
    text: StyledText;
    /** @param source {@displayType `DeepPartial<IntroListEntry>`} */
    constructor(source?: DeepPartial<IntroListEntry>);
}
/**
Determines the image for the introduction screen.
*/
export type IntroImage = NoIntroImage | CustomImage | ReceiptsIntroImage | MedicalCertificateIntroImage | DocumentIntroImage | CheckIntroImage | IdCardIntroImage | CreditCardIntroImage;
/** @internal */
export declare namespace IntroImage {
    /** @internal */
    function from(source: DeepPartial<IntroImage>): IntroImage;
}
/**
No image for the introduction screen.
*/
export declare class NoIntroImage {
    readonly _type: "NoIntroImage";
    /** @param source {@displayType `DeepPartial<NoIntroImage>`} */
    constructor(source?: DeepPartial<NoIntroImage>);
}
/**
A custom image for the introduction screen.
*/
export declare class CustomImage {
    readonly _type: "CustomImage";
    /**
      The web or file URI to the image.
      */
    uri: string;
    /** @param source {@displayType `DeepPartial<CustomImage>`} */
    constructor(source?: DeepPartial<CustomImage>);
}
/**
The image for the introduction screen with a receipt template.
*/
export declare class ReceiptsIntroImage {
    readonly _type: "ReceiptsIntroImage";
    /** @param source {@displayType `DeepPartial<ReceiptsIntroImage>`} */
    constructor(source?: DeepPartial<ReceiptsIntroImage>);
}
/**
The image for the introduction screen with a medical certificate template.
*/
export declare class MedicalCertificateIntroImage {
    readonly _type: "MedicalCertificateIntroImage";
    /** @param source {@displayType `DeepPartial<MedicalCertificateIntroImage>`} */
    constructor(source?: DeepPartial<MedicalCertificateIntroImage>);
}
/**
The image for the introduction screen with a document template.
*/
export declare class DocumentIntroImage {
    readonly _type: "DocumentIntroImage";
    /** @param source {@displayType `DeepPartial<DocumentIntroImage>`} */
    constructor(source?: DeepPartial<DocumentIntroImage>);
}
/**
The image for the introduction screen with a check template.
*/
export declare class CheckIntroImage {
    readonly _type: "CheckIntroImage";
    /** @param source {@displayType `DeepPartial<CheckIntroImage>`} */
    constructor(source?: DeepPartial<CheckIntroImage>);
}
/**
The image for the introduction screen with an ID card template.
*/
export declare class IdCardIntroImage {
    readonly _type: "IdCardIntroImage";
    /** @param source {@displayType `DeepPartial<IdCardIntroImage>`} */
    constructor(source?: DeepPartial<IdCardIntroImage>);
}
/**
The image for the introduction screen with a credit card template.
*/
export declare class CreditCardIntroImage {
    readonly _type: "CreditCardIntroImage";
    /** @param source {@displayType `DeepPartial<CreditCardIntroImage>`} */
    constructor(source?: DeepPartial<CreditCardIntroImage>);
}
/**
Configuration of the introduction screen for the document scanner.
*/
export declare class IntroductionScreenConfiguration {
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
      Determines whether the introduction screen should automatically be shown or not when the scanning session starts.
      @defaultValue false;
      */
    showAutomatically: boolean;
    /**
      Configuration of the 'done' button, located in the top bar.
      @defaultValue new ButtonConfiguration({
          "visible": true,
          "text": "?cameraIntroDoneButton",
          "accessibilityDescription": "?accessibilityDescriptionCameraIntroDoneButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "foreground": new ForegroundStyle({
              "iconVisible": true,
              "color": "?sbColorPrimary",
              "useShadow": false
          })
      });
      */
    topBarDoneButton: ButtonConfiguration;
    /**
      The title of the introduction screen, located in the top bar.
      @defaultValue new StyledText({
          "text": "?cameraIntroTitle",
          "color": "?sbColorOnSurface"
      });
      */
    title: StyledText;
    /**
      The subtitle of the introduction screen.
      @defaultValue new StyledText({
          "text": "?cameraIntroSubtitle",
          "color": "?sbColorOnSurface"
      });
      */
    subtitle: StyledText;
    /**
      Configure the scanning steps of the introduction screen.
      @defaultValue [new IntroListEntry({
          "image": new DocumentIntroImage({}),
          "text": new StyledText({
              "text": "?cameraIntroItem1",
              "color": "?sbColorOnSurface"
          })
      }), new IntroListEntry({
          "image": new NoIntroImage({}),
          "text": new StyledText({
              "text": "?cameraIntroItem2",
              "color": "?sbColorOnSurface"
          })
      }), new IntroListEntry({
          "image": new NoIntroImage({}),
          "text": new StyledText({
              "text": "?cameraIntroItem3",
              "color": "?sbColorOnSurface"
          })
      }), new IntroListEntry({
          "image": new NoIntroImage({}),
          "text": new StyledText({
              "text": "?cameraIntroItem4",
              "color": "?sbColorOnSurface"
          })
      })];
      */
    items: IntroListEntry[];
    /** @param source {@displayType `DeepPartial<IntroductionScreenConfiguration>`} */
    constructor(source?: DeepPartial<IntroductionScreenConfiguration>);
}
