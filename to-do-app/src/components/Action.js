import React from "react";

// Action component

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        Do something
      </button>
    </div>
  );
};

export default Action;
