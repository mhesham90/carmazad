import React, { useState } from "react";
import logo from "../assets/background.png";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const years = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020
];
const cars = {
  AUDI: ['ALL MODELS', "A3", "A4", "A6", "S4", "PASSAT"],
  BMW: ['ALL MODELS', "325I", "330I", "525I", "530I", "650CI"],
  Ford: ['ALL MODELS', "ESCAPE 4WD", "EXPLORER 2WD", "FOCUS  FWD", "FREESTYLE FWD", "MILAN"],
  HYUNDAI: ['ALL MODELS', "ACCENT", "ELANTRA", "SONATA", "TIBURON", "TUCSON"],
  TOYOTA: ['ALL MODELS', "CAMRY", "YARIS", "COROLLA", "MATRIX", "ECHO"],
  KIA: ['ALL MODELS', "AMANTI", "OPTIMA", "RIO", "SEDONA", "SORENTO", "SPORTAGE"],
  MAZDA: ['ALL MODELS', "MAZDA 3", "MAZDA 5", "MAZDA 6", "MPV", "MX-5"]
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  searchBtn: {
    position: "relative",
    top: 8,
    left: 10,
    height: 55,
    width: 150
  },
  wideInput: {
    minWidth: 220
  }
}));

var sectionStyle = {
  height: "960px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  backgroundImage: `url(${logo})`,
  marginTop: "-1px",
  color: "white",
};
var headerStyle = {
  marginTop: 0,
  paddingBottom: "30px",
  fontSize: "54px",
  lineHeight: "68px",
  fontWeight: 300,
  position: "relative",
  top: "100px",
  left: "450px",
  width: "50%"
};
var textStyle = {
  paddingBottom: "30px",

  fontSize: "34px",
  lineHeight: "68px",
  fontWeight: 300,
  position: "relative",
  top: "50px",
  left: "600px",
  width: "50%"
};
var filterContainerStyle = {
  width: 1000,
  height: 80,
  position: "relative",
  top: "25px",
  left: "320px",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: 30,
};

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const onSearch = () => history.push("listing");
  const [make, setMake] = useState(Object.keys(cars)[0]);
  const [model, setModel] = useState(cars[make][0]);
  const [fromYear, setFromYear] = useState(years[0]);
  const [toYear, setToYear] = useState(years[1]);

  return (
    <div style={sectionStyle}>
      <h1 style={headerStyle}> Get Your Car From Auto Auction</h1>
      <h3 style={textStyle}>Over 150,000 vehicles available</h3>
      <div style={filterContainerStyle}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="make-outlined-label">Make</InputLabel>
          <Select
            className={classes.wideInput}
            labelId="make-outlined-label"
            id="make-outlined"
            value={make}
            onChange={e => {
              setMake(e.target.value);
            }}
            label="make"
          >
            {Object.keys(cars).map(make => (
              <MenuItem value={make}>{make}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="model-outlined-label">model</InputLabel>
          <Select
            className={classes.wideInput}
            labelId="model-outlined-label"
            id="model-outlined"
            value={model}
            onChange={e => {
              setModel(e.target.value);
            }}
            label="model"
          >
            {cars[make].map(model => (
              <MenuItem value={model}>{model}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="fromYear-outlined-label">from year</InputLabel>
          <Select
            labelId="fromYear-outlined-label"
            id="fromYear-outlined"
            value={fromYear}
            onChange={e => {
              setFromYear(e.target.value);
            }}
            label="fromYear"
            className={classes.selected}
          >
            {years.map(year => (
              <MenuItem value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="toYear-label">to year</InputLabel>
          <Select
            labelId="toYear-label"
            id="toYear-outlined"
            value={toYear}
            onChange={e => {
              setToYear(e.target.value);
            }}
            label="toYear"
            className={classes.selected}
          >
            {years.map(year => (
              <MenuItem value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          className={classes.searchBtn}
          variant="contained"
          size="large"
          color="primary"
          onClick={onSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default Home;
