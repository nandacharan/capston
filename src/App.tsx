import React, { useState } from 'react';
import { Calendar, BarChart3, MessageSquare, Clock, Settings } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CampaignPlanner from './components/CampaignPlanner';
import Analytics from './components/Analytics';
import PostGenerator from './components/PostGenerator';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'planner' && <CampaignPlanner />}
        {activeTab === 'generator' && <PostGenerator />}
        {activeTab === 'analytics' && <Analytics />}
      </main>
    </div>
  );
}

export default App;