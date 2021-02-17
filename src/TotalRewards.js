import React from "react";

const TotalRewards = ({ total, getTotalRewards }) => {
  const totalRewards = (
    <div>
      <button style={{ marginTop: 25 }} onClick={getTotalRewards}>
        Get Total Reward Points
      </button>
      <p style={{ display: "inline-block", margin: 10 }}>{total} points</p>
    </div>
  );
  return <div>{totalRewards}</div>;
};

export default TotalRewards;
