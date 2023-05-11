import Sequelize from "sequelize";
require('dotenv').config()

import product from "../app/models/Product";
import user from "../app/models/User";
import category from "../app/models/Category";

//import configDatabase from "../config/database";
import mongoose from "mongoose";

const models = [user, product, category];
const postgressUrl = process.env.DATABASE_URL;
const mongoUrl = process.env.MONGO_URL;

class Database {
  constructor() {
    this.init();
    this.mongo();
  }
  init() {
    this.connection = new Sequelize(postgressUrl);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(mongoUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
