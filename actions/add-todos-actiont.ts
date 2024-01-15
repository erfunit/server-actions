"use server";

import connectDB from "@/utils/connectDB";
import User from "../model/todos";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  const title = formData.get("title");

  await connectDB();

  await User.create({
    title: title as string,
  });

  revalidatePath("/");
};
