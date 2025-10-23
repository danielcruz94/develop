import{ useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';  
import "./formregistro.css"


const InputField = ({ label, type = "text", value, onChange, required = false }) => (
  <div className="input-field">
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
    />
    <label>{label}</label>
  </div>
)

const ElegantBlueFinancialPlanningForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [responsealert, setresponsealert] = useState("Hubo un error al enviar el formulario. Por favor, revisa tu conexión y vuelve a intentarlo.");


  const serverURL = useSelector(state => state.serverURL.serverURL);
  
  const [formData, setFormData] = useState({
    nombre: '', apellidos: '', cedula: '', fechaNacimiento: '', lugarNacimiento: '', edad: '',
    direccionCasa: '', direccionOficina: '', celular: '', telefonoCasa: '', telefonoOficina: '',
    empresa: '', cargo: '', fechaIngreso: '', tipoContratacion: '', profesion: '', universidad: '',
    correoElectronico: '', declaranteRenta: '', estadoCivil: '' , contraseña: '', asesor: '', sexo: ''
  })

  const navigate = useNavigate(); 
  
  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Mostrar el modal (bloquear la página)
  setIsSubmitting(true);

  const requiredFields = [
    'nombre', 'apellidos', 'cedula', 'fechaNacimiento', 'lugarNacimiento', 'edad',
    'direccionCasa', 'celular', 'sexo',
    'universidad', 'correoElectronico', 'declaranteRenta', 'estadoCivil', 'contraseña', 'asesor'
  ];

  for (let field of requiredFields) {
    if (!formData[field]) {
      alert(`El campo ${field} es obligatorio.`);
      setIsSubmitting(false); // Desactivar el modal si falta un campo
      return;
    }
  }

  const serverUrl = `${serverURL}clientes`;

  try {
    const response = await axios.post(serverUrl, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("Respuesta del servidor:", response);
    setresponsealert(response)

    if (response.status === 201) {
      localStorage.setItem('cedula', response.data.cedula);
      // Redirige si es necesario, por ejemplo a otra página
              navigate('/formulario');

    } else {
      alert(responsealert);
    } 
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
      alert(responsealert);
  } finally {
    // Ocultar el modal
    setIsSubmitting(false);
  }
};

  
  
  
  

  const nextStep = () => {  
    if (currentStep < 4){
       setCurrentStep(currentStep + 1) 
       window.scrollTo(0, 0); 
    }    
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0);
    }
  }

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
          
            <h3>Información Personal</h3>  
               
            <InputField label="Nombre *" value={formData.nombre} onChange={handleInputChange('nombre')} />
            <InputField label="Apellidos *" value={formData.apellidos} onChange={handleInputChange('apellidos')} />
            <InputField label="Cédula de Ciudadanía *"  type="number" value={formData.cedula} onChange={handleInputChange('cedula')} />
            <InputField label="Fecha de Nacimiento *" type="date" value={formData.fechaNacimiento} onChange={handleInputChange('fechaNacimiento')} />
            <InputField label="Lugar de Nacimiento *" value={formData.lugarNacimiento} onChange={handleInputChange('lugarNacimiento')} />
            <InputField label="Edad *" type="number" value={formData.edad} onChange={handleInputChange('edad')} />
          

            <select 
              className='selectInput'
              value={formData.sexo} 
              onChange={handleInputChange('sexo')}
              required
            >
              <option value="">Sexo *</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>

            <span style={{fontSize:'9px'}}>Los campos con * son obligatorios</span>

          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Información de Contacto</h3>
            <InputField label="Dirección Casa *" value={formData.direccionCasa} onChange={handleInputChange('direccionCasa')} />
            <InputField label="Dirección Oficina" value={formData.direccionOficina} onChange={handleInputChange('direccionOficina')} />
            <InputField label="Celular *" type="number" value={formData.celular} onChange={handleInputChange('celular')} />
            <InputField label="Teléfono Casa" type="number" value={formData.telefonoCasa} onChange={handleInputChange('telefonoCasa')} />
            <InputField label="Teléfono Oficina" type="number" value={formData.telefonoOficina} onChange={handleInputChange('telefonoOficina')} />
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Información Laboral</h3>
            <InputField label="Empresa" value={formData.empresa} onChange={handleInputChange('empresa')} />
            <InputField label="Cargo" value={formData.cargo} onChange={handleInputChange('cargo')} />
            <InputField label="Fecha de Ingreso Compañía" type="date"  value={formData.fechaIngreso} onChange={handleInputChange('fechaIngreso')} />
            <InputField label="Tipo de contratación" value={formData.tipoContratacion} onChange={handleInputChange('tipoContratacion')} />
            <InputField label="Profesión" value={formData.profesion} onChange={handleInputChange('profesion')} />
            <InputField label="Universidad *" value={formData.universidad} onChange={handleInputChange('universidad')} />
          </motion.div>
        )
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Información Adicional</h3>
           <div className="select-field">
              <select 
                value={formData.declaranteRenta} 
                onChange={handleInputChange('declaranteRenta')}
                required
                className='selectInput'
              >
                <option value="">Declarante de Renta *</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>             
            </div>
            <div className="select-field">
              <select 
                value={formData.estadoCivil} 
                onChange={handleInputChange('estadoCivil')}
                required
                className='selectInput'
              >
                <option value="">Estado Civil *</option>
                <option value="soltero">Soltero/a</option>
                <option value="casado">Casado/a</option>
                <option value="divorciado">Divorciado/a</option>
                <option value="viudo">Viudo/a</option>
                <option value="unionLibre">Unión Libre</option>
              </select>
            
            </div>

            <InputField label="Correo Electrónico *" type="email" value={formData.correoElectronico} onChange={handleInputChange('correoElectronico')} />
            <InputField label="Nueva Contraseña *"  type="password"   value={formData.contraseña}   onChange={handleInputChange('contraseña')} />
            <InputField label="Nombre y Apellido del Asesor *" value={formData.asesor} onChange={handleInputChange('asesor')} />    

          </motion.div>
        )
      default:
        return null
    }
  }

  return (
  <div>
    {/* Modal simple */}
{isSubmitting && (
  <div className="modal">
    <div className="content">
      <div className="spinner"></div> 
      Enviando datos, por favor espera...
    </div>
  </div>
)}

    <img src="axia-logo.png" className="logo" alt="logo" />
    <div className="form-container"> 
      <div className="form-content">
        <h2>Planeación Financiera</h2>
        <div className="progress-bar">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step} 
              className={`progress-step ${currentStep >= step ? 'active' : ''}`}
              onClick={() => setCurrentStep(step)}
            >
              {step}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          <div className="button-group">
            {currentStep > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={prevStep}
                className="btn-secondary"
                disabled={isSubmitting}
              >
                Anterior
              </motion.button>
            )}
            {currentStep < 4 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={nextStep}
                className="btn-primary"
                disabled={isSubmitting}
              >
                Siguiente
              </motion.button>
            ) : (
              <button className="btn-submit" type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>

    <div className="firma">
      <a href="https://www.instagram.com/oulo_soluciones?igsh=ZW1nYjVtdTYzcWE0" target="_blank" rel="noopener noreferrer">
        Desarrollado por Oulo Soluciones
      </a>
    </div>
  </div>
);

}

export default ElegantBlueFinancialPlanningForm