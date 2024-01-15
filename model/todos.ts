import { Schema, model, models } from "mongoose";

const todosSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
});

const Todos = models.Todos || model("Todos", todosSchema);

export default Todos;
