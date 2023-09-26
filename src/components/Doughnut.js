import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ["Cyan", "Black", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 3, 4],
      backgroundColor: ["cyan", "black", "yellow"],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "right", // Display legends on the right side
    },
  },
  cutout: "50%", // Adjust the cutout percentage to control the hole size
  text: "Budget 5000", // Text to display in the center of the doughnut
  animation: {
    animateScale: true,
  },
};

export function DoughnutChart() {
  return <Doughnut data={data} id="myDoughnutChart" options={options} />;
}
