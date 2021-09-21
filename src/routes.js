import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import authMiddleware from "./app/middlewares/auth";

import ProductController from "./app/controllers/ProductController";
import SessionController from "./app/controllers/SessionController";

import UserController from "./app/controllers/UserController";

const upload = multer(multerConfig);
const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);

export default routes;
