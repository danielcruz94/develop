import React, { useState, useEffect, useRef } from 'react';
import './ObjectiveInputForm.css'; // Estilos


function DebtInputForm( {seccion }) {
  // Array de objetos que contiene las explicaciones de cada campo
  const fieldHelpText = {
    pasivo: "El nombre del pasivo o deuda, por ejemplo, 'Préstamo Personal'.",
    saldoCapital: "El saldo actual de la deuda o préstamo.",
    entidad: "La entidad a la que se le debe, como un banco o institución financiera.",
    tasa: "La tasa de interés anual del préstamo, en porcentaje.",
    cuotasPendientes: "El número de cuotas que quedan por pagar.",
    cuotaMensual: "El monto de la cuota mensual que se debe pagar."
  };

  // Inicializamos el estado con una fila por defecto
  const [rows, setRows] = useState([{
    pasivo: '',
    saldoCapital: '',
    entidad: '',
    tasa: '',
    cuotasPendientes: '',
    cuotaMensual: ''
  }]);

  const [helpText, setHelpText] = useState(null);  // Para mostrar el texto de ayuda
  const helpPopupRef = useRef(null);

  // Maneja los cambios de cada input
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Duplicar la fila de inputs
  const handleDuplicateRow = () => {
    setRows([...rows, {
      pasivo: '',
      saldoCapital: '',
      entidad: '',
      tasa: '',
      cuotasPendientes: '',
      cuotaMensual: ''
    }]);
  };

  // Eliminar una fila
  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  // Mostrar el popup de ayuda con la información específica del campo
  const handleHelpClick = (event, field) => {
    setHelpText(fieldHelpText[field]);
  };

  // Cerrar el popup cuando el usuario haga clic en cualquier parte de la pantalla
  const handleClickAnywhere = () => {
    setHelpText(null); // Cerrar el popup
  };

  // Agregar el evento para detectar clics en cualquier parte cuando el componente se monta
  useEffect(() => {
    document.addEventListener('mousedown', handleClickAnywhere);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleClickAnywhere);
    };
  }, []);

  return (
    <div className="debt-input-form" data-section={seccion || 'default-value'}>

      <div className="form-container">
        {rows.map((row, index) => (
          <div key={index} className="form-row">
            {/* Mostrar la X de eliminar solo en las filas copiadas (índice > 0) y al inicio */}
            {index > 0 && (
              <button onClick={() => handleRemoveRow(index)} className="remove-btn">
                <span className="bi bi-x"></span> {/* Icono de X */}
              </button>
            )}

            {/* Icono de duplicar solo en la primera fila */}
            {index === 0 && (
              <span
                className="bi bi-plus-circle duplicate-icon"
                onClick={handleDuplicateRow}
                title="Duplicar fila"
              />
            )}

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="text"
                  value={row.pasivo}
                  onChange={(e) => handleInputChange(index, 'pasivo', e.target.value)}
                  placeholder="Pasivo"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'pasivo')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="number"
                  value={row.saldoCapital}
                  onChange={(e) => handleInputChange(index, 'saldoCapital', e.target.value)}
                  placeholder="Saldo de Capital"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'saldoCapital')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="text"
                  value={row.entidad}
                  onChange={(e) => handleInputChange(index, 'entidad', e.target.value)}
                  placeholder="Entidad"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'entidad')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="number"
                  value={row.tasa}
                  onChange={(e) => handleInputChange(index, 'tasa', e.target.value)}
                  placeholder="Tasa (%)"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'tasa')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="number"
                  value={row.cuotasPendientes}
                  onChange={(e) => handleInputChange(index, 'cuotasPendientes', e.target.value)}
                  placeholder="# Cuotas Pendientes"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'cuotasPendientes')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="number"
                  value={row.cuotaMensual}
                  onChange={(e) => handleInputChange(index, 'cuotaMensual', e.target.value)}
                  placeholder="Cuota Mensual"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'cuotaMensual')}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {helpText && (
        <div className="help-popup" ref={helpPopupRef}>
          <div className="Cont-Help">
            <span className="bi bi-question-circle Icon_Help2"></span>
            <p>{helpText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebtInputForm;
