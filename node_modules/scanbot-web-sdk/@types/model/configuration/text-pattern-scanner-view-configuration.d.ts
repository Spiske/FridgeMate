import { ViewFinderScannerConfiguration } from "./view-finder-scanner-configuration";
import { DeepPartial, TextPatternScannerResult, TextPatternScannerConfiguration } from "../../core-types";
export declare class TextPatternScannerViewConfiguration extends ViewFinderScannerConfiguration {
    constructor();
    scannerConfiguration?: DeepPartial<TextPatternScannerConfiguration>;
    onTextDetected?: (e: TextPatternScannerResult) => void;
    static fromJson(json: any): TextPatternScannerViewConfiguration;
}
