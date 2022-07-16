// eslint-disable
import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography, MenuItem, Button } from '@mui/material';
import "./Registration.css"
// import { useNavigate} from 'react-router-dom';
const Registration = () => {

   
    const paperStyle = { padding: '30px 20px', width: 400 };
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: '30px' }
    const marginTextField = { marginTop: '15px' }

    // const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", country: "", city: "", password:"", conform_password: ""
    });
    let name, value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, country, city, password, confirm_password} = user;
        const res = await fetch("user/register", {
            method: "POST",
            headers:{
               "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, country, city, password, confirm_password
            })
        });

        const data = await res.json();

        if(data.status === 201 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Successfull");
            console.log("Successfull Registration");

            // navigate("/login");
        }
    }
    return (
        <Grid>
                <Paper style={paperStyle} align='right'>
                    <Grid align='center'>
                        <div style={headerStyle}>Register</div>
                        <Typography variant='caption'>Please fill this form to create an account !</Typography>
                    </Grid>

                    <form method='POST' style={marginTop}>
                        <TextField fullWidth variant='standard' label='Name' name='name' value={user.name} onChange={handleInputs} placeholder='Name' />
                        <TextField fullWidth variant='standard' label='Email' name='email' value={user.email} onChange={handleInputs} placeholder='Email' type='email' style={marginTextField} />
                        <div className='place'>
                            <TextField variant='standard' label='Country' name='country' value={user.country} onChange={handleInputs} placeholder='Country' style={marginTextField}  />
                            <TextField variant='standard' label='City' name='city' value={user.city} onChange={handleInputs} placeholder='City' style={marginTextField} />
                        </div>
                        <TextField fullWidth variant='standard' label='Password' name='password' value={user.password} onChange={handleInputs} placeholder='Password' type='password' style={marginTextField}  />
                        <TextField fullWidth variant='standard' label='Conform Password' name='conform_password' value={user.confirm_password} onChange={handleInputs} placeholder='Conform Password' type='password' style={marginTextField}  />
                        <div className='reg_btn'>
                            <Button variant="contained" type="submit" onClick={PostData}>Register</Button>
                        </div>
                    </form>
                </Paper>
        </Grid>
    )
}

export default Registration;