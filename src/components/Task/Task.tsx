import React from "react";
import "./Task.css";

interface props {
  title: string;
  completed: boolean;
  id: string;
  handleDone: Function;
}
const Task: React.FC<props> = ({ title, completed, id, handleDone }: props) => {
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
    </div>
  );
};

Task.propTypes = {};

export default Task;
