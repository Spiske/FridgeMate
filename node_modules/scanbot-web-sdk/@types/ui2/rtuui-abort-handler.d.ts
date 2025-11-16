/**
 * This class represents a "deferred" cancel function. It allows us to give to the user a cancel function, even though
 * it has not been defined yet.
 * Once the cancel function is known, it can be set using the `setCancelFunction` method.
 * At any point after the construction, the user can call the `invokeCancelFunction`. If, at that time, the
 * cancel function has not yet been set via the `setCancelFunction` method, the `invokeCancelFunction` will be deferred
 * until the cancel function is set.
 */
export declare class RtuuiAbortHandler {
    constructor();
    invokeCancelFunction(): Promise<void>;
    setCancelFunction(cancelFn: () => Promise<void>): void;
    private cancelFunctionPromise;
    private cancelFunctionPromiseResolve;
}
