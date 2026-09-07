import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
  const token = sessionStorage.getItem('authToken');
  return token ? <Navigate to="/dashboard" replace /> : element;
};

export default PublicRoute;