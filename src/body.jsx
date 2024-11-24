import {useEffect, useState} from 'react'

export const Body = ({newSocket}) => {
  const [messages, setMessages] = useState([])

  const [leightOnOff, setLeightOnOff] = useState('on')

  useEffect(() => {
    newSocket.onmessage = (event) => {
      if (event.data === 'on') setLeightOnOff('on')
      if (event.data === 'off') setLeightOnOff('off')
    }
  }, [messages])

  const handleOpen = () => {
    newSocket.send('on')
  }
  const handleClose = () => {
    newSocket.send('off')
  }

  return (
    <div style={{margin: '50px 0 0 0'}}>
      <div
        onClick={() => handleLeight()}
        className="light"
        style={{
          cursor: 'pointer',
          backgroundColor: leightOnOff === 'on' ? 'yellow' : 'red',
        }}
      />
      <div className="btns">
        <button onClick={handleOpen}>Open</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}
