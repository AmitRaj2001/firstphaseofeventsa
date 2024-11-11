// src/components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ title }) => (
  <div className="p-4 border border-gray-200 rounded-lg">
    <h2 className="text-lg font-semibold">{title}</h2>
  </div>
);

export default FeatureCard;
