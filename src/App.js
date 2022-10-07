import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";
import theme from "./styles/theme";

import HomePage from "./layout/HomePage";
import ListPage from "./layout/ListPage";
import CommentList from "./components/User/CommentClient/commentList";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomePage />
        {/* <ListPage/> */}
        <CommentList/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
