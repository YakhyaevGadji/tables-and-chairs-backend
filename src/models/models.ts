import sequelize from "../db";
import { DataTypes } from "sequelize";

export const Chairs = sequelize.define("chairs", {
    id: { type:  DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    hit: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    type: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    tags: { type: DataTypes.JSONB, allowNull: false },
    attributes: { type: DataTypes.JSONB, allowNull: false },
});

export const Tables = sequelize.define("tables", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    hit: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    type: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    tags: { type: DataTypes.JSONB, allowNull: false },
    attributes: { type: DataTypes.JSONB, allowNull: false },
})