import express from "express";
import { UserRegister } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", loginUser);
export default router;
