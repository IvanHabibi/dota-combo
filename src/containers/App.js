import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'

import Main from './Main'
import Header from './Header'
import {initHero} from '../actions/dotaHeroAction'
import {initTeam} from '../actions/teamHeroAction'

const stylingapp={
    textAlign: "center",
    
  }
class App extends Component {

    componentDidMount(){
      this.props.initHero()
      this.props.initTeam()
      
}

  

  render() {
    return (
      <MuiThemeProvider>
      <div  style={stylingapp}>
        <Router>
      <div>
        <Header />
        <Main />
      </div>
      </Router>
      </div>
      </MuiThemeProvider>
    );

    

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    initHero:()=>{
      dispatch(initHero())
    },
    initTeam:()=>{
      dispatch(initTeam())
    }
  }
}


export default connect(null,mapDispatchToProps)(App);
