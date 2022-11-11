import { BaseError } from "./_BaseError";
import { DefinedErrorCodes, ErrorStatus } from ".";

import type { ErrorCode, ErrorDetails } from ".";

class NotFoundError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.NotFound;
    errorCode: ErrorCode = "DEV0003";
    details: ErrorDetails = [];

    constructor(
        public message: string = DefinedErrorCodes.DEV0003,
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

export { NotFoundError };
