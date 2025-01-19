import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

export default function Analytics() {
  const userGrowthData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "User Growth",
        data: [50, 100, 200, 300, 400, 500],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const activeJobsData = {
    labels: ["Engineering", "Design", "Marketing", "Sales", "Others"],
    datasets: [
      {
        label: "Active Jobs",
        data: [30, 20, 15, 25, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const userDistributionData = {
    labels: ["Job Seekers", "Recruiters"],
    datasets: [
      {
        label: "User Distribution",
        data: [70, 30],
        backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 159, 64, 0.5)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-4">User Growth</h3>
        <Line data={userGrowthData} options={{ responsive: true }} />
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-4">Active Jobs</h3>
        <Bar data={activeJobsData} options={{ responsive: true }} />
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-4">User Distribution</h3>
        <Pie data={userDistributionData} options={{ responsive: true }} />
      </div>
    </div>
  );
}
