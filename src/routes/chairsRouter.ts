import express, { Router } from "express";
import { getAll } from "../controllers/chairsController";
const router = Router();

router.get('/', getAll);
router.post('/create', )

export default router;