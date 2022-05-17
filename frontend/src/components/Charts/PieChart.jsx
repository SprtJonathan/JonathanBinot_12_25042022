import {
  PieChart,
  Pie,
  Tooltip,
  Label,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./style.css";
import PropTypes from "prop-types";

function renderPieChart(props) {
  const score = props.score;
  const scoreValue = score * 100;
  const percentageLeft = 100 - scoreValue;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
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
renderPieChart.propTypes = {
  score: PropTypes.number,
};
export default renderPieChart;
