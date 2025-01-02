import React from 'react';
import DefenseSpendingViz from './components/DefenseSpendingViz';
import HistoricalDefenseSpending from './components/HistoricalDefenseSpending';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <DefenseSpendingViz />
        <HistoricalDefenseSpending />
      </div>
    </div>
  );
}

export default App;
