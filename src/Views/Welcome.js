import {Link} from "react-router-dom";
import '../App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function Welcome () { 
    return (
        <div className="App">
        <h1>The Pomodoro Timer</h1>
        <h3>Are you feeling smart or strong today?</h3>
        <Box className="buttonWrapper">
          <Button className="button" variant="contained" startIcon={<FitnessCenterIcon />}>
            <Link className="link" to='/strong'> 
              Strong
            </Link>
          </Button>
          <Button className="button" variant="contained" startIcon={<LibraryBooksIcon />} >
            <Link className="link" to='/smart'>
              Smart
            </Link>
          </Button>
        </Box>
      </div>
    )
}