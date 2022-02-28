import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Relax from '../assets/relax.mp3'
import ArnoldSmart from '../assets/smart-arnold.jpeg';
import arnoldIcon from '../assets/arnoldIcon.png'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function Strong() {
    const [HMS, setHMS] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [toggleCountdownBox, settoggleCountdownBox] = useState(false)
    const [quote, setQuote] = useState('')
    const [open, setOpen] = useState(false);
    let [seconds, setSeconds] = useState(0)


    const handleOpen = () => {
        setSeconds(17*60)
        // setSeconds(4)
        new Audio(Relax).play()
        fetchQuote()
        setOpen(true)
    }
    const handleClose = () => {
        setSeconds(52*60)
        // setSeconds(5)
        setOpen(false)
    }

    function handleClick() {
        setSeconds(52*60)
        // setSeconds(5)
        settoggleCountdownBox(!toggleCountdownBox)
        toggleTimer()
    }

    function toggleTimer() {
        setIsActive(!isActive);
    }

    function fetchQuote() {
        fetch(`https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`)
            .then((response) => response.json())
            .then((data) => {
                // let randomIndex = Math.floor(Math.random() * 1641) + 1;
                setQuote(data.joke)
            })
            .catch((err) => {
                // setError("No Products Found");
            });
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
            if ((minutes == 0) && (seconds == 0) && (!open)) { handleOpen() }
            if ((hours == 0) && (minutes == 0) && (seconds == 0) && (open)) { toggleTimer() }
            setHMS(minutes + ':' + seconds) // Return is HH : MM : SS
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds])

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
                <h1>Time to get serious.</h1>
            </Box>
            <img src={ArnoldSmart} alt="Arnold-Cigar" width='100%' />
            {
                toggleCountdownBox ?
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <h2>Time Until Break: {HMS}</h2>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography sx={{ margin: '5px'}} id="modal-modal-title" variant="h6" component="h2">
                                    You have {HMS} to spend with family, pets, loved ones, etc...
                                </Typography>
                                <Typography sx={{ margin: '5px'}} id="modal-modal-description">
                                    {quote}
                                </Typography>
                                <Button
                                    fullWidth
                                    sx={{ margin: '5px'}}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClose}
                                >
                                    Keep Working
                                </Button>
                            </Box>
                        </Modal>
                    </Box>
                    :
                    <Box
                        className="center-flex"
                        noValidate
                        autoComplete="off"
                    >
                        <Button
                            sx={{ width: '50%' }}
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                        >
                            Start
                        </Button>
                    </Box>

            }
        </Container>
    )
}

