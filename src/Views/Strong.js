import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Arnold from '../assets/Arnold.jpg';
import arnoldIcon from '../assets/arnoldIcon.png'
import Choppa from '../assets/choppa.mp3'
import BeBack from '../assets/ill-be-back.mp3'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Strong() {
    const [pushups, setPushups] = useState(0)
    const [HMS, setHMS] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [toggleCountdownBox, settoggleCountdownBox] = useState(false)
    const [quote, setQuote] = useState('')
    const [reps, setReps] = useState(0)
    const [open, setOpen] = useState(false);
    let [seconds, setSeconds] = useState(0)


    const handleOpen = () => {
        fetchQuote()
        setOpen(true)
        new Audio(Choppa).play()
    }
    const handleClose = () => {
        if(pushups !== 0) {setPushups(pushups - reps)}
        setOpen(false)
    }

    function handlePass() {
        setOpen(false)
        new Audio(BeBack).play()
    }

    function handlePushupChange(event) {
        setPushups(event.target.value)
    }

    function handleHMSChange(event) {
        let a = event.target.value.split(':'); // split it at the colons
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        let secondsFromHMS = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        pushupMath(a[0])
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



    function fetchQuote() {
        fetch("https://api.quotable.io/search/quotes?query=determination",)
            .then((response) => response.json())
            .then((data) => {

                let randomIndex = Math.floor(Math.random() * 8) + 1;
                setQuote(data.results[randomIndex].content)
            })
            .catch((err) => {
                // setError("No Products Found");
            });
    }

    function pushupMath(hours) {
        let reps = Math.floor(pushups / hours)
        setReps(reps)
    }

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
            // if ((minutes == 59) && (seconds == 55)) { handleOpen() }
            if ((hours == 0) && (minutes == 0) && (seconds == 0)) { toggleTimer() }
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
        <Container sx={{ marginTop: 0, justifyContent: 'center', padding: '10px' }}>
            <Box className="center-flex">
                <a href="/">
                    <img src={arnoldIcon} width='30%' />
                </a>
                <h1>Get to the ground, now!</h1>
            </Box>
            <img src={Arnold} alt="Arnold" width='100%' />
            {
                toggleCountdownBox ?
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <h2>Pushups Left: {pushups} | Time Left: {HMS}</h2>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography sx={{ margin: '5px'}} id="modal-modal-title" variant="h6" component="h2">
                                    Drop down and give me {reps}!
                                </Typography>
                                <Typography sx={{ margin: '5px'}} id="modal-modal-description" >
                                    {quote}
                                </Typography>
                                <Button
                                    sx={{ margin: '5px'}}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handlePass}
                                >
                                    Pass
                                </Button>
                                <Button
                                    sx={{ margin: '5px'}}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClose}
                                >
                                    Done!
                                </Button>
                            </Box>
                        </Modal>
                    </Box>
                    :
                    <>
                        <Box
                            component="form"
                            className="center-flex"
                            noValidate
                            autoComplete="off"
                        >
                            <h3>What is your push-up goal today?</h3>
                            <TextField
                                className="inputs"
                                data-testid="pushups"
                                variant="outlined"
                                onChange={handlePushupChange}
                                size="small"
                            />
                            <h3>How long are you working for?</h3>
                            <FormControl className="inputs">
                                <InputLabel>Hours</InputLabel>
                                <Select
                                    size="small"
                                    onChange={handleHMSChange}
                                    label="Hours"
                                >
                                    <MenuItem value={'01:00:00'}>1</MenuItem>
                                    <MenuItem value={'02:00:00'}>2</MenuItem>
                                    <MenuItem value={'03:00:00'}>3</MenuItem>
                                    <MenuItem value={'04:00:00'}>4</MenuItem>
                                    <MenuItem value={'05:00:00'}>5</MenuItem>
                                    <MenuItem value={'06:00:00'}>6</MenuItem>
                                    <MenuItem value={'07:00:00'}>7</MenuItem>
                                    <MenuItem value={'08:00:00'}>8</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box className="center-flex">
                            <Button
                                sx={{ width: '50%' }}
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                Submit
                            </Button>
                        </Box>
                    </>

            }
        </Container>
    )
}