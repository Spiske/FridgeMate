export declare class UnknownError extends Error {
    readonly errorType = "UnknownError";
}
export declare class InvalidLicense extends Error {
    readonly errorType = "InvalidLicense";
}
export declare class NullPointer extends Error {
    readonly errorType = "NullPointer";
}
export declare class InvalidArgument extends Error {
    readonly errorType = "InvalidArgument";
}
export declare class InvalidImageRef extends Error {
    readonly errorType = "InvalidImageRef";
}
export declare class ComponentUnavailable extends Error {
    readonly errorType = "ComponentUnavailable";
}
export declare class IllegalState extends Error {
    readonly errorType = "IllegalState";
}
export declare class IoError extends Error {
    readonly errorType = "IoError";
}
export declare class InvalidData extends Error {
    readonly errorType = "InvalidData";
}
export declare class OperationCanceled extends Error {
    readonly errorType = "OperationCanceled";
}
export declare class OutOfMemory extends Error {
    readonly errorType = "OutOfMemory";
}
export declare class Timeout extends Error {
    readonly errorType = "Timeout";
}
/** Converts an Error received from the WASM to a JS Error. */
export declare function createError(errorType: "UnknownError" | "InvalidLicense" | "NullPointer" | "InvalidArgument" | "InvalidImageRef" | "ComponentUnavailable" | "IllegalState" | "IoError" | "InvalidData" | "OperationCanceled" | "OutOfMemory" | "Timeout", message: string, cause?: Error): Error;
