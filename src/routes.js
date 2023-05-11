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

routes.post("/users", UserController.store); // ok

routes.post("/session", SessionController.store); // ok

// routes.use(authMiddleware);

routes.post("/products", authMiddleware,upload.single("file"), ProductController.store); // ok
routes.get("/products", authMiddleware,ProductController.index); //ok
routes.put("/products/:id",  authMiddleware,upload.single("file"), ProductController.update); // ok

routes.post("/categories", authMiddleware, upload.single("file"), CategoryController.store); // ok
routes.get("/categories", authMiddleware, CategoryController.index); // ok
routes.put("/categories/:id", upload.single("file"), CategoryController.update); 

routes.post("/orders", authMiddleware, OrderController.store); // ok
routes.get("/orders", authMiddleware, OrderController.index); // ok
routes.put("/orders/:id", authMiddleware, OrderController.update); // ok

export default routes;
