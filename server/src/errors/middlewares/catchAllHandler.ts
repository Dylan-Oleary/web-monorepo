import { DefinedErrorCodes, NotFoundError } from "..";

import type { NextFunction, Request, Response } from "express";

/**
 * A catch-all route handler that gets hit when the incoming route on the request has not been registered
 * with any of the express routers
 *
 * @param req The incoming request object
 * @param res The express response object
 * @param next The `next` function used to move on to the next middleware
 */
export const catchAllHandler: (req: Request, res: Response, next: NextFunction) => void = (
    req,
    res,
    next
) => {
    const params = (Object.values(req?.params) || []).map((param) => param);

    next(
        new NotFoundError(
            DefinedErrorCodes.DEV0003,
            params.length > 0
                ? [`${params.join("")} does not exist`]
                : ["The requested resource could not be found or does not exist"]
        )
    );
};
