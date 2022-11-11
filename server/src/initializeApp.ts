import express from "express";
import cors from "cors";

import { catchAllHandler, globalErrorHandler } from "./errors";
import { baseRouter } from "./routers";

import type { Express, NextFunction, Request, Response } from "express";

export const initializeApp: () => Express = () => {
    const app = express();

    try {
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use(cors({ origin: process?.env?.ALLOWED_ORIGINS?.split(",") || "*" }));

        app.use("/", baseRouter);

        app.use("*", catchAllHandler);
        // Disable linting for `next` as it is unused, but required as an argument
        // eslint-disable-next-line
        app.use((error: Error, req: Request, res: Response, next: NextFunction) =>
            globalErrorHandler(error, res)
        );

        return app;
    } catch (error) {
        console.error(error);
        console.error("Application has failed to start");

        process.exit(1);
    }
};
