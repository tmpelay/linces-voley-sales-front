import React from "react";

import "./ButtonComponent.css";

export default function ({ label, onClick, className = "" }) {
  return (
    <div className="button__container">
      <button type="submit" onClick={onClick} className={"button"}>
        {label}
      </button>
    </div>
  );
}
