// src/utils/authFetch.js

async function refreshTokens() {
    const refreshToken = sessionStorage.getItem('refreshToken');
    
    const response = await fetch('https://authsystem-wimn.onrender.com/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken })
    });
  
    if (!response.ok) {
      // Refresh también falló → mandar al login
      sessionStorage.clear();
      window.location.href = '/';
      return null;
    }
  
    const data = await response.json();
    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('refreshToken', data.refreshToken);
    return data.accessToken;
  }
  
  export async function authFetch(url, options = {}) {
    const token = sessionStorage.getItem('authToken');
  
    // Agrega el token a los headers
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers
      }
    });
  
    // Si recibe 401, intenta refrescar
    if (response.status === 401) {
      const newToken = await refreshTokens();
      if (!newToken) return; // ya redirigió al login
  
      // Reintenta el request original con el nuevo token
      return fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newToken}`,
          ...options.headers
        }
      });
    }
  
    return response;
  }