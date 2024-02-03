import React from 'react'
import { SendButton } from './SendButton'
import './MessageInput.css';

export const MessageInput = () => {
  
  return (
    <div>
        <form className="message-form" id="message-form">
            <input type="text" name="message" id="message-input" className="message-input" placeholder='Send a Message'/>
            <div className="v-divider"></div>
            <SendButton/>
        </form>
    </div>
  )
}
