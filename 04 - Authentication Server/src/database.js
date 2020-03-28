import mongoose from "mongoose";

// DB Setup
mongoose.connect("mongodb://localhost:27017/auth", {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});
