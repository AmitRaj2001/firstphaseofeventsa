import React from 'react';

const ProgressCard = ({ title, current, total, onClick }) => {
  const percentage = (current / total) * 100;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md w-64 p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">
        {current} out of {total} done
      </p>
      <div className="mt-3 bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-green-500 h-1.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const AddCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md w-64 h-[88px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <span className="text-4xl text-gray-400 font-light">+</span>
    </div>
  );
};

export default function ProgressCards() {
  const handleProgressCardClick = (title) => {
    // TODO: Implement navigation or action for progress card
    console.log(`Clicked on ${title}`);
  };

  const handleAddClick = () => {
    // TODO: Implement navigation or modal opening logic here
    console.log("Add button clicked");
  };

  return (
    <div className="m-8">
      <div className="flex space-x-4">
        <ProgressCard 
          title="Hamper" 
          current={1} 
          total={30} 
          onClick={() => handleProgressCardClick("Hamper")}
        />
        <AddCard onClick={handleAddClick} />
      </div>
    </div>
  );
}