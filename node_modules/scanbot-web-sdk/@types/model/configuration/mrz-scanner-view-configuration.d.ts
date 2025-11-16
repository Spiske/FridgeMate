import { DeepPartial, Image, MrzScannerConfiguration, MrzScannerResult } from "../../core-types";
import { ViewFinderScannerConfiguration } from "./view-finder-scanner-configuration";
export declare class MrzScannerViewConfiguration extends ViewFinderScannerConfiguration {
    constructor();
    /** {@displayType `DeepPartial<MrzScannerConfiguration>`} {@link MrzScannerConfiguration}*/
    scannerConfiguration?: DeepPartial<MrzScannerConfiguration>;
    onMrzDetected?: (e: MrzScannerResult) => void;
    _onDetectionFailed?: (e: Image) => void;
    static fromJson(json: any): MrzScannerViewConfiguration;
}
