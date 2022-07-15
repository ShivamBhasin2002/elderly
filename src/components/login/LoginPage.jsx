import React from 'react'
import './loginPage.css'
import { Grid, Paper, TextField, Typography, MenuItem, Button, FormControlLabel, Link } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
const LoginPage = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '70vh', width: 400, margin: '5px auto' }
    const btnStyle = { margin: '25px 0' }
    const marginTextField = { marginTop: '15px' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2>login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' type='email' fullWidth required />
                <TextField label='Password' placeholder='Enter Password' type='password' style={marginTextField} fullWidth required />
                <Checkbox label='Remember me' defaultChecked /> Remember Me
                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Login</Button>
                <Typography id='typo'>
                    <Link href='#' id='link'>
                        Forgot Password ?
                    </Link>
                </Typography>
                <Typography id='typo'> Do you have an account ?
                    <Link href='#' onClick={() => handleChange('event', 1)} id='link'>
                        Register
                    </Link>
                </Typography>
                <div className='icons'>
                    <FcGoogle />
                    <FaFacebookF />
                    <FaInstagram />
                </div>
            </Paper>
        </Grid>
    )
}

export default LoginPage;
