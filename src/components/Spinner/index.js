import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <FontAwesomeIcon className="icon" icon={faSync} />
    </div>
  );
};

export default Spinner;
