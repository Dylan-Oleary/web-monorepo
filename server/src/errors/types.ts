import { DefinedErrorCodes } from "./DefinedErrorCodes";

export type ErrorCode = keyof typeof DefinedErrorCodes;

export type ErrorDetails = { message: string; field?: string }[];

export type ErrorResponse = {
    details: ErrorDetails;
    errorCode: ErrorCode;
    message: string;
    status: ErrorStatus;
};

export enum ErrorStatus {
    "BadRequest" = 400,
    "Unauthorized" = 401,
    "NotFound" = 404,
    "NotAllowed" = 405,
    "Conflict" = 409,
    "ExpectationFailed" = 417,
    "UnprocessableEntity" = 422,
    "ServerError" = 500
}
