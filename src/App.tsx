import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Task from "./components/Task";
import { ITasks } from "./Interface";

function App() {
  const [allData, setAllData] = useState<ITasks | null>(null);

  useEffect(() => {
    const getAllTasks = async (): Promise<void> => {
      const res = await axios.get<ITasks>("http://localhost:5000/api/v1/tasks");
      setAllData(res.data);
    };
    getAllTasks();
  }, []);

  console.log(allData);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {allData?.tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
}

export default App;
