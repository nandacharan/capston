import React, { useState } from 'react';
import { Send } from 'lucide-react';

const PostGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = () => {
    // Simulate AI generation
    setGeneratedContent('Sample generated content based on your prompt...');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Post Generator</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Generate Content</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe what kind of content you want to generate..."
              />
            </div>
            <button
              onClick={handleGenerate}
              className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Send size={20} className="mr-2" />
              Generate Content
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Generated Content</h3>
          <div className="border rounded-lg p-4 min-h-[200px]">
            {generatedContent || 'Generated content will appear here...'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostGenerator;