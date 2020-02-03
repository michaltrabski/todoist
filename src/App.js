import React from "react";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
// import { Content } from "./components/layout/Content";
import logo from "./logo.svg";
import "./App.css";

export const App = () => (
  <div className="App">
    ITAKA - CRM, raporty
    <div>
      <Header />
      <Sidebar />
    </div>
  </div>
);
