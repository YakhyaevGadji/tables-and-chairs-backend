import express from "express";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./db";

const app = express();

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