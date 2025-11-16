import type { DeepPartial } from "../utils";
/**
Source of the text for the MRZ finder example overlay.
*/
export type MrzFinderLayoutPreset = TwoLineMrzFinderLayoutPreset | ThreeLineMrzFinderLayoutPreset | NoLayoutPreset;
/** @internal */
export declare namespace MrzFinderLayoutPreset {
    /** @internal */
    function from(source: DeepPartial<MrzFinderLayoutPreset>): MrzFinderLayoutPreset;
}
/**
A ready-to-use preset 2-line text to be displayed.
*/
export declare class TwoLineMrzFinderLayoutPreset {
    readonly _type: "TwoLineMRZFinderLayoutPreset";
    /**
      The first line of the MRZ text.
      @defaultValue "I<USASMITH<<JACK<<<<<<<<<<<<<<<<<<<<";
      */
    mrzTextLine1: string;
    /**
      The second line of the MRZ text.
      @defaultValue "2342353464USA9602300M2904076<<<<<<<2";
      */
    mrzTextLine2: string;
    /**
      Aspect ratio of the finder adjusted to the 2-line MRZ text. Not editable. To override, please use 'aspectRatio' parameter in 'viewFinder' field in MRZ screen configuration.
      @defaultValue 5.390625;
      */
    readonly adjustedFinderAspectRatio: number;
    /** @param source {@displayType `DeepPartial<TwoLineMrzFinderLayoutPreset>`} */
    constructor(source?: DeepPartial<TwoLineMrzFinderLayoutPreset>);
}
/**
A ready-to-use preset 3-line text to be displayed.
*/
export declare class ThreeLineMrzFinderLayoutPreset {
    readonly _type: "ThreeLineMRZFinderLayoutPreset";
    /**
      The first line of the MRZ text.
      @defaultValue "I<USA2342353464<<<<<<<<<<<<<<<";
      */
    mrzTextLine1: string;
    /**
      The second line of the MRZ text.
      @defaultValue "9602300M2904076USA<<<<<<<<<<<2";
      */
    mrzTextLine2: string;
    /**
      The third line of the MRZ text.
      @defaultValue "SMITH<<JACK<<<<<<<<<<<<<<<<<<<";
      */
    mrzTextLine3: string;
    /**
      Aspect ratio of the finder adjusted to the 3-line MRZ text. Not editable. To override, please use 'aspectRatio' parameter in 'viewFinder' field in MRZ screen configuration.
      @defaultValue 4.3125;
      */
    readonly adjustedFinderAspectRatio: number;
    /** @param source {@displayType `DeepPartial<ThreeLineMrzFinderLayoutPreset>`} */
    constructor(source?: DeepPartial<ThreeLineMrzFinderLayoutPreset>);
}
/**
No layout preset.
*/
export declare class NoLayoutPreset {
    readonly _type: "NoLayoutPreset";
    /** @param source {@displayType `DeepPartial<NoLayoutPreset>`} */
    constructor(source?: DeepPartial<NoLayoutPreset>);
}
