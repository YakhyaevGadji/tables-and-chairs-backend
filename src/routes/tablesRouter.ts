import express, {Router} from "express";
import {getAllTables, postTables} from "../controllers/tablesController";

const router = Router();

router.get('/', getAllTables);
router.post('/create', postTables);

export default router;