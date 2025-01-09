import React, { useEffect } from 'react';

const DynamicInputs = ({ data, sectionName, onRemove }) => {
  useEffect(() => {
    const sectionContainer = document.querySelector(`.selected-options`);

    if (data && data.length > 0) {
      // Crear el contenedor principal con el título
      sectionContainer.innerHTML = `
        <h2 class="section-title">Opciones seleccionadas</h2>
        <div class="selected-options-container"></div>
      `;

      // Seleccionar el contenedor donde se agregarán las opciones
      const optionsContainer = sectionContainer.querySelector('.selected-options-container');

      // Asumiendo que solo hay un objeto en el array (basado en tu ejemplo)
      const item = data[0]; // Obtenemos el primer objeto

      // Iteramos sobre las claves del objeto
      Object.keys(item).forEach((key) => {
        const inputWrapper = document.createElement('div');
        inputWrapper.classList.add('selected-option');
        inputWrapper.setAttribute('data-key', key); // Añadimos un atributo de identificación único para el div

        // Formatear el nombre del campo para quitar los guiones
        const formattedKey = key.replace(/_/g, ' '); // Reemplaza los guiones bajos por espacios

        // Crear el label y el input
        const labelInput = document.createElement('div');
        labelInput.classList.add('label-input');
        labelInput.innerHTML = `
          <p class="label-text">${formattedKey}</p>
          <div class="input-container">
            <input type="text" name="${key}" class="selected-input" value="${item[key]}" />
          </div>
        `;

        // Crear el icono de ayuda y el botón de eliminar
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icon-container');
        iconContainer.innerHTML = `
          <span class="bi bi-question-circle Icon_Help" title="Más información" id="${key}"></span>
          <button class="remove-button" aria-label="Eliminar ${key}">✕</button>
        `;

        // Añadir eventos al ícono de ayuda y al botón de eliminar
        const helpIcon = iconContainer.querySelector('.Icon_Help');
        const removeButton = iconContainer.querySelector('.remove-button');

        // Evento para el ícono de ayuda (mostrar información)
        if (helpIcon) {
          helpIcon.addEventListener('click', () => {
            // Aquí puedes abrir un modal, tooltip o simplemente un alert para más información
            alert(`Más información sobre ${formattedKey}`);
            // Si prefieres un modal o tooltip, puedes implementar esa funcionalidad en lugar del alert
          });
        }

        // Evento para el botón de eliminar
        if (removeButton) {
          removeButton.addEventListener('click', () => {
            // Eliminar solo el div que contiene el input y el label correspondiente
            const parentDiv = removeButton.closest('.selected-option');
            if (parentDiv) {
              parentDiv.remove(); // Elimina solo el div del campo que corresponde
            }
            // Si pasas una función `onRemove`, puedes llamarla aquí con el nombre de la clave
            if (onRemove) {
              onRemove(key);
            }
          });
        }

        // Agregar los elementos al inputWrapper
        inputWrapper.appendChild(labelInput);
        inputWrapper.appendChild(iconContainer);

        // Insertar el inputWrapper en el contenedor de opciones
        optionsContainer.appendChild(inputWrapper);
      });
    } else {
      sectionContainer.innerHTML = '<p>No hay opciones seleccionadas</p>';
    }
  }, [data, sectionName, onRemove]);

  return null; // Este componente no devuelve JSX, solo manipula el DOM directamente
};

export default DynamicInputs;
