import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import theme from "./styles/theme";

import ListPage from "./layout/ListPage";
import HomePage from "./layout/HomePage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomePage/>
        {/* <ListPage /> */}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
