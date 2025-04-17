import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { name: "Jan", frequencia: 40 },
  { name: "Feb", frequencia: 45 },
  { name: "Mar", frequencia: 50 },
  { name: "Apr", frequencia: 55 },
  { name: "May", frequencia: 60 },
  { name: "Jun", frequencia: 35 },
  { name: "Jul", frequencia: 25 },
  { name: "Aug", frequencia: 20 },
  { name: "Sep", frequencia: 15 },
  { name: "Oct", frequencia: 10 },
  { name: "Nov", frequencia: 5 },
  { name: "Dec", frequencia: 30 },
];

export default function FrequenciaGraphCard() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        background: "#273142",
        border: "1px solid #313D4F",
        borderRadius: 14,
        padding: "1rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          color: "white",
          fontFamily: "Nunito Sans",
          marginBottom: "1rem",
        }}
      >
        Frequência
      </h2>

      {/* Responsive height container */}
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mockData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E2E2"
              opacity={0.2}
            />
            <XAxis dataKey="name" stroke="#ffffff" fontSize={12} />
            <YAxis stroke="#ffffff" fontSize={12} />
            <Tooltip />
            <Bar dataKey="frequencia" fill="#DBA5FF" opacity={0.78} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
