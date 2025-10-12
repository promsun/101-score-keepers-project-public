import React from "react";

const ScoreView = (props) => {
  return (
    <div
      className={
        props.leading
          ? "text-white bg-blue-600 rounded py-2"
          : "text-gray-700 py-2"
      }
    >
      <h2 className="text-xl font-semibold">
        {props.teamName}: {props.score}
      </h2>
    </div>
  );
};

export default ScoreView;
