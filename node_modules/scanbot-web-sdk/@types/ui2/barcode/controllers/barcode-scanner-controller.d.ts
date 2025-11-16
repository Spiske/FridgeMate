import React from 'react';
import { BarcodeScannerScreenConfiguration, BarcodeScannerUiResult } from '../../configuration';
import { Root } from "react-dom/client";
export declare class Props {
    root: Root;
    configuration: BarcodeScannerScreenConfiguration;
    onClose: () => void;
    onSubmit: (barcodeScannerResult: BarcodeScannerUiResult) => void;
    onError: (error: Error) => void;
}
export declare function BarcodeScannerController(props: Props): React.JSX.Element;
