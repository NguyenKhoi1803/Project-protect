import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import theme from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "antd/dist/antd.min.css";

import Header from "./layout/User/Header";
import Footer from "./layout/User/Footer";
import AddTour from "./components/Admin/AddTour";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import BodyList from "./components/User/Pages/BodyHomePage/BodyList-HomePage";
import DetailsPage from "./components/User/Pages/DetailsPage/index";
import SucceedPage from "./components/User/Pages/SucceedPage/index";
import ChartPages from "./layout/Admin/chartPages";
import Payments from "./components/User/Pages/Payments";
import Search from "./components/User/SearchForm/Search";
import TourList from "./components/User/TourProduct/tourList";
import ScrollTop from "./components/ScrollTop";
import CheckOrder from "./components/User/Pages/CheckOrder";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/addtour" element={<AddTour />}></Route>
          <Route path="/admin" element={<ChartPages />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<BodyList />}></Route>
          <Route path="/checkOrder" element={<CheckOrder />}></Route>
          <Route path="/tour" element={<TourList />}></Route>
          <Route path="/tour/:id" element={<DetailsPage />}></Route>
          <Route
            path="/tour/payments/:id"
            element={<Payments />}
          ></Route>
          <Route
            path="/tour/payments/succeed/:id"
            element={<SucceedPage />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;



