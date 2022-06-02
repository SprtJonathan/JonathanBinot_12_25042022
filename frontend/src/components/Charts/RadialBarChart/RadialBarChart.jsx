/* Importing the components from the recharts library. */
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";
import "./RadialBarChart.css";

/**
 * Returns React Component that displays a radial bar chart
 * @param { Number } score The user objective score
 * @return  A React component
 */
function renderRadialBarChart(props) {
  const score = props.score;
  const scoreValue = score * 100;

  // Object used for the chart
  const data = [
    {
      score: scoreValue,
      fill: "#E60000",
    },
  ];

  return (
    <div className="score">
      <p className="score-title">Score</p>
      <div className="score-legend">
        <p>
          <span className="score-value">{scoreValue} %</span> <br />
          de votre <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="70%"
          data={data}
          startAngle={90} // 90 is for the bar to start at the top of the circle
          endAngle={450} // 450 is for the bar to end at the top of the circle after a 360° (360 + 90)
          barSize={10}
          className="score__position"
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="score" cornerRadius="50%" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
// Use of propTypes to detail every props used in the component
renderRadialBarChart.propTypes = {
  score: PropTypes.number,
};
export default renderRadialBarChart;
