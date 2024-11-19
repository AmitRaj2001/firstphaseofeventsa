import React, { useState } from 'react';
import { Button } from "../components/ui/Button";
import MessageStatus from './MessageStatus';

export default function BroadcastMessage() {
  const [showMessageStatus, setShowMessageStatus] = useState(false);

  const handleSendNow = () => {
    setShowMessageStatus(true);
  };

  if (showMessageStatus) {
    return <MessageStatus />;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Event Update</h1>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p>Hey Name,</p>
        <p>Lunch will start at 1:00 pm in Banquet Hall 1.</p>
        <p>Regards,</p>
        <p>Sharma & Gupta Family.</p>
        <p className="text-sm text-gray-500">Reply STOP to unsubscribe</p>
      </div>
      <p className="mb-4 text-lg">Sending message to 198 people.</p>
      <div className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button variant="outline">Save as Draft</Button>
        <Button onClick={handleSendNow}>Send Now</Button>
      </div>
    </div>
  );
}
