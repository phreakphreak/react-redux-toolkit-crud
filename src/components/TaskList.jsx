import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-3 mx-2 my-6">
      {!!tasks &&
        tasks.map((task) => {
          return <TaskItem key={task.id} {...task} />;
        })}
    </div>
  );
}

export default TaskList;
