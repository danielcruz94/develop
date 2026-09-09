import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Users, Search, Filter, Plus, Edit2, Trash2, X,
  Mail, Shield, ChevronLeft, AlertCircle, CheckCircle,
   Lock, ChevronDown, MinusCircle, PlusCircle, Loader
} from 'lucide-react';
import { authFetch } from '../../utils/auth.fetch';
import './UsersManagement.css';

const ALL_ROLES = ['USER', 'ADMIN'];

const ROLE_CONFIG = {
  ADMIN: { bg: 'rgba(6,23,92,0.08)',   text: '#06175C', border: 'rgba(6,23,92,0.18)',   dot: '#06175C', label: 'Admin'   },
  USER:  { bg: 'rgba(34,197,94,0.08)', text: '#16a34a', border: 'rgba(34,197,94,0.2)',  dot: '#22c55e', label: 'Usuario' },
};

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg,#06175C,#2a0845)',
  'linear-gradient(135deg,#06175C,#6441A5)',
  'linear-gradient(135deg,#2a0845,#6441A5)',
  'linear-gradient(135deg,#1d4ed8,#06175C)',
  'linear-gradient(135deg,#6441A5,#06175C)',
];

const EMPTY_FORM = { name: '', email: '', password: '', role: 'USER' };

const getAvatarGradient = (email) =>
  AVATAR_GRADIENTS[(email?.charCodeAt(0) || 0) % AVATAR_GRADIENTS.length];

/* ══════════════════════════════════════════════
   Componente principal
   ══════════════════════════════════════════════ */
