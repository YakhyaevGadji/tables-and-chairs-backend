import sequelize from "../db";
import { DataTypes } from "sequelize";

export const Chairs = sequelize.define("chairs", {
    id: { type:  DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    discount: { type: DataTypes.BOOLEAN },
    hit: { type: DataTypes.BOOLEAN },
    category: { type: DataTypes.JSONB },
    type: { type: DataTypes.STRING },
    slug: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    oldPrice: { type: DataTypes.INTEGER },
    inStock: { type: DataTypes.BOOLEAN },
    unitCount: { type: DataTypes.INTEGER },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    tags: { type: DataTypes.JSONB },
    attributes: { type: DataTypes.JSONB },
});