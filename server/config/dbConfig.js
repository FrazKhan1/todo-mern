import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected");
});
db.on("error", (err) => {
  console.log("Error connecting db", err);
});

export default mongoose;
