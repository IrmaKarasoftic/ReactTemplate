import Select from "react-select";
import { useRef, useState, useEffect } from "react";

export default function Dropdown(props) {
  return (
    <Select
      {...props}
      isDisabled={props.disabled}
      getOptionValue={(option) => option.key}
      getOptionLabel={(option) => option.value}
      noOptionsMessage="No available options"
      loadingMessage="Loading"
      value={value}
      onChange={handleChange}
      ref={selectRef}
    />
  );
}
