import * as Config from "./configuration";
import { BarcodeScannerScreenConfiguration, BarcodeScannerUiResult, DocumentScanningFlow } from "./configuration";
import { DocumentScannerUIResult } from "./configuration/DocumentScannerUIResult";
import { SBDocument } from "./document/model/sb-document";
import { MrzScannerUiResult } from "./configuration/mrz/MRZScannerUIResult";
import { MrzScannerScreenConfiguration } from "./configuration/mrz/MRZScannerScreenConfiguration";
export default class ScanbotSDKUI {
    static SBDocument: typeof SBDocument;
    static readonly Config: typeof Config;
    /** The scannerAbortHandler will be set synchronously when a scanner is created.
     *  This way, the user can immediately call the abortScanner() method after calling a create***Scanner(), even
     *  when the scanner is still being initialized. */
    private static scannerAbortHandler;
    /** Aborts a running scanner. The scanner's promise will be resolved with `null`. */
    static abortScanner(): Promise<void>;
    static createDocumentScanner(config: DocumentScanningFlow, documentId?: number): Promise<DocumentScannerUIResult | null>;
    static createBarcodeScanner(config: BarcodeScannerScreenConfiguration): Promise<BarcodeScannerUiResult | null>;
    static createMrzScanner(config: MrzScannerScreenConfiguration): Promise<MrzScannerUiResult | null>;
    private static createScanner;
    private static checkLicense;
    private static createRoot;
    private static createContainer;
}
