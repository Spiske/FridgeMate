import { ViewFinderScannerConfiguration } from "./view-finder-scanner-configuration";
import { DeepPartial, VinScannerConfiguration, VinScannerResult } from "../../core-types";
export declare class VinScannerViewConfiguration extends ViewFinderScannerConfiguration {
    constructor();
    scannerConfiguration?: DeepPartial<VinScannerConfiguration>;
    onVinDetected?: (e: VinScannerResult) => void;
    static fromJson(json: any): VinScannerViewConfiguration;
}
