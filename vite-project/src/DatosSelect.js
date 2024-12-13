export const seguridadsocial = [
  { value: 'EPS', label: 'EPS',  type: 'text', Help: 'Selecciona tu entidad de salud, ya sea pública o privada, donde estás afiliado para recibir atención médica. Esta es la entidad responsable de brindarte cobertura en servicios médicos.', visible: false },
  { value: 'Medicina_Prepagada', label: 'Medicina Prepagada', type: 'text', Help: 'Elige tu plan de salud privado que te permite acceder a servicios médicos de calidad con mayor rapidez, mediante un contrato con una aseguradora que cubre consultas, tratamientos y otros servicios.', visible: false },
  { value: 'ARL', label: 'ARL', type: 'text', Help: 'Selecciona la aseguradora que cubre los riesgos laborales. La ARL (Administradora de Riesgos Laborales) se encarga de la prevención, atención y compensación de accidentes laborales y enfermedades profesionales.', visible: false },
  { value: 'Fondo_Cesantias', label: 'Fondo Cesantías', type: 'text', Help: 'Indica el fondo al cual estás afiliado para el manejo de tus cesantías. Las cesantías son un ahorro obligatorio que el empleador debe consignar en favor del trabajador, utilizado principalmente en casos de desempleo.', visible: false },
  { value: 'AFP', label: 'AFP', type: 'text', Help: 'Elige la Administradora de Fondos de Pensiones a la cual estás afiliado. La AFP es la encargada de administrar y gestionar los fondos de pensión de los trabajadores para su jubilación.', visible: false }
];

export const ingresos = [
  { value: 'Salario_Tradicional', label: 'Salario Tradicional', Help: 'Este es el salario mensual base que recibes como compensación por tu trabajo. Es un pago fijo acordado entre tú y tu empleador.', visible: true, type: "number" },
  { value: 'Salario_Integral', label: 'Salario Integral', Help: 'Es un salario que incluye todos los beneficios y prestaciones sociales, como pensión, cesantías y vacaciones, dentro del pago acordado.', visible: true, type: "number" },
  { value: 'Arriendo', label: 'Arriendo', Help: 'Es el valor que recibes por el alquiler de una propiedad. Puede ser por un apartamento, casa o cualquier inmueble que alquiles a otros.', visible: true, type: "number" },
  { value: 'Auxilio', label: 'Auxilio', Help: 'Un pago adicional que se otorga para cubrir necesidades específicas, como transporte, alimentación u otros gastos relacionados con tu trabajo o situación personal.', visible: true, type: "number" },
  { value: 'Beneficio', label: 'Beneficio', Help: 'Pago adicional o ventaja proporcionada por tu empleador o institución. Pueden ser beneficios de salud, educación, transporte, entre otros.', visible: true, type: "number" },
  { value: 'Bonificacion', label: 'Bonificación', Help: 'Un pago adicional que se otorga en función del desempeño, resultados o alguna meta alcanzada, como incentivo o reconocimiento.', visible: true, type: "number" },
  { value: 'Comisiones', label: 'Comisiones', Help: 'Pago variable que se otorga en función de las ventas o rendimiento de una persona o empresa en su actividad comercial.', visible: true, type: "number" },
  { value: 'Dividendos', label: 'Dividendos', Help: 'Son los pagos que los accionistas reciben de las ganancias de una empresa. Se distribuyen de acuerdo con las participaciones que se tengan en la empresa.', visible: true, type: "number" },
  { value: 'Honorarios', label: 'Honorarios', Help: 'Pago realizado por la prestación de servicios profesionales. Es común en actividades como consultoría, asesoría, abogacía, entre otros.', visible: true, type: "number" },
  { value: 'Prima_De_Servicios', label: 'Prima de Servicios', Help: 'Es un pago adicional que se otorga a los trabajadores en ciertos periodos del año, como parte de la compensación por su trabajo. Usualmente se paga en diciembre y junio.', visible: true, type: "number" },
  { value: 'Prima_Extralegal', label: 'Prima Extralegal', Help: 'Es una bonificación adicional que puede ser otorgada por el empleador, fuera de lo que estipula la ley. No es obligatoria y depende de las políticas de la empresa.', visible: true, type: "number" },
  { value: 'Renta', label: 'Renta', Help: 'Es el ingreso periódico recibido por el trabajo, el capital, o cualquier otra fuente que genere un pago regular. Incluye salarios, beneficios y otros pagos.', visible: true, type: "number" },
  { value: 'Subsidio_De_Transporte', label: 'Subsidio de Transporte', Help: 'Es un pago otorgado para cubrir el costo del transporte desde y hacia el lugar de trabajo. En muchos países es un beneficio no sujeto a impuestos.', visible: true, type: "number" },
  { value: 'Subsidio_Familiar', label: 'Subsidio Familiar', Help: 'Beneficio económico otorgado a los trabajadores para apoyar los gastos familiares, como el cuidado de hijos o personas dependientes.', visible: true, type: "number" }
];

