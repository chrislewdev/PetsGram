import React from "react";
import TopPanel from "./TopPanel";
import UserHomePage from "./UserHome/UserHomePage";
import PhotoPage from "./PhotoPage/PhotoPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopPanel />
      <Switch>
        <Route exact path="/" component={UserHomePage} />
        <Route exact path="/photopage" component={PhotoPage} />
      </Switch>
    </Router>
  );
}

export default App;
