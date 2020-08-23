import React from 'react';
import { makeStyles, AppBar, Toolbar, Box, Button, IconButton, Typography } from '@material-ui/core';
import Flag from 'react-world-flags'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";
import logo from '../assets/logo2.png'; 

const useTopBarStyles = makeStyles({
  TopBar: {
    position: 'static',
  },
  ToolbarButtons: {
    marginLeft: 'auto',
  },
  CountryIcon: {
    padding: 1,
  },
});

function TopBar({ children, fullWidth = false }) {
  const classes = useTopBarStyles();
  const history = useHistory();
  const onRedirectHome = () => history.push("/");
  return (
    <AppBar className={classes.TopBar}>
      <Toolbar style={{ padding: 10 }}>
        <Box flexGrow={1}>
          <img src={logo} alt="Auto Auction" width={150} onClick={onRedirectHome} style={{cursor: 'pointer'}}/>
        </Box>
        <Box>
          <Typography style={{ display: 'inline', margin: '0 10px' }}>UAE</Typography>
          <IconButton className={classes.CountryIcon}><Flag code='AE' width="25" /></IconButton>
          <IconButton className={classes.CountryIcon}><Flag code='SA' width="25" /></IconButton>
          <IconButton className={classes.CountryIcon}><Flag code='BH' width="25" /></IconButton>
          <Button color="inherit" style={{ margin: '0 20px' }}>
            <Typography >English </Typography>
            <ArrowDropDownIcon />
          </Button>
          <Box>
            <Button color="inherit" startIcon={<PersonIcon />} >SIGN IN</Button>
            <Button color="default" variant="contained" className='yellow-button' style={{ margin: '0 20px', borderRadius: 25 }}>REGISTER NOW</Button>
          </Box>
        </Box>
      </Toolbar>
      {/* <Toolbar>
        <Box flexGrow={1}>
        </Box>
        <Box>
          <Button color="inherit" style={{ margin: '0 20px' }}>Login</Button>
        </Box>
      </Toolbar> */}
    </AppBar>
  );
}


export default TopBar;
