import type { DeepPartial } from "../utils";
import { SymbolBox } from "../TextPatternScannerTypes";
import { WordBox } from "../TextPatternScannerTypes";
/**
Configuration of the generic text scanner RTU UI result.
*/
export declare class TextPatternScannerUiResult {
    /**
      Raw recognized string
      */
    readonly rawText: string;
    /**
      Boxes for each recognized word
      */
    readonly wordBoxes: WordBox[];
    /**
      Boxes for each recognized symbol
      */
    readonly symbolBoxes: SymbolBox[];
    /**
      Confidence of the recognition.
      @defaultValue 0.0;
      */
    readonly confidence: number;
    /** @param source {@displayType `DeepPartial<TextPatternScannerUiResult>`} */
    constructor(source?: DeepPartial<TextPatternScannerUiResult>);
}
