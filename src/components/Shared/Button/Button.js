import React from "react";
import "./button.css";

function Button(props) {
  const { className, loading, disabled, label, type, ...custom } = props;
  return (
    <button
      className={`${className} ${loading ? "status-loading" : ""} ${
        disabled ? "status-disabled" : ""
      }`}
      type={type}
      {...custom}
    >
      <div className="button-content">
        <span className="button-label">{label}</span>

        {loading && (
          <div className="button-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        )}
      </div>
    </button>
  );
}
export default Button;
