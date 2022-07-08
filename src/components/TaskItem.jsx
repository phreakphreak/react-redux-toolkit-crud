import { getRandomColor } from "../utils";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TaskItem({ title, description, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div
      className="flex flex-col flex-wrap gap-4 p-4 bg-teal-400 rounded-md w-96"
      style={{ backgroundColor: getRandomColor(id) }}
    >
      <div className="px-6 py-4">
        <div className="flex flex-row flex-wrap items-start mb-2 text-xl font-bold">
          <span className="flex w-8/12">{title}</span>

          <div className="flex flex-row flex-wrap gap-2">
            <DeleteButton onClick={handleDelete} />
            <EditButton taskId={id} />
          </div>
        </div>

        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default TaskItem;
