import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import TopBar from "./views/TopBar";
import { getTheme } from './styles/theme';
import { useGlobalStyles } from './styles/globalStyles';
import Home from "./views/Home";
import Listing from "./views/Listing";
import Details from "./views/Details";
import SellCar from "./views/SellCar";

function App() {
  useGlobalStyles();
  console.log(process.env.PUBLIC_URL)
  return (
    <ThemeProvider theme={getTheme()}>
      <Router basename={process.env.PUBLIC_URL}>
        <TopBar />
          <Route exact path="/" component={Home} />
          <Route path="/listing" component={Listing} />
          <Route path="/details" component={Details} />
          <Route path="/sellcar" component={SellCar} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
