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

interface CustomErrorInterface {
    name: string
    message?: string
    stack?: string
}

interface CustomErrorConstructor {
    new(message?: string): CustomErrorInterface
}

export const createCustomError = (
    errorName: string
): CustomErrorConstructor => {
    class MyCustomError extends CustomError implements CustomErrorInterface {
        constructor(message?: string) {
            super(message)
            this.name = errorName
        }
    }
    return MyCustomError
}
