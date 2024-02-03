import React from 'react'
import './SendButton.css';

export const SendButton = () => {
  return (
    <div>
        <button type="submit" className="send-button">
            <span><i className="far fa-paper-plane"></i></span>
        </button>
    </div>
  )
}
