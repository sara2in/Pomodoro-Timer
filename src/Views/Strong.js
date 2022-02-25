import * as React from 'react';
import { useState, useEffect } from 'react';
import Arnold from '../assets/Arnold.jpg';
import Choppa from '../assets/choppa.mp3'
import BeBack from '../assets/ill-be-back.mp3'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Strong() {
    const [pushups, setPushups] = useState(0)
    const [HMS, setHMS] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [toggleCountdownBox, settoggleCountdownBox] = useState(false)
    const [audio, setAudio] = useState(new Audio(Choppa))
    const [isPlaying, setIsPlaying] = useState(false)
    const [quote, setQuote] = useState('')
    const [reps, setReps] = useState(0)
    const [open, setOpen] = useState(false);
    let [seconds, setSeconds] = useState(0)


    const handleOpen = () => {
        fetchQuote()
        setAudio(new Audio(Choppa))
        setOpen(true)
        playPause()
    }
    const handleClose = () => {
        setPushups(pushups-reps)
        setAudio(new Audio(BeBack))   
        setOpen(false)
        playPause()
    }

    function handlePushupChange(event) {
        setPushups(event.target.value)
    }

    function handleHMSChange(event) {
        let a = event.target.value.split(':'); // split it at the colons
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        console.log(a[2])
        let secondsFromHMS = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        pushMath(a[0])
        setSeconds(secondsFromHMS)
    }

    function handleClick() {
        settoggleCountdownBox(!toggleCountdownBox)
        toggleTimer()
    }

    function toggleTimer() {
        setIsActive(!isActive);
    }

    function resetTimer() {
        setSeconds(0);
        setIsActive(false);
    }

    

    function fetchQuote () { 
        fetch(`https://type.fit/api/quotes`)
        .then((response) => response.json())
        .then((data) => {
            let randomIndex = Math.floor(Math.random() * 1641) + 1;
            setQuote(data[randomIndex].text)
        })
        .catch((err) => {
          // setError("No Products Found");
        });
    }
  
    function pushMath (hours) {
        setReps(pushups/hours)
    }

    const playPause = () => {
        
        // Get state of song 
        if (isPlaying) { audio.pause() } else {audio.play() }
        setIsPlaying(!isPlaying);
      };

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);

            let hours = Math.floor(seconds / 3600); // get hours
            let minutes = Math.floor((seconds - (hours * 3600)) / 60); // get minutes           
            seconds = seconds - (hours * 3600) - (minutes * 60); //  get seconds
            // add 0 if value < 10; Example: 2 => 02
            if (hours < 10) { hours = "0" + hours; }
            if (minutes < 10) { minutes = "0" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }
            if ((minutes == 0) && (seconds == 0)) { handleOpen() }
            setHMS(hours + ':' + minutes + ':' + seconds) // Return is HH : MM : SS
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Container sx={{ marginTop: 0, justifyContent: 'center' }}>
            <h1>Get to the ground, now!</h1>
            <img src={Arnold} alt="Arnold" width='100%' />
            {
                toggleCountdownBox ?
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <h2>Pushups Left: {pushups} | Time Left: {HMS}</h2>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Drop down and give me {reps}!
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {quote}
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                    :
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h3>What is your push-up goal today?</h3>
                        <TextField
                            data-testid="pushups"
                            variant="outlined"
                            // type="number"
                            // required
                            onChange={handlePushupChange}
                            size="small"
                        />
                        <h3>How long are you working for?</h3>
                        <p>*Type time in for format HH:MM:SS</p>
                        <TextField
                            data-testid="time"
                            variant="outlined"
                            // type="number"
                            // required
                            onChange={handleHMSChange}
                            size="small"
                        />
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            //  className={classes.submit}
                            onClick={handleClick}
                        >
                            Submit
                        </Button>
                    </Box>
            }
        </Container>
    )
}