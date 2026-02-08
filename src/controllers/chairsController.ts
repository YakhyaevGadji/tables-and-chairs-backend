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
        if (!req.files || !req.files.images) {
            return next(ApiError.badRequest('Файл не загружен'));
        }

        const files = req.files.images;

        const imagesArray = Array.isArray(files) ? files : [files];

        const imageUrls: string[] = [];

        for (const file of imagesArray) {
            const img = file as UploadedFile;

            const fileName = uuid.v4() + ".jpg";
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const fileUrl = `${process.env.LOCAL_HOST}/${fileName}`;
            imageUrls.push(fileUrl);
        }

        const chair = await Chairs.create({
            ...req.body,
            images: imageUrls
        });

        return res.json(chair);

    } catch (e) {
        if (e instanceof Error) {
            return next(ApiError.badRequest(e.message));
        }
        return next(ApiError.badRequest('Неизвестная ошибка'));
    }
};

