import { useState, useEffect, useRef } from 'react';
import './ObjectiveInputForm.css'; 
import { data } from 'react-router-dom';

function DebtInputForm({ seccion, data }) {

  const fieldHelpText = {
    pasivo: "El nombre del pasivo o deuda, por ejemplo, 'Préstamo Personal'.",
    saldoCapital: "El saldo actual de la deuda o préstamo.",
    entidad: "La entidad a la que se le debe, como un banco o institución financiera.",
    tasa: "La tasa de interés anual del préstamo que cobra el banco.",
    cuotasPendientes: "El número de cuotas que quedan por pagar.",
    cuotaMensual: "El monto de la cuota mensual que se debe pagar."
  };

  const [deudas, setDeudas] = useState([
    {
      "pasivo": "",
      "saldoCapital": "",
      "entidad": "",
      "tasa": "",
      "cuotasPendientes": "",
      "cuotaMensual": ""
    }
  ]);

  useEffect(() => {
    setDeudas(data);
  }, [data]);

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

  useEffect(() => {
    if (deudas && deudas.length > 0 && deudas[0].pasivo) {
      if (Array.isArray(deudas[0].pasivo)) {
        const formattedData = deudas[0].pasivo.map((pasivo, index) => ({
          pasivo: pasivo,
          saldoCapital: formatNumber(deudas[0].saldoCapital[index]),
          entidad: deudas[0].entidad[index],
          tasa: formatNumber(deudas[0].tasa[index]),
          cuotasPendientes: formatNumber(deudas[0].cuotasPendientes[index]),
          cuotaMensual: formatNumber(deudas[0].cuotaMensual[index]),
        }));
        setRows(formattedData);
      } else if (typeof deudas[0].pasivo === 'string') {
        const formattedData = [{
          pasivo: deudas[0].pasivo || '',
          saldoCapital: formatNumber(deudas[0].saldoCapital || ''),
          entidad: deudas[0].entidad || '',
          tasa: formatNumber(deudas[0].tasa || ''),
          cuotasPendientes: formatNumber(deudas[0].cuotasPendientes || ''),
          cuotaMensual: formatNumber(deudas[0].cuotaMensual || ''),
        }];
        setRows(formattedData);
      }
    }
  }, [deudas]);

  const formatNumber = (num) => {
    if (!num) return '';
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const parseNumber = (num) => {
    return num.replace(/\./g, '').trim(); // Eliminar puntos y devolver como texto para manejarlo como número
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    // Se parsea el valor al número para luego formatearlo correctamente
    updatedRows[index][field] = formatNumber(parseNumber(value));
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
              <p>Nombre de deuda</p>
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
              <p>Cuanto debes</p>
              <div className="input-container2">
                <input
                  type="text"  // Cambiado a text para manejar mejor el formateo de números
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
                  value={row.entidad}
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
              <p>Tasa Anual (%)</p>
              <div className="input-container2">
                <input
                  type="text"  // Cambiado a text para manejar correctamente el formato
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
                  type="text"  // Cambiado a text para el mismo motivo
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
                  type="text"  // Cambiado a text para el mismo motivo
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
