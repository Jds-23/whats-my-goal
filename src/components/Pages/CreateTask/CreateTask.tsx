import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../context/StateProvider";
const CreateTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [, dispatch] = useStateValue();
  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
      title,
    });
    setTitle("");
  };
  return (
    <div>
      <h1>CreateTask</h1>
      <Link to="/">Back</Link>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default CreateTask;
