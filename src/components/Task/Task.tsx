import React from "react";
import "./Task.css";
import deleteSvg from "./delete.svg";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSwipeable } from "react-swipeable";
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
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  const handlers = useSwipeable({
    onSwipedLeft: () => handleDelete(id),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <motion.div
      className="task"
      drag="x"
      dragElastic
      dragConstraints={{ left: -50, right: 0 }}
      style={{ x, opacity }}
      {...handlers}
    >
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
    </motion.div>
  );
};

export default Task;
