import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const InvestFinancingChart = () => {
  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        label: "Invest Financing",
        data: [11, 13.5, 9, 7],
        backgroundColor: [
          "rgb(192, 246, 252)",
          "rgb(13, 144, 251)",
          "rgb(7, 229, 181)",
          "rgb(29, 207, 90)",
        ],

        barPercentage: 2,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
    scales: {
      x: { display: false },
      y: { display: false, min: 0, max: 15 },
    },
  };

  return (
    <div className="mt-2">
      <div className="w-[270px]  bg-[#f3f7fb] rounded-lg px-4 pb-4 pt-6 shadow-md mx-auto">
        <h4 className=" text-[#9FA9C0] font-semibold">Invest Financing</h4>
        <p className="text-[12px] font-semibold text-[#9FA9C0] mb-1">(APR)</p>
        <h2 className="text-center text-2xl font-bold text-[#202945] mb-2">
          11% - 13.5%
        </h2>
        <div className="">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default InvestFinancingChart;
