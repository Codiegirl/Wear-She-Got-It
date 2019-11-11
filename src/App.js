import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import FashionArticle from './components/FashionArticle'
import TravelArticle from './components/TravelArticle'
import HealthArticle from './components/HealthArticle'
import HomeArticle from './components/HomeArticle'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'
import './App.css'




class App extends Component {

  state = {
    sideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }
    
    return (
    
  
    <Router>
    <div style={{height: '100'}}>
    <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
    {sideDrawer}
    {backdrop}
      <Route path="/homepage" component={HomePage} exact/>
      <Route path="/fashion" component={FashionArticle}/>
      <Route path="/travel" component={TravelArticle}/>
      <Route path="/health" component={HealthArticle}/>
      <Route path="/decor" component={HomeArticle}/>
    </div>

    </Router>
   );
  }
}

export default App;
