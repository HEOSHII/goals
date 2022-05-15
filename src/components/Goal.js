import React, { useState } from "react";

function Goal(props) {
  const classes = ["list__item"];
  console.log("GOAL PROPS: ", props);

  if (props.goal.comleted) {
    classes.push("completed");
  }

  function checkHandler(event) {
    props.checkGoal(props.goal.id);
  }
  function removeHandler(event) {
    props.removeGoal(props.goal.id);
  }

  return (
    <li
      className={classes.join(" ")}
      onDoubleClick={checkHandler}
      draggable="true"
    >
      <div className="title">
        <p className="title__number">{props.index + 1}.</p>
        <p className="title__value">{props.goal.value}</p>
      </div>
      <div className="list__buttons">
        {/* <button className="edit-button unselectable" onClick={editHandler}>
          ✎
        </button> */}
        <button className="check-button unselectable" onClick={checkHandler}>
          ✔
        </button>
        <button className="delete-button unselectable" onClick={removeHandler}>
          ✘
        </button>
        {/* <input className={inputClasses.join(" ")}></input> */}
      </div>
    </li>
  );
}

export default Goal;
