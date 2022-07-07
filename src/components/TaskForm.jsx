import { useState, useId } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { useLocation } from "wouter";

function TaskForm() {
  const dispatch = useDispatch();
  const [, setLocation] = useLocation();

  const [task, setTask] = useState({
    id: useId(),
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setLocation("/");
  };
  const handleChange = (e) => {
    setTask((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap gap-4 p-10 rounded-md w-96 bg-slate-800 "
    >
      <header className="pb-2">
        <h3 className="text-2xl font-bold">Add New Task</h3>
      </header>
      <label htmlFor="title" className="font-bold">
        Title
      </label>
      <input
        className="w-full p-3 text-lg rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-slate-700"
        type="text"
        placeholder="Task name"
        name="title"
        value={task.title}
        onChange={handleChange}
      />
      <label htmlFor="description" className="font-bold">
        Description
      </label>
      <textarea
        className="w-full p-3 text-lg rounded-md resize-none h-44 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-slate-700"
        placeholder="Task description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Save Task"
        className="px-5 py-3 mt-2 text-xl font-normal rounded-md hover:bg-sky-400 bg-sky-500 w-fit "
      />
    </form>
  );
}

export default TaskForm;
