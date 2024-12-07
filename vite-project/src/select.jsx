import { useState, useRef, useEffect } from 'react';
import './CreativeFloatingSelect.css';

function CreativeFloatingSelect({ options, seccion }) {
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
    // Buscamos el elemento original (que tiene el ícono de duplicar)
    const originalElement = document.querySelector(`[name="${option}"]`);
  
    if (originalElement) {
      // Creamos un clon del contenedor completo (selected-option)
      const clone = originalElement.closest('.selected-option').cloneNode(true);
  
      // Modificamos solo el nombre del input dentro del clon para que sea igual al original
      const inputField = clone.querySelector('[name]');
      if (inputField) {
        inputField.name = option; // El nombre permanece igual
      }
  
      // Eliminar el ícono de duplicación en el clon (si existe)
      const duplicateIcon = clone.querySelector('.duplicate-icon'); // Suponiendo que el ícono tiene la clase 'duplicate-icon'
      if (duplicateIcon) {
        duplicateIcon.remove(); // Elimina el ícono de duplicación en el clon
      }
  
      // Insertamos el clon en el DOM, al lado del original
      originalElement.closest('.selected-option').parentNode.insertBefore(clone, originalElement.closest('.selected-option').nextSibling);
  
     
      // 1. Evento para el ícono de información    
    const infoIcons = clone.querySelectorAll('.Icon_Help');
    
    infoIcons.forEach(function(infoIcon) {    
      infoIcon.addEventListener('click', function() {       
        const selectedOption = options.find((opt) => opt.value === option);
        setHelpText(selectedOption?.Help || 'No hay ayuda disponible.');
      });
    });
  
      // 2. Evento para el botón de eliminar
      const removeButton = clone.querySelector('.remove-button');
      if (removeButton) {
        removeButton.addEventListener('click', function() {         
          clone.remove(); // Elimina el contenedor clonado
        });
      }
    } else {
      console.log('El elemento original no se encuentra.');
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
            <div key={option} className="selected-option" >
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
                  type={selectedOption?.type === 'number' ? 'number' : 'text'}
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
      <div className="select-container" data-section={seccion || 'default-value'}>
        <div ref={selectRef} >
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
          <div className="help-popup">
            <div className='Cont-Help'>
              <span  className="bi bi-question-circle Icon_Help2"></span>
              <p>{helpText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreativeFloatingSelect;
