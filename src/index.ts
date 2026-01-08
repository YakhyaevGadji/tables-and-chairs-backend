import express from "express";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./db";
import "./models/models";
import cors from "cors";
import router from "./routes";
import { errorMiddleware } from "./middleware/ErrorHandlingMiddleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).json({message: 'test'})
})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port 3000");
        })
    }catch (err) {
        console.log(err);
    }
}

start();