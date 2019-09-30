import React, { Component } from 'react';
import './SendMessageForm.css';

class SendMessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      senderId: this.props.senderId
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
      senderId: this.props.senderId
    })
  }

  onSubmit(e) {
    e.preventDefault()

    let text = this.state.text || ''
    while (!text) {
      text = prompt("Please enter some message");
      this.setState({text})
    }

    let userName = this.state.senderId
    while (!userName) {
      userName = prompt("Please enter your name");
      this.props.setUserName(userName)
    }

    console.log('onSubmit', this.state, userName)
    const message = {
      text: text,
      senderId: userName
    }

    this.props.addMessage(message)
    this.setState({text: ''})
  }

  render() {
    return (
      <form
        className="send-message-form"
        onSubmit={this.onSubmit}
      >
        <div className="message-label">Message:</div>
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Type your message and hit ENTER"
          type="text" />
      </form>
    )
  }
}

export default SendMessageForm;
