import type { DeepPartial } from "../utils";
import { DocumentDataExtractionStatus } from "../DocumentDataExtractorTypes";
import { GenericDocument } from "../GenericDocument";
import { Image } from "../bridge/image";
/**
Configuration of the generic text scanner RTU UI result.
*/
export declare class DocumentDataExtractorUiResult {
    /**
      The status of the generic text recognition step
      */
    readonly recognitionStatus: DocumentDataExtractionStatus;
    /**
      Generic document containing text data. Not present, if status is FAIL.
      */
    readonly document: GenericDocument | null;
    /**
      Crop of the document if it was detected.
      */
    readonly croppedImage: Image | null;
    /** @param source {@displayType `DeepPartial<DocumentDataExtractorUiResult>`} */
    constructor(source?: DeepPartial<DocumentDataExtractorUiResult>);
}
