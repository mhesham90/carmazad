import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/carmazad" element={<Home />} />
          <Route path="/carmazad/listing" element={<Listing />} />
          <Route path="/carmazad/details" element={<Details />} />
          <Route path="/carmazad/sellcar" element={<SellCar />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
