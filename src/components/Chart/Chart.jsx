import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart({ dataPoints = [] }) {
  const dataPointsValues = dataPoints.map((point) => point.value);
  const tottalMax = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((point, index) => (
        <ChartBar
          key={index}
          maxValue={tottalMax}
          label={point.label}
          value={point.value}
        />
      ))}
    </div>
  );
}

export default Chart;
