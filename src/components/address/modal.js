import { Modal, Button } from 'antd';
import React from 'react';
import UpdateTodo from './edit'


class AddressModal extends React.Component {

  state = { visible: false , editformvisible:false}
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  showEditForm = () => {
    this.setState({
      editformvisible: true,
    });
  }


  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const {id, address1, address2, city, state, zipcode, country} = this.props
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {!this.state.editformvisible ? 
          (<div>
          <p></p>
          <p>address1: {address1} </p>
          <p>address2: {address2} </p>
          <p>city: {city} </p>
          <p>state: {state} </p>
          <p>zipcode: {zipcode} </p>
          <p>country: {country} </p>
          <a onClick = {this.showEditForm} > edit </a>
          </div>)
          : (<div> <UpdateTodo address1= {address1} address2= {address2} city= {city}
            state = {state} zipcode={zipcode} country= {country} id = {id} onCancel={this.handleCancel}/></div>)}
        </Modal>
      </div>
    );
  }
}

export default AddressModal;