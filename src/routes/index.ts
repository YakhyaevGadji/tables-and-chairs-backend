import { Router } from 'express';
import chairsRouter from "./chairsRouter";
const router = Router();

router.use('/chairs', chairsRouter);

export default router;