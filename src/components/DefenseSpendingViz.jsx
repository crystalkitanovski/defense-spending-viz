import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DefenseSpendingViz = () => {
  const data = [
    { country: 'USA', spending: 877, perGDP: 3.5 },
    { country: 'China', spending: 292, perGDP: 1.6 },
    { country: 'India', spending: 72.9, perGDP: 2.4 },
    { country: 'Russia', spending: 86.4, perGDP: 4.1 },
    { country: 'UK', spending: 68.5, perGDP: 2.2 }
  ].sort((a, b) => b.spending - a.spending);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Top 5 Global Defense Spenders (2023 Est.)</h2>
        <p className="text-sm text-gray-600">Defense Spending (USD Billions) vs % of GDP</p>
      </div>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
            <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="spending" name="Spending (USD Billions)" fill="#82ca9d" />
            <Bar yAxisId="right" dataKey="perGDP" name="% of GDP" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Analysis reveals interesting patterns in how nations balance absolute spending with economic capacity.
      </div>
    </div>
  );
};

export default DefenseSpendingViz;
