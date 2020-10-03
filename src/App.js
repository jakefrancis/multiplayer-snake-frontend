import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu'
import roomService from './serviceWorker/rooms'

function App() {
  const [roomNumber, setRoomNumber] = useState(null)


  const createRoom = (event) => {
      roomService
        .getRoom()
        .then(room => {
          setRoomNumber(room)
        })

  }
  
  return (
    <div className="App">
      <MainMenu />
    </div>
  );
}

export default App;
