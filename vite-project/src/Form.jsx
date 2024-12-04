import "./styles.css"
import Selector from './select'


const Form =()=>{

  const options = [
    { value: 'EPS', label: 'EPS', Help: 'Selecciona tu entidad de salud, ya sea pública o privada, donde estás afiliado para recibir atención médica. Esta es la entidad responsable de brindarte cobertura en servicios médicos.' },
    { value: 'MedicinaPrepagada', label: 'Medicina Prepagada', Help: 'Elige tu plan de salud privado que te permite acceder a servicios médicos de calidad con mayor rapidez, mediante un contrato con una aseguradora que cubre consultas, tratamientos y otros servicios.' },
    { value: 'ARL', label: 'ARL', Help: 'Selecciona la aseguradora que cubre los riesgos laborales. La ARL (Administradora de Riesgos Laborales) se encarga de la prevención, atención y compensación de accidentes laborales y enfermedades profesionales.' },
    { value: 'FondoCesantias', label: 'Fondo Cesantías', Help: 'Indica el fondo al cual estás afiliado para el manejo de tus cesantías. Las cesantías son un ahorro obligatorio que el empleador debe consignar en favor del trabajador, utilizado principalmente en casos de desempleo.' },
    { value: 'AFP', label: 'AFP', Help: 'Elige la Administradora de Fondos de Pensiones a la cual estás afiliado. La AFP es la encargada de administrar y gestionar los fondos de pensión de los trabajadores para su jubilación.' },
  ];
  

  const ingresos = [
    { value: 'SalarioTradicional', label: 'Salario Tradicional', Help: 'Este es el salario mensual base que recibes como compensación por tu trabajo. Es un pago fijo acordado entre tú y tu empleador.' },
    { value: 'SalarioIntegral', label: 'Salario Integral', Help: 'Es un salario que incluye todos los beneficios y prestaciones sociales, como pensión, cesantías y vacaciones, dentro del pago acordado.' },
    { value: 'Arriendo', label: 'Arriendo', Help: 'Es el valor que recibes por el alquiler de una propiedad. Puede ser por un apartamento, casa o cualquier inmueble que alquiles a otros.' },
    { value: 'Auxilio', label: 'Auxilio', Help: 'Un pago adicional que se otorga para cubrir necesidades específicas, como transporte, alimentación u otros gastos relacionados con tu trabajo o situación personal.' },
    { value: 'Beneficio', label: 'Beneficio', Help: 'Pago adicional o ventaja proporcionada por tu empleador o institución. Pueden ser beneficios de salud, educación, transporte, entre otros.' },
    { value: 'Bonificacion', label: 'Bonificación', Help: 'Un pago adicional que se otorga en función del desempeño, resultados o alguna meta alcanzada, como incentivo o reconocimiento.' },
    { value: 'Comisiones', label: 'Comisiones', Help: 'Pago variable que se otorga en función de las ventas o rendimiento de una persona o empresa en su actividad comercial.' },
    { value: 'Dividendos', label: 'Dividendos', Help: 'Son los pagos que los accionistas reciben de las ganancias de una empresa. Se distribuyen de acuerdo con las participaciones que se tengan en la empresa.' },
    { value: 'Honorarios', label: 'Honorarios', Help: 'Pago realizado por la prestación de servicios profesionales. Es común en actividades como consultoría, asesoría, abogacía, entre otros.' },
    { value: 'PrimaDeServicios', label: 'Prima de Servicios', Help: 'Es un pago adicional que se otorga a los trabajadores en ciertos periodos del año, como parte de la compensación por su trabajo. Usualmente se paga en diciembre y junio.' },
    { value: 'PrimaExtralegal', label: 'Prima Extralegal', Help: 'Es una bonificación adicional que puede ser otorgada por el empleador, fuera de lo que estipula la ley. No es obligatoria y depende de las políticas de la empresa.' },
    { value: 'Renta', label: 'Renta', Help: 'Es el ingreso periódico recibido por el trabajo, el capital, o cualquier otra fuente que genere un pago regular. Incluye salarios, beneficios y otros pagos.' },
    { value: 'SubsidioDeTransporte', label: 'Subsidio de Transporte', Help: 'Es un pago otorgado para cubrir el costo del transporte desde y hacia el lugar de trabajo. En muchos países es un beneficio no sujeto a impuestos.' },
    { value: 'SubsidioFamiliar', label: 'Subsidio Familiar', Help: 'Beneficio económico otorgado a los trabajadores para apoyar los gastos familiares, como el cuidado de hijos o personas dependientes.' }
  ];

  const ahorro = [
    { value: 'CuentaCorriente', label: 'Cuenta Corriente', Help: 'Es una cuenta bancaria destinada para transacciones diarias, como pagos, depósitos y retiros. Generalmente, no tiene restricciones de acceso, pero puede tener costos asociados.' },
    { value: 'CuentaDeAhorros', label: 'Cuenta de Ahorros', Help: 'Es una cuenta bancaria en la que puedes depositar dinero y ganar intereses. Está destinada principalmente para ahorrar a largo plazo.' },
    { value: 'Fiducias', label: 'Fiducias', Help: 'Son contratos en los cuales una parte (fiduciante) transfiere activos a una entidad fiduciaria para que los administre en beneficio de otra parte (beneficiario), con fines específicos como la inversión o el manejo patrimonial.' },
    { value: 'FondoDeEmpleados', label: 'Fondo de Empleados', Help: 'Es un fondo creado por una empresa para ofrecer a sus empleados un beneficio económico, que generalmente se destina a ahorros, préstamos o seguros.' },
    { value: 'inversionesExterior', label: 'Inversiones Exterior', Help: 'Se refiere a colocar recursos en activos fuera del país de residencia, como en mercados internacionales, para diversificar las fuentes de ingreso y reducir riesgos.' },
    { value: 'CarteraColectiva', label: 'Cartera Colectiva', Help: 'Es un conjunto de inversiones de diferentes personas administrado por una entidad financiera. Los inversores reciben una parte de los ingresos generados de acuerdo con su participación.' },
    { value: 'Cooperativas', label: 'Cooperativas', Help: 'Son organizaciones de personas que se agrupan para alcanzar objetivos comunes, como el ahorro y el crédito. Los miembros de una cooperativa tienen acceso a servicios financieros, como cuentas de ahorro y préstamos.' },
    { value: 'CuentaAFC', label: 'Cuenta AFC', Help: 'Es una cuenta especial diseñada para el ahorro de los trabajadores para la compra de vivienda, permitiendo ahorrar de forma voluntaria y con beneficios fiscales en algunos países.' },
    { value: 'FondosMutuos', label: 'Fondos Mutuos', Help: 'Son vehículos de inversión colectiva que agrupan el dinero de varios inversionistas para invertir en activos como acciones, bonos y otros valores. Los fondos mutuos permiten diversificar el riesgo de inversión.' },
    { value: 'PensionVoluntaria', label: 'Pensión Voluntaria', Help: 'Es un tipo de ahorro adicional que puedes hacer de manera voluntaria para incrementar tu pensión en la jubilación, aportando dinero de forma periódica a una entidad financiera.' },
    { value: 'ProvisionAnualidades', label: 'Provisión Anualidades', Help: 'Es un ahorro destinado a generar ingresos de forma periódica, generalmente como una fuente de renta a largo plazo, como en el caso de una pensión.' },
    { value: 'Otros', label: 'Otros', Help: 'Cualquier otra opción de ahorro o inversión que no se clasifique dentro de las anteriores. Puede incluir cuentas especiales, productos financieros u otros vehículos de inversión.' },
  ];
  

      const transporte = [
        { value: 'BusesTransmilenio', label: 'Buses / Transmilenio' },
        { value: 'Gasolina', label: 'Gasolina' },
        { value: 'Otros', label: 'Otros' },
        { value: 'Parqueadero', label: 'Parqueadero' },
        { value: 'Taxis', label: 'Taxis' },
        { value: 'TransporteEmpresa', label: 'Transporte Empresa' },
        { value: 'TransporteEscolar', label: 'Transporte Escolar' },
      ];

      const gastosPersonales = [
        { value: 'AlmuerzosDiarios', label: 'Almuerzos Diarios', Help: 'Es el gasto diario relacionado con la comida durante la jornada laboral o escolar. Incluye el costo de comprar almuerzos fuera de casa o llevar comida preparada.' },
        { value: 'Celular', label: 'Celular', Help: 'Es el gasto mensual asociado al plan de telefonía móvil, que incluye llamadas, mensajes y datos móviles para tu dispositivo celular.' },
        { value: 'CuidadoPersonal', label: 'Cuidado Personal', Help: 'Son los gastos relacionados con productos o servicios para la higiene, cuidado de la piel, cabello y bienestar personal, como cremas, jabones, entre otros.' },
        { value: 'DesayunosDiarios', label: 'Desayunos Diarios', Help: 'Es el gasto relacionado con los alimentos consumidos en el desayuno cada día, ya sea en casa o fuera de ella.' },
        { value: 'Gimnasio', label: 'Gimnasio', Help: 'Es el costo mensual de la membresía de un gimnasio o centro deportivo donde se realizan actividades físicas o entrenamiento personal.' },
        { value: 'MesadaHijos', label: 'Mesada Hijos', Help: 'Es el dinero que se destina mensualmente a los hijos para cubrir sus necesidades o como un ahorro para su educación o bienestar.' },
        { value: 'Ropa', label: 'Ropa', Help: 'Son los gastos relacionados con la compra de ropa y accesorios personales, ya sea para el día a día o para ocasiones especiales.' },
        { value: 'Medicamentos', label: 'Medicamentos', Help: 'Es el gasto asociado a la compra de medicamentos recetados o de venta libre para el tratamiento de enfermedades o el mantenimiento de la salud.' },
        { value: 'Barberia', label: 'Barbería', Help: 'Es el gasto destinado a los servicios de corte de cabello, arreglo de barba y otros cuidados relacionados con el cuidado personal masculino.' },
        { value: 'Manicure', label: 'Manicure', Help: 'Es el gasto relacionado con los servicios de cuidado y embellecimiento de las uñas, generalmente prestados en un salón de belleza.' },
        { value: 'Peluqueria', label: 'Peluquería', Help: 'Es el gasto asociado a los servicios de corte, peinado y tratamientos capilares que se realizan en un salón de belleza o peluquería.' },
        { value: 'otro', label: 'Otro', Help: 'Cualquier otro gasto relacionado con el cuidado personal o necesidades diarias que no se clasifiquen dentro de las opciones anteriores.' },
      ];
      

      const hogar = [
        { value: 'Administracion', label: 'Administración', Help: 'Son los gastos relacionados con la gestión de tu hogar, como los honorarios por servicios de administración, ya sea de una propiedad o de un bien compartido.' },
        { value: 'Agua', label: 'Agua', Help: 'Es el costo mensual por el servicio de agua potable, generalmente suministrado por una empresa local o pública para el consumo doméstico.' },
        { value: 'Arrendamiento', label: 'Arrendamiento', Help: 'Es el pago mensual por el alquiler de la vivienda o inmueble, ya sea una casa, apartamento o cualquier otro tipo de propiedad.' },
        { value: 'Chofer', label: 'Chofer', Help: 'Es el pago por los servicios de un chofer o conductor privado que transporta a los miembros del hogar a diversos destinos, como el trabajo, la escuela, etc.' },
        { value: 'ComprasCasa', label: 'Compras Casa', Help: 'Son los gastos asociados a la adquisición de artículos y productos para la casa, tales como electrodomésticos, muebles, decoración, utensilios de cocina, entre otros.' },
        { value: 'Energia', label: 'Energía', Help: 'Es el gasto mensual por el servicio de energía eléctrica que alimenta las instalaciones de la vivienda, cubriendo luces, electrodomésticos y otros dispositivos.' },
        { value: 'Gas', label: 'Gas', Help: 'Es el costo mensual por el servicio de gas utilizado en la cocina, calefacción o incluso en la producción de agua caliente.' },
        { value: 'Jardinero', label: 'Jardinero', Help: 'Es el costo por los servicios de jardinería, que incluyen el cuidado de las plantas, césped, árboles y la limpieza del jardín en la propiedad.' },
        { value: 'Lavanderia', label: 'Lavandería', Help: 'Es el gasto asociado con la limpieza de ropa, que puede incluir servicios profesionales de lavandería o la compra de productos para el lavado en casa.' },
        { value: 'Mercado', label: 'Mercado', Help: 'Es el gasto mensual relacionado con la compra de alimentos y productos básicos para el hogar, como frutas, verduras, carnes, lácteos, etc.' },
        { value: 'Ninera', label: 'Niñera', Help: 'Es el pago por los servicios de una niñera o cuidadora de niños, que se encarga del cuidado y bienestar de los hijos mientras los padres trabajan o se ausentan.' },
        { value: 'ServicioDomestico', label: 'Servicio Doméstico', Help: 'Es el costo de los servicios de limpieza, cocina u otros servicios domésticos proporcionados por empleados o agencias especializadas.' },
        { value: 'ServiciosPublicos', label: 'Servicios Públicos', Help: 'Son los gastos relacionados con los servicios públicos generales, como agua, luz, gas, telecomunicaciones y otros servicios proporcionados por el gobierno o empresas privadas.' },
        { value: 'Internet', label: 'Internet', Help: 'Es el gasto mensual por el servicio de conexión a Internet en el hogar, utilizado para acceder a redes sociales, trabajo en línea, entretenimiento, entre otros.' },
        { value: 'PlataformasStremm', label: 'Plataformas Stremm', Help: 'Son los gastos asociados con servicios de streaming o plataformas de entretenimiento en línea, como Netflix, Spotify, Disney+, Amazon Prime, entre otros.' },
        { value: 'Otros', label: 'Otros', Help: 'Cualquier otro gasto relacionado con el hogar que no se haya incluido en las categorías anteriores.' },
      ];
      
      const entretenimiento = [
        { value: 'cines', label: 'Cines', Help: 'Es el gasto relacionado con la compra de boletos o suscripciones a cines para disfrutar de películas y otros eventos cinematográficos.' },
        { value: 'club', label: 'Club', Help: 'Es el gasto relacionado con las membresías o suscripciones a clubes sociales, deportivos o privados para actividades recreativas o de esparcimiento.' },
        { value: 'eventos-sociales', label: 'Eventos Sociales', Help: 'Son los gastos asociados con la asistencia o participación en eventos sociales como fiestas, bodas, conciertos, entre otros.' },
        { value: 'fines-de-semana', label: 'Fines de Semana', Help: 'Es el gasto relacionado con actividades recreativas o salidas que realizas durante los fines de semana, como cenas, salidas al parque, etc.' },
        { value: 'golf', label: 'Golf', Help: 'Es el gasto asociado a la práctica del golf, como el alquiler de equipo, membresías a campos de golf o la participación en torneos.' },
        { value: 'restaurantes', label: 'Restaurantes', Help: 'Es el gasto relacionado con la comida y bebida en restaurantes, cafeterías, bares u otros establecimientos de comida.' },
        { value: 'reuniones-sociales', label: 'Reuniones Sociales', Help: 'Es el gasto asociado con las reuniones y encuentros sociales con amigos, familiares o colegas, que pueden incluir cenas, actividades recreativas o eventos en casa.' },
        { value: 'rumba', label: 'Rumba', Help: 'Son los gastos relacionados con la salida a bares, discotecas, conciertos y otros lugares nocturnos para bailar y disfrutar de música.' },
        { value: 'salidas', label: 'Salidas', Help: 'Es el gasto relacionado con salidas recreativas fuera del hogar, como visitas a parques, museos, actividades al aire libre, entre otros.' },
        { value: 'subscripciones', label: 'Subscripciones', Help: 'Es el gasto mensual o anual por servicios de entretenimiento en línea, como plataformas de streaming (Netflix, Spotify, etc.) o suscripciones a revistas y servicios digitales.' },
        { value: 'tenis', label: 'Tenis', Help: 'Es el gasto relacionado con la práctica del tenis, como clases, alquiler de canchas, compra de equipo o participación en torneos.' },
        { value: 'vacaciones', label: 'Vacaciones', Help: 'Es el gasto relacionado con los viajes y planes vacacionales, incluyendo pasajes, alojamiento, actividades turísticas, y otros gastos asociados a un viaje de descanso.' },
        { value: 'viajes', label: 'Viajes', Help: 'Es el gasto relacionado con viajes, ya sea por motivos personales o de trabajo, que incluye transporte, alojamiento y otros gastos asociados a la experiencia de viajar.' },
        { value: 'otros', label: 'Otros', Help: 'Cualquier otro gasto relacionado con actividades de entretenimiento que no se clasifiquen en las opciones anteriores.' },
      ];
      

      const protecciones = [
        { value: 'AporteAPensionObligatoria', label: 'Aporte a Pensión Obligatoria', Help: 'Es el aporte obligatorio que haces a un fondo de pensiones para asegurar tu jubilación. Este pago es obligatorio por ley.' },
        { value: 'AporteASaludObligatoria', label: 'Aporte a Salud Obligatoria', Help: 'Es el aporte obligatorio al sistema de salud, que te garantiza acceso a servicios médicos y de salud según la legislación vigente.' },
        
        { value: 'SaludPrepagada', label: 'Salud Prepagada', Help: 'Es un tipo de seguro de salud privado que permite acceder a atención médica con mejores tiempos de respuesta y servicios adicionales.' },
        { value: 'SeguroDeContenidos', label: 'Seguro de Contenidos', Help: 'Es un seguro que cubre los daños o pérdida de tus bienes materiales en caso de eventos como robo, incendios o accidentes.' },
        { value: 'SeguroDeInvalidez', label: 'Seguro de Invalidez', Help: 'Es un seguro que cubre la pérdida de ingresos debido a una invalidez permanente o temporal que impida trabajar.' },
        { value: 'SeguroDeResponsabilidadCivil', label: 'Seguro de Responsabilidad Civil', Help: 'Es un seguro que cubre los daños a terceros causados por accidente, negligencia o mal manejo de tus bienes o actividades.' },
        { value: 'SeguroDeSalud', label: 'Seguro de Salud', Help: 'Es un seguro médico que cubre gastos de atención sanitaria, incluyendo consultas médicas, cirugías y otros servicios médicos.' },
        { value: 'SeguroDeVehiculo', label: 'Seguro de Vehículo', Help: 'Es un seguro que cubre los daños causados a tu vehículo o a otros vehículos en caso de accidentes, robos o daños a terceros.' },
        { value: 'SeguroDeVida', label: 'Seguro de Vida', Help: 'Es un seguro que protege a tus beneficiarios financieros en caso de fallecimiento, brindando un pago único o mensual.' },
        { value: 'SeguroExequial', label: 'Seguro Exequial', Help: 'Es un seguro que cubre los gastos de los servicios funerarios en caso de fallecimiento, aliviando los gastos para la familia.' },
        { value: 'SeguroVivienda', label: 'Seguro Vivienda', Help: 'Es un seguro que cubre daños en tu hogar, tales como incendios, terremotos, robos y otros eventos que puedan afectar tu propiedad.' },
        { value: 'Otros', label: 'Otros', Help: 'Cualquier otro tipo de seguro o aporte relacionado con protección que no se clasifique en las opciones anteriores.' }
      ];
      

      const descuentosnomina = [
        { value: 'Salud', label: 'Salud', Help: 'Es el descuento obligatorio destinado al sistema de salud, garantizando el acceso a los servicios médicos públicos o privados según el sistema de afiliación.' },
        { value: 'Pension', label: 'Pensión', Help: 'Es el aporte destinado al sistema de pensiones, el cual garantiza la acumulación de fondos para tu jubilación futura.' },
        { value: 'RetencionEnLaFuente', label: 'Retención en la Fuente', Help: 'Es un descuento que realiza el empleador sobre tu salario, destinado al pago anticipado del impuesto sobre la renta.' },
        { value: 'AporteAFondoDeSolidaridad', label: 'Aporte a Fondo de Solidaridad', Help: 'Es un descuento destinado a un fondo de solidaridad para la población más vulnerable o para situaciones de emergencia nacional.' },
        { value: 'AporteAFondoDeSubsistencia', label: 'Aporte a Fondo de Subsistencia', Help: 'Es el descuento destinado a un fondo de subsistencia para situaciones de pobreza extrema o emergencia social.' },
        { value: 'OtrosDescuentos', label: 'Otros Descuentos', Help: 'Cualquier otro tipo de descuento relacionado con situaciones laborales, legales o acordadas que no encajen en las categorías anteriores.' },
        
        { value: 'Otros', label: 'Otros', Help: 'Otros descuentos adicionales que no se clasifican en las opciones previas, como acuerdos específicos entre el empleador y el empleado.' }
      ];
      
      
      const educacion = [
        { value: 'BonoEstudiantil', label: 'Bono Estudiantil', Help: 'Es una ayuda económica otorgada para cubrir los costos de la educación, ya sea en nivel universitario, técnico o profesional.' },
        { value: 'Capacitaciones', label: 'Capacitaciones', Help: 'Hace referencia a los cursos o entrenamientos ofrecidos para mejorar habilidades y conocimientos en áreas específicas.' },
        { value: 'Cursos', label: 'Cursos', Help: 'Se refiere a la inscripción y pago por cursos académicos o profesionales, ya sean presenciales o en línea.' },
        { value: 'Idiomas', label: 'Idiomas', Help: 'Este descuento está relacionado con el pago de clases o cursos para aprender un nuevo idioma o mejorar el nivel de uno ya conocido.' },
        { value: 'LibrosYUtiles', label: 'Libros y útiles', Help: 'Este rubro cubre la compra de libros, material escolar y otros útiles necesarios para los estudios.' },
        { value: 'MatriculaColegio', label: 'Matrícula Colegio', Help: 'Corresponde al costo de la matrícula anual o semestral en una institución educativa de nivel escolar o preescolar.' },
        { value: 'MatriculaUniversidad', label: 'Matrícula Universidad', Help: 'Es el pago realizado para la inscripción y matrícula en una universidad, institución técnica o tecnológica.' },
        { value: 'PensionColegio', label: 'Pensión Colegio', Help: 'Este valor hace referencia a la pensión mensual que se paga por la educación escolar de un hijo o familiar.' },
        { value: 'Uniformes', label: 'Uniformes', Help: 'Cubre el costo de la compra de uniformes escolares o universitarios, necesarios para la educación.' },
        { value: 'Otros', label: 'Otros', Help: 'Otros gastos relacionados con la educación que no se incluyen en las categorías anteriores.' }
      ];
      
      const financieros = [
        { value: 'CuatroXMil', label: '4 x Mil', Help: 'Es un impuesto que se aplica a las transacciones financieras realizadas en Colombia, conocido como el "gravamen a los movimientos financieros".' },
        { value: 'ComisionesPorAdministracion', label: 'Comisiones por Administración', Help: 'Son las tarifas que cobran las entidades financieras por la gestión y administración de productos como cuentas, fondos de inversión o tarjetas.' },
        { value: 'CuotaDeManejoTarjetaDebito', label: 'Cuota de Manejo Tarjeta Débito', Help: 'Es un costo asociado con el uso y mantenimiento de una tarjeta débito, que algunas entidades financieras aplican mensualmente.' },
        { value: 'CuotaManejoTarjetaCredito', label: 'Cuota Manejo Tarjeta de Crédito', Help: 'Es un cargo mensual que las entidades bancarias aplican por el uso de tarjetas de crédito, que cubre la administración de la cuenta.' },
      ];
      
      const otros = [
        { value: 'AyudaAFamiliar', label: 'Ayuda a un Familiar', Help: 'Es el dinero o recursos que se destinan a apoyar económicamente a un miembro de la familia en necesidades específicas.' },
        { value: 'Diezmo', label: 'Diezmo', Help: 'Es un porcentaje de los ingresos, generalmente el 10%, destinado a fines religiosos o caritativos.' },
        { value: 'Donaciones', label: 'Donaciones', Help: 'Contribuciones voluntarias de dinero o bienes a organizaciones benéficas o a personas en necesidad.' },
        { value: 'Finca', label: 'Finca', Help: 'Es una propiedad rural que puede ser utilizada para actividades agrícolas, ganaderas o de recreación.' },
        { value: 'Regalos', label: 'Regalos', Help: 'Dinero o bienes entregados como obsequio, generalmente en ocasiones especiales o celebraciones.' },
        { value: 'ResponsabilidadSocial', label: 'Responsabilidad Social', Help: 'Aportaciones o actividades realizadas con el fin de contribuir al bienestar social y el desarrollo comunitario.' },
        { value: 'SoportePadres', label: 'Soporte Padres', Help: 'Es el apoyo financiero que se brinda a los padres para su sustento y bienestar.' },
        { value: 'Otros', label: 'Otros', Help: 'Gastos que no encajan en las categorías anteriores, pero que aún así requieren atención.' },
      ];
      
      

      const activoLiquidos = [
        { value: 'CuentaAhorros', label: 'Cuenta Ahorros', Help: 'Es una cuenta bancaria destinada a ahorrar dinero, con o sin intereses. Ideal para guardar fondos de forma segura.' },
        { value: 'CuentaCorriente', label: 'Cuenta Corriente', Help: 'Cuenta bancaria que permite realizar depósitos, retiros y pagos frecuentes, y generalmente no genera intereses.' },
        { value: 'CuentaEnOtraMoneda', label: 'Cuenta en Otra Moneda', Help: 'Cuenta bancaria que maneja divisas distintas a la moneda local, útil para personas que realizan transacciones internacionales.' },
        { value: 'Efectivo', label: 'Efectivo', Help: 'Dinero en forma de billetes y monedas, disponible para ser gastado de inmediato.' },
        { value: 'otro', label: 'Otro', Help: 'Cualquier otro tipo de activo líquido que no encaje en las categorías anteriores.' },
      ];
      
      const activosProductivos = [
        { value: 'Acciones', label: 'Acciones', Help: 'Títulos valores que representan una parte del capital social de una empresa, que otorgan derechos sobre los dividendos y sobre la propiedad de la empresa.' },
        { value: 'Apartamento', label: 'Apartamento', Help: 'Bien inmueble, generalmente residencial, que puede generar ingresos a través de su alquiler o apreciación del valor.' },
        { value: 'BienesRaicesParaInversion', label: 'Bienes Raíces para Inversión', Help: 'Propiedades adquiridas con el objetivo de generar ingresos pasivos mediante alquileres o para obtener plusvalía con la revalorización.' },
        { value: 'Bodega', label: 'Bodega', Help: 'Espacio inmobiliario destinado al almacenamiento de productos o mercancías, ideal para generar ingresos pasivos a través de su alquiler.' },
        { value: 'Bonos', label: 'Bonos', Help: 'Instrumentos de deuda emitidos por entidades públicas o privadas que otorgan al titular un pago periódico de intereses y la devolución del principal al vencimiento.' },
        { value: 'CarteraColectiva', label: 'Cartera Colectiva', Help: 'Instrumento de inversión colectiva en el cual los fondos de varios inversores se combinan para invertir en una variedad de activos.' },
        { value: 'Casa', label: 'Casa', Help: 'Bien inmueble que se utiliza principalmente para vivienda, pero también puede generar ingresos por su alquiler o valorización.' },
        { value: 'CDT', label: 'CDT', Help: 'Certificado de Depósito a Término, una inversión de renta fija en la que se compromete una suma de dinero por un plazo determinado, generando un interés.' },
        { value: 'CuentaInversionUSD', label: 'Cuenta Inversión USD', Help: 'Cuenta bancaria dedicada a la inversión en dólares, destinada a generar rendimientos a través de productos financieros en moneda extranjera.' },
        { value: 'CuentaPorCobrarATerceros', label: 'Cuenta por Cobrar a Terceros', Help: 'Derechos que tiene una empresa o individuo para cobrar dinero a otra parte, generalmente por la venta de productos o servicios.' },
        { value: 'Empresa', label: 'Empresa', Help: 'Entidad dedicada a actividades económicas para generar ingresos. Puede incluir diversos activos productivos como bienes, propiedades y capital humano.' },
        { value: 'Fiducia', label: 'Fiducia', Help: 'Instrumento legal mediante el cual una persona (fiduciante) transfiere bienes a un fiduciario para que este los administre en beneficio de un tercero.' },
        { value: 'FondoDeCesantias', label: 'Fondo de Cesantías', Help: 'Cuenta de ahorro de los empleados destinada a financiar los períodos de desempleo, en la cual el empleador debe realizar aportes periódicos.' },
        { value: 'FondoObligatorioDePensiones', label: 'Fondo Obligatorio de Pensiones', Help: 'Fondos destinados a financiar las pensiones de jubilación de los trabajadores, gestionados por administradoras de fondos de pensiones (AFP).' },
        { value: 'FondoVoluntarioDePensiones', label: 'Fondo Voluntario de Pensiones', Help: 'Ahorro adicional que realiza un trabajador para incrementar el monto de su pensión en el futuro, por encima del aporte obligatorio.' },
        { value: 'FondosMutuos', label: 'Fondos Mutuos', Help: 'Instrumentos financieros donde varios inversores agrupan su dinero para invertir en acciones, bonos y otros activos, bajo la gestión de un administrador profesional.' },
        { value: 'Local', label: 'Local', Help: 'Espacio inmobiliario comercial destinado a actividades de venta o prestación de servicios, ideal para generar ingresos a través del alquiler o de su propio negocio.' },
        { value: 'Negocio', label: 'Negocio', Help: 'Actividad económica que busca generar ganancias, ya sea a través de la venta de productos, servicios o cualquier otra forma de operación comercial.' },
        { value: 'ParticipacionesEnSociedades', label: 'Participaciones en Sociedades', Help: 'Acciones o participaciones en empresas o sociedades, que confieren derechos sobre los beneficios generados por la sociedad.' },
        { value: 'Semovientes', label: 'Semovientes', Help: 'Animales destinados a la producción o comercialización, tales como ganado vacuno, caballos o aves.' },
        { value: 'TituloDeCapitalizacion', label: 'Título de Capitalización', Help: 'Instrumento financiero que permite acumular un ahorro con un premio adicional al final del período de suscripción, normalmente utilizado para incentivar el ahorro.' },
        { value: 'Otros', label: 'Otros', Help: 'Cualquier otro activo productivo que no esté incluido en las categorías anteriores.' },
      ];
      
      const activosImproductivos = [
        { value: 'Apartamento', label: 'Apartamento', Help: 'Propiedad inmobiliaria que no genera ingresos, generalmente se usa para vivienda o descanso.' },
        { value: 'Bodega', label: 'Bodega', Help: 'Espacio de almacenamiento que no genera ingresos, a menudo se utiliza para guardar bienes de valor o productos.' },
        { value: 'Caballos', label: 'Caballos', Help: 'Animales utilizados principalmente para recreación, deportes o como mascota, sin generar ingresos directos.' },
        { value: 'Casa', label: 'Casa', Help: 'Propiedad inmobiliaria que se utiliza principalmente para vivienda, pero no genera ingresos directos.' },
        { value: 'Finca', label: 'Finca', Help: 'Terreno rural que se utiliza para actividades recreativas o de descanso, sin generar ingresos pasivos.' },
        { value: 'Joyas', label: 'Joyas', Help: 'Bienes de lujo, generalmente utilizados para fines personales o decorativos, sin generar ingresos directos.' },
        { value: 'Lancha', label: 'Lancha', Help: 'Embarcación utilizada para ocio o deportes acuáticos, que no genera ingresos por sí sola.' },
        { value: 'Local', label: 'Local', Help: 'Inmueble comercial que no está en uso o alquiler, no genera ingresos por sí mismo.' },
        { value: 'Maquinas', label: 'Máquinas', Help: 'Equipos de trabajo o maquinaria que no están siendo utilizados activamente para generar ingresos.' },
        { value: 'Moto', label: 'Moto', Help: 'Vehículo de dos ruedas, generalmente utilizado para transporte personal, sin generar ingresos directos.' },
        { value: 'MueblesYAccesorios', label: 'Muebles y Accesorios', Help: 'Artículos de decoración y mobiliario, sin generar ingresos por su posesión.' },
        { value: 'Terreno', label: 'Terreno', Help: 'Propiedad de tierra sin desarrollar que no genera ingresos, aunque puede apreciarse con el tiempo.' },
        { value: 'Vehiculo', label: 'Vehículo', Help: 'Automóvil o transporte personal que no se utiliza para generar ingresos, sino para uso personal o familiar.' },
        { value: 'Otro', label: 'Otro', Help: 'Cualquier activo que no se ajusta a las categorías anteriores pero que se considera improductivo.' },
      ];
      
      
      

return(


    
<div className="container">


    <div className="row">
      <div className="col-md-12">
     
        <div id="msform" >
            <img src="./axia-logo.png" alt="logo" />
          
          <ul id="progressbar">
            <li className="active">Seguridad Social</li>
            <li>Ingresos</li>
            <li>Gastos Mensuales</li>
            <li>Gastos Anuales</li>
            <li>Patrimonio</li>
            <li>Objetivos Financieros</li>
          </ul>
          
           {/* Seguridad Social */}

          <fieldset>
           
           <div className="row">    
              <h2 className="fs-title">Seguridad Social</h2>
              <Selector options={options}/>
              <br />
              <h2 className="fs-title">Ingresos</h2>
              <Selector options={ingresos}/>
              <br />
             
              <h2 className="fs-title">Ahorro</h2>
              <Selector options={ahorro}/>
              <h2 className="fs-title">Transporte</h2>
              <Selector options={transporte}/>
              <br />
              <h2 className="fs-title"> Gastos Personales</h2>
              <Selector options={gastosPersonales}/>
              <br />
              <h2 className="fs-title">Hogar</h2>
              <Selector options={hogar}/>
              <br />
              <h2 className="fs-title">Entretenimiento</h2>
              <Selector options={entretenimiento}/>
              <br />
              <h2 className="fs-title">Protecciones Personales</h2>
              <Selector options={protecciones}/>
              <br />
              <h2 className="fs-title">Descuentos de Nomina</h2>
              <Selector options={descuentosnomina}/>
              <br />
              <h2 className="fs-title">Educacion</h2>
              <Selector options={educacion}/>
              <br />
              <h2 className="fs-title">Financieros</h2>
              <Selector options={financieros}/>
              <br />
              <h2 className="fs-title">Otros</h2>
              <Selector options={otros}/>

          <span style={{background:'yellow',fontSize:"50px"}}>Gastos anuales</span>
             
              <br />

              <h2 className="fs-title">Seguros</h2>
              <Selector options={otros}/>
              <br />
              <h2 className="fs-title">Anualidades Fijas</h2>
              <Selector options={otros}/>
              <br />
              <h2 className="fs-title">Anualidades Presupuestadas</h2>
              <Selector options={otros}/>
              <br />
              <h2 className="fs-title"> Impuestos</h2>
              <Selector options={otros}/>
              <br />

              <h2 className="fs-title">Activos Liquidos</h2>
              <Selector options={activoLiquidos}/>
              <br />
              <h2 className="fs-title">Activos Productivos</h2>
              <Selector options={activosProductivos}/>
              <br />
              <h2 className="fs-title">Activos improductivos</h2>
              <Selector options={activosImproductivos}/>
              <div className="col-md-6">
                <select name="genero">
                  <option value="">Género</option>
                  <option value="HOMBRE">Hombre</option>
                  <option value="MUJER">Mujer</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="nombre" placeholder="Nombre"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="apellidos" placeholder="Apellidos"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cedula" placeholder="Cédula de Ciudadanía"/>
              </div>
              <div className="col-md-6">
                <label for="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" placeholder="Fecha de Nacimiento"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="lugarNacimiento" placeholder="Lugar de Nacimiento"/>
              </div>
              <div className="col-md-6">
                <input type="number" name="edad" placeholder="Edad"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="direccionCasa" placeholder="Dirección Casa"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="celular" placeholder="Celular"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="profesion" placeholder="Profesión"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="universidad" placeholder="Universidad"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="correoElectronico" placeholder="Correo Electrónico"/>
              </div>
              <div className="col-md-6">
                <select name="declaranteRenta">
                  <option value="no">¿Declarante de Renta? No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select name="estadoCivil">
                  <option value="">Estado Civil</option>
                  <option value="soltero">Soltero</option>
                  <option value="casado">Casado</option>
                  <option value="divorciado">Divorciado</option>
                  <option value="unionLibre">Unión libre</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" name="eps" placeholder="EPS"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="prepagada" placeholder="Medicina Prepagada"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="arl" placeholder="ARL"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="fondoCesantias" placeholder="Fondo de Cesantías"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="saldoCesantias" placeholder="Saldo en Fondo de Cesantías" className="formatted-number"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <select name="afp">
                  <option value="">AFP</option>
                  <option value="Protección">Protección</option>
                  <option value="Skandia">Skandia</option>
                  <option value="Porvenir">Porvenir</option>
                  <option value="Colpensiones">Colpensiones</option>
                  <option value="Colfondos">Colfondos</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" name="saldoAfp" placeholder="Saldo AFP" className="formatted-number"/>
              </div>
            </div>


            <div className="row">
              <div className="col-md-6">
                <select name="salarioIntegral">
                  <option value="no">Salario integral: No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
              <div className="col-md-6">
                <select name="salarioOrdinario">
                  <option value="no">Salario ordinario: No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select name="prestacionServicios">
                  <option value="no">Prestación servicios: No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
            </div>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
          
 {/* Ingresos */}
<fieldset>
  <h2 className="fs-title">Ingresos</h2>
  <p>En esta sección, te pediremos que detalles todos tus ingresos, tanto mensuales como anuales. Esto incluye salarios, bonificaciones y otros ingresos que recibas regularmente, ten en cuenta que te preguntaremos primero por los mensuales, y posteriormente por los anuales, por lo que primas y bonificaciones que no sean mensuales deberán ser ingresados en la sección de Egresos Anuales</p>
  <h3>Ingresos Mensuales</h3>
  <p>En esta sección, especifica todos los ingresos que recibes mensualmente. Ten en cuenta ingresar el valor bruto (es decir, previo a retenciones), más adelante te pediremos ingresar cada una de las retenciones.</p>
  <label for="ingresosMensualesCount">Número de Ingresos Mensuales:</label>
  <select id="ingresosMensualesCount" name="ingresosMensualesCount"></select>
  <div id="ingresosMensualesContainer"></div>

  <h3>Ingresos Anuales</h3>
  <p>En esta sección, especifica todos los ingresos que recibes anualmente, como primas, bonificaciones anuales, etc.</p>
  <div className="row">
    <div className="col-md-6">
      <input type="text" name="primaJunio" placeholder="Valor anual de Prima Junio" className="formatted-number"/>
    </div>
    <div className="col-md-6">
      <input type="text" name="primaDiciembre" placeholder="Valor anual de Prima Diciembre" className="formatted-number"/>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <input type="text" name="primaExtralegal" placeholder="Valor anual por Prima Extralegal" className="formatted-number"/>
    </div>
    <div className="col-md-6">
      <input type="text" name="primaAdicionalDiciembre" placeholder="Valor anual de Prima Adicional Diciembre" className="formatted-number"/>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <input type="text" name="bonificacionAnual" placeholder="Valor de Bonificación Anual" className="formatted-number"/>
    </div>
    <div className="col-md-6">
      <input type="text" name="dividendos" placeholder="Valor anual de Dividendos" className="formatted-number"/>
    </div>
  </div>
  <label for="ingresosAdicionalesCount">¿Tienes algún ingreso anual/semestral adicional? Descríbelo:</label>
  <select id="ingresosAdicionalesCount" name="ingresosAdicionalesCount"></select>
  <div id="ingresosAdicionalesContainer"></div>
  <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
  <input type="button" name="next" className="next action-button" value="Siguiente"/>
</fieldset>


          
           {/* Gastos Mensuales  */}
          <fieldset>
            <h2 className="fs-title">Gastos Mensuales</h2>
            <p>Incluye información sobre tus gastos mensuales.</p>
            <p>En esta sección, detalla todos los gastos que tienes cada mes. Esto incluye ahorros, transporte, gastos personales, gastos del hogar, entretenimiento, protecciones personales, retenciones y aportes, educación, y otros gastos.</p>
  
            <h3>Gastos de Ahorro</h3>
            <p>Especifica cuánto dinero destinas a ahorros cada mes, como fondo de empleados, cuentas AFC, pensiones voluntarias, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="fondoEmpleados" placeholder="Valor mensual Fondo de Empleados" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="cuentaAFC" placeholder="Valor mensual Cuenta AFC" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="pensionesVoluntarias" placeholder="Valor mensual Pensiones Voluntarias" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="ahorrosCuentaAhorro" placeholder="Valor mensual Ahorro en Cuenta de Ahorros" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="fondoInversionColectiva" placeholder="Valor mensual Fondo de Inversión Colectiva" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="ahorrosEfectivo" placeholder="Valor mensual Ahorros en Efectivo (pesos o Dólares)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="planAlternativoJubilacion" placeholder="Valor mensual Plan Alternativo de Jubilación" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesAhorroCount">¿Tienes algún ahorro mensual adicional? Descríbelo:</label>
            <select id="gastosAdicionalesAhorroCount" name="gastosAdicionalesAhorroCount"></select>
            <div id="gastosAdicionalesAhorroContainer"></div>
  
            <h3>Gastos de Transporte</h3>
            <p>Detalla tus gastos mensuales relacionados con transporte, como gasolina, parqueadero, taxis, peajes, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="gasolina" placeholder="Valor mensual Gasolina" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="parqueadero" placeholder="Valor mensual Parqueadero" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="taxisUber" placeholder="Valor mensual Taxis / Uber" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="peajes" placeholder="Valor mensual Peajes" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="lavadaCarro" placeholder="Valor mensual Lavada de Carro" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="transporteEmpresa" placeholder="Valor mensual Transporte de Empresa" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesTransporteCount">¿Tienes algún gasto adicional de transporte? Descríbelo:</label>
            <select id="gastosAdicionalesTransporteCount" name="gastosAdicionalesTransporteCount"></select>
            <div id="gastosAdicionalesTransporteContainer"></div>
  
            <h3>Gastos Personales</h3>
            <p>Especifica los gastos personales que tienes cada mes, como celular, cuidado personal, hobbies, medicinas, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="celular" placeholder="Valor mensual Celular" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="cuidadoPersonal" placeholder="Valor mensual Cuidado personal / Belleza / Cremas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="peluqueriaUñas" placeholder="Valor mensual Peluquería / Uñas" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="hobbies" placeholder="Valor mensual Hobbies (bicicleta, entrenador personal, juegos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="comidaTrabajo" placeholder="Valor mensual Comida en el Trabajo Mensual (desayunos, almuerzos)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="snacksTrabajo" placeholder="Valor mensual Snacks en el Trabajo Mensual (café, etc.)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="gastosRopa" placeholder="Valor mensual Gastos de Ropa" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="medicinas" placeholder="Valor mensual Medicinas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="googleAppleNube" placeholder="Valor mensual Aplicaciones (Google, Apple, Nube)" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesPersonalesCount">¿Tienes algún gasto personal adicional? Descríbelo:</label>
            <select id="gastosAdicionalesPersonalesCount" name="gastosAdicionalesPersonalesCount"></select>
            <div id="gastosAdicionalesPersonalesContainer"></div>
  
            <h3>Gastos Mensuales Hogar</h3>
            <p>Detalla los gastos mensuales relacionados con el hogar, como arriendo, servicios públicos, mercado, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="arriendoAdministracion" placeholder="Valor mensual Arriendo o Administración" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="gas" placeholder="Valor mensual Gas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="luz" placeholder="Valor mensual Luz" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="agua" placeholder="Valor mensual Agua" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="caldera" placeholder="Valor mensual Caldera" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="tvInternet" placeholder="Valor mensual TV / Internet" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mercado" placeholder="Valor mensual Mercado" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="servicioDomestico" placeholder="Valor mensual Servicio Doméstico" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="plataformasEntretenimiento" placeholder="Valor mensual Plataformas de Entretenimiento" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="rappiPrime" placeholder="Valor mensual Rappi Prime" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="domiciliosCasa" placeholder="Valor mensual Domicilios a Casa" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="gastosMascotas" placeholder="Valor mensual Gastos de Mascotas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="lavanderia" placeholder="Valor mensual Lavandería" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="niñera" placeholder="Valor mensual Niñera" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesHogarCount">¿Tienes algún gasto adicional para hogar? Descríbelo:</label>
            <select id="gastosAdicionalesHogarCount" name="gastosAdicionalesHogarCount"></select>
            <div id="gastosAdicionalesHogarContainer"></div>
  
            <h3>Salidas de Entretenimiento</h3>
            <p>Especifica los gastos que tienes cada mes en salidas y actividades de entretenimiento, como restaurantes, viajes pequeños (por ejemplo escapadas de fin de semana, los viajes más grandes te los solicitaremos más adelante), fiestas, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="salidasEntretenimiento" placeholder="Valor mensual Salidas de Entretenimiento" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="restaurantes" placeholder="Valor mensual Restaurantes" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="viajesPequenos" placeholder="Valor mensual Viajes pequeños (ej, escapada fin de semana)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="fiestas" placeholder="Valor mensual Fiestas" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesEntretenimientoCount">¿Tienes algún gasto adicional para entretenimiento? Descríbelo:</label>
            <select id="gastosAdicionalesEntretenimientoCount" name="gastosAdicionalesEntretenimientoCount"></select>
            <div id="gastosAdicionalesEntretenimientoContainer"></div>
  
            <h3>Protecciones Personales</h3>
            <p>Detalla los gastos mensuales en seguros y aportes de protección personal, como seguro de vida, medicina prepagada, seguro de mascotas, etc (No incluyas los pagos que realizas una vez al año como SOAT, te serán solicitados en la siguiente sección).</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroTodoRiesgoVehiculo" placeholder="Valor mensual Seguro Todo Riesgo Vehículo" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="medicinaPrepagada" placeholder="Valor mensual Medicina Prepagada" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroVida" placeholder="Valor mensual Seguro de Vida" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroExequial" placeholder="Valor mensual Seguro Exequial" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroMascotas" placeholder="Valor mensual Seguro de Mascotas" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesProteccionesPersonalesCount">¿Tienes algún gasto adicional de protecciones personales? Descríbelo:</label>
            <select id="gastosAdicionalesProteccionesPersonalesCount" name="gastosAdicionalesProteccionesPersonalesCount"></select>
            <div id="gastosAdicionalesProteccionesPersonalesContainer"></div>
  
            <h3>Descuentos de Nómina</h3>
            <p>Especifica los gastos relacionados con retenciones y aportes, como retención en la fuente, salud, pensión, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="retencionFuente" placeholder="Valor mensual Retención en la Fuente" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="salud" placeholder="Valor mensual Salud" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="pension" placeholder="Valor mensual Pensión" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="arl" placeholder="Valor mensual ARL" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="aporteFondoSolidaridad" placeholder="Valor mensual Aporte a Fondo de Solidaridad" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="aporteFondoSubsistencia" placeholder="Valor mensual Aporte a Fondo de Subsistencia" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesRetencionAportesCount">¿Tienes algún gasto adicional relacionado con tu nómina? Descríbelo:</label>
            <select id="gastosAdicionalesRetencionAportesCount" name="gastosAdicionalesRetencionAportesCount"></select>
            <div id="gastosAdicionalesRetencionAportesContainer"></div>
  
            <h3>Educación Personal o Gastos de Hijos</h3>
            <p>Detalla los gastos mensuales relacionados con tu educación personal o la de tus hijos, como cursos, colegio, etc (en el caso de pagos semestrales o anuales, te los preguntaremos más adelante). Si pagas tu Medicina Prepagada / Seguro de forma anual, no los incluyas aquí.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cursosIdiomas" placeholder="Valor mensual Cursos de Idiomas (Personal)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cursosMensuales" placeholder="Valor mensual Cursos Mensuales (Ejemplo: Platzi)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="colegioHijos" placeholder="Valor mensual Pensión Colegio Hijos " className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="ruta" placeholder="Valor mensual Ruta" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="alimentacion" placeholder="Valor mensual Alimentación" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mesadaHijos" placeholder="Valor mensual Mesada Hijo(s)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="ropaHijos" placeholder="Valor mensual Ropa Hijo(s)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="panales" placeholder="Valor mensual Pañales" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="transporteHijos" placeholder="Valor mensual Transporte Hijo(s)" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesEducacionHijosCount">¿Tienes algún gasto adicional? Descríbelo:</label>
            <select id="gastosAdicionalesEducacionHijosCount" name="gastosAdicionalesEducacionHijosCount"></select>
            <div id="gastosAdicionalesEducacionHijosContainer"></div>
  
            <h3>Gastos Financieros</h3>
            <p>Especifica los gastos financieros que tienes cada mes, como el mantenimiento de tarjetas de crédito y débito.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mantenimientoTarjetaCredito1" placeholder="Valor mensual Mantenimiento Tarjeta de Crédito 1" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="mantenimientoTarjetaCredito2" placeholder="Valor mensual Mantenimiento Tarjeta de Crédito 2" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cuotaManejoTarjetaDebito" placeholder="Valor mensual Cuota de Manejo Tarjeta Débito" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesFinancierosCount">¿Tienes algún gasto adicional? Descríbelo:</label>
            <select id="gastosAdicionalesFinancierosCount" name="gastosAdicionalesFinancierosCount"></select>
            <div id="gastosAdicionalesFinancierosContainer"></div>
  
            <h3>Otros Gastos</h3>
            <p>Especifica cualquier otro gasto mensual que no hayas incluido en las secciones anteriores, como ayuda familiar, donaciones, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="ayudaFamiliar" placeholder="Valor mensual Ayuda a un Familiar" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="donaciones" placeholder="Valor mensual Donaciones / Diezmo" className="formatted-number"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="text" name="arriendoConsultorio" placeholder="Valor mensual Ayuda a un Familiar" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="serviciosPublicosConsultorio" placeholder="Valor mensual Servicios públicos Consultorio / Oficina " className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="pagoAdministracionAdicional" placeholder="Valor mensual Pago de Administración Adicional" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroAmbulanciaFamiliar" placeholder="Valor mensual Seguro Ambulancia Familiar" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="regalosCumpleanosOficina" placeholder="Valor mensual Regalos Cumpleaños u Oficina" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroSaludFamiliar" placeholder="Valor mensual Seguro Salud Familiar" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="secretariaAsistente" placeholder="Valor mensual Secretaria / Asistente Personal" className="formatted-number"/>
              </div>
            </div>

            <label for="gastosAdicionalesOtrosCount">¿Tienes algún gasto adicional? Descríbelo:</label>
            <select id="gastosAdicionalesOtrosCount" name="gastosAdicionalesOtrosCount"></select>
            <div id="gastosAdicionalesOtrosContainer"></div>
  
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
  
     {/* Gastos Anuales  */}
          <fieldset>
            <h2 className="fs-title">Gastos Anuales</h2>
            <p>Incluye información sobre tus gastos anuales.</p>
            <p>En esta sección, detalla los gastos que tienes una vez al año, como impuestos, seguros, revisiones tecnomecánicas, etc.</p>
            <h3>Seguros</h3>
            <p>Especifica los seguros que pagas anualmente, como SOAT, seguros de vida, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="soat1" placeholder="Valor anual SOAT 1" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="soat2" placeholder="Valor anual SOAT 2" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="todoRiesgo1" placeholder="Valor anual Todo Riesgo 1" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="todoRiesgo2" placeholder="Valor anual Todo Riesgo 2" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="polizaSalud" placeholder="Valor anual Póliza de Salud" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroVivienda" placeholder="Valor anual Seguro de Vivienda" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroExequial" placeholder="Valor anual Seguro Exequial" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroResponsabilidadCivil" placeholder="Valor anual Póliza de Responsabilidad Civil" className="formatted-number"/>
              </div>
            </div>
            <label for="segurosAdicionalesCount">¿Tienes algún seguro adicional? Descríbelo:</label>
            <select id="segurosAdicionalesCount" name="segurosAdicionalesCount"></select>
            <div id="segurosAdicionalesContainer"></div>

            <h3>Anualidades Fijas</h3>
            <p>Especifica los gastos anuales fijos, como gimnasio, contadores, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="contador" placeholder="Valor anual Contador / Realización Declaración de Renta" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="pagoGimnasio" placeholder="Valor anual Pago Gimnasio / Entrenador" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="anualidades" placeholder="Valor anual Pago Anualidades (sociedades, cursos)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="matriculaColegio" placeholder="Valor anual Matrícula Colegio" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="semestreUniversidad" placeholder="Valor total año Universidad" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="liquidacionEmpleada" placeholder="Valor anual Liquidación Empleada / Prima" className="formatted-number"/>
              </div>
            </div>
            <label for="anualidadesFijasAdicionalCount">¿Tienes algún gasto fijo adicional? Descríbelo:</label>
            <select id="anualidadesFijasAdicionalCount" name="anualidadesFijasAdicionalCount"></select>
            <div id="anualidadesFijasAdicionalContainer"></div>

            <h3>Anualidades Presupuestadas</h3>
            <p>Especifica los gastos anuales presupuestados, como vacaciones, regalos, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="vacacionesGrandes" placeholder="Valor anual Vacaciones Internacionales" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="vacacionesPequenas" placeholder="Valor anual Vacaciones Nacionales" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="regalosDiciembre" placeholder="Valor anual Regalos y Compras de Diciembre" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="regalosEspeciales" placeholder="Valor anual Regalos Especiales (esposa, papás, hermanos, hijos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="ropaAnual" placeholder="Valor anual Ropa (compra semestral o anual)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="mantenimientoApto" placeholder="Valor anual Mantenimiento Apartamento" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mantenimientoVehiculo" placeholder="Valor anual Mantenimiento Vehículo" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="comprasAnuales" placeholder="Valor anual Compras Anuales (perfumes)" className="formatted-number"/>
              </div>
            </div>
            <label for="anualidadesPresupuestadasAdicionalCount">¿Tienes algún gasto presupuestado adicional? Descríbelo:</label>
            <select id="anualidadesPresupuestadasAdicionalCount" name="anualidadesPresupuestadasAdicionalCount"></select>
            <div id="anualidadesPresupuestadasAdicionalContainer"></div>

            <h3>Impuestos</h3>
            <p>Detalla los impuestos que pagas anualmente, como declaración de renta, impuesto vehicular, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="declaracionRenta" placeholder="Valor anual Declaración de Renta" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="impuestoVehicular1" placeholder="Valor anual Impuesto Vehicular 1" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="impuestoVehicular2" placeholder="Valor anual Impuesto Vehicular 2" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="impuestoPredial1" placeholder="Valor anual Impuesto Predial 1" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="impuestoPredial2" placeholder="Valor anual Impuesto Predial 2" className="formatted-number"/>
              </div>
            </div>
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
          
          {/* {-- Patrimonio -} */}
          <fieldset>
            <h2 className="fs-title">Patrimonio</h2>
            <p>Incluye información sobre tus bienes y activos.</p>
            <p>En esta sección, te pediremos que detalles todos los bienes y activos que posees, tanto líquidos como productivos e improductivos.</p>
            
            <h3>Activos Líquidos</h3>
            <p>Proporcione detalles sobre sus activos líquidos. Los activos líquidos son aquellos que se pueden convertir fácilmente en efectivo, como cuentas de ahorros y dinero en efectivo.</p>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAhorros1" value="Cuenta de Ahorros 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAhorros1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAhorros1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAhorros2" value="Cuenta de Ahorros 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAhorros2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAhorros2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAhorros3" value="Cuenta de Ahorros 3" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAhorros3" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAhorros3" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="ahorrosEfectivoPesos" value="Ahorros en Efectivo (Pesos)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAhorrosEfectivoPesos" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAhorrosEfectivoPesos" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="ahorrosEfectivoDolares" value="Ahorros en Efectivo (Dólares)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAhorrosEfectivoDolares" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAhorrosEfectivoDolares" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="ahorrosEfectivoEuros" value="Ahorros en Efectivo (Euros)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAhorrosEfectivoEuros" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAhorrosEfectivoEuros" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <label for="activosLiquidosAdicionalCount">¿Tienes algún activo líquido adicional? Descríbelo:</label>
            <select id="activosLiquidosAdicionalCount" name="activosLiquidosAdicionalCount"></select>
            <div id="activosLiquidosAdicionalContainer"></div>
        
            <h3>Activos Productivos</h3>
            <p>Proporcione detalles sobre sus activos productivos. Los activos productivos son aquellos que generan ingresos o aumentan de valor con el tiempo. Ejemplos incluyen pensiones, cesantías, cuentas AFC, fondos de inversión colectiva (FIC), acciones, criptomonedas, apartamentos en arriendo, certificados de depósito a término (CDT) e inversiones en dólares.</p>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="pensionObligatoria" value="Pensión Obligatoria" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadPensionObligatoria" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorPensionObligatoria" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cesantias" value="Cesantías" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCesantias" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCesantias" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAFC" value="Cuenta AFC" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAFC" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAFC" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="fic" value="FIC (Fondo de Inversión Colectiva)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadFic" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorFic" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="acciones" value="Acciones" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAcciones" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAcciones" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="criptomonedas" value="Criptomonedas" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCriptomonedas" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCriptomonedas" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoArriendo1" value="Apartamento en Arriendo 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoArriendo1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoArriendo1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoArriendo2" value="Apartamento en Arriendo 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoArriendo2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoArriendo2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cdt1" value="CDT 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCdt1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCdt1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cdt2" value="CDT 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCdt2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCdt2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="inversionDolares" value="Inversión en Dólares" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadInversionDolares" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorInversionDolares" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <label for="activosProductivosAdicionalCount">¿Tienes algún activo productivo adicional? Descríbelo:</label>
            <select id="activosProductivosAdicionalCount" name="activosProductivosAdicionalCount"></select>
            <div id="activosProductivosAdicionalContainer"></div>
        
            <h3>Activos Improductivos</h3>
            <p>Proporcione detalles sobre sus activos improductivos. Los activos improductivos son aquellos que no generan ingresos y pueden tener costos de mantenimiento. Ejemplos incluyen apartamentos que no están en arriendo y vehículos personales.</p>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoVivienda1" value="Apartamento Vivienda 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoVivienda1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoVivienda1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoNoProductivo" value="Apartamento No Productivo" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoNoProductivo" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoNoProductivo" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="vehiculo1" value="Vehículo 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadVehiculo1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorVehiculo1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="vehiculo2" value="Vehículo 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadVehiculo2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorVehiculo2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <label for="activosImproductivosAdicionalCount">¿Tienes algún activo improductivo adicional? Descríbelo:</label>
            <select id="activosImproductivosAdicionalCount" name="activosImproductivosAdicionalCount"></select>
            <div id="activosImproductivosAdicionalContainer"></div>
        
            <h3>Deudas de Corto Plazo</h3>
            <p>Detalla los pasivos de corto plazo que tienes (de 0 a 5 años), como tarjetas de crédito y deudas familiares.</p>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="tarjetaCredito1" value="Tarjeta de Crédito 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoTarjetaCredito1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadTarjetaCredito1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaTarjetaCredito1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasTarjetaCredito1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualTarjetaCredito1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="tarjetaCredito2" value="Tarjeta de Crédito 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoTarjetaCredito2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadTarjetaCredito2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaTarjetaCredito2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasTarjetaCredito2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualTarjetaCredito2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="deudaFamiliar" value="Deuda Familiar" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoDeudaFamiliar" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadDeudaFamiliar" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaDeudaFamiliar" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasDeudaFamiliar" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualDeudaFamiliar" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="libreDestino1" value="Libre Destino 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLibreDestino1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLibreDestino1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLibreDestino1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLibreDestino1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLibreDestino1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="libreDestino2" value="Libre Destino 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLibreDestino2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLibreDestino2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLibreDestino2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLibreDestino2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLibreDestino2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="deudaFondoEmpleados" value="Deuda Fondo de Empleados" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoDeudaFondoEmpleados" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadDeudaFondoEmpleados" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaDeudaFondoEmpleados" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasDeudaFondoEmpleados" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualDeudaFondoEmpleados" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoVehicular" value="Crédito Vehicular" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoVehicular" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoVehicular" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoVehicular" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoVehicular" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoVehicular" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoRotativo" value="Crédito Rotativo" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoRotativo" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoRotativo" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoRotativo" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoRotativo" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoRotativo" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <label for="deudasCortoPlazoAdicionalCount">¿Tienes algún pasivo de corto plazo adicional? Descríbelo:</label>
            <select id="deudasCortoPlazoAdicionalCount" name="pasivosCortoPlazoAdicionalCount"></select>
            <div id="deudasCortoPlazoAdicionalContainer"></div>
        
            <h3>Pasivos de Largo Plazo</h3>
            <p>Detalla los pasivos de largo plazo que tienes (de 5 años en adelante), como créditos hipotecarios y leasings.
            </p>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoHipotecario1" value="Crédito Hipotecario 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoHipotecario1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoHipotecario1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoHipotecario1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoHipotecario1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoHipotecario1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoHipotecario2" value="Crédito Hipotecario 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoHipotecario2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoHipotecario2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoHipotecario2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoHipotecario2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoHipotecario2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="leasing1" value="Leasing 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLeasing1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLeasing1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLeasing1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLeasing1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLeasing1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="leasing2" value="Leasing 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLeasing2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLeasing2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLeasing2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLeasing2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLeasing2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <label for="deudasLargoPlazoAdicionalCount">¿Tienes algún pasivo de largo plazo adicional? Descríbelo:</label>
            <select id="deudasLargoPlazoAdicionalCount" name="deudasLargoPlazoAdicionalCount"></select>
            <div id="deudasLargoPlazoAdicionalContainer"></div>          
            
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
  
          {/* {-- Objetivos Financieros -} */}
          <fieldset>
            <h2 className="fs-title">Objetivos Financieros</h2>
            <p>Incluye información sobre tus objetivos financieros.</p>
            <p><strong>Descripción:</strong> En esta sección, te pediremos que detalles tus objetivos financieros, tanto a corto como a largo plazo. Esto nos ayudará a entender mejor tus metas y a planificar cómo alcanzarlas.</p>
            
            {/* {-- Campo fijo para Libertad Financiera -} */}
            <h3>Libertad Financiera</h3>
            <p>Para el objetivo de "Libertad Financiera", escribe el número de años en los que esperas ser libre financieramente, cuánto deseas recibir mensualmente por ingresos pasivos y en cuánto tiempo?. 
            </p>
            <div className="row">
              <div className="col-md-3">
                <label for="libertadPlazo">Plazo en años:</label>
                <input type="text" id="libertadPlazo" name="libertadPlazo" placeholder="Plazo en años" className="formatted-number"/>
              </div>
              <div className="col-md-3">
                <label for="libertadValor">Valor objetivo:</label>
                <input type="text" id="libertadValor" name="libertadValor" placeholder="Valor objetivo" className="formatted-number"/>
              </div>
            </div>

            <h3>Objetivos Fijos Adicionales</h3>
            <div id="objetivosContainer">
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoSalirDeDeudas" value="Salir de deudas" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionSalirDeDeudas" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoSalirDeDeudas" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorSalirDeDeudas" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoComprarVivienda" value="Comprar vivienda" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionComprarVivienda" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoComprarVivienda" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorComprarVivienda" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoViajar" value="Viajar" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionViajar" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoViajar" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorViajar" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoUniversidadHijos" value="Universidad hijos" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionUniversidadHijos" placeholder="Descripción (edad hijos)"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoUniversidadHijos" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorUniversidadHijos" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoInvertir" value="Invertir" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionInvertir" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoInvertir" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorInvertir" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoPlaneacionTributaria" value="Planeación tributaria" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionPlaneacionTributaria" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoPlaneacionTributaria" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorPlaneacionTributaria" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoInvertirDolares" value="Invertir en dólares u otra moneda" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionInvertirDolares" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoInvertirDolares" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorInvertirDolares" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoSegurosVida" value="Contar con seguros de vida / incapacidad" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionSegurosVida" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoSegurosVida" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorSegurosVida" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoCompraVehiculo" value="Cambio / Compra de vehículo" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionCompraVehiculo" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoCompraVehiculo" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorCompraVehiculo" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoCasaPropia" value="Tener casa propia vs Vivir en arriendo" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionCasaPropia" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoCasaPropia" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorCasaPropia" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoMaestria" value="Maestría / Especialización / Estudios" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionMaestria" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoMaestria" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorMaestria" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
            </div>
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="submit" name="submit" className="submit action-button" value="Enviar"/>
          </fieldset>

        </div>
      </div>
    </div>
  </div>)

}


export default Form;
