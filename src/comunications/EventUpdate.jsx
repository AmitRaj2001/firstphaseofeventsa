import React, { useState } from 'react';
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import AudienceSelection from './AudienceSelection'; // Import AudienceSelection

export default function EventUpdate() {
  const [placeholders, setPlaceholders] = useState({
    name: 'Source: Guest list: Name',
    event: 'Lunch',
    time: '1:00 pm',
    location: 'Banquet Hall 1',
    sender: 'Sharma & Gupta Family',
  });

  const [showAudienceSelection, setShowAudienceSelection] = useState(false); // State to toggle between components

  const handleInputChange = (key, value) => {
    setPlaceholders(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      {/* If showAudienceSelection is true, show AudienceSelection, otherwise show EventUpdate form */}
      {showAudienceSelection ? (
        <AudienceSelection onBack={() => setShowAudienceSelection(false)} />
      ) : (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Event Update</h1>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <p>Hey {placeholders.name},</p>
            <p>{placeholders.event} will start at {placeholders.time} in {placeholders.location}.</p>
            <p>Regards,</p>
            <p>{placeholders.sender}.</p>
            <p className="text-sm text-gray-500">Reply STOP to unsubscribe</p>
          </div>
          <div className="space-y-4">
            {Object.entries(placeholders).map(([key, value]) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <Input
                  id={key}
                  value={value}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <Button variant="outline">Back</Button>
            <Button variant="outline">Save as Draft</Button>
            <Button onClick={() => setShowAudienceSelection(true)}>Next</Button> {/* Show AudienceSelection on Next */}
          </div>
        </div>
      )}
    </div>
  );
}
