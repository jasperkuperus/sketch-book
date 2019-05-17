import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoaderPage from '../indicators/LoaderPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/loaders" component={LoaderPage} />
    </BrowserRouter>
  );
}
