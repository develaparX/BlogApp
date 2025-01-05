import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();

app.use("/users", userRouter);

app.listen(3020, () => {
  console.log("server is running!");
});
