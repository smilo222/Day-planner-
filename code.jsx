import React, { useState, useEffect } from 'react';
import DayPlanner from './components/DayPlanner';
import WeekPlanner from './components/WeekPlanner';
import ProfitTracker from './components/ProfitTracker';
import SocialSkills from './components/SocialSkills';
import Dashboard from './components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [businessData, setBusinessData] = useState({
    dailyRevenue: 500,
    dailyExpenses: 200,
    customers: 50,
    growthRate: 0.1, // 10% weekly
    leads: 10
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-green-600 bg-clip-text text-transparent">
              🚀 Business Scale Planner
            </h1>
            <div className="flex space-x-2">
              <button onClick={() => setActiveTab('dashboard')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>
                Dashboard
              </button>
              <button onClick={() => setActiveTab('day')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'day' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>
                Day
              </button>
              <button onClick={() => setActiveTab('week')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'week' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>
                Week
              </button>
              <button onClick={() => setActiveTab('social')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'social' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>
                Social
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && <Dashboard businessData={businessData} />}
        {activeTab === 'day' && <DayPlanner />}
        {activeTab === 'week' && <WeekPlanner />}
        {activeTab === 'social' && <SocialSkills />}
      </main>
    </div>
  );
}

export default App;
