import React, { useEffect, useState } from "react";

const Accordion = ({ title, active, setActive, select }) => {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    setExpanded(active.includes(title));
  }, [active, title]);

  const toggleExpanded = () => {
    if (active.includes(title) || expanded) {
      setExpanded((expanded) => !expanded);
      setActive(active.replace(title, ""));
      return;
    }
    if (select === "single") setActive(title);
    else if (select === "mulitple") {
      const act = active;
      active.includes(title) || setActive(act + title);
    }
  };

  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={toggleExpanded}>
            {expanded || select === "default" ? "X" : "|||"}
          </span>
        </div>
      </div>

      <div
        className={
          (expanded || select === "default" ? "show" : "") + " accordionContent"
        }
      >
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
