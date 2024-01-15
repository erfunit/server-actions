import { deleteOneTodo } from "@/actions/add-todos-actiont";

const DeleteTodo = ({ id }: { id: string }) => {
  return (
    <form action={deleteOneTodo}>
      <input type="hidden" name="id" value={id} />
      <button className="bg-red-400 text-white p-3 rounded">Del</button>
    </form>
  );
};

export default DeleteTodo;
