import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task/";
import { v4 as uuidv4 } from "uuid";
import { TaskListHeader } from "./components/TaskListHeader/";

interface TasksInterface {
  completed: boolean;
  title: string;
  id: string;
}
function App() {
  const [title, setTitle] = useState("");
  const [nofActiveTask, setNofActiveTask] = useState(0);
  const [tasks, setTasks] = useState<TasksInterface[]>([]);
  const addTask = () => {
    if (title !== "") {
      setTasks([...tasks, { title, completed: false, id: uuidv4() }]);
      setNofActiveTask((prv) => prv + 1);
      setTitle("");
    }
  };
  const handleDone = (id: string) => {
    let mapped = tasks.map((task) => {
      if (task.id === id) {
        if (!task.completed) {
          setNofActiveTask((prv) => prv - 1);
        } else {
          setNofActiveTask((prv) => prv + 1);
        }
        return { ...task, completed: !task.completed };
      } else {
        return { ...task };
      }
    });
    setTasks(mapped);
  };
  return (
    <div className="app">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TaskListHeader nofActiveTask={nofActiveTask} />
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
