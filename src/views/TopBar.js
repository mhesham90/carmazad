import React, { useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
} from '@material-ui/core';
import Flag from 'react-world-flags'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PolicyIcon from '@material-ui/icons/Policy';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
  drawerPaper: {
    background: "#02647A",
    color: "#FFF"
  },
  orange: {
    color: "#FFF",
    backgroundColor: "#ff5722",
  },
});

function TopBar({ children, fullWidth = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useTopBarStyles();
  const history = useHistory();
  const onRedirectHome = () => {
    history.push("/");
    setMenuOpen(false);
  }
  const onRedirectSellCar = () => {
    history.push("/sellcar");
    setMenuOpen(false);
  }
  const onRedirectlist = () => {
    history.push("/listing");
    setMenuOpen(false);
  }

  let location = useLocation();


  return (
    <AppBar className={classes.TopBar}>
      <Toolbar style={{ padding: 10 }}>
        <Box flexGrow={1} style={{ display: 'flex' }}>
          <IconButton aria-label="menu" onClick={() => { setMenuOpen(true) }} style={{ marginRight: 15 }}>
            <MenuRoundedIcon fontSize="large" style={{ color: '#000000' }} />
          </IconButton>
          <Drawer anchor="left" open={menuOpen} onClose={() => { setMenuOpen(false) }} classes={{ paper: classes.drawerPaper }}>
            <List style={{ width: 250 }}>
              <ListItem button onClick={onRedirectHome}>
                <ListItemIcon style={{ color: 'inherit' }}><HomeIcon color="inherit" /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={onRedirectlist}>
                <ListItemIcon style={{ color: 'inherit' }}><GavelIcon color="inherit" /></ListItemIcon>
                <ListItemText primary="Live Auction" />
              </ListItem>
              <ListItem button onClick={onRedirectSellCar}>
                <ListItemIcon style={{ color: 'inherit' }}><AttachMoneyIcon color="inherit" /></ListItemIcon>
                <ListItemText primary="Sell Your Car" />
              </ListItem>
              <ListItem button>
                <ListItemIcon style={{ color: 'inherit' }}><PolicyIcon color="inherit" /></ListItemIcon>
                <ListItemText primary="Rules and Policies" />
              </ListItem>
              <ListItem button>
                <ListItemIcon style={{ color: 'inherit' }}><MailIcon color="inherit" /></ListItemIcon>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Drawer>
          <img src={logo} alt="Auto Auction" width={150} onClick={onRedirectHome} style={{ cursor: 'pointer' }} />
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
          {location.pathname === "/" ?
            <Box display="flex" justifyContent="flex-end">
              <Button color="inherit" startIcon={<PersonIcon />} >SIGN IN</Button>
              <Link to="/sellcar">
                <Button color="default" variant="contained" className='yellow-button' style={{ margin: '0 20px', borderRadius: 25 }}>SELL YOUR CAR</Button>
              </Link>
            </Box>
            :
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <IconButton color="inherit" aria-label="cart">
                <Badge badgeContent={4} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" aria-label="cart">
                <Badge badgeContent={1} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="user" style={{ marginRight: '20px' }}>
                <Avatar className={classes.orange}>H</Avatar>
              </IconButton>
            </Box>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}


export default TopBar;
