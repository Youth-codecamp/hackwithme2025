import React, { useEffect } from 'react';
import './RegisterRedirect.css';

function RegisterRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://lu.ma/b7vrg6t4';
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

export default RegisterRedirect;
