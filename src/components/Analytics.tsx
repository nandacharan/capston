import React from 'react';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    { label: 'Total Reach', value: '125K', trend: '+15%', icon: Users },
    { label: 'Engagement Rate', value: '4.8%', trend: '+0.6%', icon: TrendingUp },
    { label: 'Post Performance', value: '89/100', trend: '+5', icon: BarChart3 },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="text-blue-600" size={24} />
                <span className="text-green-500 text-sm font-medium">{metric.trend}</span>
              </div>
              <h3 className="text-gray-500 text-sm mb-1">{metric.label}</h3>
              <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance by Platform</h3>
          <div className="space-y-4">
            {[
              { platform: 'Instagram', engagement: '6.2%', reach: '45K' },
              { platform: 'Facebook', engagement: '4.8%', reach: '38K' },
              { platform: 'Twitter', engagement: '3.9%', reach: '22K' },
            ].map((platform, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{platform.platform}</h4>
                  <span className="text-sm text-gray-500">Engagement: {platform.engagement}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Reach</p>
                  <p className="font-medium">{platform.reach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Posts</h3>
          <div className="space-y-4">
            {[
              { title: 'Summer Collection Preview', engagement: '8.2%', likes: '2.4K' },
              { title: 'Customer Story Feature', engagement: '7.5%', likes: '1.8K' },
              { title: 'Product Launch', engagement: '6.9%', likes: '1.6K' },
            ].map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{post.title}</h4>
                  <span className="text-sm text-gray-500">Engagement: {post.engagement}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Likes</p>
                  <p className="font-medium">{post.likes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;