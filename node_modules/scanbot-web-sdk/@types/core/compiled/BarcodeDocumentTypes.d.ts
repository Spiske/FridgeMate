import type { DeepPartial } from "./utils";
import { BarcodeFormat } from "./BarcodeTypes";
import { GenericDocument } from "./GenericDocument";
/**
Type of barcode document format used.

- `AAMVA`:
   American Association of Motor Vehicle Administrators barcode document.
- `BOARDING_PASS`:
   Boarding pass barcode document.
- `DE_MEDICAL_PLAN`:
   German medication plan barcode document.
- `MEDICAL_CERTIFICATE`:
   German medical certificate barcode document.
- `ID_CARD_PDF_417`:
   ID card barcode document.
- `SEPA`:
   SEPA barcode (aka GiroCode) document.
- `SWISS_QR`:
   Swiss QR barcode document.
- `VCARD`:
   VCard barcode document.
- `GS1`:
   GS1 barcode document.
- `HIBC`:
   Health industry barcode document.
- `BRITISH_COLUMBIA_DRIVER_LICENSE`:
   British Columbia driver license barcode document.
*/
export type BarcodeDocumentFormat = 
/**
American Association of Motor Vehicle Administrators barcode document.
*/
"AAMVA" | 
/**
Boarding pass barcode document.
*/
"BOARDING_PASS" | 
/**
German medication plan barcode document.
*/
"DE_MEDICAL_PLAN" | 
/**
German medical certificate barcode document.
*/
"MEDICAL_CERTIFICATE" | 
/**
ID card barcode document.
*/
"ID_CARD_PDF_417" | 
/**
SEPA barcode (aka GiroCode) document.
*/
"SEPA" | 
/**
Swiss QR barcode document.
*/
"SWISS_QR" | 
/**
VCard barcode document.
*/
"VCARD" | 
/**
GS1 barcode document.
*/
"GS1" | 
/**
Health industry barcode document.
*/
"HIBC" | 
/**
British Columbia driver license barcode document.
*/
"BRITISH_COLUMBIA_DRIVER_LICENSE";
/** @hidden */
export declare const BarcodeDocumentFormatValues: ReadonlyArray<BarcodeDocumentFormat>;
/**
Barcode document formats.
*/
export declare class BarcodeDocumentFormats {
    /** @param source {@displayType `DeepPartial<BarcodeDocumentFormats>`} */
    constructor(source?: DeepPartial<BarcodeDocumentFormats>);
}
export declare namespace BarcodeDocumentFormats {
    /**
    All barcode document formats.
    @defaultValue ["AAMVA", "BOARDING_PASS", "DE_MEDICAL_PLAN", "MEDICAL_CERTIFICATE", "ID_CARD_PDF_417", "SEPA", "SWISS_QR", "VCARD", "GS1", "HIBC", "BRITISH_COLUMBIA_DRIVER_LICENSE"];
    */
    const all: BarcodeDocumentFormat[];
    /**
    Barcode types that are used to encode documents.
    @defaultValue {
        "AAMVA": ["PDF_417"],
        "ID_CARD_PDF_417": ["PDF_417"],
        "SEPA": ["QR_CODE"],
        "MEDICAL_CERTIFICATE": ["PDF_417"],
        "DE_MEDICAL_PLAN": ["DATA_MATRIX"],
        "BOARDING_PASS": ["PDF_417", "AZTEC", "QR_CODE"],
        "VCARD": ["QR_CODE", "DATA_MATRIX"],
        "SWISS_QR": ["QR_CODE"],
        "GS1": ["CODE_128", "AZTEC", "DATA_MATRIX", "DATABAR", "DATABAR_EXPANDED", "DATABAR_LIMITED", "EAN_13", "EAN_8", "GS1_COMPOSITE", "ITF", "MICRO_PDF_417", "PDF_417", "QR_CODE", "UPC_A", "UPC_E"],
        "HIBC": ["CODE_39", "CODE_128", "AZTEC", "DATA_MATRIX", "MICRO_PDF_417", "PDF_417", "QR_CODE"],
        "BRITISH_COLUMBIA_DRIVER_LICENSE": ["PDF_417"]
    };
    */
    const documentBarcodeFormats: {
        [key in BarcodeDocumentFormat]: BarcodeFormat[];
    };
}
/**
The result of barcode document parsing.
*/
export declare class BarcodeDocumentParserResult {
    /**
    True if any document was parsed
    */
    readonly success: boolean;
    /**
    In case of success, the parsed document
    */
    readonly parsedDocument: GenericDocument | null;
    /** @param source {@displayType `DeepPartial<BarcodeDocumentParserResult>`} */
    constructor(source?: DeepPartial<BarcodeDocumentParserResult>);
}
