import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard"
import Navigator from "./components/Navigator/Navigator"


function App() {
  return (
    <Router>
      <div>
        <Navigator/>
        <Switch>
          <Route path="/dashboard/:userType" children={<Dashboard/>}/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
