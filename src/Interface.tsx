export interface ITask {
  name: string;
  completed: boolean;
  _id: string;
  __v: number;
}

export interface ITasks {
  tasks: ITask[];
}
