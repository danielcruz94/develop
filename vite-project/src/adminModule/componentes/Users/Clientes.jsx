/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {
  Search, Download, Calendar, User, Mail, Phone,
  Building, ChevronLeft, ChevronDown, X, AlertCircle
} from 'lucide-react';
import { authFetch } from '../../utils/auth.fetch';
import './Clientes.css';

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
}

export default function ClientesTable() {
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
      const response = await authFetch('http://localhost:3001/api/datos/clientes/plan-financiero');
      const data = await response.json();
      const list = data.data || data;
      setClientes(list);
      setFiltered(list);
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = clientes.filter(c =>
      c.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.apellidos?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.cedula?.includes(searchTerm) ||
      c.correoElectronico?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filtered);
  }, [searchTerm, clientes]);

  const formatDate = (d) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatCurrency = (ingresos) => {
    if (!ingresos || typeof ingresos !== 'object') return null;
    const keys = Object.keys(ingresos);
    if (!keys.length) return null;
    const subKeys = Object.keys(ingresos[keys[0]]);
    if (!subKeys.length) return null;
    const amount = ingresos[keys[0]][subKeys[0]];
    if (!amount || isNaN(amount) || amount === 0) return null;
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(amount);
  };

  const exportToCSV = () => {
    const headers = ['Fecha Registro', 'Cédula', 'Nombre', 'Apellidos', 'Email', 'Celular', 'Empresa', 'Edad', 'Ingresos', 'Asesor'];
    const rows = filteredClientes.map(c => [
      formatDate(c.fecha), c.cedula, c.nombre, c.apellidos,
      c.correoElectronico, c.celular, c.empresa, c.edad,
      formatCurrency(c.ingresos) || 'Sin completar', c.asesor
    ]);
    const csv  = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = window.URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `clientes_${new Date().toISOString().split('T')[0]}.csv`; a.click();
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

  const desktopCols = ['Nombre', 'Cédula', 'Email', 'Celular', 'Empresa', 'Asesor', 'Edad', 'Ingresos', 'Fecha'];
  const tabletCols  = ['Nombre / ID', 'Email', 'Ingresos', 'Fecha'];

  /* ── MOBILE CARD ── */
  const MobileCard = ({ cliente, idx }) => {
    const isOpen   = expandedCard === cliente.id;
    const currency = formatCurrency(cliente.ingresos);
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
            <div className="ct-card-name">{cliente.nombre} {cliente.apellidos}</div>
            <div className="ct-card-meta">{cliente.cedula} · {formatDate(cliente.fecha)}</div>
          </div>
          {currency && (
            <div className="ct-card-currency">
              <div className="ct-card-currency-value">{currency}</div>
              <div className="ct-card-currency-label">ingresos</div>
            </div>
          )}
          <ChevronDown size={14} className={`ct-card-chevron ${isOpen ? 'ct-card-chevron--open' : ''}`} />
        </div>

        {isOpen && (
          <div className="ct-card-body">
            {[
              { icon: <Mail size={12} />, label: 'Email',   value: cliente.correoElectronico },
              { icon: <Phone size={12} />, label: 'Celular', value: cliente.celular },
              { icon: <Building size={12} />, label: 'Empresa', value: cliente.empresa },
              { icon: <User size={12} />, label: 'Asesor',  value: cliente.asesor },
              { icon: <Calendar size={12} />, label: 'Edad', value: cliente.edad ? `${cliente.edad} años` : null },
            ].map((row, i) => row.value ? (
              <div key={i} className="ct-card-row">
                <div className="ct-card-row-icon">{row.icon}</div>
                <div className="ct-card-row-text">
                  <div className="ct-card-row-label">{row.label}</div>
                  <div className="ct-card-row-value">{row.value}</div>
                </div>
              </div>
            ) : null)}
          </div>
        )}
      </div>
    );
  };

  /* ── TABLET ROW ── */
  const TabletRow = ({ cliente, idx }) => {
    const currency = formatCurrency(cliente.ingresos);
    return (
      <div className="ct-tablet-row" style={{ animationName: 'rowIn', animationDuration: '0.3s', animationTimingFunction: 'ease', animationDelay: `${idx * 0.025}s`, animationFillMode: 'both' }}>
        <div className="ct-tablet-name-group">
          <div className="ct-avatar ct-avatar--sm" style={{ background: getInitialGrad(cliente.nombre) }}>
            {(cliente.nombre || '?')[0].toUpperCase()}
          </div>
          <div className="ct-tablet-name-text">
            <div className="ct-tablet-name">{cliente.nombre} {cliente.apellidos}</div>
            <div className="ct-tablet-cedula">{cliente.cedula}</div>
          </div>
        </div>
        <div className="ct-tablet-email">{cliente.correoElectronico}</div>
        <div className={`ct-currency ${currency ? 'ct-currency--active' : 'ct-currency--empty'}`}>{currency || 'Sin completar'}</div>
        <div className="ct-date-small">{formatDate(cliente.fecha)}</div>
      </div>
    );
  };

  /* ── DESKTOP ROW ── */
  const DesktopRow = ({ cliente, idx }) => {
    const currency = formatCurrency(cliente.ingresos);
    return (
      <div className="ct-desktop-row" style={{ animationName: 'rowIn', animationDuration: '0.3s', animationTimingFunction: 'ease', animationDelay: `${idx * 0.02}s`, animationFillMode: 'both' }}>
        <div className="ct-desktop-name-group">
          <div className="ct-avatar ct-avatar--md" style={{ background: getInitialGrad(cliente.nombre) }}>
            {(cliente.nombre || '?')[0].toUpperCase()}
          </div>
          <span className="ct-desktop-name">{cliente.nombre} {cliente.apellidos}</span>
        </div>

        <span className="ct-desktop-cedula">{cliente.cedula}</span>

        <div className="ct-desktop-field">
          <Mail size={12} className="ct-desktop-field-icon" />
          <span className="ct-desktop-field-text">{cliente.correoElectronico}</span>
        </div>

        <div className="ct-desktop-field">
          <Phone size={12} className="ct-desktop-field-icon" />
          <span className="ct-desktop-field-text">{cliente.celular}</span>
        </div>

        <div className="ct-desktop-field">
          <Building size={12} className="ct-desktop-field-icon" />
          <span className="ct-desktop-field-text">{cliente.empresa || '—'}</span>
        </div>

        <div className="ct-desktop-field">
          <User size={12} className="ct-desktop-field-icon" />
          <span className="ct-desktop-field-text">{cliente.asesor || '—'}</span>
        </div>

        <span className="ct-desktop-age">{cliente.edad || '—'}</span>

        <span className={`ct-currency ${currency ? 'ct-currency--active' : 'ct-currency--empty'}`}>
          {currency || 'Sin completar'}
        </span>

        <div className="ct-desktop-date">
          <Calendar size={11} className="ct-desktop-date-icon" />
          <span className="ct-desktop-date-text">{formatDate(cliente.fecha)}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="ct-wrapper">

      {/* ── HEADER ── */}
      <header className="ct-header">
        <div className={`ct-header-inner ${isMobile ? 'ct-header-inner--mobile' : ''}`}>

          {/* Top row */}
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
                    {isMobile ? 'Planes Financieros' : 'Clientes — Plan Financiero'}
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

          {/* Search row */}
          <div className={`ct-search-row ${isMobile ? 'ct-search-row--mobile' : ''}`}>
            <div className={`ct-search-wrap ${isMobile ? 'ct-search-wrap--mobile' : ''}`}>
              <Search size={14} className="ct-search-icon" />
              <input
                className="ct-search"
                type="text"
                placeholder="Buscar por nombre, cédula o email..."
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
                  <div className={`ct-table-header ${isDesktop ? 'ct-table-header--desktop' : 'ct-table-header--tablet'}`}>
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
