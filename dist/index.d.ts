export declare class CustomError extends Error {
    constructor(message?: string);
}
interface CustomErrorInterface {
    name: string;
    message?: string;
    stack?: string;
}
interface CustomErrorConstructor {
    new (message?: string): CustomErrorInterface;
}
export declare const createCustomError: (errorName: string) => CustomErrorConstructor;
export {};
