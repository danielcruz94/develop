import { useState, useRef, useEffect } from 'react';
import './CreativeFloatingSelect.css';

function CreativeFloatingSelect({ options, seccion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); 
  const [selectedValue, setSelectedValue] = useState(''); 
  const [helpText, setHelpText] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [isOtherInputVisible, setIsOtherInputVisible] = useState(false);
  const [otherProductName, setOtherProductName] = useState('');
  const [newOtherOption, setNewOtherOption] = useState(null);
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
  
  const handleSelectChange = (value) => {   
    
    // Guardamos el valor seleccionado en `selectedValue`
    setSelectedValue(value); 
  
  
    const validValues = [
      'salario_tradicional', 'salario_integral', 'arriendo', 'auxilio', 
      'beneficio', 'bonificacion', 'comisiones', 'dividendos', 
      'honorarios', 'prima_de_servicios', 'prima_extralegal', 'renta', 
      'subsidio_de_transporte', 'subsidio_familiar', 'otros',
      'cuenta_ahorros', 'cuenta_corriente', 'cuenta_en_otra_moneda', 'efectivo', 'otro',
      'acciones', 'apartamento', 'bienes_raices_para_inversion', 'bodega', 'bonos', 
      'cartera_colectiva', 'casa', 'cdt', 'cuenta_inversion_usd', 'cuenta_por_cobrar_a_terceros', 
      'empresa', 'fiducia', 'fondo_de_cesantias', 'fondo_obligatorio_de_pensiones', 
      'fondo_voluntario_de_pensiones', 'fondos_mutuos', 'local', 'negocio', 
      'participaciones_en_sociedades', 'semovientes', 'titulo_de_capitalizacion', 'otros',
      'apartamento', 'bodega', 'caballos', 'casa', 'finca', 'joyas', 'lancha', 'local', 
      'maquinas', 'moto', 'muebles_y_accesorios', 'terreno', 'vehiculo', 'otro',
      'cuenta_corriente', 'cuenta_de_ahorros', 'fiducias', 'fondo_de_empleados', 'inversiones_exterior',
      'cartera_colectiva', 'cooperativas', 'cuenta_afc', 'fondos_mutuos', 'pension_voluntaria',
      'provision_anualidades', 'otros'
    ];
  
    
  
    if (validValues.some(v => v.toLowerCase() === value.toLowerCase())) {
      setIsOtherInputVisible(true);  // Muestra el input para ingresar el texto adicional
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    }
  };
  
  

  const removeOption = (optionToRemove) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option !== optionToRemove)
    );
  };

  const filteredOptions = options.filter(
    (option) => !selectedOptions.includes(option.value)
  );

  const generateUniqueValue = (baseValue) => {
    return `${baseValue}-${Date.now()}`;
  };

  const handleAddOtherProduct = () => {
    if (otherProductName) {
      // Concatenamos el valor seleccionado con el texto ingresado por el usuario
      const concatenatedValue = `${selectedValue}-${otherProductName}`;
  
      // Agregamos la opción concatenada a `selectedOptions`
      setSelectedOptions((prevOptions) => [...prevOptions, concatenatedValue]);
  
      // Ocultamos el campo de entrada y reseteamos el texto
      setIsOtherInputVisible(false);
      setOtherProductName('');
    }
  };
  
  

  const duplicateInput = (option) => {
    // Encuentra el índice de la opción seleccionada
    const index = selectedOptions.findIndex((opt) => opt === option);
  
    if (index !== -1) {
      // Crea un nuevo valor único para la opción duplicada
      const newOption = generateUniqueValue(option);
  
      // Inserta la opción duplicada justo después de la original
      const updatedOptions = [
        ...selectedOptions.slice(0, index + 1), 
        newOption,  // Añade la nueva opción
        ...selectedOptions.slice(index + 1), 
      ];
  
      setSelectedOptions(updatedOptions);  
    }
  };
  
  
  

  const handleHelpClick = (event, option) => {
    const selectedOption = options.find((opt) => opt.value === option.split('-')[0]);
    
    setHelpText(selectedOption?.Help || 'Por favor, ingresa el valor correspondiente al producto seleccionado en el campo indicado.');
    setClickPosition({ x: event.clientX, y: event.clientY });
  };

  const renderOptions = () => {
    return filteredOptions.map((option) => (
      <li key={option.value}>
        <button onClick={() => handleSelectChange(option.value)}>{option.label}</button>
      </li>
    ));
  };

  const renderSelectedOptions = () => {
    if (selectedOptions.length === 0) {
      return <p>No hay opciones seleccionadas</p>;
    }
  
    return (
      <div className="selected-options-container">
        {selectedOptions.map((option) => {
          const variable = false;
          const isCustomOption = option.includes('Otros');
          const selectedOption = options.find((opt) => opt.value === option) || {};         
          const name = variable ? otherProductName || 'default' : option;

  
          let Datos = [];
  
          if (name === "") {
            if (option.includes('-')) {
              Datos = option.split('-');
            } else {
              Datos = [option, option];
            }
          } else {
            if (name.includes('-')) {
              Datos = name.split('-');            

            }else{
              Datos = [name, name]
            }
          }

       
          
          
  
          const firstData = Datos[0] || 'default';
          const secondData = !isNaN(Datos[1]) ? Datos[0] : Datos[1];

          
  
          return (
            <div key={option} className="selected-option" data-section={seccion === 'ingresos' ? firstData : undefined}>
            
              <div className='label-input'>
              <p >{name.replace(/[-_]/g, " ")}</p>
                  <div className="input-container">
                    {!isCustomOption && selectedOption?.visible && (
                      <span
                        className="duplicate-icon"
                        onClick={() => duplicateInput(option)}
                      >
                        <i className="bi bi-plus-circle duplicate-icon2"></i>
                      </span>
                    )}
                    <input
                      type={selectedOption?.type || "Number"}                     
                      name={secondData.charAt(0).toUpperCase() + secondData.slice(1).toLowerCase()}
                      onFocus={() => handleFocus(firstData)}
                      className="selected-input"
                    />
                  </div>
              </div>
              <div className="icon-container">
                <span
                  className="bi bi-question-circle Icon_Help"
                  title="Más información"
                  id={option.includes('-') ? option.split('-')[0] : option}
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
        <div ref={selectRef}>
          <button className="select-button" onClick={() => setIsOpen(!isOpen)}>
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

        {isOtherInputVisible && (
          <div className="other-input-container">           
            <input
              type="text"
              placeholder="Agregar el nombre del producto"
              value={otherProductName}
              onChange={(e) => setOtherProductName(e.target.value)}
            />
            <button onClick={handleAddOtherProduct}>Agregar</button>
          </div>
        )}

        {helpText && (
          <div className="help-popup">
            <div className="Cont-Help">
              <span className="bi bi-question-circle Icon_Help2"></span>
              <p>{helpText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreativeFloatingSelect;
