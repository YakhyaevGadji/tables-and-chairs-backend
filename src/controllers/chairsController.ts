import express from "express";
import uuid from "uuid";
import {Chairs} from "../models/models";
import path from "path";
import {UploadedFile} from "express-fileupload";
import ApiError from "../error/ApiError";

export const getAll = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const chairs = await Chairs.findAll();

    res.json(chairs);
}

export const create = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        if (!req.files || !req.files.img) {
            return ApiError.badRequest('Файл не загружен');
        }

        const img = req.files.img as UploadedFile;


        let fileName = uuid.v4 + ".jpg";
        await img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const chair = await Chairs.create({
            ...req.body,
            images: fileName
        });

        return res.json(chair)
    }catch (e) {
        if (e instanceof Error) {
            next(ApiError.badRequest(e.message));
        }
    }
}