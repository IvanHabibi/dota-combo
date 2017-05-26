import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'

import {deleteTeam as DeleteTeam} from '../actions/teamHeroAction'

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class DialogExampleAlert extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

  };
  handleClose2 = () => {
    this.setState({open: false});
    console.log(this.props.teamId)
    this.props.DeleteTeam(this.props.teamId)
  };

  render() {
    const actions = [
      <FlatButton
        name='cancel'
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        name='discard'
        label="Discard"
        primary={true}
        onTouchTap={this.handleClose2}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Delete" onTouchTap={this.handleOpen} secondary={true} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Delete draft?
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    DeleteTeam:(id)=>{
      dispatch(DeleteTeam(id))
    }

  }
}

export default connect(null,mapDispatchToProps)(DialogExampleAlert);