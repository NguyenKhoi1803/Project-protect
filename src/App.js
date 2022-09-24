import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

// import LayoutAdmin from "./components/LayoutAdmin";
import CustomerManagement from "./components/CustomerManagement";
// import PaymentMethods from "./components/PaymentMethods";
import AddTour from "./components/AddTour";
import GlobalStyle from "./styles/globalStyle";
import store from "./store";
import TourList from "./components/User/tourList";

import theme from "./styles/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <LayoutAdmin /> */}
        {/* <CustomerManagement /> */}
        {/* <PaymentMethods /> */}
        {/* <AddTour /> */}

        <TourList />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
