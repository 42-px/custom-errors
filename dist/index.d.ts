/// <reference types="node" />
export declare class CustomError extends Error {
    constructor(message?: string);
}
export declare const createCustomError: (errorName: string) => {
    new (message?: string | undefined): {
        name: string;
        message: string;
        stack?: string | undefined;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
};
