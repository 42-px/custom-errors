export declare class CustomError extends Error {
    constructor(message?: string);
}
export interface CustomErrorInterface {
    name: string;
    message?: string;
    stack?: string;
}
export interface CustomErrorConstructor {
    new (message?: string): CustomErrorInterface;
}
export declare const createCustomError: (errorName: string) => CustomErrorConstructor;
