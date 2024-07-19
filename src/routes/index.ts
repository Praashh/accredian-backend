import express, { Router } from "express"
import userRouter from "./user";
import referralRouter from "./referral"
const router = express.Router();
console.log("jbsd inside route");
router.use("/user", userRouter);
router.use("/referral", referralRouter);
export default router;