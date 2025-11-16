import type { DeepPartial } from "../utils";
import { BackgroundStyle } from "../common/Common";
import { StyledText } from "../common/Common";
/**
Configure the captions of the user guidance hints for different scanning states.
*/
export declare class DocumentDataExtractorGuidanceStates {
    /**
      The user guidance text displayed when no document is found. Initial state.
      @defaultValue "?documentUserGuidanceNoDocumentFound";
      */
    noDocumentFound: string;
    /**
      The user guidance text displayed when a document presence was detected and scanning is in progress.
      @defaultValue "?documentUserGuidanceScanningProgress";
      */
    scanningProgress: string;
    /**
      The user guidance text displayed when it is too dark to capture an adequate image.
      @defaultValue "?documentUserGuidanceTooDark";
      */
    tooDark: string;
    /**
      The user guidance text displayed when the detected document is too far away and appears too small.
      @defaultValue "?documentUserGuidanceTooSmall";
      */
    tooSmall: string;
    /**
      The user guidance text displayed when the detected document is not in a good perspective (device tilted).
      @defaultValue "?documentUserGuidanceBadPerspective";
      */
    badPerspective: string;
    /** @param source {@displayType `DeepPartial<DocumentDataExtractorGuidanceStates>`} */
    constructor(source?: DeepPartial<DocumentDataExtractorGuidanceStates>);
}
/**
Configuration of the hints guiding users through the document scanning process.
*/
export declare class DocumentDataExtractorGuidanceConfiguration {
    /**
      Determines whether the user guidance hints should be visible (enabled).
      @defaultValue true;
      */
    visibility: boolean;
    /**
      Configure the text style for the user guidance hints.
      @defaultValue new StyledText({
          "text": "?documentUserGuidanceNoDocumentFound",
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
      @defaultValue new DocumentDataExtractorGuidanceStates({});
      */
    statesTitles: DocumentDataExtractorGuidanceStates;
    /** @param source {@displayType `DeepPartial<DocumentDataExtractorGuidanceConfiguration>`} */
    constructor(source?: DeepPartial<DocumentDataExtractorGuidanceConfiguration>);
}
