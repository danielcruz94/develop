import React, { useState, useRef, useEffect } from 'react';
import './CreativeFloatingSelect.css';

// Componente principal
function CreativeFloatingSelect({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [helpText, setHelpText] = useState(null); // Estado para manejar el texto de ayuda
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 }); // Estado para la posición del clic
  const selectRef = useRef(null);

  // Maneja el clic fuera del componente para cerrar el select
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setHelpText(null); // Cierra la ayuda si se hace clic fuera
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para manejar el cambio de selección
  const handleSelectChange = (value) => {
    if (value && !selectedOptions.includes(value)) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    }
  };

  // Función para eliminar una opción seleccionada
  const removeOption = (optionToRemove) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option !== optionToRemove)
    );
  };

  // Filtrar las opciones disponibles (excluir las seleccionadas)
  const filteredOptions = options.filter(
    (option) => !selectedOptions.includes(option.value)
  );

  // Función para manejar la adición de un nuevo div con input duplicado
  const duplicateInput = (option, index) => {
    setSelectedOptions((prevOptions) => [
      ...prevOptions,
      `${option}-${index + 1}`,
    ]);
  };

  // Función para manejar el clic en el ícono de ayuda
  const handleHelpClick = (event, option) => {
    const selectedOption = options.find((opt) => opt.value === option);
    setHelpText(selectedOption?.Help || 'No hay ayuda disponible.');

    // Capturar las coordenadas del clic
    setClickPosition({ x: event.clientX, y: event.clientY });
  };

  // Función para renderizar las opciones disponibles
  const renderOptions = () => {
    return filteredOptions.map((option) => (
      <li key={option.value}>
        <button onClick={() => handleSelectChange(option.value)}>
          {option.label}
        </button>
      </li>
    ));
  };

  // Función para renderizar los inputs de las opciones seleccionadas
  const renderSelectedOptions = () => {
    if (selectedOptions.length === 0) {
      return <p>No hay opciones seleccionadas</p>;
    }

    return (
      <div className="selected-options-container">
        {selectedOptions.map((option, index) => {
          // Encontramos el objeto completo usando el value
          const selectedOption = options.find((opt) => opt.value === option);

          return (
            <div key={option} className="selected-option">
              <div className="input-container">
                {/* Icono de duplicar */}
                <span
                  className="duplicate-icon"
                  onClick={() => duplicateInput(option, index)}
                >
                  +
                </span>
                <input
                  type="text"
                  placeholder={selectedOption ? selectedOption.label : option}  // Usamos label como placeholder
                  name={option}  // Usamos value como name
                  className="selected-input"
                />
              </div>
              <div className="icon-container">
                {/* Icono de ayuda */}
                <span
                  className="bi bi-question-circle Icon_Help"
                  title="Más información"
                  id={option} // Asignamos un id único basado en el value
                  onClick={(e) => handleHelpClick(e, option)} // Abrir ayuda
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

        {/* Aquí mostramos la ayuda flotante */}
        {helpText && (
          <div
            className="help-popup"
            style={{
              top: `${clickPosition.y }`, // Coloca el popup un poco abajo del clic
              left: `${clickPosition.x }`, // Coloca el popup un poco a la derecha del clic
            }}
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
