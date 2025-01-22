import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Branches from './pages/Branches';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;