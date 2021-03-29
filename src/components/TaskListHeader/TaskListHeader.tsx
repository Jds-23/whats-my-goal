import React from "react";
import "./TaskListHeader.css";
interface props {
  nofActiveTask: number;
}

const TaskListHeader: React.FC<props> = ({ nofActiveTask }) => {
  return (
    <div className="task-list-header">
      <div className="task-list-header__text">
        <span>Today's goal</span>
      </div>
      <div className="task-list-header__number">{nofActiveTask}</div>
    </div>
  );
};

export default TaskListHeader;
