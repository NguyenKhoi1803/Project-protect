import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import theme from "./styles/theme";

import HomePage from "./layout/HomePage";
import ListPage from "./layout/ListPage";
import CommentList from "./components/User/CommentClient/commentList";
import BodyDetailsPage from "./components/User/BodyDetailsPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <HomePage /> */}
        <ListPage />
        {/* <CommentList /> */}

        {/* <BodyDetailsPage /> */}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
