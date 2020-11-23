import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Upperbar from './components/Upperbar';
import Slide from './components/Slide';
import Navbar from './components/Navbar';
import HousesList from './components/HouseList';
import EditHouse from './components/EditHouse';
import CreateHouse from './components/CreateHouse'

function App() {
  return (
    <div>
      <Upperbar />
      <Slide />
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={HousesList} />
        <Route path="/edit/:id" component={EditHouse} />
        <Route path="/create" component={CreateHouse} />
      </Router>
    </div>
  )
}

export default App
