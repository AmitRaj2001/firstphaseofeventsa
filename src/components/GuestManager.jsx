import React, { useState, useRef } from 'react';
import { Upload, UserPlus } from 'lucide-react';
import * as XLSX from 'xlsx';

export default function GuestManager() {
  const [guests, setGuests] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isAddGuestModalOpen, setIsAddGuestModalOpen] = useState(false);
  const [newGuest, setNewGuest] = useState({});
  const fileInputRef = useRef(null);

  const handleAddGuest = (e) => {
    e.preventDefault();
    if (Object.keys(newGuest).length > 0) {
      setGuests([...guests, { id: guests.length + 1, ...newGuest }]);
    }
    setNewGuest({});
    setIsAddGuestModalOpen(false);
  };

  const handleUploadExcel = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const binaryString = evt.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      const headers = data[0];
      setColumns(headers);
      
      const rows = data.slice(1).map((row, index) => {
        const guest = { id: index + 1 };
        headers.forEach((header, i) => {
          guest[header] = row[i] || '';
        });
        return guest;
      });
      
      setGuests(rows);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="w-full max-w-full p-0"> {/* Removed padding from the container */}
      {/* Upload and Add Guest Buttons */}
      <div className="flex justify-end mb-0 space-x-1">
        {/* Hidden input for Excel file upload */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleUploadExcel}
          accept=".xlsx, .xls"
          className="hidden"
        />
        {/* Upload Excel Button */}
        <button
          onClick={() => fileInputRef.current.click()}
          className="flex items-center px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-xs"
        >
          <Upload size={16} className="mr-2" />
          Upload Excel
        </button>
        {/* Add Guest Button */}
        <button
          onClick={() => setIsAddGuestModalOpen(true)}
          className="flex items-center px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-xs"
        >
          <UserPlus size={16} className="mr-2" />
          Add Guest
        </button>
      </div>

      {/* Guest List Table */}
      {guests.length > 0 && (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-xs text-left"> {/* Full-width table */}
            <thead className="text-xxs uppercase bg-gray-100">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} className="px-1 py-1">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr key={guest.id} className="bg-white even:bg-gray-50">
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-1 py-1">{guest[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Guest Modal */}
      {isAddGuestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-md mx-4">
            <h2 className="text-lg font-bold mb-4">Add New Guest</h2>
            <form onSubmit={handleAddGuest}>
              {columns.map((column, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={column}
                  value={newGuest[column] || ''}
                  onChange={(e) => setNewGuest({ ...newGuest, [column]: e.target.value })}
                  className="w-full p-1 mb-2 text-xs border rounded"
                />
              ))}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddGuestModalOpen(false)}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-xs"
                >
                  Add Guest
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
