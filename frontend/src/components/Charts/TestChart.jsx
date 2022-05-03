import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

function renderLineChart({width, height}) {
  return (
    <LineChart width={835} height={420} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}

export default renderLineChart;
