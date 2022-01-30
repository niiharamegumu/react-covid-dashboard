import { Text } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = useSelector(selectData);

  const mortality =
    data.confirmed && (100 * data.deaths.value) / data.confirmed.value;
  const doughnutData = {
    labels: ["感染者", "回復者", "死者"],
    datasets: [
      {
        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
        backgroundColor: ["#3182CE", "#38A169", "#D53F8C"],
        hoverBackgroundColor: ["#63B3ED", "#68D391", "#F687B3"],
        borderColor: ["transparent", "transparent", "transparent"],
      },
    ],
  };
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  return (
    <>
      {data.confirmed && (
        <Text textAlign="center">
          死亡率：{data.confirmed && mortality.toFixed(2)}%
        </Text>
      )}
      <Doughnut data={doughnutData} options={doughnutOptions} />;
    </>
  );
};
