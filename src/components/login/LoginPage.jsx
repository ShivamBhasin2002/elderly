import React from 'react'
import './loginPage.css'
import { Grid, Paper, TextField, Typography, MenuItem, Button, FormControlLabel, Link } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik';
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
const LoginPage = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '70vh', width: 400, margin: '5px auto' }
    const btnStyle = { margin: '25px 0' }
    const marginTextField = { marginTop: '15px' }
    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2>login</h2>
                </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <TextField label='Username ' name='Username' placeholder='Enter Username' type='email' style={marginTextField} fullWidth required onChange={formik.handleChange} value={formik.values.Username} />
                    <TextField label='Password' name='Password' placeholder='Enter Password' type='password' style={marginTextField} fullWidth required onChange={formik.handleChange} value={formik.values.Password}/>
                    <Checkbox label='Remember me' defaultChecked required /> Remember Me
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
                </form>
            </Paper>
        </Grid>
    )
}

export default LoginPage;
