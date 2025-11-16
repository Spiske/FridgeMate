import type { DeepPartial } from "../utils";
import { TextPatternScannerResult } from "../TextPatternScannerTypes";
import { VinBarcodeResult } from "../VinScannerTypes";
/**
Configuration of the generic text scanner RTU UI result.
*/
export declare class VinScannerUiResult {
    /**
      Text result of the VIN scanner
      */
    readonly textResult: TextPatternScannerResult;
    /**
      Barcode result of the VIN scanner
      */
    readonly barcodeResult: VinBarcodeResult;
    /** @param source {@displayType `DeepPartial<VinScannerUiResult>`} */
    constructor(source?: DeepPartial<VinScannerUiResult>);
}
