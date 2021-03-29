import React from "react";

interface props {}

const TaskListHeader: React.FC<props> = () => {
  return (
    <div className="task-list-header">
      <div className="task-list-header__text">
        <span>Today's goal</span>
      </div>
      <div className="task-list-header__number">3</div>
    </div>
  );
};

export default TaskListHeader;
