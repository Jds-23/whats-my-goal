import React, { createContext, ReactNode, useContext, useState } from "react";

interface TasksInterface {
  completed: boolean;
  title: string;
  id: string;
}
interface StateContextInterface {
  tasks: TasksInterface[];
  setTasks: Function;
  nofActiveTask: number;
  setNofActiveTask: Function;
}
interface Props {
  children: ReactNode;
}

export const StateContext = createContext<StateContextInterface | undefined>(
  undefined
);

export const StateProvider = ({ children }: Props) => {
  const [nofActiveTask, setNofActiveTask] = useState(0);
  const [tasks, setTasks] = useState<TasksInterface[]>([]);
  return (
    <StateContext.Provider
      value={{ tasks, setTasks, nofActiveTask, setNofActiveTask }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
