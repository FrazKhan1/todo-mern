import mongoose from "mongoose";

const schema = mongoose.Schema;

const todoSchema = mongoose.schema(
  {
    todo: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  {
    timestamp: true,
  }
);

const todoModel = new mongoose.model("todos", todoSchema);
export default todoModel;
