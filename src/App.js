import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  return (
    <ThemeProvider theme={getTheme()}>
      <Router basename={process.env.PUBLIC_URL}>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listing" component={Listing} />
          <Route path="/details/:id" component={Details} />
          <Route path="/sellcar" component={SellCar} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
