import { object, ref, string } from "yup";

export const registerDocSchema = object({
  username: string().required("กรุณากรอก Username"),
  password: string().min(6, "Password ต้องมากกว่า 6 ตัว"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password ไม่ตรงกัน"
  ),
  specialization: string().required("กรุณากรอก specialization"),
});

export const registerUserSchema = object({
  username: string().required("กรุณากรอก Username"),
  password: string().min(6, "Password ต้องมากกว่า 6 ตัว"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password ไม่ตรงกัน"
  ),
});

export const loginSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
  password: string().min(6, "Password ต้องมากกว่า 6 ตัว"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",");
    console.log(errTxt);
    const mergeErr = new Error(errTxt);
    next(mergeErr);
  }
};
