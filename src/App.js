import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import theme from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";

import Header from "./layout/User/Header";
import Footer from "./layout/User/Footer";

import AddTour from "./components/Admin/AddTour";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

import BodyList from "./components/User/Pages/BodyHomePage/BodyList-HomePage";
import TourList from "./components/User/TourProduct/tourList";
import SearchList from "./components/User/SearchForm/searchList";
import DetailsPage from "./components/User/Pages/DetailsPage/index";
import BookingPages from "./components/User/Pages/BookingPages/index";
import SucceedPage from "./components/User/Pages/SucceedPage/index";
import ChartPages from "./layout/Admin/chartPages";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/addtour" element={<AddTour />}></Route>
          <Route path="/admin" element={<ChartPages />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<BodyList />}></Route>
          <Route path="/product" element={<TourList />}></Route>
          <Route path="/searchList/:id" element={<SearchList />}></Route>
          <Route path="/products/details/:id" element={<DetailsPage />}></Route>
          <Route
            path="/products/details/booking/:id"
            element={<BookingPages />}
          ></Route>
          <Route
            path="/products/details/booking/succeed/:id"
            element={<SucceedPage />}
          ></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
