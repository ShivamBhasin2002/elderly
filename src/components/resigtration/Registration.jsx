import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography, MenuItem, Button } from '@mui/material';
import "./Registration.css"

const Registration = () => {
    const paperStyle = { padding: '30px 20px', width: 400, margin: '20px 0px 0px 950px' };
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: '30px' }
    const marginTextField = { marginTop: '15px' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Register</h2>
                    <Typography variant='caption'>Please fill this form to create an account !</Typography>
                </Grid>

                <form style={marginTop}>
                    <TextField fullWidth variant='standard' label='Name' placeholder='First Name' required />
                    <TextField fullWidth variant='standard' label='Middle Name' placeholder='Middle Name' style={marginTextField} required />
                    <TextField fullWidth variant='standard' label='Last Name' placeholder='Last Name' style={marginTextField} required />
                    <div className='datePicker'>
                        <p>DOB:</p>
                        <input type="date" name="date" id="datePicker" placeholder='Last Name' required />
                    </div>
                    <TextField fullWidth variant='standard' label='Address' placeholder='Address' required />
                    <TextField fullWidth variant='standard' label='City' placeholder='City' style={marginTextField} required />
                    <TextField fullWidth variant='standard' label='Country' placeholder='Country' style={marginTextField} required />
                    <div className='reg_btn'>
                        <Button variant="contained" type="submit">Register</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    )
}

export default Registration;