import React, { useState } from "react";
import Accordion from "./Accordion";
import "./index.css";

const arr = ["default", "single", "mulitple"];

export default function App() {
  const [active, setActive] = useState("");
  const [selected, setSelected] = useState(0);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="App">
      <h1 id="header">Accordion toggle</h1>
      <div id="select">
        <span>Accordion Type:&nbsp;&nbsp; </span>
        <select id="type" value={selected} onChange={handleChange}>
          {arr.map((item, itemIndex) => {
            return (
              <option key={itemIndex} value={itemIndex}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <Accordion
        select={arr[selected]}
        title="Title1"
        active={active}
        setActive={setActive}
      />
      <Accordion
        select={arr[selected]}
        title="Title2"
        active={active}
        setActive={setActive}
      />
      <Accordion
        select={arr[selected]}
        title="Title3"
        active={active}
        setActive={setActive}
      />
      <Accordion
        select={arr[selected]}
        title="Title4"
        active={active}
        setActive={setActive}
      />
    </div>
  );
}
