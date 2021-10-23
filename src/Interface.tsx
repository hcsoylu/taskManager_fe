export type ITask = {
  name: string;
  completed: boolean;
  _id: string;
};

export type ITasks = {
  tasks: ITask[];
};
