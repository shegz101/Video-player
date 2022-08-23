import * as React from 'react';
import ReactPlayer from 'react-player';
import Container from '@mui/material/Container';
import './App.css';
import ControlIcons from './Components/ControlIcons';

function App() {
  return (
    <div>
      <header className='header__section'>
        <p className='header__text'>Build a Video Player - Tutorial</p>
      </header>
      <Container maxWidth="md">
        <div className='playerDiv'>
          <ReactPlayer width={'100%'} height={'100%'} url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' playing={true} muted={true}/>
          <ControlIcons/>
        </div>
      </Container>
    </div>
  );
}

export default App;
