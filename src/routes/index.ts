import { Router } from 'express';
import chairsRouter from "./chairsRouter";
import tablesRouter from "./tablesRouter";
const router = Router();

router.use('/chairs', chairsRouter);
router.use('/tables', tablesRouter)

export default router;