import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import CourseExplorer from './components/CourseExplorer';
import Classroom from './components/Classroom';
import AIDoubtSolver from './components/AIDoubtSolver';
import Progress from './components/Progress';
import CareerPlanner from './components/CareerPlanner';
import Community from './components/Community';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white font-inter">
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#FFFFFF',
              border: '1px solid #00FF87',
            },
          }}
        />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={
            <>
              <Navbar />
              <Dashboard />
            </>
          } />
          <Route path="/courses" element={
            <>
              <Navbar />
              <CourseExplorer />
            </>
          } />
          <Route path="/classroom/:courseId" element={
            <>
              <Navbar />
              <Classroom />
            </>
          } />
          <Route path="/ai-tutor" element={
            <>
              <Navbar />
              <AIDoubtSolver />
            </>
          } />
          <Route path="/progress" element={
            <>
              <Navbar />
              <Progress />
            </>
          } />
          <Route path="/career" element={
            <>
              <Navbar />
              <CareerPlanner />
            </>
          } />
          <Route path="/community" element={
            <>
              <Navbar />
              <Community />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;