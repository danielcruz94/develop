import React, { useState, useRef, useEffect } from 'react';
import './CreativeFloatingSelect.css';

function CreativeFloatingSelect({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); 
  const [helpText, setHelpText] = useState(null); 
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setHelpText(null); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Maneja el cambio de selección
  const handleSelectChange = (value) => {
    if (value && !selectedOptions.includes(value)) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    }
  };

  // Elimina una opción seleccionada
  const removeOption = (optionToRemove) => {
    setSelectedOptions((prevOptions) => 
      prevOptions.filter((option) => option !== optionToRemove)
    );
  };

  // Filtra las opciones disponibles (excluyendo las seleccionadas)
  const filteredOptions = options.filter(
    (option) => !selectedOptions.includes(option.value)
  );

    const duplicateInput = (option) => {
      // Filtramos las opciones que comienzan con el valor de 'option' seguido de un guion y un número
      const regex = new RegExp(`^${option}-(\\d+)$`);
      const matchingOptions = selectedOptions.filter(opt => regex.test(opt));

      // Si hay coincidencias, buscamos el sufijo numérico más alto
      const highestSuffix = matchingOptions.reduce((max, opt) => {
        const match = opt.match(regex);
        const suffix = match ? parseInt(match[1], 10) : 0;
        return Math.max(max, suffix);
      }, 0);

      // Generamos el nuevo nombre con el siguiente sufijo
      const newOption = `${option}-${highestSuffix + 1}`;

      // Encontramos el índice de la opción original en el arreglo
      const originalIndex = selectedOptions.indexOf(option);

      // Si la opción original existe, insertamos la nueva opción después de ella
      if (originalIndex !== -1) {
        setSelectedOptions((prevOptions) => {
          const updatedOptions = [...prevOptions];
          updatedOptions.splice(originalIndex + 1, 0, newOption); // Insertamos la nueva opción después de la original
          return updatedOptions;
        });
      } else {
        // Si la opción original no existe, solo agregamos la nueva opción al final
        setSelectedOptions((prevOptions) => [...prevOptions, newOption]);
      }
    };

  
  // Muestra la ayuda flotante
  const handleHelpClick = (event, option) => {
    const selectedOption = options.find((opt) => opt.value === option);
    setHelpText(selectedOption?.Help || 'No hay ayuda disponible.');
    setClickPosition({ x: event.clientX, y: event.clientY });
  };

  // Renderiza las opciones disponibles
  const renderOptions = () => {
    return filteredOptions.map((option) => (
      <li key={option.value}>
        <button onClick={() => handleSelectChange(option.value)}>
          {option.label}
        </button>
      </li>
    ));
  };

  // Renderiza las opciones seleccionadas
  const renderSelectedOptions = () => {
    if (selectedOptions.length === 0) {
      return <p>No hay opciones seleccionadas</p>;
    }

    return (
      <div className="selected-options-container">
        {selectedOptions.map((option) => {
          const selectedOption = options.find((opt) => opt.value === option);
          
          // Verifica si la opción es una opción original o una duplicada
          const isDuplicate = option.includes('-'); // Las opciones duplicadas tendrán un guión y un número

          return (
            <div key={option} className="selected-option">
              <div className="input-container">
                {/* Solo las opciones originales tendrán el ícono de duplicar */}
                {!isDuplicate && selectedOption?.visible && (
                  <span
                    className="duplicate-icon"
                    onClick={() => duplicateInput(option)}
                  >
                    <i className="bi bi-plus-circle duplicate-icon2"></i>
                  </span>
                )}
                <input
                  type="text"
                  placeholder={selectedOption ? selectedOption.label : option}
                  name={option}
                  className="selected-input"
                />
              </div>
              <div className="icon-container">
                <span
                  className="bi bi-question-circle Icon_Help"
                  title="Más información"
                  id={option}
                  onClick={(e) => handleHelpClick(e, option)}
                />
                <button
                  onClick={() => removeOption(option)}
                  className="remove-button"
                  aria-label={`Eliminar ${option}`}
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="SelectContainer">
      <div className="select-container">
        <div ref={selectRef}>
          <button
            className="select-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>+</span>
            <span>Agregar opción</span>
            <span className={`chevron ${isOpen ? 'open' : ''}`}>▼</span>
          </button>

          {isOpen && (
            <div className="select-options">
              <h3>Selecciona una opción</h3>
              <ul>{renderOptions()}</ul>
            </div>
          )}
        </div>

        <div className="selected-options">
          <h2>Opciones seleccionadas</h2>
          {renderSelectedOptions()}
        </div>

        {helpText && (
          <div
            className="help-popup"
          >
            <p>{helpText}</p>
            <button onClick={() => setHelpText(null)}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreativeFloatingSelect;
