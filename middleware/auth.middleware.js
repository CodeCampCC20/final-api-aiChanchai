import { createError } from "../utils/createError.js";

export const authCheck = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      createError(401, "Token is Missing");
    }

    const token = header.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (error, decode) => {
      if (error) {
        createError(401, " Token is invalid");
      }
      req.user = decode;
      next();
    });
  } catch (error) {
    next(error);
  }
};
