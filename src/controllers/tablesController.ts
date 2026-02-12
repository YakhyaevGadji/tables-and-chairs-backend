import express from "express";
import {Tables} from "../models/models";

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

}