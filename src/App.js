import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import theme from "./styles/theme";

import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import BodyList from "./components/User/BodyHomePage/BodyList-HomePage";
import TourList from "./components/User/tourList";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<BodyList />}></Route>
          <Route path="/product" element={<TourList />}></Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
