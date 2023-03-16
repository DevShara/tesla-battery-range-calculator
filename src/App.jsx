import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import TeslaBattery from "./components/TeslaBattery";

const App = () => {
  return (
    <>
      <Header/>
      <TeslaBattery />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
