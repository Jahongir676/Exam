import express from "express";
import { productsConttroller } from "../../controllers/index.js";
import {
  checkProductDatamiddleare,
  UpdatecheckProductDatamiddleare,
} from "../../middlewares/index.js";
import { ProductValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const paymentRouter = express.Router();

paymentRouter.get("/", productsConttroller.getAllProducts);
paymentRouter.get("/:id", productsConttroller.getProductById);
paymentRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  checkProductDatamiddleare(ProductValidationSchema),
  productsConttroller.createProduct
);
paymentRouter.put(
  "/:id",
  roleGuard(["user", "admin", "manager"]),
  UpdatecheckProductDatamiddleare(ProductValidationSchema),
  productsConttroller.updateProduct
);
paymentRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  productsConttroller.deleteProduct
);
