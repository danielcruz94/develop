import React, { useState, useEffect, useRef } from 'react';
import './ObjectiveInputForm.css';

function ObjectiveInputForm({ seccion }) {
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

  const [helpText, setHelpText] = useState(null); // Para mostrar el texto de ayuda
  const helpPopupRef = useRef(null);

  const formatNumber = (value) => {
    return value.replace(/\D/g, '') // Remueve caracteres no numéricos
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Agrega puntos para miles
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    // Aplica formato solo para los campos numéricos
    if (field === 'plazo' || field === 'vrObjetivo') {
      updatedRows[index][field] = formatNumber(value);
    } else {
      updatedRows[index][field] = value;
    }
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
              <p>Objetivo</p>
              <div className="input-container2">
                <input
                  type="text"
                  name={`objetivo`}
                  value={row.objetivo}
                  onChange={(e) => handleInputChange(index, 'objetivo', e.target.value)}
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'objetivo')}
                />
              </div>
            </div>

            <div className="input-group">
              <p>Descripción</p>
              <div className="input-container2">
                <input
                  type="text"
                  name={`descripcion`}
                  value={row.descripcion}
                  onChange={(e) => handleInputChange(index, 'descripcion', e.target.value)}
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'descripcion')}
                />
              </div>
            </div>

            <div className="input-group">
              <p>Plazo (Años)</p>
              <div className="input-container2">
                <input
                  type="text" // Cambiado a 'text' para permitir el formato
                  name={`plazo`}
                  value={row.plazo}
                  onChange={(e) => handleInputChange(index, 'plazo', e.target.value)}
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'plazo')}
                />
              </div>
            </div>

            <div className="input-group">
              <p>Valor del objetivo</p>
              <div className="input-container2">
                <input
                  type="text" // Cambiado a 'text' para permitir el formato
                  name={`vrObjetivo`}
                  value={row.vrObjetivo}
                  onChange={(e) => handleInputChange(index, 'vrObjetivo', e.target.value)}
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'vrObjetivo')}
                />
              </div>
            </div>

            <div className="input-group">
              <p>Comentarios</p>
              <div className="input-container2">
                <input
                  type="text"
                  name={`comentarios`}
                  value={row.comentarios}
                  onChange={(e) => handleInputChange(index, 'comentarios', e.target.value)}
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
}

export default ObjectiveInputForm;
