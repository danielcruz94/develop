import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react';
import { createCalendarAppointment, getCalendarAvailability } from './financialCheckupApi';
import './googleCalendar.css';

const formatLocalDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getErrorMessage = (error) => {
  if (error?.response?.data?.message) return error.response.data.message;
  if (error?.code === 'ERR_NETWORK' || error?.code === 'ECONNABORTED') {
    return 'No pudimos conectar con la agenda. Inténtalo nuevamente.';
  }
  return 'No pudimos consultar la disponibilidad. Inténtalo nuevamente.';
};

function GoogleCalendar() {
  const serverURL = useSelector((state) => state.serverURL.serverURL);
  const location = useLocation();
  const { calendar: routeCalendar } = useParams();
  const { name = '', email = '' } = location.state || {};
  const calendar = routeCalendar?.toUpperCase();
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [booking, setBooking] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    if (!date) {
      setSlots([]);
      setSelectedSlot(null);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);
    setError('');
    setSelectedSlot(null);

    getCalendarAvailability(serverURL, date, calendar)
      .then((data) => {
        if (!cancelled) setSlots(Array.isArray(data?.slots) ? data.slots : []);
      })
      .catch((requestError) => {
        if (!cancelled) {
          setSlots([]);
          setError(getErrorMessage(requestError));
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [calendar, date, serverURL]);

  useEffect(() => {
    if (!bookingSuccess) return undefined;

    const redirectTimer = window.setTimeout(() => {
      window.location.assign('https://axia.com.co/');
    }, 5000);

    return () => window.clearTimeout(redirectTimer);
  }, [bookingSuccess]);

  const today = formatLocalDate(new Date());

  const bookAppointment = async () => {
    if (!date || !selectedSlot || !name || !email) return;

    setBooking(true);
    setBookingError('');
    try {
      await createCalendarAppointment(serverURL, {
        name,
        email,
        date,
        startTime: selectedSlot.start,
        calendar,
      });
      setBookingSuccess(true);
    } catch (requestError) {
      setBookingError(requestError?.response?.data?.message || 'No pudimos agendar la cita. Inténtalo nuevamente.');
    } finally {
      setBooking(false);
    }
  };

  return (
    <main className="calendar-shell">
      <div className="calendar-page">
        <button className="calendar-back" type="button" onClick={() => window.history.back()}>
          <ArrowLeft size={17} aria-hidden="true" />
          Volver
        </button>

        <header className="calendar-header">
          <div className="calendar-brand"><img src="/LOGO.png" alt="Axia" /><span>FINANZAS PERSONALES</span></div>
          <p className="calendar-eyebrow">Agenda tu conversación</p>
          <h1>Elige el momento que mejor te funcione.</h1>
          <p>Selecciona una fecha y revisa los horarios disponibles para hablar con Axia.</p>
        </header>

        <section className="calendar-layout">
          <div className="calendar-info-panel">
            <p className="calendar-panel-eyebrow">Tu reunión con Axia</p>
            <h2>Una conversación para ordenar tus próximos pasos.</h2>
            <div className="calendar-info-list">
              <div><Clock3 size={17} aria-hidden="true" /><span>Duración<strong>30 minutos</strong></span></div>
              <div><CalendarDays size={17} aria-hidden="true" /><span>Horario<strong>Horarios sujetos a disponibilidad.</strong></span></div>
            </div>
            <p className="calendar-info-note">Elige una fecha disponible y luego selecciona el horario que prefieras.</p>
          </div>

          <div className="calendar-picker-panel" aria-live="polite">
            <div className="calendar-date-panel">
              <label htmlFor="calendar-date">Fecha de la cita</label>
              <div className="calendar-date-input">
                <CalendarDays size={20} aria-hidden="true" />
                <input id="calendar-date" type="date" min={today} value={date} onChange={(event) => setDate(event.target.value)} />
              </div>
            </div>

            <div className="calendar-slots-panel">
            {!date && <div className="calendar-empty"><CalendarDays size={28} /><p>Selecciona una fecha para ver los horarios.</p></div>}
            {loading && <div className="calendar-empty"><span className="calendar-spinner" /><p>Consultando disponibilidad...</p></div>}
            {!loading && error && <div className="calendar-message calendar-message-error" role="alert">{error}</div>}
            {!loading && !error && date && slots.length === 0 && <div className="calendar-empty"><Clock3 size={28} /><p>No hay horarios disponibles para esta fecha.</p></div>}
            {!loading && !error && slots.length > 0 && (
              <>
                <div className="calendar-slots-heading"><span>Horarios disponibles</span><strong>{slots.length}</strong></div>
                <div className="calendar-slots">
                  {slots.map((slot) => {
                    const isSelected = selectedSlot?.start === slot.start;
                    return (
                      <button className={`calendar-slot ${isSelected ? 'selected' : ''}`} type="button" key={`${slot.start}-${slot.end}`} onClick={() => setSelectedSlot(slot)}>
                        <Clock3 size={15} aria-hidden="true" />
                        {slot.start} - {slot.end}
                      </button>
                    );
                  })}
                </div>
                {selectedSlot && <div className="calendar-selected" role="status">Horario seleccionado: <strong>{selectedSlot.start} - {selectedSlot.end}</strong></div>}
                {!name || !email ? (
                  <p className="calendar-message-error" role="alert">Regresa al formulario para ingresar tu nombre y correo antes de agendar.</p>
                ) : (
                  <button className="calendar-book-button" type="button" disabled={!selectedSlot || booking} onClick={bookAppointment}>
                    {booking ? 'Agendando cita...' : 'Confirmar cita'}
                  </button>
                )}
                {bookingError && <p className="calendar-message-error" role="alert">{bookingError}</p>}
              </>
            )}
            {bookingSuccess && <div className="calendar-success" role="status"><strong>¡Tu cita ha sido agendada!</strong><span>Revisa tu correo para ver la invitación de Google Calendar.</span><small>Serás redirigido a Axia en unos segundos...</small></div>}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default GoogleCalendar;