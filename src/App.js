import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import theme from "./styles/theme";

import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import BodyList from "./components/User/BodyHomePage/BodyList-HomePage";

import Footer from "./layout/Footer";
import TourList from "./components/User/TourProduct/tourList";
import DetailsPage from "./components/User/DetailsPage";
import SearchList from "./components/User/SearchForm/searchList";
import Payments from "./components/User/Payments";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<BodyList />}></Route>
          <Route path="/product" element={<TourList />}></Route>
          <Route path="/searchlist" element={<SearchList />}></Route>
          <Route path="/cart" element={<DetailsPage />}></Route>
          <Route path="/payments" element={<Payments />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
