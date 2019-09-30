import React, { Component } from 'react';
import './MessageList.css';

class MessageList extends Component {
  render() {
    const { messages } = this.props

    return (
      <ul className="message-list">                 
        {messages.reverse().map(message => {
          return (
           <li key={message.id}>
             <div>
               <b>{message.senderId}</b> says:
             </div>
             <div>
               {message.text}
             </div>
           </li>
         )
       })}
     </ul>
    )
  }
}

export default MessageList;
