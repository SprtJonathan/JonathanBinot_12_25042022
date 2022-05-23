import React from "react";
import ReactDOM from "react-dom/client";
/* Importing the Homepage and Header components. */
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
/* Importing the Aside component. */
import Aside from "./components/Aside/Aside";
import "./pages/index.css";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Aside />
    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
