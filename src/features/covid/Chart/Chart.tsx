import { VFC } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useSelector } from "react-redux";
import { selectData, selectDailyData, selectCountry } from "../covidSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart: VFC = () => {
  const data = useSelector(selectData);
  const dailyData = useSelector(selectDailyData);
  const country = useSelector(selectCountry);

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${country}最新情報`,
      },
    },
  };
  const barData = {
    labels: ["感染者", "回復者", "死者"],
    datasets: [
      {
        backgroundColor: ["#3182CE", "#38A169", "#D53F8C"],
        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
      },
    ],
  };
  const barChart = data && <Bar data={barData} options={barOptions} />;

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "全世界の最新情報",
      },
    },
  };
  const lineData = {
    labels: dailyData.map(({ reportDate }) => reportDate),
    datasets: [
      {
        data: dailyData.map((data) => data.confirmed.total),
        label: "感染者",
        borderColor: "#3182CE",
        fill: true,
      },
      {
        data: dailyData.map((data) => data.recovered.total),
        label: "回復者",
        borderColor: "#38A169",
        fill: true,
      },
      {
        data: dailyData.map((data) => data.deaths.total),
        label: "死者",
        borderColor: "#D53F8C",
        fill: true,
      },
    ],
  };
  const lineChart = dailyData[0] && (
    <Line data={lineData} options={lineOptions} />
  );

  return <div>{country.length ? barChart : lineChart}</div>;
};
