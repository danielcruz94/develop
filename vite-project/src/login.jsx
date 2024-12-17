import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setDatosMongo } from './store'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'; 
import Swal from 'sweetalert2';

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
        // Almacenar los datos del cliente en Redux
        dispatch(setDatosMongo(response.data.cliente)); 
  
        // Mostrar los datos del cliente en consola
        //console.log('Datos del cliente recibido en el login:', response.data.cliente);

        localStorage.setItem('cedula', response.data.cliente.cedula);
  
        // Comentar esta línea si no deseas redirigir a la página principal
        navigate('/formulario');
      } else {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Usuario o contraseña incorrectos',
          confirmButtonText: 'Aceptar',
        });
  
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className="login-container">
      <div className={`login-form ${shake ? 'shake' : ''}`}>
        <h2>Axia Finanzas</h2>
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
      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #06175C;
          font-family: Arial, sans-serif;
        }

        .login-form {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 300px;
          transition: transform 0.3s ease;
        }

        .login-form.shake {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .form-group {
          position: relative;
          margin-bottom: 1.5rem;
        }

        input {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #333;
          border: none;
          border-bottom: 1px solid #ddd;
          outline: none;
          background: transparent;
          transition: border-color 0.3s;
        }

        input:focus {
          border-color: #06175C;
        }

        label {
          position: absolute;
          top: 10px;
          left: 0;
          font-size: 16px;
          color: #999;
          pointer-events: none;
          transition: 0.3s ease all;
        }

        input:focus ~ label,
        label.active {
          top: -20px;
          font-size: 14px;
          color: #06175C;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #06175C;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0A1F7D;
        }

        button:disabled {
          background-color: #999;
          cursor: not-allowed;
        }

        button.loading {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default InteractiveLoginForm