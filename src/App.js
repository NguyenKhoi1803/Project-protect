import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import theme from "./styles/theme";

import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import BodyList from "./components/User/BodyHomePage/BodyList-HomePage";

import Footer from "./layout/Footer";

import DetailsPage from "./components/User/DetailsPage";
import SearchList from "./components/User/SearchForm/searchList";
import Payments from "./components/User/Payments";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import SucceedPage from "./layout/SucceedPage";
import TourList from "./components/User/TourProduct/tourList";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<BodyList />}></Route>
          <Route path="/product" element={<TourList />}></Route>
          <Route path="/searchList/:id" element={<SearchList />}></Route>
          <Route path="/products/:id" element={<DetailsPage />}></Route>
          <Route path="/products/cart/:id" element={<Payments />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/succeed/:id" element={<SucceedPage />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
