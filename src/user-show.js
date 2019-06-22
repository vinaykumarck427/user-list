import React from 'react'
import Axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class UserShow extends React.Component{
  constructor(){
    super()
    this.state = {
      user:{}
    }
  }
  componentDidMount(){
    const id = this.props.userId
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      this.setState({user:response.data})
    })
  }
  toggle = ()=> {
    this.props.toggle(this.props.userId,false)
  }
  
  render(){
    console.log(this.state.user)
    console.log(this.props)
    return(
      <div>
        {Object.keys(this.state.user).length > 0 && (<Modal 
        isOpen={this.props.modal} 
        toggle={this.toggle} 
        className={this.props.className}>
          <ModalHeader>{this.state.user.name}</ModalHeader>
          <ModalBody>
            <div>
              <p>Email: {this.state.user.email}</p>
              <p>Phone No: {this.state.user.phone}</p>
              <p>Website: {this.state.user.website}</p>
              <p>City: {this.state.user.address.city}</p>
              <p>Company: {this.state.user.company.name}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>)}
      </div>
    )
  }
}
export default UserShow