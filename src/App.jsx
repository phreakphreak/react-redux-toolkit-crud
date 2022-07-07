import { Link, Route } from "wouter";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-row flex-wrap w-screen h-screen text-white bg-slate-900">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Route path="/">
          <div className="flex flex-row items-center justify-center w-full gap-8">
            <h1 className="text-4xl font-bold">Task Manager</h1>
            <Link to="/tasks/add">
              <button className="flex items-center justify-center h-12 px-4 py-2 text-2xl text-white rounded-md w-fit bg-cyan-600 hover:bg-cyan-500">
                Add Task
              </button>
            </Link>
          </div>
          <TaskList />
        </Route>
        <Route path="/tasks/add">
          <TaskForm />
        </Route>
      </div>
    </div>
  );
}

export default App;
