import express from "express";
import {
  authRouter,
  feedbackRouter,
  paymentRouter,
  productsRouter,
  discountRouter,
  addressRouter,
} from "./router.export.js";

export const mainRouter = express.Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/feedback", feedbackRouter);
mainRouter.use("/payment", paymentRouter);
mainRouter.use("/producta", productsRouter);
mainRouter.use("/discount", discountRouter);
mainRouter.use("/address", addressRouter);
