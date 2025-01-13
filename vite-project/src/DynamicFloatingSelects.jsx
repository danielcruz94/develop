import { useEffect } from 'react';

const DynamicInputs = ({ data, sectionName, onRemove }) => {

  
    useEffect(() => { 
      const selectedOptionsDiv = document.querySelector(`.select-container[data-section="${sectionName}"] .selected-options`);
      if (selectedOptionsDiv) {       
          const noOptionsText = selectedOptionsDiv.querySelector('p');
          if (noOptionsText) {
              noOptionsText.style.display = 'none';
          }        
          const optionsContainer = selectedOptionsDiv.querySelector('.selected-options-container');
          if (optionsContainer) {
              optionsContainer.innerHTML = ''; 
          }
        
          OrdenarData(data, selectedOptionsDiv, handleRemove);     
      }
    }, [data, sectionName]);  


   // Eliminar el elemento de data
    const handleRemove = (key, optionDiv) => {   
      const updatedData = data.filter(item => {
        return !item.hasOwnProperty(key);
      });

      // Si hay un callback onRemove, lo llamamos con la clave eliminada
      if (onRemove) {
        onRemove(key);
      }

      // Eliminar el div correspondiente del DOM
      if (optionDiv && optionDiv.parentNode) {
        optionDiv.parentNode.removeChild(optionDiv);
      }
    };

    function OrdenarData(data, selectedOptionsDiv, handleRemove) {
      let datos = {}; 
      
      if (Array.isArray(data)) {        
          data.forEach(item => {
              Object.assign(datos, procesarDatosRecursivos(item));
          });
      } else if (typeof(data) === 'object') {        
          Object.assign(datos, procesarDatosRecursivos(data));
      }
          
      generateDynamicContent(datos, selectedOptionsDiv, handleRemove);
  }

    // Función recursiva para procesar cualquier tipo de objeto (o array de objetos)
    function procesarDatosRecursivos(item) {
      let result = {};
    
      function procesar(itemInterno) {   
        if (Array.isArray(itemInterno)) {
          itemInterno.forEach(subItem => {       
            Object.assign(result, procesar(subItem));
          });
        } 
        
        else if (typeof(itemInterno) === 'object' && itemInterno !== null) {
          Object.keys(itemInterno).forEach(key => {
            let value = itemInterno[key];
            
            if (typeof(value) === 'object') {
              Object.assign(result, procesar(value));
            } else {        
              result[key] = value;
            }
          });
        }
        return result; 
      }
      
      procesar(item);  
    

      return result; 
    }

    function generateDynamicContent(datos, selectedOptionsDiv, handleRemove) {
     
      if (datos && typeof datos === "object" && !Array.isArray(datos)) {
          const newOptionsContainer = document.createElement('div');
          newOptionsContainer.classList.add('selected-options-container');
  
          Object.keys(datos).forEach((key) => {
              const formattedKey = key.replace(/_/g, ' ').replace(/-/g, ' ');  
        
              const optionDiv = document.createElement('div');
              optionDiv.classList.add('selected-option');
              optionDiv.setAttribute('data-key', key);
  
              // Crear el contenido dentro de la opción (label + input)
              const labelInput = document.createElement('div');
              labelInput.classList.add('label-input');
  
              console.log(formattedKey);
              const label = document.createElement('p');
              label.textContent = formattedKey;
              labelInput.appendChild(label);
  
              const inputContainer = document.createElement('div');
              inputContainer.classList.add('input-container');
  
              const input = document.createElement('input');
              input.type = 'text';
              input.name = key;
              input.classList.add('selected-input');
              input.value = datos[key];
              input.setAttribute('readonly', true);
              inputContainer.appendChild(input);
  
              labelInput.appendChild(inputContainer);
              optionDiv.appendChild(labelInput);
  
              // Crear el contenedor de iconos
              const iconContainer = document.createElement('div');
              iconContainer.classList.add('icon-container');
  
              // Icono de ayuda
              const helpIcon = document.createElement('span');
              helpIcon.classList.add('bi', 'bi-question-circle', 'Icon_Help');
              helpIcon.setAttribute('title', `Más información sobre ${formattedKey}`);
              helpIcon.onclick = () => alert(`Más información sobre ${formattedKey}`);
              iconContainer.appendChild(helpIcon);
  
              // Botón de eliminar
              const removeButton = document.createElement('button');
              removeButton.classList.add('remove-button');
              removeButton.setAttribute('aria-label', `Eliminar ${formattedKey}`);
              removeButton.textContent = '✕';
              removeButton.onclick = () => handleRemove(key, optionDiv);
              iconContainer.appendChild(removeButton);
  
              optionDiv.appendChild(iconContainer);
              newOptionsContainer.appendChild(optionDiv);
          });
  
          selectedOptionsDiv.appendChild(newOptionsContainer);
      }
  }
  
  

  return null;  
};

export default DynamicInputs;