import { useState, useId, useEffect } from "react";
import { useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
export function useTask(taskId) {
  const tasks = useSelector((state) => state.tasks);
  const [task, setTask] = useState({
    id: useId(),
    title: "",
    description: "",
  });
  const action = !taskId ? addTask : updateTask;

  useEffect(() => {
    if (taskId) {
      setTask(tasks.find((item) => item.id === taskId));
    }
  }, []);

  return [task, action, setTask];
}
