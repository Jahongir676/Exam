import express from "express";
import { addressController } from "../../controllers/index.js";
import {
  CheckAddressDatamiddleware,
  UpdateAddressDatamiddleware,
} from "../../middlewares/index.js";
import { addressValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const feedbackRouter = express.Router();

feedbackRouter.get("/", addressController.getAlladdress);
feedbackRouter.get("/:id", addressController.getAdressById);
feedbackRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  CheckAddressDatamiddleware(addressValidationSchema),
  addressController.createAddress
);
feedbackRouter.put(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  UpdateAddressDatamiddleware(addressValidationSchema),
  addressController.updateAddress
);
feedbackRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  addressController.deleteAddress
);
