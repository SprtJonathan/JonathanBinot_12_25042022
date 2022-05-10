import {
  PieChart,
  Pie,
  Tooltip,
  Label,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./style.css";

function renderRadialBarChart(score) {
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
      <PieChart >
        <Pie
          innerRadius={60}
          outerRadius={70}
          paddingAngle={2}
          startAngle={-270}
          className="pie-chart"
        >
          <Cell
            name="Progression des objectifs"
            value={scoreValue}
            fill="#FF0000"
            cornerRadius={10}
          />
          <Cell
            name="Pourcentage restant"
            value={percentageLeft}
            fill="transparent"
            stroke="none"
          />
          <Label
            value={`${scoreValue}%`}
            position="centerBottom"
            className="card-data"
            fontSize="27px"
          />
          <Label
            value="de votre objectif"
            position="centerTop"
            className="card-type"
          />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
export default renderRadialBarChart;
