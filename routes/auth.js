import express from "express";
import {
  loginSchema,
  registerDocSchema,
  registerUserSchema,
  validate,
} from "../validations/validator.js";
import {
  loginDoc,
  loginUser,
  registerDoc,
  registerUser,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register/doctor", validate(registerDocSchema), registerDoc);
router.post("/register/user", validate(registerUserSchema), registerUser);
router.post("/login/doctor", validate(loginSchema), loginDoc);
router.post("/login/user", validate(loginSchema), loginUser);

export default router;
