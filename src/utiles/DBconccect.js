const mongoose = require ("mongoose")

const Dbconnect = async() => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wpflsxi.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = Dbconnect
