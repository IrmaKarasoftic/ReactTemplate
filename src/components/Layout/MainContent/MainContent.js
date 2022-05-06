import React from 'react';
import {  Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import NotFound from '../../NotFound/NotFound';
import './MainContent.css';

function MainContent({ children, className }) {
  return <div className='main'>
   <h1>Main content</h1>
   <BrowserRouter>
   <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/notfound">
      <NotFound/>
    </Route>
  </Switch>
</BrowserRouter>
   </div>;

}

export default MainContent;