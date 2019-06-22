import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import UserList from './user-list'
import 'bootstrap/dist/css/bootstrap.min.css';

class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        this.setState({ users:response.data })
      })
  }
  render() {
    console.log(this.state.users)
    return (<div>
          <h2>Listing Users - {this.state.users.length}</h2>
          <UserList users={this.state.users} />
          {/* <ModalExample /> */}
          </div>
    )
  }
}
// const UserData = (props) => { 
//   return (
//     <tr>
//       <th scope="row">{props.user.id}</th>
//       <td>{props.user.id}</td>
//       <td><Link to={`/users/${props.user.id}`}>{props.user.name}</Link></td>
//       <td>{props.user.username}</td>
//       <td>{props.user.email}</td>
//     </tr>
//   )
// }

ReactDOM.render(<Users />, document.getElementById('root'));


