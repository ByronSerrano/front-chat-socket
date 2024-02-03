import React from 'react'
import './MessageContainer.css';
import { MessageLeft } from './MessageLeft'
import { MessageRight } from './MessageRight'
import { MessageFeedback } from './MessageFeedback'
import { MessageInput } from './MessageInput'

export const MessageContainer = () => {
  return (
    <div>
        <ul className="message-container" id="message-container">
            <MessageLeft/>
            
            <MessageRight/>
            
            <MessageFeedback/>

            <MessageInput/>
        </ul>
    </div>
  )
}
