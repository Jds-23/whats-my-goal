import React from "react";
import "./Todo.css";
import { Task } from "../../Task/";
import { TaskListHeader } from "../../TaskListHeader/";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
interface TasksInterface {
  completed: boolean;
  title: string;
  id: string;
}
interface props {
  nofActiveTask: number;
  tasks: TasksInterface[];
  addTask: Function;
  handleDone: Function;
  handleDelete: Function;
  handleOnDragEnd: any;
}
const Todo: React.FC<props> = ({
  nofActiveTask,
  tasks,
  handleDone,
  handleDelete,
  handleOnDragEnd,
}: props) => {
  return (
    <div className="app">
      <Link to="/create-task">Back</Link>
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
};

export default Todo;
