import {
  ResponsiveContainer,
  LineChart,
  Line,
  Label,
  XAxis,
  Tooltip,
} from "recharts";

function renderLineChart({ data }) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const avgSessions = [];
  // In this loop, we push the data taken from the prop into the newly created array and the corresponding day name
  for (let i = 0; i < data.length; i++) {
    avgSessions.push({
      day: days[i],
      value: data[i].sessionLength,
    });
  }
  console.log(avgSessions);
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
          label={{
            value: "Durée moyenne des sessions",
            position: "insideLeft",    dy: -200}}
        />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#FFFFFF" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default renderLineChart;
