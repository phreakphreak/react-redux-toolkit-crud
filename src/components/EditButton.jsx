import { Link } from "wouter";

function BiPencil(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        d="M16.589 9L15.003 7.414 5.906 16.511 5.377 18.625 7.491 18.097z"
      />
      <path
        transform="rotate(134.999 18.003 6)"
        fill="none"
        d="M16.882 4.879H19.125V7.122H16.882z"
      />
      <path d="M4.003,21c0.081,0,0.162-0.01,0.242-0.03l4-1c0.176-0.044,0.337-0.135,0.465-0.263L21.003,7.414 c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414L19.417,3c-0.756-0.756-2.072-0.756-2.828,0L4.296,15.293 c-0.128,0.128-0.219,0.289-0.263,0.464l-1,4c-0.086,0.341,0.015,0.701,0.263,0.95C3.485,20.897,3.741,21,4.003,21z M18.003,4.414 L19.589,6l-1.586,1.586L16.417,6L18.003,4.414z M5.906,16.511l9.097-9.097L16.589,9l-9.098,9.097l-2.114,0.528L5.906,16.511z" />
    </svg>
  );
}

const EditButton = ({ taskId }) => {
  return (
    <Link to={`/tasks/${taskId}`}>
      <button className="p-2 text-white bg-blue-500 rounded-md">
        <BiPencil />
      </button>
    </Link>
  );
};

export default EditButton;
