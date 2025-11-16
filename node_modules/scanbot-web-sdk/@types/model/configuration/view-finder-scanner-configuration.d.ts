import { ScannerConfiguration } from "./scanner-configuration";
import { UserGuidanceConfiguration, BaseViewFinderConfiguration } from "../../ui2/configuration";
import { DeepPartial } from "../../ui2/configuration/utils";
export declare function finderDefaultConfig(): import("../../ui2/configuration").ViewFinderConfiguration;
export declare class ViewFinderScannerConfiguration extends ScannerConfiguration {
    constructor(resolution: {
        width: number;
        height: number;
    });
    /**
     * Digital zoom level of the video stream. Defaults to 1.0.
     * Please note that this is not the same as the optical zoom of the camera.
     */
    zoom?: number;
    finder?: DeepPartial<BaseViewFinderConfiguration>;
    userGuidance?: DeepPartial<UserGuidanceConfiguration>;
    static mapFinderConfiguration(result: ViewFinderScannerConfiguration, json: any): void;
}
