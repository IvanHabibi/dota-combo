import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import CreateTeam from './CreateTeam.js'
import Home from './Home.js'



class Main extends Component {
  render() {
    return (


      <div>
      <Route exact path="/" component={Home}/>
      <Route  path="/createteam" component={CreateTeam}/>
      </div>

    )
  }
}





export default Main;
