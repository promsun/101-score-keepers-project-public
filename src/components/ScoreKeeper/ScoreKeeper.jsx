import React, { useState } from "react";
import ScoreView from "../ScoreView/ScoreView";

const ScoreKeeper = () => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);

  return (
    <div className="text-center my-5 mx-auto w-4/5 max-w-2xl bg-white p-5 rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-blue-600 text-4xl mb-5 font-bold">Score Keeper</h1>

      <ScoreView
        teamName="Team One"
        score={teamOneScore}
        leading={teamOneScore > teamTwoScore}
      />

      {/* Team One Increment */}
      <button
        className="m-2.5 px-5 py-2.5 text-base text-white bg-blue-600 border-none rounded cursor-pointer hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
        onClick={() => setTeamOneScore(teamOneScore + 1)}
      >
        +1 Team One
      </button>

      {/* Team One Decrement */}
      <button
        className="m-2.5 px-5 py-2.5 text-base text-white bg-blue-600 border-none rounded cursor-pointer hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
        onClick={() => setTeamOneScore(teamOneScore - 1)}
      >
        -1 Team One
      </button>

      <ScoreView
        teamName="Team Two"
        score={teamTwoScore}
        leading={teamTwoScore > teamOneScore}
      />

      {/* Team Two Increment */}
      <button
        className="m-2.5 px-5 py-2.5 text-base text-white bg-blue-600 border-none rounded cursor-pointer hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
        onClick={() => setTeamTwoScore(teamTwoScore + 1)}
      >
        +1 Team Two
      </button>

      {/* Team Two Decrement */}
      <button
        className="m-2.5 px-5 py-2.5 text-base text-white bg-blue-600 border-none rounded cursor-pointer hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
        onClick={() => setTeamTwoScore(teamTwoScore - 1)}
      >
        -1 Team Two
      </button>
    </div>
  );
};

export default ScoreKeeper;
