import ScanbotSDK from '../scanbot-sdk';
import { Image, ObjectId } from '../core-types';
import { ConsumeType } from "../consume-type";
import { SBDocument } from "../ui2/document/model/sb-document";
export interface PdfPageOptions {
    consumeImage?: ConsumeType;
    runOcr?: boolean;
}
export declare class PdfGenerator {
    private _sdk;
    private _pdfOperation;
    /** @internal */
    constructor(_sdk: ScanbotSDK, _pdfOperation: ObjectId<"PdfGenerationContext">);
    addPage(image: Image, options?: PdfPageOptions): Promise<void>;
    addPages(document: SBDocument, withOcr?: boolean): Promise<void>;
    complete(): Promise<ArrayBuffer>;
}
