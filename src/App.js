import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/' component={} />
      <Route exact path='/' component={} /> */}
    </Switch>
  </Router>
  );
}

export default App;
