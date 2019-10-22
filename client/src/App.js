import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home'
import Saved from './pages/Saved'
import NoMatch from './pages/Nomatch'
import Navbar from './components/Navbar/Index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route path="/*" component={NoMatch} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;