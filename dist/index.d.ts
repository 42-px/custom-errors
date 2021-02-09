export declare class CustomError extends Error {
    constructor(message?: string);
}
interface CustomErrorInterface {
    name: string;
    message?: string;
    stack?: string;
}
export declare const createCustomError: (errorName: string) => CustomErrorInterface;
export {};
