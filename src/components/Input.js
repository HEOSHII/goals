import React, { useState } from "react";

function Input({ onBlur }) {
  const [value, setValue] = useState("");
  function changeValue(event) {
    if (event.target.value.trim()) {
      setValue(event.target.value);
      onBlur(event.target.value);
      event.target.value = "";
    }
  }
  function closeInput(event) {
    if (event.code === "Enter") {
      event.target.blur();
    }
    if (event.code === "Escape") {
      event.target.value = "";
      event.target.blur();
    }
  }

  return (
    <div className="goals__input-button">
      <input className="input" onBlur={changeValue} onKeyDown={closeInput} />
      <div className="plus">✚</div>
    </div>
  );
}

export default Input;
