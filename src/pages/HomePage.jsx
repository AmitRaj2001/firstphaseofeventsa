import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation
import Navbar from "../components/Navbar";
import EventBox from "../components/EventBox";
import EventForm from '../components/EventForm'; 

const HomePage = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "SIDKIARA", startDate: "2023-10-20", endDate: "2023-10-22" },
  ]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate(); // Use navigate for URL change

 

  const handleAddEvent = () => {
    setEditingEvent(null);
    setShowEventForm(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowEventForm(true);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setSuccessMessage("Event deleted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleEventSubmit = (eventData) => {
    if (editingEvent) {
      setEvents(
        events.map((event) => (event.id === eventData.id ? eventData : event))
      );
      setSuccessMessage("Event updated successfully!");
    } else {
      setEvents([...events, eventData]);
      setSuccessMessage("New event created successfully!");
    }
    setShowEventForm(false);
    setEditingEvent(null);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    navigate(`/workspace/${encodeURIComponent(event.name)}`);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto p-4">
          {successMessage && (
            <div
              className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4"
              role="alert"
            >
              <p>{successMessage}</p>
            </div>
          )}
          <h1 className="text-2xl font-semibold mb-4">Your Events</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <EventBox
                key={event.id} 
                event={event}
                onEdit={handleEditEvent}
                onDelete={handleDeleteEvent}
                onSelect={handleSelectEvent}
              />
            ))}
            <div
              className="border rounded-lg p-4 w-full sm:w-60 h-60 flex items-center justify-center cursor-pointer hover:bg-gray-50"
              onClick={handleAddEvent}
            >
              <Plus size={24} className="text-gray-400" />
            </div>
          </div>
          {showEventForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4">
              <EventForm
                event={editingEvent}
                onSubmit={handleEventSubmit}
                onCancel={() => setShowEventForm(false)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
