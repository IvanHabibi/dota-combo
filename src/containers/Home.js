import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {connect} from 'react-redux'
import {Card} from 'material-ui/Card';



import Modal from '../components/Modal.js'
import DeleteModal from '../components/deleteModal.js'
import EditModal from '../components/editModal.js'

const style={
  style1:{
  width:'900px',
  marginTop:'50px',
  marginLeft:'450px',
    height: '10em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'

},
style2:{
  textAlign: 'center',
  display: 'inline-block',
}
}
const alertOE=(data)=>{
  alert(data)
}

class Home extends Component {  


  render() {
    return (
      <Card style={style.style1} height={'500px'}>
          <Table >
    <TableHeader displaySelectAll = {false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Action</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox = {false}>
      
        {this.props.team.map((tea,index)=>(
             <TableRow key={index}>
              <TableRowColumn>{tea.id}</TableRowColumn>
              <TableRowColumn>{tea.title}</TableRowColumn>
              <TableRowColumn ><Modal Team={tea} style={style.style2} /> <DeleteModal teamId={tea.id}/></TableRowColumn>
              <TableRowColumn><EditModal OE={()=>this.props.alertOE()}/></TableRowColumn>
            </TableRow>
          ))}
    </TableBody>
  </Table>
  </Card>
    );


  }
}

const mapStateToProps = (state) => {
  return{
    team : state.team
  }
}




export default connect(mapStateToProps,null)(Home);






