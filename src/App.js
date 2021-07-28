import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch> 
    </div>
  );
}

export default App;
