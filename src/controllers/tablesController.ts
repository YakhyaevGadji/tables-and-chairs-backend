import express from "express";
import {Tables} from "../models/models";
import {StatusCodes} from "http-status-codes";

export const getAllTables = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const tables = await Tables.findAll();

    res.json(tables);
}

export const postTables = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        if (!req.body.username) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "username is required"
            });
        }

        return res.status(StatusCodes.OK).json({
            username: req.body.username
        });

    } catch (err: any) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: err.message
        });
    }
}
