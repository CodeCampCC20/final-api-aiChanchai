import express from "express";
import { authCheck } from "../middleware/auth.middleware.js";
import { getMeDoc } from "../controllers/doctor.js";

const router = express.Router();

router.get("/me", authCheck, getMeDoc);

export default router;
