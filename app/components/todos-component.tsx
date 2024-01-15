"use client";

import { addTodo } from "@/actions/add-todos-actiont";
import React, { useOptimistic } from "react";

type Todo = {
  _id: string;
  title: string;
};

type TodosComponentProps = {
  todos: Todo[];
};

const TodosComponent = ({ todos }: TodosComponentProps) => {
  const [optimisticTodos, addOptimisticTodos] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    }
  );

  return (
    <>
      <form
        action={async (formData) => {
          const title = formData.get("title");

          addOptimisticTodos({
            _id: ("" + Math.random()) as string,
            title: title as string,
          });

          await addTodo(formData);
        }}
        className="flex flex-col w-[300px] my-16"
      >
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
        {optimisticTodos.map((todo) => (
          <li
            className="w-full px-6 py-2 bg-blue-300 rounded text-white "
            key={todo._id}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodosComponent;
