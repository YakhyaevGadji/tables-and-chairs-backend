import express from "express";
import ApiError from "../error/ApiError";

export const getAll = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const {id} = req.query;

    if(!id) {
        return next(ApiError.badRequest("lox"))
    }
}

// export const create = async (req: express.Request, res: express.Response, next: any) => {
//
// }