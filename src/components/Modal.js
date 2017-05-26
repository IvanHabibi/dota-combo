import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import Img from 'react-image'

const style = {
  style1:{
  height: 80,
  width: 150,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
},
style4:{
    height: 'auto',
    width: 'auto',
    maxWidth: '150px', 
    maxHeight: '150px'
}


  
};
const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

export default class DialogExampleModal extends React.Component {
  
  state = {
    open: false,
  };

  handleOpen = () => {
    console.log(this.props)
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="View" onTouchTap={this.handleOpen} />
        
        <Dialog
          title={this.props.Team.title}
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        >
          <div>
  {this.props.Team.heroes.map(hero=>(
  <Paper style={style.style1} zDepth={3} key={hero.id} >
      <GridTile
          key='asd'
          >
          <Img src={hero.icon} style={style.style4} />
        </GridTile>
      </Paper>
  ))}
    

  </div>
        <h3>How to play this team</h3>
        <p>{this.props.Team.content}</p>
        </Dialog>
      </div>
    );
  }
}