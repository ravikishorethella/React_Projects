import React from "react";

// Action component

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        className="big-button"
      >
        Want some help?
      </button>
    </div>
  );
};

export default Action;
