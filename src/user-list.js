import React from 'react'
import {Table} from 'reactstrap'
import {BrowserRouter,Link} from 'react-router-dom'
import UserShow from './user-show'

class UserList extends React.Component{
  constructor(props){
    super(props)
    this.state ={
        id:'',
        modal:false
    }
  }
  toggle = (id,modal) => {
    this.setState({modal,id})
  }
  render(){
    console.log(this.state.id,this.state.modal)
    return(
      <BrowserRouter>
        {this.state.modal === true && <UserShow modal={this.state.modal} userId={Number(this.state.id)} toggle={this.toggle} />}
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.length > 0 && this.props.users.map(user => {
              return (<tr key={user.id}>
                <th scope="row">{user.id}</th>
                  <td><Link to={`/users`} onClick={() => {
                  this.toggle(user.id,true)}}>{user.name}</Link></td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>)
            })}
          </tbody>
        </Table>
      </div>
      </BrowserRouter>
    )
  }
}
export default UserList