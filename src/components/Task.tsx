import axios from "axios";
import { ITask } from "../Interface";
import { Link } from "react-router-dom";

type TaskProps = {
  task: ITask;
};

const Task = ({ task }: TaskProps) => {
  const deleteHandler = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/v1/tasks/${id}`);
  };

  return (
    <div className="bg-white my-5 h-20 p-5 rounded-md flex justify-between items-center ">
      <div className="flex  flex-row-reverse text-xl items-center">
        <span className="pl-3 ">{task.name}</span>
        {task.completed ? (
          <svg
            style={{ color: "green" }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-1 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            style={{ color: "red" }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      <div className="flex flex-row-reverse">
        <span
          onClick={() => deleteHandler(task._id)}
          className="cursor-pointer px-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </span>
        <span className="cursor-pointer px-2">
          <Link to={`/edit/${task._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Task;
