import React from "react";
import "./Task.css";
import deleteSvg from "./delete.svg";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useStateValue } from "../../context/StateProvider";
interface props {
  title: string;
  completed: boolean;
  id: string;
}
const Task: React.FC<props> = ({ title, completed, id }: props) => {
  const [, dispatch] = useStateValue();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [1, 1, 1]);
  const colorOutput = [
    "rgba(255, 0, 0, 0.5)",
    "rgba(255, 255, 255, 0.2)",
    "rgba(0, 255, 0, 0.5)",
  ];
  const backgroundColor = useTransform(x, [-50, 0, 50], colorOutput);
  const handlers = useSwipeable({
    onSwipedLeft: () => handleDelete(id),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const handleDelete = (id: string) => {
    dispatch({
      type: "REMOVE_TASK",
      id,
    });
  };
  const handleDone = (id: string) => {
    dispatch({
      type: "DONE_UNDONE_TASK",
      id,
    });
  };
  return (
    <motion.div
      className="task"
      drag
      dragElastic
      dragConstraints={{ top: 0, bottom: 0, left: -50, right: 0 }}
      style={{ x, opacity, backgroundColor }}
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
