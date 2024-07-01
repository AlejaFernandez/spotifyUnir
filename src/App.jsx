import React, { useContext, useState } from 'react';
import Siderbar from './components/Siderbar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';
import WelcomeComponent from './components/WelcomeComponent';
import Modal from './components/Modal';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [isModalOpen, setIsModalOpen] = useState(true); // Inicialmente abierto
  const username = "Usuario";

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='h-screen bg-black'>
    <div className='h-[90%] flex'>
        <Siderbar />
          <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <WelcomeComponent username={username} />
      </Modal>
    </div>
  );
}

export default App;
