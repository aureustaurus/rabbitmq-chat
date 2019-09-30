import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Title from './Title'
import UserName from './UserName'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

const DUMMY_DATA = [
  {
    id: 0,
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    id: 1,
    senderId: "janedoe",
    text: "who'll win?"
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
       messages: DUMMY_DATA,
       userName: ''
    }

    this.setUserName = this.setUserName.bind(this)
    this.setValueAsUserName = this.setValueAsUserName.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.postMessage = this.postMessage.bind(this)
  }

  setUserName(e) {
    console.log(e.target.value)
    this.setValueAsUserName(e.target.value)
  }

  setValueAsUserName(value) {
    console.log('setValueAsUserName', value, this.state.userName)
    this.setState({
      userName: value
    })
  }

  addMessage(message) {
    const messages = this.state.messages

    const newMessage = {...message, id: messages.length}

    messages.push(newMessage)

    this.setState({messages})
    this.postMessage(newMessage)
  }

  postMessage(message) {
    console.log('postMessage')
    const instance = axios.create({
      baseURL: 'http://localhost:3020',
      mode: 'no-cors'
    })

    instance.put('/message', message)
    .then(function (response) {
      console.log('response', response);
    })
    .catch(function (error) {
      console.log('error', error);
    });
  }

  render() {
    console.log('this.state.userName', this.state.userName)
    return (
      <div className="App">
        <Title />
        <UserName onChangeName={this.setUserName} userName={this.state.userName}/>
        <MessageList messages={this.state.messages}/>
        <SendMessageForm senderId={this.state.userName} setUserName={this.setValueAsUserName} addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default App;
