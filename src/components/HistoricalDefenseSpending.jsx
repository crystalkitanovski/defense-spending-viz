import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

const HistoricalDefenseSpending = () => {
  // Historical data (percentages of GDP)
  const data = [
    { year: 1950, us: 5.0, ussr: 9.8, event: "Korean War Begins" },
    { year: 1955, us: 9.9, ussr: 11.4 },
    { year: 1960, us: 8.2, ussr: 12.5 },
    { year: 1962, us: 8.4, ussr: 13.2, event: "Cuban Missile Crisis" },
    { year: 1965, us: 7.4, ussr: 12.8, event: "Vietnam War Escalation" },
    { year: 1970, us: 7.8, ussr: 13.0 },
    { year: 1975, us: 5.5, ussr: 13.4 },
    { year: 1980, us: 4.9, ussr: 15.0 },
    { year: 1985, us: 6.1, ussr: 16.1, event: "Reagan Military Buildup" },
    { year: 1989, us: 5.5, ussr: 14.2, event: "Berlin Wall Falls" },
    { year: 1991, us: 4.7, ussr: 8.9, event: "USSR Dissolves" }
  ];

  const significantEvents = [
    { year: 1962, label: "Cuban Missile Crisis" },
    { year: 1985, label: "Reagan Military Buildup" },
    { year: 1991, label: "USSR Dissolves" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold">US vs USSR Defense Spending (1950-1991)</h2>
        <p className="text-sm text-gray-600">Percentage of GDP Allocated to Defense During the Cold War</p>
      </div>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              label={{ value: '% of GDP', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="us" 
              name="United States" 
              stroke="#0051A8" 
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="ussr" 
              name="USSR/Russia" 
              stroke="#B22234" 
              strokeWidth={2}
            />
            {significantEvents.map((event) => (
              <ReferenceLine
                key={event.year}
                x={event.year}
                stroke="#666"
                strokeDasharray="3 3"
              >
                <Label 
                  value={event.label}
                  position="top"
                  angle={-45}
                  offset={20}
                  className="text-xs"
                />
              </ReferenceLine>
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Data reveals significant spending increases during key Cold War events, with the USSR consistently allocating a larger share of GDP to defense than the US.
      </div>
    </div>
  );
};

export default HistoricalDefenseSpending;
