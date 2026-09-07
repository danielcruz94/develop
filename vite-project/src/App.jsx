import './App.css';
import Form from './Form';
import LoginForm from './login';
import Formregistro from './formregistro';

import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoute from './ProtectedRoute '; 
import FinancialCheckup from './FinancialCheckup';

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes>
          <Route path='formulario' element={<ProtectedRoute element={<Form />} />} />
          <Route path='/' element={<LoginForm />} />
          <Route path='Formregistro' element={<Formregistro />} />
          <Route path='5-signos-vitales' element={<FinancialCheckup />} />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
