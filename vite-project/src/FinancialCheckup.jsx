import { useState } from 'react';
import { useSelector } from 'react-redux';
import { submitFinancialCheckup } from './financialCheckupApi';
import './financialCheckup.css';

const questions = [
  {
    key: 'liquidity_answer',
    name: 'Liquidez',
    question: 'Si tus ingresos se detuvieran hoy, ¿por cuánto tiempo podrías mantener tu estilo de vida sin endeudarte?',
    options: [
      ['Menos de 1 mes', 'Menos de 1 mes'],
      ['Entre 1 y 3 meses', 'Entre 1 y 3 meses'],
      ['Entre 3 y 6 meses', 'Entre 3 y 6 meses'],
      ['Más de 6 meses', 'Más de 6 meses'],
    ],
  },
  {
    key: 'debt_answer',
    name: 'Deuda',
    question: '¿Qué tan cómodo te sientes actualmente con el peso de tus obligaciones financieras?',
    options: [
      ['Mis deudas limitan mucho mis decisiones financieras', 'Mis deudas limitan mucho mis decisiones financieras'],
      ['A veces mis obligaciones afectan mis decisiones', 'A veces mis obligaciones afectan mis decisiones'],
      ['Mis deudas son manejables', 'Mis deudas son manejables'],
      ['Prácticamente no tengo deuda o está completamente controlada', 'Prácticamente no tengo deuda o está completamente controlada'],
    ],
  },
  {
    key: 'protection_answer',
    name: 'Protección',
    question: '¿Sabes con certeza si tu familia y tus ingresos quedarían adecuadamente protegidos ante fallecimiento, enfermedad grave o incapacidad?',
    options: [
      ['No', 'No'],
      ['Tengo algunas coberturas, pero no sé si son suficientes', 'Tengo algunas coberturas, pero no sé si son suficientes'],
      ['Lo he revisado parcialmente', 'Lo he revisado parcialmente'],
      ['Sí, lo tengo revisado y actualizado', 'Sí, lo tengo revisado y actualizado'],
    ],
  },
  {
    key: 'investment_answer',
    name: 'Inversión',
    question: '¿Tienes actualmente una estrategia de inversión clara, diversificada y vinculada a tus objetivos financieros?',
    options: [
      ['Actualmente no invierto', 'Actualmente no invierto'],
      ['Ahorro, pero no tengo una estrategia definida', 'Ahorro, pero no tengo una estrategia definida'],
      ['Tengo algunas inversiones, pero no una estrategia integral', 'Tengo algunas inversiones, pero no una estrategia integral'],
      ['Sí, tengo una estrategia estructurada y alineada con mis objetivos', 'Sí, tengo una estrategia estructurada y alineada con mis objetivos'],
    ],
  },
  {
    key: 'retirement_answer',
    name: 'Retiro',
    question: '¿Sabes cuánto patrimonio necesitas construir para mantener el estilo de vida que deseas cuando decidas reducir o dejar de trabajar?',
    options: [
      ['Nunca lo he calculado', 'Nunca lo he calculado'],
      ['Tengo una idea aproximada', 'Tengo una idea aproximada'],
      ['Lo he calculado alguna vez, pero no le hago seguimiento', 'Lo he calculado alguna vez, pero no le hago seguimiento'],
      ['Sí, lo tengo calculado y hago seguimiento', 'Sí, lo tengo calculado y hago seguimiento'],
    ],
  },
];

const concerns = [
  ['INV', 'Invertir mejor mi dinero'],
  ['RET', 'Preparar mi retiro / libertad financiera'],
  ['IMP', 'Optimizar mi situación tributaria'],
  ['PRO', 'Proteger adecuadamente a mi familia y mis ingresos'],
  ['DEU', 'Organizar o reducir mis deudas'],
  ['PAT', 'Organizar y hacer crecer mi patrimonio'],
  ['EXC', 'Saber qué hacer con el dinero que me sobra cada mes'],
  ['ORG', 'Organizar integralmente mis finanzas'],
  ['OTR', 'Otro'],
];

const incomeRanges = [
  ['I1', 'Menos de $15 millones'],
  ['I2', 'Entre $15 y $20 millones'],
  ['I3', 'Entre $20 y $30 millones'],
  ['I4', 'Entre $30 y $50 millones'],
  ['I5', 'Más de $50 millones'],
  ['IP', 'Prefiero conversarlo en privado'],
];

