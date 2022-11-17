import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide task name"],
  },
});

export default mongoose.model("Task", TaskSchema);
