import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>User Page</h1>
        </Route>
        <Route path="/places/new" exact>
          <h1>New Place Page</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
