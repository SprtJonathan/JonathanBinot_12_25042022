import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

import PropTypes from "prop-types";

function renderRadarChart(props) {
  const performances = props.performances;
  const { data, kind } = performances; // Splitting the two type of data used to create the chart
  let userData = []; // Initialization of the array that will serve as the data used by the chart

  // In this loop, we push the data taken from the prop into the newly created array and the corresponding kind name
  for (let i = 0; i < data.length; i++) {
    userData.push({
      name: kind[i + 1],
      value: data[i].value,
    });
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={userData} cx="50%" cy="50%" outerRadius="65%">
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="name"
          tickSize={10}
          tick={{
            fill: "#FFFFFF",
            fontWeight: 500,
            fontSize: 12,
          }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
renderRadarChart.propTypes = {
  performances: PropTypes.object.isRequired,
};

export default renderRadarChart;
