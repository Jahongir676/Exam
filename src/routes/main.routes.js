import express from "express"
import {authRouter, feedbackRouter} from "./router.export.js"

export const mainRouter=express.Router()

mainRouter.use("/auth",authRouter)
mainRouter.use("/feedback",feedbackRouter)