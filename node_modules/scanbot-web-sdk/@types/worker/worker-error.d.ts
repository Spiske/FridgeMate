export declare class CoreInitializationError extends Error {
    constructor(cause: Error);
}
export declare class CoreWorkerInitializationError extends Error {
    constructor();
}
export declare class CoreVersionMismatchError extends Error {
    constructor(path: string, jsVersion: string, coreVersion: string);
}
