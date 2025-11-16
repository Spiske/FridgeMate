import { ViewFinderScannerConfiguration } from "./view-finder-scanner-configuration";
import { CheckScannerConfiguration, CheckScanningResult, DeepPartial } from "../../core-types";
export declare class CheckScannerViewConfiguration extends ViewFinderScannerConfiguration {
    constructor();
    /** {@displayType `DeepPartial<CheckScannerConfiguration>`} {@link CheckScannerConfiguration}*/
    scannerConfiguration?: DeepPartial<CheckScannerConfiguration>;
    onCheckDetected?: (e: CheckScanningResult) => void;
    static fromJson(json: any): CheckScannerViewConfiguration;
}
