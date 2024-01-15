"use server";

import Todos from "@/model/todos";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  const title = formData.get("title");

  await connectDB();

  await Todos.create({
    title: title as string,
  });

  revalidatePath("/");
};

export const deleteOneTodo = async (formData: FormData) => {
  const id = formData.get("id");

  await connectDB();

  const todo = await Todos.findById(id);

  if (todo) {
    await Todos.deleteOne({
      _id: id,
    });
    revalidatePath("/");
  }
};
