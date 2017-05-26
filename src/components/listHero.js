import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Img from 'react-image'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui/Card';

import {markHero} from '../actions/dotaHeroAction'
import HeroTeam from '../components/heroTeam.js'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
  },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

let test =(bool)=>{
  
  if(bool===true){
    return "yellow"
  }else{
    return "white"
  }
}


 


class ListHero extends Component {
    constructor(props){
        super(props)

          this.state={
            filter:''
          }
    }

    handleClick(id){

      

     this.props.markHero(id)
    }


    filterHero(data){
      let filtering = new RegExp(`${this.state.filter}.*`);
      console.log(filtering);
      return data.filter(dat=>{
        return filtering.test((dat.localized_name).toLowerCase())

      })
    }

     handleChange(e) {
    this.setState({ filter: e.target.value });
  }


  render(){
    
    return (
        <div style={styles.root}>
      <HeroTeam />  
      <Card>
          <TextField
      hintText="Search Hero"
      fullWidth={true}
      value={this.state.filter} 
      onChange={ this.handleChange.bind(this) } 
    />  
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Hero List</Subheader>
      {this.filterHero(this.props.heroes.dota_heroes).map((hero,index) => ( 
        <GridTile
          key={hero.id}
          title={hero.localized_name}
          subtitle={<span ><b>{hero.primary_attr}</b></span>}
          actionIcon={<IconButton onClick= { this.handleClick.bind(this,hero.id) }><StarBorder color={test(hero.taken) }   /></IconButton>}
          >
          <Img src={hero.icon} />
        </GridTile>
      ))}
    </GridList>
    </Card>
  </div>

    )
  }



}

const mapDispatchToProps = (dispatch) => {
  return{
    markHero:(id)=>{
      dispatch(markHero(id))
    },
  }
}

const mapStateToProps = (state) => {
  return{
    heroes : state.heroes
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListHero);