import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

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
