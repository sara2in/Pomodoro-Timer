import { useState } from 'react';
import Arnold from '../images/Arnold.jpg';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Strong() {
    const [pushups, setPushups] = useState('')
    const [toggleCountdownBox, settoggleCountdownBox] = useState(false)

    function handleChange(e) {

        setPushups(e.target.value)
    }

    function handleClick() {
        settoggleCountdownBox(!toggleCountdownBox)
    }

    return (
        <div style={{ padding: "1rem 0" }}>
            <img src={Arnold} alt="Arnold" />
            {
                toggleCountdownBox?
                    <Box>
                        <div>Pushups Left: {pushups}</div>
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
                        <TextField
                            data-testid="pushups"
                            variant="outlined"
                            // type="number"
                            // required
                            onChange={(e) => { handleChange(e) }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            //  className={classes.submit}
                            onClick={handleClick}
                        >
                            Submit Pushups
                        </Button>
                    </Box>
            }
        </div>
    )
}