import sequelize from "../db";
import { DataTypes } from "sequelize";

export const Chairs = sequelize.define("chairs", {
    id: { type:  DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    discount: { type: DataTypes.BOOLEAN, allowNull: false },
    hit: { type: DataTypes.BOOLEAN },
    category: { type: DataTypes.JSONB, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    oldPrice: { type: DataTypes.INTEGER },
    inStock: { type: DataTypes.BOOLEAN },
    unitCount: { type: DataTypes.INTEGER, allowNull: false },
    images: { type: DataTypes.JSONB, allowNull: false },
    tags: { type: DataTypes.JSONB, allowNull: false },
    attributes: { type: DataTypes.JSONB, allowNull: false },
});