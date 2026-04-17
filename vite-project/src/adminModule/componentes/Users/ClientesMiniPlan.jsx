/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {
  Search, Download, User, Mail, Phone,
  Building, ChevronLeft, ChevronDown, X, AlertCircle,
  TrendingUp, Target, Shield
} from 'lucide-react';
import { authFetch } from '../../utils/auth.fetch';
import './Clientes.css';

const API_URL = 'https://server-axia-eosin.vercel.app/api/ClienteAxias';

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
}

const fmt = (n) =>
  n != null && n !== 0
    ? new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(n)
    : '—';

const fmtDate = (d) => {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });
};

const calcAge = (nacimiento) => {
  if (!nacimiento) return null;
  const diff = Date.now() - new Date(nacimiento).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

const siNo = (val) => {
  if (val === 'Sí' || val === 'Si') return true;
  if (val === 'No') return false;
  return null;
};

const getInitialGrad = (name) => {
  const grads = [
    'linear-gradient(135deg,#06175C,#2a0845)',
    'linear-gradient(135deg,#06175C,#6441A5)',
    'linear-gradient(135deg,#2a0845,#6441A5)',
    'linear-gradient(135deg,#1d4ed8,#06175C)',
    'linear-gradient(135deg,#6441A5,#06175C)',
  ];
  return grads[((name || 'A').charCodeAt(0)) % grads.length];
};

const SeguroBadge = ({ label, value }) => {
  const active = siNo(value);
  if (active === null) return null;
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '9px',
      padding: '2px 6px',
      borderRadius: '100px',
      fontFamily: "'DM Mono', monospace",
      letterSpacing: '0.05em',
      background: active ? '#dcfce7' : '#fee2e2',
      color: active ? '#15803d' : '#b91c1c',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  );
};

