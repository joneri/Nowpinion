import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BetTypeSelector from '../components/BetTypeSelector';
import RaceDetails from '../components/RaceDetails';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<BetTypeSelector />} />
          <Route path="/race-details" element={<RaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;