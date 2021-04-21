import React from "react";
import "./Todo.css";
import { Task } from "../../Task/";
import { TaskListHeader } from "../../TaskListHeader/";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../context/StateProvider";
interface TasksInterface {
  completed: boolean;
  title: string;
  id: string;
}
const Todo: React.FC = () => {
  const [{ tasks, nofActiveTask }, dispatch] = useStateValue();
  const handleOnDragEnd = (result: any) => {
    dispatch({
      type: "REORDER_TASK",
      result,
    });
  };
  return (
    <div className="app">
      <Link to="/create-task">Back</Link>
      <TaskListHeader nofActiveTask={nofActiveTask} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map(
                ({ title, completed, id }: TasksInterface, index: number) => {
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
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                }
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Todo;
