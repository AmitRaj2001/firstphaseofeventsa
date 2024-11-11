import React from 'react';
import { Button } from "../components/ui/Button"

export default function MessageStatus() {
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
      <p className="mb-4 text-lg">Sent message to 198 people.</p>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Delivery Status:</h2>
        <ul className="list-disc list-inside">
          <li>read</li>
          <li>viewed</li>
          <li>delivered</li>
          <li>not delivered</li>
        </ul>
      </div>
      <Button variant="outline">Back</Button>
    </div>
  );
}