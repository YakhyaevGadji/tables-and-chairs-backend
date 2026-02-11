import sequelize from "../db";
import { DataTypes } from "sequelize";

export const Chairs = sequelize.define("chairs", {
    id: { type:  DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    hit: { type: DataTypes.BOOLEAN },
    type: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    tags: { type: DataTypes.JSONB },
    attributes: { type: DataTypes.JSONB },
});