export const ahorro = [
  { value: 'Cuenta_Corriente', label: 'Cuenta Corriente', Help: 'Es una cuenta bancaria destinada para transacciones diarias, como pagos, depósitos y retiros. Generalmente, no tiene restricciones de acceso, pero puede tener costos asociados.', visible: true, type: "number" },
  { value: 'Cuenta_De_Ahorros', label: 'Cuenta de Ahorros', Help: 'Es una cuenta bancaria en la que puedes depositar dinero y ganar intereses. Está destinada principalmente para ahorrar a largo plazo.', visible: true, type: "number" },
  { value: 'Fiducias', label: 'Fiducias', Help: 'Son contratos en los cuales una parte (fiduciante) transfiere activos a una entidad fiduciaria para que los administre en beneficio de otra parte (beneficiario), con fines específicos como la inversión o el manejo patrimonial.', visible: true, type: "number" },
  { value: 'Fondo_De_Empleados', label: 'Fondo de Empleados', Help: 'Es un fondo creado por una empresa para ofrecer a sus empleados un beneficio económico, que generalmente se destina a ahorros, préstamos o seguros.', visible: true, type: "number" },
  { value: 'Inversiones_Exterior', label: 'Inversiones Exterior', Help: 'Se refiere a colocar recursos en activos fuera del país de residencia, como en mercados internacionales, para diversificar las fuentes de ingreso y reducir riesgos.', visible: true, type: "number" },
  { value: 'Cartera_Colectiva', label: 'Cartera Colectiva', Help: 'Es un conjunto de inversiones de diferentes personas administrado por una entidad financiera. Los inversores reciben una parte de los ingresos generados de acuerdo con su participación.', visible: true, type: "number" },
  { value: 'Cooperativas', label: 'Cooperativas', Help: 'Son organizaciones de personas que se agrupan para alcanzar objetivos comunes, como el ahorro y el crédito. Los miembros de una cooperativa tienen acceso a servicios financieros, como cuentas de ahorro y préstamos.', visible: true, type: "number" },
  { value: 'Cuenta_AFC', label: 'Cuenta AFC', Help: 'Es una cuenta especial diseñada para el ahorro de los trabajadores para la compra de vivienda, permitiendo ahorrar de forma voluntaria y con beneficios fiscales en algunos países.', visible: true, type: "number" },
  { value: 'Fondos_Mutuos', label: 'Fondos Mutuos', Help: 'Son vehículos de inversión colectiva que agrupan el dinero de varios inversionistas para invertir en activos como acciones, bonos y otros valores. Los fondos mutuos permiten diversificar el riesgo de inversión.', visible: true, type: "number" },
  { value: 'Pension_Voluntaria', label: 'Pensión Voluntaria', Help: 'Es un tipo de ahorro adicional que puedes hacer de manera voluntaria para incrementar tu pensión en la jubilación, aportando dinero de forma periódica a una entidad financiera.', visible: true, type: "number" },
  { value: 'Provision_Anualidades', label: 'Provisión Anualidades', Help: 'Es un ahorro destinado a generar ingresos de forma periódica, generalmente como una fuente de renta a largo plazo, como en el caso de una pensión.', visible: true, type: "number" },
  { value: 'Otros', label: 'Otros', Help: 'Cualquier otra opción de ahorro o inversión que no se clasifique dentro de las anteriores. Puede incluir cuentas especiales, productos financieros u otros vehículos de inversión.', visible: true, type: "number" }
];

 

export const transporte = [
  { value: 'Buses_Transmilenio', label: 'Buses / Transmilenio', visible: false, type: "number" },
  { value: 'Gasolina', label: 'Gasolina', visible: false, type: "number" }, 
  { value: 'Parqueadero', label: 'Parqueadero', visible: false, type: "number" },
  { value: 'Taxis', label: 'Taxis', visible: false, type: "number" },
  { value: 'Transporte_Empresa', label: 'Transporte Empresa', visible: false, type: "number" },
  { value: 'Transporte_Escolar', label: 'Transporte Escolar', visible: false, type: "number" },
  { value: 'Otros', label: 'Otros', visible: true, type: "number" },
];

export const gastosPersonales = [
  { value: 'Almuerzos_Diarios', label: 'Almuerzos Diarios', Help: 'Es el gasto diario relacionado con la comida durante la jornada laboral o escolar. Incluye el costo de comprar almuerzos fuera de casa o llevar comida preparada.', visible: false, type: "number" },
  { value: 'Celular', label: 'Celular', Help: 'Es el gasto mensual asociado al plan de telefonía móvil, que incluye llamadas, mensajes y datos móviles para tu dispositivo celular.', visible: false, type: "number" },
  { value: 'Cuidado_Personal', label: 'Cuidado Personal', Help: 'Son los gastos relacionados con productos o servicios para la higiene, cuidado de la piel, cabello y bienestar personal, como cremas, jabones, entre otros.', visible: false, type: "number" },
  { value: 'Desayunos_Diarios', label: 'Desayunos Diarios', Help: 'Es el gasto relacionado con los alimentos consumidos en el desayuno cada día, ya sea en casa o fuera de ella.', visible: false, type: "number" },
  { value: 'Gimnasio', label: 'Gimnasio', Help: 'Es el costo mensual de la membresía de un gimnasio o centro deportivo donde se realizan actividades físicas o entrenamiento personal.', visible: false, type: "number" },
  { value: 'Mesada_Hijos', label: 'Mesada Hijos', Help: 'Es el dinero que se destina mensualmente a los hijos para cubrir sus necesidades o como un ahorro para su educación o bienestar.', visible: false, type: "number" },
  { value: 'Ropa', label: 'Ropa', Help: 'Son los gastos relacionados con la compra de ropa y accesorios personales, ya sea para el día a día o para ocasiones especiales.', visible: false, type: "number" },
  { value: 'Medicamentos', label: 'Medicamentos', Help: 'Es el gasto asociado a la compra de medicamentos recetados o de venta libre para el tratamiento de enfermedades o el mantenimiento de la salud.', visible: false, type: "number" },
  { value: 'Barberia', label: 'Barbería', Help: 'Es el gasto destinado a los servicios de corte de cabello, arreglo de barba y otros cuidados relacionados con el cuidado personal masculino.', visible: false, type: "number" },
  { value: 'Manicure', label: 'Manicure', Help: 'Es el gasto relacionado con los servicios de cuidado y embellecimiento de las uñas, generalmente prestados en un salón de belleza.', visible: false, type: "number" },
  { value: 'Peluqueria', label: 'Peluquería', Help: 'Es el gasto asociado a los servicios de corte, peinado y tratamientos capilares que se realizan en un salón de belleza o peluquería.', visible: false, type: "number" },
  { value: 'Otros', label: 'Otro', Help: 'Cualquier otro gasto relacionado con el cuidado personal o necesidades diarias que no se clasifiquen dentro de las opciones anteriores.', visible: true, type: "number" }
];

