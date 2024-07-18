import express, { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { deleteAccount, Login, Logout, Profile, Register } from "../controllers/user";
const router:Router = express.Router();


router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.delete("/delete/:id", deleteAccount);
router.get("/me", authMiddleware, Profile)

export default router;