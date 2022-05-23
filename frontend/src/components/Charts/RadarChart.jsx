import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

import PropTypes from "prop-types";
import "./RadarChart.css";

/**
 * Returns React Component that displays a radar chart
//  * @param { array } props.performances.data
//  * @param { object } props.performances.kind
 * @param { Object } props An object that contains an array of objects
 * @return  A React component
 */
function renderRadarChart(props) {
  const performances = props.performances;
  const { data, kind } = performances; // Splitting the two type of data used to create the chart
  let userData = []; // Initialization of the array that will serve as the data used by the chart
  let kindName = []; // Initialization of the array that will contain the names of each axis
  // The use of this array isn't necessary but it allows a better customisation of axis names

  // In this loop, we push the data taken from the prop into the newly created array and the corresponding kind name
  for (let i = 0; i < data.length; i++) {
    kindName.push(kind[i + 1]);
    userData.push({
      name: kindName[i],
      value: data[i].value,
    });
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={userData} cx="50%" cy="50%" outerRadius="65%">
        <PolarGrid radialLines={false} gridType="polygon" />
        <PolarAngleAxis
          className="axis-title"
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
  performances: PropTypes.shape({
    data: PropTypes.array,
    kind: PropTypes.object,
  }).isRequired,
};

export default renderRadarChart;
