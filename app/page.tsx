import TodosComponent from "@/app/components/todos-component";
import Todos from "@/model/todos";
import connectDB from "@/utils/connectDB";

export default async function TodosPage() {
  connectDB();
  const todos = await Todos.find();

  return (
    <main className="flex min-h-screen flex-col items-center w-full p-24">
      <h1 className="text-2xl font-bold">Todos Page</h1>
      <TodosComponent todos={todos} />
    </main>
  );
}
