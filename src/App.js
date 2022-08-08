import * as React from 'react';
import Slider from '@mui/material/Slider';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div>
      <header className='header__section'>
        <p className="header__text">Build a Video Player - Tutorial</p>
      </header>
      <div className='container'>
        <ReactPlayer width='700px' height='400px' style={{marginLeft:'350px'}} url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' playing={true} muted={true}/>
        <div className="controls">
          <p style={{color:'white',}}>Tears of Steel</p>
          <Slider defaultValue={30} aria-label="Default" valueLabelDisplay="auto" />
        </div>
      </div>
    </div>
  );
}

export default App;
