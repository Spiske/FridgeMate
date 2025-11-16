import { ScannerView } from "../../../scanner-view";
type Size = {
    height: number;
    width: number;
};
/** Hook to get the size of the BarcodeScannerView video. Value is automatically updated on window resize. */
export declare function useScanningViewSize(scanner?: ScannerView<any, any>): Size | null;
export {};
