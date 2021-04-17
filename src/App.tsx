import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Todo } from "./components/Pages/Todo";
import { CreateTask } from "./components/Pages/CreateTask";
import { useHooks } from "./components/utils/hooks";
const App = () => {
  const {
    nofActiveTask,
    tasks,
    addTask,
    handleDone,
    handleDelete,
    handleOnDragEnd,
  } = useHooks();
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/create-task"
            render={() => <CreateTask addTask={addTask} />}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Todo
                nofActiveTask={nofActiveTask}
                tasks={tasks}
                addTask={addTask}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleOnDragEnd={handleOnDragEnd}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
