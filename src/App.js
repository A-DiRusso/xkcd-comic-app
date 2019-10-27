//Allows us to build a react app
import React from 'react';
//Allows us to render different views based on the url route
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Our custom components that render those views
import Home from './components/Home';
import Search from './components/Search';



function App() {
  return (
    <Router>
      <div>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          path='/search'
          component={Search}
        />
      </div>
    </Router>
  );
}

//Our App function gets pulled into index.js where it is rendered by ReactDom
export default App;
