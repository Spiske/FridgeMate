import type { DeepPartial } from "../utils";
import { CheckMagneticInkStripScanningStatus } from "../CheckScannerTypes";
import { GenericDocument } from "../GenericDocument";
import { Image } from "../bridge/image";
/**
Configuration of the check scanner RTU UI result.
*/
export declare class CheckScannerUiResult {
    /**
      The status of the check recognition step
      */
    readonly recognitionStatus: CheckMagneticInkStripScanningStatus;
    /**
      Crop of the check if documentDetectionMode is set to DETECT_AND_CROP_DOCUMENT. Will be non-empty, only if check recognition succeeded.
      */
    readonly croppedImage: Image | null;
    /**
      Generic document containing check data. Not present, if status is FAIL.
      */
    readonly check: GenericDocument | null;
    /** @param source {@displayType `DeepPartial<CheckScannerUiResult>`} */
    constructor(source?: DeepPartial<CheckScannerUiResult>);
}
