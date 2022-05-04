import {
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
  console.log(data);
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
