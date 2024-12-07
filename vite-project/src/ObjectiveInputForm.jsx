import React, { useState, useEffect, useRef } from 'react';
import './ObjectiveInputForm.css'; // Estilos

function ObjectiveInputForm( {seccion }) {
  const fieldHelpText = {
    objetivo: "El objetivo que deseas alcanzar, por ejemplo, 'Ahorro para la educación'.",
    descripcion: "Describe el objetivo detalladamente, incluyendo los motivos por los que lo estableces.",
    plazo: "El plazo estimado en años para alcanzar este objetivo.",
    vrObjetivo: "El valor monetario estimado para cumplir con el objetivo.",
    comentarios: "Comentarios adicionales sobre el objetivo o el plan para alcanzarlo."
  };

 

  const [rows, setRows] = useState([{
    objetivo: '',
    descripcion: '',
    plazo: '',
    vrObjetivo: '',
    comentarios: ''
  }]);

  const [helpText, setHelpText] = useState(null);  // Para mostrar el texto de ayuda
  const helpPopupRef = useRef(null);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleDuplicateRow = () => {
    setRows([...rows, {
      objetivo: '',
      descripcion: '',
      plazo: '',
      vrObjetivo: '',
      comentarios: ''
    }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleHelpClick = (event, field) => {
    setHelpText(fieldHelpText[field]);
  };

  const handleClickAnywhere = () => {
    setHelpText(null); // Cerrar el popup
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickAnywhere);
    return () => {
      document.removeEventListener('mousedown', handleClickAnywhere);
    };
  }, []);

  return (
    <div className="objective-input-form" data-section={seccion || 'default-value'}> 

      <div className="form-container">
        {rows.map((row, index) => (
          <div key={index} className="form-row">
            {index > 0 && (
              <button onClick={() => handleRemoveRow(index)} className="remove-btn">
                <span className="bi bi-x"></span>
              </button>
            )}

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
                  name={`objetivo-${index}`}  // Asignamos el name único por fila
                  value={row.objetivo}
                  onChange={(e) => handleInputChange(index, 'objetivo', e.target.value)}
                  placeholder="Objetivo"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'objetivo')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="text"
                  name={`descripcion-${index}`}  // Asignamos el name único por fila
                  value={row.descripcion}
                  onChange={(e) => handleInputChange(index, 'descripcion', e.target.value)}
                  placeholder="Descripción"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'descripcion')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="number"
                  name={`plazo-${index}`}  // Asignamos el name único por fila
                  value={row.plazo}
                  onChange={(e) => handleInputChange(index, 'plazo', e.target.value)}
                  placeholder="Plazo (Años)"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'plazo')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="number"
                  name={`vrObjetivo-${index}`}  // Asignamos el name único por fila
                  value={row.vrObjetivo}
                  onChange={(e) => handleInputChange(index, 'vrObjetivo', e.target.value)}
                  placeholder="Valor del objetivo"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'vrObjetivo')}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-container2">
                <input
                  type="text"
                  name={`comentarios-${index}`}  // Asignamos el name único por fila
                  value={row.comentarios}
                  onChange={(e) => handleInputChange(index, 'comentarios', e.target.value)}
                  placeholder="Comentarios"
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'comentarios')}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {helpText && (
        <div className="help-popup" ref={helpPopupRef}>
          <div className="Cont-Help">
            <span className="bi bi-question-circle Icon_Help"></span>
            <p>{helpText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ObjectiveInputForm;
