/// <reference types="react" />
import { BarcodeTextLocalization, Palette, PolygonStyle, DocumentScannerTextLocalization, MrzScannerScreenTextLocalization } from "./configuration";
export type getColorValueFunctionType = (colorValueFromConfig: string) => string;
export type ScreenLocalization = BarcodeTextLocalization | DocumentScannerTextLocalization | MrzScannerScreenTextLocalization;
/** @deprecated Use SBTheme instead */
export declare const SBPaletteContext: import("react").Context<{
    getColorValue: getColorValueFunctionType;
}>;
export declare function createSBPaletteContextValue(palette: Palette): {
    getColorValue: (color: string) => string;
};
export declare class SBTheme {
    private static palette;
    private static localization;
    static setPalette(palette: Palette): void;
    static setLocalization(localization: ScreenLocalization): void;
    static getColorValue(color: string): string;
    static getPolygonColorValues(input: PolygonStyle, visible: boolean): PolygonStyle;
    static getLocalizedText(text: string, replacementArgs?: string[]): string;
}
export declare function getColorValue(color: string, palette: Palette | null): string;
export declare function getLocalizedText(text: string, replacementArgs: string[], localization: ScreenLocalization): string;
