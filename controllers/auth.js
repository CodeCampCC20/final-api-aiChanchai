import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

export const registerDoc = async (req, res, next) => {
  try {
    const { username, password, specialization } = req.body;

    const doctor = await prisma.doctor.findFirst({
      where: {
        username,
      },
    });

    if (doctor) {
      createError(400, "Username already exist");
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const result = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        confirmPassword,
        specialization,
      },
    });

    res.json({ message: "Register doctor Successfully" });
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { username, password, confirmPassword } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) {
      createError(400, "Username already exist");
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const result = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        confirmPassword,
      },
    });

    res.json({ message: "Register user Successfully" });
  } catch (error) {
    next(error);
  }
};

export const loginDoc = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      createError(400, "Email or Password invalid");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) createError(400, " Email or Password invalid");

    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });
    res.json({
      message: "Welcome",
      payload: payload,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      createError(400, "Email or Password invalid");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) createError(400, " Email or Password invalid");

    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });
    res.json({
      message: "Welcome",
      payload: payload,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};
