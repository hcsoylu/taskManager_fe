import { ITasks } from "../Interface";
import Task from "./Task";

type TaskListProps = {
  allData: ITasks | null;
  loading: boolean;
};

const TaskList = ({ allData, loading }: TaskListProps) => {
  return (
    <div className="w-2/5 mx-auto">
      {loading ? (
        <div className="flex justify-center mt-5 text-2xl">Loading...</div>
      ) : (
        allData?.tasks.map((task) => <Task key={task._id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