export const hogar = [
  { value: 'Administracion', label: 'Administración', Help: 'Son los gastos relacionados con la gestión de tu hogar, como los honorarios por servicios de administración, ya sea de una propiedad o de un bien compartido.', visible: false, type: "number" },
  { value: 'Agua', label: 'Agua', Help: 'Es el costo mensual por el servicio de agua potable, generalmente suministrado por una empresa local o pública para el consumo doméstico.', visible: false, type: "number" },
  { value: 'Arrendamiento', label: 'Arrendamiento', Help: 'Es el pago mensual por el alquiler de la vivienda o inmueble, ya sea una casa, apartamento o cualquier otro tipo de propiedad.', visible: false, type: "number" },
  { value: 'Chofer', label: 'Chofer', Help: 'Es el pago por los servicios de un chofer o conductor privado que transporta a los miembros del hogar a diversos destinos, como el trabajo, la escuela, etc.', visible: false, type: "number" },
  { value: 'Compras_Casa', label: 'Compras Casa', Help: 'Son los gastos asociados a la adquisición de artículos y productos para la casa, tales como electrodomésticos, muebles, decoración, utensilios de cocina, entre otros.', visible: false, type: "number" },
  { value: 'Energia', label: 'Energía', Help: 'Es el gasto mensual por el servicio de energía eléctrica que alimenta las instalaciones de la vivienda, cubriendo luces, electrodomésticos y otros dispositivos.', visible: false, type: "number" },
  { value: 'Gas', label: 'Gas', Help: 'Es el costo mensual por el servicio de gas utilizado en la cocina, calefacción o incluso en la producción de agua caliente.', visible: false, type: "number" },
  { value: 'Jardinero', label: 'Jardinero', Help: 'Es el costo por los servicios de jardinería, que incluyen el cuidado de las plantas, césped, árboles y la limpieza del jardín en la propiedad.', visible: false, type: "number" },
  { value: 'Lavanderia', label: 'Lavandería', Help: 'Es el gasto asociado con la limpieza de ropa, que puede incluir servicios profesionales de lavandería o la compra de productos para el lavado en casa.', visible: false, type: "number" },
  { value: 'Mercado', label: 'Mercado', Help: 'Es el gasto mensual relacionado con la compra de alimentos y productos básicos para el hogar, como frutas, verduras, carnes, lácteos, etc.', visible: false, type: "number" },
  { value: 'Ninera', label: 'Niñera', Help: 'Es el pago por los servicios de una niñera o cuidadora de niños, que se encarga del cuidado y bienestar de los hijos mientras los padres trabajan o se ausentan.', visible: false, type: "number" },
  { value: 'Servicio_Domestico', label: 'Servicio Doméstico', Help: 'Es el costo de los servicios de limpieza, cocina u otros servicios domésticos proporcionados por empleados o agencias especializadas.', visible: false, type: "number" },
  { value: 'Servicios_Publicos', label: 'Servicios Públicos', Help: 'Son los gastos relacionados con los servicios públicos generales, como agua, luz, gas, telecomunicaciones y otros servicios proporcionados por el gobierno o empresas privadas.', visible: false, type: "number" },
  { value: 'Internet', label: 'Internet', Help: 'Es el gasto mensual por el servicio de conexión a Internet en el hogar, utilizado para acceder a redes sociales, trabajo en línea, entretenimiento, entre otros.', visible: false, type: "number" },
  { value: 'Plataformas_Stremm', label: 'Plataformas Stremm', Help: 'Son los gastos asociados con servicios de streaming o plataformas de entretenimiento en línea, como Netflix, Spotify, Disney+, Amazon Prime, entre otros.', visible: false, type: "number" },
  { value: 'Otros', label: 'Otros', Help: 'Cualquier otro gasto relacionado con el hogar que no se haya incluido en las categorías anteriores.', visible: true, type: "number" }
];


