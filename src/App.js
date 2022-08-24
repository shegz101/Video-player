import * as React from 'react';
import {useState, useRef} from 'react';
import ReactPlayer from 'react-player';
import Container from '@mui/material/Container';
import './App.css';
import ControlIcons from './Components/ControlIcons';

function App() {
  const [playerstate, setPlayerState] = useState({
    playing: true,
    muted: true,
    volume: 0.5
  })
  //Destructure State in other to get the values in it
  const { playing, muted, volume } = playerstate;
  const playerRef = useRef(null);

  //This function handles play and pause onchange button
  const handlePlayAndPause = () => {
    setPlayerState({...playerstate, playing: !playerstate.playing})
  }

  const handleMuting = () => {
    setPlayerState({...playerstate, muted: !playerstate.muted})
  }

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
  }

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 30)
  }

  const handleVolumeChange = (e, newValue) => {
    setPlayerState({...playerstate, volume:parseFloat(newValue/100), muted:newValue === 0 ? true : false, });
  }

  const handleVolumeSeek = (e, newValue) => {
    setPlayerState({...playerstate, volume:parseFloat(newValue/100), muted:newValue === 0 ? true : false, });
  }
  return (
    <>
      <header className='header__section'>
        <p className='header__text'>Build a Video Player - Tutorial</p>
      </header>
      <Container maxWidth="md">
        <div className='playerDiv'>
          <ReactPlayer width={'100%'} height='100%'
          ref={playerRef} 
          url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' 
          playing={playing}
          volume={volume} 
          muted={muted}/>
          <ControlIcons
           playandpause={handlePlayAndPause}
           playing={playing}
           rewind={handleRewind}
           fastForward={handleFastForward}
           muting={handleMuting}
           muted={muted}
           volumeChange={handleVolumeChange}
           volumeSeek={handleVolumeSeek}
           volume={volume}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
