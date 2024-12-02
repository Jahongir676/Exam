import express from "express";
import { discountsController } from "../../controllers/index.js";
import {
  CheckdiscountDatamiddleware,
  UpdateCheckdiscountDatamiddleware,
} from "../../middlewares/index.js";
import { discountValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const paymentRouter = express.Router();

paymentRouter.get("/", discountsController.getAllDiscounts);
paymentRouter.get("/:id", discountsController.getDiscountsById);
paymentRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  CheckdiscountDatamiddleware(discountValidationSchema),
  discountsController.createDiscount
);
paymentRouter.put(
  "/:id",
  roleGuard(["user", "admin", "manager"]),
  UpdateCheckdiscountDatamiddleware(discountValidationSchema),
  discountsController.updateDiscount
);
paymentRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  discountsController.deleteDiscount
);
