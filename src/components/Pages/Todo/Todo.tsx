import React, { useState } from "react";
import "./Todo.css";
import { Task } from "../../Task/";
import { TaskListHeader } from "../../TaskListHeader/";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useHooks } from "../../utils/hooks";
function Todo() {
  const {
    nofActiveTask,
    tasks,
    addTask,
    handleDone,
    handleDelete,
    handleOnDragEnd,
  } = useHooks();
  const [title, setTitle] = useState("");
  return (
    <div className="app">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => {
            addTask(title);
            setTitle("");
          }}
        >
          Add
        </button>
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

export default Todo;
