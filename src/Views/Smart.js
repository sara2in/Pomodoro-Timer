// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import Arnold from '../assets/arnoldcigar.jpg';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// export default function Smart () {
//     const [joke,setJoke] = useState('')

//     function fetchJoke () { 
//         fetch(`https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
//         .then((response) => response.json())
//         .then((data) => {
           
//             setJoke(data.joke)
//         })
//         .catch((err) => {
//           // setError("No Products Found");
//         });
//     }
//     return (
//     <Container sx={{ marginTop: 20, alignContent: 'center' }}>
//     <h1>Get to the ground, now!</h1>
//     <img src={Arnold} alt="Arnold" width='100%' />
//     {
//         toggleCountdownBox ?
//             <Box>
//                 <h2>Pushups Left: {pushups}</h2>
//                 <h2>Time Left: {HMS}</h2>
//                 <Modal
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description"
//                 >
//                     <Box sx={style}>
//                         <Typography id="modal-modal-title" variant="h6" component="h2">
//                             Drop down and give me {reps}!
//                         </Typography>
//                         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                             {quote}
//                         </Typography>
//                     </Box>
//                 </Modal>
//             </Box>
//             :
//             <Box
//                 component="form"
//                 sx={{
//                     '& > :not(style)': { m: 1, width: '25ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <h3>What is your push-up goal today?</h3>
//                 <TextField
//                     data-testid="pushups"
//                     variant="outlined"
//                     // type="number"
//                     // required
//                     onChange={handlePushupChange}
//                     size="small"
//                 />
//                 <h3>How long are you working for?</h3>
//                 <p>*Type time in for format HH:MM:SS</p>
//                 <TextField
//                     data-testid="time"
//                     variant="outlined"
//                     // type="number"
//                     // required
//                     onChange={handleHMSChange}
//                     size="small"
//                 />
//                 <Button
//                     // type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     //  className={classes.submit}
//                     onClick={handleClick}
//                 >
//                     Submit
//                 </Button>
//             </Box>
//     }
// </Container>
// )
// }