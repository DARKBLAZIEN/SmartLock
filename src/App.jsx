import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';
import LockersPage from './pages/LockersPage';
import ResidentsPage from './pages/ResidentsPage';
import EventsPage from './pages/EventsPage';

function App() {
  // Simple Placeholder for Settings
  const Settings = () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p className="text-gray-500">System configuration placeholders...</p>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lockers" element={<LockersPage />} />
        <Route path="/residents" element={<ResidentsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/settings" element={<Settings />} /> {/* Inline for now */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
