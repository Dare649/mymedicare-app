import React, { useState } from 'react';

interface TabProps {
  titles: string[];
  renderContent: (role: string) => React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ titles, renderContent }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeRole = titles[activeTab];

  return (
    <div>
      {/* Tab Titles */}
      <div className="flex space-x-4">
        {titles.map((title, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === index ? 'text-primary-5 border-b-2 border-primary-4 font-bold' : 'font-medium text-tertiary-1'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderContent(activeRole)}</div>
    </div>
  );
};

export default Tab;
