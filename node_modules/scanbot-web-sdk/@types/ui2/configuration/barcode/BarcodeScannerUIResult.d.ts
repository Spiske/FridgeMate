import type { DeepPartial } from "../utils";
import { BarcodeItem } from "../BarcodeScannerTypes";
/**
Data about the scanned barcode.
*/
export declare class BarcodeScannerUiItem {
    /**
      Scanned barcode.
      */
    readonly barcode: BarcodeItem;
    /**
      Number of scanned barcodes of this symbology and value.
      */
    readonly count: number;
    /** @param source {@displayType `DeepPartial<BarcodeScannerUiItem>`} */
    constructor(source?: DeepPartial<BarcodeScannerUiItem>);
}
/**
Results of the barcode scan.
*/
export declare class BarcodeScannerUiResult {
    /**
      Selected zoom factor for the camera.
      @defaultValue 1.0;
      */
    readonly selectedZoomFactor: number;
    /**
      Scanned barcode items.
      @defaultValue [];
      */
    readonly items: BarcodeScannerUiItem[];
    /** @param source {@displayType `DeepPartial<BarcodeScannerUiResult>`} */
    constructor(source?: DeepPartial<BarcodeScannerUiResult>);
}
