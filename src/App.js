import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AllLink } from './components/AllLink';

//components
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/page3">
            <Page3 />
          </Route>
        </Switch>
        <AllLink />
      </Router>
    </>
  );
}

export default App;
