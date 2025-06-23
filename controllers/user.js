import prisma from "../config/prisma.js";
import {} from "../utils/createError.js";

export const getMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);

    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      omit: {
        password: true,
      },
    });

    res.json({ result: user });
  } catch (error) {
    next(error);
  }
};
