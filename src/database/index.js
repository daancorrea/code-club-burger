import Sequelize from "sequelize";
require('dotenv').config()

import product from "../app/models/Product";
import user from "../app/models/User";
import category from "../app/models/Category";

import mongoose from "mongoose";

const models = [user, product, category];
const postgressUrl = 'postgresql://postgres:4jQoq8mNEPYlLtnJ0W42@containers-us-west-66.railway.app:6069/railway'
const mongoUrl = 'mongodb://mongo:AQ19vibJwwXLkFHZA9r8@containers-us-west-152.railway.app:7754'

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
