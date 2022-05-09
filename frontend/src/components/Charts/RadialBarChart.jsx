import { PieChart, Pie, Tooltip, Label, ResponsiveContainer } from "recharts";
import "./style.css"

function renderRadialBarChart(score, fillColor) {
  const scoreValue = score.score * 100;
  const percentageLeft = 100 - scoreValue;
  const data = [
    {
      name: "score",
      value: scoreValue,
    },
    {
      name: "left",
      value: percentageLeft,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={70}
          fill="#FF0000"
          paddingAngle={2}
        >
          <Label
            value={`${scoreValue}%`}
            position="centerBottom"
            className="card-data"
            fontSize="27px"
          />
          <Label value="de votre objectif" position="centerTop" className="card-type" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
export default renderRadialBarChart;

/*import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Label,
} from "recharts";

function renderRadialBarChart({ value }) {
  const data = [
    {
      percent: value * 100,
      fill: "#FF0000",
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="40%"
        outerRadius="50%"
        data={data}
        startAngle={90}
        endAngle={270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey={"percent"}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar dataKey="percent" angleAxisId={0} data={data} />
        <text
          x={30 / 2}
          y={33 / 2}
          textAnchor="left"
          dominantBaseline="middle"
          className="progress-label"
        >
          {value * 100}% de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default renderRadialBarChart;
*/
