import './App.css';
import Form from './Form';
import LoginForm from './login';
import Formregistro from './formregistro';

import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoute from './ProtectedRoute '; 
import AxiaAdminLogin from './adminModule/page';
import AxiaDashboard from './adminModule/componentes/Users/Page';
import PublicRoute from './adminModule/componentes/PublicRoute';
import PrivateRoute from './adminModule/componentes/PrivateRoute';
import UsersManagement from './adminModule/componentes/Users/Usuarios';
import Clientes from './adminModule/componentes/Users/Clientes';
import ClientesMiniPlan from './adminModule/componentes/Users/ClientesMiniPlan';
function App() {
  return (
    <Provider store={store}>
      <>
        <Routes>
          <Route path='formulario' element={<ProtectedRoute element={<Form />} />} />
          <Route path='/' element={<LoginForm />} />
          <Route path='Formregistro' element={<Formregistro />} />
        
          <Route 
            path='admin' 
            element={<PublicRoute element={<AxiaAdminLogin />} />} 
          />
          <Route 
            path="dashboard" 
            element={<PrivateRoute element={<AxiaDashboard />} />} 
          />

        
            <Route 
    path="dashboard/users"
    element={<PrivateRoute element={<UsersManagement />} />} 
  />
    <Route 
    path="dashboard/clientes"
    element={<PrivateRoute element={<Clientes />} />} 
  />
   <Route 
    path="dashboard/mini-planes"
    element={<PrivateRoute element={< ClientesMiniPlan />} />}
  />
          
        </Routes>
      </>
    </Provider>
  );
}

export default App;