export const entretenimiento = [
  { value: 'cines', label: 'Cines', Help: 'Es el gasto relacionado con la compra de boletos o suscripciones a cines para disfrutar de películas y otros eventos cinematográficos.', visible: false, type: "number" },
  { value: 'club', label: 'Club', Help: 'Es el gasto relacionado con las membresías o suscripciones a clubes sociales, deportivos o privados para actividades recreativas o de esparcimiento.', visible: false, type: "number" },
  { value: 'eventos_sociales', label: 'Eventos Sociales', Help: 'Son los gastos asociados con la asistencia o participación en eventos sociales como fiestas, bodas, conciertos, entre otros.', visible: false, type: "number" },
  { value: 'fines_de_semana', label: 'Fines de Semana', Help: 'Es el gasto relacionado con actividades recreativas o salidas que realizas durante los fines de semana, como cenas, salidas al parque, etc.', visible: false, type: "number" },
  { value: 'golf', label: 'Golf', Help: 'Es el gasto asociado a la práctica del golf, como el alquiler de equipo, membresías a campos de golf o la participación en torneos.', visible: false, type: "number" },
  { value: 'restaurantes', label: 'Restaurantes', Help: 'Es el gasto relacionado con la comida y bebida en restaurantes, cafeterías, bares u otros establecimientos de comida.', visible: false, type: "number" },
  { value: 'reuniones_sociales', label: 'Reuniones Sociales', Help: 'Es el gasto asociado con las reuniones y encuentros sociales con amigos, familiares o colegas, que pueden incluir cenas, actividades recreativas o eventos en casa.', visible: false, type: "number" },
  { value: 'rumba', label: 'Rumba', Help: 'Son los gastos relacionados con la salida a bares, discotecas, conciertos y otros lugares nocturnos para bailar y disfrutar de música.', visible: false, type: "number" },
  { value: 'salidas', label: 'Salidas', Help: 'Es el gasto relacionado con salidas recreativas fuera del hogar, como visitas a parques, museos, actividades al aire libre, entre otros.', visible: false, type: "number" },
  { value: 'subscripciones', label: 'Subscripciones', Help: 'Es el gasto mensual o anual por servicios de entretenimiento en línea, como plataformas de streaming (Netflix, Spotify, etc.) o suscripciones a revistas y servicios digitales.', visible: false, type: "number" },
  { value: 'tenis', label: 'Tenis', Help: 'Es el gasto relacionado con la práctica del tenis, como clases, alquiler de canchas, compra de equipo o participación en torneos.', visible: false, type: "number" },
  { value: 'vacaciones', label: 'Vacaciones', Help: 'Es el gasto relacionado con los viajes y planes vacacionales, incluyendo pasajes, alojamiento, actividades turísticas, y otros gastos asociados a un viaje de descanso.', visible: false, type: "number" },
  { value: 'viajes', label: 'Viajes', Help: 'Es el gasto relacionado con viajes, ya sea por motivos personales o de trabajo, que incluye transporte, alojamiento y otros gastos asociados a la experiencia de viajar.', visible: false, type: "number" },
  { value: 'otros', label: 'Otros', Help: 'Cualquier otro gasto relacionado con actividades de entretenimiento que no se clasifiquen en las opciones anteriores.', visible: true, type: "number" },
];

export const protecciones = [
  { value: 'aporte_a_pension_obligatoria', label: 'Aporte a Pensión Obligatoria', Help: 'Es el aporte obligatorio que haces a un fondo de pensiones para asegurar tu jubilación. Este pago es obligatorio por ley.', visible: false, type: "number" },
  { value: 'aporte_a_salud_obligatoria', label: 'Aporte a Salud Obligatoria', Help: 'Es el aporte obligatorio al sistema de salud, que te garantiza acceso a servicios médicos y de salud según la legislación vigente.', visible: false, type: "number" },
  { value: 'salud_prepagada', label: 'Salud Prepagada', Help: 'Es un tipo de seguro de salud privado que permite acceder a atención médica con mejores tiempos de respuesta y servicios adicionales.', visible: false, type: "number" },
  { value: 'seguro_de_contenidos', label: 'Seguro de Contenidos', Help: 'Es un seguro que cubre los daños o pérdida de tus bienes materiales en caso de eventos como robo, incendios o accidentes.', visible: false, type: "number" },
  { value: 'seguro_de_invalidez', label: 'Seguro de Invalidez', Help: 'Es un seguro que cubre la pérdida de ingresos debido a una invalidez permanente o temporal que impida trabajar.', visible: false, type: "number" },
  { value: 'seguro_de_responsabilidad_civil', label: 'Seguro de Responsabilidad Civil', Help: 'Es un seguro que cubre los daños a terceros causados por accidente, negligencia o mal manejo de tus bienes o actividades.', visible: false, type: "number" },
  { value: 'seguro_de_salud', label: 'Seguro de Salud', Help: 'Es un seguro médico que cubre gastos de atención sanitaria, incluyendo consultas médicas, cirugías y otros servicios médicos.', visible: false, type: "number" },
  { value: 'seguro_de_vehiculo', label: 'Seguro de Vehículo', Help: 'Es un seguro que cubre los daños causados a tu vehículo o a otros vehículos en caso de accidentes, robos o daños a terceros.', visible: false, type: "number" },
  { value: 'seguro_de_vida', label: 'Seguro de Vida', Help: 'Es un seguro que protege a tus beneficiarios financieros en caso de fallecimiento, brindando un pago único o mensual.', visible: false, type: "number" },
  { value: 'seguro_exequial', label: 'Seguro Exequial', Help: 'Es un seguro que cubre los gastos de los servicios funerarios en caso de fallecimiento, aliviando los gastos para la familia.', visible: false, type: "number" },
  { value: 'seguro_vivienda', label: 'Seguro Vivienda', Help: 'Es un seguro que cubre daños en tu hogar, tales como incendios, terremotos, robos y otros eventos que puedan afectar tu propiedad.', visible: false, type: "number" },
  { value: 'otros', label: 'Otros', Help: 'Cualquier otro tipo de seguro o aporte relacionado con protección que no se clasifique en las opciones anteriores.', visible: true, type: "number" },
];

