import AddTodo from "../../components/Addtodo/addTodo";
import ShowTodo from "../../components/ShowTodo/showTodo";

function todoRed() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4 dark:bg-gray-800">
      <div className="w-full max-w-md">
        <AddTodo />
        <ShowTodo />
      </div>
    </div>
  );
}

export default todoRed;
