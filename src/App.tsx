import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Todo } from "./components/Pages/Todo";
import { CreateTask } from "./components/Pages/CreateTask";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/create-task" component={CreateTask} />
          <Route exact path="/" component={Todo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
