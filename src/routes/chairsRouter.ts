import express, { Router } from "express";
import {create, getAll} from "../controllers/chairsController";
const router = Router()

router.get('/', getAll);
router.post('/create', create);

export default router;