const intents = [
  ['BOOKING', 'Quiero agendar una revisión privada con Axia'],
  ['PROGRAMS', 'Quiero conocer los programas de planeación financiera'],
  ['LATER', 'Quiero recibir información y decidir más adelante'],
];

const initialForm = {
  name: '',
  whatsapp: '',
  email: '',
  city: '',
  consent_data: false,
  consent_commercial: false,
  liquidity_answer: '',
  debt_answer: '',
  protection_answer: '',
  investment_answer: '',
  retirement_answer: '',
  principal_concern: [],
  income_range: '',
  intent: '',
};

const getErrorMessage = (error) => {
  if (error?.response?.status === 400) return 'Revisa la información e inténtalo nuevamente.';
  if (error?.code === 'ECONNABORTED' || error?.code === 'ERR_NETWORK') {
    return 'No pudimos conectar con el servicio. Revisa tu conexión e inténtalo de nuevo.';
  }
  return 'No pudimos completar tu chequeo en este momento. Inténtalo nuevamente.';
};

function FinancialCheckup() {
  const serverURL = useSelector((state) => state.serverURL.serverURL);
  const [stage, setStage] = useState('intro');
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [requestError, setRequestError] = useState('');

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validatePersonal = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Escribe tu nombre y apellido.';
    if (!/^[+\d\s()-]{7,}$/.test(form.whatsapp.trim())) nextErrors.whatsapp = 'Escribe un WhatsApp válido.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Escribe un correo válido.';
    if (!form.city.trim()) nextErrors.city = 'Escribe tu ciudad.';
    if (!form.consent_data) nextErrors.consent_data = 'Necesitamos tu autorización para continuar.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const selectAnswer = (key, value) => {
    updateField(key, value);
    const index = questions.findIndex((question) => question.key === key);
    window.setTimeout(() => {
      if (index === questions.length - 1) setStage('concern');
      else setStage(`question-${index + 1}`);
      window.scrollTo(0, 0);
    }, 180);
  };

  const selectConcern = (value) => {
    const selected = form.principal_concern;
    const next = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : selected.length < 2 ? [...selected, value] : selected;
    updateField('principal_concern', next);
  };

  const chooseIntent = async (intent) => {
    updateField('intent', intent);

    if (intent === 'PROGRAMS') {
      window.location.assign('https://axia.com.co/finanzas-personales/');
      return;
    }

    setStage('loading-intent');
    setRequestError('');
    try {
      const response = await submitFinancialCheckup(serverURL, { ...form, intent });
      const data = response?.data || response;
      setResult(data);
      setStage('result');
    } catch (error) {
      setRequestError(getErrorMessage(error));
      setStage('intent');
    }
  };

  const openBooking = () => {
    const bookingUrl = import.meta.env.VITE_BOOKING_URL;
    if (bookingUrl) window.location.assign(bookingUrl);
    else setRequestError('La agenda aún no está configurada. Déjanos tus datos y te contactaremos.');
  };

  const priorityCopy = {
    LIQUIDEZ: 'Tu capacidad para mantener tu estilo de vida frente a una interrupción de ingresos podría fortalecerse.',
    DEUDA: 'Una correcta estructura de deuda puede liberar flujo de caja y acelerar la construcción de patrimonio.',
    PROTECCIÓN: 'Vale la pena revisar si tus coberturas realmente protegen tu estilo de vida, tus ingresos y a tu familia.',
    INVERSIÓN: 'Existe una oportunidad de convertir el ahorro en una estrategia estructurada y conectada con tus objetivos.',
    RETIRO: 'Cuantificar el patrimonio que necesitas permite saber cuánto invertir, durante cuánto tiempo y qué rentabilidad buscar.',
  };

  if (stage === 'intro') {
    return (
      <main className="checkup-shell checkup-intro">
        <div className="checkup-brand"><img src="/LOGO.png" alt="Axia" /><span>FINANZAS PERSONALES</span></div>
        <p className="checkup-eyebrow">Chequeo financiero inicial</p>
        <h1>¿Tus ingresos crecieron.<br /><em>Tu patrimonio también?</em></h1>
        <p className="checkup-lead">Descubre en 60 segundos cómo están tus 5 signos vitales financieros.</p>
        <div className="vital-list">{questions.map((item) => <span key={item.key}>{item.name}</span>)}</div>
        <button className="checkup-button" onClick={() => setStage('personal')}>Comenzar mi chequeo</button>
        <p className="checkup-footnote">Sin registro, sin contraseñas. Tus respuestas son confidenciales.</p>
      </main>
    );
  }

  if (stage === 'personal') {
    return (
      <main className="checkup-shell">
        <div className="checkup-brand"><img src="/LOGO.png" alt="Axia" /><span>FINANZAS PERSONALES</span></div>
        <section className="checkup-card">
          <p className="checkup-eyebrow">Antes de comenzar</p>
          <h2>Cuéntanos un poco sobre ti</h2>
          <p className="checkup-muted">Usaremos estos datos para entregarte una orientación más útil.</p>
          <form onSubmit={(event) => { event.preventDefault(); if (validatePersonal()) setStage('question-0'); }}>
            {[
              ['name', 'Nombre y apellido', 'text'],
              ['whatsapp', 'WhatsApp', 'tel'],
              ['email', 'Correo electrónico', 'email'],
              ['city', 'Ciudad', 'text'],
            ].map(([field, label, type]) => (
              <label className="checkup-field" key={field}>
                <span>{label}</span>
                <input type={type} value={form[field]} onChange={(event) => updateField(field, event.target.value)} />
                {errors[field] && <small className="checkup-error">{errors[field]}</small>}
              </label>
            ))}
            <label className="checkup-check">
              <input type="checkbox" checked={form.consent_data} onChange={(event) => updateField('consent_data', event.target.checked)} />
              <span>Autorizo a Axia Finanzas Personales S.A.S. para tratar mis datos de acuerdo con su Política de Tratamiento de Datos.</span>
            </label>
            {errors.consent_data && <small className="checkup-error">{errors.consent_data}</small>}
            <label className="checkup-check">
              <input type="checkbox" checked={form.consent_commercial} onChange={(event) => updateField('consent_commercial', event.target.checked)} />
              <span>Acepto recibir información sobre educación financiera, servicios y beneficios de Axia.</span>
            </label>
            <button className="checkup-button" type="submit">Continuar</button>
          </form>
        </section>
      </main>
    );
  }

  if (stage.startsWith('question-')) {
    const questionIndex = Number(stage.split('-')[1]);
    const current = questions[questionIndex];
    return (
      <main className="checkup-shell">
        <div className="checkup-topline"><img className="checkup-topline-logo" src="/LOGO.png" alt="Axia" /><span>{questionIndex + 1} / 5</span></div>
        <div className="checkup-progress"><span style={{ width: `${((questionIndex + 1) / 5) * 100}%` }} /></div>
        <section className="checkup-question">
          <p className="checkup-eyebrow">{questionIndex + 1} de 5 · {current.name}</p>
          <h2>{current.question}</h2>
          <div className="checkup-options">
            {current.options.map(([value, label]) => (
              <button key={value} className="checkup-option" onClick={() => selectAnswer(current.key, value)}>{label}</button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (stage === 'concern' || stage === 'income') {
    const isConcern = stage === 'concern';
    return (
      <main className="checkup-shell">
        <div className="checkup-topline"><img className="checkup-topline-logo" src="/LOGO.png" alt="Axia" /><span>{isConcern ? 'Una última mirada' : 'Personalicemos tu orientación'}</span></div>
        <section className="checkup-question">
          <p className="checkup-eyebrow">{isConcern ? 'Tu prioridad' : 'Rango de ingresos'}</p>
          <h2>{isConcern ? '¿Cuál es hoy el tema financiero que más te gustaría mejorar?' : '¿En qué rango se encuentran aproximadamente tus ingresos mensuales?'}</h2>
          <p className="checkup-muted">{isConcern ? 'Puedes elegir máximo dos opciones.' : 'Esta información nos ayuda a darte un contexto más útil y no es invasiva.'}</p>
          <div className="checkup-options">
            {(isConcern ? concerns : incomeRanges).map(([value, label]) => (
              <button key={value} className={`checkup-option ${isConcern && form.principal_concern.includes(value) ? 'selected' : ''}`} onClick={() => isConcern ? selectConcern(value) : updateField('income_range', value)}>{label}</button>
            ))}
          </div>
          {requestError && <p className="checkup-error" role="alert">{requestError}</p>}
          <button className="checkup-button" disabled={isConcern ? form.principal_concern.length === 0 : !form.income_range} onClick={() => isConcern ? setStage('income') : setStage('intent')}>{isConcern ? 'Continuar' : 'Continuar'}</button>
        </section>
      </main>
    );
  }

  if (stage === 'loading' || stage === 'loading-intent') {
    return <main className="checkup-shell checkup-centered"><div className="checkup-spinner" /><p>{stage === 'loading' ? 'Listo. Estamos calculando tus resultados…' : 'Guardando tu elección…'}</p></main>;
  }

  if (stage === 'result' || stage === 'complete') {
    const scores = result?.scores || {
      liquidity: result?.liquidity_score,
      debt: result?.debt_score,
      protection: result?.protection_score,
      investment: result?.investment_score,
      retirement: result?.retirement_score,
    };
    const priority = result?.priority_area || result?.priorityArea;
    return (
      <main className="checkup-shell">
        <div className="checkup-brand"><img src="/LOGO.png" alt="Axia" /><span>FINANZAS PERSONALES</span></div>
        <section className="checkup-result">
          <p className="checkup-eyebrow">{stage === 'complete' ? 'Gracias por confiar en Axia' : 'Tu chequeo financiero inicial'}</p>
          <h1>{stage === 'complete' ? 'Recibimos tu elección.' : `${form.name.split(' ')[0]}, este es tu chequeo`}</h1>
          <h2>{result?.global_result || 'Hay oportunidades importantes de optimización'}</h2>
          <div className="score-list">
            {[['Liquidez', 'liquidity'], ['Deuda', 'debt'], ['Protección', 'protection'], ['Inversión', 'investment'], ['Retiro', 'retirement']].map(([label, key]) => {
              const score = scores[key] || 0;
              return (
                <div className="score-row" key={key}>
                  <span>{label}</span>
                  <span className="score-dots" aria-label={`${Math.min(score, 3)} de 3`}>
                    {[0, 1, 2].map((brain) => (
                      <svg className={`vascular-icon ${brain < score ? 'filled' : ''}`} viewBox="0 0 40 32" aria-hidden="true" key={brain}>
                        <path className="brain-outline" d="M20 27c-2 3-7 2-8-2-4 1-7-2-5-5-4-2-3-6 1-7-2-4 1-7 5-6 0-4 5-6 7-2 2-4 7-2 7 2 4-1 7 2 5 6 4 1 5 5 1 7 2 3-1 6-5 5-1 4-6 5-8 2Z" />
                        <path className="brain-fissure" d="M20 6c-1 4 1 6 0 10s1 6 0 11" />
                        <path className="vascular-network" d="M20 27c-1-4 1-7 0-11s1-7 0-10M20 12c-3-1-5-3-6-6M20 13c3-1 5-3 6-6M20 16c-4-1-7-2-10-5M20 16c4-1 7-2 10-5M20 19c-3 0-6 1-9 4M20 19c3 0 6 1 9 4M20 22c-2 2-3 3-4 5M20 22c2 2 3 3 5 4" />
                      </svg>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
          {priority && <div className="priority-box"><strong>Tu principal oportunidad: {priority}</strong><p>{priorityCopy[priority] || 'Identificar esta área puede ayudarte a tomar mejores decisiones financieras.'}</p></div>}
          <p className="checkup-muted">Este chequeo es solo el comienzo. Una situación financiera no puede evaluarse completamente con cinco preguntas. En Axia analizamos integralmente tu contexto para construir una estrategia personalizada.</p>
          {requestError && <p className="checkup-error" role="alert">{requestError}</p>}
          {stage === 'result' && <button className="checkup-button" onClick={openBooking}>Quiero revisar mis resultados con Axia</button>}
        </section>
      </main>
    );
  }

  return (
    <main className="checkup-shell">
      <section className="checkup-card">
        <p className="checkup-eyebrow">Tu siguiente paso</p>
        <h2>¿Qué te gustaría hacer ahora?</h2>
        <div className="checkup-options">{intents.map(([value, label]) => <button className="checkup-option" key={value} onClick={() => chooseIntent(value)}>{label}</button>)}</div>
        {requestError && <p className="checkup-error" role="alert">{requestError}</p>}
      </section>
    </main>
  );
}

export default FinancialCheckup;
