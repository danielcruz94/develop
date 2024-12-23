import { useState, useEffect, useRef } from 'react';
import './ObjectiveInputForm.css'; 

function DebtInputForm({ seccion }) {

  const fieldHelpText = {
    pasivo: "El nombre del pasivo o deuda, por ejemplo, 'Préstamo Personal'.",
    saldoCapital: "El saldo actual de la deuda o préstamo.",
    entidad: "La entidad a la que se le debe, como un banco o institución financiera.",
    tasa: "La tasa de interés anual del préstamo que cobra el banco.",
    cuotasPendientes: "El número de cuotas que quedan por pagar.",
    cuotaMensual: "El monto de la cuota mensual que se debe pagar."
  };

  
  const [rows, setRows] = useState([{
    pasivo: '',
    saldoCapital: '',
    entidad: '',
    tasa: '',
    cuotasPendientes: '',
    cuotaMensual: ''
  }]);

  const [helpText, setHelpText] = useState(null);  
  const helpPopupRef = useRef(null);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };
 
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
    <div className="debt-input-form" data-section={seccion || 'default-value'}>

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
            <p>Pasivo</p>
              <div className="input-container2">
                <input
                  type="text"
                  name={`pasivo`} 
                  value={row.pasivo}
                  onChange={(e) => handleInputChange(index, 'pasivo', e.target.value)}                  
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'pasivo')}
                />
              </div>
            </div>

            <div className="input-group">
            <p>Saldo de Capital</p>
              <div className="input-container2">
                <input
                  type="number"
                  name={`saldoCapital`}  
                  value={row.saldoCapital}
                  onChange={(e) => handleInputChange(index, 'saldoCapital', e.target.value)}                 
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'saldoCapital')}
                />
              </div>
            </div>

            <div className="input-group">
            <p>Entidad</p>
              <div className="input-container2">
                <input
                  type="text"
                  name={`entidad`}  
                  onChange={(e) => handleInputChange(index, 'entidad', e.target.value)}                  
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'entidad')}
                />
              </div>
            </div>

            <div className="input-group">
            <p>Tasa (%)</p>
              <div className="input-container2">
                <input
                  type="number"
                  name={`tasa`}  
                  value={row.tasa}
                  onChange={(e) => handleInputChange(index, 'tasa', e.target.value)}                  
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'tasa')}
                />
              </div>
            </div>

            <div className="input-group">
            <p>Cuotas Pendientes</p>
              <div className="input-container2">
                <input
                  type="number"
                  name={`cuotasPendientes`} 
                  value={row.cuotasPendientes}
                  onChange={(e) => handleInputChange(index, 'cuotasPendientes', e.target.value)}                 
                />
                <span
                  className="bi bi-question-circle Icon_Help2"
                  title="Más información"
                  onClick={(e) => handleHelpClick(e, 'cuotasPendientes')}
                />
              </div>
            </div>

            <div className="input-group">
            <p>Cuota Mensual</p>
              <div className="input-container2">
                <input
                  type="number"
                  name={`cuotaMensual`}  
                  value={row.cuotaMensual}
                  onChange={(e) => handleInputChange(index, 'cuotaMensual', e.target.value)}                  
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
}

export default DebtInputForm;
