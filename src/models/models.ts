import sequelize from "../db";
import { DataTypes } from "sequelize";

const Chairs = sequelize.define("chairs", {
    id: { type:  DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
});