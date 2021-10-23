import axios from "axios";
import { useEffect, useState } from "react";
import InputComponent from "../components/InputComponent";
import TaskList from "../components/TaskList";
import { ITasks } from "../Interface";

const HomePage = () => {
  const [allData, setAllData] = useState<ITasks | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTasks();
  }, [allData]);

  const getAllTasks = async (): Promise<void> => {
    const { data } = await axios.get<ITasks>(
      "http://localhost:5000/api/v1/tasks"
    );
    setAllData(data);
    setLoading(false);
  };

  return (
    <div>
      <InputComponent getAllTasks={getAllTasks} />
      <TaskList allData={allData} loading={loading} />
    </div>
  );
};

export default HomePage;
