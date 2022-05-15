import React, { useState } from "react";
import GoalsList from "./components/GoalsList";
import Input from "./components/Input";
import Context from "./context";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      value:
        "This is a sample item needed to see how it looks like. This is a sample item needed to see how it looks like.",
      comleted: false,
      editing: false,
    },
  ]);

  let generateId = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return s4() + s4() + "-" + s4() + s4();
  };

  function handleValue(value) {
    setGoals(
      goals.concat([
        {
          id: generateId(),
          value: value,
          comleted: false,
        },
      ])
    );
  }


  function checkGoal(id) {
    setGoals(
      goals.map((goal) => {
        if (goal.id === id) {
          goal.comleted = !goal.comleted;
        }
        return goal;
      })
    );
  }

  function removeGoal(id) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="header__title">Goals</h1>
      </header>
      <main className="main">
        <div className="goals container">
          <GoalsList
            goals={goals}
            checkGoal={checkGoal}
            removeGoal={removeGoal}
          />

          <Input onBlur={handleValue} />
        </div>
      </main>
    </div>
  );
}

export default App;
