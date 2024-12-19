import './App.css';
import Form from './Form';
import LoginForm from './login';
import Formregistro from './formregistro';

import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoute from './ProtectedRoute '; 

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes>
          <Route path='formulario' element={<ProtectedRoute element={<Form />} />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='/' element={<Formregistro />} />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
