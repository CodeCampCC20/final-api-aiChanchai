import express from "express";
import cors from "cors";
import morgan from "morgan";
import error from "./utils/error.js";
import authRouter from "./routes/auth.js";
import notFound from "./utils/notFound.js";
import userRouter from "./routes/user.js";
import doctorRouter from "./routes/doctor.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//route
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/doctors", doctorRouter);

//error
app.use(error);

//404
app.use(notFound);

const PORT = 8001;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
