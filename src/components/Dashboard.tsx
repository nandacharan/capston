import React from 'react';
import { BarChart3, TrendingUp, Users, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Campaigns', value: '12', icon: Calendar, trend: '+2' },
    { label: 'Total Reach', value: '45.2K', icon: Users, trend: '+12%' },
    { label: 'Engagement Rate', value: '4.8%', icon: TrendingUp, trend: '+0.6%' },
    { label: 'Scheduled Posts', value: '24', icon: BarChart3, trend: '+5' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="text-blue-600" size={24} />
                <span className="text-green-500 text-sm font-medium">{stat.trend}</span>
              </div>
              <h3 className="text-gray-500 text-sm mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Campaigns</h3>
          <div className="space-y-4">
            {[
              { name: 'Summer Sale 2024', status: 'Active', engagement: '8.2%' },
              { name: 'New Collection Launch', status: 'Scheduled', engagement: '---' },
              { name: 'Spring Fashion', status: 'Completed', engagement: '6.5%' },
            ].map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{campaign.name}</h4>
                  <span className={`text-sm ${
                    campaign.status === 'Active' ? 'text-green-500' : 
                    campaign.status === 'Scheduled' ? 'text-blue-500' : 'text-gray-500'
                  }`}>{campaign.status}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Engagement</p>
                  <p className="font-medium">{campaign.engagement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Posts</h3>
          <div className="space-y-4">
            {[
              { title: 'New Summer Collection Teaser', platform: 'Instagram', time: '2h' },
              { title: 'Customer Success Story', platform: 'Facebook', time: '5h' },
              { title: 'Product Launch Announcement', platform: 'Twitter', time: '8h' },
            ].map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{post.title}</h4>
                  <span className="text-sm text-gray-500">{post.platform}</span>
                </div>
                <span className="text-sm text-blue-600">in {post.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;