// Import React and necessary libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';          // Adjust path as necessary
import HeroSection from './components/HeroSection'; // Adjust path as necessary
import EmailPage from './EmailPage';     // Adjust path as necessary
import ImpactSection from './components/ImpactSection'; // Adjust path as necessary
import Footer from './components/Footer';

// Custom component to handle conditional rendering
function LayoutWithImpact() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/email" element={<EmailPage />} />
      </Routes>

      {/* Conditionally render the ImpactSection based on the current path */}
      {location.pathname !== '/email' && <ImpactSection />}

      <Footer /> {/* Always include the Footer component */}
    </>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <LayoutWithImpact />
    </Router>
  );
}

// Export the App component
export default App;