export default function UsersManagement() {
  const [users,         setUsers]         = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm,    setSearchTerm]    = useState('');
  const [filterRole,    setFilterRole]    = useState('all');
  const [isLoading,     setIsLoading]     = useState(true);
  const [showModal,     setShowModal]     = useState(false);
  const [modalMode,     setModalMode]     = useState('create');
  const [selectedUser,  setSelectedUser]  = useState(null);
  const [notification,  setNotification]  = useState(null);
  const [mounted,       setMounted]       = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData,      setFormData]      = useState(EMPTY_FORM);
  const [editRoles,     setEditRoles]     = useState([]);
  const [roleLoading,   setRoleLoading]   = useState(null);
  const [passwordModal, setPasswordModal] = useState(null);
  const [newPassword,   setNewPassword]   = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  /* ── Montaje inicial ── */
  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Filtrado reactivo ── */
  useEffect(() => {
    let result = users;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(u =>
        u.name?.toLowerCase().includes(term) ||
        u.email?.toLowerCase().includes(term)
      );
    }
    if (filterRole !== 'all') {
      result = result.filter(u => u.roles?.includes(filterRole));
    }
    setFilteredUsers(result);
  }, [searchTerm, filterRole, users]);

  /* ══════════════════════════════════════════════
     Helpers
     ══════════════════════════════════════════════ */
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const updateUserRolesLocally = (userId, newRoles) => {
    setUsers(prev => prev.map(u => u._id === userId ? { ...u, roles: newRoles } : u));
  };

  /* ══════════════════════════════════════════════
     API
     ══════════════════════════════════════════════ */
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await authFetch('https://authsystem-wimn.onrender.com/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      }
    } catch {
      showNotification('Error al cargar usuarios', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem('authToken');
      const url = 'https://authsystem-wimn.onrender.com/auth/create-user';
      const payload = { email: formData.email, roles: [formData.role] };
      if (formData.password) payload.password = formData.password;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        showNotification('Usuario creado exitosamente');
        fetchUsers();
        handleCloseModal();
      } else {
        const err = await response.json();
        showNotification(err.message || 'Error al crear usuario', 'error');
      }
    } catch {
      showNotification('Error al crear usuario', 'error');
    }
  };

  const handleAddRole = async (role) => {
    setRoleLoading(role);
    try {
      const res = await authFetch(
        `https://authsystem-wimn.onrender.com/users/${selectedUser._id}/add-role`,
        { method: 'PATCH', body: JSON.stringify({ role }) }
      );
      if (res.ok) {
        const newRoles = [...editRoles, role];
        setEditRoles(newRoles);
        updateUserRolesLocally(selectedUser._id, newRoles);
        showNotification(`Rol ${ROLE_CONFIG[role]?.label} agregado`);
      } else {
        const err = await res.json();
        showNotification(err.message || 'Error al agregar rol', 'error');
      }
    } catch {
      showNotification('Error al agregar rol', 'error');
    } finally {
      setRoleLoading(null);
    }
  };

  const handleRemoveRole = async (role) => {
    if (editRoles.length === 1) {
      showNotification('El usuario debe tener al menos un rol', 'error');
      return;
    }
    setRoleLoading(role);
    try {
      const res = await authFetch(
        `https://authsystem-wimn.onrender.com/users/${selectedUser._id}/remove-role`,
        { method: 'PATCH', body: JSON.stringify({ role }) }
      );
      if (res.ok) {
        const newRoles = editRoles.filter(r => r !== role);
        setEditRoles(newRoles);
        updateUserRolesLocally(selectedUser._id, newRoles);
        showNotification(`Rol ${ROLE_CONFIG[role]?.label} eliminado`);
      } else {
        const err = await res.json();
        showNotification(err.message || 'Error al eliminar rol', 'error');
      }
    } catch {
      showNotification('Error al eliminar rol', 'error');
    } finally {
      setRoleLoading(null);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      showNotification('Las contraseñas no coinciden', 'error');
      return;
    }
    if (newPassword.length < 6) {
      showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
      return;
    }
    setPasswordLoading(true);
    try {
      const res = await authFetch(
        `https://authsystem-wimn.onrender.com/users/${passwordModal._id}/change-password`,
        { method: 'PATCH', body: JSON.stringify({ newPassword }) }
      );
      if (res.ok) {
        showNotification('Contraseña actualizada exitosamente');
        handleClosePasswordModal();
      } else {
        const err = await res.json();
        showNotification(err.message || 'Error al cambiar contraseña', 'error');
      }
    } catch {
      showNotification('Error al cambiar contraseña', 'error');
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleClosePasswordModal = () => {
    setPasswordModal(null);
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleDelete = async (userId) => {
    try {
      const token = sessionStorage.getItem('authToken');
      const response = await fetch(`https://authsystem-wimn.onrender.com/users/delete/${userId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (response.ok) {
        showNotification('Usuario eliminado exitosamente');
        fetchUsers();
      } else {
        showNotification('Error al eliminar usuario', 'error');
      }
    } catch {
      showNotification('Error al eliminar usuario', 'error');
    }
    setDeleteConfirm(null);
  };

  /* ══════════════════════════════════════════════
     Modal helpers
     ══════════════════════════════════════════════ */
  const handleOpenModal = (mode, user = null) => {
    setModalMode(mode);
    setSelectedUser(user);
    setEditRoles(user?.roles ? [...user.roles] : []);
    setFormData(
      mode === 'edit' && user
        ? { name: user.name || '', email: user.email, password: '', role: user.roles?.[0] || 'USER' }
        : EMPTY_FORM
    );
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setFormData(EMPTY_FORM);
    setEditRoles([]);
    setRoleLoading(null);
  };

  /* ══════════════════════════════════════════════
     Render
     ══════════════════════════════════════════════ */
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div className="um-page">

        {/* ── NOTIFICACIÓN ── */}
        {notification && (
          <div className={`um-notification um-notification--${notification.type}`}>
            {notification.type === 'success'
              ? <CheckCircle size={16} color="#22c55e" />
              : <AlertCircle size={16} color="#ef4444" />}
            <span className="um-notification__text">{notification.message}</span>
          </div>
        )}

        {/* ── HEADER ── */}
        <header className="um-header">
          <div className="um-header__inner">

            <div className="um-header__left">
              <BackButton onClick={() => (window.location.href = '/dashboard')} />
              <div className="um-header__divider" />
              <div className="um-header__brand">
                <div className="um-header__accent-bar" />
                <div>
                  <div className="um-header__title">Gestión de Usuarios</div>
                  <div className="um-header__subtitle">Administración del sistema</div>
                </div>
              </div>
            </div>

            <div className="um-header__right">
              <div className="um-count-chips">
                <div className="um-chip um-chip--primary">
                  <span className="um-chip__number">{users.length}</span>
                  <span className="um-chip__label">Total</span>
                </div>
                {filteredUsers.length !== users.length && (
                  <div className="um-chip um-chip--secondary">
                    <span className="um-chip__number">{filteredUsers.length}</span>
                    <span className="um-chip__label">Filtrados</span>
                  </div>
                )}
              </div>
              <NewUserButton onClick={() => handleOpenModal('create')} />
            </div>

          </div>
        </header>

        {/* ── MAIN ── */}
        <main className="um-main">

          {/* Barra de filtros */}
          <div className={`um-filter-bar ${mounted ? 'um-filter-bar--mounted' : 'um-filter-bar--hidden'}`}>

            <div className="um-search-wrapper">
              <Search size={14} className="um-search-icon" style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
              <input
                className="um-search"
                type="text"
                placeholder="Buscar por nombre o correo..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="um-select-wrapper">
              <Filter   size={13} style={{ position: 'absolute', left: 12,  top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
              <ChevronDown size={13} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
              <select
                className="um-select"
                value={filterRole}
                onChange={e => setFilterRole(e.target.value)}
              >
                <option value="all">Todos los roles</option>
                <option value="USER">Usuario</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            {(searchTerm || filterRole !== 'all') && (
              <button
                className="um-btn-clear"
                onClick={() => { setSearchTerm(''); setFilterRole('all'); }}
              >
                <X size={12} /> Limpiar
              </button>
            )}
          </div>

          {/* ── TABLA ── */}
          <div className={`um-table-wrapper ${mounted ? 'um-table-wrapper--mounted' : 'um-table-wrapper--hidden'}`}>

            <div className="um-table__gradient-bar" />

            {/* Cabecera */}
            <div className="um-table__header">
              {['Usuario', 'Correo electrónico', 'Roles', 'Acciones'].map((label, i) => (
                <div
                  key={label}
                  className={`um-table__header-cell ${i >= 2 ? 'um-table__header-cell--center' : ''}`}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Loading */}
            {isLoading && (
              <div className="um-loading">
                <div className="um-loading__spinner" />
                <p className="um-loading__text">Cargando usuarios...</p>
              </div>
            )}

            {/* Estado vacío */}
            {!isLoading && filteredUsers.length === 0 && (
              <div className="um-empty">
                <div className="um-empty__icon-box">
                  <Users size={24} color="#d1d5db" strokeWidth={1.5} />
                </div>
                <p className="um-empty__title">
                  {searchTerm || filterRole !== 'all' ? 'Sin resultados' : 'No hay usuarios'}
                </p>
                <p className="um-empty__subtitle">
                  {searchTerm || filterRole !== 'all'
                    ? 'Ajusta los filtros de búsqueda'
                    : 'Comienza creando tu primer usuario'}
                </p>
              </div>
            )}

            {/* Filas */}
            {!isLoading && filteredUsers.map((user, idx) => {
              const roles = user.roles?.length ? user.roles : ['USER'];
              const isLast = idx === filteredUsers.length - 1;

              return (
                <div
                  key={user._id}
                  className="um-row"
                  style={{
                    borderBottom: isLast ? 'none' : '1px solid #f3f4f6',
                    animation: `rowIn 0.3s ease ${idx * 0.04}s both`,
                  }}
                >
                  {/* Usuario */}
                  <div className="um-row__user">
                    <div
                      className="um-row__avatar"
                      style={{ background: getAvatarGradient(user.email) }}
                    >
                      {(user.name || user.email || 'U')[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="um-row__name">{user.name || '—'}</div>
                      <div className="um-row__id">ID {user._id?.toString().slice(-6) || '000000'}</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="um-row__email">
                    <Mail size={13} color="#d1d5db" strokeWidth={1.8} />
                    <span className="um-row__email-text">{user.email}</span>
                  </div>

                  {/* Roles — muestra todos */}
                  <div className="um-row__role-cell">
                    <div className="um-role-badges">
                      {roles.map(role => {
                        const rc = ROLE_CONFIG[role] || ROLE_CONFIG.USER;
                        return (
                          <span
                            key={role}
                            className="um-role-badge"
                            style={{ background: rc.bg, border: `1px solid ${rc.border}`, color: rc.text }}
                          >
                            <span className="um-role-badge__dot" style={{ background: rc.dot }} />
                            {rc.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="um-row__actions">
                    <button className="um-action-edit"   onClick={() => handleOpenModal('edit', user)}>
                      <Edit2 size={12} strokeWidth={2} /> Editar
                    </button>
                    <button className="um-action-password" onClick={() => setPasswordModal(user)}>
                      <Lock size={12} strokeWidth={2} /> Contraseña
                    </button>
                    <button className="um-action-delete" onClick={() => setDeleteConfirm(user)}>
                      <Trash2 size={12} strokeWidth={2} /> Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* ══════════════════════════════════════════════
            MODAL — CONFIRMAR ELIMINAR
            ══════════════════════════════════════════════ */}
        {deleteConfirm && (
          <div className="um-overlay" onClick={() => setDeleteConfirm(null)}>
            <div className="um-modal-delete" onClick={e => e.stopPropagation()}>
              <div className="um-modal-delete__bar" />

              <div className="um-modal-delete__icon-box">
                <Trash2 size={20} color="#ef4444" strokeWidth={1.8} />
              </div>

              <h3 className="um-modal-delete__title">¿Eliminar usuario?</h3>
              <p className="um-modal-delete__body">
                Esta acción eliminará a{' '}
                <strong style={{ color: '#374151', fontWeight: 600 }}>
                  {deleteConfirm.name || deleteConfirm.email}
                </strong>{' '}
                de forma permanente y no podrá revertirse.
              </p>

              <div className="um-modal-delete__actions">
                <button className="um-btn-cancel"         onClick={() => setDeleteConfirm(null)}>Cancelar</button>
                <button className="um-btn-confirm-delete" onClick={() => handleDelete(deleteConfirm._id)}>Sí, eliminar</button>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════
            MODAL — CREAR
            ══════════════════════════════════════════════ */}
        {showModal && modalMode === 'create' && (
          <div className="um-overlay" onClick={handleCloseModal}>
            <div className="um-modal-form" onClick={e => e.stopPropagation()}>

              <div className="um-modal-form__bar--create" />

              <div className="um-modal-form__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="um-modal-form__icon-box">
                    <Plus size={18} color="white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h2 className="um-modal-form__title">Nuevo Usuario</h2>
                    <p className="um-modal-form__subtitle">Crear cuenta nueva</p>
                  </div>
                </div>
                <button className="um-btn-close" onClick={handleCloseModal}>
                  <X size={14} />
                </button>
              </div>

              <form className="um-form" onSubmit={handleSubmit}>
                <div className="um-form__fields">

                  <FormField
                    label="Correo electrónico"
                    icon={<Mail size={13} color="#9ca3af" />}
                    type="email"
                    placeholder="correo@axia.com.co"
                    value={formData.email}
                    onChange={v => setFormData({ ...formData, email: v })}
                    required
                  />

                  <FormField
                    label="Contraseña"
                    icon={<Lock size={13} color="#9ca3af" />}
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={v => setFormData({ ...formData, password: v })}
                    required
                  />

                  <div>
                    <label className="um-field__label">Rol inicial</label>
                    <div className="um-field__wrapper">
                      <Shield    size={13} color="#9ca3af" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      <ChevronDown size={13} color="#9ca3af" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      <select
                        className="um-select"
                        style={{ paddingLeft: 34 }}
                        value={formData.role}
                        onChange={e => setFormData({ ...formData, role: e.target.value })}
                      >
                        <option value="USER">Usuario — acceso básico</option>
                        <option value="ADMIN">Admin — gestión de contenido</option>
                      </select>
                    </div>
                    <div className="um-role-hint">
                      <span className="um-role-hint__dot" style={{ background: ROLE_CONFIG[formData.role]?.dot }} />
                      <span className="um-role-hint__text">
                        {formData.role === 'USER'  && 'Acceso básico a la plataforma'}
                        {formData.role === 'ADMIN' && 'Puede gestionar usuarios y contenido'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="um-form__footer">
                  <button type="button" className="um-btn-cancel-form" onClick={handleCloseModal}>
                    Cancelar
                  </button>
                  <button type="submit" className="um-btn-submit">
                    + Crear usuario
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════
            MODAL — EDITAR ROLES
            ══════════════════════════════════════════════ */}
        {showModal && modalMode === 'edit' && selectedUser && (
          <div className="um-overlay" onClick={handleCloseModal}>
            <div className="um-modal-form um-modal-form--edit-roles" onClick={e => e.stopPropagation()}>

              <div className="um-modal-form__bar--edit" />

              {/* Cabecera */}
              <div className="um-modal-form__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="um-modal-form__icon-box">
                    <Shield size={17} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="um-modal-form__title">Gestión de Roles</h2>
                    <p className="um-modal-form__subtitle">Agregar o quitar permisos</p>
                  </div>
                </div>
                <button className="um-btn-close" onClick={handleCloseModal}>
                  <X size={14} />
                </button>
              </div>

              {/* Info del usuario */}
              <div className="um-edit-user-info">
                <div
                  className="um-edit-user-info__avatar"
                  style={{ background: getAvatarGradient(selectedUser.email) }}
                >
                  {(selectedUser.name || selectedUser.email || 'U')[0].toUpperCase()}
                </div>
                <div>
                  <div className="um-edit-user-info__name">{selectedUser.name || '—'}</div>
                  <div className="um-edit-user-info__email">{selectedUser.email}</div>
                </div>
              </div>

              <div className="um-role-manager">

                {/* Roles actuales */}
                <div className="um-role-manager__section">
                  <div className="um-role-manager__label">
                    <Shield size={11} />
                    Roles actuales
                    <span className="um-role-manager__count">{editRoles.length}</span>
                  </div>

                  {editRoles.length === 0 ? (
                    <p className="um-role-manager__empty">Sin roles asignados</p>
                  ) : (
                    <div className="um-role-manager__list">
                      {editRoles.map(role => {
                        const rc = ROLE_CONFIG[role] || ROLE_CONFIG.USER;
                        const isBusy = roleLoading === role;
                        return (
                          <div
                            key={role}
                            className="um-role-item um-role-item--active"
                            style={{ borderColor: rc.border, background: rc.bg }}
                          >
                            <div className="um-role-item__left">
                              <span className="um-role-badge__dot" style={{ background: rc.dot, width: 6, height: 6, borderRadius: '50%', display: 'inline-block' }} />
                              <span className="um-role-item__name" style={{ color: rc.text }}>{rc.label}</span>
                              <span className="um-role-item__key">{role}</span>
                            </div>
                            <button
                              className="um-role-item__btn um-role-item__btn--remove"
                              onClick={() => handleRemoveRole(role)}
                              disabled={!!roleLoading}
                              title={editRoles.length === 1 ? 'El usuario debe tener al menos un rol' : `Quitar ${rc.label}`}
                            >
                              {isBusy
                                ? <Loader size={13} className="um-spin" />
                                : <MinusCircle size={13} />}
                              Quitar
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Divisor */}
                <div className="um-role-manager__divider" />

                {/* Roles disponibles para agregar */}
                <div className="um-role-manager__section">
                  <div className="um-role-manager__label">
                    <Plus size={11} />
                    Roles disponibles
                  </div>

                  {ALL_ROLES.filter(r => !editRoles.includes(r)).length === 0 ? (
                    <p className="um-role-manager__empty">El usuario ya tiene todos los roles</p>
                  ) : (
                    <div className="um-role-manager__list">
                      {ALL_ROLES.filter(r => !editRoles.includes(r)).map(role => {
                        const rc = ROLE_CONFIG[role] || ROLE_CONFIG.USER;
                        const isBusy = roleLoading === role;
                        return (
                          <div key={role} className="um-role-item um-role-item--available">
                            <div className="um-role-item__left">
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d1d5db', display: 'inline-block' }} />
                              <span className="um-role-item__name">{rc.label}</span>
                              <span className="um-role-item__key">{role}</span>
                            </div>
                            <button
                              className="um-role-item__btn um-role-item__btn--add"
                              onClick={() => handleAddRole(role)}
                              disabled={!!roleLoading}
                            >
                              {isBusy
                                ? <Loader size={13} className="um-spin" />
                                : <PlusCircle size={13} />}
                              Agregar
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>

              <div className="um-form__footer" style={{ padding: '16px 28px', borderTop: '1px solid #f3f4f6' }}>
                <button className="um-btn-cancel-form" style={{ flex: 1 }} onClick={handleCloseModal}>
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════
            MODAL — CAMBIAR CONTRASEÑA
            ══════════════════════════════════════════════ */}
        {passwordModal && (
          <div className="um-overlay" onClick={handleClosePasswordModal}>
            <div className="um-modal-form" onClick={e => e.stopPropagation()}>

              <div className="um-modal-form__bar--edit" />

              <div className="um-modal-form__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="um-modal-form__icon-box">
                    <Lock size={17} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="um-modal-form__title">Cambiar Contraseña</h2>
                    <p className="um-modal-form__subtitle">Asignar nueva contraseña</p>
                  </div>
                </div>
                <button className="um-btn-close" onClick={handleClosePasswordModal}>
                  <X size={14} />
                </button>
              </div>

              <div className="um-edit-user-info">
                <div
                  className="um-edit-user-info__avatar"
                  style={{ background: getAvatarGradient(passwordModal.email) }}
                >
                  {(passwordModal.name || passwordModal.email || 'U')[0].toUpperCase()}
                </div>
                <div>
                  <div className="um-edit-user-info__name">{passwordModal.name || '—'}</div>
                  <div className="um-edit-user-info__email">{passwordModal.email}</div>
                </div>
              </div>

              <form className="um-form" onSubmit={handleChangePassword}>
                <div className="um-form__fields">
                  <FormField
                    label="Nueva contraseña"
                    icon={<Lock size={13} color="#9ca3af" />}
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={v => setNewPassword(v)}
                    required
                  />
                  <FormField
                    label="Confirmar contraseña"
                    icon={<Lock size={13} color="#9ca3af" />}
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={v => setConfirmPassword(v)}
                    required
                  />
                </div>

                <div className="um-form__footer">
                  <button type="button" className="um-btn-cancel-form" onClick={handleClosePasswordModal}>
                    Cancelar
                  </button>
                  <button type="submit" className="um-btn-submit" disabled={passwordLoading}>
                    {passwordLoading ? <Loader size={14} className="um-spin" /> : null}
                    {passwordLoading ? ' Guardando...' : 'Cambiar contraseña'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

/* ══════════════════════════════════════════════
   Sub-componentes
   ══════════════════════════════════════════════ */
function FormField({ label, icon, value, onChange, placeholder, type, required }) {
  return (
    <div>
      <label className="um-field__label">{label}</label>
      <div className="um-field__wrapper">
        <div className="um-field__icon">{icon}</div>
        <input
          className="um-input"
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
FormField.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

function BackButton({ onClick}) {
  return (
    <button className="um-btn-back" onClick={onClick}>
      <ChevronLeft size={13} /> Volver
    </button>
  );
}
BackButton.propTypes = {
  onClick: PropTypes.func,
};

function NewUserButton({ onClick }) {
  return (
    <button className="um-btn-new-user" onClick={onClick}>
      <Plus size={14} strokeWidth={2.5} /> Nuevo Usuario
    </button>
  );
}
NewUserButton.propTypes = {
  onClick: PropTypes.func,
};
