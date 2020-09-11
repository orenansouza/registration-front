import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./utils/globalStyles";
import Pages from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Pages />
  </React.StrictMode>,
  document.getElementById("root")
);
