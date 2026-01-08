import express from "express";

import {Chairs} from "../models/models";

export const getAll = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    res.json({message: 'test'});
}

export const create = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const data = req.body;
    const chair = await Chairs.create(data);

    return res.json(chair)
}