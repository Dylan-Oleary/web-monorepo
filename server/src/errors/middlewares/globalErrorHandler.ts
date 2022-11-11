import { BaseError } from "../_BaseError";
import { DefinedErrorCodes, ErrorStatus } from "..";

import type { Response } from "express";
import type { ErrorCode, ErrorDetails, ErrorResponse } from "..";

/**
 * Global error handler for the express application
 *
 * @param error The error thrown by the application
 * @param res The express response object
 * @returns The express response object and a JSON object with error information
 */
export const globalErrorHandler: (error: Error, res: Response) => Response<ErrorResponse> = (
    error,
    res
) => {
    const message = error?.message || DefinedErrorCodes.DEV0000;
    let status = ErrorStatus.ServerError;
    let details: ErrorDetails = [];
    let errorCode: ErrorCode = "DEV0000";

    if (error instanceof BaseError) {
        status = error?.statusCode || ErrorStatus.ServerError;
        details = error?.details || [];
        errorCode = error?.errorCode || "DEV0000";
    }

    return res.status(status).json({
        status,
        message,
        errorCode,
        details
    });
};
