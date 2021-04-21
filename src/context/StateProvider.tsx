import React, { createContext, ReactNode, useContext, useReducer } from "react";

interface TasksInterface {
  completed: boolean;
  title: string;
  id: string;
}
interface StateInterface {
  tasks: TasksInterface[];
  user: string | undefined;
  nofActiveTask: number;
}
interface Props {
  reducer: any;
  initialState: StateInterface;
  children: ReactNode;
}

export const StateContext = createContext<any | undefined>(undefined);

export const StateProvider = ({ reducer, initialState, children }: Props) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
