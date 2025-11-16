import type { DeepPartial } from "../utils";
import { ButtonConfiguration } from "../common/Common";
import { StyledText } from "../common/Common";
/**
The image for the introduction screen of a document data extractor screen.
*/
export type DocumentDataExtractorIntroImage = DocumentDataIntroDefaultImage | DocumentDataIntroNoImage | DocumentDataIntroCustomImage;
/** @internal */
export declare namespace DocumentDataExtractorIntroImage {
    /** @internal */
    function from(source: DeepPartial<DocumentDataExtractorIntroImage>): DocumentDataExtractorIntroImage;
}
/**
The image for the introduction screen featuring a document.
*/
export declare class DocumentDataIntroDefaultImage {
    readonly _type: "DocumentDataIntroDefaultImage";
    /** @param source {@displayType `DeepPartial<DocumentDataIntroDefaultImage>`} */
    constructor(source?: DeepPartial<DocumentDataIntroDefaultImage>);
}
/**
No image for the introduction screen.
*/
export declare class DocumentDataIntroNoImage {
    readonly _type: "DocumentDataIntroNoImage";
    /** @param source {@displayType `DeepPartial<DocumentDataIntroNoImage>`} */
    constructor(source?: DeepPartial<DocumentDataIntroNoImage>);
}
/**
A custom image for the introduction screen.
*/
export declare class DocumentDataIntroCustomImage {
    readonly _type: "DocumentDataIntroCustomImage";
    /**
      The web or file URI to the image.
      */
    uri: string;
    /** @param source {@displayType `DeepPartial<DocumentDataIntroCustomImage>`} */
    constructor(source?: DeepPartial<DocumentDataIntroCustomImage>);
}
/**
Configuration of the introduction screen for the document data extractor.
*/
export declare class DocumentDataExtractorIntroScreenConfiguration {
    /**
      The image for the introduction screen.
      @defaultValue new DocumentDataIntroDefaultImage({});
      */
    image: DocumentDataExtractorIntroImage;
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
    /** @param source {@displayType `DeepPartial<DocumentDataExtractorIntroScreenConfiguration>`} */
    constructor(source?: DeepPartial<DocumentDataExtractorIntroScreenConfiguration>);
}