export default function ClientesMiniPlan() {
  const width     = useWindowWidth();
  const isMobile  = width < 640;
  const isDesktop = width >= 1024;

  const [clientes, setClientes]         = useState([]);
  const [loading, setLoading]           = useState(true);
  const [searchTerm, setSearchTerm]     = useState('');
  const [filteredClientes, setFiltered] = useState([]);
  const [mounted, setMounted]           = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await authFetch(API_URL);
      const data = await response.json();
      const list = (data.data || data).slice().reverse();
      setClientes(list);
      setFiltered(list);
    } catch (error) {
      console.error('Error al cargar mini-planes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFiltered(
      clientes.filter(c =>
        c.nombre?.toLowerCase().includes(term) ||
        c.email?.toLowerCase().includes(term) ||
        c.celular?.includes(term) ||
        c.empresa?.toLowerCase().includes(term)
      )
    );
  }, [searchTerm, clientes]);

  const exportToCSV = () => {
    const headers = ['Nombre', 'Email', 'Celular', 'Empresa', 'Cargo', 'AFP', 'Semanas', 'Ingreso Neto', 'Ahorro', 'Deuda', 'Recomendado por'];
    const rows = filteredClientes.map(c => [
      c.nombre, c.email, c.celular, c.empresa, c.cargo,
      c.afp, c.semanasCotizadas,
      c.ingresoNetoMensual, c.ahorroMensual, c.deuda,
      c.recomendadoPor,
    ]);
    const csv  = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = window.URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url;
    a.download = `mini_planes_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  /* ── MOBILE CARD ── */
  const MobileCard = ({ cliente, idx }) => {
    const isOpen = expandedCard === cliente.id;
    const age    = calcAge(cliente.nacimiento);
    return (
      <div
        className={`ct-card ${isOpen ? 'ct-card--open' : 'ct-card--closed'}`}
        style={{ animationDelay: `${idx * 0.03}s` }}
      >
        {isOpen && <div className="ct-card-accent" />}
        <div className="ct-card-header" onClick={() => setExpandedCard(isOpen ? null : cliente.id)}>
          <div className="ct-avatar ct-avatar--lg" style={{ background: getInitialGrad(cliente.nombre) }}>
            {(cliente.nombre || '?')[0].toUpperCase()}
          </div>
          <div className="ct-card-info">
            <div className="ct-card-name">{cliente.nombre}</div>
            <div className="ct-card-meta">{cliente.empresa} · {age ? `${age} años` : fmtDate(cliente.nacimiento)}</div>
          </div>
          {cliente.ingresoNetoMensual > 0 && (
            <div className="ct-card-currency">
              <div className="ct-card-currency-value">{fmt(cliente.ingresoNetoMensual)}</div>
              <div className="ct-card-currency-label">ingreso/mes</div>
            </div>
          )}
          <ChevronDown size={14} className={`ct-card-chevron ${isOpen ? 'ct-card-chevron--open' : ''}`} />
        </div>

        {isOpen && (
          <div className="ct-card-body">
            {[
              { icon: <Mail size={12} />,     label: 'Email',     value: cliente.email },
              { icon: <Phone size={12} />,    label: 'Celular',   value: cliente.celular },
              { icon: <Building size={12} />, label: 'Empresa',   value: cliente.empresa },
              { icon: <User size={12} />,     label: 'Cargo',     value: cliente.cargo },
              { icon: <Shield size={12} />,   label: 'AFP',       value: `${cliente.afp}${cliente.semanasCotizadas ? ` · ${cliente.semanasCotizadas} sem.` : ''}` },
              { icon: <TrendingUp size={12} />, label: 'Pensión', value: cliente.montoPension > 0 ? `${fmt(cliente.montoPension)} a los ${cliente.edadPension} años` : null },
              { icon: <TrendingUp size={12} />, label: 'Ahorro',  value: cliente.ahorroMensual > 0 ? fmt(cliente.ahorroMensual) : null },
              { icon: <TrendingUp size={12} />, label: 'Deuda',   value: cliente.deuda > 0 ? fmt(cliente.deuda) : null },
              { icon: <User size={12} />,     label: 'Referido',  value: cliente.recomendadoPor },
            ].map((row, i) => row.value ? (
              <div key={i} className="ct-card-row">
                <div className="ct-card-row-icon">{row.icon}</div>
                <div className="ct-card-row-text">
                  <div className="ct-card-row-label">{row.label}</div>
                  <div className="ct-card-row-value">{row.value}</div>
                </div>
              </div>
            ) : null)}

            {cliente.objetivos?.length > 0 && (
              <div className="ct-card-row">
                <div className="ct-card-row-icon"><Target size={12} /></div>
                <div className="ct-card-row-text">
                  <div className="ct-card-row-label">Objetivos</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                    {cliente.objetivos.map((o, i) => (
                      <span key={i} style={{
                        fontSize: '9px', padding: '2px 6px', borderRadius: '100px',
                        background: '#eff6ff', color: '#1d4ed8',
                        fontFamily: "'DM Mono', monospace",
                      }}>{o}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '8px 0 4px' }}>
              <SeguroBadge label="Vida" value={cliente.seguroVida} />
              <SeguroBadge label="Incapacidad" value={cliente.seguroIncapacidad} />
              <SeguroBadge label="Salud" value={cliente.polizaSalud} />
              <SeguroBadge label="Emergencias" value={cliente.fondoEmergencia} />
              <SeguroBadge label="Hijos dep." value={cliente.tieneHijosDependientes} />
            </div>
          </div>
        )}
      </div>
    );
  };

  /* ── TABLET ROW ── */
  const TabletRow = ({ cliente, idx }) => (
    <div className="ct-tablet-row" style={{ animationName: 'rowIn', animationDuration: '0.3s', animationTimingFunction: 'ease', animationDelay: `${idx * 0.025}s`, animationFillMode: 'both' }}>
      <div className="ct-tablet-name-group">
        <div className="ct-avatar ct-avatar--sm" style={{ background: getInitialGrad(cliente.nombre) }}>
          {(cliente.nombre || '?')[0].toUpperCase()}
        </div>
        <div className="ct-tablet-name-text">
          <div className="ct-tablet-name">{cliente.nombre}</div>
          <div className="ct-tablet-cedula">{cliente.empresa}</div>
        </div>
      </div>
      <div className="ct-tablet-email">{cliente.email}</div>
      <div className={`ct-currency ${cliente.ingresoNetoMensual > 0 ? 'ct-currency--active' : 'ct-currency--empty'}`}>
        {cliente.ingresoNetoMensual > 0 ? fmt(cliente.ingresoNetoMensual) : '—'}
      </div>
      <div className="ct-date-small">{fmtDate(cliente.nacimiento)}</div>
    </div>
  );

  /* ── DESKTOP ROW ── */
  const DesktopRow = ({ cliente, idx }) => {
    const age = calcAge(cliente.nacimiento);
    return (
      <div className="ct-desktop-row" style={{ gridTemplateColumns: '1.6fr 1.4fr 1.4fr 1fr 1fr 1fr 1fr 1.2fr', animationName: 'rowIn', animationDuration: '0.3s', animationTimingFunction: 'ease', animationDelay: `${idx * 0.02}s`, animationFillMode: 'both' }}>

        {/* Nombre */}
        <div className="ct-desktop-name-group">
          <div className="ct-avatar ct-avatar--md" style={{ background: getInitialGrad(cliente.nombre) }}>
            {(cliente.nombre || '?')[0].toUpperCase()}
          </div>
          <div>
            <div className="ct-desktop-name">{cliente.nombre}</div>
            {age && <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '1px' }}>{age} años</div>}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <div className="ct-desktop-field">
            <Mail size={11} className="ct-desktop-field-icon" />
            <span className="ct-desktop-field-text">{cliente.email || '—'}</span>
          </div>
          <div className="ct-desktop-field" style={{ marginTop: '2px' }}>
            <Phone size={11} className="ct-desktop-field-icon" />
            <span className="ct-desktop-field-text">{cliente.celular || '—'}</span>
          </div>
        </div>

        {/* Empresa / Cargo */}
        <div>
          <div className="ct-desktop-field">
            <Building size={11} className="ct-desktop-field-icon" />
            <span className="ct-desktop-field-text">{cliente.empresa || '—'}</span>
          </div>
          <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '2px', paddingLeft: '16px' }}>
            {cliente.cargo || ''}
          </div>
        </div>

        {/* AFP */}
        <div>
          <div style={{ fontSize: '12px', color: '#374151', fontWeight: '500' }}>{cliente.afp || '—'}</div>
          {cliente.semanasCotizadas && (
            <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '2px' }}>{cliente.semanasCotizadas} sem.</div>
          )}
        </div>

        {/* Ingreso neto */}
        <span className={`ct-currency ${cliente.ingresoNetoMensual > 0 ? 'ct-currency--active' : 'ct-currency--empty'}`}>
          {cliente.ingresoNetoMensual > 0 ? fmt(cliente.ingresoNetoMensual) : '—'}
        </span>

        {/* Ahorro */}
        <span style={{ fontSize: '12px', color: cliente.ahorroMensual > 0 ? '#15803d' : '#9ca3af' }}>
          {cliente.ahorroMensual > 0 ? fmt(cliente.ahorroMensual) : '—'}
        </span>

        {/* Deuda */}
        <span style={{ fontSize: '12px', color: cliente.deuda > 0 ? '#b91c1c' : '#9ca3af' }}>
          {cliente.deuda > 0 ? fmt(cliente.deuda) : '—'}
        </span>

        {/* Protección */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
          <SeguroBadge label="Vida" value={cliente.seguroVida} />
          <SeguroBadge label="Salud" value={cliente.polizaSalud} />
          <SeguroBadge label="Emerg." value={cliente.fondoEmergencia} />
        </div>
      </div>
    );
  };

  const desktopCols = ['Nombre', 'Contacto', 'Empresa / Cargo', 'AFP', 'Ingreso Neto', 'Ahorro', 'Deuda', 'Protección'];
  const tabletCols  = ['Nombre / Empresa', 'Email', 'Ingreso Neto', 'Nacimiento'];

  return (
    <div className="ct-wrapper">

      {/* ── HEADER ── */}
      <header className="ct-header">
        <div className={`ct-header-inner ${isMobile ? 'ct-header-inner--mobile' : ''}`}>

          <div className={`ct-top-row ${isMobile ? 'ct-top-row--mobile' : ''}`}>
            <div className="ct-top-left">
              <button className="ct-back" onClick={() => window.location.href = '/dashboard'}>
                <ChevronLeft size={13} />{!isMobile && 'Volver'}
              </button>
              {!isMobile && <div className="ct-divider-v" />}
              <div className="ct-title-group">
                <div className="ct-title-bar" />
                <div className="ct-title-text">
                  <div className={`ct-title ${isMobile ? 'ct-title--mobile' : 'ct-title--desktop'}`}>
                    {isMobile ? 'Mini-Planes' : 'Mini-Plan Financiero'}
                  </div>
                  {!isMobile && <div className="ct-subtitle">Gestión de registros</div>}
                </div>
              </div>
            </div>

            <div className="ct-top-right">
              {!isMobile && (
                <div className="ct-stats-row">
                  <div className="ct-stat-badge ct-stat-badge--total">
                    <span className="ct-stat-value ct-stat-value--total">{clientes.length}</span>
                    <span className="ct-stat-label ct-stat-label--total">Total</span>
                  </div>
                  {filteredClientes.length !== clientes.length && (
                    <div className="ct-stat-badge ct-stat-badge--filtered">
                      <span className="ct-stat-value ct-stat-value--filtered">{filteredClientes.length}</span>
                      <span className="ct-stat-label ct-stat-label--filtered">Filtrados</span>
                    </div>
                  )}
                </div>
              )}
              <button className="ct-export" onClick={exportToCSV}>
                <Download size={14} /> {isMobile ? 'CSV' : 'Exportar CSV'}
              </button>
            </div>
          </div>

          <div className={`ct-search-row ${isMobile ? 'ct-search-row--mobile' : ''}`}>
            <div className={`ct-search-wrap ${isMobile ? 'ct-search-wrap--mobile' : ''}`}>
              <Search size={14} className="ct-search-icon" />
              <input
                className="ct-search"
                type="text"
                placeholder="Buscar por nombre, email, empresa..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            {searchTerm && (
              <button className="ct-clear-btn" onClick={() => setSearchTerm('')}>
                <X size={12} /> Limpiar
              </button>
            )}
            {isMobile && (
              <div className="ct-mobile-stats">
                <div className="ct-mobile-stat ct-mobile-stat--total">
                  <div className="ct-mobile-stat-value ct-mobile-stat-value--total">{clientes.length}</div>
                  <div className="ct-mobile-stat-label ct-mobile-stat-label--total">Total</div>
                </div>
                <div className="ct-mobile-stat ct-mobile-stat--filtered">
                  <div className="ct-mobile-stat-value ct-mobile-stat-value--filtered">{filteredClientes.length}</div>
                  <div className="ct-mobile-stat-label ct-mobile-stat-label--filtered">Filtrados</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className={`ct-main ${isMobile ? 'ct-main--mobile' : 'ct-main--desktop'}`}>
        <div className="ct-main-inner">

          {loading && (
            <div className="ct-loading">
              <div className="ct-spinner" />
              <p className="ct-loading-text">Cargando datos...</p>
            </div>
          )}

          {!loading && (
            <div className={`ct-table-container ${isMobile ? 'ct-table-container--mobile' : 'ct-table-container--desktop'} ${mounted ? 'ct-table-container--visible' : 'ct-table-container--hidden'}`}>
              <div className={`ct-table-inner ${isMobile ? 'ct-table-inner--mobile' : ''}`}>
                {!isMobile && <div className="ct-gradient-bar" />}

                {!isMobile && (
                  <div className={`ct-table-header ${isDesktop ? 'ct-table-header--desktop' : 'ct-table-header--tablet'}`}
                    style={isDesktop ? { gridTemplateColumns: '1.6fr 1.4fr 1.4fr 1fr 1fr 1fr 1fr 1.2fr' } : undefined}
                  >
                    {(isDesktop ? desktopCols : tabletCols).map((h, i) => (
                      <div key={i} className="ct-col-header">{h}</div>
                    ))}
                  </div>
                )}

                {filteredClientes.length === 0 && (
                  <div className="ct-empty">
                    <div className="ct-empty-icon">
                      <AlertCircle size={22} color="#d1d5db" strokeWidth={1.5} />
                    </div>
                    <p className="ct-empty-title">Sin resultados</p>
                    <p className="ct-empty-subtitle">Ajusta los filtros de búsqueda</p>
                  </div>
                )}

                {filteredClientes.map((c, i) =>
                  isMobile  ? <MobileCard key={c.id} cliente={c} idx={i} /> :
                  isDesktop ? <DesktopRow key={c.id} cliente={c} idx={i} /> :
                               <TabletRow  key={c.id} cliente={c} idx={i} />
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