export const descuentosnomina = [
  { value: 'salud', label: 'Salud', Help: 'Es el descuento obligatorio destinado al sistema de salud, garantizando el acceso a los servicios médicos públicos o privados según el sistema de afiliación.', visible: false, type: "number" },
  { value: 'pension', label: 'Pensión', Help: 'Es el aporte destinado al sistema de pensiones, el cual garantiza la acumulación de fondos para tu jubilación futura.', visible: false, type: "number" },
  { value: 'retencion_en_la_fuente', label: 'Retención en la Fuente', Help: 'Es un descuento que realiza el empleador sobre tu salario, destinado al pago anticipado del impuesto sobre la renta.', visible: false, type: "number" },
  { value: 'aporte_a_fondo_de_solidaridad', label: 'Aporte a Fondo de Solidaridad', Help: 'Es un descuento destinado a un fondo de solidaridad para la población más vulnerable o para situaciones de emergencia nacional.', visible: false, type: "number" },
  { value: 'aporte_a_fondo_de_subsistencia', label: 'Aporte a Fondo de Subsistencia', Help: 'Es un descuento destinado a un fondo de subsistencia para situaciones de pobreza extrema o emergencia social.', visible: false, type: "number" },
  { value: 'otros_descuentos', label: 'Otros Descuentos', Help: 'Cualquier otro tipo de descuento relacionado con situaciones laborales, legales o acordadas que no encajen en las categorías anteriores.', visible: false, type: "number" },
  { value: 'otros', label: 'Otros', Help: 'Otros descuentos adicionales que no se clasifican en las opciones previas, como acuerdos específicos entre el empleador y el empleado.', visible: true, type: "number" },
];


export const educacion = [
  { value: 'Bono_Estudiantil', label: 'Bono Estudiantil', Help: 'Es una ayuda económica otorgada para cubrir los costos de la educación, ya sea en nivel universitario, técnico o profesional.', visible: false, type: "number" },
  { value: 'Capacitaciones', label: 'Capacitaciones', Help: 'Hace referencia a los cursos o entrenamientos ofrecidos para mejorar habilidades y conocimientos en áreas específicas.', visible: false, type: "number" },
  { value: 'Cursos', label: 'Cursos', Help: 'Se refiere a la inscripción y pago por cursos académicos o profesionales, ya sean presenciales o en línea.', visible: false, type: "number" },
  { value: 'Idiomas', label: 'Idiomas', Help: 'Este descuento está relacionado con el pago de clases o cursos para aprender un nuevo idioma o mejorar el nivel de uno ya conocido.', visible: false, type: "number" },
  { value: 'Libros_Y_Utiles', label: 'Libros y útiles', Help: 'Este rubro cubre la compra de libros, material escolar y otros útiles necesarios para los estudios.', visible: false, type: "number" },
  { value: 'Matricula_Colegio', label: 'Matrícula Colegio', Help: 'Corresponde al costo de la matrícula anual o semestral en una institución educativa de nivel escolar o preescolar.', visible: false, type: "number" },
  { value: 'Matricula_Universidad', label: 'Matrícula Universidad', Help: 'Es el pago realizado para la inscripción y matrícula en una universidad, institución técnica o tecnológica.', visible: false, type: "number" },
  { value: 'Pension_Colegio', label: 'Pensión Colegio', Help: 'Este valor hace referencia a la pensión mensual que se paga por la educación escolar de un hijo o familiar.', visible: false, type: "number" },
  { value: 'Uniformes', label: 'Uniformes', Help: 'Cubre el costo de la compra de uniformes escolares o universitarios, necesarios para la educación.', visible: false, type: "number" },
  { value: 'Otros', label: 'Otros', Help: 'Otros gastos relacionados con la educación que no se incluyen en las categorías anteriores.', visible: true, type: "number" },
];

export const financieros = [
  { value: 'Cuatro_X_Mil', label: '4 x Mil', Help: 'Es un impuesto que se aplica a las transacciones financieras realizadas en Colombia, conocido como el "gravamen a los movimientos financieros".', visible: false, type: "number" },
  { value: 'Comisiones_Por_Administracion', label: 'Comisiones por Administración', Help: 'Son las tarifas que cobran las entidades financieras por la gestión y administración de productos como cuentas, fondos de inversión o tarjetas.', visible: false, type: "number" },
  { value: 'Cuota_De_Manejo_Tarjeta_Debito', label: 'Cuota de Manejo Tarjeta Débito', Help: 'Es un costo asociado con el uso y mantenimiento de una tarjeta débito, que algunas entidades financieras aplican mensualmente.', visible: false, type: "number" },
  { value: 'Cuota_Manejo_Tarjeta_Credito', label: 'Cuota Manejo Tarjeta de Crédito', Help: 'Es un cargo mensual que las entidades bancarias aplican por el uso de tarjetas de crédito, que cubre la administración de la cuenta.', visible: false, type: "number" },
  { value: 'Otros', label: 'Otros', Help: 'Otros gastos financieros que no encajan en las categorías anteriores.', visible: true, type: "number" },
];

export const otros = [
  { value: 'Ayuda_A_Familiar', label: 'Ayuda a un Familiar', Help: 'Es el dinero o recursos que se destinan a apoyar económicamente a un miembro de la familia en necesidades específicas.', visible: true, type: "number" },
  { value: 'Diezmo', label: 'Diezmo', Help: 'Es un porcentaje de los ingresos, generalmente el 10%, destinado a fines religiosos o caritativos.', visible: true, type: "number" },
  { value: 'Donaciones', label: 'Donaciones', Help: 'Contribuciones voluntarias de dinero o bienes a organizaciones benéficas o a personas en necesidad.', visible: true, type: "number" },
  { value: 'Finca', label: 'Finca', Help: 'Es una propiedad rural que puede ser utilizada para actividades agrícolas, ganaderas o de recreación.', visible: true, type: "number" },
  { value: 'Regalos', label: 'Regalos', Help: 'Dinero o bienes entregados como obsequio, generalmente en ocasiones especiales o celebraciones.', visible: true, type: "number" },
  { value: 'Responsabilidad_Social', label: 'Responsabilidad Social', Help: 'Aportaciones o actividades realizadas con el fin de contribuir al bienestar social y el desarrollo comunitario.', visible: true, type: "number" },
  { value: 'Soporte_Padres', label: 'Soporte Padres', Help: 'Es el apoyo financiero que se brinda a los padres para su sustento y bienestar.', visible: true, type: "number" },
  { value: 'Otros', label: 'Otros', Help: 'Gastos que no encajan en las categorías anteriores, pero que aún son relevantes en la gestión financiera personal o familiar.', visible: true, type: "number" },
];

       
      

