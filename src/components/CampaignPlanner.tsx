import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';

const CampaignPlanner = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Summer Collection Launch',
      startDate: '2024-03-20',
      endDate: '2024-04-20',
      status: 'Active',
      platforms: ['Instagram', 'Facebook', 'Twitter'],
    },
    // Add more campaigns as needed
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Campaign Planner</h2>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} className="mr-2" />
          New Campaign
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 gap-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{campaign.name}</h3>
                  <div className="flex items-center text-gray-500 mt-1">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>{campaign.startDate} - {campaign.endDate}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                  {campaign.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {campaign.platforms.map((platform) => (
                  <span key={platform} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignPlanner;