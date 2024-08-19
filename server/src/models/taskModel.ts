import mongoose from "mongoose";


const taskSchema = new mongoose.Schema(
    {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['todo', 'inProgress', 'done', 'timeout'], default: 'todo' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
    deadline: { type: Date, required: true },
  }, {
    timestamps: true
  }
);

export default mongoose.model("Task", taskSchema);
