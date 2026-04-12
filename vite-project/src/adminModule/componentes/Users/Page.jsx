import  { useState, useEffect } from 'react';
import { LogOut, ChevronRight} from 'lucide-react';

export default function AxiaDashboard() {
  const [user, setUser] = useState({ name: 'Carlos Mendoza', email: 'carlos@axia.com.co' });
  const [userRole, setUserRole] = useState('SUPERADMIN');
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
    const userData = sessionStorage.getItem('user');
    if (userData) {
      const parsed = JSON.parse(userData);
      setUser(parsed);
      if (parsed.roles?.length > 0) setUserRole(parsed.roles[0]);
    }
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('user');
    window.location.href = '/admin';
  };

  const allModules = [
    {
      id: 1, title: 'Gestión de Usuarios',
      description: 'Administra usuarios, roles y permisos del sistema de forma centralizada.',
      path: '/dashboard/users', requiredRoles: ['SUPERADMIN', 'ADMIN'],
 
    },
    {
      id: 2, title: 'Planes Financieros',
      description: 'Información levantamiento información de planes financieros.',
      path: '/dashboard/clientes', requiredRoles: null,
    },
    {
      id: 3, title: 'Mini-Plan Financiero',
      description: 'Gestiona mini planes simplificados para clientes nuevos.',
  
      path: '/mini-planes', requiredRoles: null,
    
    },
  ];

  const modules = allModules.filter(m => !m.requiredRoles || m.requiredRoles.includes(userRole));

  const formatTime = (d) => d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  const formatDate = (d) => d.toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  

  const roleLabels = { SUPERADMIN: 'Super Admin', ADMIN: 'Administrador', USER: 'Usuario' };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        html, body { background: #f5f5f3 !important; min-height: 100%; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f0f0ee; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes live {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .axia-nav {
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          transition: color 0.2s;
          cursor: pointer;
        }
        .axia-nav:hover { color: #06175C; }
        .axia-nav.active { color: #06175C; font-weight: 500; }

        /* Stat cards — blue gradient */
        .axia-stat {
          background: linear-gradient(135deg, #06175C 0%, #2a0845 100%);
          border-radius: 4px;
          padding: 26px 28px;
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .axia-stat::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 100px; height: 100px;
          background: rgba(255,255,255,0.04);
          border-radius: 50%;
        }
        .axia-stat::after {
          content: '';
          position: absolute;
          bottom: -40px; left: 20px;
          width: 120px; height: 120px;
          background: rgba(255,255,255,0.03);
          border-radius: 50%;
        }
        .axia-stat:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(6,23,92,0.3);
        }

        /* Module cards — white */
        .axia-card {
          background: white;
          border: 1px solid #e9eaf0;
          border-radius: 4px;
          padding: 36px 32px;
          cursor: pointer;
          transition: all 0.32s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .axia-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #06175C, #2a0845, #6441A5);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1);
        }
        .axia-card:hover::before { transform: scaleX(1); }
        .axia-card:hover {
          border-color: rgba(6,23,92,0.12);
          transform: translateY(-5px);
          box-shadow: 0 20px 56px rgba(6,23,92,0.1);
        }

        .axia-icon-box {
          width: 46px; height: 46px;
          background: linear-gradient(135deg, #06175C 0%, #2a0845 100%);
          border-radius: 3px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .axia-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #06175C;
          font-weight: 500;
          transition: gap 0.2s;
        }
        .axia-card:hover .axia-cta { gap: 11px; }

        .axia-logout {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          background: transparent;
          border: 1px solid #e5e7eb;
          border-radius: 100px;
          color: #9ca3af;
          cursor: pointer;
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.2s;
        }
        .axia-logout:hover {
          border-color: #fecaca;
          color: #ef4444;
          background: #fef2f2;
        }

        /* Blue header chip for user role */
        .role-chip {
          font-size: 9px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #06175C, #2a0845);
          color: rgba(255,255,255,0.85);
          padding: 2px 8px;
          border-radius: 100px;
        }
      `}</style>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Outfit', sans-serif", background: '#f5f5f3' }}>

        {/* ── HEADER ── */}
        <header style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(245,245,243,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #e9eaf0',
          animation: 'slideDown 0.4s ease forwards',
        }}>
          <div style={{ width: '80vw', margin: '0 auto', height: '66px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '3px', height: '28px', background: 'linear-gradient(180deg, #06175C, #6441A5)', borderRadius: '2px' }} />
              <div>
                <div style={{ fontSize: '18px', fontWeight: '500', color: '#06175C', letterSpacing: '-0.03em', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>
                  Axia Finanzas
                </div>
                <div style={{ fontSize: '9px', color: '#9ca3af', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace", marginTop: '3px' }}>
                  Panel Administrativo
                </div>
              </div>
            </div>

           

            {/* Right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                
               
              </div>

              <div style={{ width: '1px', height: '20px', background: '#e9eaf0' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Avatar with gradient */}
                <div style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06175C, #6441A5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: '600', color: 'white',
                  boxShadow: '0 4px 12px rgba(6,23,92,0.3)',
                }}>
                  {(user?.name || 'A')[0].toUpperCase()}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '500', color: '#111827', lineHeight: 1.2, fontFamily: "'Outfit', sans-serif" }}>
                    {user?.name || 'Administrador'}
                  </div>
                  <div className="role-chip" style={{ display: 'inline-block', marginTop: '3px' }}>
                    {roleLabels[userRole] || userRole}
                  </div>
                </div>
              </div>

              <button className="axia-logout" onClick={handleLogout}>
                <LogOut size={11} /> Salir
              </button>
            </div>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main style={{ flex: 1, width: '80vw', margin: '0 auto', padding: '52px 0 72px' }}>

          {/* Page title */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: '40px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(18px)',
            transition: 'all 0.55s cubic-bezier(0.22,1,0.36,1)',
          }}>
            <div>
              <p style={{ fontSize: '10px', color: '#9ca3af', fontFamily: "'DM Mono', monospace", letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Bienvenido de vuelta
              </p>
              <h1 style={{ fontSize: 'clamp(30px,3.2vw,48px)', fontWeight: '400', color: '#06175C', letterSpacing: '-0.03em', lineHeight: 1.05, fontFamily: "'Cormorant Garamond', serif" }}>
                {user?.name?.split(' ')[0] || 'APPS'}
                <span style={{ background: 'linear-gradient(90deg, #06175C, #6441A5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.</span>
              </h1>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '26px', fontWeight: '300', color: '#374151', fontFamily: "'DM Mono', monospace", letterSpacing: '0.06em', lineHeight: 1 }}>
                {formatTime(time)}
              </div>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '6px', textTransform: 'capitalize', letterSpacing: '0.03em' }}>
                {formatDate(time)}
              </div>
            </div>
          </div>

    
      

          {/* Section label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px',
            opacity: mounted ? 1 : 0, transition: 'opacity 0.5s ease 0.22s',
          }}>
            <span style={{ fontSize: '9px', color: '#9ca3af', fontFamily: "'DM Mono', monospace", letterSpacing: '0.16em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Módulos — {modules.length} disponibles
            </span>
            <div style={{ flex: 1, height: '1px', background: '#e9eaf0' }} />
          </div>

          {/* ── MODULE CARDS — white ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: '14px' }}>
            {modules.map((module, i) => {
             
              return (
                <div
                  key={module.id}
                  className="axia-card"
                  onClick={() => { window.location.href = module.path; }}
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'none' : 'translateY(24px)',
                    transition: `all 0.55s cubic-bezier(0.22,1,0.36,1) ${0.28 + i * 0.09}s`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                   
                   
                  </div>

                  <h3 style={{ fontSize: '21px', fontWeight: '500', color: '#111827', marginBottom: '10px', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.3 }}>
                    {module.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.75', marginBottom: '32px', fontWeight: '400' }}>
                    {module.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid #f3f4f6' }}>
                    <span className="axia-cta">
                      Acceder <ChevronRight size={12} strokeWidth={2.2} />
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e' }} />
                      <span style={{ fontSize: '10px', color: '#9ca3af', fontFamily: "'DM Mono', monospace" }}>Activo</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {modules.length === 0 && (
            <div style={{ textAlign: 'center', padding: '72px 20px', background: 'white', border: '1px solid #e9eaf0', borderRadius: '4px', marginTop: '14px' }}>
              <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg,#06175C,#6441A5)', borderRadius: '2px', margin: '0 auto 20px' }} />
              <p style={{ fontSize: '15px', color: '#6b7280', fontWeight: '400', marginBottom: '8px', fontFamily: "'Cormorant Garamond', serif" }}>Sin módulos disponibles</p>
              <p style={{ fontSize: '11px', color: '#9ca3af', fontFamily: "'DM Mono', monospace" }}>Contacta al administrador para solicitar permisos</p>
            </div>
          )}
        </main>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: '1px solid #e9eaf0', padding: '20px 0', background: 'white' }}>
          <div style={{ width: '80vw', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '2px', height: '14px', background: 'linear-gradient(180deg,#06175C,#6441A5)', borderRadius: '2px' }} />
              <span style={{ fontSize: '10px', color: '#9ca3af', fontFamily: "'DM Mono', monospace" }}>© 2025 Axia Finanzas</span>
            </div>
            <span style={{ fontSize: '10px', color: '#d1d5db', fontFamily: "'DM Mono', monospace" }}>v1 — Todos los derechos reservados</span>
          </div>
        </footer>
      </div>
    </>
  );
}