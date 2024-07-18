import express, { Router } from "express"
import userRouter from "./user";
const router = express.Router();
console.log("jbsd inside route");
router.use("/user", userRouter);

export default router;