export const activoLiquidos = [
  { value: 'Cuenta_Ahorros', label: 'Cuenta Ahorros', Help: 'Es una cuenta bancaria destinada a ahorrar dinero, con o sin intereses. Ideal para guardar fondos de forma segura.', visible: true, type: "number" },
  { value: 'Cuenta_Corriente', label: 'Cuenta Corriente', Help: 'Cuenta bancaria que permite realizar depósitos, retiros y pagos frecuentes, y generalmente no genera intereses.', visible: true, type: "number" },
  { value: 'Cuenta_En_Otra_Moneda', label: 'Cuenta en Otra Moneda', Help: 'Cuenta bancaria que maneja divisas distintas a la moneda local, útil para personas que realizan transacciones internacionales.', visible: true, type: "number" },
  { value: 'Efectivo', label: 'Efectivo', Help: 'Dinero en forma de billetes y monedas, disponible para ser gastado de inmediato.', visible: true, type: "number" },
  { value: 'Otros', label: 'Otros', Help: 'Cualquier otro tipo de activo líquido que no encaje en las categorías anteriores.', visible: true, type: "number" },
];

export const activosProductivos = [
  { value: 'Acciones', label: 'Acciones', Help: 'Títulos valores que representan una parte del capital social de una empresa, que otorgan derechos sobre los dividendos y sobre la propiedad de la empresa.', visible: true, type: "number" },
  { value: 'Apartamento', label: 'Apartamento', Help: 'Bien inmueble, generalmente residencial, que puede generar ingresos a través de su alquiler o apreciación del valor.', visible: true, type: "number" },
  { value: 'Bienes_Raices_Para_Inversion', label: 'Bienes Raíces para Inversión', Help: 'Propiedades adquiridas con el objetivo de generar ingresos pasivos mediante alquileres o para obtener plusvalía con la revalorización.', visible: true, type: "number" },
  { value: 'Bodega', label: 'Bodega', Help: 'Espacio inmobiliario destinado al almacenamiento de productos o mercancías, ideal para generar ingresos pasivos a través de su alquiler.', visible: false, type: "number" },
  { value: 'Bonos', label: 'Bonos', Help: 'Instrumentos de deuda emitidos por entidades públicas o privadas que otorgan al titular un pago periódico de intereses y la devolución del principal al vencimiento.', visible: true, type: "number" },
  { value: 'Cartera_Colectiva', label: 'Cartera Colectiva', Help: 'Instrumento de inversión colectiva en el cual los fondos de varios inversores se combinan para invertir en una variedad de activos.', visible: true, type: "number" },
  { value: 'Casa', label: 'Casa', Help: 'Bien inmueble que se utiliza principalmente para vivienda, pero también puede generar ingresos por su alquiler o valorización.', visible: true, type: "number" },
  { value: 'CDT', label: 'CDT', Help: 'Certificado de Depósito a Término, una inversión de renta fija en la que se compromete una suma de dinero por un plazo determinado, generando un interés.', visible: true, type: "number" },
  { value: 'Cuenta_Inversion_USD', label: 'Cuenta Inversión USD', Help: 'Cuenta bancaria dedicada a la inversión en dólares, destinada a generar rendimientos a través de productos financieros en moneda extranjera.', visible: true, type: "number" },
  { value: 'Cuenta_Por_Cobrar_A_Terceros', label: 'Cuenta por Cobrar a Terceros', Help: 'Derechos que tiene una empresa o individuo para cobrar dinero a otra parte, generalmente por la venta de productos o servicios.', visible: true, type: "number" },
  { value: 'Empresa', label: 'Empresa', Help: 'Entidad dedicada a actividades económicas para generar ingresos. Puede incluir diversos activos productivos como bienes, propiedades y capital humano.', visible: true, type: "number" },
  { value: 'Fiducia', label: 'Fiducia', Help: 'Instrumento legal mediante el cual una persona (fiduciante) transfiere bienes a un fiduciario para que este los administre en beneficio de un tercero.', visible: true, type: "number" },
  { value: 'Fondo_De_Cesantias', label: 'Fondo de Cesantías', Help: 'Cuenta de ahorro de los empleados destinada a financiar los períodos de desempleo, en la cual el empleador debe realizar aportes periódicos.', visible: true, type: "number" },
  { value: 'Fondo_Obligatorio_De_Pensiones', label: 'Fondo Obligatorio de Pensiones', Help: 'Fondos destinados a financiar las pensiones de jubilación de los trabajadores, gestionados por administradoras de fondos de pensiones (AFP).', visible: true, type: "number" },
  { value: 'Fondo_Voluntario_De_Pensiones', label: 'Fondo Voluntario de Pensiones', Help: 'Ahorro adicional que realiza un trabajador para incrementar el monto de su pensión en el futuro, por encima del aporte obligatorio.', visible: true, type: "number" },
  { value: 'Fondos_Mutuos', label: 'Fondos Mutuos', Help: 'Instrumentos financieros donde varios inversores agrupan su dinero para invertir en acciones, bonos y otros activos, bajo la gestión de un administrador profesional.', visible: true, type: "number" },
  { value: 'Local', label: 'Local', Help: 'Espacio inmobiliario comercial destinado a actividades de venta o prestación de servicios, ideal para generar ingresos a través del alquiler o de su propio negocio.', visible: true, type: "number" },
  { value: 'Negocio', label: 'Negocio', Help: 'Actividad económica que busca generar ganancias, ya sea a través de la venta de productos, servicios o cualquier otra forma de operación comercial.', visible: true, type: "number" },
  { value: 'Participaciones_En_Sociedades', label: 'Participaciones en Sociedades', Help: 'Acciones o participaciones en empresas o sociedades, que confieren derechos sobre los beneficios generados por la sociedad.', visible: true, type: "number" },
  { value: 'Semovientes', label: 'Semovientes', Help: 'Animales destinados a la producción o comercialización, tales como ganado vacuno, caballos o aves.', visible: true, type: "number" },
  { value: 'Titulo_De_Capitalizacion', label: 'Título de Capitalización', Help: 'Instrumento financiero que permite acumular un ahorro con un premio adicional al final del período de suscripción, normalmente utilizado para incentivar el ahorro.', visible: false, type: "number" },
  { value: 'Otros', label: 'Otros', Help: 'Cualquier otro activo productivo que no esté incluido en las categorías anteriores.', visible: true, type: "number" },
];

