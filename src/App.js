import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import store from "./store";
import theme from "./styles/theme";
import Header from "./layout/Header";
import TourItem from "../src/components/User/tourItem/index";
import TourList from "./components/User/tourList";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <LayoutAdmin /> */}
        {/* <CustomerManagement /> */}
        {/* <PaymentMethods /> */}
        {/* <AddTour /> */}
        {/* <TourList /> */}
        {/* <CartList /> */}
        <Header />
        {/* <TourItem /> */}
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
