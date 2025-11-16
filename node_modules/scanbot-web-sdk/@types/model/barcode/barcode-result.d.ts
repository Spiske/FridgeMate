import { Size } from "../../utils/dto/Size";
import { BarcodeItem, BarcodeScannerRunResponse } from "../../core-types";
export declare class BarcodeScannerResultWithSize {
    barcodes: BarcodeItem[];
    originalImageSize: Size | null;
    /**
     * @internal
     */
    constructor(response: BarcodeScannerRunResponse | undefined);
    isEmpty(): boolean;
    static fromBarcode(item: BarcodeItem): BarcodeScannerResultWithSize;
}
