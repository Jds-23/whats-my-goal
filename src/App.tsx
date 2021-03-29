import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task/";
import { v4 as uuidv4 } from "uuid";

interface TasksInterface {
  completed: boolean;
  title: string;
  id: string;
}
function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<TasksInterface[]>([]);
  const addTask = () => {
    setTasks([...tasks, { title, completed: false, id: uuidv4() }]);
    setTitle("");
  };
  const handleDone = (id: string) => {
    let mapped = tasks.map((task) => {
      return task.id === id
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setTasks(mapped);
  };
  console.log(tasks);
  return (
    <div className="app">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      {tasks.map(({ title, completed, id }) => {
        return (
          <Task
            title={title}
            completed={completed}
            key={id}
            id={id}
            handleDone={handleDone}
          />
        );
      })}
    </div>
  );
}

export default App;
