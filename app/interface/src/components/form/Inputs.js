import React from "react";
import "./Inputs.scss";
const Inputs = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  mode,
  children,
  radioId,
}) => {
  let html;
  switch (mode) {
    case "select":
      html = (
        <select
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className="form-select"
        >
          {children}
        </select>
      );
      break;
    case "textArea":
      html = (
        <textarea
          id={name}
          name={name}
          className="form-control"
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows="3"
        />
      );
      break;
    case "Switch":
      html = (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <label className="form-check-label" for={name}>
            {placeholder}
          </label>
        </div>
      );
      break;
    case "Checkbox":
      html = (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={name}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <label className="form-check-label" for={name}>
            {placeholder}
          </label>
        </div>
      );
      break;
    case "Radio":
      html = (
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id={radioId}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <label className="form-check-label" for={radioId}>
            {placeholder}
          </label>
        </div>
      );
      break;
    default:
      html = (
        <input
          id={name}
          name={name}
          className="form-control"
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      );
      break;
  }
  return (
    <div className="wrapper">
      {html}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Inputs;
