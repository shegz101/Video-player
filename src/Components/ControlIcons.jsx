import React from 'react';
import './ControlIcons.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { FastRewind } from '@mui/icons-material';
import { FastForwardSharp } from '@mui/icons-material';
import { PlayArrowSharp } from '@mui/icons-material';
import { PauseSharp } from '@mui/icons-material';
import { VolumeUp } from '@mui/icons-material';
import { Fullscreen } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';

const ControlIcons = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopOver = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'playbackrate-popover' : undefined;

    function ValueLabelComponent (props) {
        const { children, open, value } = props;
        return (
        <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
            {children}
        </Tooltip>
        )
    }

    const PrettoSlider = styled(Slider)({
        height: 8,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#52af77',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&:before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },
    });
    return (
        <div className="controls__div">
            {/*Top Controls */}
            <Grid container direction='row' alignItems='center' justify='' style={{padding:'16',}}>
              <Grid item>
                <Typography variant='h5' style={{color:'white'}}>Tears Of Steel</Typography>
              </Grid>
            </Grid>

            {/*Middle Controls */}
            <Grid container direction='row' alignItems='center' justify='center'>
              <IconButton className='controls__icons' aria-label='reqind'>
                <FastRewind fontSize='inherit'/>
              </IconButton>

              <IconButton className='controls__icons' aria-label='reqind'>
                <PlayArrowSharp fontSize='inherit'/>
              </IconButton>

              <IconButton className='controls__icons' aria-label='reqind'>
                <FastForwardSharp fontSize='inherit'/>
              </IconButton>
            </Grid>

            {/*Bottom Controls*/}
            <Grid container direction='row' alignItems='center' justify='space-between' style={{padding:'16',}}>
              <Grid item Xs={12}>
                <PrettoSlider min={0} max={100} defaultValue={20} ValueLabelComponent={ValueLabelComponent}/>
              </Grid>

              <Grid item>
                <Grid container alignItems='center' direction='row'>
                  <IconButton className='bottom__icons'>
                    <PauseSharp fontSize='large'/>
                  </IconButton>

                  <IconButton className='bottom__icons'>
                    <VolumeUp fontSize='large'/>
                  </IconButton>

                  <Slider min={0} max={100} defaultValue={100} className='volume__slider'/>

                  <Button variant='text' style={{color:'white', marginLeft:'16',}}>
                    <Typography>05:05</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid item>
                <Button variant='text'onClick={handlePopOver} className='bottom__icons'>
                  <Typography>1X</Typography>
                </Button>
                
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Grid container direction='column-reverse'>
                    {
                      [0.5,1,1.5,2].map((rate) => (
                        <Button variant='text'>
                          <Typography color='secondary'>{rate}</Typography>
                        </Button>
                      ))
                    }
                  </Grid>
                  
                </Popover>
                <IconButton className='bottom__icons'>
                  <Fullscreen fontSize='large'/>
                </IconButton>
              </Grid>
            </Grid>
        </div>
    )
}

export default ControlIcons;