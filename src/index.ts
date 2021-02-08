/* eslint-disable max-classes-per-file */
export class CustomError extends Error {
    constructor(message?: string) {
        super(message)
        // for detailed logs at v8
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor)
        } else {
            const err = new Error(message)
            this.stack = err.stack
        }
    }
}

export const createCustomError = (errorName: string) => {
    return class MyCustomError extends CustomError {
        constructor(message?: string) {
            super(message)
            this.name = errorName
        }
    }
}