export const activosImproductivos = [
  { value: 'Apartamento', label: 'Apartamento', Help: 'Propiedad inmobiliaria que no genera ingresos, generalmente se usa para vivienda o descanso.', type: "number", visible: true },
  { value: 'Bodega', label: 'Bodega', Help: 'Espacio de almacenamiento que no genera ingresos, a menudo se utiliza para guardar bienes de valor o productos.', type: "number" },
  { value: 'Caballos', label: 'Caballos', Help: 'Animales utilizados principalmente para recreación, deportes o como mascota, sin generar ingresos directos.', type: "number" },
  { value: 'Casa', label: 'Casa', Help: 'Propiedad inmobiliaria que se utiliza principalmente para vivienda, pero no genera ingresos directos.', type: "number", visible: true },
  { value: 'Finca', label: 'Finca', Help: 'Terreno rural que se utiliza para actividades recreativas o de descanso, sin generar ingresos pasivos.', type: "number" },
  { value: 'Joyas', label: 'Joyas', Help: 'Bienes de lujo, generalmente utilizados para fines personales o decorativos, sin generar ingresos directos.', type: "number" },
  { value: 'Lancha', label: 'Lancha', Help: 'Embarcación utilizada para ocio o deportes acuáticos, que no genera ingresos por sí sola.', type: "number" },
  { value: 'Local', label: 'Local', Help: 'Inmueble comercial que no está en uso o alquiler, no genera ingresos por sí mismo.', type: "number", visible: true },
  { value: 'Maquinas', label: 'Máquinas', Help: 'Equipos de trabajo o maquinaria que no están siendo utilizados activamente para generar ingresos.', type: "number" },
  { value: 'Moto', label: 'Moto', Help: 'Vehículo de dos ruedas, generalmente utilizado para transporte personal, sin generar ingresos directos.', type: "number", visible: true },
  { value: 'Muebles_Y_Accesorios', label: 'Muebles y Accesorios', Help: 'Artículos de decoración y mobiliario, sin generar ingresos por su posesión.', type: "number" },
  { value: 'Terreno', label: 'Terreno', Help: 'Propiedad de tierra sin desarrollar que no genera ingresos, aunque puede apreciarse con el tiempo.', type: "number" },
  { value: 'Vehiculo', label: 'Vehículo', Help: 'Automóvil o transporte personal que no se utiliza para generar ingresos, sino para uso personal o familiar.', type: "number", visible: true },
  { value: 'Otros', label: 'Otros', Help: 'Cualquier activo que no se ajusta a las categorías anteriores pero que se considera improductivo.', type: "number", visible: true }
];



export const seguros = [
  { value: 'SeguroContenidos', label: 'Seguro de Contenidos', Help: 'Cobertura para proteger los bienes dentro de una propiedad, como muebles, electrodomésticos, y objetos personales contra daños o robos.', type: "number" },
  { value: 'SeguroInvalidez', label: 'Seguro de Invalidez', Help: 'Seguro que proporciona una compensación económica en caso de que el asegurado sufra una invalidez que le impida trabajar.', type: "number" },
  { value:'soat', label:'Soat',Help:"Seguro contra accidentes transito obligatorio",visible: true},
  { value: 'SeguroResponsabilidadCivil', label: 'Seguro de Responsabilidad Civil', Help: 'Cobertura que protege al asegurado frente a los daños que pueda causar a terceros, ya sea en su propiedad o en su persona.', type: "number" },
  { value: 'SeguroSalud', label: 'Seguro de Salud', Help: 'Cobertura médica que cubre los gastos derivados de enfermedades, accidentes, y tratamientos médicos del asegurado.', type: "number" },
  { value: 'SeguroVehiculo', label: 'Seguro de Vehículo', Help: 'Cobertura que protege al vehículo y su propietario ante accidentes, daños a terceros, y otros riesgos relacionados con la conducción del vehículo.', type: "number" },
  { value: 'SeguroVida', label: 'Seguro de Vida', Help: 'Seguro que garantiza el pago de una suma asegurada a los beneficiarios en caso de fallecimiento del asegurado.', type: "number",visible: true },
  { value: 'SeguroExequial', label: 'Seguro Exequial', Help: 'Cobertura destinada a cubrir los gastos funerarios y otros servicios relacionados con el fallecimiento del asegurado.', type: "number" },
  { value: 'SeguroVivienda', label: 'Seguro Vivienda', Help: 'Cobertura que protege el hogar y sus contenidos contra daños o pérdidas debido a incendios, robos, desastres naturales, entre otros.', type: "number" }
];


