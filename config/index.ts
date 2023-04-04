import mongoose from "mongoose";

const connectDb = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log("ERR", err);
  }
};

export default connectDb;
