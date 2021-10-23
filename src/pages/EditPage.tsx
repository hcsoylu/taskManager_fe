import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

type Task = {
  name: string;
  completed: boolean;
  _id: number;
};

type EditPageType = {
  task: Task;
};

const EditPage = () => {
  const { id } = useParams<{ id: string }>();

  let history = useHistory();

  const [inputValue, setInputValue] = useState<string>("");
  const [boxValue, setBoxValue] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getOneTask = async () => {
      const { data } = await axios.get<EditPageType>(
        `http://localhost:5000/api/v1/tasks/${id}`
      );

      setInputValue(data.task.name);
      setBoxValue(data.task.completed);
    };
    getOneTask();
  }, [id]);

  const editTask = async () => {
    setLoading(true);
    const res = await axios.patch(`http://localhost:5000/api/v1/tasks/${id}`, {
      name: inputValue,
      completed: boxValue,
    });

    if (res.statusText === "OK") {
      setLoading(false);
    }

    history.push("/");
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-2/5 h-80 mx-auto bg-white flex flex-col p-8 justify-between  rounded-md">
        <h2 className="text-2xl text-center">Edit Task</h2>
        <div className="flex flex-col  w-4/5 mx-auto  ">
          <div className="flex items-center">
            <label className="text-xl" htmlFor="name">
              Name :
            </label>
            <input
              type="text"
              id="name"
              className="flex-1 bg-yellow-200 mx-3 my-2 p-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="flex items-center py-3 mt-2">
            <label className="text-xl" htmlFor="comp">
              Completed :
            </label>
            <input
              checked={boxValue}
              type="checkbox"
              id="comp"
              className="ml-5 mt-1 h-5 w-5"
              onChange={(e) => setBoxValue(e.target.checked)}
            />
          </div>
        </div>
        <button
          onClick={editTask}
          className="bg-red-500 p-1 w-2/5 mx-auto text-white text-xl"
        >
          {loading ? "Processing..." : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default EditPage;
