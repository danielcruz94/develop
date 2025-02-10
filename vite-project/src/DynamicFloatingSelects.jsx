import { useEffect, useState } from "react";

const DynamicInputs = ({ data, sectionName, removeOption, onRemove, options }) => {
    const [recovery, setRecovery] = useState([null]);

  
    useEffect(() => {
        if (recovery[0] === null) {
            setRecovery(data);
        }
    }, [data]);

    useEffect(() => {
        const ContenP = document.querySelector(
            `.select-container[data-section="${sectionName}"] .selected-options`
        );

        if (ContenP) {
            const noOptionsText = ContenP.querySelector("p.selected-P");
            if (noOptionsText) {
                if (recovery[0] !== undefined) {
                    noOptionsText.style.display = "none";
                }
            }
        }

        const selectedOptionsDiv = document.querySelector(
            `.select-container[data-section="${sectionName}"] .selected-options .Recovery-options`
        );

        if (selectedOptionsDiv) {
            selectedOptionsDiv.innerHTML = "";
            OrdenarData(recovery, selectedOptionsDiv, handleRemove);
        }
    }, [recovery, sectionName]);

    function showHelp(formattedKey) {
        const keyWithoutDash = formattedKey.split('-')[0];
        const option = options.find((opt) => opt.value === keyWithoutDash);
        const helpPopup = document.createElement("div");
        helpPopup.classList.add("help-popup");
        if (option) {
            helpPopup.innerHTML = `
                <div class="Cont-Help">
                    <span class="bi bi-question-circle Icon_Help2"></span>
                    <p>${option.Help}</p>
                    <button class="close-btn">X</button>
                </div>
            `;
        } else {
            helpPopup.innerHTML = `
                <div class="Cont-Help">
                    <span class="bi bi-question-circle Icon_Help2"></span>
                    <p>Opción no encontrada.</p>
                    <button class="close-btn">X</button>
                </div>
            `;
        }
        document.body.appendChild(helpPopup);
        const closeButton = helpPopup.querySelector(".close-btn");
        closeButton.addEventListener("click", () => {
            helpPopup.remove();
        });
    }

    const handleRemove = (key) => {
        setRecovery(prevRecovery => {
            return prevRecovery.map(item => {
                const newItem = { ...item };
                if (newItem.hasOwnProperty(key)) {
                    delete newItem[key];
                }
                return newItem;
            }).filter(item => Object.keys(item).length > 0);
        });

        removeOption(key);
    };

    function OrdenarData(recovery, selectedOptionsDiv, handleRemove) {
        let datos = {};
    
        if (Array.isArray(recovery)) {
            recovery.forEach((item) => {
                Object.assign(datos, procesarDatosRecursivos(item));
            });
        } else if (typeof recovery === "object") {
            Object.assign(datos, procesarDatosRecursivos(recovery));
        }
    
        generateDynamicContent(datos, selectedOptionsDiv, handleRemove);
    }
    
    function procesarDatosRecursivos(item) {
        let result = {};
    
        function procesar(itemInterno, parentKey = '') {
            // Asegúrate de que el itemInterno no sea null ni undefined
            if (itemInterno === null || itemInterno === undefined) {
                return {}; // Evita procesar valores nulos o indefinidos
            }
    
            if (Array.isArray(itemInterno)) {
                // Si el valor es un array, se aplana cada valor con el índice
                itemInterno.forEach((subItem, index) => {
                    let newKey = `${parentKey}[${index}]`;
                    Object.assign(result, procesar(subItem, newKey));
                });
            } else if (typeof itemInterno === "object") {
                // Si el valor es un objeto, se itera sobre sus claves
                Object.keys(itemInterno).forEach((key) => {
                    let value = itemInterno[key];
                    let newKey = parentKey ? `${key}` : key;
    
                    if (value !== null && value !== undefined) {
                        Object.assign(result, procesar(value, newKey));
                    }
                });
            } else {
                // Si es un valor primitivo, se asigna directamente
                result[parentKey] = itemInterno;
            }
    
            return result;
        }
    
        procesar(item);
        return result;
    }
    

    // Función para formatear el número con punto como separador de miles
    const formatNumberWithDot = (value) => {
        if (!isNaN(value)) {
            // Convertir el número en string y formatearlo con puntos como separador de miles
            return value
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Reemplaza cada grupo de tres dígitos por un punto
        }
        return value;
    };

    function generateDynamicContent(datos, selectedOptionsDiv, handleRemove) {
        
        if (datos && typeof datos === "object" && !Array.isArray(datos)) {
            const newOptionsContainer = document.createElement("div");
            newOptionsContainer.classList.add("Recovery-options-container");

            Object.keys(datos).forEach((key) => {
                const formattedKey = key.replace(/_/g, " ").replace(/-/g, " ");

                const optionDiv = document.createElement("div");
                optionDiv.classList.add("selected-option");

                if (sectionName === "ingresos") {
                    optionDiv.setAttribute("data-section", key.split('-')[0]);
                };

                const labelInput = document.createElement("div");
                labelInput.classList.add("label-input");

                const label = document.createElement("p");
                label.textContent = formattedKey.split('[')[0]
                labelInput.appendChild(label);

                const inputContainer = document.createElement("div");
                inputContainer.classList.add("input-container");

                const input = document.createElement("input");
                input.type = "text";
                input.name = key.split('[')[0];
                input.classList.add("selected-input");

                // Inicializar el valor del input con formato
                input.value = formatNumberWithDot(datos[key]);
                inputContainer.appendChild(input);

                labelInput.appendChild(inputContainer);
                optionDiv.appendChild(labelInput);

                // Crear el contenedor de iconos
                const iconContainer = document.createElement("div");
                iconContainer.classList.add("icon-container");

                // Icono de ayuda
                const helpIcon = document.createElement("span");
                helpIcon.classList.add("bi", "bi-question-circle", "Icon_Help");
                helpIcon.setAttribute("title", `Más información`);
                helpIcon.setAttribute("id", `${formattedKey}`);
                helpIcon.onclick = () => showHelp(key);
                iconContainer.appendChild(helpIcon);

                // Botón de eliminar
                const removeButton = document.createElement("button");
                removeButton.classList.add("remove-button");
                removeButton.setAttribute("aria-label", `Eliminar ${formattedKey}`);
                removeButton.textContent = "✕";
                removeButton.onclick = () => handleRemove(key, optionDiv);
                iconContainer.appendChild(removeButton);

                optionDiv.appendChild(iconContainer);
                newOptionsContainer.appendChild(optionDiv);

                // Evento para manejar la entrada de texto
                input.addEventListener("input", (e) => {
                    const Name = ["EPS", "ARL", "Fondo_Cesantias", "AFP", "Medicina_Prepagada"];
                    const Number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
                    let Key = e.data; 
                
                    let newValue = e.target.value;
                    const { name } = e.target;                 
                   
                    if (Name.includes(name)) {
                        
                        if (!/^[a-zA-Z\s]*$/.test(Key)) {
                            newValue = newValue.slice(0, -1); 
                        }
                        e.target.value = newValue;  
                    } 
                    
                    else {
                        if (!Number.includes(Key)) {
                            newValue = newValue.slice(0, -1); 
                        }                        
                        e.target.value = formatNumberWithDot(newValue.replace(/\./g, ""));
                    }
                });
                
            });

            selectedOptionsDiv.appendChild(newOptionsContainer);
        }
    }

    return null;
};

export default DynamicInputs;
