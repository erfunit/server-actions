"use client";

import { addTodo, deleteOneTodo } from "@/actions/add-todos-actiont";
import React, { useOptimistic } from "react";
import DeleteTodo from "./delete-todo";
import { useFormState, useFormStatus } from "react-dom";

type Todo = {
  _id: string;
  title: string;
};

type TodosComponentProps = {
  todos: Todo[];
};

const TodosComponent = ({ todos }: TodosComponentProps) => {
  return (
    <>
      <form action={addTodo} className="flex flex-col w-[300px] my-16">
        <input
          type="text"
          name="title"
          className="px-4 py-2 mb-3"
          placeholder="Write your todo..."
          required
        />
        <button className="bg-blue-500 rounded px-4 py-2 text-white font-semibold">
          Add
        </button>
      </form>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            className="w-full min-w-[300px] flex justify-between items-center px-2 py-2 bg-blue-300 rounded text-white "
            key={todo._id}
          >
            {todo.title}
            <DeleteTodo id={todo._id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodosComponent;
