import { IScannerCommon } from "./i-scanner-common-handle";
export interface IFinderScannerHandle extends IScannerCommon {
    resumeDetection(): void;
    pauseDetection(): void;
    isDetectionPaused(): boolean;
}
