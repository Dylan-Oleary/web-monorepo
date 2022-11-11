import { Router } from "express";

import { NotAllowedError } from "../../errors";

import type { NextFunction, Request, Response } from "express";

const baseRouter = Router({ caseSensitive: true });

baseRouter
    .route("/")
    .get((req: Request, res: Response) => res.status(200).json({ message: "Hello World!" }))
    .post((req: Request, res: Response, next: NextFunction) => next(new NotAllowedError()))
    .patch((req: Request, res: Response, next: NextFunction) => next(new NotAllowedError()))
    .put((req: Request, res: Response, next: NextFunction) => next(new NotAllowedError()))
    .delete((req: Request, res: Response, next: NextFunction) => next(new NotAllowedError()));

export { baseRouter };
