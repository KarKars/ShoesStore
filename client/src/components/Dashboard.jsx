import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const options = {
    aspectRatio: 3,
  };

  const data = {
    labels: ["red", "blue", "yellow", "green", "white", "black"],
    datasets: [
      {
        label: "sells",
        data: [12, 14, 4, 12, 14, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="App ">
      <Line className="max-w-lg h-1/2" options={options} data={data} />
    </div>
  );
};

export default Dashboard;
