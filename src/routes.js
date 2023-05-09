import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import authMiddleware from "./app/middlewares/auth";

import ProductController from "./app/controllers/ProductController";
import SessionController from "./app/controllers/SessionController";
import CategoryController from "./app/controllers/CategoryController";
import UserController from "./app/controllers/UserController";
import OrderController from "./app/controllers/OrderController";

const upload = multer(multerConfig);
const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({ welcome: "Hello! You are welcome at a CodeBurger API" })
})

routes.post("/users", UserController.store);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);
routes.put("/products/:id", upload.single("file"), ProductController.update);

routes.post("/categories", upload.single("file"), CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.put("/categories/:id", upload.single("file"), CategoryController.update);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);

export default routes;
