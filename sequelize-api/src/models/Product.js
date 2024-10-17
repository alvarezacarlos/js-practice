import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const product = sequelize.define(
  "Product",
  {
    productName: {
      type: DataTypes.STRING,
    },
    productDesc: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    freezeTableName: true,
    tableName: "Product",
  }
);
