import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

const HistoricalDefenseSpending = () => {
  // Historical data (both GDP percentages and dollar values)
  const data = [
    { year: 1950, gdp_us: 5.0, gdp_ussr: 9.8, dollars_us: 270, dollars_ussr: 422 },
    { year: 1955, gdp_us: 9.9, gdp_ussr: 11.4, dollars_us: 408, dollars_ussr: 502 },
    { year: 1960, gdp_us: 8.2, gdp_ussr: 12.5, dollars_us: 385, dollars_ussr: 589 },
    { year: 1962, gdp_us: 8.4, gdp_ussr: 13.2, dollars_us: 421, dollars_ussr: 642 },
    { year: 1965, gdp_us: 7.4, gdp_ussr: 12.8, dollars_us: 442, dollars_ussr: 678 },
    { year: 1970, gdp_us: 7.8, gdp_ussr: 13.0, dollars_us: 455, dollars_ussr: 712 },
    { year: 1975, gdp_us: 5.5, gdp_ussr: 13.4, dollars_us: 389, dollars_ussr: 745 },
    { year: 1980, gdp_us: 4.9, gdp_ussr: 15.0, dollars_us: 402, dollars_ussr: 825 },
    { year: 1985, gdp_us: 6.1, gdp_ussr: 16.1, dollars_us: 548, dollars_ussr: 920 },
    { year: 1989, gdp_us: 5.5, gdp_ussr: 14.2, dollars_us: 532, dollars_ussr: 850 },
    { year: 1991, gdp_us: 4.7, gdp_ussr: 8.9, dollars_us: 482, dollars_ussr: 425 }
  ];

  const significantEvents = [
    { year: 1962, label: "Cuban Missile Crisis" },
    { year: 1985, label: "Reagan Military Buildup" },
    { year: 1991, label: "USSR Dissolves" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-6 bg-white rounded-lg shadow-lg">
      {/* GDP Percentage Chart */}
      <div>
        <h2 className="text-xl font-bold">US vs USSR Defense Spending (1950-1991)</h2>
        <p className="text-lg font-semibold mt-4">Defense Spending as % of GDP</p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: '% of GDP', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="gdp_us" 
                name="United States %" 
                stroke="#0051A8" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="gdp_ussr" 
                name="USSR %" 
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
      </div>

      {/* Dollar Values Chart */}
      <div>
        <p className="text-lg font-semibold">Defense Spending in Billions (2023 USD)</p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Billions USD (2023)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="dollars_us" 
                name="United States $B" 
                stroke="#0051A8" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="dollars_ussr" 
                name="USSR $B" 
                stroke="#B22234" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Note: Dollar values are adjusted for inflation to 2023 USD. Soviet values are estimates based on available historical data.
      </div>
    </div>
  );
};

export default HistoricalDefenseSpending;
