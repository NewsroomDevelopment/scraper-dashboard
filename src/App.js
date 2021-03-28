// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Directory from './containers/Directory';
import  Vergil from './containers/Vergil';
import Handshake from './containers/Handshake';
import Confessions from './containers/Confessions';
import Goco from './containers/Goco';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/directory' component={Directory} />
        <Route exact path='/handshake' component={Handshake} />
        <Route exact path='/vergil' component={Vergil} />
        <Route exact path='/confessions' component={Confessions} />
        <Route exact path='/gocolumbialions' component={Goco} />
      </Switch>
    </Router>
  );
}
export default App;