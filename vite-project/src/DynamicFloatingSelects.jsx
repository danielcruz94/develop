import React, { useEffect } from 'react';

const DynamicInputs = ({ data, sectionName, onRemove }) => {
  useEffect(() => {
    // Buscar el div con la clase 'selected-options'
    const selectedOptionsDiv = document.querySelector('.selected-options');

    if (selectedOptionsDiv) {
      // Buscar el párrafo con el texto 'No hay opciones seleccionadas'
      const noOptionsText = selectedOptionsDiv.querySelector('p');
      
      // Si existe, ocultamos el párrafo
      if (noOptionsText) {
        noOptionsText.style.display = 'none';
      }

      // Limpiar el contenedor antes de agregar nuevos elementos
      const optionsContainer = selectedOptionsDiv.querySelector('.selected-options-container');
      if (optionsContainer) {
        optionsContainer.innerHTML = ''; // Limpiar el contenido previo
      }

      // Si `data` tiene elementos, generamos el contenido dinámico
      if (data && data.length > 0) {
        const newOptionsContainer = document.createElement('div');
        newOptionsContainer.classList.add('selected-options-container');

        data.forEach((item, idx) => {
          Object.keys(item).forEach(key => {
            const formattedKey = key.replace(/_/g, ' ');  // Formatear el texto de las claves
            
            // Crear cada elemento de opción
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('selected-option');
            optionDiv.setAttribute('data-key', key);

            // Crear el contenido dentro de la opción
            const labelInput = document.createElement('div');
            labelInput.classList.add('label-input');
            
            const label = document.createElement('p');
            label.textContent = formattedKey;
            labelInput.appendChild(label);
            
            const inputContainer = document.createElement('div');
            inputContainer.classList.add('input-container');
            const input = document.createElement('input');
            input.type = 'text';
            input.name = key;
            input.classList.add('selected-input');
            input.value = item[key];
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
        });

        // Insertar el contenido dinámico en el contenedor
        selectedOptionsDiv.appendChild(newOptionsContainer);
      }
    }
  }, [data]);  // Dependencia para actualizar cuando `data` cambie

  const handleRemove = (key, optionDiv) => {
    // Eliminar el elemento de data
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

    // Actualizar la vista con los datos actualizados
    // Si fuera necesario, aquí se podría actualizar el estado o pasar el nuevo array
  };

  return null;  // No renderiza nada en el JSX
};

export default DynamicInputs;
