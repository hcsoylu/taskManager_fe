import { ITask } from "../Interface";

type TaskProps = {
  task: ITask;
};

const Task = ({ task }: TaskProps) => {
  return <div>{task.name}</div>;
};

export default Task;
