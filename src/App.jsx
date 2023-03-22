import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import TeslaBattery from "./components/TeslaBattery";

const App = () => {
  const counterDefaultVal = {
    speed: {
      title: "Speed",
      unit: "mph",
      step: 5,
      min: 45,
      max: 70
    },
    temperature: {
      title: "Outside Temperature",
      unit: "°",
      step: 10,
      min: -10,
      max: 40
    }
  };
  return (
    <>
      <Header/>
      <TeslaBattery counterDefaultVal={counterDefaultVal} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
