import { SBStoreImage } from "./indexed-db/sb-indexed-db";
import { DocumentScannerScanResponse, Image } from "../../core-types";
import { SBDocument } from "../../ui2/document/model/sb-document";
import { SBPage } from "../../ui2/document/model/sb-page";
import { SBPageData } from "../../ui2/document/model/utils/sb-page-data";
import { SBDocumentData } from "../../ui2/document/model/utils/sb-document-data";
import { SBStorageUtils } from "./utils/sb-storage-utils";
export interface SBStoreDocumentScannerResponse extends DocumentScannerScanResponse {
    id: number;
}
export declare class SBStorage {
    readonly utils: SBStorageUtils;
    private db;
    /**
     * Clears all data from storage. Retains the database itself, including indexing.
     */
    clear(): Promise<void>;
    /**
     * @internal
     * Clears all data from storage. Does not retain the database, clearing indexes.
     * */
    delete(): Promise<void>;
    getDocumentScannerResponses(withImages?: boolean): Promise<SBStoreDocumentScannerResponse[]>;
    getDocumentScannerResponse(id: number): Promise<SBStoreDocumentScannerResponse>;
    private mapImages;
    getDocumentScannerResponseImages(documentIds: number[]): Promise<SBStoreImage[]>;
    getDocumentScannerResponseImage(documentId: number): Promise<SBStoreImage[]>;
    /**
     * Store a document in storage. Returns the auto-incremented ID of the stored document.
     * Please be aware that document images are stored separately,
     * image properties of 'CroppedDetectionResult' are nullified and the images are stored in a separate table.
     */
    storeDocumentScannerResponse(input: DocumentScannerScanResponse | SBStoreDocumentScannerResponse): Promise<number>;
    getSBDocumentIds(): Promise<number[]>;
    getSBDocumentData(id: number): Promise<SBDocumentData>;
    /** @internal */
    insertSBDocument(input: SBDocument): Promise<number>;
    /** @internal */
    deleteSBDocument(document: SBDocument | number): Promise<boolean>;
    /** @internal */
    insertSBPageImage(input: Image): Promise<number>;
    getSBPageImage(id: number): Promise<Image>;
    /** @internal */
    insertBuffer(buffer: ArrayBuffer): Promise<number>;
    /** @internal */
    getBuffer(id: number): Promise<ArrayBuffer>;
    /** @internal */
    deleteImageById(id: number): Promise<boolean>;
    /** @internal */
    deleteImages(page: SBPageData | SBPage): Promise<void>;
    destroy(): void;
}