export const anualidadesPresupuestadas = [
  { value: 'compras_diciembre', label: 'Compras Diciembre', help: 'Gastos asociados a compras realizadas durante el mes de diciembre, como artículos de consumo o necesidades personales.', type: "number" },
  { value: 'mantenimiento_apto', label: 'Mantenimiento Apto', help: 'Gastos relacionados con el mantenimiento de un apartamento, como reparaciones, limpieza o mejoras necesarias.', type: "number" },
  { value: 'mantenimiento_vehiculo', label: 'Mantenimiento Vehículo', help: 'Gastos destinados a la reparación, revisión y mantenimiento general de un vehículo.', type: "number" },
  { value: 'regalos', label: 'Regalos', help: 'Gastos relacionados con la compra de regalos para ocasiones especiales o eventos.', type: "number" },
  { value: 'regalos_diciembre', label: 'Regalos Diciembre', help: 'Gastos asociados a la compra de regalos específicamente para las festividades de diciembre, como Navidad.', type: "number" },
  { value: 'remodelaciones', label: 'Remodelaciones', help: 'Gastos destinados a realizar cambios o mejoras en una propiedad, como remodelaciones de cocina, baño, o espacios generales.', type: "number" },
  { value: 'ropa', label: 'Ropa', help: 'Gastos relacionados con la compra de prendas de vestir y accesorios personales.', type: "number" },
  { value: 'vacaciones_diciembre', label: 'Vacaciones Diciembre', help: 'Gastos relacionados con las vacaciones de diciembre, incluyendo transporte, alojamiento y actividades recreativas.', type: "number" },
  { value: 'viajes', label: 'Viajes', help: 'Gastos relacionados con viajes, ya sean por vacaciones, negocios u otros motivos, fuera de la temporada de diciembre.', type: "number" },
  { value: 'Otros', label: 'Otros', help: 'Cualquier otro gasto que no encaje en las categorías anteriores.', type: "number", visible: true }
];


export const impuestos = [
  { value: 'impuesto_patrimonio', label: 'Impuesto al Patrimonio', help: 'Impuesto sobre el valor del patrimonio neto de una persona o entidad, generalmente aplicable a grandes patrimonios.', type: "number" },
  { value: 'impuesto_renta', label: 'Impuesto de Renta', help: 'Impuesto sobre los ingresos generados por una persona o entidad, calculado según las ganancias obtenidas en un periodo fiscal.', visible: true, type: "number" },
  { value: 'impuesto_vehiculo', label: 'Impuesto Vehículo', help: 'Impuesto anual sobre la propiedad de un vehículo, generalmente basado en el valor del vehículo o su cilindrada.', type: "number" },
  { value: 'predial_apto', label: 'Predial Apto', help: 'Impuesto anual sobre la propiedad de un apartamento, calculado en función del valor catastral del inmueble.', type: "number", visible: true },
  { value: 'predial_otro_inmueble', label: 'Predial Otro Inmueble', help: 'Impuesto anual sobre la propiedad de otro tipo de inmuebles distintos a apartamentos, como casas, terrenos o propiedades comerciales.', type: "number", visible: true },
  { value: 'predial_parqueadero', label: 'Predial Parqueadero', help: 'Impuesto anual sobre la propiedad de un parqueadero, que se cobra como parte de la propiedad de bienes inmuebles.', type: "number" },
  { value: 'Otros', label: 'Otros', help: 'Cualquier otro impuesto o gasto relacionado que no se ajusta a las categorías anteriores.', type: "number", visible: true }
];

export const anualidadesFijas = [
  { value: 'curso', label: 'Curso', help: 'Gastos relacionados con la inscripción y matrícula en cursos, ya sean presenciales o en línea, para educación personal o profesional.', type: "number" },
  { value: 'donaciones', label: 'Donaciones', help: 'Aportes económicos a organizaciones benéficas, fundaciones o causas sociales, realizados de manera voluntaria.', type: "number" },
  { value: 'pagos_anuales', label: 'Pagos Anuales', help: 'Gastos de pagos anuales relacionados con servicios, membresías o suscripciones que se pagan una vez al año.', type: "number" },
  { value: 'pena_infante', label: 'Peña Infante', help: 'Gastos relacionados con actividades, eventos o suscripciones vinculadas a un club o agrupación infantil, como la Peña Infante.', type: "number" },
  { value: 'suscripciones', label: 'Suscripciones', help: 'Gastos recurrentes por servicios de suscripción, como revistas, plataformas de streaming, software, entre otros.', type: "number" },
  { value: 'universidad', label: 'Universidad', help: 'Gastos asociados a la educación universitaria, como matrícula, pensiones, materiales o servicios relacionados con la universidad.', type: "number" },
  { value: 'matriculas_colegio', label: 'Matrículas Colegio', help: 'Gastos relacionados con la matrícula y otros pagos escolares para la educación de los hijos en instituciones de nivel primario o secundario.', type: "number" },
  { value: 'Otros', label: 'Otro', help: 'Cualquier otro gasto relacionado con educación, donaciones u otros pagos que no se ajusten a las categorías anteriores.', type: "number", visible: true }
];

