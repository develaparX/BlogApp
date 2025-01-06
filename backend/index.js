import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/posts.route.js";
import commentRouter from "./routes/comments.route.js";
import connectDB from "./lib/connectDB.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3020, () => {
  connectDB();
  console.log("server is running!");
});
