import './SignInOutcontainer.css'
import Registration from '../../components/resigtration/Registration'
import { TabPanel } from '@mui/lab'
import { Paper, Tab, Tabs, Box, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import LoginPage from '../../components/login/LoginPage';

const SignInOutConatiner = () => {
    const [value,setValue] = useState(0)
    const handleChange = (event,newValue) => {
        setValue(newValue);
    };
    const paperStyle={width:445, margin:"5px 0px 0px 980px"}
    const tabChange = {margin: '0px 0px 0px 125px', padding: '0px'}
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
  return (
    <div>
      <Paper style={paperStyle}>
        <Tabs value={value} indicatorColor="primary" textColor='primary' onChange={handleChange} arial-label="disabled tabs example">
            <Tab label="Login" style={tabChange}/>
            <Tab label="Resiter" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <LoginPage handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Registration />
        </TabPanel>
      </Paper>
    </div>
  )
}

export default SignInOutConatiner
