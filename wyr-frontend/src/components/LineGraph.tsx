import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2015", sales: 20, profit: 30 },
  { year: "2016", sales: 40, profit: 50 },
  { year: "2017", sales: 60, profit: 70 },
  { year: "2018", sales: 45, profit: 60 },
  { year: "2019", sales: 80, profit: 90 },
];

export default function FeaturedProductGraph() {
  return (
    <div className="relative left-[20.76%] right-[54.24%] top-[63.36%] bottom-[2.52%] rounded-[14px] border border-[#313D4F] bg-[#273142] p-4">
      <ResponsiveContainer width={"50%"} height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#E2E2E2" strokeDasharray="3 3" opacity={0.4} />
          <XAxis dataKey="year" tick={{ fill: "white", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "white", fontSize: 12 }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e2a38",
              borderColor: "#313D4F",
              color: "white",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#4880FF"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#4880FF", strokeWidth: 1.4, fill: "#00B69B" }}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#00B69B"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#FFFFFF", strokeWidth: 1.4, fill: "#00B69B" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
