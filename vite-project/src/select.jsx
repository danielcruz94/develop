import React, { useState, useRef, useEffect } from 'react';
import './CreativeFloatingSelect.css';

// Componente principal
function CreativeFloatingSelect({ options }) {  // Las opciones ahora se reciben como prop
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const selectRef = useRef(null);

  // Maneja el clic fuera del componente para cerrar el select
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
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

  // Función para renderizar las opciones disponibles
  const renderOptions = () => {
    return options.map((option) => (
      <li key={option.value}>
        <button onClick={() => handleSelectChange(option.value)}>
          {option.label}
        </button>
      </li>
    ));
  };

  // Función para renderizar las opciones seleccionadas
  const renderSelectedOptions = () => {
    if (selectedOptions.length === 0) {
      return <p>No hay opciones seleccionadas</p>;
    }

    return (
      <ul>
        {selectedOptions.map((option) => (
          <li key={option} className="selected-option">
            <span>{options.find((o) => o.value === option)?.label}</span>
            <button
              onClick={() => removeOption(option)}
              className="remove-button"
              aria-label={`Eliminar ${options.find((o) => o.value === option)?.label}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
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
      </div>
    </div>
  );
}

export default CreativeFloatingSelect;
