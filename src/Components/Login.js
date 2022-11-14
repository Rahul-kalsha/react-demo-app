import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const login = () => {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <Box component="form"
            sx={{
              display: 'block', maxWidth: '450px', margin: 'auto', p: '10px',
              '& button': {p: '10px', width: '100%', mt: '10px'},
              '& .MuiTextField-root': { m: '5px 0px 10px 0px', width: '100%' },
            }} noValidate autoComplete="off">
            <TextField
              // error
              // id="outlined-error"
              label="Username"
              defaultValue=""
              helperText="Please enter your user name" />
            <TextField
              // error
              // id="outlined-error-helper-text"
              label="Password"
              defaultValue=""
              helperText="Please enter your password" />
            <Button variant="contained" endIcon={<LoginIcon />}>Login</Button>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default login
