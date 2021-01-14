import { ISubscrivable } from "../observer";
import { MyCategory } from "../source";

export enum TodoType {
  grocery = "grocery",
  read = "read a book",
  eat = "eat",
  work = "to finish the task",
  other = "other",
}

export enum Status {
  todo = "To Do",
  inProgress = "In Progress",
  done = "Done",
}

export type SubtasksGetter = (ids: number[]) => ITodo[];

export interface ITodoSystem {
  setTodoSource: (source: MyCategory) => void;
}

export interface ITodo extends ISubscrivable {
  id: number;
  type: TodoType;
  title: string;
  description: string;
  source: string;
  getEstimation: () => number;
  status: Status;
}

export interface IChanges {
  type?: TodoType;
  title?: string;
  description?: string;
  source?: string;
  status?: Status;
}
