import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `\nMongoDB connected !! DB HOST: ${dbConnection.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export { connectDB };
