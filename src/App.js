import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import homePage from './components/Home/home';
import workoutsPage from "./containers/Workouts/Workouts";
import startPage from "./containers/Start/Start";
import editPage from "./containers/Edit/Edit";
import PrivateRoute from "./routers/privateRoute";
import PublicRoute from "./routers/publicRoute";

class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/hiit-timer/workouts" exact component={workoutsPage} />  
        <PrivateRoute path="/hiit-timer/workouts/:id/start" component={startPage} />
        <PrivateRoute path="/hiit-timer/workouts/:id/edit" component={editPage} />
        <PublicRoute path="/hiit-timer" exact component={homePage} />
        <Redirect to="/hiit-timer" />
      </Switch>
    );
  }
}

export default App;
