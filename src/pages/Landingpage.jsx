// src/pages/LandingPage.js
import React from 'react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Management Simplified.</h1>
        <p className="text-xl text-gray-600 mb-8">
          EVENTSA makes it easy to manage real-time event operations.
        </p>
        <Button>Get Started</Button>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <FeatureCard title="Centralise event details and documents" />
          <FeatureCard title="Mark task updates and track checklists" />
          <FeatureCard title="Automate guest messaging via whatsapp" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
