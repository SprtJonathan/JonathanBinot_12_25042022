/* Importing the components from the recharts library. */
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

import "./LineChart.css";

/**
 * Returns React Component that displays a line chart
 * @param { number } props.data.day
 * @param { number } props.data.sessionLength
 * @return  A React component
 */
function renderLineChart(props) {
  const data = props.data;
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const avgSessions = [];

  /* Creating an array of objects with the day of the week and the session length. */
  for (let i = 0; i < data.length; i++) {
    avgSessions.push({
      day: days[i],
      value: data[i].sessionLength,
    });
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={avgSessions}
        color={{ fill: "#FF0000" }}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        type="monotone"
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          stroke="#FFFFFF"
          className="days"
          style={{
            opacity: 0.5,
            fontSize: "12px",
            lineHeight: "24px",
          }}
        />
        <Tooltip
          itemStyle={{
            color: "black",
            stroke: "transparent",
            fontSize: 8,
            fontWeight: 500,
          }}
          formatter={(value, name, unit) => [value, unit]}
          labelStyle={{ display: "none" }}
          cursor={{
            strokeOpacity: 0.1,
          }}
          contentStyle={{
            border: "0 transparent",
            padding: "5px 10px",
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FFFFFF"
          dot={false}
          unit=" min"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
renderLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
};

export default renderLineChart;
