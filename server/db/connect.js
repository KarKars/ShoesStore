const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://kar:krimou1997db@taskmanagerrestapi.8snv6.mongodb.net/taskManagerDB?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
