import React from "react";
import { DocumentScanningFlow } from "../../configuration";
import { DocumentScannerUIResult } from "../../configuration/DocumentScannerUIResult";
import type ScanbotSDK from "../../../scanbot-sdk";
import { Root } from "react-dom/client";
type Props = {
    root: Root;
    documentId?: number;
    configuration: DocumentScanningFlow;
    onClose: () => void;
    onSubmit: (result: DocumentScannerUIResult) => void;
    onError: (e: any) => Promise<void>;
    sdk: ScanbotSDK;
};
export declare function DocumentScannerController(props: Props): React.JSX.Element;
export {};
