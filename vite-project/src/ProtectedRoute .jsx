import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return React.cloneElement(element, rest);  // Esto renderiza el elemento con las props adicionales
};

export default ProtectedRoute;
