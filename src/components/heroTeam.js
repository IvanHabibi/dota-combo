import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import { GridTile} from 'material-ui/GridList';
import Img from 'react-image'

import {addCombo} from '../actions/teamHeroAction'
import {resetState} from '../actions/dotaHeroAction'

const style = {
  style1:{
  height: 80,
  width: 150,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
},
style2:{
  width: 900,
  textAlign: 'left',
},
style4:{
    height: 'auto',
    width: 'auto',
    maxWidth: '150px', 
    maxHeight: '150px'
}
  
};

class heroTeam extends Component{
  constructor(props){
    super(props)
    
  this.state={
      title:'',
      content:'',
  }
}

  handleclick=()=>{
    this.props.resetState()
    this.setState({
      title :'',
      content:''
    });
  }

  handleclick2=(title,content,hero)=>{
    this.props.addCombo(title,content,hero)
    this.props.resetState()
    this.setState({
      title :'',
      content:''
    });
  }

  handleInputChange=(event)=> {
    const target = event.target;
    const value = event.target.value
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  render(){
    return (
        <Card style={style.style2} >
      <CardHeader
      title="Hero Combination"
    />
  <div>
  {this.props.heroes.dota_heroes.map(hero=>{
    if(hero.taken===true){
      return(
      <Paper style={style.style1} zDepth={3} key={hero.id} >
      <GridTile
          key='asd'
          >
          <Img src={hero.icon} style={style.style4} />
        </GridTile>
      </Paper>
    )
    }
    
  })}
    

  </div>
  <Divider />
    <CardText >
     <TextField
     name='title'
      floatingLabelText="Hero Combination Title"
      value={this.state.title} 
      onChange={this.handleInputChange}
    /><br />
    </CardText>
      
    <CardText >
     <TextField
     name='content'
      hintText="Message Field"
      floatingLabelText="Describe your hero combination strategy"
      multiLine={true}
      rows={4}
      fullWidth={true}
      value={this.state.content} 
      onChange={this.handleInputChange}
    /><br />
    </CardText>
    <CardActions>
      <FlatButton label="Create Team" onClick={()=>this.handleclick2(this.state.title,this.state.content,this.props.heroes.dota_heroes)} />
      <FlatButton label="Reset" onClick={()=>this.handleclick()}/>
    </CardActions>
  </Card>
    )
  }


}

const mapStateToProps = (state) => {
  return{
    heroes : state.heroes
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addCombo:(title,content,heroes)=>{
      dispatch(addCombo(title,content,heroes))
    },
    resetState:()=>{
      dispatch(resetState())
    }

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(heroTeam);