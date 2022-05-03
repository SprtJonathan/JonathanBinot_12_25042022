import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import "./pages/index.css";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Aside />
    <Dashboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
