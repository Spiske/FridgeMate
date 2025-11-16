import type { DeepPartial } from "./utils";
import { MrzDocumentType } from "./MrzTypes";
/**
Base class for all document data extraction configuration elements.
*/
export type DocumentDataExtractorConfigurationElement = DateValidationConfiguration | EuropeanHealthInsuranceCardConfiguration | MrzFallbackConfiguration | AutoFocusConfiguration | GlareDetectionConfiguration | DocumentDataExtractorCommonConfiguration;
/** @internal */
export declare namespace DocumentDataExtractorConfigurationElement {
    /** @internal */
    function from(source: DeepPartial<DocumentDataExtractorConfigurationElement>): DocumentDataExtractorConfigurationElement;
}
/**
Date validation configuration.
This configuration element does not enable the scanning of any document types by itself.
Add to recognizer configuration to require date validation checks for specific document types.
*/
export declare class DateValidationConfiguration {
    readonly _type: "DateValidationConfiguration";
    /**
    Minimum year that is considered valid.
    @defaultValue 0;
    */
    minYear: number;
    /**
    Maximum year that is considered valid.
    @defaultValue 2999;
    */
    maxYear: number;
    /**
    Name, FullName, or NormalizedName of field type for which the year bounds should be applied.
    */
    fieldTypeName: string;
    /** @param source {@displayType `DeepPartial<DateValidationConfiguration>`} */
    constructor(source?: DeepPartial<DateValidationConfiguration>);
}
/**
European Health Insurance Card (EHIC) issuing country.

- `AUSTRIA`:
   Austria (Validation on the personal identification number is performed as described in "site:www.sozialversicherung.at Was ist die Versicherungsnummer?").
- `BELGIUM`:
   Belgium.
- `BULGARIA`:
   Bulgaria.
- `CROATIA`:
   Croatia.
- `CYPRUS`:
   Cyprus.
- `CZECH_REPUBLIC`:
   Czech Republic.
- `DENMARK`:
   Denmark.
- `ESTONIA`:
   Estonia.
- `FINLAND`:
   Finland.
- `FRANCE`:
   France.
- `GERMANY`:
   Germany (Validation performed according to "Spezifikation für Musterkarten und Testkarten (eGK, HBA, SMC), Anhang A" and "GS1 Struktur der Kenn-Nummer (ICCSN) der elektronischen Gesundheitskarte").
- `GREECE`:
   Greece.
- `HUNGARY`:
   Hungary.
- `IRELAND`:
   Ireland.
- `ITALY`:
   Italy.
- `LATVIA`:
   Latvia.
- `LITHUANIA`:
   Lithuania.
- `LUXEMBOURG`:
   Luxembourg.
- `MALTA`:
   Malta.
- `NETHERLANDS`:
   Netherlands.
- `POLAND`:
   Poland.
- `PORTUGAL`:
   Portugal.
- `ROMANIA`:
   Romania.
- `SLOVAKIA`:
   Slovakia.
- `SLOVENIA`:
   Slovenia.
- `SPAIN`:
   Spain.
- `SWEDEN`:
   Sweden.
- `SWITZERLAND`:
   Switzerland.
*/
export type EuropeanHealthInsuranceCardIssuingCountry = 
/**
Austria (Validation on the personal identification number is performed as described in "site:www.sozialversicherung.at Was ist die Versicherungsnummer?").
*/
"AUSTRIA" | 
/**
Belgium.
*/
"BELGIUM" | 
/**
Bulgaria.
*/
"BULGARIA" | 
/**
Croatia.
*/
"CROATIA" | 
/**
Cyprus.
*/
"CYPRUS" | 
/**
Czech Republic.
*/
"CZECH_REPUBLIC" | 
/**
Denmark.
*/
"DENMARK" | 
/**
Estonia.
*/
"ESTONIA" | 
/**
Finland.
*/
"FINLAND" | 
/**
France.
*/
"FRANCE" | 
/**
Germany (Validation performed according to "Spezifikation für Musterkarten und Testkarten (eGK, HBA, SMC), Anhang A" and "GS1 Struktur der Kenn-Nummer (ICCSN) der elektronischen Gesundheitskarte").
*/
"GERMANY" | 
/**
Greece.
*/
"GREECE" | 
/**
Hungary.
*/
"HUNGARY" | 
/**
Ireland.
*/
"IRELAND" | 
/**
Italy.
*/
"ITALY" | 
/**
Latvia.
*/
"LATVIA" | 
/**
Lithuania.
*/
"LITHUANIA" | 
/**
Luxembourg.
*/
"LUXEMBOURG" | 
/**
Malta.
*/
"MALTA" | 
/**
Netherlands.
*/
"NETHERLANDS" | 
/**
Poland.
*/
"POLAND" | 
/**
Portugal.
*/
"PORTUGAL" | 
/**
Romania.
*/
"ROMANIA" | 
/**
Slovakia.
*/
"SLOVAKIA" | 
/**
Slovenia.
*/
"SLOVENIA" | 
/**
Spain.
*/
"SPAIN" | 
/**
Sweden.
*/
"SWEDEN" | 
/**
Switzerland.
*/
"SWITZERLAND";
/** @hidden */
export declare const EuropeanHealthInsuranceCardIssuingCountryValues: ReadonlyArray<EuropeanHealthInsuranceCardIssuingCountry>;
/**
European Health Insurance Card (EHIC) configuration element. Add to extractor configuration to scan EHICs.
*/
export declare class EuropeanHealthInsuranceCardConfiguration {
    readonly _type: "EuropeanHealthInsuranceCardConfiguration";
    /**
    If an expected country is selected, validation rules for the given country are used,
    and if the expected country cannot be inferred or the inferred country doesn't  match the given country,
    the result of extract() will be IncompleteValidation.
    @defaultValue null;
    */
    expectedCountry: EuropeanHealthInsuranceCardIssuingCountry | null;
    /** @param source {@displayType `DeepPartial<EuropeanHealthInsuranceCardConfiguration>`} */
    constructor(source?: DeepPartial<EuropeanHealthInsuranceCardConfiguration>);
}
/**
MRZ fallback configuration element.
This configuration element does not enable the scanning of any document types by itself.
Add to extractor configuration to enable recognizing the MRZ only, specifically for documents that are otherwise not supported.
Note that this may enable scanning of documents that were not enabled through the accepted document types.
*/
export declare class MrzFallbackConfiguration {
    readonly _type: "MRZFallbackConfiguration";
    /**
    List of ISO 3166-1 alpha-3 country codes for which the MRZ fallback is enabled. (e.g. "DEU" for Germany).
    @defaultValue [];
    */
    acceptedCountries: string[];
    /**
    List of MRZ document types for which MRZ fallback is enabled.
    @defaultValue [];
    */
    acceptedMRZTypes: MrzDocumentType[];
    /** @param source {@displayType `DeepPartial<MrzFallbackConfiguration>`} */
    constructor(source?: DeepPartial<MrzFallbackConfiguration>);
}
/**
Auto-focus configuration.
The recognizer will ignore frames that are not focused. This option is enabled by default.
This configuration has no effect in SINGLE_SHOT mode.
*/
export declare class AutoFocusConfiguration {
    readonly _type: "AutoFocusConfiguration";
    /**
    Sensitivity threshold for detecting that autofocus is in progress.
    The value should be in the range [0.0, 1.0].
    The lower the value, the more frames might be discarded as not focused.
    The higher the value, the earlier the focus might be considered as focused.
    If set to 0.0, the feature is disabled.
    @defaultValue 0.02;
    */
    sensitivityThreshold: number;
    /** @param source {@displayType `DeepPartial<AutoFocusConfiguration>`} */
    constructor(source?: DeepPartial<AutoFocusConfiguration>);
}
/**
Glare detection configuration.
The recognizer will detect whether fields are obstructed by glare. This feature is enabled by default.
This configuration has no effect in SINGLE_SHOT mode.
*/
export declare class GlareDetectionConfiguration {
    readonly _type: "GlareDetectionConfiguration";
    /**
    Glare detection threshold.
    The value should be in the range [0.0, 1.0].
    Determines how much glare is acceptable relative to the text size. So 0.5 means that the glare can be up to 50% of the text size.
    If set to 0.0, the feature is disabled.
    @defaultValue 0.5;
    */
    glareDetectionThreshold: number;
    /** @param source {@displayType `DeepPartial<GlareDetectionConfiguration>`} */
    constructor(source?: DeepPartial<GlareDetectionConfiguration>);
}
/**
Convenience configuration element for enabling the scanning of multiple document types with a common configuration.
Add to extractor configuration to enable the scanning of multiple document types.
*/
export declare class DocumentDataExtractorCommonConfiguration {
    readonly _type: "DocumentDataExtractorCommonConfiguration";
    /**
    List of document types to scan. By default, the list is empty.
    @defaultValue ["DeIdCardFront", "DeIdCardBack", "DeHealthInsuranceCardFront", "DePassport", "DeResidencePermitFront", "DeResidencePermitBack", "EuropeanHealthInsuranceCard", "EuropeanDriverLicenseFront", "EuropeanDriverLicenseBack"];
    */
    acceptedDocumentTypes: string[];
    /** @param source {@displayType `DeepPartial<DocumentDataExtractorCommonConfiguration>`} */
    constructor(source?: DeepPartial<DocumentDataExtractorCommonConfiguration>);
}
