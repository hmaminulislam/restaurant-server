import mongoose from "mongoose";

const Dbconnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/assignment");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export { Dbconnect };
