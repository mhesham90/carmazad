import React from 'react';
import { Typography, Container, FormControl, InputLabel, Select, MenuItem, TextField, Switch, FormControlLabel, Button, Box } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: 20
  },
  formHeading: {
    marginBottom: 20
  },
  formControl: {
    marginBottom: 10
  },
  switch: {
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginLeft: 0
  },
  inputfile: {
    display: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
});

function SellCar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.formHeading} variant="h4" component="h4">
          Vehicle Valuation Form
      </Typography>
        <FormControl fullWidth="true" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2018}>2017</MenuItem>
            <MenuItem value={2018}>2016</MenuItem>
            <MenuItem value={2018}>2015</MenuItem>
            <MenuItem value={2018}>2014</MenuItem>
            <MenuItem value={2018}>2013</MenuItem>
            <MenuItem value={2018}>2012</MenuItem>
            <MenuItem value={2018}>2011</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Make</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={2020}>Toyota</MenuItem>
            <MenuItem value={2019}>Mitsubishi</MenuItem>
            <MenuItem value={2018}>Honda</MenuItem>
            <MenuItem value={2018}>Lexus</MenuItem>
            <MenuItem value={2018}>Kia</MenuItem>
            <MenuItem value={2018}>Hyundai</MenuItem>
            <MenuItem value={2018}>Ford</MenuItem>
            <MenuItem value={2018}>GMC</MenuItem>
            <MenuItem value={2018}>Jaguar</MenuItem>
            <MenuItem value={2018}>Infinity</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={2020}>Corolla</MenuItem>
            <MenuItem value={2019}>Camry</MenuItem>
            <MenuItem value={2018}>Avalon</MenuItem>
            <MenuItem value={2018}>Yaris</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <TextField id="standard-required" label="Mileage" />
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Engine Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={2020}>4 Cylinder</MenuItem>
            <MenuItem value={2019}>6 Cylinder</MenuItem>
            <MenuItem value={2018}>8 Cylinder</MenuItem>
            <MenuItem value={2018}>10 Cylinder</MenuItem>
            <MenuItem value={2018}>12 Cylinder</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Option</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={2020}>Basic Option</MenuItem>
            <MenuItem value={2019}>Mid Option</MenuItem>
            <MenuItem value={2018}>Full Option</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Paint</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={2020}>Original Paint</MenuItem>
            <MenuItem value={2019}>Partially Repainted</MenuItem>
            <MenuItem value={2018}>Totally Repainted</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel className={classes.switch}
          value=""
          control={<Switch color="primary" />}
          label="GCC Specs?"
          labelPlacement="start"
        />

        <FormControl fullWidth="true" className={classes.formControl}>
          <TextField
            label="Any other remarks"
            multiline
            rows={5}
            rowsMax={5}
          />
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <TextField
            label="First Name"
          />
        </FormControl>


        <FormControl fullWidth="true" className={classes.formControl}>
          <TextField
            label="Last Name"
          />
        </FormControl>


        <FormControl fullWidth="true" className={classes.formControl}>
          <TextField
            label="Phone"
          />
        </FormControl>

        <FormControl fullWidth="true" className={classes.formControl}>
          <TextField
            label="Email"
          />
        </FormControl>

        <FormControl fullWidth="true" >
          <FormControlLabel className={classes.switch}
            value=""
            control={<Switch color="primary" />}
            label="Any Accidents?"
            labelPlacement="start"
          />
        </FormControl>
        <FormControl fullWidth="true" >
          <FormControlLabel fullWidth="true" className={classes.switch}
            value=""
            control={<Switch color="primary" />}
            label="Full Service History?"
            labelPlacement="start"
          />
        </FormControl>
        <FormControl fullWidth="true" className={classes.formControl}>
          <input
            accept="image/*"
            className={classes.inputfile}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}>
              Upload Images
            </Button>
          </label>
        </FormControl>

        <Box className={classes.buttonContainer}>
          <Button variant="contained" style={{ "margin-right": "10px" }} color="primary">Submit</Button>
          <Button variant="contained">Cancel</Button>
        </Box>
      </Container>
    </div >
  )
}

export default SellCar;