import React, {useState, useEffect} from 'react'
import {Body} from './body'

const App = () => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const newSocket = new WebSocket(
      // 'ws://192.168.1.104:8000',
      'wss://afternoon-island-43499-10cea7ad17e2.herokuapp.com/',
    )
    newSocket.onopen = () => {
      console.log('Connected to WebSocket')
    }
    setSocket(newSocket)
  }, [])

  return <div>{socket && <Body newSocket={socket} />}</div>
}

export default App
