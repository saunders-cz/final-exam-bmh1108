import { DataTypes, Model } from "sequelize";
import { dbConnection } from "./connection.js";
import { categories, pastries } from "../data/pastries.js";

const { FLOAT, INTEGER, STRING } = DataTypes;

class Pastry extends Model {}

Pastry.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: STRING, allowNull: false },
    origin: { type: STRING, allowNull: false },
    imgsrc: { type: STRING, allowNull: true },
    description: { type: STRING, allowNull: false },
    price: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "pastry",
      plural: "pastries",
    },
  }
);

class Category extends Model {}

Category.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "category",
      plural: "categories",
    },
  }
);

Category.hasMany(Pastry);
Pastry.belongsTo(Category);

await dbConnection.sync({ force: true });

await Category.bulkCreate(categories);
await Pastry.bulkCreate(
  pastries.map((p) => {
    const { id, ...pastry } = p;
    return pastry;
  })
);

export { Pastry, Category };
