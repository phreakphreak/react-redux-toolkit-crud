import { Link } from "wouter";
import TaskList from "./TaskList";
function TaskView() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full gap-8">
        <h1 className="text-4xl font-bold">Task Manager</h1>
        <Link to="/tasks">
          <button className="flex items-center justify-center h-12 px-4 py-2 text-2xl text-white rounded-md w-fit bg-cyan-600 hover:bg-cyan-500">
            Add Task
          </button>
        </Link>
      </div>
      <TaskList />
    </>
  );
}

export default TaskView;
