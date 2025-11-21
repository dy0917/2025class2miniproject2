const express = require("express");
const app = express();
app.use(express.json());
let dbConnect = require("./dbConnect");
const todoRoutes = require("./Routes/todos");
const postRoutes = require("./Routes/posts");

const port = 5050;

app.use("/", express.static("./public"));
app.use("/api/todos", todoRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log("server is up");
});
