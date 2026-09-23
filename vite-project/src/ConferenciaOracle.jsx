import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CalendarDays, Check, Clock3, Users } from 'lucide-react';
import { createOracleAppointment, getOracleAvailability } from './financialCheckupApi';
import './conferenciaOracle.css';

const CONFERENCE_DATES = [
  { date: '2026-09-30', label: 'Miércoles 30 de septiembre' },
  { date: '2026-10-01', label: 'Jueves 1 de octubre' },
];

const ADVISOR_NAMES = {
  AMANDA: 'Amanda Cruz',
  ANDREA: 'Andrea Rozo',
  NICOLAS: 'Nicolás Hernández',
  LAURA: 'Laura Correa',
  CARLOS: 'Carlos Rico',
};

const getErrorMessage = (error) => error?.response?.data?.message
  || 'No pudimos consultar la disponibilidad. Inténtalo nuevamente.';

function ConferenciaOracle() {
  const serverURL = useSelector((state) => state.serverURL.serverURL);
  const [availability, setAvailability] = useState({});
  const [selectedDate, setSelectedDate] = useState(CONFERENCE_DATES[0].date);
  const [selectedCalendar, setSelectedCalendar] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [booking, setBooking] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError('');

    Promise.all(CONFERENCE_DATES.map(async ({ date }) => [date, await getOracleAvailability(serverURL, date)]))
      .then((results) => {
        if (!cancelled) setAvailability(Object.fromEntries(results));
      })
      .catch((requestError) => {
        if (!cancelled) setError(getErrorMessage(requestError));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [serverURL]);

  useEffect(() => {
    if (!success) return undefined;

    const redirectTimer = window.setTimeout(() => {
      window.location.assign('https://axia.com.co/');
    }, 5000);

    return () => window.clearTimeout(redirectTimer);
  }, [success]);

  const currentData = availability[selectedDate];
  const calendars = currentData?.calendars || {};
  const advisors = Object.entries(calendars);
  const selectedAdvisor = calendars[selectedCalendar];
  const slots = selectedAdvisor?.slots || [];

  const selectDate = (date) => {
    setSelectedDate(date);
    setSelectedCalendar('');
    setSelectedSlot(null);
    setSuccess('');
  };

  const selectAdvisor = (calendar) => {
    setSelectedCalendar(calendar);
    setSelectedSlot(null);
    setSuccess('');
  };

  const bookAppointment = async (event) => {
    event.preventDefault();
    if (!selectedSlot || !selectedCalendar) return;

    setBooking(true);
    setError('');
    try {
      await createOracleAppointment(serverURL, {
        ...form,
        date: selectedDate,
        startTime: selectedSlot.start,
        calendar: selectedCalendar,
      });
      setSuccess('Tu cita quedó agendada. Revisa tu correo para ver la invitación.');
      setSelectedSlot(null);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setBooking(false);
    }
  };

  return (
    <main className="oracle-shell">
      <div className="oracle-page">
        <header className="oracle-header">
          <div className="oracle-brands" aria-label="Axia en asociación con Oracle">
            <img className="axia-logo" src="/LOGO.png" alt="Axia" />
            <span className="brand-connector">en asociación con</span>
            <img className="oracle-logo" src="https://www.oracle.com/a/ocom/img/oracle-logo.svg" alt="Oracle" />
          </div>
          <div className="oracle-kicker"><CalendarDays size={17} aria-hidden="true" /> Conferencia Oracle</div>
          <h1>Una hora para mover tus decisiones hacia adelante.</h1>
          <p>Reserva una conversación con el asesor indicado para tu jornada Oracle.</p>
        </header>

        {error && <div className="oracle-alert" role="alert">{error}</div>}
        {loading ? (
          <div className="oracle-loading"><span className="oracle-spinner" /> Consultando disponibilidad...</div>
        ) : (
          <>
            <section className="oracle-dates" aria-label="Días disponibles">
              {CONFERENCE_DATES.map(({ date, label }) => {
                const isSelected = selectedDate === date;
                const dateCalendars = availability[date]?.calendars || {};
                return (
                  <button className={`oracle-date-card ${isSelected ? 'selected' : ''}`} type="button" key={date} onClick={() => selectDate(date)}>
                    <span>{label}</span>
                    <strong>{Object.keys(dateCalendars).length} asesores disponibles</strong>
                    {isSelected && <Check size={18} aria-hidden="true" />}
                  </button>
                );
              })}
            </section>

            <section className="oracle-booking">
              <div className="oracle-advisors">
                <div className="oracle-section-title"><Users size={19} /><h2>Elige tu asesor</h2></div>
                <p className="oracle-selected-date">{CONFERENCE_DATES.find(({ date }) => date === selectedDate)?.label}</p>
                <div className="oracle-advisor-list">
                  {advisors.length === 0 && <p className="oracle-muted">No hay asesores configurados para este día.</p>}
                  {advisors.map(([calendar, data]) => (
                    <button className={`oracle-advisor ${selectedCalendar === calendar ? 'selected' : ''}`} type="button" key={calendar} onClick={() => selectAdvisor(calendar)}>
                      <span>{ADVISOR_NAMES[calendar] || calendar}</span>
                      <small>{data.slots?.length || 0} horarios libres</small>
                    </button>
                  ))}
                </div>
              </div>

              <div className="oracle-times">
                <div className="oracle-section-title"><Clock3 size={19} /><h2>Selecciona un horario</h2></div>
                {!selectedCalendar && <p className="oracle-muted">Selecciona un asesor para ver sus horarios.</p>}
                {selectedCalendar && slots.length === 0 && <p className="oracle-muted">Este asesor no tiene horarios libres.</p>}
                <div className="oracle-slots">
                  {slots.map((slot) => (
                    <button className={`oracle-slot ${selectedSlot?.start === slot.start ? 'selected' : ''}`} type="button" key={slot.start} onClick={() => setSelectedSlot(slot)}>
                      {slot.start} - {slot.end}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <form className="oracle-form" onSubmit={bookAppointment}>
              <div className="oracle-section-title"><h2>Confirma tus datos</h2></div>
              <div className="oracle-form-fields">
                <label>Nombre<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
                <label>Correo electrónico<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label>
              </div>
              <button className="oracle-submit" type="submit" disabled={!selectedSlot || booking}>
                {booking ? 'Agendando...' : 'Confirmar cita'}
              </button>
              {success && <p className="oracle-success" role="status">{success} Serás redirigido a Axia en 5 segundos.</p>}
            </form>
          </>
        )}
      </div>
    </main>
  );
}

export default ConferenciaOracle;