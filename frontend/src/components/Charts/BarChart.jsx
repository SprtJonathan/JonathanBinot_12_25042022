import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
} from "recharts";

function renderBarChart({ data }) {
  const userData = [];

  // In this loop, we push the data taken from the prop into the newly created array to better match the data of the mockup
  for (let i = 0; i < data.length; i++) {
    userData.push({
      index: i + 1,
      kilogram: data[i].kilogram,
      calories: data[i].calories,
    });
  }
  const kgArray = data.map((kilogram) => kilogram.kilogram);
  const minKg = Math.min(...kgArray);
  const maxKg = Math.max(...kgArray);

  const calArray = data.map((calories) => calories.calories);
  const minCal = Math.min(...calArray);
  const maxCal = Math.max(...calArray);
  const legendValue = (value) => {
    return <span>{value} </span>;
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={userData} label="test">
        <CartesianGrid
          strokeDasharray="2 2"
          stroke="#DEDEDE"
          vertical={false}
        />
        <XAxis
          dataKey="index"
          tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: 500 }}
          tickLine={false}
          tickSize={16}
          stroke={"#DEDEDE"}
        />
        <YAxis
          yAxisId={0} // This attribute is used to assign the Y axis to a specific bar (here the Kg bar)
          dataKey="kilogram"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: 500 }}
          domain={[minKg - 2, maxKg + 2]}
        />
        <YAxis
          yAxisId={1} // This attribute is used to assign the Y axis to a specific bar (here the Kcal bar)
          dataKey="calories"
          hide={true}
          domain={[minCal - 2, maxCal + 2]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#FF0000",
            fontSize: 7,
            fontWeight: "500",
          }}
          itemStyle={{ color: "#FFFFFF" }}
          formatter={(value, name, unit) => [value, unit]}
          labelStyle={{ display: "none" }}
          cursor={{
            strokeOpacity: 0.1,
            strokeWidth: 60,
            height: 263,
          }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={47}
          formatter={legendValue}
          wrapperStyle={{ color: "#74798C", fontSize: "14" }}
        />
        <Bar
          yAxisId={0} // This attribute is used to assign the bar to the previously assigned Y Axis (here the Kg Ybar)
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[10, 10, 0, 0]}
          unit="kg"
          name="Poids (kg)"
        />
        <Bar
          yAxisId={1} // This attribute is used to assign the bar to the previously assigned Y Axis (here the Kcal Ybar)
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]}
          unit="Kcal"
          name="Calories brûlées (kCal)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default renderBarChart;
