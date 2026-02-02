import express from "express";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./db";
import "./models/models";
import cors from "cors";
import router from "./routes";
import { errorMiddleware } from "./middleware/ErrorHandlingMiddleware";
import fileUpload from "express-fileupload";
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorMiddleware);

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).json({message: 'test'})
})

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running ${PORT}`);
        })
    }catch (err) {
        console.log(err);
    }
}

start();
