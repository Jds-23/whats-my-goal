import React, { useState } from "react";
import { Link } from "react-router-dom";
interface props {
  addTask: Function;
}
const CreateTask: React.FC<props> = ({ addTask }: props) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <h1>CreateTask</h1>
      <Link to="/">Back</Link>
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
  );
};

export default CreateTask;
