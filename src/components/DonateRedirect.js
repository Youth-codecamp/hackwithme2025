import React, { useEffect } from 'react';
import './RegisterRedirect.css';

function DonateRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://hcb.hackclub.com/donations/start/youth-code-camp';
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="redirect-page">
      <div className="loader">
        <span>Redirecting...</span>
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default DonateRedirect;
