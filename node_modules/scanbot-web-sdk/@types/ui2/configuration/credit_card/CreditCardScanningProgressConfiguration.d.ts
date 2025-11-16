import type { DeepPartial } from "../utils";
/**
Configuration of visualization of the scanning progress - indeterminate progress.
*/
export declare class CreditCardScanningProgressConfiguration {
    /**
      Enable or disable the scanning progress visualization.
      @defaultValue true;
      */
    enabled: boolean;
    /**
      The color of the scanning progress.
      @defaultValue "#40A9FF";
      */
    progressColor: string;
    /**
      The duration of a single scanning progress cycle animation in milliseconds.
      @defaultValue 1000;
      */
    animationDuration: number;
    /** @param source {@displayType `DeepPartial<CreditCardScanningProgressConfiguration>`} */
    constructor(source?: DeepPartial<CreditCardScanningProgressConfiguration>);
}
