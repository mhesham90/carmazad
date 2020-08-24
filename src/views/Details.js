import React from 'react';
import { makeStyles, Toolbar, Typography, Grid, Card, Box, Link, List, ListItem, Button, IconButton } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TimerIcon from '@material-ui/icons/Timer';
import Carousel from 'react-material-ui-carousel'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CARS } from "../constants";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  warningBar: {
    background: '#fff1d2',
    padding: '0px 200px',
    alignItems: 'center',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.16)',
  },
  typography: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  card: {
    margin: theme.spacing(2),
  },
  grid: {
    padding: theme.spacing(1),
  },
  pulseIcon: {
    animation: '$pulse 3s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      color: '#02647A',
    },
    '50%': {
      color: '#FF4136',
    },
    '100%': {
      color: '#02647A',
    },
  },
}));


function Details() {
  const classes = useStyles();
  const history = useHistory();
  const onBack = () => history.push("/listing");
  let { id } = useParams();
  const car = CARS.find( car => car.lot == id)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  

  return (
    <Box style={{background:'#F1F1F8'}}>    
      <Toolbar variant="dense" className={classes.warningBar}>
        <WarningIcon color="error"/>
        <Typography className={classes.typography} style={{ display:"inline" }}>
          You need to place a <b>Security Deposit</b> to start bidding
        </Typography>
        <Button color="default" variant="contained" className='yellow-button' style={{ borderRadius: 25 }}>Add Deposit</Button>          
      </Toolbar>
      <Box display='flex' style={{justifyContent: 'flex-end', padding: '0px 200px'}}>      
          <Button variant="text" startIcon={<FavoriteBorderIcon />} >Add to Watchlist</Button>
      </Box>
      <Toolbar variant="dense" disableGutters style={{ padding: '0px 200px', alignItems: 'center' }}>
        <IconButton aria-label="back" onClick={onBack}>
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
        <Typography className={classes.typography} style={{ display:"inline" }}>
          {car.description}
        </Typography>
        <Typography style={{ display:"inline" }}>
          Dubai | #{car.lot}
        </Typography>
      </Toolbar>
      <Box style={{ padding: '10px 200px' }}>
        <Grid container>
          <Grid item xs={6} className={classes.grid}>
            <Carousel
              autoPlay={false}
              animation='slide'
              indicators={true}
              navButtonsAlwaysVisible={true}
            >
              {car.imgs.map( (img, index) => (
                <img key={index} src={img.original} alt='no pics available' width="100%" height="100%"/>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <Card style={{padding: 25}}>
              <Typography variant="h5">
                Bid Information
              </Typography>
              <Grid container>
                <Grid item xs={8}>
                  <List>
                    <ListItem style={{ padding: 0 }}>
                      <Typography style={{color:"#616161"}}>Bid Status: </Typography>
                      <Typography>
                        &nbsp; {car.bidStatus}
                      </Typography>
                    </ListItem>
                    <ListItem style={{ padding: 0 }}>
                      <Typography style={{color:"#616161"}}>Current Bid: </Typography>
                      <Typography>
                        &nbsp; <b>{(car.currentBid > 500 ? (car.currentBid * 3) : Math.random() * (40000 - 10000) + 10000).toLocaleString(undefined, {maximumFractionDigits:0})}</b> AED
                      </Typography>
                    </ListItem>
                    <ListItem style={{ padding: 0 }}>
                      <Button variant="contained" onClick={handleClickOpen} color="primary">BID NOW</Button>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <TimerIcon className={classes.pulseIcon} fontSize="large"/>
                    <Typography className={classes.pulseIcon}>Time Left</Typography>
                    <Typography>{car.timeLeft.h}h : {car.timeLeft.m}m</Typography>
                </Grid>
              </Grid>
            </Card>
            <Card style={{padding: 25, marginTop: 20}}>
              <Typography variant="h5">
                Vehicle Details
              </Typography>
              <List>
                <ListItem style={{ padding: 0 }}>
                  <Typography style={{color:"#616161"}}>Make: </Typography>
                  <Typography>
                    &nbsp; {car.make}
                  </Typography>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <Typography style={{color:"#616161"}}>Model: </Typography>
                  <Typography>
                    &nbsp; {car.model}
                  </Typography>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <Typography style={{color:"#616161"}}>year: </Typography>
                  <Typography>
                    &nbsp; {car.year}
                  </Typography>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <Typography style={{color:"#616161"}}>Kilometers: </Typography>
                  <Typography>
                    &nbsp; {(car.odometer/2 || 50000).toLocaleString(undefined, {maximumFractionDigits:0})}
                  </Typography>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <Typography style={{color:"#616161"}}>Engine: </Typography>
                  <Typography>
                    &nbsp; {car.description.slice(car.description.length - 4)}
                  </Typography>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <Link>Download Full Inspection Report</Link>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Place your Bid</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To place your bid for this car, please enter the amount. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Place Bid
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Box>
  )
}

export default Details;