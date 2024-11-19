import React, { useState } from 'react';
import BroadcastMessage from './BroadcastMessage'; // Import BroadcastMessage component

export default function AudienceSelection() {
  const [showBroadcastMessage, setShowBroadcastMessage] = useState(false);

  // Function to handle the Next button click
  const handleNext = () => {
    setShowBroadcastMessage(true); // Switch to BroadcastMessage component
  };

  return (
    <div className="p-6">
      {!showBroadcastMessage ? (
        // Show the AudienceSelection Component
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6">
          {/* Event Update Card */}
          <div className="bg-white border rounded-lg shadow-md p-4 w-full md:w-1/2">
            <h3 className="text-lg font-semibold">Event Update</h3>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p>Hey Name,</p>
              <p>Lunch will start at <span className="font-semibold">1:00 pm</span> in Banquet Hall 1.</p>
              <p className="mt-4">Regards,<br />Sharma & Gupta Family.</p>
              <p className="mt-2 text-sm text-gray-500">Reply STOP to unsubscribe</p>
            </div>
          </div>

          {/* Broadcast Form */}
          <div className="bg-white border rounded-lg shadow-md p-4 w-full md:w-1/2">
            <h3 className="text-lg font-semibold">Who would you like to send the Broadcast to?</h3>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Audience <span className="text-red-500">*</span></label>
              <select className="mt-1 block w-full p-2 border rounded-md">
                <option>Source: Guest list: Category</option>
              </select>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold">Filters:</h4>
              <div className="mt-2">
                <input type="checkbox" id="blank" name="blank" />
                <label htmlFor="blank" className="ml-2"> (Blanks)</label>
              </div>
              <div className="mt-2">
                <input type="checkbox" id="ladkewale" name="ladkewale" />
                <label htmlFor="ladkewale" className="ml-2">Ladkewale</label>
              </div>
              <div className="mt-2">
                <input type="checkbox" id="ladkiwale" name="ladkiwale" />
                <label htmlFor="ladkiwale" className="ml-2">Ladkiwale</label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex space-x-4">
              <button className="bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-gray-900">Back</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Save as Draft</button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-900"
                onClick={handleNext} // Trigger handleNext on click
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Show the BroadcastMessage Component when "Next" is clicked
        <BroadcastMessage />
      )}
    </div>
  );
}
