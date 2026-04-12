import React, { useState } from 'react';
import {  ArrowRight, AlertCircle } from 'lucide-react';

export default function AxiaAdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Agregar clase al body y html cuando el componente se monta
  React.useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById('root');
    
    html.classList.add('login-active');
    body.classList.add('login-active');
    if (root) {
      root.classList.add('login-active');
    }
    
    return () => {
      html.classList.remove('login-active');
      body.classList.remove('login-active');
      if (root) {
        root.classList.remove('login-active');
      }
    };
  }, []);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      });
    
      let data;
    
      try {
        data = await response.json();
      } catch {
        data = null;
      }
    
      // IMPORTANTE: verificar status HTTP
      if (!response.ok) {
        setError(data?.message || 'Credenciales incorrectas');
        return;
      }
    
      console.log(data);
    
      if (data.tokens?.accessToken) {
    
        sessionStorage.setItem('authToken', data.tokens.accessToken);
        sessionStorage.setItem('user', JSON.stringify(data.user));
        sessionStorage.setItem('refreshToken', data.tokens.refreshToken);
    
        window.location.href = '/dashboard';
    
      } else {
    
        setError(data?.message || 'Error al iniciar sesión');
    
      }
    
    } catch (err) {
    
      console.error('Error real:', err);
    
      setError('No se pudo conectar con el servidor');
    
    } finally {
    
      setIsLoading(false);
    
    }
  }    

  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      overflow: 'auto',
      background: 'linear-gradient(135deg, rgb(2,3,129) 0%, rgb(40,116,252) 100%)',
      zIndex: 999999,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    leftPanel: {
      display: 'none',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem',
      position: 'relative',
      overflow: 'hidden'
    },
    leftPanelDesktop: {
      display: 'flex'
    },
    brandingContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '28rem'
    },
    brandLine: {
      width: '4rem',
      height: '0.25rem',
      background: 'white',
      marginBottom: '3rem'
    },
    brandTitle: {
      fontSize: '3.75rem',
      fontWeight: '300',
      color: 'white',
      marginBottom: '1.5rem',
      letterSpacing: '-0.025em',
      lineHeight: '1.1'
    },
    brandSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.8)',
      fontWeight: '300',
      lineHeight: '1.75'
    },
    rightPanel: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'white',
      position: 'relative',
      zIndex: 1000000
    },
    rightPanelDesktop: {
      width: '50%'
    },
    formContainer: {
      width: '100%',
      maxWidth: '28rem',
      position: 'relative'
    },
    mobileLogo: {
      marginBottom: '3rem',
      position: 'relative'
    },
    mobileLogoTitle: {
      fontSize: '1.875rem',
      fontWeight: '300',
      marginBottom: '0.5rem',
      color: 'rgb(2,3,129)'
    },
    mobileLogoLine: {
      width: '3rem',
      height: '0.125rem',
      background: 'rgb(40,116,252)'
    },
    formHeader: {
      marginBottom: '3rem',
      position: 'relative'
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: '#111827',
      marginBottom: '0.5rem'
    },
    formSubtitle: {
      fontSize: '0.875rem',
      color: '#6B7280',
      fontWeight: '300'
    },
    errorAlert: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem',
      background: '#FEF2F2',
      border: '1px solid #FEE2E2',
      borderRadius: '0.375rem',
      marginBottom: '1.5rem'
    },
    errorIcon: {
      color: '#DC2626',
      flexShrink: 0
    },
    errorText: {
      fontSize: '0.875rem',
      color: '#DC2626',
      fontWeight: '400'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      position: 'relative',
      width: '100%'
    },
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '100%'
    },
    label: {
      display: 'block',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#4B5563',
      marginBottom: '0.75rem',
      fontWeight: '500',
      position: 'relative',
      width: '100%'
    },
    input: {
      width: '100%',
      padding: '0.75rem 0',
      background: 'transparent',
      border: 'none',
      borderBottom: '2px solid #E5E7EB',
      color: '#111827',
      fontSize: '1rem',
      fontWeight: '300',
      outline: 'none',
      transition: 'border-color 0.3s',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    inputFocus: {
      borderBottomColor: '#111827'
    },
    passwordContainer: {
      position: 'relative'
    },
    passwordInput: {
      paddingRight: '2.5rem'
    },
    eyeButton: {
      position: 'absolute',
      right: 0,
      top: '0.75rem',
      background: 'none',
      border: 'none',
      color: '#9CA3AF',
      cursor: 'pointer',
      padding: 0,
      transition: 'color 0.2s'
    },
    rememberRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '0.5rem'
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      gap: '0.75rem'
    },
    checkbox: {
      width: '1rem',
      height: '1rem',
      border: '2px solid #D1D5DB',
      borderRadius: '0.125rem',
      cursor: 'pointer',
      accentColor: 'rgb(2,3,129)'
    },
    checkboxText: {
      fontSize: '0.875rem',
      color: '#6B7280',
      fontWeight: '300'
    },
    forgotLink: {
      fontSize: '0.875rem',
      color: '#6B7280',
      fontWeight: '300',
      textDecoration: 'none',
      transition: 'color 0.2s'
    },
    submitButton: {
      width: '100%',
      padding: '1rem',
      color: 'white',
      fontWeight: '300',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.3s',
      marginTop: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    footer: {
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid #F3F4F6',
      textAlign: 'center'
    },
    footerText: {
      fontSize: '0.75rem',
      color: '#9CA3AF',
      fontWeight: '300'
    },
    footerLink: {
      color: '#6B7280',
      textDecoration: 'none',
      transition: 'color 0.2s'
    }
  };

  const [buttonBg, setButtonBg] = useState('rgb(2,3,129)');

  return (
    <div style={styles.container}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      
      {/* Left side - Branding */}
      <div style={{...styles.leftPanel, ...(window.innerWidth >= 1024 ? styles.leftPanelDesktop : {})}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '24rem',
          height: '24rem',
          background: 'white',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.1,
          transform: 'translate(-50%, -50%)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '24rem',
          height: '24rem',
          background: 'white',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.1,
          transform: 'translate(50%, 50%)'
        }}></div>
      </div>

      {/* Right side - Login Form */}
      <div style={{...styles.rightPanel, ...(window.innerWidth >= 1024 ? styles.rightPanelDesktop : {})}}>
        <div style={styles.formContainer}>
          {/* Mobile logo */}
          {window.innerWidth < 1024 && (
            <div style={styles.mobileLogo}>
              <h1 style={styles.mobileLogoTitle}>Axia Finanzas</h1>
              <div style={styles.mobileLogoLine}></div>
            </div>
          )}

          {/* Form header */}
          <div style={styles.formHeader}>
            <h2 style={styles.formTitle}>Iniciar Sesión</h2>
            <p style={styles.formSubtitle}>Accede a tu panel administrativo</p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Error message */}
            {error && (
              <div style={styles.errorAlert}>
                <AlertCircle size={20} style={styles.errorIcon} />
                <span style={styles.errorText}>{error}</span>
              </div>
            )}

            {/* Email field */}
            <div style={styles.fieldGroup}>
              <label htmlFor="email" style={styles.label}>
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="admin@axia.com.co"
                required
                onFocus={(e) => e.target.style.borderBottomColor = '#111827'}
                onBlur={(e) => e.target.style.borderBottomColor = '#E5E7EB'}
              />
            </div>

            {/* Password field */}
            <div style={styles.fieldGroup}>
              <label htmlFor="password" style={styles.label}>
                Contraseña
              </label>
              <div style={styles.passwordContainer}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{...styles.input, ...styles.passwordInput}}
                  placeholder="••••••••"
                  required
                  onFocus={(e) => e.target.style.borderBottomColor = '#111827'}
                  onBlur={(e) => e.target.style.borderBottomColor = '#E5E7EB'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                  onMouseEnter={(e) => e.target.style.color = '#111827'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                
                </button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div style={styles.rememberRow}>
              <label style={styles.checkboxLabel}>
              
              </label>
              <a 
                href="#" 
                style={styles.forgotLink}
                onMouseEnter={(e) => e.target.style.color = '#111827'}
                onMouseLeave={(e) => e.target.style.color = '#6B7280'}
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{...styles.submitButton, background: buttonBg, opacity: isLoading ? 0.5 : 1}}
              onMouseEnter={() => !isLoading && setButtonBg('rgb(40,116,252)')}
              onMouseLeave={() => setButtonBg('rgb(2,3,129)')}
            >
              {isLoading ? (
                <>
                  <div style={{
                    width: '1rem',
                    height: '1rem',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1.2s linear infinite'
                  }}></div>
                  Verificando
                </>
              ) : (
                <>
                  Iniciar Sesión
                  <ArrowRight size={16} strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              ¿Necesitas ayuda?{' '}
              <a 
                href="mailto:info@axia.com.co" 
                style={styles.footerLink}
                onMouseEnter={(e) => e.target.style.color = '#111827'}
                onMouseLeave={(e) => e.target.style.color = '#6B7280'}
              >
                Contacta soporte
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}