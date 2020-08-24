import React from 'react';
import { makeStyles, Typography, Grid, Card, Box, Link, List, ListItem, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SaveIcon from '@material-ui/icons/Save';
import TuneIcon from '@material-ui/icons/Tune';
import SortIcon from '@material-ui/icons/Sort';
import Carousel from 'react-material-ui-carousel'
import { useHistory } from "react-router-dom";
import { CARS } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  card: {
    margin: theme.spacing(2),
  },
  box: {
    margin: theme.spacing(1),
  }
}));

function Listing() {
  const classes = useStyles();
  const history = useHistory();
  const onSearch = (lot) => history.push("details/"+lot);

  return (
    <Box style={{ padding: '10px 200px', background:'#F1F1F8' }}>
      <Box display='flex' style={{justifyContent: 'flex-end'}}>      
          <Button variant="text" startIcon={<SaveIcon />} style={{ marginLeft: '10px' }}>Save Search</Button>
          <Button variant="text" startIcon={<TuneIcon />} style={{ marginLeft: '10px' }}>Filters</Button>
          <Button variant="text" startIcon={<SortIcon />} style={{ marginLeft: '10px' }}>Sort</Button>
      </Box>
      <Box display='flex'>
        <Typography variant="h4" className={classes.typography} style={{ display:"inline" }}>
          Used Toyota Cars for Auction
        </Typography>
        <Typography style={{ display:"flex", alignItems: 'center', marginRight: '16px' }}>
          824 results found
        </Typography>
      </Box>
      <Grid container className={classes.root}>
        {CARS.map( car => (
          <Grid item key={car.lot} xs={4} onClick={() => { onSearch(car.lot)}} style={{cursor: 'pointer'}}>
            <Card className={classes.card}>
              <Carousel
                autoPlay={false}
                animation='slide'
                indicators={true}
                navButtonsAlwaysVisible={true}
              >
                {car.imgs.map( (img, index) => (
                  <img key={index} src={img.original} alt='no pics available' width="100%" height="290px"/>
                ))}
              </Carousel>
              <Box className={classes.box}>
                <Link style={{ display: 'flex' }}>
                  <Typography variant="h5" style={{ display: 'inline', flexGrow: '1' }}>
                    {car.year} {car.make} {car.model}
                  </Typography>
                  <FavoriteBorderIcon/>
                </Link>
              </Box>
              <Box className={classes.box} style={{ display: 'flex' }}>
                <Box flexGrow={1} style={{ display: 'flex' }}>
                  <List>
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
                      <Typography style={{color:"#616161"}}>Location: </Typography>
                      <Typography>
                        &nbsp; Dubai
                      </Typography>
                    </ListItem>
                  </List>
                </Box>              
                <Box className={classes.box} style={{ display: 'flex' }}>
                  <Button variant='text' className="bid-button" >
                    <Typography style={{fontSize: '12px'}}>CURRENT BID (AED) </Typography>
                    <Typography variant="h6">{(car.currentBid > 500 ? (car.currentBid * 3) : Math.random() * (40000 - 10000) + 10000).toLocaleString(undefined, {maximumFractionDigits:0})}</Typography>
                  </Button>
                </Box>   
              </Box>              
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Listing;