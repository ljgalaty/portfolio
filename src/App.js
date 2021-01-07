import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import GlobalStyle from './config/themes/GlobalStyle';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage} /> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
