import type { DeepPartial } from "../utils";
/**
The feature that is being tracked.
*/
export declare class AnalyticsFeature {
    /** @param source {@displayType `DeepPartial<AnalyticsFeature>`} */
    constructor(source?: DeepPartial<AnalyticsFeature>);
}
export declare namespace AnalyticsFeature {
    /**
      The document scanner feature.
      @defaultValue "rtuui_document_scanner";
      */
    const documentScanner: string;
}
/**
The category that is being tracked.
*/
export declare class AnalyticsCategory {
    /** @param source {@displayType `DeepPartial<AnalyticsCategory>`} */
    constructor(source?: DeepPartial<AnalyticsCategory>);
}
export declare namespace AnalyticsCategory {
    /**
      The acknowledge category.
      @defaultValue "acknowledge";
      */
    const acknowledge: string;
}
/**
The event that is being tracked.
*/
export declare class AnalyticsEvent {
    /**
      The feature associated with the event.
      */
    feature: string;
    /**
      The category of the event.
      */
    category: string;
    /**
      The name of the event.
      */
    name: string;
    /**
      The value associated with the event.
      @defaultValue [];
      */
    values: string[];
    /** @param source {@displayType `DeepPartial<AnalyticsEvent>`} */
    constructor(source?: DeepPartial<AnalyticsEvent>);
}
/**
The name of the event.
*/
export declare class AnalyticsEventName {
    /** @param source {@displayType `DeepPartial<AnalyticsEventName>`} */
    constructor(source?: DeepPartial<AnalyticsEventName>);
}
export declare namespace AnalyticsEventName {
    /**
      The image quality result event for imported page.
      @defaultValue "imported_image_quality_result";
      */
    const importedImageQualityResult: string;
    /**
      The image quality result event for scanned page.
      @defaultValue "scanned_image_quality_result";
      */
    const scannedImageQualityResult: string;
    /**
      The proceed event.
      @defaultValue "proceed_with_image";
      */
    const proceedImage: string;
    /**
      The retake event.
      @defaultValue "retake_image";
      */
    const retakeImage: string;
}
/**
A predefined analytics event.
*/
export declare class AnalyticsEventFactory {
    /** @param source {@displayType `DeepPartial<AnalyticsEventFactory>`} */
    constructor(source?: DeepPartial<AnalyticsEventFactory>);
}
export declare namespace AnalyticsEventFactory {
    /**
      A predefined analytics event.
      @defaultValue new AnalyticsEvent({
          "feature": "rtuui_document_scanner",
          "category": "acknowledge",
          "name": "scanned_image_quality_result"
      });
      */
    const scannedImageQualityResult: AnalyticsEvent;
    /**
      A predefined analytics event.
      @defaultValue new AnalyticsEvent({
          "feature": "rtuui_document_scanner",
          "category": "acknowledge",
          "name": "imported_image_quality_result"
      });
      */
    const importedImageQualityResult: AnalyticsEvent;
    /**
      A predefined analytics event.
      @defaultValue new AnalyticsEvent({
          "feature": "rtuui_document_scanner",
          "category": "acknowledge",
          "name": "proceed_with_image"
      });
      */
    const proceedWithImage: AnalyticsEvent;
    /**
      A predefined analytics event.
      @defaultValue new AnalyticsEvent({
          "feature": "rtuui_document_scanner",
          "category": "acknowledge",
          "name": "retake_image"
      });
      */
    const retakeImage: AnalyticsEvent;
}
