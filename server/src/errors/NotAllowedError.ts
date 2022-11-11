import { BaseError } from "./_BaseError";
import { DefinedErrorCodes, ErrorStatus } from ".";

import type { ErrorCode, ErrorDetails } from ".";

class NotAllowedError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.NotAllowed;
    errorCode: ErrorCode = "DEV0004";
    details: ErrorDetails = [];

    constructor(
        public message: string = DefinedErrorCodes.DEV0004,
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, NotAllowedError.prototype);
    }
}

export { NotAllowedError };
