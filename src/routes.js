import { Router } from "express";
import ProductController from "./app/controllers/ProductController";
import SessionController from "./app/controllers/SessionController";

import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/session", SessionController.store);

routes.post("/products", ProductController.store);

export default routes;
