import express, { Router } from "express"
import userRouter from "./user";
import referralRouter from "./referral"
const router = express.Router();
router.use("/user", userRouter);
router.use("/referral", referralRouter);
export default router;