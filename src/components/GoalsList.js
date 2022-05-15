import React from "react";
import Goal from "./Goal";

function GoalsList(props) {
  console.log("GOALLIST PROPS: ", props);
  function check(id) {
    props.checkGoal(id);
  }
  function remove(id) {
    props.removeGoal(id);
  }
  return (
    <div className="goals__list">
      <ul className="list">
        {props.goals.length ? (
          props.goals.map((goal, index) => {
            return (
              <Goal
                goal={goal}
                index={index}
                key={goal.id}
                checkGoal={check}
                removeGoal={remove}
              />
            );
          })
        ) : (
          <div className="list__empty">
            You have nothing to do. <br />
            Add a few todos
          </div>
        )}
      </ul>
    </div>
  );
}

export default GoalsList;
