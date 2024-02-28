import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const databaseinstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log(
      `\n
      #######################  Database Connected ##########################
      Database Connected on HOST : ${databaseinstance.connection.host}
      \n`
    );
  } catch (error) {
    console.log(`Database Connection FAILED: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
