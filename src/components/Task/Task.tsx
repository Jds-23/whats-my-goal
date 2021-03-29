import React from "react";
import "./Task.css";
import deleteSvg from "./delete.svg";
interface props {
  title: string;
  completed: boolean;
  id: string;
  handleDone: Function;
  handleDelete: Function;
}
const Task: React.FC<props> = ({
  title,
  completed,
  id,
  handleDone,
  handleDelete,
}: props) => {
  return (
    <div className="task">
      <label className="container">
        <input
          type="checkbox"
          onChange={() => handleDone(id)}
          checked={completed}
        />
        <span className="checkmark"></span>
      </label>
      <span className={`task__title ${completed && "task__title-completed"}`}>
        {title}
      </span>
      <img
        onClick={() => handleDelete(id)}
        src={deleteSvg}
        alt="delete"
        className="task__delete-icon"
      />
    </div>
  );
};

export default Task;
