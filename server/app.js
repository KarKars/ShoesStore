const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
var cors = require("cors");

//midleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/tasks", tasks);

const port = 8000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`the server is listning to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
