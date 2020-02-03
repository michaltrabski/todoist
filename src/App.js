import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
// import { Content } from "./components/layout/Content";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, []);

  return (
    <div className="App">
      ITAKA - CRM, raporty
      <div>
        <Header />
        <Sidebar />
      </div>
    </div>
  );
};
