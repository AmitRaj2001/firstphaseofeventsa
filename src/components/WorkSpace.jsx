import React, { useState , useEffect } from 'react';
import { MessageSquare, Users, CheckSquare, UserPlus, Menu } from 'lucide-react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Guests from './GuestManager';
import NewChecklist from './NewChecklist';
import SetUpTeam from '../comunications/SetUpTeam';

const Bulletins = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Bulletins</h2>
    <div className="space-y-4">
      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="font-semibold">Rita:</p>
        <p>Details of entire event decoration is here: sheets.google.com/xxxxx</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
        <p className="font-semibold">Mita:</p>
        <p>Baraat ceremony has started. Send all guests to gate 1!</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <p className="font-semibold">Mita:</p>
        <p>Bride's father has requested a red ribbon.</p>
      </div>
      <div className="bg-purple-100 p-4 rounded-lg">
        <p className="font-semibold">Rita:</p>
        <p>Update: All welcome tags are given to @Mita for distribution.</p>
      </div>
    </div>
    {/* Input Area */}
    <div className="mt-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        To: Everyone
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          name="message"
          id="message"
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type your message here..."
        />
        <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Send
        </button>
      </div>
    </div>
  </div>
);

const Teams = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Teams</h2>
    <p>Team management and collaboration tools will be available here.</p>
  </div>
);
export default function Component() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { eventName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveSection = () => {
    const path = location.pathname.split('/');
    return path[path.length - 1] || 'bulletins';
  };

  const [activeSection, setActiveSection] = useState(getActiveSection());

  useEffect(() => {
    setActiveSection(getActiveSection());
  }, [location]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    navigate(`/workspace/${encodeURIComponent(eventName)}/${section}`);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'bulletins':
        return <Bulletins />;
      case 'guests':
        return <Guests />;
      case 'newchecklist':
        return <NewChecklist />;
      case 'teams':
        return <Teams />;
      case 'communications':
        return <SetUpTeam />;
      default:
        return <Bulletins />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Hamburger Menu Button (Mobile View) */}
      <button
        className="md:hidden p-2 fixed top-4 left-4 z-20 text-gray-600 bg-transparent hover:text-black focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
      >
        <h1 className="text-2xl font-bold mb-8">Event: {eventName}</h1>
        <nav className="space-y-2">
          <button
            className={`w-full text-left py-2 px-4 rounded ${
              activeSection === 'bulletins' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleSectionChange('bulletins')}
          >
            <MessageSquare className="inline-block mr-2" size={18} /> Bulletins
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded ${
              activeSection === 'guests' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleSectionChange('guests')}
          >
            <Users className="inline-block mr-2" size={18} /> Guests
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded ${
              activeSection === 'newchecklist' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleSectionChange('newchecklist')}
          >
            <CheckSquare className="inline-block mr-2" size={18} /> Checklists
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded ${
              activeSection === 'teams' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleSectionChange('teams')}
          >
            <UserPlus className="inline-block mr-2" size={18} /> Teams
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded ${
              activeSection === 'communications' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleSectionChange('communications')}
          >
            <MessageSquare className="inline-block mr-2" size={18} /> Communications
          </button>
        </nav>
      </div>

      {/* Overlay when sidebar is open (for mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p>Your workspace has been created successfully!</p>
        </div>
        <h2 className="text-3xl font-bold mb-6">{eventName}</h2>
        {renderSection()}
      </div>
    </div>
  );
}