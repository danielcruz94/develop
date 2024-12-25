import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setDatosMongo } from './store'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'; 
import Swal from 'sweetalert2';
import './login.css';
const InteractiveLoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [shake, setShake] = useState(false)

  const serverURL = useSelector(state => state.serverURL.serverURL);

  const dispatch = useDispatch();  
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    setShake(false);
  
    const serverUrl = `${serverURL}login`; // URL de tu servidor
  
    try {
      const response = await axios.post(serverUrl, {
        username,  
        password,  
      });
  
      if (response.data.valid) {
   
        dispatch(setDatosMongo(response.data.cliente));        
        localStorage.setItem('cedula', response.data.cedula);
        localStorage.setItem('authToken', response.data.token);
  
        navigate('/formulario');
      } else {       
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    } catch (error) {
          Swal.fire({
            icon: "warning",
            text: 'Usuario o contraseña incorrectos',
            confirmButtonText: 'Aceptar',
          });
      console.error('Error en la solicitud:', error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className="login-container">
        <img src="axia-logo.png" alt="logo" />
      <div className={`login-form ${shake ? 'shake' : ''}`}>        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username" className={username ? 'active' : ''}>
              Correo
            </label>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password" className={password ? 'active' : ''}>
              Contraseña
            </label>
          </div>
          <button type="submit" className={isLoading ? 'loading' : ''} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    
    </div>
  )
}

export default InteractiveLoginForm