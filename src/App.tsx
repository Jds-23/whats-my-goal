import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task/";
import { v4 as uuidv4 } from "uuid";
import { TaskListHeader } from "./components/TaskListHeader/";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
  const handleDelete = (id: string) => {
    let filtered = tasks.filter((task) => {
      if (!task.completed && task.id === id) {
        setNofActiveTask((prv) => prv - 1);
      }
      return task.id !== id;
    });
    setTasks(filtered);
  };
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map(({ title, completed, id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task
                          title={title}
                          completed={completed}
                          key={id}
                          id={id}
                          handleDone={handleDone}
                          handleDelete={handleDelete}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
