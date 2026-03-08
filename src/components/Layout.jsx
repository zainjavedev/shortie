import React from 'react';
import Navbar from './Navbar';
import LeadPopup from './LeadPopup';

const Layout = ({ children, className = '', showPopup = true }) => (
  <div className={`page ${className}`}>
    <Navbar />
    {showPopup && <LeadPopup />}
    {children}
  </div>
);

export default Layout;
