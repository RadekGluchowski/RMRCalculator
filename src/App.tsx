import React from 'react';
import Footer from "./Components/Footer/Footer";
import './App.css';
import Dashboard from './Layout/Dashboard/Dashboard';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
