import { getRandomColor } from "../utils";

function TaskItem({ title, description, id }) {
  return (
    <div
      className="flex flex-col flex-wrap gap-4 p-4 rounded-md w-96"
      style={{ backgroundColor: getRandomColor(id) }}
    >
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default TaskItem;
