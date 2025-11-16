import type { DeepPartial } from "./utils";
import { DocumentDetectionStatus } from "./DocumentScannerTypes";
import { GenericDocument } from "./GenericDocument";
import { Point } from "./utils";
import { ProcessingMode } from "./CommonTypes";
import { ResultAccumulationConfiguration } from "./FrameAccumulationTypes";
/**
The status of the scanning process.

- `SUCCESS`:
   The credit card was scanned successfully.
- `ERROR_NOTHING_FOUND`:
   No credit card was detected.
- `INCOMPLETE`:
   Not all required fields were found or confirmed.
*/
export type CreditCardScanningStatus = 
/**
The credit card was scanned successfully.
*/
"SUCCESS" | 
/**
No credit card was detected.
*/
"ERROR_NOTHING_FOUND" | 
/**
Not all required fields were found or confirmed.
*/
"INCOMPLETE";
/** @hidden */
export declare const CreditCardScanningStatusValues: ReadonlyArray<CreditCardScanningStatus>;
/**
Contains the result of running the credit card scanner.
*/
export declare class CreditCardScanningResult {
    /**
    The status of the credit card detection step
    */
    readonly detectionStatus: DocumentDetectionStatus;
    /**
    The status of the credit card scanning step
    */
    readonly scanningStatus: CreditCardScanningStatus;
    /**
    Generic document containing credit card data. Not present, if status is FAIL.
    */
    readonly creditCard: GenericDocument | null;
    /**
    Coordinates of the detected credit card in the input image (clockwise from top-left)
    */
    readonly quad: Point[];
    /**
    Coordinates of the detected credit card in the input image (clockwise from top-left), normalized to the range [0, 1]
    */
    readonly quadNormalized: Point[];
    /** @param source {@displayType `DeepPartial<CreditCardScanningResult>`} */
    constructor(source?: DeepPartial<CreditCardScanningResult>);
}
/**
Configuration for the credit card scanner.
*/
export declare class CreditCardScannerConfiguration {
    /**
    If true, the document detector will be used to find where the credit card is in the input image.
    If false, the scanner will assume that the credit card has been pre-cropped and takes the entirety of the input image.
    @defaultValue true;
    */
    useDocumentDetector: boolean;
    /**
    Whether the expiry date is required for a successful scan.
    @defaultValue true;
    */
    requireExpiryDate: boolean;
    /**
    Whether the cardholder name is required for a successful scan.
    @defaultValue true;
    */
    requireCardholderName: boolean;
    /**
    Configuration for how to accumulate results.
    @defaultValue new ResultAccumulationConfiguration({});
    */
    resultAccumulationConfig: ResultAccumulationConfiguration;
    /**
    If true, the credit card image will be returned in creditCard field of CreditCardScanningResult.
    @defaultValue false;
    */
    returnCreditCardImage: boolean;
    /**
    Scanners typically can produce better results from a single image if they are allowed to spend a longer time analyzing it.
    
    On the other hand, scanners can produce even better results if they can analyze multiple images of the same subject and cross-check and combine the results.
    The processing mode tells the scanner whether to optimize for single or multiple images of a subject.
    @defaultValue "AUTO";
    */
    processingMode: ProcessingMode;
    /** @param source {@displayType `DeepPartial<CreditCardScannerConfiguration>`} */
    constructor(source?: DeepPartial<CreditCardScannerConfiguration>);
}
