import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import FashionArticle from './components/FashionArticle'
import TravelArticle from './components/TravelArticle'
import HealthArticle from './components/HealthArticle'
import HomeArticle from './components/HomeArticle'
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
    <div>
      <NavBar/>
      <FashionArticle/>
      <TravelArticle/>
      <HealthArticle/>
      <HomeArticle/>
    </div>

    </Router>
  );
}

export default App;
