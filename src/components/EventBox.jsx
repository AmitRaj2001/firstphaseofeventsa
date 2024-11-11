import React from "react";
import { Edit, Trash } from "lucide-react";

const EventBox = ({ event, onEdit, onDelete, onSelect }) => {
  const dateOptions = { day: "2-digit", month: "short", year: "numeric" };

  return (
    <div className="border rounded-lg p-4 w-full sm:w-60 h-60 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
        <p className="text-sm text-gray-600">
          {new Date(event.startDate).toLocaleDateString("en-GB", dateOptions)} -{" "}
          {new Date(event.endDate).toLocaleDateString("en-GB", dateOptions)}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onSelect(event)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(event)}
            className="p-1 text-blue-600 hover:bg-blue-100 rounded"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="p-1 text-red-600 hover:bg-red-100 rounded"
          >
            <Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
