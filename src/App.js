import React from "react"
import Recipe from "./Recipe";
import './App.css';
import Nav from './Nav';
import Home from './Home';
import CookBook from "./CookBook";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

  return (
    <Router>
    <div className = "App"> 
      <Nav />
      <Switch>
        <Route path="/cookbook" exact component={CookBook}/>
        <Route path="/recipe/:id" component={Recipe}/>
      </Switch>
    </div>
    </Router>
  );
};

export default App;
