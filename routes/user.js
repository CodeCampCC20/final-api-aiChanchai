import express from "express";
import { authCheck } from "../middleware/auth.middleware.js";
import { getMe } from "../controllers/user.js";

const router = express.Router();

router.get("/me", authCheck, getMe);

export default router;
