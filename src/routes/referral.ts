import express from "express";
import { createReferral } from "../controllers/referral";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

router.post("/create", createReferral);


export default router;