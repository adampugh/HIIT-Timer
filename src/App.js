import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import homePage from './components/Home/home';
import workoutsPage from "./containers/Workouts/Workouts";
import startPage from "./containers/Start/Start";
import editPage from "./containers/Edit/Edit";
import PrivateRoute from "./routers/privateRoute";


class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/workouts" exact component={workoutsPage} />  
        <PrivateRoute path="/workouts/:id/start" component={startPage} />
        <PrivateRoute path="/workouts/:id/edit" component={editPage} />
        <Route path="/" exact component={homePage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
