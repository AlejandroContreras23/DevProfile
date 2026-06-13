import { Radar } from "react-chartjs-2";
import { useContext } from "react";
import { CVContext } from "../contexto/CVContext";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function GraficaHabilidades() {

  const { datosCV } = useContext(CVContext);

  const data = {
    labels: [
      "React",
      "JavaScript",
      "Node.js",
      "MySQL",
      "MongoDB",
    ],

    datasets: [
      {
        label: "",

        data: [
          datosCV.reactNivel || 90,
          datosCV.javascriptNivel || 85,
          datosCV.nodeNivel || 80,
          datosCV.mysqlNivel || 75,
          datosCV.mongodbNivel || 70,
        ],

        backgroundColor: "rgba(44,167,184,0.2)",
        borderColor: "#2ca7b8",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      r: {
        min: 0,
        max: 100,

        ticks: {
          display: false,
        },

        pointLabels: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className="grafica-container">
      <Radar
        data={data}
        options={options}
      />
    </div>
  );
}

export default GraficaHabilidades;