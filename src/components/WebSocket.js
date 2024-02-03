import React, { useEffect } from 'react'

export const WebSocket = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws');

    socket.addEventListener('open', (event) => {
      console.log('Conexión establecida:', event);
    });
    
    socket.addEventListener('message', (event) => {
      console.log('Mensaje recibido:', event.data);
    });

    socket.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <p>Hola</p>
    </div>
  )
}
