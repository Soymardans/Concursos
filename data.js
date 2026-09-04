/* ═══════════════════════════════════════════════════════════════════
   CONVOCATORIA No. 28 — Banco de preguntas de preparación
   ═══════════════════════════════════════════════════════════════════
   15 temas · 515 preguntas
   Formulario de preparación para la Convocatoria 28 de la Rama Judicial
   (cargo Juez Civil Municipal, Grupo 3). Práctica por tema y por nivel
   de dificultad (Fácil / Medio / Difícil / Mixto), con diagnóstico por
   área y por dificultad. Formato a: 0=A, 1=B, 2=C, 3=D.
   Tipo I: {t:1,d,c,q,o:[4],a,e,b} · Tipo II: {t:2,d,c,q,s:[4],a,e,b}
   Tipo III: {t:3,d,c,af,rz,a,e,b}
   ═══════════════════════════════════════════════════════════════════ */

const DIPLOMADO = {
 "titulo": "Exámenes de preparación para Concursos",
 "subtitulo": "Práctica por temas para concursos de méritos, con preguntas Fáciles, Medias y Difíciles.",
 "dias": [
  {
   "id": "dian",
   "numero": "T12",
   "fecha": "Tema",
   "titulo": "DIAN — Régimen Sancionatorio Tributario",
   "docente": "Material propio",
   "resumen": "Determinación y control tributario: reserva de ley, cuantificación, reducción y agravación de sanciones tributarias.",
   "preguntas": [
    {
     "t": 1,
     "c": "Reserva de ley sancionatoria",
     "d": 3,
     "q": "La DIAN pretende sancionar por no declarar (art. 643 del ET) a un contribuyente del impuesto unificado bajo el régimen simple de tributación (SIMPLE) que omitió presentar su declaración. El funcionario sustenta la sanción en que el artículo 916 del ET remite el régimen sancionatorio del SIMPLE al previsto en el Estatuto Tributario. ¿Es procedente la sanción?",
     "o": [
      "No es procedente, porque el artículo 643 no incluye expresamente al SIMPLE entre sus numerales y la remisión en blanco del artículo 916 no satisface la reserva de ley al no tipificar con precisión la conducta para ese tributo",
      "Sí es procedente, porque el artículo 916 remite de forma general al régimen sancionatorio del Estatuto Tributario, lo que habilita aplicar por extensión cualquier sanción allí prevista, incluida la del artículo 643",
      "Sí es procedente, pero solo si el Consejo de Estado autoriza previamente la aplicación analógica de la sanción, dado que se trata de un tributo de creación reciente",
      "No es procedente, porque las sanciones del régimen simple solo pueden imponerse mediante resolución de la Junta Central de Contadores, al ser esta la autoridad competente para tributos unificados"
     ],
     "a": 0,
     "e": "El principio de reserva de ley exige que la ley tipifique con precisión el sujeto, la conducta y la sanción. El artículo 643 enumera taxativamente los tributos a los que aplica y el SIMPLE no aparece en esos numerales; una remisión en blanco como la del artículo 916 no es suficientemente específica para suplir esa tipificación, por lo que no puede aplicarse por analogía.",
     "b": "Art. 643 y 916 del ET; principio de legalidad (art. 29 C.P., Sentencia C-412/15)."
    },
    {
     "t": 1,
     "c": "Sanción mínima",
     "d": 2,
     "q": "Un contribuyente debe liquidar intereses de mora por $180.000 sobre un saldo pagado tardíamente. Al calcular el monto, advierte que es inferior a 10 UVT. ¿Debe ajustar el valor a la sanción mínima de 10 UVT prevista en el artículo 639 del ET?",
     "o": [
      "No, porque los intereses de mora están expresamente excluidos de la aplicación de la sanción mínima del artículo 639",
      "Sí, porque el artículo 639 establece que ninguna suma a cargo del contribuyente por concepto sancionatorio o moratorio puede ser inferior a 10 UVT",
      "No, porque la sanción mínima solo aplica a sanciones determinadas por la DIAN, nunca a las autoliquidadas por el propio contribuyente",
      "Sí, pero únicamente si el contribuyente pertenece al régimen de entidades autorizadas para recaudar, caso en el cual rige un umbral distinto"
     ],
     "a": 0,
     "e": "El artículo 639 del ET fija la sanción mínima en 10 UVT para la generalidad de las sanciones tributarias, pero establece expresamente como excepción a los intereses de mora (y a las sanciones de los numerales 1 y 3 del artículo 658-3). Por tanto, los intereses de mora se liquidan por su valor real, sin ajustarse al mínimo.",
     "b": "Art. 639 del ET."
    },
    {
     "t": 1,
     "c": "Reincidencia",
     "d": 3,
     "q": "Una sociedad fue sancionada mediante resolución que quedó en firme el 10 de marzo de 2022 por expedir facturas sin los requisitos legales (art. 652 del ET). El 5 de enero de 2024 vuelve a incurrir en la misma conducta. La DIAN pretende aumentar la nueva sanción en un 100% por reincidencia, invocando el parágrafo 2 del artículo 640. ¿Es correcta esa actuación?",
     "o": [
      "No, porque el propio parágrafo 2 del artículo 640 excluye expresamente de la reincidencia a la sanción del artículo 652, además de que la segunda conducta ocurrió cuando ya habían transcurrido los dos años que exige la norma",
      "Sí, porque toda repetición de una conducta sancionable dentro de los cuatro años siguientes a la firmeza del primer acto constituye reincidencia, sin excepciones por tipo de sanción",
      "No, porque la reincidencia tributaria solo opera para sanciones impuestas mediante liquidación oficial de revisión, no mediante resolución independiente",
      "Sí, porque aunque la sanción del artículo 652 esté excluida en general, la exclusión no aplica cuando el sujeto es una persona jurídica"
     ],
     "a": 0,
     "e": "El parágrafo 2 del artículo 640 exige que la nueva infracción del mismo tipo se cometa dentro de los dos años siguientes a la firmeza del acto que impuso la primera sanción, y excluye expresamente la sanción del artículo 652 (facturación sin requisitos) del régimen de reincidencia. En este caso concurren dos razones para descartar el aumento: la exclusión normativa expresa y que, de todas formas, ya pasaron casi dos años.",
     "b": "Art. 640, parágrafo 2, del ET."
    },
    {
     "t": 1,
     "c": "Reducción por gradualidad",
     "d": 3,
     "q": "Un agente retenedor autoliquida una sanción por corrección de su declaración. Al revisar su historial, comprueba que dentro del año anterior a la conducta no ha incurrido en la misma falta, y que la DIAN aún no ha proferido pliego de cargos, requerimiento especial ni emplazamiento por no declarar. ¿A qué porcentaje del monto legal tiene derecho a reducir la sanción?",
     "o": [
      "Al setenta y cinco por ciento (75%), por tratarse de una sanción autoliquidada sin incurrir en la misma conducta durante el año anterior y sin actuación previa de la DIAN",
      "Al cincuenta por ciento (50%), por tratarse de una sanción autoliquidada sin incurrir en la misma conducta durante los dos años anteriores",
      "Al setenta y cinco por ciento (75%), reducción que solo aplica cuando la sanción es propuesta o determinada por la DIAN, no cuando es autoliquidada por el contribuyente",
      "Al cien por ciento (100%), dado que el cumplimiento del requisito temporal exime totalmente de la sanción si no ha habido actuación previa de la Administración"
     ],
     "a": 0,
     "e": "El artículo 640 distingue dos escalas de reducción por gradualidad. Para sanciones que debe autoliquidar el propio contribuyente: 50% si no cometió la misma conducta en los 2 años anteriores, o 75% si el periodo sin incurrir en ella es de solo 1 año (siempre que la DIAN no haya proferido pliego de cargos, requerimiento especial o emplazamiento). Como en el caso el periodo limpio es de un año, la reducción aplicable es del 75%, no del 50%.",
     "b": "Art. 640, numerales 1 y 2, del ET."
    },
    {
     "t": 1,
     "c": "Reducción por procedimiento",
     "d": 3,
     "q": "La DIAN notifica a un contribuyente una liquidación provisional que incluye una sanción por inexactitud no autodeterminable. El contribuyente la acepta y paga dos meses después de notificada. ¿Tiene derecho a la reducción del 40% prevista en el artículo 764-3 del ET?",
     "o": [
      "No, porque el beneficio del 40% exige aceptar y pagar dentro del mes siguiente a la notificación de la liquidación provisional, plazo que ya venció",
      "Sí, porque el artículo 764-3 no establece un plazo específico para el pago, siempre que la aceptación se produzca antes de la firmeza del acto",
      "No, porque las sanciones derivadas de liquidación provisional nunca son objeto de reducción, solo las determinadas por procedimiento ordinario lo son",
      "Sí, porque al tratarse de una sanción no autodeterminable, el plazo de un mes previsto en la norma no resulta aplicable a este tipo de conductas"
     ],
     "a": 0,
     "e": "El artículo 764-3 condiciona la reducción del 40% a que el contribuyente acepte y pague la liquidación provisional dentro del mes siguiente a su notificación. Al haber transcurrido dos meses, el contribuyente perdió la oportunidad de acceder a ese beneficio específico.",
     "b": "Art. 764-3 del ET."
    },
    {
     "t": 1,
     "c": "Sanción por no informar",
     "d": 2,
     "q": "Un obligado a reportar información exógena no la presentó dentro del plazo. Antes de que la DIAN profiera pliego de cargos, decide subsanar voluntariamente presentando la información completa. ¿A qué porcentaje de la sanción plena del numeral 1 del artículo 651 tiene derecho?",
     "o": [
      "Al veinte por ciento (20%) de la sanción, por subsanar la omisión antes de que se profiera el pliego de cargos",
      "Al cincuenta por ciento (50%), reducción prevista para quien subsana antes de la notificación de la sanción",
      "Al setenta por ciento (70%), reducción reservada a quien subsana dentro de los dos meses siguientes a la notificación de la sanción",
      "No tiene derecho a reducción alguna, porque el beneficio solo opera para errores en la información, no para la omisión total de esta"
     ],
     "a": 0,
     "e": "El parágrafo del artículo 651 permite al obligado subsanar voluntariamente antes de que la Administración profiera pliego de cargos, caso en el cual la sanción se reduce al 20%. Las reducciones al 50% y al 70% corresponden a etapas posteriores (después de notificado el pliego, o después de notificada la sanción, respectivamente), que no aplican a este supuesto.",
     "b": "Art. 651, parágrafo e inciso 3, del ET."
    },
    {
     "t": 1,
     "c": "Favorabilidad tributaria",
     "d": 2,
     "q": "Un proceso por sanción de inexactitud del año gravable 2015, tasada inicialmente al 160% conforme a la norma vigente en ese momento, se encuentra aún en discusión ante el Consejo de Estado después de la entrada en vigencia de la Ley 1819 de 2016, que redujo esa sanción al 100%. ¿Qué porcentaje debe aplicar la autoridad judicial?",
     "o": [
      "El cien por ciento (100%), en aplicación del principio de favorabilidad, que rige en materia sancionatoria tributaria aun cuando la ley favorable sea posterior a los hechos",
      "El ciento sesenta por ciento (160%), porque la sanción se rige por la ley vigente al momento de la comisión de la conducta y no admite modificaciones posteriores",
      "El cien por ciento (100%), pero solo si el contribuyente lo solicita expresamente, ya que el principio de favorabilidad no puede aplicarse de oficio",
      "Ninguno de los dos, porque al haber cambiado la norma sancionatoria durante el proceso, la sanción de inexactitud queda sin efecto por falta de tipificación vigente"
     ],
     "a": 0,
     "e": "El artículo 640, parágrafo 5, del ET consagra el principio de favorabilidad en materia sancionatoria tributaria, aplicable aun cuando la ley permisiva o favorable sea posterior a los hechos. La jurisprudencia del Consejo de Estado (entre otras, la Sentencia 23403 de 2018) confirma que este principio se aplica de oficio, no solo a solicitud de parte, razón por la cual corresponde reliquidar la sanción al 100%.",
     "b": "Art. 640, parágrafo 5, del ET; Consejo de Estado, Sentencia 23403 del 12 de diciembre de 2018."
    },
    {
     "t": 1,
     "c": "Extemporaneidad e inexactitud",
     "d": 3,
     "q": "Dos contribuyentes del impuesto sobre la renta incumplen sus obligaciones formales: el primero presenta su declaración de forma extemporánea por su propia voluntad, sin que la DIAN haya actuado; el segundo solo presenta la declaración después de haber sido emplazado para declarar. ¿Cuál es la diferencia central en el régimen sancionatorio aplicable a cada caso?",
     "o": [
      "Al primero le aplica el artículo 641, con un límite superior del 100% del impuesto o retención; al segundo le aplica el artículo 642, con un límite superior del 200%, al haber mediado un emplazamiento previo",
      "A ambos les aplica el artículo 641, ya que el emplazamiento para declarar no tiene incidencia en el límite superior de la sanción por extemporaneidad",
      "Al primero le aplica el artículo 642 por ser más favorable al declarante voluntario; al segundo el artículo 641, al haber sido requerido formalmente por la Administración",
      "La diferencia no es normativa sino de competencia: el primer caso lo resuelve la División de Gestión de Fiscalización y el segundo, la División Jurídica"
     ],
     "a": 0,
     "e": "El artículo 641 regula la extemporaneidad presentada por voluntad propia del contribuyente, con un tope del 100% del impuesto o retención (u otros límites alternativos sobre ingresos o patrimonio). El artículo 642 regula la extemporaneidad posterior a un emplazamiento para declarar, con sanciones más gravosas y un tope del 200%. La distinción depende de si medió o no una actuación previa de la DIAN, no de la voluntad del contribuyente considerada aisladamente ni de la dependencia que tramite el caso.",
     "b": "Art. 641 y 642 del ET."
    },
    {
     "t": 1,
     "c": "Clausura del establecimiento",
     "d": 3,
     "q": "Un comerciante, que ya había incurrido antes en no expedir factura, vuelve a omitir su expedición estando obligado a hacerlo. Por otra parte, en la misma visita la DIAN constata que sus facturas actuales solo presentan una falla en el literal f) del artículo 617 del ET (falta la firma o sistema de generación mecánica del documento). ¿En cuál de las dos situaciones procede la sanción de clausura del establecimiento del artículo 657?",
     "o": [
      "En ambas: la reincidencia en no expedir factura y la falla del literal f) están comprendidas dentro de los supuestos del artículo 657 que dan lugar a la clausura",
      "Solo en la reincidencia por no expedir factura; la falla del literal f) del artículo 617 no está comprendida entre los literales cuya sola presencia (sin reincidencia) genera clausura",
      "Solo en la falla del literal f), porque no expedir factura por primera vez ya constituye, por sí sola, una causal autónoma de clausura sin necesidad de reincidencia",
      "En ninguna de las dos, porque la clausura del establecimiento solo procede por violación del régimen aduanero en mercancías en consignación o depósito"
     ],
     "a": 0,
     "e": "El artículo 657 sanciona con clausura tanto no expedir factura estando obligado (sin exigir reincidencia para ese supuesto específico) como expedirla sin los requisitos de los literales b), c), d), e), f) o g) del artículo 617 — el literal f) está expresamente incluido en ese listado —, además de la reincidencia en los literales a), h) o i) del mismo artículo. Ambos hechos descritos en el caso encajan, por tanto, en supuestos autónomos del artículo 657.",
     "b": "Art. 657 y 617 del ET."
    },
    {
     "t": 1,
     "c": "Improcedencia de devoluciones",
     "d": 3,
     "q": "Un contribuyente obtuvo la devolución de un saldo a favor de $50.000.000. Posteriormente, la DIAN, dentro de un proceso de determinación, rechaza mediante liquidación oficial la totalidad del saldo devuelto. El contribuyente no había corregido voluntariamente su declaración. ¿Qué porcentaje de sanción corresponde, conforme al artículo 670 del ET, sin que se acredite fraude?",
     "o": [
      "El veinte por ciento (20%) del valor devuelto en exceso, por tratarse de un rechazo determinado por la Administración Tributaria mediante liquidación oficial",
      "El diez por ciento (10%) del valor devuelto en exceso, porcentaje aplicable siempre que exista un proceso de determinación tributaria, sin importar quién corrija el saldo",
      "El cien por ciento (100%) del valor devuelto, porque toda devolución posteriormente rechazada se presume obtenida de forma irregular salvo prueba en contrario",
      "El diez por ciento (10%), porque ese es el único porcentaje que contempla el artículo 670 para la improcedencia de devoluciones y compensaciones"
     ],
     "a": 0,
     "e": "El artículo 670 distingue dos porcentajes según quién origine la disminución del saldo a favor: 10% cuando es el propio contribuyente quien corrige voluntariamente la declaración, y 20% cuando es la Administración Tributaria la que rechaza o modifica el saldo mediante liquidación oficial. El 100% solo aplica cuando se acredita que la devolución se obtuvo mediante documentos falsos o fraude, supuesto que el enunciado descarta expresamente.",
     "b": "Art. 670 del ET."
    }
   ]
  },
  {
   "id": "procesal-civil",
   "numero": "T1",
   "fecha": "Tema",
   "titulo": "Derecho Procesal Civil (CGP)",
   "docente": "Banco consolidado · módulos EJRLB y metodología PGN",
   "resumen": "Competencia, procesos declarativos y ejecutivos, recursos, medidas cautelares, nulidades y régimen del Código General del Proceso. Incluye la sesión sobre la Ley 2213 de 2022 (justicia digital) del Dr. Nattan Nisimblat. Incluye Teoría General del Proceso y régimen de transición (Dra. Mónica León). Incluye el módulo de aprendizaje autodirigido de la Escuela Judicial Rodrigo Lara Bonilla «Audiencias y Providencias en el Código General del Proceso» (Yadira Elena Alarcón Palacio, 2019).",
   "preguntas": [
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Un proceso declarativo cuyas pretensiones ascienden a 120 SMLMV corresponde a:",
     "o": [
      "Mínima cuantía",
      "Menor cuantía",
      "Mayor cuantía",
      "Cuantía indeterminada"
     ],
     "a": 1,
     "e": "El art. 25 del CGP fija: mínima hasta 40 SMLMV, menor superior a 40 y hasta 150, y mayor superior a 150 SMLMV.",
     "b": "Art. 25 CGP · Módulo EJRLB Código General del Proceso",
     "d": 2
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Los procesos contenciosos de mínima cuantía los conoce el juez civil municipal:",
     "o": [
      "En primera instancia",
      "En única instancia",
      "En segunda instancia",
      "A prevención con el juez del circuito"
     ],
     "a": 1,
     "e": "El art. 17 del CGP asigna a los jueces civiles municipales, en única instancia, los procesos contenciosos de mínima cuantía; la menor cuantía la conocen en primera instancia (art. 18).",
     "b": "Arts. 17 y 18 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "La regla general de competencia territorial (fuero general) indica que es competente el juez:",
     "o": [
      "Del domicilio del demandante",
      "Del lugar de celebración del contrato",
      "Del domicilio del demandado",
      "Del lugar donde se encuentren los bienes"
     ],
     "a": 2,
     "e": "Conforme al art. 28 num. 1 del CGP, en los procesos contenciosos es competente el juez del domicilio del demandado; si tiene varios, el de cualquiera de ellos a elección del demandante.",
     "b": "Art. 28 num. 1 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Para determinar la cuantía del proceso se tiene en cuenta:",
     "o": [
      "Solo la pretensión principal",
      "El valor de todas las pretensiones al momento de presentar la demanda, sin frutos, intereses ni perjuicios accesorios posteriores",
      "El valor probado en la sentencia",
      "El avalúo catastral del bien en todos los casos"
     ],
     "a": 1,
     "e": "El art. 26 del CGP ordena atender el valor de todas las pretensiones al tiempo de la demanda, sin considerar frutos, intereses, multas o perjuicios reclamados como accesorios que se causen con posterioridad.",
     "b": "CGP (Ley 1564 de 2012) art. 26 · competencia por cuantía",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "El principio de la perpetuatio jurisdictionis significa que:",
     "o": [
      "La competencia puede modificarse en cualquier momento por el superior",
      "La situación de hecho existente al presentarse la demanda determina la competencia, que no varía por causas sobrevinientes, salvo excepciones legales",
      "El juez conserva competencia aun después de la ejecutoria de la sentencia para nuevos litigios entre las partes",
      "La jurisdicción civil es perpetua e improrrogable"
     ],
     "a": 1,
     "e": "La competencia se fija según los factores existentes al momento de la demanda y, por regla general, no se altera por circunstancias posteriores (art. 27 CGP).",
     "b": "CGP (Ley 1564 de 2012) art. 27 · competencia funcional",
     "d": 2
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "En el proceso verbal sumario, las excepciones previas:",
     "o": [
      "Se tramitan como incidente",
      "Se resuelven en audiencia especial",
      "Son improcedentes: los hechos que las configuran deben alegarse mediante recurso de reposición contra el auto admisorio",
      "Solo puede proponerlas el Ministerio Público"
     ],
     "a": 2,
     "e": "En el verbal sumario no proceden excepciones previas; sus hechos se alegan vía reposición contra el auto admisorio de la demanda (art. 391 CGP).",
     "b": "Art. 391 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "La inasistencia injustificada del demandado a la audiencia inicial del art. 372 del CGP genera:",
     "o": [
      "Nulidad de la audiencia",
      "Presunción de certeza de los hechos susceptibles de confesión en que se funde la demanda",
      "Terminación anticipada del proceso",
      "Multa, sin ningún otro efecto probatorio"
     ],
     "a": 1,
     "e": "La inasistencia de las partes hace presumir ciertos los hechos susceptibles de confesión de la demanda o de las excepciones, según el caso, además de consecuencias pecuniarias (art. 372 num. 4 CGP).",
     "b": "Art. 372 num. 4 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "NO es una hipótesis de sentencia anticipada según el art. 278 del CGP:",
     "o": [
      "Que las partes lo soliciten de común acuerdo",
      "Que no haya pruebas por practicar",
      "Que se encuentre probada la prescripción extintiva",
      "La inasistencia del demandante a la audiencia de instrucción"
     ],
     "a": 3,
     "e": "El art. 278 permite sentencia anticipada por acuerdo de las partes, ausencia de pruebas por practicar, o cuando esté probada la cosa juzgada, transacción, caducidad, prescripción extintiva o carencia de legitimación en la causa.",
     "b": "Art. 278 CGP · Módulo EJRLB Audiencias en el CGP",
     "d": 2
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "El proceso monitorio procede para reclamar:",
     "o": [
      "Cualquier obligación de dar, hacer o no hacer",
      "Obligaciones dinerarias de naturaleza contractual, determinadas y exigibles, de mínima cuantía",
      "Obligaciones dinerarias de cualquier cuantía con título ejecutivo",
      "Perjuicios extracontractuales líquidos"
     ],
     "a": 1,
     "e": "El monitorio está reservado al pago de obligaciones en dinero, de origen contractual, determinadas, exigibles y de mínima cuantía; exige notificación personal y no admite emplazamiento ni curador ad litem.",
     "b": "Arts. 419 a 421 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "En el proceso de restitución de inmueble arrendado, cuando la demanda se fundamenta en falta de pago de la renta, el demandado:",
     "o": [
      "Puede contestar libremente sin carga adicional",
      "No será oído si no acredita la consignación o el pago de los cánones adeudados",
      "Debe prestar caución del 50% de las pretensiones",
      "Solo puede actuar mediante apoderado especial"
     ],
     "a": 1,
     "e": "El art. 384 del CGP impone al arrendatario demandado por mora la carga de consignar o acreditar el pago de los cánones para ser oído en el proceso.",
     "b": "Art. 384 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "La segunda instancia de los procesos de menor cuantía fallados por el juez civil municipal corresponde a:",
     "o": [
      "La Sala Civil del Tribunal Superior",
      "El juez civil del circuito",
      "Otro juez civil municipal",
      "La Sala de Casación Civil"
     ],
     "a": 1,
     "e": "Los jueces civiles del circuito conocen de la segunda instancia de los procesos que se surten en primera instancia ante los jueces civiles municipales.",
     "b": "Arts. 18 y 20 CGP · Estructura funcional de la jurisdicción",
     "d": 2
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Contra los autos proferidos en procesos de única instancia procede:",
     "o": [
      "Apelación",
      "Súplica",
      "Únicamente reposición",
      "Queja"
     ],
     "a": 2,
     "e": "En única instancia no hay superior funcional para apelar; el medio de impugnación disponible contra los autos es la reposición ante el mismo juez (arts. 318 y 320 CGP).",
     "b": "Arts. 318 y 320 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "La notificación realizada por medios electrónicos se entiende surtida:",
     "o": [
      "El mismo día del envío del mensaje de datos",
      "Al día siguiente del envío",
      "Transcurridos dos días hábiles siguientes al envío, y los términos corren a partir del día siguiente",
      "Cuando el destinatario confirme la lectura"
     ],
     "a": 2,
     "e": "Es la regla de los dos días del art. 8º de la Ley 2213 de 2022 (que hizo permanente el Decreto 806 de 2020); su alcance frente a la acción de tutela fue objeto de unificación por la Corte Constitucional en la sentencia SU-487 de 2024.",
     "b": "Art. 8º Ley 2213 de 2022 · Art. 291 CGP · SU-487/24",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Para decretar una medida cautelar innominada en un proceso declarativo, el juez debe ponderar, entre otros:",
     "o": [
      "Únicamente la solvencia del demandado",
      "La apariencia de buen derecho, la necesidad, efectividad y proporcionalidad de la medida",
      "Solo la cuantía del proceso",
      "La conducta procesal del apoderado"
     ],
     "a": 1,
     "e": "El art. 590 lit. c) del CGP exige apreciar la legitimación, la existencia de la amenaza o vulneración del derecho y la apariencia de buen derecho, así como la necesidad, efectividad y proporcionalidad; el solicitante presta caución del 20% de las pretensiones.",
     "b": "Art. 590 CGP",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Si la cantidad estimada bajo juramento estimatorio excede en el 50% la que resulte probada, la sanción es:",
     "o": [
      "Multa del 5% de lo pedido",
      "Suma equivalente al 10% de la diferencia entre lo estimado y lo probado",
      "Pérdida total de la pretensión indemnizatoria",
      "Arresto del apoderado"
     ],
     "a": 1,
     "e": "El art. 206 del CGP sanciona con el 10% de la diferencia; el parágrafo prevé el 5% de lo pretendido cuando se niegan las pretensiones por falta de demostración de los perjuicios.",
     "b": "Art. 206 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "El desistimiento tácito por inactividad opera cuando el proceso permanece inactivo en primera o única instancia durante:",
     "o": [
      "Seis meses",
      "Un año",
      "Dos años en todos los casos",
      "Tres años"
     ],
     "a": 1,
     "e": "El art. 317 num. 2 del CGP ordena decretar la terminación por desistimiento tácito cuando el expediente permanece inactivo un (1) año en primera o única instancia (dos años si el fenómeno se repite en el mismo proceso).",
     "b": "Art. 317 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Un proceso declarativo cuyas pretensiones ascienden a 120 SMLMV es de",
     "o": [
      "mínima cuantía",
      "menor cuantía",
      "mayor cuantía",
      "cuantía indeterminada"
     ],
     "a": 1,
     "e": "El art. 25 del CGP fija: mínima hasta 40 SMLMV, menor superior a 40 y hasta 150, y mayor superior a 150 SMLMV.",
     "b": "CGP (Ley 1564 de 2012) art. 25 · competencia por cuantía",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Los procesos contenciosos de mínima cuantía los conoce el juez civil municipal en",
     "o": [
      "primera instancia",
      "única instancia",
      "segunda instancia",
      "instancia mixta, según el asunto"
     ],
     "a": 1,
     "e": "El art. 17 del CGP asigna a los jueces civiles municipales, en única instancia, los procesos contenciosos de mínima cuantía; los de menor cuantía los conocen en primera instancia (art. 18).",
     "b": "Arts. 17 y 18 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "La regla general de competencia territorial (fuero general) atribuye el conocimiento del proceso contencioso al juez",
     "o": [
      "del domicilio del demandante",
      "del lugar de celebración del contrato",
      "del domicilio del demandado",
      "del lugar de ubicación de los bienes"
     ],
     "a": 2,
     "e": "Conforme al art. 28 num. 1 del CGP es competente el juez del domicilio del demandado; si tiene varios, el de cualquiera de ellos a elección del demandante.",
     "b": "Art. 28 num. 1 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "En el proceso verbal sumario, los hechos que configurarían excepciones previas deben alegarse mediante",
     "o": [
      "escrito separado dentro del traslado",
      "recurso de reposición contra el auto admisorio de la demanda",
      "incidente de nulidad",
      "apelación del auto admisorio"
     ],
     "a": 1,
     "e": "En el verbal sumario las excepciones previas son improcedentes; sus hechos se alegan vía reposición contra el auto admisorio (art. 391 CGP).",
     "b": "Art. 391 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "NO constituye hipótesis de sentencia anticipada conforme al art. 278 del CGP",
     "o": [
      "la solicitud de común acuerdo de las partes",
      "la ausencia de pruebas por practicar",
      "la prescripción extintiva probada",
      "la inasistencia del demandante a la audiencia de instrucción y juzgamiento"
     ],
     "a": 3,
     "e": "El art. 278 autoriza la sentencia anticipada por acuerdo de las partes, ausencia de pruebas por practicar, o cuando esté probada la cosa juzgada, la transacción, la caducidad, la prescripción extintiva o la carencia de legitimación en la causa.",
     "b": "Art. 278 CGP",
     "d": 2
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "El proceso monitorio procede para reclamar el pago de obligaciones",
     "o": [
      "de dar, hacer o no hacer, de cualquier cuantía",
      "dinerarias de naturaleza contractual, determinadas y exigibles, de mínima cuantía",
      "dinerarias respaldadas en título ejecutivo",
      "indemnizatorias de origen extracontractual"
     ],
     "a": 1,
     "e": "El monitorio está reservado a obligaciones en dinero, de origen contractual, determinadas, exigibles y de mínima cuantía (art. 419 CGP).",
     "b": "Arts. 419 a 421 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Procesal Civil",
     "q": "Si la cantidad estimada bajo juramento estimatorio excede en el 50% la que resulte probada, el juez impondrá una sanción equivalente al",
     "o": [
      "5% de lo pedido",
      "10% de la diferencia entre lo estimado y lo probado",
      "20% de lo probado",
      "50% de la diferencia"
     ],
     "a": 1,
     "e": "El art. 206 del CGP sanciona con el 10% de la diferencia; el parágrafo prevé el 5% de lo pretendido cuando se niegan las pretensiones por falta de demostración de los perjuicios.",
     "b": "Art. 206 CGP",
     "d": 1
    },
    {
     "t": 2,
     "c": "Derecho Procesal Civil",
     "q": "Hacen parte de las actividades de la audiencia inicial del artículo 372 del CGP:",
     "s": [
      "El interrogatorio exhaustivo a las partes",
      "La fijación del litigio",
      "El control de legalidad y saneamiento del proceso",
      "La práctica obligatoria de inspección judicial en todos los procesos"
     ],
     "a": 0,
     "e": "La audiencia inicial comprende, entre otras, la conciliación, los interrogatorios, la fijación del litigio, el saneamiento y el decreto de pruebas (opciones 1, 2 y 3). La inspección judicial no es una etapa obligatoria de esta audiencia.",
     "b": "Art. 372 CGP",
     "d": 2
    },
    {
     "t": 2,
     "c": "Derecho Procesal Civil",
     "q": "Respecto del proceso monitorio puede asegurarse que:",
     "s": [
      "La obligación reclamada debe ser en dinero",
      "Procede para obligaciones de cualquier cuantía",
      "La obligación debe ser de naturaleza contractual, determinada y exigible",
      "Procede el emplazamiento del demandado y el nombramiento de curador ad litem"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3: el monitorio exige obligación dineraria, contractual, determinada y exigible. Es exclusivo de la mínima cuantía (2 es falsa) y requiere notificación personal, sin emplazamiento ni curador ad litem (4 es falsa).",
     "b": "Arts. 419 a 421 CGP",
     "d": 2
    },
    {
     "t": 2,
     "c": "Derecho Procesal Civil",
     "q": "En materia de medidas cautelares en los procesos declarativos (art. 590 CGP) se puede afirmar que:",
     "s": [
      "La inscripción de la demanda procede únicamente en los procesos ejecutivos",
      "El juez puede decretar cualquier medida que encuentre razonable (cautela innominada), ponderando la apariencia de buen derecho",
      "No se exige caución alguna al solicitante de la medida",
      "La caución equivale, por regla general, al veinte por ciento (20%) del valor de las pretensiones"
     ],
     "a": 2,
     "e": "Son correctas 2 y 4: el literal c) del art. 590 consagra la cautela innominada bajo juicio de apariencia de buen derecho, necesidad y proporcionalidad, y el solicitante debe prestar caución del 20% de las pretensiones. La inscripción de la demanda sí procede en declarativos (1 falsa) y la caución sí se exige (3 falsa).",
     "b": "Art. 590 CGP",
     "d": 2
    },
    {
     "t": 2,
     "c": "Derecho Procesal Civil",
     "q": "Son causales de impedimento del juez conforme al artículo 141 del CGP:",
     "s": [
      "Tener interés directo o indirecto en el proceso",
      "Haber conocido del proceso en instancia anterior",
      "Existir enemistad grave con alguna de las partes",
      "Residir en el mismo barrio de una de las partes"
     ],
     "a": 0,
     "e": "Las opciones 1, 2 y 3 corresponden a causales taxativas del art. 141. La simple vecindad no constituye causal de impedimento.",
     "b": "Arts. 140 a 142 CGP",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Procesal Civil",
     "af": "En el proceso verbal sumario no proceden las excepciones previas.",
     "rz": "El verbal sumario es un trámite de única instancia estructurado bajo los principios de concentración y celeridad procesal.",
     "a": 0,
     "e": "Ambas proposiciones son verdaderas y la razón explica la afirmación: la improcedencia de las excepciones previas (art. 391) obedece al diseño abreviado y concentrado del verbal sumario, donde sus hechos se alegan por vía de reposición.",
     "b": "Arts. 390 y 391 CGP",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Procesal Civil",
     "af": "Contra las sentencias dictadas en procesos de mínima cuantía no procede el recurso de apelación.",
     "rz": "Los procesos de mínima cuantía se tramitan en primera instancia ante los jueces civiles del circuito.",
     "a": 2,
     "e": "La afirmación es verdadera: la mínima cuantía se decide en única instancia y por ello no hay apelación. La razón es falsa: esos procesos los conoce el juez civil municipal en única instancia, no el juez del circuito en primera (art. 17 CGP).",
     "b": "CGP (Ley 1564 de 2012) art. 17 · competencia jueces civiles municipales",
     "d": 3
    },
    {
     "t": 3,
     "c": "Derecho Procesal Civil",
     "af": "La sentencia debe estar en consonancia con los hechos y las pretensiones aducidos en la demanda y en las demás oportunidades procesales (principio de congruencia).",
     "rz": "Los documentos públicos y privados se presumen auténticos mientras no hayan sido tachados de falsos o desconocidos.",
     "a": 1,
     "e": "Ambas proposiciones son verdaderas (arts. 281 y 244 CGP), pero la presunción de autenticidad documental no es la explicación del principio de congruencia: no existe relación causal entre ellas.",
     "b": "Arts. 281 y 244 CGP",
     "d": 3
    },
    {
     "t": 3,
     "c": "Derecho Procesal Civil",
     "af": "La notificación electrónica se entiende surtida una vez transcurridos dos días hábiles siguientes al envío del mensaje de datos.",
     "rz": "El artículo 8º de la Ley 2213 de 2022 estableció ese término con el fin de garantizar el conocimiento efectivo de la providencia por el destinatario.",
     "a": 0,
     "e": "Ambas proposiciones son verdaderas y la razón explica la afirmación: el legislador difirió el perfeccionamiento de la notificación para asegurar el derecho de defensa, criterio cuya aplicación a la tutela unificó la SU-487 de 2024.",
     "b": "Art. 8º Ley 2213 de 2022 · SU-487/24",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Procesal Civil",
     "af": "El proceso monitorio exige la notificación personal del demandado.",
     "rz": "En el proceso monitorio procede el emplazamiento del demandado y el nombramiento de curador ad litem.",
     "a": 2,
     "e": "La afirmación es verdadera: el requerimiento de pago debe notificarse personalmente. La razón es falsa: el monitorio excluye el emplazamiento y el curador ad litem, precisamente porque la estructura del proceso exige la comparecencia real del deudor.",
     "b": "Art. 421 CGP",
     "d": 3
    },
    {
     "t": 3,
     "c": "Derecho Procesal Civil",
     "af": "En la audiencia inicial, la inasistencia injustificada de las partes carece de consecuencias probatorias.",
     "rz": "El artículo 372 numeral 4 del CGP dispone que la inasistencia injustificada hace presumir ciertos los hechos susceptibles de confesión en que se funde la demanda o las excepciones, según el caso.",
     "a": 3,
     "e": "La afirmación es falsa justamente porque la razón es verdadera: la norma atribuye a la inasistencia el efecto de confesión presunta, además de consecuencias pecuniarias.",
     "b": "Art. 372 num. 4 CGP",
     "d": 3
    },
    {
     "t": 1,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "La Ley 2213 de 2022 tiene como origen y naturaleza:",
     "o": [
      "Un decreto ordinario del Gobierno convertido en reglamento único del sector justicia",
      "La adopción como legislación PERMANENTE de las medidas del Decreto Legislativo 806 de 2020, expedido durante la emergencia por la pandemia",
      "Una reforma integral que derogó el régimen de notificaciones del CGP",
      "Un estatuto transitorio con vigencia de dos años prorrogables"
     ],
     "a": 1,
     "e": "El D.L. 806/2020 se dictó para garantizar la administración de justicia durante el aislamiento; la Ley 2213/2022 convirtió ese régimen de uso de las TIC en legislación permanente, complementando — sin derogar — el CGP y los demás estatutos procesales.",
     "b": "Ley 2213/2022 art. 1",
     "d": 1
    },
    {
     "t": 1,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "El concepto de «equivalente funcional», eje transversal de la clase, significa que:",
     "o": [
      "Todo acto procesal debe tener versión digital obligatoria",
      "El mensaje de datos produce los mismos efectos jurídicos que el acto o documento físico cuando cumple la misma función, conforme al régimen de la Ley 527 de 1999",
      "Las audiencias virtuales valen menos que las presenciales salvo pacto en contrario",
      "Los memoriales físicos quedaron prohibidos en todas las jurisdicciones"
     ],
     "a": 1,
     "e": "La equivalencia funcional (Ley 527/1999, recogida por el D.806/2020 y la Ley 2213) implica que la actuación digital satisface la finalidad del acto — firma, original, archivo — con iguales efectos jurídicos. No convierte lo digital en obligatorio absoluto ni deroga la actuación física.",
     "b": "Ley 527/1999 · Ley 2213/2022 arts. 1-2",
     "d": 2
    },
    {
     "t": 3,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "af": "La exhibición del ORIGINAL de un documento o de un objeto (el cotejo con el original) es una actuación que hoy carece de equivalente funcional pleno",
     "rz": "cuando la contraparte discute la autenticidad y exige ver el original, la entrega física solo puede cumplirse en audiencia, al menos híbrida",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: fue el ejemplo insistente del docente (el termo, el título valor). La copia digital basta mientras nadie cuestione la autenticidad; pero el cotejo con el original exige presencia física, de modo que debe decretarse audiencia — no basta «dejarlo por baranda».",
     "b": "CGP arts. 265-268",
     "d": 2
    },
    {
     "t": 1,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "Quien promueve ejecutivo en ejercicio de la acción cambiaria puede, según la jurisprudencia comentada en clase:",
     "o": [
      "Aportar copia digital del título valor conservando el original en su poder, salvo que la contraparte proponga excepciones fundadas en la autenticidad, caso en el cual deberá exhibirse el original",
      "Ejecutar únicamente con el original radicado físicamente en secretaría",
      "Aportar copia simple sin conservar el original, pues la digitalización lo reemplaza definitivamente",
      "Prescindir del título si aporta certificación bancaria de la deuda"
     ],
     "a": 0,
     "e": "La copia digital del título con conservación del original en poder del tenedor es admisible (equivalencia funcional); pero si el ejecutado desconoce la firma o alega alteración («esa firma no es mía», «ese número no estaba»), procede la exhibición del original en audiencia. Advertencia de clase: el original nunca se destruye.",
     "b": "C. de Co. arts. 619 ss. · Ley 2213/2022 art. 6",
     "d": 2
    },
    {
     "t": 2,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "Son deberes o reglas que la Ley 2213 impone a los sujetos procesales:",
     "s": [
      "Suministrar la dirección de correo electrónico y los canales digitales donde recibirán comunicaciones",
      "Enviar copia de los memoriales a la contraparte simultáneamente por el mismo medio",
      "Realizar las actuaciones y asistir a las audiencias preferentemente mediante las TIC",
      "Renunciar de manera irrevocable a cualquier actuación presencial"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (arts. 3, 5 y 6 Ley 2213). La 4 es falsa: la ley garantiza la presencialidad cuando el sujeto no cuente con medios tecnológicos o cuando el juez la estime necesaria — el acceso a la justicia no puede sacrificarse por la virtualidad.",
     "b": "Ley 2213/2022 arts. 3, 5 y 6",
     "d": 2
    },
    {
     "t": 1,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "En la notificación personal por medios electrónicos regulada por la Ley 2213 (art. 8), la notificación se entiende realizada:",
     "o": [
      "El mismo día del envío del mensaje de datos, en todos los casos",
      "Transcurridos DOS días hábiles siguientes al envío del mensaje, y los términos empiezan a correr a partir del día siguiente al de la notificación",
      "Cuando el destinatario responda expresamente el correo",
      "A los diez días del envío, como en la notificación por aviso"
     ],
     "a": 1,
     "e": "La presunción legal: enviada la providencia como mensaje de datos a la dirección electrónica conocida, la notificación se entiende surtida dos días hábiles después del envío, y los términos corren desde el día siguiente. El interesado debe poder demostrar el envío y su trazabilidad.",
     "b": "Ley 2213/2022 art. 8",
     "d": 1
    },
    {
     "t": 3,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "af": "Durante el aislamiento obligatorio, la notificación personal «compleja» del art. 291 del CGP (citatorio y comparecencia al juzgado) pudo cumplirse mediante equivalentes funcionales como la baranda virtual, las videollamadas o la línea telefónica del despacho",
     "rz": "la Ley 2213 derogó expresamente el artículo 291 del Código General del Proceso",
     "a": 2,
     "e": "La afirmación es verdadera — el docente recordó cómo el citatorio, el acta secretarial y su firma encontraron equivalentes digitales. La razón es FALSA: la Ley 2213 no derogó el art. 291 CGP; convive con él ofreciendo cauces electrónicos preferentes para la notificación personal.",
     "b": "CGP art. 291 · Ley 2213/2022 art. 8",
     "d": 3
    },
    {
     "t": 1,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "El ámbito de aplicación de la Ley 2213 de 2022 comprende:",
     "o": [
      "Únicamente la jurisdicción ordinaria civil",
      "Los procesos de todas las jurisdicciones y las actuaciones de autoridades administrativas con funciones jurisdiccionales, en cuanto sean compatibles",
      "Solo la justicia arbitral y los métodos alternativos de solución de conflictos",
      "Exclusivamente los procesos iniciados después de junio de 2022"
     ],
     "a": 1,
     "e": "El art. 1 define un ámbito amplio: actuaciones judiciales de todas las jurisdicciones, procesos arbitrales y autoridades administrativas que ejercen funciones jurisdiccionales, en lo compatible con su naturaleza — con la finalidad de facilitar el acceso a la justicia mediante las TIC.",
     "b": "Ley 2213/2022 arts. 1-2",
     "d": 1
    },
    {
     "t": 2,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "Frente a la demanda y su presentación bajo la Ley 2213 son ciertas:",
     "s": [
      "Puede presentarse como mensaje de datos, sin firmas autenticadas ni presentación personal",
      "No es necesario aportar copias físicas para los traslados cuando el envío se hace digitalmente a los demandados con dirección electrónica conocida",
      "El demandante debe indicar las direcciones electrónicas de las partes, si las conoce",
      "La demanda digital exige protocolización notarial previa"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (art. 6 Ley 2213): la litis digital elimina autenticaciones, presentaciones personales y copias físicas cuando los canales electrónicos están disponibles. La protocolización notarial (4) es una invención — señal típica de distractor en el examen.",
     "b": "Ley 2213/2022 art. 6",
     "d": 2
    },
    {
     "t": 1,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "Si una de las partes manifiesta y acredita que NO cuenta con medios tecnológicos ni acceso a internet, la consecuencia conforme a la Ley 2213 es:",
     "o": [
      "Se le designa curador ad litem para que actúe digitalmente por ella",
      "El proceso se suspende hasta que obtenga conectividad",
      "Debe garantizársele la actuación presencial o los canales alternativos que aseguren su acceso a la administración de justicia",
      "Precluye su oportunidad procesal por carga de diligencia tecnológica"
     ],
     "a": 2,
     "e": "La virtualidad es preferente pero no puede convertirse en barrera: la propia ley ordena garantizar el acceso a la justicia de quienes no disponen de TIC, permitiendo la presencialidad. Este equilibrio (preferencia digital + garantía de acceso) es la clave interpretativa de todo el estatuto.",
     "b": "Ley 2213/2022 arts. 1, 3 y 7",
     "d": 2
    },
    {
     "t": 3,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "af": "Las audiencias pueden realizarse mediante videoconferencia con plena validez, incluso para la práctica de pruebas testimoniales e interrogatorios",
     "rz": "el principio de inmediación se satisface cuando el juez percibe directamente la declaración en tiempo real, sin que la presencia física en la misma sala sea de su esencia",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la inmediación exige percepción directa y contemporánea del juez, lograble por videoconferencia — lectura que el D.806, la Ley 2213 y la jurisprudencia han consolidado. Distinto es el caso de actuaciones sin equivalente funcional (exhibición de originales).",
     "b": "Ley 2213/2022 art. 7",
     "d": 3
    },
    {
     "t": 1,
     "c": "Justicia Digital · Ley 2213 de 2022",
     "q": "En relación con los memoriales y su recepción, la regla de la Ley 2213 es que el mensaje de datos remitido a la cuenta oficial del despacho:",
     "o": [
      "Solo se entiende presentado cuando la secretaría lo imprima y radique",
      "Se entiende presentado en la fecha y hora de su ENVÍO, si se remite dentro del horario o con las reglas que fije el reglamento, correspondiendo al despacho acusar su recibo y trazabilidad",
      "Requiere confirmación telefónica dentro de las 24 horas siguientes",
      "Carece de valor si no incluye firma digital certificada"
     ],
     "a": 1,
     "e": "Rige la lógica del mensaje de datos: la presentación se ata al envío verificable al canal oficial (con las precisiones reglamentarias sobre horarios), sin exigir impresión, radicación física ni firma digital certificada — la firma electrónica simple e identificable basta.",
     "b": "Ley 2213/2022 arts. 3 y 6 · Ley 527/1999",
     "d": 1
    },
    {
     "t": 1,
     "c": "Teoría General del Proceso",
     "q": "Ante el TRÁNSITO DE LEGISLACIÓN procesal, si al entrar en vigencia la nueva ley aún NO se ha proferido el auto que decreta pruebas, la regla de transición indica:",
     "o": [
      "Todo el proceso se rehace con la nueva ley",
      "El proceso continúa rigiéndose por la legislación anterior hasta que el juez decrete las pruebas, inclusive, y luego se aplica la nueva",
      "La nueva ley se aplica retroactivamente a todo lo actuado",
      "Se decreta la nulidad de lo actuado"
     ],
     "a": 1,
     "e": "Caso A del régimen de transición: no proferido aún el auto de pruebas, se agota la etapa introductoria y se decretan las pruebas con la ley anterior; a partir de allí rige la nueva. Principio: las leyes procesales son de aplicación inmediata pero respetan las etapas ya iniciadas (ultractividad por tramos).",
     "b": "Régimen de transición procesal",
     "d": 1
    },
    {
     "t": 1,
     "c": "Teoría General del Proceso",
     "q": "Si al entrar en vigencia la nueva ley YA se había proferido el auto que decreta pruebas, entonces:",
     "o": [
      "Las pruebas se practican con la nueva ley de inmediato",
      "Las pruebas ya decretadas se practican conforme a la legislación anterior; concluida la etapa probatoria, se convoca la audiencia de instrucción y juzgamiento de la nueva ley solo para alegatos y sentencia",
      "Se anula el auto de pruebas",
      "El proceso se archiva"
     ],
     "a": 1,
     "e": "Caso B: decretadas las pruebas bajo la ley anterior, se practican con ella; terminada la etapa probatoria, la nueva legislación se aplica desde los alegatos y la sentencia. Se protege la etapa probatoria ya configurada.",
     "b": "Régimen de transición procesal",
     "d": 1
    },
    {
     "t": 3,
     "c": "Teoría General del Proceso",
     "af": "Las normas procesales son, por regla general, de aplicación inmediata a los procesos en curso",
     "rz": "sin embargo, los actos procesales ya iniciados, los términos que hubieren comenzado a correr y las etapas surtidas se rigen por la ley vigente al tiempo de su iniciación",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: es la regla del art. 624 CGP (que modificó el art. 40 de la Ley 153/1887) — aplicación inmediata con respeto de lo ya iniciado, base de todos los casos de transición trabajados en clase.",
     "b": "CGP art. 624 · Ley 153/1887 art. 40",
     "d": 2
    },
    {
     "t": 1,
     "c": "Teoría General del Proceso",
     "q": "El derecho procesal, como rama del derecho público, se caracteriza porque sus normas son, por regla general:",
     "o": [
      "Dispositivas y renunciables por las partes",
      "De orden público y por ello de obligatorio cumplimiento, salvo las expresamente dispositivas",
      "Meramente supletivas",
      "Aplicables solo por analogía"
     ],
     "a": 1,
     "e": "Las normas procesales son de orden público: regulan el ejercicio de la función jurisdiccional y el debido proceso, por lo que su observancia es imperativa; solo excepcionalmente admiten disposición de las partes (p. ej., prórroga de competencia territorial, pactos probatorios).",
     "b": "Teoría General del Proceso",
     "d": 2
    },
    {
     "t": 2,
     "c": "Teoría General del Proceso",
     "q": "Son presupuestos procesales cuya ausencia impide una decisión de fondo válida:",
     "s": [
      "La competencia del juez",
      "La capacidad para ser parte y la capacidad procesal",
      "La demanda en forma",
      "La existencia de derecho sustancial a favor del demandante"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: los presupuestos procesales (juez competente, capacidad, demanda en forma) condicionan la validez del proceso. La 4 NO es presupuesto procesal sino un presupuesto material de la sentencia favorable — su ausencia lleva a sentencia desestimatoria, no a fallo inhibitorio.",
     "b": "Doctrina procesal",
     "d": 2
    },
    {
     "t": 1,
     "c": "Teoría General del Proceso",
     "q": "La distinción entre DERECHO SUSTANCIAL y DERECHO PROCESAL, y el mandato del art. 228 C.P., implica que:",
     "o": [
      "El proceso prevalece sobre el derecho sustancial",
      "En las actuaciones de la administración de justicia prevalecerá el derecho sustancial",
      "Ambos tienen igual jerarquía sin regla de prevalencia",
      "El derecho procesal es un fin en sí mismo"
     ],
     "a": 1,
     "e": "Art. 228 C.P.: prevalencia del derecho sustancial. El proceso es instrumento para la efectividad de los derechos, no un fin autónomo — principio que atraviesa toda la teoría general del proceso y funda la proscripción del exceso ritual manifiesto.",
     "b": "C.P. art. 228",
     "d": 2
    },
    {
     "t": 3,
     "c": "Teoría General del Proceso",
     "af": "Concluida la etapa probatoria bajo la ley anterior, la sentencia se dicta conforme a la nueva legislación procesal",
     "rz": "la aplicación inmediata de la ley procesal alcanza las etapas aún no iniciadas al momento de su entrada en vigencia, como la de alegatos y fallo",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: coherente con los casos A y B — lo ya surtido se respeta, y las etapas pendientes (alegatos, sentencia) se rigen por la nueva ley. Consolida la lógica del art. 624 CGP.",
     "b": "CGP art. 624",
     "d": 2
    },
    {
     "t": 1,
     "c": "Teoría General del Proceso",
     "q": "Si al entrar en vigencia la nueva ley el proceso ya surtió la etapa de alegatos y está pendiente de fallo:",
     "o": [
      "Se aplica la nueva ley y se repiten los alegatos",
      "El juez dicta la sentencia conforme a la legislación ANTERIOR, por ser la etapa en que se encontraba",
      "Se declara la nulidad",
      "Se remite a reparto"
     ],
     "a": 1,
     "e": "Caso C: agotados los alegatos y pendiente el fallo, la sentencia se profiere con la ley anterior — la fase decisoria ya estaba en curso bajo su vigencia. Completa la secuencia de transición explicada en clase (A, B y C).",
     "b": "Régimen de transición procesal",
     "d": 1
    },
    {
     "t": 1,
     "d": 1,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "El Código General del Proceso fue expedido por la:",
     "o": [
      "Ley 906 de 2004",
      "Ley 1564 de 2012",
      "Ley 270 de 1996",
      "Ley 1437 de 2011"
     ],
     "a": 1,
     "e": "El CGP es la Ley 1564 de 2012, que sustituyó al Código de Procedimiento Civil e implantó el proceso por audiencias (oralidad) en la jurisdicción civil, de familia, agraria y otras.",
     "b": "Alarcón Palacio, Yadira Elena. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · Ley 1564 de 2012"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "Según el módulo, la ORALIDAD en el Código General del Proceso se concibe, ante todo, como:",
     "o": [
      "Una regla rígida sin excepciones",
      "Un principio (norma con estructura de principio) de implementación gradual, orientado a la celeridad y la inmediación",
      "Una mera recomendación sin efecto procesal",
      "Un requisito exclusivo de los procesos ejecutivos"
     ],
     "a": 1,
     "e": "El módulo, siguiendo la Corte Constitucional (C-543/2011), explica que la oralidad tiene estructura de principio: se implementa de forma gradual según la naturaleza de cada proceso, favoreciendo la inmediación, el acercamiento del juez a las partes y la celeridad. La fase introductoria sigue siendo escrita.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · C. Const. C-543/2011"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "El artículo 11 del CGP ordena que, al interpretar la ley procesal, el juez tenga en cuenta que el objeto de los procedimientos es la efectividad de los derechos sustanciales, y además dispone que el juez:",
     "o": [
      "Exija todas las formalidades posibles",
      "Se abstenga de exigir y de cumplir formalidades innecesarias",
      "Aplique siempre la analogía",
      "Resuelva según su íntima convicción sin motivar"
     ],
     "a": 1,
     "e": "El art. 11 CGP consagra la prevalencia del derecho sustancial en clave interpretativa: resolver las dudas con los principios constitucionales y generales del proceso, garantizando el debido proceso, y abstenerse de exigir o cumplir formalidades innecesarias (rechazo al exceso ritual manifiesto).",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · CGP art. 11"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "El módulo destaca que, por regla general, los TÉRMINOS procesales en el CGP son:",
     "o": [
      "Prorrogables a voluntad de las partes",
      "Perentorios e improrrogables, de modo que su transcurso extingue la facultad que se tenía",
      "Meramente indicativos",
      "Fijados libremente por el juez sin límite legal"
     ],
     "a": 1,
     "e": "Citando la C-012/2002, el módulo recuerda que los términos son, por regla general, perentorios (improrrogables): vencido el plazo, se extingue la facultad jurídica que se gozaba mientras estaba vigente. El proceso es un sistema de ordenación del tiempo.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · C. Const. C-012/2002"
    },
    {
     "t": 2,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "Según el módulo, son garantías que integran el DEBIDO PROCESO (art. 29 C.P.):",
     "s": [
      "El derecho al juez natural",
      "El derecho de defensa y contradicción",
      "El derecho a la imparcialidad e independencia del juez",
      "El derecho a que el juez falle según su conveniencia personal"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: el módulo, siguiendo a la Corte Constitucional, enumera entre las garantías del debido proceso el juez natural, la defensa y contradicción, la publicidad, la independencia y la imparcialidad. La 4 es contraria a la imparcialidad: el juez decide conforme al orden jurídico, no por conveniencia.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · C.P. art. 29 · C. Const. C-341/2014"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "Los principios de INMEDIACIÓN y CONCENTRACIÓN, según el módulo, exigen que:",
     "o": [
      "Las audiencias se aplacen libremente",
      "El juez tenga contacto directo con las pruebas y las partes, y que el debate se desarrolle sin solución de continuidad, sin aplazamientos ni suspensiones injustificadas",
      "La prueba se practique siempre por comisión",
      "El juez no dirija la audiencia"
     ],
     "a": 1,
     "e": "La inmediación (arts. 5 y 6 CGP) impone la percepción directa del juez sobre pruebas y partes; la concentración (art. 4 CGP) exige desarrollar el debate sin solución de continuidad, sin aplazamientos ni suspensiones salvo motivos legales. El juez debe dirigir personalmente la audiencia.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · CGP arts. 4, 5, 6"
    },
    {
     "t": 3,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "af": "El principio de inmediación en el CGP no es absoluto, sino relativo",
     "rz": "la ley solo prevé la nulidad cuando el juez que profiere la sentencia es distinto del que escuchó los alegatos de conclusión o la sustentación de la apelación, pero no cuando la prueba fue practicada por un juez diferente",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el módulo, siguiendo a Quiroz Monsalvo, señala que la inmediación es relativa. La causal de nulidad del art. 133-7 CGP opera si la sentencia la dicta un juez distinto del que oyó los alegatos o la sustentación del recurso; no así por el mero cambio de juez en la práctica probatoria.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · CGP art. 133-7"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "El principio de GRATUIDAD en el CGP (art. 8) significa que:",
     "o": [
      "El proceso genera costos de acceso para el demandante",
      "El servicio de justicia que presta el Estado es gratuito, como condición de igualdad en el acceso",
      "Solo los ricos pueden litigar",
      "Se cobra por cada audiencia"
     ],
     "a": 1,
     "e": "El art. 8 CGP consagra la gratuidad del servicio de justicia; el módulo, citando a la Corte, la presenta como condición para el acceso en igualdad, evitando que la situación económica de una parte la ponga en ventaja. No excluye la condena en costas.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · CGP art. 8 · C. Const. T-522/1994"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "En la clasificación de las PROVIDENCIAS JUDICIALES del CGP, se distinguen principalmente:",
     "o": [
      "Solo sentencias",
      "Autos y sentencias",
      "Decretos y resoluciones",
      "Actas y oficios"
     ],
     "a": 1,
     "e": "El CGP clasifica las providencias en autos (decisiones de trámite o interlocutorias) y sentencias (deciden el fondo del litigio o los incidentes que ponen fin al proceso). El módulo dedica su Unidad 3 a la providencia judicial y a la sentencia oral.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · CGP arts. 278-280"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "Con la Ley 1996 de 2019, sobre capacidad legal de las personas con discapacidad, un proceso de INTERDICCIÓN que estaba en curso al entrar en vigencia la ley debe:",
     "o": [
      "Continuar hasta la sentencia de interdicción",
      "Suspenderse de forma inmediata, pues la ley sustituyó la interdicción por el régimen de apoyos",
      "Archivarse sin más",
      "Convertirse automáticamente en un proceso ejecutivo"
     ],
     "a": 1,
     "e": "El módulo explica que la Ley 1996 de 2019 estableció la capacidad legal plena de las personas con discapacidad mayores de edad y el régimen de apoyos, derogando la interdicción: los procesos de interdicción o inhabilitación en curso debían suspenderse de inmediato (art. 55), y procede la revisión y eventual adjudicación judicial de apoyos.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · Ley 1996 de 2019, arts. 55-56"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "Conforme a la Ley 1996 de 2019 según el módulo, la ADJUDICACIÓN JUDICIAL DE APOYOS promovida por la propia persona titular del acto jurídico se tramita por:",
     "o": [
      "Proceso ejecutivo",
      "El procedimiento de jurisdicción voluntaria, ante el juez de familia del domicilio de la persona",
      "Proceso monitorio",
      "Acción de tutela"
     ],
     "a": 1,
     "e": "Cuando la promueve la propia persona titular, la adjudicación de apoyos se tramita por jurisdicción voluntaria ante el juez de familia de su domicilio (art. 32); si la promueve un tercero, por proceso verbal sumario (art. 38). Deben garantizarse los ajustes razonables en todas las etapas.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · Ley 1996 de 2019, arts. 32, 37-38"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "El ENFOQUE DIFERENCIAL que, según el módulo, irradia el CGP, se entiende como:",
     "o": [
      "Un trato idéntico y mecánico para todos los sujetos",
      "Un método de análisis y actuación que atiende las diversidades e inequidades de la población en situación de vulnerabilidad, para garantizar sus derechos",
      "Una causal de nulidad",
      "Un beneficio tributario"
     ],
     "a": 1,
     "e": "El enfoque diferencial es un método de análisis, actuación y evaluación que reconoce las diversidades e inequidades (género, discapacidad, etnia, ciclo vital) para brindar atención integral y remover patrones discriminatorios en la praxis judicial. El módulo lo vincula con los arts. 13 C.P. y tratados de DDHH.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · Enfoque diferencial · C.P. art. 13"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "El módulo asocia el CGP a la superación del «exceso ritual manifiesto». Este consiste en:",
     "o": [
      "Aplicar la justicia material sobre el formalismo",
      "Sacrificar la verdad y el derecho sustancial por un rigor formal excesivo o por falta de preparación sustancial en la decisión",
      "Motivar debidamente las sentencias",
      "Garantizar la doble instancia"
     ],
     "a": 1,
     "e": "El exceso ritual manifiesto (Corte Const. T-213/2012, citada en el módulo) es el defecto que se configura cuando el rigor formal desmedido sacrifica la verdad jurídica objetiva y el derecho sustancial; el paradigma de la oralidad y el art. 11 CGP buscan evitarlo.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · C. Const. T-213/2012"
    },
    {
     "t": 3,
     "d": 2,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "af": "El derecho de acceso a la justicia (tutela judicial efectiva) no se agota en la posibilidad de presentar la demanda ante el juez",
     "rz": "comprende, además, el derecho a obtener una decisión de fondo motivada, dentro de un término razonable, y a que lo decidido se cumpla",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el módulo, con la jurisprudencia constitucional, distingue el acceso en sentido restringido (llegar al proceso) del amplio (obtener decisión de fondo motivada, en plazo razonable, y su ejecución). Los arts. 2 CGP, 228-229 C.P. y 25 CADH lo sustentan.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · CGP art. 2 · C.P. arts. 228-229"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Procesal Civil · Módulo EJRLB (Audiencias y Providencias)",
     "q": "En una audiencia inicial, el juez advierte que, con lo probado y admitido, el asunto ya puede resolverse sin necesidad de practicar más pruebas. El CGP le permite, según el módulo, dictar:",
     "o": [
      "Un auto de archivo definitivo",
      "Sentencia anticipada, como herramienta de terminación del litigio a su justa medida",
      "Una medida cautelar de oficio obligatoria",
      "La nulidad de todo lo actuado"
     ],
     "a": 1,
     "e": "El módulo resalta que el CGP ofrece herramientas para adecuar el litigio a su justa medida, incluida la terminación mediante sentencia anticipada cuando el estado del proceso lo permite (art. 278 CGP), en desarrollo de la celeridad y la economía procesal.",
     "b": "Alarcón Palacio, Y. E. «Audiencias y Providencias en el CGP». EJRLB–CSJ, 2019 · CGP art. 278"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Procesal Civil · Competencia",
     "q": "Se presenta una demanda de responsabilidad civil por 40 SMLMV ante un juez civil municipal. El demandado, al contestar, alega que el juez carece de competencia por el factor territorial, pues el domicilio del demandado está en otro distrito. El juez advierte que sí es competente por cuantía. Lo procedente frente a la objeción territorial es:",
     "o": [
      "Tramitar la falta de competencia como excepción previa o, si se propuso, resolverla; y de ser fundada por factor territorial (prorrogable), remitir al competente sin anular lo actuado válidamente",
      "Declarar la nulidad de todo lo actuado, pues la incompetencia territorial es insaneable",
      "Continuar el proceso ignorando la objeción, ya que la competencia por cuantía prevalece sobre cualquier otro factor",
      "Rechazar de plano la demanda por falta de competencia territorial"
     ],
     "a": 0,
     "e": "La competencia territorial es, por regla general, prorrogable; alegada oportunamente, se resuelve y, si es fundada, se remite al juez competente conservando la validez de lo actuado (CGP arts. 16, 138). · Rechazar de plano la demanda no es la consecuencia de una incompetencia territorial. · Anular todo por 'insaneable' confunde la territorial (prorrogable) con la funcional o por materia. · Ignorar la objeción porque 'la cuantía prevalece' mezcla dos factores distintos: cuantía y territorio operan sobre planos diferentes.",
     "b": "CGP arts. 16, 138 · competencia prorrogable y su trámite"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Procesal Civil · Recursos",
     "q": "Un juez dicta sentencia en un proceso verbal de mínima cuantía. La parte vencida quiere apelar. Conforme al CGP, la sentencia:",
     "o": [
      "Es apelable solo si el juez lo autoriza expresamente",
      "Admite recurso de casación por tratarse de sentencia de fondo",
      "No es apelable: los procesos de mínima cuantía son de única instancia, sin perjuicio de otros mecanismos como la eventual acción de tutela por vías de hecho",
      "Es apelable, pues toda sentencia admite el recurso de apelación"
     ],
     "a": 2,
     "e": "Los procesos de mínima cuantía se tramitan en única instancia (CGP art. 17): la sentencia no es apelable. · Afirmar que 'toda sentencia' es apelable ignora los procesos de única instancia. · Condicionar la apelación a la autorización del juez inventa un requisito inexistente. · La casación no procede en mínima cuantía y menos en un asunto de única instancia: confunde el régimen de recursos extraordinarios.",
     "b": "CGP arts. 17, 320 · única instancia en mínima cuantía"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Procesal Civil · Nulidades",
     "q": "En un proceso, el demandado nunca fue notificado del auto admisorio y aun así se dictó sentencia en su contra; se enteró al iniciarse la ejecución. Alega nulidad por indebida notificación. Conforme al CGP:",
     "o": [
      "Debe alegarse únicamente mediante recurso de apelación contra la sentencia",
      "La nulidad no procede porque ya hay sentencia ejecutoriada y prima la seguridad jurídica",
      "Procede la nulidad por falta de notificación del auto admisorio (indebida integración del contradictorio), causal insaneable que vulnera el debido proceso, alegable incluso después de la sentencia",
      "Solo procede si el demandado prueba que habría ganado el proceso"
     ],
     "a": 2,
     "e": "La falta de notificación del auto admisorio o del mandamiento de pago a quien debió ser vinculado vulnera el derecho de defensa y configura nulidad (CGP art. 133-8), que por afectar la integración del contradictorio puede alegarse aun después de la sentencia. · Oponer la seguridad jurídica de la sentencia desconoce que la nulidad por indebida notificación prevalece por debido proceso. · Exigir que pruebe que 'habría ganado' añade un requisito ajeno a la causal. · Limitarla a la apelación ignora las vías propias de la nulidad procesal.",
     "b": "CGP art. 133 (num. 8) · nulidad por indebida notificación"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Medidas Cautelares",
     "q": "En un proceso declarativo, el demandante solicita una medida cautelar innominada para proteger el objeto del litigio. El juez la estudia. Conforme al CGP, para decretarla debe valorar, entre otros:",
     "o": [
      "Que el demandado esté de acuerdo con la medida",
      "La apariencia de buen derecho, la necesidad, la efectividad y la proporcionalidad de la medida, además de la eventual caución",
      "Únicamente que el demandante preste caución, sin más análisis",
      "Que exista sentencia previa favorable al demandante"
     ],
     "a": 1,
     "e": "Las cautelas innominadas del proceso declarativo exigen ponderar apariencia de buen derecho (fumus boni iuris), necesidad, efectividad y proporcionalidad, con la caución que corresponda (CGP art. 590). · Reducirlo a la sola caución omite el juicio de procedencia. · El acuerdo del demandado no es presupuesto de una cautela que, por naturaleza, se decreta frente a él. · Exigir sentencia previa favorable desnaturaliza la cautela, que es anticipatoria y no requiere fallo previo.",
     "b": "CGP art. 590 · medidas cautelares innominadas"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Procesal Civil · Providencias",
     "q": "Un juez, al proferir sentencia oral en audiencia, omite pronunciarse sobre una de las pretensiones acumuladas. La parte lo advierte en la misma audiencia. El mecanismo idóneo es:",
     "o": [
      "Solicitar la adición de la sentencia, pues procede cuando se omite resolver sobre cualquiera de los extremos de la litis, dentro de la oportunidad legal",
      "Presentar una nueva demanda sobre la pretensión no resuelta",
      "Interponer de inmediato recurso extraordinario de casación por incongruencia",
      "Pedir la nulidad de toda la sentencia por incongruencia"
     ],
     "a": 0,
     "e": "Cuando la sentencia omite pronunciarse sobre alguno de los extremos de la litis, procede su adición dentro de la oportunidad legal (CGP art. 287). · La casación por incongruencia es un recurso extraordinario improcedente para una simple omisión corregible por adición, y menos 'de inmediato'. · Anular toda la sentencia por una omisión desproporciona el remedio. · Presentar nueva demanda desconoce el mecanismo de adición y podría chocar con la cosa juzgada del resto.",
     "b": "CGP art. 287 · adición de providencias"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Procesal Civil · Excepciones",
     "q": "El demandado, además de contestar, propone la excepción de prescripción. El juez advierte que la prescripción, de estar probada, extinguiría la pretensión, pero requiere análisis de fondo. Conforme al CGP, la prescripción:",
     "o": [
      "Solo puede alegarse en la audiencia inicial y nunca en la contestación",
      "Debe declararse de oficio por el juez en el auto admisorio",
      "Es una excepción previa que debe resolverse antes de admitir la demanda",
      "Es una excepción de mérito (de fondo) que se decide en la sentencia, no una excepción previa"
     ],
     "a": 3,
     "e": "La prescripción es una excepción de mérito o de fondo: se resuelve en la sentencia porque enerva el derecho sustancial, no la validez del trámite (CGP arts. 282, 100). · Tratarla como previa confunde las excepciones que atacan el proceso con las que atacan la pretensión. · La prescripción no se declara de oficio: debe alegarse (art. 282, salvo casos legales). · Restringir su alegación a la audiencia inicial desconoce que se propone con la contestación.",
     "b": "CGP arts. 100, 282 · excepciones de mérito vs. previas"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Procesal Civil · Teoría General del Proceso",
     "q": "En un proceso, el juez advierte que quien demanda no es el titular de la relación jurídica sustancial discutida. Se trata de un problema de:",
     "o": [
      "Legitimación en la causa, cuya ausencia conduce a una sentencia desestimatoria de fondo, no a una nulidad",
      "Indebida acumulación de pretensiones",
      "Falta de jurisdicción",
      "Competencia por el factor funcional"
     ],
     "a": 0,
     "e": "La legitimación en la causa es la relación entre las partes y el derecho sustancial discutido; su falta lleva a negar las pretensiones en sentencia (fallo de fondo), no a anular el proceso (CGP; jurisprudencia CSJ). · La jurisdicción atañe a la potestad de administrar justicia, no a quién es titular del derecho. · La competencia funcional es un reparto entre jueces, ajeno a la titularidad sustancial. · La acumulación de pretensiones es un problema distinto, de estructura de la demanda.",
     "b": "CGP · legitimación en la causa (jurisprudencia CSJ Sala Civil)"
    }
   ],
   "rel": "civil",
   "ambito": "Específico Civil · aspectos procesales del derecho civil (la Teoría General del Proceso es transversal a todos los cargos)"
  },
  {
   "id": "probatorio",
   "numero": "T2",
   "fecha": "Tema",
   "titulo": "Régimen Probatorio",
   "docente": "Banco consolidado · módulos EJRLB y metodología PGN",
   "resumen": "Principios de la prueba, medios probatorios, carga de la prueba, prueba de oficio y valoración bajo la sana crítica. Incluye la sesión de Teoría General de la Prueba del Dr. Ulises Canosa . Incluye el módulo de aprendizaje autodirigido de la Escuela Judicial Rodrigo Lara Bonilla sobre Valoración de la Prueba en Materia Civil y Comercial (V. M. Bernal Callejas).",
   "preguntas": [
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "El principio de necesidad de la prueba implica que:",
     "o": [
      "El juez puede fallar con su conocimiento privado de los hechos",
      "Toda decisión judicial debe fundarse en pruebas regular y oportunamente allegadas al proceso",
      "Basta la afirmación de la parte para tener por probado un hecho",
      "Solo la prueba documental fundamenta sentencias"
     ],
     "a": 1,
     "e": "Art. 164 CGP: el juez no puede basar su decisión en su conocimiento privado; requiere pruebas incorporadas con las formalidades legales.",
     "b": "Art. 164 CGP · Módulo EJRLB La Prueba Judicial",
     "d": 2
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "La carga dinámica de la prueba permite al juez:",
     "o": [
      "Invertir siempre la carga en contra del demandado",
      "Distribuir la carga, de oficio o a petición de parte, exigiendo probar a quien esté en mejor posición de hacerlo",
      "Eximir de prueba a la parte más débil sin motivación",
      "Trasladar la carga solo en procesos de responsabilidad médica"
     ],
     "a": 1,
     "e": "El art. 167 inc. 2º del CGP faculta al juez para distribuir la carga probatoria al decretar las pruebas o durante su práctica, según la mejor posición probatoria de cada parte, mediante decisión motivada y susceptible de recurso.",
     "b": "Art. 167 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "En el CGP, el decreto de pruebas de oficio es:",
     "o": [
      "Una facultad discrecional que el juez puede omitir libremente",
      "Un deber del juez cuando las considere útiles para verificar los hechos",
      "Procedente solo a petición del Ministerio Público",
      "Improcedente en segunda instancia"
     ],
     "a": 1,
     "e": "El art. 170 del CGP emplea el imperativo: el juez «deberá» decretar pruebas de oficio cuando sean útiles para la verificación de los hechos relacionados con las alegaciones de las partes.",
     "b": "Arts. 169 y 170 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "La valoración de las pruebas en el proceso civil se rige por:",
     "o": [
      "El sistema de tarifa legal",
      "La íntima convicción del juez",
      "La sana crítica, apreciando las pruebas en conjunto",
      "La prevalencia absoluta de la prueba documental"
     ],
     "a": 2,
     "e": "El art. 176 del CGP ordena apreciar las pruebas en conjunto, de acuerdo con las reglas de la sana crítica, exponiendo el mérito asignado a cada una.",
     "b": "Art. 176 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "Respecto de la autenticidad documental, el CGP establece que:",
     "o": [
      "Solo los documentos públicos se presumen auténticos",
      "Los documentos públicos y privados se presumen auténticos mientras no sean tachados de falsos o desconocidos",
      "Los documentos privados requieren siempre reconocimiento notarial",
      "Los mensajes de datos carecen de presunción de autenticidad"
     ],
     "a": 1,
     "e": "El art. 244 del CGP consagra una presunción general de autenticidad de los documentos, en cualquier forma, mientras no medie tacha de falsedad o desconocimiento.",
     "b": "Art. 244 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "La inasistencia injustificada del citado a interrogatorio de parte produce:",
     "o": [
      "Nulidad de la diligencia",
      "Confesión presunta de los hechos susceptibles de confesión contenidos en la demanda o su contestación",
      "Únicamente multa procesal",
      "Suspensión del proceso"
     ],
     "a": 1,
     "e": "El art. 205 del CGP dispone que la inasistencia, la renuencia a responder o las respuestas evasivas hacen presumir ciertos los hechos susceptibles de confesión.",
     "b": "Art. 205 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "En el CGP, la contradicción del dictamen pericial se ejerce principalmente mediante:",
     "o": [
      "La objeción por error grave",
      "La solicitud de comparecencia del perito a audiencia para ser interrogado, o la aportación de otro dictamen",
      "Un incidente de tacha",
      "La apelación del auto que lo decreta"
     ],
     "a": 1,
     "e": "El CGP eliminó la objeción por error grave del CPC; la contradicción se surte interrogando al perito en audiencia o presentando dictamen de contradicción (art. 228 CGP).",
     "b": "Art. 228 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "La prueba trasladada puede valorarse sin más formalidades cuando:",
     "o": [
      "Provenga de cualquier proceso, sin condición alguna",
      "Fue practicada a petición de la parte contra quien se aduce o con su audiencia",
      "La autorice el superior funcional",
      "Se trate exclusivamente de prueba documental"
     ],
     "a": 1,
     "e": "El art. 174 del CGP permite apreciar las pruebas practicadas válidamente en otro proceso si lo fueron a petición de la parte contra quien se aducen o con audiencia de ella; de lo contrario debe surtirse su contradicción.",
     "b": "Art. 174 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Régimen Probatorio",
     "q": "La valoración de las pruebas en el proceso civil se realiza",
     "o": [
      "según el sistema de tarifa legal",
      "por íntima convicción",
      "en conjunto, conforme a las reglas de la sana crítica",
      "dando prevalencia absoluta al documento público"
     ],
     "a": 2,
     "e": "El art. 176 del CGP ordena apreciar las pruebas en conjunto, de acuerdo con las reglas de la sana crítica, exponiendo el mérito asignado a cada una.",
     "b": "Art. 176 CGP",
     "d": 1
    },
    {
     "t": 2,
     "c": "Régimen Probatorio",
     "q": "Sobre la presunción de autenticidad documental del artículo 244 del CGP es cierto que:",
     "s": [
      "Cobija tanto los documentos públicos como los privados",
      "Exige el reconocimiento notarial previo del documento privado",
      "Se desvirtúa mediante la tacha de falsedad o el desconocimiento",
      "Excluye de su alcance los mensajes de datos"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3: la presunción es general y cede ante la tacha o el desconocimiento. No se requiere reconocimiento previo (2 falsa) y los mensajes de datos también se presumen auténticos (4 falsa).",
     "b": "Art. 244 CGP",
     "d": 2
    },
    {
     "t": 2,
     "c": "Régimen Probatorio",
     "q": "En relación con la carga de la prueba (art. 167 CGP) puede afirmarse que:",
     "s": [
      "Corresponde siempre y exclusivamente al demandante",
      "Incumbe a las partes probar el supuesto de hecho de las normas que consagran el efecto jurídico que persiguen",
      "La distribución dinámica de la carga solo procede a petición de parte",
      "El juez puede, de oficio, distribuir la carga al decretar las pruebas o durante su práctica, exigiendo probar a quien esté en mejor posición de hacerlo"
     ],
     "a": 2,
     "e": "Son correctas 2 y 4: la regla general del art. 167 y la facultad oficiosa de distribución dinámica. Las opciones 1 y 3 contradicen el texto de la norma.",
     "b": "Art. 167 CGP",
     "d": 2
    },
    {
     "t": 2,
     "c": "Régimen Probatorio",
     "q": "Sobre la confesión en el proceso civil es cierto que:",
     "s": [
      "Puede recaer sobre hechos que favorezcan exclusivamente al confesante",
      "Debe versar sobre hechos que produzcan consecuencias jurídicas adversas al confesante o que favorezcan a la parte contraria",
      "La inasistencia al interrogatorio de parte genera la nulidad de la diligencia",
      "La inasistencia injustificada del citado hace presumir ciertos los hechos susceptibles de confesión contenidos en la demanda o su contestación"
     ],
     "a": 2,
     "e": "Son correctas 2 y 4, conforme a los arts. 191 y 205 del CGP. La confesión no versa sobre hechos favorables al confesante (1 falsa) y la inasistencia no genera nulidad sino confesión presunta (3 falsa).",
     "b": "Arts. 191 y 205 CGP",
     "d": 3
    },
    {
     "t": 3,
     "c": "Régimen Probatorio",
     "af": "El juez civil solo puede decretar las pruebas que las partes soliciten oportunamente.",
     "rz": "El artículo 170 del CGP ordena al juez decretar pruebas de oficio cuando sean útiles para la verificación de los hechos relacionados con las alegaciones de las partes.",
     "a": 3,
     "e": "La afirmación es falsa precisamente porque la razón es verdadera: el CGP consagra el decreto oficioso de pruebas como un deber del juez.",
     "b": "Arts. 169 y 170 CGP",
     "d": 3
    },
    {
     "t": 3,
     "c": "Régimen Probatorio",
     "af": "El juramento estimatorio hace prueba del monto de la indemnización, frutos o mejoras reclamados mientras su cuantía no sea objetada por la parte contraria.",
     "rz": "La sanción por la estimación excesiva equivale al cincuenta por ciento (50%) de lo pedido en la demanda.",
     "a": 2,
     "e": "La afirmación es verdadera (art. 206 CGP, sin perjuicio del control oficioso ante estimación notoriamente injusta). La razón es falsa: la sanción es del 10% de la diferencia entre lo estimado y lo probado.",
     "b": "Art. 206 CGP",
     "d": 3
    },
    {
     "t": 1,
     "c": "Teoría de la Prueba",
     "q": "Durante la clase se insistió en que el estudio del régimen probatorio no puede comenzar en el artículo 164 del CGP sino en sus primeros artículos. Si en un caso concreto una norma probatoria presenta DUDAS sobre su alcance, el CGP ordena aclararlas mediante:",
     "o": [
      "La aplicación analógica de las normas que regulen casos semejantes",
      "Los principios constitucionales y los generales del derecho procesal, garantizando debido proceso, defensa e igualdad",
      "La costumbre judicial imperante en el respectivo distrito",
      "La interpretación que resulte más favorable al demandante"
     ],
     "a": 1,
     "e": "El art. 11 CGP resuelve las DUDAS acudiendo a los principios constitucionales y generales del derecho procesal. La analogía (opción A) es el mecanismo del art. 12 para VACÍOS o deficiencias, no para dudas — distinción que el docente subrayó expresamente.",
     "b": "CGP arts. 11 y 12",
     "d": 1
    },
    {
     "t": 1,
     "c": "Teoría de la Prueba",
     "q": "La demandante afirma: «me vendieron un anillo diciendo que era de oro y NO es de oro». Conforme a lo explicado en clase sobre las negaciones, esta afirmación:",
     "o": [
      "Es una negación indefinida y por tanto está exenta de prueba",
      "Es una negación definida, porque contiene un hecho concreto contrario susceptible de prueba (que el anillo es de otro material), y por tanto requiere prueba",
      "No requiere prueba porque quien niega no asume carga probatoria alguna",
      "Traslada automáticamente la carga de la prueba al vendedor demandado"
     ],
     "a": 1,
     "e": "La negación es DEFINIDA cuando «contiene en su vientre» un hecho concreto contrario demostrable — aquí, que el anillo es de plata o bronce, verificable por dictamen pericial. Solo las negaciones e indefiniciones que no ocultan una afirmación concreta contraria quedan exentas de prueba (art. 167 inc. final CGP).",
     "b": "CGP art. 167",
     "d": 2
    },
    {
     "t": 3,
     "c": "Teoría de la Prueba",
     "af": "Quien frente a un pagaré con su firma alega «yo jamás he estado en esa ciudad» no queda relevado de prueba por tratarse de una negación",
     "rz": "el documento se presume auténtico, de modo que la carga de desvirtuar lo que el título acredita concretamente recae en quien lo desconoce",
     "a": 0,
     "e": "Ambas son verdaderas y la razón explica la afirmación: como el documento goza de presunción de autenticidad (art. 244 CGP), la negación del ejecutado en realidad equivale a tachar de falso el título, y la carga de desvirtuarlo es suya. Fue el ejemplo exacto trabajado en clase.",
     "b": "CGP arts. 167 y 244",
     "d": 2
    },
    {
     "t": 1,
     "c": "Teoría de la Prueba",
     "q": "Sobre la comisión del corretaje inmobiliario cuando las partes nada pactaron, el docente explicó que se paga el 3% en predios urbanos y el 5% en rurales. Ese porcentaje obliga porque:",
     "o": [
      "Está fijado en el Código de Comercio como norma supletiva",
      "Es costumbre mercantil certificada por las cámaras de comercio, fuente supletiva y subordinada que constituye derecho a falta de estipulación",
      "Constituye un principio general del derecho reconocido jurisprudencialmente",
      "Es una tarifa regulada por la Superintendencia de Industria y Comercio"
     ],
     "a": 1,
     "e": "No existe norma legal que fije la comisión: rige la costumbre — «norma jurídica aplicada sin haber sido expedida por el Parlamento» (Valencia Zea) — certificada por las cámaras de comercio. Es fuente supletiva y subordinada: prevalece el pacto de las partes y nunca puede aplicarse contra la ley.",
     "b": "C. de Co. arts. 3-9 · Ley 153/1887 art. 13",
     "d": 1
    },
    {
     "t": 2,
     "c": "Teoría de la Prueba",
     "q": "Conforme al CGP y a lo visto en clase, NO requieren prueba:",
     "s": [
      "Los hechos notorios",
      "Las afirmaciones o negaciones indefinidas",
      "Los hechos presumidos legalmente, mientras la presunción no sea desvirtuada",
      "Los hechos alegados por una parte profesional del derecho, por la fe debida a su juramento"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (art. 167 inc. final y régimen de presunciones del CGP). La 4 es falsa: la condición de abogado no exime de probar; el juramento solo tiene efectos probatorios en los casos que la ley expresamente señala (p. ej., juramento estimatorio, art. 206).",
     "b": "CGP arts. 166, 167 y 206",
     "d": 2
    },
    {
     "t": 3,
     "c": "Teoría de la Prueba",
     "af": "En el litisconsorcio facultativo la confesión de uno de los litisconsortes produce plenos efectos de confesión respecto de él, y frente a los demás se aprecia como testimonio",
     "rz": "los litisconsortes facultativos son considerados en sus relaciones con la contraparte como litigantes separados, cuyos actos no redundan en provecho ni en perjuicio de los otros",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: precisamente porque el art. 60 CGP los trata como litigantes separados, cada uno puede confesar, transigir o desistir por su cuenta, y su declaración solo vale como confesión contra sí mismo (arts. 60 y 192 CGP).",
     "b": "CGP arts. 60 y 192",
     "d": 3
    },
    {
     "t": 1,
     "c": "Teoría de la Prueba",
     "q": "En un proceso de nulidad relativa de contrato adelantado contra varios litisconsortes NECESARIOS, solo uno de ellos admite el hecho perjudicial. Técnicamente:",
     "o": [
      "Hay confesión plena, pues basta la aceptación de cualquiera de ellos",
      "No hay confesión, pero sí una declaración de parte que el juez puede valorar y que incluso puede bastarle para formar su convencimiento",
      "La admisión carece de todo valor probatorio",
      "La admisión se tiene por confesión ficta de todos los litisconsortes"
     ],
     "a": 1,
     "e": "En el litisconsorcio necesario la confesión solo se configura si el hecho es aceptado por TODOS (art. 192 CGP). La admisión de uno no es confesión, pero no es inocua: queda como declaración de parte sometida a la sana crítica, y el docente subrayó que puede ser decisiva para el convencimiento del juez.",
     "b": "CGP arts. 61 y 192",
     "d": 3
    },
    {
     "t": 1,
     "c": "Teoría de la Prueba",
     "q": "El litisconsorcio CUASINECESARIO se caracteriza porque:",
     "o": [
      "El sujeto debe ser citado obligatoriamente so pena de nulidad",
      "La sentencia no le produce ningún efecto si no comparece",
      "Su comparecencia es facultativa, como en el voluntario, pero una vez interviene su actuación se rige por las reglas del necesario, pues la sentencia lo alcanza extraprocesalmente",
      "Solo puede intervenir en segunda instancia como coadyuvante"
     ],
     "a": 2,
     "e": "Es «casi necesario»: la providencia surte efectos respecto de él aunque no comparezca (por eso puede presentarse en cualquier momento), pero no es obligatorio citarlo; si interviene, se le aplican las reglas del necesario — incluida la posibilidad de aportar su propio dictamen (art. 62 CGP).",
     "b": "CGP art. 62",
     "d": 2
    },
    {
     "t": 2,
     "c": "Teoría de la Prueba",
     "q": "Sobre la costumbre como fuente del derecho en Colombia son ciertas:",
     "s": [
      "Prevalecen sobre ella las estipulaciones contractuales de las partes",
      "Puede aplicarse aun contra la ley cuando esté certificada por la cámara de comercio",
      "Tras la Constitución de 1991 la Corte Constitucional declaró exequible su valor de fuente, entendiendo que el «imperio de la ley» del art. 230 alude al ordenamiento jurídico",
      "Sirve además para determinar el sentido de palabras o frases técnicas y para interpretar actos y convenios"
     ],
     "a": 1,
     "e": "Correctas 1 y 3 (y también la 4 — pero bajo la clave PGN la combinación válida disponible que contiene las ciertas sin la falsa es la que excluye la 2). La costumbre jamás rige contra la ley: es fuente supletiva y subordinada (Ley 153/1887 art. 13; C-486/1993). OJO: este ítem ilustra por qué en el examen debes buscar la combinación que NO contenga el enunciado falso.",
     "b": "Ley 153/1887 art. 13 · C-486/1993 · C. de Co. art. 5",
     "d": 3
    },
    {
     "t": 3,
     "c": "Teoría de la Prueba",
     "af": "El juez que niega la aplicación del derecho sustancial demostrado en el proceso por un rigorismo formal incurre en exceso ritual manifiesto, corregible incluso por vía de tutela",
     "rz": "las normas procesales son un fin en sí mismas y su observancia estricta prevalece sobre el derecho material de las partes",
     "a": 2,
     "e": "La afirmación es verdadera (defecto procedimental por exceso ritual manifiesto, doctrina constitucional reiterada); la razón es FALSA: el proceso es instrumento para la efectividad del derecho sustancial (art. 228 C.P. y art. 11 CGP) — como decía Couture, citado en clase, «hay que tutelar el proceso para que él pueda tutelar el derecho».",
     "b": "C.P. art. 228 · CGP art. 11",
     "d": 3
    },
    {
     "t": 1,
     "c": "Teoría de la Prueba",
     "q": "Cuando en el trámite de un proceso se presenta un VACÍO — por ejemplo, muere el perito antes de la audiencia y ninguna norma resuelve qué hacer —, el juez debe:",
     "o": [
      "Suspender el proceso hasta que el legislador regule la materia",
      "Acudir a la analogía y, a falta de ella, determinar la forma de realizar el acto observando los principios y procurando hacer efectivo el derecho sustancial",
      "Rechazar de plano la prueba pericial",
      "Aplicar por remisión el Código de Procedimiento Penal"
     ],
     "a": 1,
     "e": "Art. 12 CGP: los vacíos se llenan con analogía y, en su defecto, el juez fija la manera de realizar el acto con apoyo en los principios constitucionales y generales, buscando la efectividad del derecho sustancial. El ejemplo del perito fallecido fue el usado en clase.",
     "b": "CGP art. 12",
     "d": 1
    },
    {
     "t": 2,
     "c": "Teoría de la Prueba",
     "q": "En materia de conflictos entre normas, la Ley 57 de 1887 (art. 5º) y lo explicado en clase indican que:",
     "s": [
      "La disposición constitucional prefiere siempre a la legal",
      "La norma especial prevalece sobre la general",
      "Entre normas de igual especialidad dentro del mismo código, prefiere la posterior",
      "La costumbre local deroga la ley nacional posterior"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 — reglas clásicas de solución de antinomias recordadas por el docente como herramienta previa al estudio del régimen probatorio. La 4 es insostenible: la costumbre nunca deroga la ley.",
     "b": "Ley 57/1887 art. 5",
     "d": 2
    },
    {
     "t": 1,
     "d": 2,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "Según el principio de ADQUISICIÓN (o comunidad de la prueba), desarrollado en el módulo de la Escuela Judicial, una vez la prueba se aporta al proceso:",
     "o": [
      "Pertenece exclusivamente a la parte que la aportó y puede retirarla cuando quiera",
      "Pertenece al proceso y no a la parte que la aportó o invoca, de modo que sus resultados benefician o perjudican a cualquiera",
      "Solo puede ser valorada si ambas partes lo consienten",
      "Pierde valor si la parte que la aportó pierde el proceso"
     ],
     "a": 1,
     "e": "El principio de adquisición o comunidad de la prueba significa que esta pertenece al proceso, no al sujeto que la aporta: sus resultados sobre los hechos sirven al proceso con independencia de quién la trajo. Por eso, salvo casos como el desistimiento de prueba no practicada, la parte no puede retirar la prueba que ya obra en el expediente.",
     "b": "Módulo EJRLB Valoración de la Prueba · CGP arts. 175, 316"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "El módulo de la Escuela Judicial señala que NO son objeto de prueba, entre otros:",
     "o": [
      "Los hechos controvertidos por las partes",
      "Las normas jurídicas nacionales, los hechos notorios, las negaciones indefinidas y los hechos imposibles",
      "Los hechos alegados en la demanda",
      "Los dictámenes periciales"
     ],
     "a": 1,
     "e": "Por el principio iura novit curia, las normas jurídicas nacionales no se prueban (al juez se le dan los hechos y él aplica el derecho). Tampoco los hechos notorios, las negaciones o afirmaciones indefinidas, ni los hechos imposibles. Los hechos controvertidos sí son el objeto central de la prueba.",
     "b": "Módulo EJRLB Valoración · CGP art. 167"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "El sistema de valoración probatoria que rige de manera predominante en el proceso civil colombiano, según el módulo, es:",
     "o": [
      "La tarifa legal o prueba tasada, que fija de antemano el valor de cada medio",
      "El sistema de libre valoración o libre apreciación motivada, conforme a las reglas de la sana crítica",
      "La íntima convicción sin necesidad de motivación",
      "El sistema de ordalías"
     ],
     "a": 1,
     "e": "El proceso civil colombiano adopta la libre valoración motivada (sana crítica, arts. 176 y 187 CGP): el juez aprecia las pruebas en conjunto según las reglas de la lógica, la ciencia y la experiencia, motivando su decisión. Superó la tarifa legal, aunque subsisten algunas reglas de valor probatorio predeterminado.",
     "b": "Módulo EJRLB Valoración · CGP arts. 176, 187"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "La regla técnica de la UNIDAD de la prueba (art. 176 CGP), destacada en el módulo, impone al juez:",
     "o": [
      "Valorar cada prueba de forma aislada e independiente",
      "Apreciar las pruebas en conjunto, de acuerdo con las reglas de la sana crítica, buscando la concordancia entre los distintos medios",
      "Preferir siempre la prueba documental sobre las demás",
      "Descartar las pruebas que se contradigan entre sí"
     ],
     "a": 1,
     "e": "La unidad de la prueba obliga a valorar el acervo en conjunto (art. 176 CGP): el juez da por establecidos los hechos según la armonía o concordancia entre los distintos medios, no examinándolos por separado. Es una manifestación de la sana crítica.",
     "b": "Módulo EJRLB Valoración · CGP art. 176"
    },
    {
     "t": 3,
     "d": 2,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "af": "Toda prueba ilícita es ilegal, pero no toda prueba ilegal es ilícita",
     "rz": "la ilicitud se predica de la prueba que vulnera derechos fundamentales, mientras que la ilegalidad puede derivar del solo incumplimiento de requisitos legales de producción o incorporación",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el módulo distingue licitud (no violar derechos fundamentales) de legalidad (cumplir la forma legal). La prueba ilícita (que lesiona un derecho fundamental) siempre es además ilegal; pero una prueba puede ser ilegal por un defecto de forma sin haber vulnerado un derecho fundamental.",
     "b": "Módulo EJRLB Valoración · Principios de licitud y legalidad"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "Conforme al módulo, la finalidad de la prueba, según la posición mayoritaria, es:",
     "o": [
      "Presentar el mayor número posible de medios probatorios",
      "Llevar al juez el convencimiento o certeza sobre los hechos, para reconstruir la verdad y decidir",
      "Sustituir la motivación de la sentencia",
      "Favorecer a la parte que la aporta"
     ],
     "a": 1,
     "e": "La finalidad de la prueba es llevar al juzgador la certeza o convencimiento sobre los hechos, procurando reconstruir la verdad. El módulo recalca que vencer no es aportar más pruebas, sino que las aportadas recaigan sobre el verdadero tema de prueba y convenzan al juez.",
     "b": "Módulo EJRLB Valoración · Fin de la prueba"
    },
    {
     "t": 3,
     "d": 3,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "af": "El decreto de pruebas de oficio por el juez no afecta su imparcialidad",
     "rz": "al decretarlas, el juez asume la defensa de los intereses de una de las partes y sustituye su actividad probatoria",
     "a": 2,
     "e": "La afirmación es verdadera; la razón es FALSA. Según la Corte Constitucional citada en el módulo (T-264/2009), el decreto oficioso de pruebas implica un compromiso del juez con la verdad y el derecho sustancial, no con las partes: no las desplaza ni asume la defensa de sus intereses, siempre que garantice contradicción. La razón invierte ese sentido. Clave C.",
     "b": "Módulo EJRLB Valoración · C. Const. T-264/2009 · CGP art. 228 C.P."
    },
    {
     "t": 1,
     "d": 1,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "En la clasificación de la prueba por su estructura, expuesta en el módulo, las pruebas PERSONALES son aquellas en que:",
     "o": [
      "Una cosa u objeto transmite o contiene la información (como el documento)",
      "Una persona es la fuente principal de la información (interrogatorio, testimonio, dictamen pericial)",
      "La información llega directamente al juez por inspección",
      "El valor está tasado por la ley"
     ],
     "a": 1,
     "e": "Por su estructura, las pruebas personales tienen como fuente a una persona (interrogatorio de parte, testimonio, dictamen pericial), mientras las reales se apoyan en una cosa u objeto que contiene o transmite la información, como el documento.",
     "b": "Módulo EJRLB Valoración · Clasificación de la prueba (Azula Camacho)"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "La PRUEBA TRASLADADA (art. 174 CGP), según el módulo, es válida en el nuevo proceso siempre que, entre otros requisitos:",
     "o": [
      "Se practique nuevamente en su totalidad ante el nuevo juez",
      "Haya sido practicada válidamente, se respeten la publicidad y la contradicción, y no esté sujeta a reserva",
      "La aporte la misma parte que la pidió originalmente",
      "Provenga siempre de un proceso de la misma jurisdicción"
     ],
     "a": 1,
     "e": "La prueba trasladada (art. 174 CGP) puede usarse en otro proceso si fue válidamente practicada, se garantiza contradicción y publicidad, obra en copia debida y no está sujeta a reserva, respetando las oportunidades probatorias. Puede provenir incluso de otra jurisdicción o país.",
     "b": "Módulo EJRLB Valoración · CGP art. 174"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "En un proceso de declaración de pertenencia, el juez advierte que ninguna de las partes solicitó la inspección judicial del inmueble. Conforme al módulo y al CGP, lo correcto es:",
     "o": [
      "Fallar con las pruebas existentes, pues no puede decretar pruebas no pedidas",
      "Decretar de oficio la inspección judicial, pues en ese proceso el CGP la exige y el juez tiene el deber de esclarecer los hechos",
      "Declarar la nulidad del proceso",
      "Rechazar la demanda por falta de pruebas"
     ],
     "a": 1,
     "e": "El módulo destaca que en procesos como la declaración de pertenencia (y en servidumbres o bienes vacantes y mostrencos) el CGP impone la práctica de la inspección judicial; además, el juez tiene el deber-facultad de decretar pruebas de oficio (art. 169 CGP; art. 228 C.P.) para esclarecer los hechos, sin que ello afecte su imparcialidad.",
     "b": "Módulo EJRLB Valoración · CGP arts. 169, 375"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "Sobre la carga de la prueba (art. 167 CGP), el módulo recuerda que, como regla general:",
     "o": [
      "El juez debe probar de oficio todos los hechos",
      "Incumbe a las partes probar el supuesto de hecho de las normas que consagran el efecto jurídico que persiguen",
      "La carga siempre recae en el demandado",
      "Basta afirmar los hechos sin probarlos"
     ],
     "a": 1,
     "e": "El art. 167 CGP asigna a cada parte la carga de probar los supuestos de hecho de las normas cuyo efecto jurídico persigue; e introduce la carga dinámica, permitiendo al juez distribuirla según quién esté en mejor posición de probar. Sin prueba de los hechos, no hay decisión favorable.",
     "b": "Módulo EJRLB Valoración · CGP art. 167 · Carga dinámica"
    },
    {
     "t": 3,
     "d": 3,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "af": "El juez puede fundar su decisión en su conocimiento privado de los hechos",
     "rz": "la necesidad de la prueba exige que las decisiones judiciales se soporten en las pruebas del proceso, para no privar a las partes de la posibilidad de controvertirlas",
     "a": 3,
     "e": "La afirmación es FALSA y la razón es VERDADERA. Por la regla de la necesidad de la prueba, el juez no puede decidir con su conocimiento privado: debe soportar su decisión en las pruebas del proceso; si conoce un hecho, lo que procede es decretar prueba de oficio para incorporarlo con contradicción. La razón explica precisamente por qué la afirmación es falsa. Clave D.",
     "b": "Módulo EJRLB Valoración · Necesidad de la prueba · CGP art. 164"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "El módulo, siguiendo a Devis Echandía, describe la evolución histórica de la prueba en fases. La fase CIENTÍFICA se caracteriza por:",
     "o": [
      "Resolver los litigios mediante duelos y ordalías (juicios de Dios)",
      "Permitir al juez investigar la verdad y apreciar libremente las pruebas con criterios de lógica y psicología, dentro de la ley",
      "Fijar por ley el valor de cada prueba (tarifa legal)",
      "Confiar la decisión al juramento purgatorio"
     ],
     "a": 1,
     "e": "La fase científica supone un proceso con impronta inquisitiva que faculta al juez para investigar la verdad y valorar libremente las pruebas aplicando lógica y psicología, dentro de las formalidades legales. Se distingue de la mística (ordalías), la legal (tarifa) y la sentimental (íntima convicción del jurado).",
     "b": "Módulo EJRLB Valoración · Devis Echandía · Fases de la prueba"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "Respecto de la prueba de la LEY EXTRANJERA y la COSTUMBRE, el módulo indica que:",
     "o": [
      "El juez colombiano está obligado a conocer toda ley extranjera",
      "La ley extranjera debe probarse (y traducirse si no está en español), y la costumbre mercantil extranjera puede acreditarse por certificación consular o de la cámara de comercio, o por abogados del lugar",
      "Nunca requieren prueba",
      "Solo se prueban mediante testigos presenciales"
     ],
     "a": 1,
     "e": "El juez local no está obligado a conocer la ley extranjera: quien la invoca debe probarla y aportar traducción oficial si no está en castellano. La costumbre mercantil extranjera se acredita por certificación del cónsul (colombiano o de nación amiga), de la cámara de comercio, o mediante dos abogados del lugar de reconocida honorabilidad.",
     "b": "Módulo EJRLB Valoración · CGP · C. de Co."
    },
    {
     "t": 1,
     "d": 2,
     "c": "Régimen Probatorio · Módulo EJRLB (Valoración)",
     "q": "El principio de INMEDIACIÓN, según el módulo y el art. 171 del CGP, ordena que:",
     "o": [
      "Las pruebas las practique cualquier funcionario administrativo",
      "El juez practique personalmente las pruebas, pudiendo apoyarse en medios tecnológicos para no interrumpir esa relación directa",
      "Las pruebas se practiquen siempre por fuera del proceso",
      "El juez no intervenga en la práctica de pruebas"
     ],
     "a": 1,
     "e": "La inmediación (art. 171 CGP) exige que el juez practique personalmente las pruebas para percibirlas de forma directa; cuando no le es posible estar físicamente, puede valerse de medios tecnológicos (reforzados por el D. 806/2020 y la Ley 2213/2022) para preservar esa relación directa y evitar la comisión.",
     "b": "Módulo EJRLB Valoración · CGP art. 171"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Régimen Probatorio · Carga de la prueba",
     "q": "En un proceso de responsabilidad médica, la información clave sobre lo ocurrido en la cirugía obra en la historia clínica que controla la entidad demandada; al paciente le resulta muy difícil probar la falla. Conforme al CGP, el juez puede:",
     "o": [
      "Invertir la carga sin informarlo a las partes, en la sentencia",
      "Presumir la culpa del médico automáticamente por tratarse de salud",
      "Aplicar la carga dinámica de la prueba (art. 167 CGP), distribuyéndola según quién esté en mejor posición de probar, y anunciarlo para garantizar contradicción",
      "Exigir siempre al demandante la prueba plena de la culpa, sin excepción"
     ],
     "a": 2,
     "e": "El art. 167 CGP permite la carga dinámica: el juez puede distribuir la carga según quién esté en mejor posición de probar, anunciándolo oportunamente para no sorprender a las partes y garantizar la contradicción. · Exigir siempre la prueba plena al demandante desconoce la carga dinámica. · Presumir la culpa 'automáticamente' por ser salud carece de sustento legal. · Invertir la carga sorpresivamente en la sentencia vulnera el debido proceso: debe anunciarse antes.",
     "b": "CGP art. 167 · carga dinámica de la prueba"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Régimen Probatorio · Valoración",
     "q": "El juez cuenta con un testimonio favorable al demandante, un dictamen pericial en sentido contrario y documentos que apoyan parcialmente a ambos. Debe valorar el conjunto. Conforme al CGP:",
     "o": [
      "Debe seguir el dictamen pericial de manera vinculante",
      "Debe preferir el documento por tener siempre mayor valor tarifado",
      "Debe descartar el testimonio por contradecir al perito",
      "Debe apreciar las pruebas en conjunto conforme a las reglas de la sana crítica, exponiendo el mérito de cada una, sin que exista tarifa legal que imponga jerarquía"
     ],
     "a": 3,
     "e": "Rige la sana crítica y la unidad de la prueba: el juez valora el acervo en conjunto según lógica, ciencia y experiencia, motivando el mérito de cada medio, sin tarifa legal que imponga jerarquía (CGP arts. 176, 232, 280). · Preferir el documento por 'valor tarifado' revive un sistema superado. · Seguir el perito 'de manera vinculante' desconoce que el dictamen no obliga al juez. · Descartar el testimonio solo por contradecir al perito omite la valoración conjunta.",
     "b": "CGP arts. 176, 232, 280 · sana crítica y unidad de la prueba"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Régimen Probatorio · Oportunidades",
     "q": "Una parte pretende aportar una prueba documental decisiva después de vencida la etapa probatoria, alegando que la conoció tarde. Conforme al CGP, la prueba:",
     "o": [
      "Se admite libremente en cualquier momento antes de la sentencia",
      "Se rechaza siempre: fuera de la oportunidad no cabe prueba alguna",
      "Puede admitirse excepcionalmente si se dan los supuestos legales de prueba sobreviniente o de hechos nuevos, garantizando la contradicción",
      "Debe practicarse de oficio por el juez sin control de las partes"
     ],
     "a": 2,
     "e": "Las oportunidades probatorias son preclusivas, pero la ley admite excepciones para pruebas sobre hechos nuevos o sobrevinientes, con garantía de contradicción (CGP arts. 173, 174). · Afirmar que 'nunca' cabe prueba fuera de oportunidad ignora esas excepciones. · Sostener que se admite 'libremente en cualquier momento' desconoce la preclusión. · Convertirla en prueba de oficio sin control de partes vulnera la contradicción.",
     "b": "CGP arts. 173-174 · oportunidades y prueba sobreviniente"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Régimen Probatorio · Documentos",
     "q": "El demandado tacha de falso un documento privado aportado por el demandante, aduciendo que la firma no es suya. Conforme al CGP, la consecuencia procesal es que:",
     "o": [
      "El documento queda automáticamente excluido por la sola tacha",
      "Se abre el trámite de tacha de falsedad, correspondiendo a quien la alega probar la falsedad, y el juez la resuelve valorando la prueba (incluida la pericial)",
      "La tacha suspende indefinidamente el proceso",
      "La carga de probar la autenticidad recae siempre en quien aportó el documento, sin excepción"
     ],
     "a": 1,
     "e": "La tacha de falsedad abre un trámite incidental en el que, por regla, quien tacha debe probar la falsedad, y el juez decide valorando la prueba, incluida la pericial grafológica (CGP arts. 269-270). · La exclusión 'automática' por la sola tacha desconoce que debe probarse. · Afirmar que la autenticidad siempre la prueba el aportante ignora las reglas de presunción de autenticidad de los documentos y la carga de quien tacha. · Sostener que suspende 'indefinidamente' el proceso desnaturaliza el trámite incidental.",
     "b": "CGP arts. 244, 269-270 · autenticidad y tacha de falsedad"
    }
   ],
   "rel": "transversal",
   "ambito": "Transversal · Teoría General de la Prueba (conocimientos generales de todos los cargos), con aplicación civil y comercial"
  },
  {
   "id": "constitucional",
   "numero": "T4",
   "fecha": "Tema",
   "titulo": "Derecho Constitucional y Tutela",
   "docente": "Banco consolidado · módulos EJRLB y metodología PGN",
   "resumen": "Acción de tutela, control de constitucionalidad, precedente, bloque de constitucionalidad y jurisprudencia estructural de la Corte. Incluye la sesión de Acción de Tutela e incidente de desacato (Dra. Laura Huertas). Incluye la sesión de Derecho Constitucional del Dr. Edgar Quiroga (reforma, sustitución, bloque, gerencia pública).",
   "preguntas": [
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "El término con que cuenta el juez para fallar una acción de tutela es de:",
     "o": [
      "48 horas",
      "5 días",
      "10 días",
      "20 días"
     ],
     "a": 2,
     "e": "El art. 86 de la Constitución y el Decreto 2591 de 1991 fijan un término improrrogable de diez (10) días para proferir el fallo de tutela.",
     "b": "Art. 86 C.P. · Decreto 2591 de 1991",
     "d": 1
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "El fallo de tutela puede impugnarse dentro de:",
     "o": [
      "Los tres días siguientes a su notificación",
      "Los diez días siguientes",
      "Las 48 horas siguientes",
      "La misma audiencia"
     ],
     "a": 0,
     "e": "El art. 31 del Decreto 2591/91 concede tres días desde la notificación para impugnar; el juez de segunda instancia resuelve dentro de los veinte días siguientes (art. 32).",
     "b": "Arts. 31 y 32 Decreto 2591 de 1991",
     "d": 1
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "La tutela contra particulares procede, entre otros casos, cuando:",
     "o": [
      "El particular tenga mayor capacidad económica que el accionante",
      "El accionante se halle en estado de subordinación o indefensión respecto del particular",
      "Exista cualquier conflicto contractual",
      "El particular sea comerciante"
     ],
     "a": 1,
     "e": "El art. 86 C.P. y el art. 42 del Decreto 2591/91 la admiten cuando el particular presta un servicio público, su conducta afecta grave y directamente el interés colectivo, o el solicitante está en subordinación o indefensión.",
     "b": "Art. 86 C.P. · Art. 42 Decreto 2591 de 1991",
     "d": 1
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "Frente al principio de subsidiariedad, la tutela procede como mecanismo transitorio cuando:",
     "o": [
      "El accionante no conoce los otros medios de defensa",
      "Se busca evitar un perjuicio irremediable",
      "Han caducado las acciones ordinarias",
      "El juez ordinario es lejano geográficamente"
     ],
     "a": 1,
     "e": "Aun existiendo otro medio de defensa judicial, la tutela procede transitoriamente para evitar un perjuicio irremediable, caracterizado por su inminencia, gravedad, urgencia e impostergabilidad.",
     "b": "Art. 86 C.P. · Jurisprudencia constitucional",
     "d": 1
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "La excepción de inconstitucionalidad (art. 4º C.P.) implica que:",
     "o": [
      "El juez expulsa la norma del ordenamiento con efectos erga omnes",
      "El juez inaplica la norma incompatible con la Constitución para el caso concreto, con efectos inter partes",
      "Solo la Corte Constitucional puede inaplicar normas",
      "La norma queda suspendida para todos los procesos futuros"
     ],
     "a": 1,
     "e": "En caso de incompatibilidad entre la Constitución y la ley se aplican preferentemente las disposiciones constitucionales; la inaplicación opera para el caso concreto, sin retirar la norma del ordenamiento.",
     "b": "Art. 4º C.P.",
     "d": 2
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "Según el art. 7º del CGP, cuando el juez decide apartarse de la doctrina probable o del precedente debe:",
     "o": [
      "Solicitar autorización al superior",
      "Exponer clara y razonadamente los fundamentos jurídicos que justifican su decisión",
      "Suspender el proceso y consultar a la Corte",
      "Abstenerse de fallar"
     ],
     "a": 1,
     "e": "El juez está sometido al imperio de la ley y debe tener en cuenta la doctrina probable; puede apartarse cumpliendo cargas de transparencia y de argumentación suficiente.",
     "b": "Art. 7º CGP · C-836/01",
     "d": 2
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "Integran el bloque de constitucionalidad en sentido estricto:",
     "o": [
      "Todas las leyes estatutarias",
      "Los tratados de derechos humanos ratificados por Colombia que prohíben su limitación en estados de excepción",
      "Los decretos reglamentarios",
      "La jurisprudencia de todos los tribunales internacionales"
     ],
     "a": 1,
     "e": "El art. 93 C.P. otorga prevalencia en el orden interno a los tratados de derechos humanos ratificados que no pueden suspenderse en estados de excepción, y ordena interpretar los derechos de conformidad con ellos.",
     "b": "Art. 93 C.P.",
     "d": 1
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "El término general para resolver un derecho de petición es de:",
     "o": [
      "10 días hábiles",
      "15 días hábiles",
      "30 días hábiles",
      "5 días hábiles"
     ],
     "a": 1,
     "e": "La Ley 1755 de 2015 fija 15 días hábiles como regla general, 10 días para peticiones de documentos e información y 30 días para consultas.",
     "b": "Ley 1755 de 2015 (art. 14)",
     "d": 1
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "El término improrrogable con que cuenta el juez para proferir el fallo de tutela es de",
     "o": [
      "48 horas",
      "5 días",
      "10 días",
      "20 días"
     ],
     "a": 2,
     "e": "El art. 86 de la Constitución y el Decreto 2591 de 1991 fijan un término improrrogable de diez (10) días para fallar la acción de tutela.",
     "b": "Art. 86 C.P. · Decreto 2591 de 1991",
     "d": 1
    },
    {
     "t": 1,
     "c": "Constitucional y Tutela",
     "q": "El plazo general establecido para dar respuesta a un derecho de petición es de",
     "o": [
      "ocho días hábiles",
      "doce días hábiles",
      "quince días hábiles",
      "veinte días hábiles"
     ],
     "a": 2,
     "e": "En virtud del art. 14 de la Ley 1437 de 2011, sustituido por la Ley 1755 de 2015, el término general es de quince (15) días hábiles; diez para petición de documentos y treinta para consultas.",
     "b": "Ley 1755 de 2015 (art. 14 CPACA)",
     "d": 1
    },
    {
     "t": 2,
     "c": "Constitucional y Tutela",
     "q": "La acción de tutela contra particulares procede cuando:",
     "s": [
      "El particular tiene mayor capacidad económica que el accionante",
      "Existe cualquier controversia contractual entre particulares",
      "El particular ostenta la calidad de comerciante",
      "El solicitante se halla en estado de subordinación o indefensión respecto del particular"
     ],
     "a": 3,
     "e": "Solo es correcta la opción 4: la tutela contra particulares procede cuando prestan un servicio público, su conducta afecta grave y directamente el interés colectivo, o el solicitante está en subordinación o indefensión (art. 86 C.P. y art. 42 Decreto 2591/91).",
     "b": "Art. 86 C.P. · Art. 42 Decreto 2591 de 1991",
     "d": 2
    },
    {
     "t": 2,
     "c": "Constitucional y Tutela",
     "q": "Respecto de los términos de la acción de tutela es cierto que:",
     "s": [
      "El juez de primera instancia debe fallar dentro de los diez (10) días siguientes",
      "El fallo puede impugnarse dentro de los tres (3) días siguientes a su notificación",
      "El juez de segunda instancia cuenta con veinte (20) días para resolver la impugnación",
      "El plazo para el cumplimiento del fallo puede exceder las cuarenta y ocho (48) horas cuando el juez lo autorice"
     ],
     "a": 0,
     "e": "Las opciones 1, 2 y 3 corresponden a los arts. 29, 31 y 32 del Decreto 2591 de 1991. La opción 4 es falsa: el art. 29 num. 5 dispone que el plazo para el cumplimiento del fallo en ningún caso puede exceder las 48 horas.",
     "b": "Arts. 29, 31 y 32 Decreto 2591 de 1991",
     "d": 2
    },
    {
     "t": 2,
     "c": "Constitucional y Tutela",
     "q": "Sobre el artículo 93 de la Constitución y el bloque de constitucionalidad puede afirmarse que:",
     "s": [
      "Los tratados de derechos humanos ratificados por Colombia que prohíben su limitación en estados de excepción prevalecen en el orden interno",
      "Todos los tratados comerciales suscritos por Colombia integran el bloque en sentido estricto",
      "Los derechos y deberes constitucionales se interpretan de conformidad con los tratados internacionales de derechos humanos ratificados por Colombia",
      "Los decretos reglamentarios del Gobierno integran el bloque de constitucionalidad"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3, que reproducen los dos incisos del art. 93 C.P. Los tratados comerciales y los decretos reglamentarios no integran el bloque en sentido estricto.",
     "b": "Art. 93 C.P.",
     "d": 3
    },
    {
     "t": 3,
     "c": "Constitucional y Tutela",
     "af": "La acción de tutela procede para obtener la protección de los derechos colectivos.",
     "rz": "Los derechos e intereses colectivos se protegen a través de las acciones populares y de grupo.",
     "a": 3,
     "e": "La afirmación es falsa: el art. 6 num. 3 del Decreto 2591 de 1991 declara improcedente la tutela para proteger derechos colectivos. La razón es verdadera: su protección corresponde a las acciones del art. 88 de la Constitución.",
     "b": "Art. 6 num. 3 Decreto 2591 de 1991 · Art. 88 C.P.",
     "d": 3
    },
    {
     "t": 3,
     "c": "Constitucional y Tutela",
     "af": "El término general para resolver el derecho de petición es de quince días hábiles.",
     "rz": "El juez de tutela debe proferir su fallo dentro del término improrrogable de diez días.",
     "a": 1,
     "e": "Ambas proposiciones son verdaderas (Ley 1755 de 2015 y art. 86 C.P.), pero pertenecen a instituciones distintas: el término de la tutela no explica el término del derecho de petición.",
     "b": "Ley 1755 de 2015 · Art. 86 C.P.",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "La sentencia mediante la cual la Corte Constitucional, al constatar una omisión legislativa relativa, incorpora al precepto el contenido normativo indebidamente excluido, se denomina",
     "o": [
      "sentencia interpretativa o condicionada simple",
      "sentencia integradora o aditiva",
      "sentencia sustitutiva",
      "sentencia inhibitoria"
     ],
     "a": 1,
     "e": "En las sentencias integradoras o aditivas la Corte adiciona el supuesto omitido (por ejemplo, extendiendo un beneficio a un grupo excluido) para reparar la omisión legislativa relativa violatoria de la igualdad.",
     "b": "Jurisprudencia constitucional sobre modulación de sentencias",
     "d": 1
    },
    {
     "t": 2,
     "c": "Derecho Constitucional",
     "q": "Constituyen requisitos GENERALES de procedencia de la tutela contra providencias judiciales, según la sentencia C-590 de 2005:",
     "s": [
      "Que el asunto tenga evidente relevancia constitucional",
      "Que se hayan agotado todos los medios ordinarios y extraordinarios de defensa judicial, salvo perjuicio irremediable",
      "Que se cumpla el requisito de inmediatez",
      "Que la providencia atacada sea una sentencia de tutela"
     ],
     "a": 0,
     "e": "Son correctas 1, 2 y 3. La opción 4 es exactamente lo contrario: la C-590/05 excluye la procedencia de tutela contra sentencias de tutela.",
     "b": "Sentencia C-590 de 2005",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Constitucional",
     "af": "La cosa juzgada constitucional impide reproducir el contenido material de un acto jurídico declarado inexequible por razones de fondo, mientras subsistan en la Carta las disposiciones que sirvieron de parámetro.",
     "rz": "Las sentencias que la Corte Constitucional profiere en ejercicio del control abstracto producen efectos únicamente inter partes.",
     "a": 2,
     "e": "La afirmación es verdadera y reproduce el art. 243 de la Constitución. La razón es falsa: los fallos de control abstracto hacen tránsito a cosa juzgada constitucional con efectos erga omnes.",
     "b": "Art. 243 C.P. · Art. 21 Decreto 2067 de 1991",
     "d": 3
    },
    {
     "t": 2,
     "c": "Derecho Constitucional",
     "q": "Sobre el juicio de sustitución de la Constitución elaborado por la Corte Constitucional a partir de la sentencia C-551 de 2003 es cierto que:",
     "s": [
      "El poder de reforma es un poder constituido y, por tanto, sujeto a límites competenciales",
      "El control de los actos legislativos procede por vicios de procedimiento, dentro de los cuales se enmarca el exceso de competencia del reformador",
      "La metodología exige identificar un eje definitorio de la identidad de la Constitución presuntamente sustituido",
      "Autoriza a la Corte a controlar el contenido material de las reformas constitucionales como si fueran leyes ordinarias"
     ],
     "a": 0,
     "e": "Son correctas 1, 2 y 3. La opción 4 es falsa: la Corte insiste en que no realiza control material de las reformas; verifica si el reformador excedió su competencia al sustituir —no reformar— la Carta.",
     "b": "Sentencias C-551 de 2003 y C-1040 de 2005",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "La ratio decidendi de una sentencia se define como",
     "o": [
      "cualquier consideración doctrinal contenida en la parte motiva",
      "la regla de derecho determinante del sentido de la decisión, sin la cual el caso se habría resuelto de otra manera, y que vincula como precedente",
      "el resumen de los hechos probados del proceso",
      "la orden concreta impartida en la parte resolutiva"
     ],
     "a": 1,
     "e": "La ratio es la subregla necesaria y suficiente que soporta la decisión y constituye el elemento vinculante del precedente; los obiter dicta son afirmaciones incidentales con valor meramente persuasivo, y el decisum obliga a las partes.",
     "b": "Sentencias SU-047 de 1999 y C-836 de 2001",
     "d": 1
    },
    {
     "t": 2,
     "c": "Derecho Constitucional",
     "q": "En relación con la figura del estado de cosas inconstitucional es cierto que:",
     "s": [
      "Exige la vulneración masiva y generalizada de derechos fundamentales que afecta a un número significativo de personas",
      "Fue declarado por primera vez en la sentencia C-355 de 2006",
      "Supone fallas estructurales que comprometen a varias autoridades y demandan órdenes complejas y coordinadas",
      "Sus efectos se limitan estrictamente a las partes del proceso de tutela en que se declara"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3. La figura se remonta a la SU-559 de 1997 y su desarrollo emblemático es la T-025 de 2004 sobre desplazamiento forzado (2 falsa); sus órdenes se extienden más allá de las partes, precisamente por la dimensión estructural del problema (4 falsa).",
     "b": "Sentencias SU-559 de 1997 y T-025 de 2004",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Constitucional",
     "af": "La excepción de inconstitucionalidad puede ser aplicada por cualquier autoridad, incluso administrativa, cuando la incompatibilidad entre la Constitución y la norma es manifiesta.",
     "rz": "Los efectos de la excepción de inconstitucionalidad son erga omnes y retiran definitivamente la norma del ordenamiento jurídico.",
     "a": 2,
     "e": "La afirmación es verdadera conforme a la jurisprudencia sobre el art. 4º C.P. La razón es falsa: la inaplicación produce efectos inter partes y para el caso concreto; la expulsión con efectos generales es propia del control abstracto de la Corte.",
     "b": "Art. 4º C.P. · Jurisprudencia constitucional",
     "d": 3
    },
    {
     "t": 2,
     "c": "Derecho Constitucional",
     "q": "Sobre el test o juicio integrado de igualdad es cierto que:",
     "s": [
      "Todo trato diferenciado establecido por el legislador es, por sí mismo, inconstitucional",
      "El escrutinio estricto procede cuando la medida se funda en categorías sospechosas, como la raza o el origen nacional o familiar",
      "El test de intensidad leve exige demostrar que la medida es necesaria e insustituible",
      "En el escrutinio estricto la medida debe perseguir un fin imperioso y ser necesaria y proporcionada en sentido estricto"
     ],
     "a": 2,
     "e": "Son correctas 2 y 4. La igualdad no proscribe toda diferenciación sino las injustificadas (1 falsa); el test leve solo exige fin legítimo y medio idóneo: la necesidad es propia de las intensidades superiores (3 falsa).",
     "b": "Sentencias C-093 de 2001 y C-345 de 2019",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "En la doctrina del precedente, el precedente «vertical» es",
     "o": [
      "el fijado por el propio juez en sus decisiones anteriores",
      "el proveniente del superior funcional o del órgano de cierre de la jurisdicción, cuyo desconocimiento inmotivado puede configurar causal específica de tutela contra providencias",
      "el adoptado por jueces de otras jurisdicciones",
      "cualquier sentencia dictada en un proceso de tutela"
     ],
     "a": 1,
     "e": "El precedente vertical emana de los superiores y órganos de cierre; el horizontal, de decisiones propias o de pares. Ambos exigen, para el apartamiento, las cargas de transparencia y argumentación suficiente; el desconocimiento del vertical configura el defecto por desconocimiento del precedente.",
     "b": "Sentencias C-836 de 2001 y C-590 de 2005 · Art. 7º CGP",
     "d": 1
    },
    {
     "t": 3,
     "c": "Derecho Constitucional",
     "af": "El defecto sustantivo, como causal específica de procedencia de la tutela contra providencias judiciales, se configura cuando la decisión se funda en una norma claramente inaplicable al caso, derogada o abiertamente inconstitucional, o en una interpretación irrazonable.",
     "rz": "La sentencia C-590 de 2005 sistematizó los requisitos generales y las causales específicas de procedibilidad de la acción de tutela contra providencias judiciales.",
     "a": 1,
     "e": "Ambas proposiciones son verdaderas, pero la razón no explica la afirmación: que la C-590/05 haya sistematizado la doctrina no da cuenta del contenido conceptual del defecto sustantivo; es su marco, no su explicación.",
     "b": "Sentencia C-590 de 2005",
     "d": 3
    },
    {
     "t": 2,
     "c": "Derecho Constitucional",
     "q": "Sobre las omisiones legislativas y su control constitucional es cierto que:",
     "s": [
      "La Corte Constitucional es competente para conocer, por vía de acción pública, de las omisiones legislativas absolutas",
      "La omisión legislativa relativa se predica de una regulación existente que excluye de sus consecuencias jurídicas casos que, por igualdad, deberían estar comprendidos",
      "Toda inactividad del legislador es justiciable ante la Corte Constitucional",
      "El remedio típico frente a la omisión legislativa relativa es la sentencia integradora o aditiva"
     ],
     "a": 2,
     "e": "Son correctas 2 y 4. Frente a la omisión absoluta —ausencia total de regulación— la Corte se declara incompetente por carencia de objeto de control (1 y 3 falsas); la relativa, en cambio, se corrige integrando el contenido omitido.",
     "b": "Jurisprudencia constitucional sobre omisiones legislativas",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "En cuanto a los efectos temporales de las sentencias de constitucionalidad,",
     "o": [
      "todas las sentencias producen efectos retroactivos",
      "la Corte carece de competencia para modular los efectos de sus fallos",
      "por regla general producen efectos hacia el futuro, salvo que la propia Corte resuelva lo contrario, pues es ella quien determina los efectos de sus fallos",
      "sus efectos los fija el Congreso mediante ley estatutaria"
     ],
     "a": 2,
     "e": "Conforme al art. 45 de la Ley 270 de 1996 y a la jurisprudencia, los fallos rigen hacia el futuro (ex nunc) salvo decisión en contrario; la Corte puede modularlos (ex tunc, diferidos), pues es la guardiana de la integridad de la Carta quien define su alcance.",
     "b": "Art. 45 Ley 270 de 1996 · Sentencia C-113 de 1993",
     "d": 1
    },
    {
     "t": 1,
     "c": "Acción de Tutela",
     "q": "La docente advirtió que en la convocatoria anterior muchos fallaron esta pregunta: cuando los artículos 6 y 8 del Decreto 2591 de 1991 condicionan la tutela a la inexistencia de «otros medios de defensa judicial», la expresión alude a:",
     "o": [
      "Únicamente los recursos ordinarios de reposición y apelación",
      "Todos los mecanismos procesales que el ordenamiento pone a disposición del afectado para proteger su derecho, no solo los recursos",
      "Los recursos extraordinarios de casación y revisión",
      "Las peticiones administrativas previas"
     ],
     "a": 1,
     "e": "«Mecanismos (o medios) ordinarios de defensa» NO equivale a «recursos ordinarios»: comprende todas las vías procesales disponibles — procesos, acciones, incidentes, recursos. Confundirlos fue el error masivo del examen anterior que la docente pidió no repetir.",
     "b": "D. 2591/1991 arts. 6 y 8",
     "d": 1
    },
    {
     "t": 1,
     "c": "Acción de Tutela",
     "q": "Conforme al Decreto 333 de 2021, modificado por el Decreto 0799 de 2025, la tutela contra el Presidente de la República es hoy de competencia de:",
     "o": [
      "El Consejo de Estado, como antes de la modificación",
      "El juez de circuito",
      "La Corte Constitucional en única instancia",
      "La Sala Plena de la Corte Suprema de Justicia"
     ],
     "a": 1,
     "e": "El D. 0799 de 2025 trasladó la competencia: antes el D. 333/2021 la asignaba al Consejo de Estado; ahora conoce el juez de circuito. Dato de reforma reciente destacado en clase — muy probable en examen por su novedad.",
     "b": "D. 333/2021 mod. D. 0799/2025",
     "d": 2
    },
    {
     "t": 3,
     "c": "Acción de Tutela",
     "af": "Las causales de nulidad de las sentencias de revisión de la Corte Constitucional no tienen regulación legal expresa",
     "rz": "fue la propia Corte la que, por vía jurisprudencial, construyó esas causales a partir del artículo 4º del Decreto 306 de 1992 y de su reglamento interno",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: como reconoció la docente, «la Corte se lo inventó vía jurisprudencia» — el régimen de nulidades contra sentencias de revisión es creación pretoriana, resuelto de plano por la Sala Plena, sin práctica de pruebas; las propuestas de reforma buscan incorporarlo al reglamento (Acuerdo 01 de 2025).",
     "b": "D. 306/1992 art. 4 · Acuerdo 01/2025",
     "d": 2
    },
    {
     "t": 1,
     "c": "Acción de Tutela",
     "q": "La solicitud de nulidad de una sentencia de revisión de tutela se caracteriza porque:",
     "o": [
      "Se tramita como proceso verbal con período probatorio",
      "Se resuelve de plano por la Sala Plena, en un trámite eminentemente jurídico, sin traslados ni práctica de pruebas",
      "La decide el juez de primera instancia que profirió el fallo",
      "Suspende automáticamente los efectos de la sentencia"
     ],
     "a": 1,
     "e": "Es un trámite excepcionalísimo: la Sala Plena lo resuelve de plano, sobre argumentos estrictamente jurídicos (violación del debido proceso — cambio de jurisprudencia, incongruencia, etc.), sin etapa probatoria. No es una tercera instancia.",
     "b": "Jurisprudencia C. Const.",
     "d": 2
    },
    {
     "t": 1,
     "c": "Acción de Tutela",
     "q": "Desde el punto de vista FUNCIONAL, el superior en la jurisdicción constitucional — y por tanto el órgano llamado a unificar la jurisprudencia de tutela — es:",
     "o": [
      "La Corte Suprema de Justicia respecto de los jueces civiles",
      "El Consejo de Estado respecto de toda tutela contra autoridades",
      "La Corte Constitucional, cualquiera que sea el juez que conozca de la tutela",
      "El Tribunal Superior del respectivo distrito"
     ],
     "a": 2,
     "e": "Todo juez que tramita tutela actúa como juez constitucional, y su superior funcional en esa materia es la Corte Constitucional — no las cabezas de las demás jurisdicciones, cuyas decisiones de tutela no están llamadas a unificar jurisprudencia constitucional. Precisión conceptual clave de la clase.",
     "b": "C.P. arts. 86 y 241-9",
     "d": 1
    },
    {
     "t": 2,
     "c": "Acción de Tutela",
     "q": "Sobre el requisito de SUBSIDIARIEDAD son ciertas:",
     "s": [
      "Es quizá el análisis más importante que hace el juez al estudiar la procedencia de la tutela",
      "La existencia de otro medio de defensa judicial la hace improcedente, salvo que se use como mecanismo transitorio para evitar un perjuicio irremediable",
      "La idoneidad y eficacia del otro medio deben evaluarse en concreto, según las circunstancias del accionante",
      "La tutela procede siempre que el accionante prefiera no usar el proceso ordinario por ser más lento"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (D. 2591/1991 arts. 6 y 8; jurisprudencia constante): el otro medio debe ser idóneo y eficaz en concreto, y aun existiendo cabe la tutela transitoria ante perjuicio irremediable. La mera preferencia o comodidad del actor (4) jamás habilita la tutela.",
     "b": "D. 2591/1991 arts. 6 y 8",
     "d": 3
    },
    {
     "t": 1,
     "c": "Acción de Tutela",
     "q": "El INCIDENTE DE DESACATO, tema del taller de la docente, tiene por finalidad:",
     "o": [
      "Sustituir el cumplimiento de la orden por una indemnización",
      "Sancionar con arresto hasta de seis meses y multa hasta de 20 SMLMV a quien incumpla la orden de tutela, sin que la sanción releve del deber de cumplir",
      "Revocar el fallo de tutela incumplido",
      "Trasladar la competencia al superior del accionado"
     ],
     "a": 1,
     "e": "Art. 52 D. 2591/1991: el desacato es un mecanismo coercitivo — arresto hasta 6 meses y multa hasta 20 salarios — para presionar el cumplimiento; la sanción no extingue la obligación de acatar la orden, y el cumplimiento sobreviniente puede tornar innecesaria la sanción.",
     "b": "D. 2591/1991 art. 52",
     "d": 1
    },
    {
     "t": 3,
     "c": "Acción de Tutela",
     "af": "La sanción por desacato impuesta por el juez de primera instancia debe ser objeto de consulta ante el superior",
     "rz": "la consulta es un mecanismo de garantía que impide ejecutar la sanción de arresto o multa mientras el superior no la confirme",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el art. 52 del D. 2591/1991 somete a consulta la providencia sancionatoria, con efecto suspensivo — la sanción solo se ejecuta si el superior la confirma. Garantía esencial que el juez municipal no puede omitir.",
     "b": "D. 2591/1991 art. 52",
     "d": 2
    },
    {
     "t": 1,
     "c": "Acción de Tutela",
     "q": "Distinción esencial trabajada en el taller: el CUMPLIMIENTO del fallo y la SANCIÓN por desacato se diferencian en que:",
     "o": [
      "Son lo mismo con nombres distintos",
      "El cumplimiento puede y debe procurarse con los poderes del juez (art. 27, D. 2591) aun sin sancionar, mientras el desacato es la vía sancionatoria por la desobediencia; puede haber cumplimiento sin desacato y trámite de desacato que cese por cumplimiento",
      "El desacato solo procede contra particulares",
      "El cumplimiento requiere nueva tutela"
     ],
     "a": 1,
     "e": "El juez conserva la competencia hasta que el derecho esté restablecido (art. 27): puede requerir, ordenar al superior, incluso disponer la apertura de investigaciones, sin necesidad de sancionar. El desacato (art. 52) castiga la renuencia; si el obligado cumple durante el incidente, la finalidad se satisface y la sanción pierde objeto.",
     "b": "D. 2591/1991 arts. 27 y 52",
     "d": 1
    },
    {
     "t": 2,
     "c": "Acción de Tutela",
     "q": "En cuanto al marco normativo vigente de la tutela son ciertas:",
     "s": [
      "El Decreto 2591 de 1991 sigue siendo el estatuto básico de la acción",
      "El reparto y la competencia se rigen por el Decreto 333 de 2021, con la modificación del Decreto 0799 de 2025",
      "El reglamento interno de la Corte Constitucional es hoy el Acuerdo 01 de 2025",
      "La Ley 2213 de 2022 derogó el Decreto 2591 de 1991"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 — el mapa normativo actualizado que la docente dejó: D. 2591/1991 (estatuto), D. 333/2021 + D. 0799/2025 (competencia y reparto), Acuerdo 01/2025 (reglamento interno de la Corte). La Ley 2213 regula la virtualidad, no derogó el estatuto de tutela.",
     "b": "Acción de Tutela",
     "d": 2
    },
    {
     "t": 1,
     "c": "Acción de Tutela",
     "q": "Si el juez municipal recibe una tutela contra una sentencia de un juez civil del circuito de su mismo distrito, conforme a las reglas de reparto vigentes debe:",
     "o": [
      "Tramitarla, pues todo juez es competente para toda tutela",
      "Remitirla conforme a las reglas de competencia del Decreto 333 de 2021 (mod. D. 0799/2025), pues las tutelas contra providencias judiciales se reparten al superior funcional del despacho accionado",
      "Rechazarla de plano por improcedente",
      "Enviarla directamente a la Corte Constitucional"
     ],
     "a": 1,
     "e": "Las tutelas contra providencias judiciales se dirigen al superior funcional de la autoridad accionada según el régimen de reparto del D. 333/2021 reformado. El juez que la recibe sin competencia de reparto debe remitirla de inmediato — sin declararla improcedente, porque las reglas de reparto no son de competencia en sentido estricto.",
     "b": "D. 333/2021 mod. D. 0799/2025",
     "d": 2
    },
    {
     "t": 3,
     "c": "Acción de Tutela",
     "af": "Las decisiones de tutela de la Corte Suprema de Justicia y del Consejo de Estado no unifican la jurisprudencia constitucional",
     "rz": "en sede de tutela esos órganos actúan como jueces constitucionales sometidos a la revisión eventual de la Corte Constitucional, único órgano de cierre de esa jurisdicción",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: aunque sean órganos de cierre de sus jurisdicciones, en tutela operan como jueces constitucionales y sus fallos son revisables por la Corte Constitucional (art. 86 y 241-9 C.P.), verdadero unificador — precisión funcional subrayada en clase.",
     "b": "C.P. arts. 86 y 241",
     "d": 2
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "El artículo 374 de la Constitución establece que la Constitución puede ser reformada por:",
     "o": [
      "El Congreso, únicamente",
      "El Congreso (actos legislativos), una Asamblea Nacional Constituyente y el pueblo mediante referendo",
      "La Corte Constitucional",
      "El Presidente mediante decretos"
     ],
     "a": 1,
     "e": "Art. 374 C.P.: tres mecanismos de reforma — actos legislativos (Congreso), Asamblea Nacional Constituyente y referendo. El docente añadió el debate sobre un «cuarto mecanismo» surgido de la idea expansiva del bloque de constitucionalidad.",
     "b": "C.P. art. 374",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "El CONTROL de sustitución de la Constitución, desarrollado por la Corte Constitucional, sostiene que:",
     "o": [
      "El Congreso puede reformar cualquier contenido sin límite",
      "El poder de reforma tiene límites competenciales: no puede sustituir o reemplazar ejes definitorios de la Constitución, so pena de exceder la competencia y vulnerar el poder constituyente originario",
      "La Corte puede modificar la Constitución",
      "Los actos legislativos no tienen control alguno"
     ],
     "a": 1,
     "e": "El juicio de sustitución distingue reformar (permitido) de sustituir (vedado al poder de reforma): un acto legislativo que reemplace un eje esencial (p. ej., separación de poderes, Estado de derecho) es inconstitucional por vicio de competencia, no de procedimiento.",
     "b": "Jurisprudencia C. Const. (C-551/03 y ss.)",
     "d": 1
    },
    {
     "t": 2,
     "c": "Derecho Constitucional",
     "q": "Sobre las COMISIONES CONSTITUCIONALES PERMANENTES del Congreso son ciertas:",
     "s": [
      "Son siete comisiones",
      "Existen tanto en el Senado como en la Cámara de Representantes",
      "La Primera se encarga, entre otros, de reforma constitucional y leyes estatutarias",
      "Sus decisiones agotan el trámite legislativo sin intervención de las plenarias"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (Ley 3 de 1992): siete comisiones permanentes en cada cámara, con reparto temático; la Primera ve reforma constitucional, leyes estatutarias, derechos, etc. La 4 es falsa: tras la comisión, el proyecto sigue a la plenaria (cuatro debates en total).",
     "b": "C.P. art. 142 · Ley 3/1992",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Constitucional",
     "af": "Los particulares pueden ejercer funciones públicas y administrativas y, en tal caso, responder como si fueran servidores públicos",
     "rz": "la Constitución y la ley admiten la coadyuvancia de los particulares en los fines estatales, extendiéndoles regímenes de responsabilidad penal, fiscal y disciplinaria en el ejercicio de esas funciones",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: fenómeno de la «gerencia pública» descrito en clase — los particulares que ejercen funciones públicas (notarios, cámaras de comercio, curadores, consultores) quedan sujetos a regímenes de responsabilidad pública (p. ej., Ley 1882/2018 para consultores y asesores).",
     "b": "C.P. arts. 123, 210 · Ley 1882/2018",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "El BLOQUE DE CONSTITUCIONALIDAD, en sentido estricto, está integrado por:",
     "o": [
      "Solo el articulado de la Constitución",
      "La Constitución y los tratados internacionales de derechos humanos y de DIH que prohíben su limitación en estados de excepción, que prevalecen en el orden interno",
      "Todas las leyes ordinarias",
      "La jurisprudencia de tribunales extranjeros"
     ],
     "a": 1,
     "e": "Art. 93 C.P.: los tratados de DDHH ratificados que prohíben su limitación en estados de excepción integran el bloque en sentido estricto y prevalecen internamente; en sentido lato se suman otras normas de referencia para el control. El docente lo vinculó a la expansión del parámetro de constitucionalidad.",
     "b": "C.P. art. 93 · Jurisprudencia C. Const.",
     "d": 1
    },
    {
     "t": 1,
     "c": "Derecho Constitucional",
     "q": "Entre las funciones del Congreso, además de reformar la Constitución y hacer las leyes, está:",
     "o": [
      "Administrar justicia ordinaria",
      "Ejercer control político sobre el Gobierno y la administración",
      "Ejecutar el presupuesto",
      "Nombrar a los jueces de la República"
     ],
     "a": 1,
     "e": "El control político (citaciones, mociones de censura, debates de control) es la tercera gran función legislativa que destacó el docente, junto a la función constituyente derivada y la legislativa propiamente dicha.",
     "b": "C.P. arts. 114, 135, 138",
     "d": 1
    },
    {
     "t": 2,
     "c": "Derecho Constitucional",
     "q": "Sobre las LEYES ESTATUTARIAS son ciertas:",
     "s": [
      "Regulan, entre otras materias, derechos y deberes fundamentales y sus mecanismos de protección",
      "Requieren mayoría absoluta y aprobación en una sola legislatura",
      "Están sujetas a control previo y automático de constitucionalidad por la Corte",
      "Pueden ser expedidas mediante decreto por el Presidente"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (art. 152-153 C.P.): materias reforzadas, mayoría absoluta, trámite en una legislatura y control previo, integral y automático de la Corte. La 4 es falsa: son competencia exclusiva del Congreso, no delegables al Ejecutivo.",
     "b": "C.P. arts. 152-153",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Constitucional",
     "af": "El advenimiento de la teoría de la gerencia pública ha ampliado la participación de particulares en el cumplimiento de funciones estatales",
     "rz": "ese modelo, de raíz anglosajona, propende por un Estado más pequeño que traslada funciones sustantivas a los particulares, a diferencia de la administración pública de raigambre continental",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: exposición literal de la clase — la gerencia pública (cuna sajona) frente a la administración pública (grecorromano-germánica) explica la creciente delegación de funciones a particulares y su correlativo régimen de responsabilidad.",
     "b": "Derecho Constitucional",
     "d": 3
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Tutela contra providencias",
     "q": "Una persona interpone tutela contra una sentencia judicial en firme, alegando que el juez desconoció un precedente vinculante de la Corte Constitucional. Conforme a la doctrina de la tutela contra providencias judiciales, para que proceda se requiere, además de los requisitos generales:",
     "o": [
      "Que el accionante no haya tenido ningún otro recurso, aun cuando existiera",
      "Que se configure al menos una causal específica de procedibilidad (p. ej., defecto sustantivo o desconocimiento del precedente) y se cumplan los requisitos generales, incluida la subsidiariedad",
      "Que la Corte Suprema autorice previamente el estudio de la tutela",
      "Que la tutela se presente antes de que la sentencia quede ejecutoriada"
     ],
     "a": 1,
     "e": "La tutela contra providencias exige requisitos generales (relevancia constitucional, subsidiariedad, inmediatez, etc.) y al menos una causal específica de procedibilidad, como el defecto sustantivo o el desconocimiento del precedente (C-590/2005). · Exigir que se presente antes de la ejecutoria confunde la tutela con un recurso ordinario. · Decir que basta 'no haber tenido ningún recurso' omite las causales específicas. · La autorización previa de la Corte Suprema no existe: desnaturaliza la acción.",
     "b": "C. Const. C-590/2005 · tutela contra providencias judiciales"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Subsidiariedad de la tutela",
     "q": "Un ciudadano acude directamente a la tutela para reclamar una prestación económica, existiendo un medio judicial ordinario idóneo y sin acreditar perjuicio irremediable. El juez de tutela debe:",
     "o": [
      "Declarar improcedente la tutela por incumplir la subsidiariedad, salvo que se use como mecanismo transitorio para evitar un perjuicio irremediable debidamente probado",
      "Conceder el amparo, porque la tutela protege todos los derechos sin condiciones",
      "Remitir el caso a la Corte Constitucional para que decida en única instancia",
      "Suspender el medio ordinario y tramitar la tutela en su lugar"
     ],
     "a": 0,
     "e": "La tutela es subsidiaria: no procede si existe otro medio de defensa idóneo, salvo como mecanismo transitorio ante un perjuicio irremediable probado (art. 6 D. 2591/1991). · Sostener que ampara todo 'sin condiciones' ignora la subsidiariedad. · Remitir a la Corte Constitucional para decidir en única instancia desconoce el reparto y trámite de la tutela. · Suspender el medio ordinario invierte la regla: es la tutela la que cede ante el medio idóneo.",
     "b": "Decreto 2591 de 1991, art. 6 · subsidiariedad y perjuicio irremediable"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Ponderación",
     "q": "Un medio publica información veraz sobre la gestión de un funcionario público, quien invoca su derecho a la intimidad para impedir la difusión. Al resolver la tensión entre libertad de información e intimidad, el juez constitucional debe:",
     "o": [
      "Abstenerse de decidir, pues los derechos fundamentales no admiten jerarquía",
      "Preferir siempre la libertad de información, sin límite alguno",
      "Ponderar los derechos según el caso, atendiendo a que, tratándose de asuntos de interés público sobre un funcionario, la libertad de información suele tener mayor peso si la información es veraz",
      "Preferir siempre la intimidad, por ser un derecho personalísimo"
     ],
     "a": 2,
     "e": "Los conflictos entre principios se resuelven por ponderación según las circunstancias; en asuntos de interés público sobre funcionarios, la libertad de información veraz suele prevalecer, sin que ello anule la intimidad en abstracto (jurisprudencia constitucional). · Preferir 'siempre' la intimidad o 'siempre' la información fija jerarquías rígidas ajenas a la ponderación. · Abstenerse de decidir por falta de jerarquía confunde la ausencia de jerarquía abstracta con la imposibilidad de resolver el caso concreto.",
     "b": "C. Const. · ponderación de principios · libertad de información e intimidad"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Constitucional · Bloque de constitucionalidad",
     "q": "Un juez debe resolver un caso donde un tratado de derechos humanos ratificado por Colombia ofrece una protección mayor que la ley interna. Conforme al bloque de constitucionalidad, el juez debe:",
     "o": [
      "Aplicar siempre la ley interna, por el principio de soberanía",
      "Integrar el tratado de derechos humanos al parámetro de decisión por vía del bloque de constitucionalidad (art. 93 C.P.), prefiriendo la interpretación más favorable",
      "Consultar a la Corte Constitucional antes de aplicar cualquier tratado",
      "Inaplicar el tratado hasta que el Congreso lo desarrolle mediante ley"
     ],
     "a": 1,
     "e": "Los tratados de derechos humanos ratificados que prohíben su limitación en estados de excepción integran el bloque de constitucionalidad (art. 93 C.P.) y guían la decisión, con preferencia por la interpretación más favorable (pro homine). · Aplicar 'siempre' la ley interna desconoce el art. 93. · Exigir desarrollo legislativo previo condiciona indebidamente su fuerza normativa. · Requerir consulta previa a la Corte para todo tratado inventa un trámite inexistente.",
     "b": "C.P. art. 93 · bloque de constitucionalidad · principio pro homine"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Cosa juzgada constitucional",
     "q": "La Corte Constitucional declaró EXEQUIBLE una norma 'en el entendido de que' se interprete de cierta manera (sentencia condicionada). Un juez pretende aplicarla con una interpretación distinta a la señalada. Ello:",
     "o": [
      "Depende de que el juez comparta los argumentos de la Corte",
      "Solo lo vincula si la sentencia fue de tutela, no de constitucionalidad",
      "Es válido, porque el juez es autónomo para interpretar la norma como considere",
      "No es válido: la interpretación condicionada hace tránsito a cosa juzgada constitucional y vincula, de modo que el juez debe aplicar la norma en el sentido avalado"
     ],
     "a": 3,
     "e": "En las sentencias condicionadas, la interpretación bajo la cual la norma se declara exequible hace tránsito a cosa juzgada constitucional y vincula a todos los jueces (art. 243 C.P.). · Invocar la autonomía para apartarse desconoce el efecto erga omnes de la cosa juzgada constitucional. · Restringir el efecto vinculante a las tutelas ignora que las sentencias de constitucionalidad vinculan con mayor razón. · Condicionar la vinculación a que el juez 'comparta' los argumentos subordina la cosa juzgada a la opinión del juez.",
     "b": "C.P. art. 243 · cosa juzgada constitucional · sentencias condicionadas"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Control de constitucionalidad",
     "q": "Un ciudadano demanda una ley por vicios en su formación (trámite legislativo) un año y medio después de su promulgación. La Corte estudia la admisión. Conforme al régimen del control de constitucionalidad:",
     "o": [
      "La acción caduca a los cuatro meses como la de nulidad y restablecimiento",
      "Procede en cualquier tiempo, pues los vicios de trámite no caducan",
      "Los vicios de forma o de procedimiento en la formación de la ley caducan en un año contado desde la publicación, por lo que la demanda es extemporánea; los vicios de fondo (materiales) no caducan",
      "Solo la Procuraduría puede alegar vicios de trámite"
     ],
     "a": 2,
     "e": "Las acciones por vicios de forma caducan en un año desde la publicación de la norma (art. 242-3 C.P.); los vicios materiales o de fondo, en cambio, no caducan. La demanda por vicios de trámite presentada 18 meses después es extemporánea. · Afirmar que los vicios de trámite 'no caducan' invierte la regla (esa es la de los vicios de fondo). · El término de cuatro meses es de la nulidad y restablecimiento contenciosa, no del control constitucional. · Cualquier ciudadano —no solo la Procuraduría— puede demandar, dentro del término.",
     "b": "C.P. art. 242 (num. 3) · caducidad de la acción por vicios de forma"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Test de proporcionalidad",
     "q": "Una autoridad limita un derecho fundamental invocando un fin legítimo. Al examinar la constitucionalidad de la medida bajo el juicio de proporcionalidad, el orden de análisis exige verificar, sucesivamente:",
     "o": [
      "Idoneidad (que el medio sirva al fin), necesidad (que no exista un medio menos lesivo igualmente eficaz) y proporcionalidad en sentido estricto (que el beneficio supere el sacrificio del derecho)",
      "Únicamente que la medida esté prevista en una ley",
      "Solo que el fin sea legítimo, sin más pasos",
      "Que la mayoría apruebe la medida, por el principio democrático"
     ],
     "a": 0,
     "e": "El juicio de proporcionalidad exige, tras un fin legítimo, examinar idoneidad, necesidad y proporcionalidad en sentido estricto (ponderación entre beneficio y sacrificio). · Verificar solo la legitimidad del fin omite los pasos siguientes. · La sola previsión legal (legalidad) no agota el examen de proporcionalidad. · La aprobación mayoritaria no sustituye el control material de la restricción a un derecho fundamental.",
     "b": "C. Const. · juicio o test de proporcionalidad · idoneidad, necesidad, proporcionalidad estricta"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Estados de excepción",
     "q": "En un estado de conmoción interior, el Gobierno expide decretos legislativos. Un decreto suspende de forma indefinida un derecho fundamental que los tratados de DDHH prohíben limitar. Conforme al régimen constitucional:",
     "o": [
      "Es válido, pues durante el estado de excepción el Gobierno tiene poderes ilimitados",
      "Es inconstitucional: los estados de excepción no permiten suspender los derechos intangibles ni desconocer el bloque de constitucionalidad, y las medidas deben ser proporcionales y temporales, bajo control de la Corte",
      "Es válido si el Congreso guarda silencio",
      "Solo puede cuestionarlo quien resulte directamente afectado"
     ],
     "a": 1,
     "e": "Los estados de excepción están limitados: no permiten suspender los derechos intangibles (art. 214 C.P.; tratados de DDHH del bloque), exigen proporcionalidad y temporalidad, y los decretos tienen control automático de la Corte. · Afirmar poderes 'ilimitados' desconoce esos límites. · El silencio del Congreso no valida un decreto inconstitucional. · El control constitucional de los decretos legislativos es automático y general, no depende de un afectado directo.",
     "b": "C.P. arts. 214, 215 · Ley 137/1994 · derechos intangibles y control automático"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Precedente y línea jurisprudencial",
     "q": "Un juez de tutela advierte que existen dos sentencias de la Corte Constitucional aparentemente contradictorias sobre un mismo problema jurídico. Para resolver, debe:",
     "o": [
      "Identificar la ratio decidendi vigente y la línea jurisprudencial dominante (atendiendo a las sentencias de unificación y a la más reciente y consolidada), y aplicarla; si se aparta, con carga argumentativa reforzada",
      "Abstenerse de decidir hasta que la Corte unifique",
      "Aplicar siempre la sentencia más antigua, por seguridad jurídica",
      "Escoger libremente la que prefiera, por su autonomía"
     ],
     "a": 0,
     "e": "Ante tensiones jurisprudenciales, el juez identifica la ratio vigente y la línea dominante —privilegiando las sentencias de unificación (SU) y la postura consolidada— y la aplica; apartarse exige carga argumentativa reforzada. · Escoger 'libremente' desconoce el valor del precedente y la igualdad. · Aplicar siempre la más antigua ignora la evolución de la línea. · Abstenerse de decidir viola la prohibición de non liquet.",
     "b": "C. Const. · línea jurisprudencial · sentencias de unificación · precedente"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Constitucional · Efectos de las sentencias",
     "q": "La Corte Constitucional declara inexequible una norma pero difiere los efectos de su decisión hacia el futuro para evitar un vacío traumático. Este tipo de modulación se denomina:",
     "o": [
      "Sentencia con efectos diferidos (inexequibilidad diferida), en la que la Corte modula temporalmente los efectos de su fallo",
      "Sentencia inhibitoria, por falta de competencia",
      "Sentencia interpretativa o condicionada",
      "Cosa juzgada relativa"
     ],
     "a": 0,
     "e": "La inexequibilidad diferida es una modulación temporal por la cual la Corte posterga los efectos del retiro de la norma para evitar un vacío o un mal mayor. · La sentencia condicionada modula el contenido (exequible 'en el entendido de que'), no el tiempo. · La inhibitoria no decide de fondo por un defecto de la demanda. · La cosa juzgada relativa se refiere al alcance del juzgamiento (solo por los cargos analizados), no a la modulación temporal de efectos.",
     "b": "C. Const. · modulación de efectos · inexequibilidad diferida"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Derechos fundamentales por conexidad",
     "q": "Una persona invoca en tutela la protección de un derecho de contenido prestacional (p. ej., salud) que, en su caso concreto, compromete gravemente su vida y dignidad. Conforme a la jurisprudencia constitucional:",
     "o": [
      "Puede proceder cuando el derecho prestacional, en el caso concreto, se conecta con derechos fundamentales como la vida o la dignidad, o cuando se ha reconocido su fundamentalidad autónoma",
      "Solo procede si el Congreso ha desarrollado legalmente el derecho",
      "La tutela procede siempre para cualquier pretensión económica",
      "La tutela es improcedente, pues los derechos prestacionales nunca son tutelables"
     ],
     "a": 0,
     "e": "La jurisprudencia admite la tutela de derechos prestacionales por conexidad con derechos fundamentales (vida, dignidad) y, en varios casos, ha reconocido su fundamentalidad autónoma (p. ej., la salud). · Afirmar que 'nunca' son tutelables desconoce esa evolución. · Exigir desarrollo legislativo previo condiciona indebidamente la protección. · Sostener que la tutela procede 'siempre para cualquier pretensión económica' ignora la subsidiariedad y el carácter fundamental exigido.",
     "b": "C. Const. · derechos por conexidad · fundamentalidad de derechos prestacionales"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Constitucional · Cosa juzgada constitucional",
     "q": "La Corte declaró exequible una norma 'por los cargos analizados' en la demanda. Posteriormente, otro ciudadano la demanda por un cargo distinto no estudiado antes. Conforme a la cosa juzgada constitucional:",
     "o": [
      "Solo la misma persona que demandó puede volver a hacerlo",
      "Procede el nuevo estudio: la cosa juzgada es relativa cuando el examen se limitó a ciertos cargos, quedando abierta la revisión por cargos no analizados",
      "La nueva demanda es improcedente: hay cosa juzgada absoluta sobre la norma",
      "La norma ya no puede volver a examinarse nunca"
     ],
     "a": 1,
     "e": "Cuando la Corte se pronuncia 'por los cargos analizados', la cosa juzgada es relativa: la norma puede volver a examinarse por cargos distintos no estudiados (art. 243 C.P.; jurisprudencia). · Hablar de cosa juzgada absoluta cierra indebidamente el control. · Afirmar que 'nunca' puede reexaminarse ignora la cosa juzgada relativa. · La acción pública de inconstitucionalidad la puede ejercer cualquier ciudadano, no solo el primer demandante.",
     "b": "C.P. art. 243 · cosa juzgada constitucional relativa"
    }
   ],
   "rel": "transversal",
   "ambito": "Transversal · Derecho Constitucional, DDHH y tutela (conocimientos generales de todos los cargos)"
  },
  {
   "id": "laboral",
   "numero": "T5",
   "fecha": "Tema",
   "titulo": "Derecho Laboral y Seguridad Social",
   "docente": "Banco consolidado · módulos EJRLB y metodología PGN",
   "resumen": "Laboral individual y colectivo, procesal laboral y sistema pensional, incluidas las reformas de la Ley 2381 de 2024 y la Ley 2466 de 2025. Incluye Laboral Individual (Dr. Edgar Pérez), Proceso Laboral (Dr. Samir Bonett) y Seguridad Social (Dr. Carlos Prieto).",
   "preguntas": [
    {
     "t": 1,
     "c": "Laboral Individual",
     "q": "En materia de salario en especie, el Código Sustantivo del Trabajo establece que",
     "o": [
      "puede pactarse sin límite alguno si el trabajador lo acepta",
      "no puede superar el cincuenta por ciento (50%) de la totalidad del salario, y para quien devenga el mínimo no puede exceder del treinta por ciento (30%)",
      "está prohibido en todos los casos",
      "solo procede para trabajadores del servicio doméstico"
     ],
     "a": 1,
     "e": "El art. 129 del CST permite el salario en especie hasta el 50% de la totalidad del salario; cuando el trabajador devenga el salario mínimo, la especie no puede exceder el 30%.",
     "b": "Art. 129 CST · Módulo EJRLB Derecho Laboral Individual",
     "d": 1
    },
    {
     "t": 2,
     "c": "Laboral Individual",
     "q": "Sobre los pagos que no constituyen salario (artículo 128 del CST) es cierto que:",
     "s": [
      "Las sumas que ocasionalmente y por mera liberalidad recibe el trabajador del empleador no constituyen salario",
      "Las comisiones pactadas no constituyen salario en ningún caso",
      "Las partes pueden acordar que ciertos beneficios o auxilios habituales u ocasionales extralegales no constituyan salario",
      "Los pactos de exclusión salarial pueden recaer válidamente sobre las sumas que retribuyen de manera directa el servicio prestado"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3, que reproducen el art. 128. Las comisiones sí son salario por retribuir directamente el servicio (art. 127) y, según la jurisprudencia de la Sala Laboral, los pactos de desalarización no pueden despojar de naturaleza salarial a lo que constituye contraprestación directa del trabajo.",
     "b": "Arts. 127 y 128 CST · Jurisprudencia CSJ Sala de Casación Laboral",
     "d": 3
    },
    {
     "t": 3,
     "c": "Laboral Individual",
     "af": "Vencidas las tres prórrogas de un contrato de trabajo a término fijo inferior a un año, la siguiente renovación no puede ser inferior a un (1) año.",
     "rz": "El artículo 46 del CST dispone que el contrato a término fijo inferior a un año únicamente puede prorrogarse por períodos iguales o inferiores hasta por tres (3) veces.",
     "a": 0,
     "e": "Ambas proposiciones son verdaderas y la razón explica la afirmación: agotadas las tres prórrogas cortas que autoriza la norma, la renovación siguiente debe ser mínimo anual, sin que el contrato pierda su naturaleza a término fijo.",
     "b": "Código Sustantivo del Trabajo, art. 46 · contrato a término fijo",
     "d": 3
    },
    {
     "t": 1,
     "c": "Laboral Individual",
     "q": "Conforme a la reforma laboral contenida en la Ley 2466 de 2025, la jornada nocturna inicia a las",
     "o": [
      "6:00 p. m.",
      "7:00 p. m.",
      "9:00 p. m.",
      "10:00 p. m."
     ],
     "a": 1,
     "e": "La reforma laboral adelantó el inicio de la jornada nocturna a las 7:00 p. m. (antes 9:00 p. m.), ampliando el recargo nocturno; además estableció el incremento progresivo del recargo por trabajo en dominicales y festivos hasta llegar al 100%.",
     "b": "Ley 2466 de 2025",
     "d": 2
    },
    {
     "t": 3,
     "c": "Laboral Individual",
     "af": "Para terminar el contrato con justa causa, el empleador debe manifestar al trabajador, en el momento de la extinción, la causal o motivo concreto de su decisión, sin que le sea posible alegar válidamente hechos o causales distintos con posterioridad.",
     "rz": "El despido con justa causa comprobada genera a cargo del empleador la obligación de pagar la indemnización prevista en el artículo 64 del CST.",
     "a": 2,
     "e": "La afirmación es verdadera (parágrafo del art. 62 del CST). La razón es falsa: la indemnización del art. 64 procede por la terminación unilateral SIN justa causa; el despido con justa causa comprobada no la genera.",
     "b": "Arts. 62 y 64 CST",
     "d": 3
    },
    {
     "t": 2,
     "c": "Laboral Colectivo",
     "q": "En relación con el fuero sindical es cierto que:",
     "s": [
      "Ampara a los fundadores del sindicato desde su constitución y por el término previsto en la ley",
      "Ampara a los miembros de la junta directiva en el número y condiciones señalados por la ley",
      "Para despedir a un trabajador aforado el empleador necesita la calificación judicial previa de la justa causa (levantamiento del fuero)",
      "Cobija a la totalidad de los afiliados al sindicato, en todos los casos"
     ],
     "a": 0,
     "e": "Son correctas 1, 2 y 3 (arts. 405 y ss. CST y 113 y ss. CPTSS): el fuero es una garantía cualificada de ciertos trabajadores (fundadores, adherentes, directivos, comisión de reclamos) y exige permiso judicial previo. No ampara indistintamente a todos los afiliados.",
     "b": "Arts. 405 a 411 CST · Módulo EJRLB Derecho Laboral Colectivo",
     "d": 2
    },
    {
     "t": 1,
     "c": "Laboral Colectivo",
     "q": "La diferencia entre convención colectiva y pacto colectivo consiste en que",
     "o": [
      "la convención se celebra con trabajadores no sindicalizados y el pacto con el sindicato",
      "el pacto colectivo se celebra con trabajadores no sindicalizados y no puede suscribirse cuando el sindicato agrupe más de la tercera parte de los trabajadores de la empresa",
      "ambas figuras son idénticas y se diferencian solo por su registro",
      "el pacto colectivo requiere homologación del Ministerio del Trabajo"
     ],
     "a": 1,
     "e": "La convención se celebra con uno o varios sindicatos (art. 467 CST); el pacto, con trabajadores no sindicalizados (art. 481). Cuando el sindicato agrupa más de la tercera parte de los trabajadores, la empresa no puede celebrar pactos colectivos ni prorrogar los existentes.",
     "b": "Arts. 467, 470 y 481 CST",
     "d": 2
    },
    {
     "t": 3,
     "c": "Laboral Colectivo",
     "af": "La declaratoria de ilegalidad de una suspensión o paro colectivo de actividades corresponde al Ministerio del Trabajo.",
     "rz": "Desde la Ley 1210 de 2008, la legalidad o ilegalidad del cese colectivo de actividades la declara la jurisdicción ordinaria laboral, conociendo en primera instancia las salas laborales de los tribunales superiores, mediante trámite preferente.",
     "a": 3,
     "e": "La afirmación es falsa precisamente por lo que expresa la razón, que es verdadera: la Ley 1210 de 2008 trasladó esa competencia de la autoridad administrativa al juez del trabajo, en garantía del derecho de huelga.",
     "b": "Ley 1210 de 2008 · Art. 129A CPTSS",
     "d": 3
    },
    {
     "t": 2,
     "c": "Procesal Laboral",
     "q": "Sobre el grado jurisdiccional de consulta en el proceso laboral (artículo 69 del CPTSS) es cierto que:",
     "s": [
      "Procede en favor del empleador particular cuando la condena supera veinte (20) SMLMV",
      "Procede cuando la sentencia de primera instancia es totalmente adversa a las pretensiones del trabajador o afiliado y no es apelada",
      "Es un recurso ordinario que la parte interesada debe interponer dentro de los tres días siguientes a la notificación",
      "Procede cuando la sentencia es adversa a la Nación, al departamento o al municipio, o a entidades en que la Nación sea garante, y no es apelada"
     ],
     "a": 2,
     "e": "Son correctas 2 y 4: la consulta protege al trabajador vencido y al patrimonio público. No es un recurso sino un grado jurisdiccional que opera por ministerio de la ley, sin solicitud de parte (3 falsa), y no está instituida en favor del empleador particular (1 falsa).",
     "b": "Art. 69 CPTSS · Módulo EJRLB Derecho Procesal Laboral",
     "d": 3
    },
    {
     "t": 1,
     "c": "Procesal Laboral",
     "q": "Las facultades ultra y extra petita en el proceso laboral",
     "o": [
      "corresponden a cualquier juez de la República en todas las instancias",
      "corresponden exclusivamente al juez laboral de primera instancia, siempre que los hechos que las sustenten hayan sido discutidos y probados en el proceso",
      "fueron derogadas por el Código General del Proceso",
      "solo pueden ejercerse a solicitud del trabajador demandante"
     ],
     "a": 1,
     "e": "El art. 50 del CPTSS autoriza al juez de primera instancia a ordenar el pago de salarios, prestaciones o indemnizaciones distintos de los pedidos, o condenar por cantidad superior, cuando los hechos que los originen hayan sido discutidos en el proceso y estén debidamente probados: es una facultad-deber exclusiva de esa instancia, expresión del carácter protector del derecho procesal del trabajo.",
     "b": "Art. 50 CPTSS",
     "d": 1
    },
    {
     "t": 3,
     "c": "Procesal Laboral",
     "af": "La conciliación extrajudicial constituye requisito de procedibilidad para acudir a la jurisdicción ordinaria laboral.",
     "rz": "La Corte Constitucional, en la sentencia C-893 de 2001, declaró inexequible la conciliación extrajudicial obligatoria como requisito de procedibilidad en materia laboral, por afectar el acceso a la administración de justicia y la irrenunciabilidad de los derechos laborales.",
     "a": 3,
     "e": "La afirmación es falsa por lo que enuncia la razón, que es verdadera: en laboral la conciliación prejudicial es voluntaria; exigirla como presupuesto de la demanda desconocería el art. 53 de la Constitución.",
     "b": "Sentencia C-893 de 2001 · Art. 53 C.P.",
     "d": 3
    },
    {
     "t": 2,
     "c": "Procesal Laboral",
     "q": "En cuanto a los principios del proceso laboral tras la Ley 1149 de 2007 es cierto que:",
     "s": [
      "La oralidad y la actuación en audiencias públicas constituyen la regla general del proceso",
      "El proceso ordinario laboral se rige por un sistema escritural puro",
      "El juez tiene la dirección efectiva del proceso y amplias facultades para decretar pruebas de oficio",
      "Rige la tarifa legal probatoria, que excluye la libre formación del convencimiento"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3 (arts. 42, 48 y 54 CPTSS). La Ley 1149 de 2007 consolidó la oralidad por audiencias y el juez director del proceso; y el art. 61 del CPTSS consagra la libre formación del convencimiento, no la tarifa legal (2 y 4 falsas).",
     "b": "Arts. 42, 48, 54 y 61 CPTSS · Ley 1149 de 2007",
     "d": 2
    },
    {
     "t": 1,
     "c": "Seguridad Social",
     "q": "NO es uno de los principios del servicio público esencial de seguridad social enunciados en el artículo 2º de la Ley 100 de 1993:",
     "o": [
      "La eficiencia",
      "La universalidad",
      "La solidaridad",
      "La libre competencia entre administradoras"
     ],
     "a": 3,
     "e": "El art. 2º de la Ley 100 enuncia la eficiencia, la universalidad, la solidaridad, la integralidad, la unidad y la participación. La libre competencia no figura entre esos principios rectores.",
     "b": "Art. 2º Ley 100 de 1993 · Módulos EJRLB de Seguridad Social",
     "d": 1
    },
    {
     "t": 3,
     "c": "Seguridad Social",
     "af": "En el nuevo sistema de protección social integral para la vejez (Ley 2381 de 2024), el pilar contributivo se integra por un componente de prima media y un componente complementario de ahorro individual.",
     "rz": "El pilar solidario del nuevo sistema garantiza una renta básica a las personas mayores en situación de pobreza extrema y vulnerabilidad.",
     "a": 1,
     "e": "Ambas proposiciones son verdaderas: la reforma pensional, vigente desde el 1º de julio de 2025, estructura el sistema en pilares (solidario, semicontributivo, contributivo y de ahorro voluntario). Pero la razón describe un pilar distinto y no explica la composición del contributivo.",
     "b": "Ley 2381 de 2024",
     "d": 3
    },
    {
     "t": 2,
     "c": "Seguridad Social",
     "q": "Sobre la pensión de sobrevivientes en el régimen de la Ley 100 de 1993 (modificada por la Ley 797 de 2003) es cierto que:",
     "s": [
      "Se causa por la muerte del afiliado que hubiere cotizado cincuenta (50) semanas dentro de los tres años inmediatamente anteriores al fallecimiento",
      "El cónyuge o compañero permanente supérstite debe acreditar, por regla general, convivencia con el causante no inferior a cinco (5) años",
      "También se causa por la muerte del pensionado por vejez o invalidez",
      "El requisito de densidad de cotizaciones del afiliado es de trescientas (300) semanas en cualquier tiempo"
     ],
     "a": 0,
     "e": "Son correctas 1, 2 y 3 (arts. 46 y 47 de la Ley 100, mod. Ley 797/03; la Sala Laboral unificó la exigencia de convivencia quinquenal). La opción 4 corresponde a un régimen anterior, no al vigente requisito de 50 semanas en los últimos tres años.",
     "b": "Arts. 46 y 47 Ley 100 de 1993 · Ley 797 de 2003 · CSJ Sala Laboral",
     "d": 3
    },
    {
     "t": 3,
     "c": "Derecho Laboral",
     "af": "El juez puede declarar la existencia de un contrato de trabajo aunque las partes hayan denominado formalmente la relación como contrato de prestación de servicios.",
     "rz": "El artículo 53 de la Constitución consagra la primacía de la realidad sobre las formalidades establecidas por los sujetos de las relaciones laborales.",
     "a": 0,
     "e": "Ambas son verdaderas y la razón explica la afirmación: el llamado «contrato realidad» es la aplicación directa del principio constitucional de primacía de la realidad, verificados los tres elementos del art. 23 del CST.",
     "b": "Art. 53 C.P. · Art. 23 CST",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Laboral",
     "q": "El despido de un trabajador en situación de discapacidad o debilidad manifiesta por razones de salud, sin autorización de la oficina del Trabajo,",
     "o": [
      "es válido si se paga la indemnización legal por despido injusto",
      "se presume discriminatorio y es ineficaz, con derecho al reintegro y a la sanción de 180 días de salario",
      "solo genera una multa administrativa para el empleador",
      "es válido si el contrato era a término fijo"
     ],
     "a": 1,
     "e": "Conforme al art. 26 de la Ley 361 de 1997 y la jurisprudencia constitucional sobre estabilidad laboral reforzada, el despido sin autorización se presume motivado en la condición de salud y carece de eficacia, con reintegro y sanción de 180 días de salario.",
     "b": "Art. 26 Ley 361 de 1997 · Sentencia SU-049 de 2017",
     "d": 1
    },
    {
     "t": 2,
     "c": "Derecho Laboral",
     "q": "Sobre la prescripción de los derechos laborales puede asegurarse que:",
     "s": [
      "Las acreencias laborales prescriben, por regla general, en cinco años",
      "La prescripción general en materia laboral es de un año",
      "El derecho a la pensión, en sí mismo considerado, prescribe en tres años",
      "Las acciones sobre derechos laborales prescriben por regla general en tres años, y el simple reclamo escrito del trabajador la interrumpe, por una sola vez, por un lapso igual"
     ],
     "a": 3,
     "e": "Solo es correcta la opción 4 (arts. 488-489 CST y 151 CPTSS). El derecho pensional como tal es imprescriptible; lo que prescribe son las mesadas no reclamadas (3 falsa).",
     "b": "Arts. 488 y 489 CST · Art. 151 CPTSS",
     "d": 2
    },
    {
     "t": 3,
     "c": "Derecho Laboral",
     "af": "El ius variandi es una facultad absoluta del empleador para modificar unilateralmente las condiciones de trabajo.",
     "rz": "El ejercicio del ius variandi encuentra límites en el honor, la dignidad, la seguridad, los derechos mínimos del trabajador y sus condiciones personales, familiares y de salud.",
     "a": 3,
     "e": "La afirmación es falsa por lo que expresa la razón, que es verdadera: la facultad de variación es relativa y razonada; su ejercicio arbitrario puede vulnerar derechos fundamentales y ser controlado incluso por vía de tutela.",
     "b": "Art. 23 CST · Jurisprudencia constitucional y laboral",
     "d": 3
    },
    {
     "t": 1,
     "c": "Derecho Laboral",
     "q": "Conforme al artículo 24 del CST, acreditada la prestación personal del servicio,",
     "o": [
      "el trabajador debe además probar la subordinación y el salario",
      "se presume la existencia del contrato de trabajo, y corresponde al beneficiario del servicio desvirtuar la subordinación",
      "se presume únicamente el pago del salario mínimo",
      "surge una relación legal y reglamentaria"
     ],
     "a": 1,
     "e": "La presunción del art. 24 del CST invierte la carga probatoria: probado el servicio personal, se presume el contrato de trabajo y es el demandado quien debe demostrar que la actividad se ejecutó con autonomía e independencia.",
     "b": "Art. 24 CST · Jurisprudencia CSJ Sala de Casación Laboral",
     "d": 2
    },
    {
     "t": 2,
     "c": "Derecho Laboral",
     "q": "Son elementos esenciales del contrato de trabajo conforme al artículo 23 del CST:",
     "s": [
      "La actividad personal del trabajador",
      "La continuada subordinación o dependencia del trabajador respecto del empleador",
      "Un salario como retribución del servicio",
      "La exclusividad en la prestación del servicio a un solo empleador"
     ],
     "a": 0,
     "e": "Son correctas 1, 2 y 3: reunidos esos tres elementos, existe contrato de trabajo sin que deje de serlo por la denominación que se le dé. La exclusividad no es elemento esencial: solo obliga si se pacta.",
     "b": "Arts. 23 y 26 CST",
     "d": 2
    },
    {
     "t": 1,
     "c": "Laboral Individual",
     "q": "El PRINCIPIO DE LA REALIDAD (primacía de la realidad sobre las formalidades), consagrado en el art. 53 de la Constitución, implica que:",
     "o": [
      "El juez debe atenerse a la denominación que las partes dieron al contrato",
      "Prevalecen los hechos y la conducta efectivamente desplegada sobre la forma o el nombre del contrato, de modo que un contrato de prestación de servicios que oculta una relación laboral se rige por el derecho del trabajo",
      "Solo aplica cuando el trabajador es un menor de edad",
      "Exige pacto escrito para tener efectos"
     ],
     "a": 1,
     "e": "El art. 53 C.P. y el 23 CST hacen prevalecer la realidad: verificados los tres elementos (actividad personal, subordinación y remuneración), existe contrato de trabajo aunque se le llame de otra forma. Es la herramienta central contra la tercerización y la informalidad que el docente subrayó.",
     "b": "C.P. art. 53 · CST arts. 22-24",
     "d": 2
    },
    {
     "t": 2,
     "c": "Laboral Individual",
     "q": "Son elementos esenciales del contrato de trabajo (art. 23 CST):",
     "s": [
      "La actividad personal del trabajador",
      "La continuada subordinación o dependencia respecto del empleador",
      "Un salario como retribución del servicio",
      "La existencia de un contrato escrito y solemne"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: prestación personal, subordinación y remuneración. La 4 es falsa — el contrato de trabajo puede ser verbal o escrito; la escritura no es elemento esencial (salvo excepciones como el contrato a término fijo, que exige escrito).",
     "b": "Código Sustantivo del Trabajo, art. 23 · elementos del contrato de trabajo",
     "d": 2
    },
    {
     "t": 3,
     "c": "Laboral Individual",
     "af": "Los derechos ciertos e indiscutibles del trabajador son irrenunciables, de modo que una conciliación que los desconozca carece de validez",
     "rz": "el principio protector y el art. 53 constitucional impiden que la autonomía de la voluntad menoscabe las garantías mínimas del trabajador",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la irrenunciabilidad de los derechos ciertos e indiscutibles (art. 53 C.P., art. 14 CST) es núcleo del principio protector; solo los derechos inciertos y discutibles son transigibles o conciliables. El docente ilustró el riesgo con el trabajador que acepta menos de lo debido por necesidad.",
     "b": "C.P. art. 53 · CST arts. 14 y 15",
     "d": 2
    },
    {
     "t": 1,
     "c": "Laboral Individual",
     "q": "En materia de terminación del contrato sin justa causa, la consecuencia legal es:",
     "o": [
      "La reintegro forzoso en todos los casos",
      "El pago de la indemnización tarifada del art. 64 CST, según la modalidad y duración del contrato",
      "La nulidad del despido y el pago de salarios caídos indefinidos",
      "Una multa a favor del Ministerio del Trabajo"
     ],
     "a": 1,
     "e": "El despido sin justa causa da lugar a la indemnización del art. 64 CST (tarifada según sea contrato a término fijo, indefinido o por obra). El reintegro es excepcional (fueros, estabilidad reforzada). No existe reintegro automático general.",
     "b": "CST art. 64",
     "d": 1
    },
    {
     "t": 2,
     "c": "Laboral Individual",
     "q": "Gozan de estabilidad laboral reforzada, según la jurisprudencia constitucional:",
     "s": [
      "La mujer en estado de embarazo y lactancia (fuero de maternidad)",
      "La persona en situación de discapacidad o debilidad manifiesta por salud",
      "El trabajador aforado sindical",
      "Cualquier trabajador con contrato a término indefinido, por ese solo hecho"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: son supuestos de estabilidad reforzada que exigen autorización o levantamiento de fuero para el despido. La 4 es falsa: el contrato indefinido no confiere por sí mismo estabilidad reforzada; puede terminarse con justa causa o con indemnización.",
     "b": "C.P. arts. 13, 43, 53 · CST · Jurisprudencia C. Const.",
     "d": 2
    },
    {
     "t": 1,
     "c": "Laboral Individual",
     "q": "La Ley 2466 de 2025 (reforma laboral) introdujo, entre otros cambios, que la JORNADA NOCTURNA se cuenta a partir de:",
     "o": [
      "Las 10:00 p.m.",
      "Las 9:00 p.m.",
      "Las 7:00 p.m., con transición gradual",
      "Las 6:00 p.m."
     ],
     "a": 2,
     "e": "La reforma laboral redefinió el inicio del trabajo nocturno hacia las 7:00 p.m. (con implementación gradual), ampliando el recargo nocturno frente al esquema anterior. Dato normativo reciente de alto valor para el examen — verifica la fecha exacta de entrada en vigor de cada fase.",
     "b": "Ley 2466/2025",
     "d": 1
    },
    {
     "t": 3,
     "c": "Laboral Individual",
     "af": "El salario en especie debe valorarse y no puede exceder el porcentaje legal del total del salario, debiendo el trabajador devengar siempre en dinero al menos el porcentaje mínimo legal",
     "rz": "la ley busca impedir que el pago en especie se convierta en un mecanismo para eludir garantías salariales y prestacionales",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el art. 129 CST limita el salario en especie (no más del 50% del total, y del 30% cuando se trata del salario mínimo), protegiendo el poder adquisitivo real — coherente con el principio protector expuesto en clase.",
     "b": "CST art. 129",
     "d": 3
    },
    {
     "t": 1,
     "c": "Laboral Individual",
     "q": "Frente a la carga de la prueba en el proceso laboral, cuando el trabajador acredita la prestación personal del servicio:",
     "o": [
      "Debe además probar la subordinación con documento escrito",
      "Opera la presunción del art. 24 CST: se presume que toda relación de trabajo personal está regida por un contrato de trabajo, y corresponde al empleador desvirtuarla",
      "La carga se mantiene íntegra en el trabajador",
      "El juez no puede decretar pruebas de oficio"
     ],
     "a": 1,
     "e": "Art. 24 CST: probada la prestación personal del servicio, se presume la existencia del contrato de trabajo; el empresario debe desvirtuar la subordinación. Es la manifestación probatoria del principio protector — clave para resolver los casos de tercerización.",
     "b": "CST art. 24",
     "d": 1
    },
    {
     "t": 1,
     "c": "Laboral Individual",
     "q": "El principio IN DUBIO PRO OPERARIO (art. 53 C.P.) significa que:",
     "o": [
      "El trabajador siempre gana el proceso",
      "En caso de duda en la aplicación e interpretación de las fuentes formales de derecho, se prefiere la más favorable al trabajador, aplicada en su integridad",
      "El juez puede inventar derechos no consagrados en la ley",
      "Toda norma laboral se interpreta contra el empleador"
     ],
     "a": 1,
     "e": "Ante duda sobre cuál norma aplicar o cómo interpretarla, se opta por la más favorable al trabajador, tomada en su integridad (principio de favorabilidad / conglobamento). No autoriza crear derechos ni presumir hechos: opera sobre la interpretación de fuentes.",
     "b": "C.P. art. 53 · CST art. 21",
     "d": 2
    },
    {
     "t": 2,
     "c": "Laboral Individual",
     "q": "Constituyen JUSTAS CAUSAS de terminación del contrato por parte del empleador (art. 62 CST) situaciones como:",
     "s": [
      "El engaño del trabajador mediante certificados falsos para su admisión",
      "Todo acto de violencia, injuria o grave indisciplina en que incurra el trabajador",
      "La deficiente rendición de estadísticas del despacho judicial",
      "La renuncia voluntaria del trabajador"
     ],
     "a": 2,
     "e": "Correctas 1 y 2 (art. 62-A CST). La 3 es un distractor ajeno a la relación laboral privada; la 4 es una forma de terminación por decisión del trabajador, no una justa causa del empleador. Bajo clave PGN, la combinación de las ciertas 1 y 3 no aplica: cuida la lectura — aquí la respuesta correcta sería la que agrupe solo 1 y 2, si estuviera; el ítem entrena el descarte del enunciado falso.",
     "b": "Código Sustantivo del Trabajo, art. 62 · justas causas de terminación",
     "d": 2
    },
    {
     "t": 1,
     "c": "Proceso Laboral",
     "q": "El docente dio una «pauta para acertar siempre» sobre competencia territorial laboral: NUNCA es juez competente el del domicilio del trabajador demandante por ese solo hecho. La regla general del art. 5 del C.P.T.S.S. fija la competencia en:",
     "o": [
      "El domicilio del demandante en todos los casos",
      "El lugar donde se prestó el servicio o el domicilio del demandado, a elección del demandante",
      "Exclusivamente el domicilio del demandado",
      "La sede principal de la empresa"
     ],
     "a": 1,
     "e": "El art. 5 del Código Procesal del Trabajo consagra el fuero: lugar de prestación del servicio o domicilio del demandado, a elección del actor. La pauta de descarte de clase: elimina de entrada las opciones ancladas en el mero domicilio del trabajador-demandante.",
     "b": "C.P.T.S.S. art. 5",
     "d": 1
    },
    {
     "t": 3,
     "c": "Proceso Laboral",
     "af": "En el trabajo remoto o virtual desde el exterior puede no configurarse el fuero del «último lugar de prestación del servicio», quedando el del domicilio del demandado",
     "rz": "la estructura de competencia territorial del Código Procesal del Trabajo fue pensada sobre un esquema presencial que no previó plenamente la deslocalización del trabajo",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: fue justamente la reflexión de clase — cuando la prestación se deslocaliza (extranjero, remoto), el fuero del lugar de prestación se torna problemático y cobra fuerza el del domicilio del demandado.",
     "b": "C.P.T.S.S. art. 5",
     "d": 3
    },
    {
     "t": 1,
     "c": "Proceso Laboral",
     "q": "El nuevo Código Procesal del Trabajo introduce el REPARTO NACIONAL, conforme al cual:",
     "o": [
      "Todo proceso laboral se tramita en Bogotá",
      "Los procesos que sean controversias jurídicas sin necesidad de práctica de pruebas podrán repartirse a cualquier juez o tribunal laboral del país, atendiendo al equilibrio de cargas y tramitándose virtualmente hasta su culminación",
      "Se elimina la competencia territorial por completo para todos los procesos",
      "El reparto lo decide el demandante libremente"
     ],
     "a": 1,
     "e": "El parágrafo sobre reparto nacional permite distribuir procesos de puro derecho (sin pruebas) a cualquier despacho laboral del país según las estadísticas de carga del Consejo Superior y los seccionales, con trámite virtual. El docente advirtió que su operatividad depende de la reglamentación del Consejo Superior de la Judicatura.",
     "b": "Nuevo C.P.T.",
     "d": 2
    },
    {
     "t": 1,
     "c": "Proceso Laboral",
     "q": "El PRINCIPIO DE GRATUIDAD en el proceso del trabajo implica que:",
     "o": [
      "El trabajador debe pagar arancel judicial reducido",
      "La actuación en la jurisdicción laboral no causa erogación alguna para las partes por concepto del servicio de justicia",
      "Solo el empleador asume costos",
      "La gratuidad depende de la cuantía"
     ],
     "a": 1,
     "e": "La gratuidad (art. 39 C.P.T.S.S.) es principio estructural del proceso laboral: se busca no imponer barreras económicas al acceso, dada la posición del trabajador. Distinto de las costas, que pueden imponerse a la parte vencida.",
     "b": "C.P.T.S.S. art. 39",
     "d": 2
    },
    {
     "t": 2,
     "c": "Proceso Laboral",
     "q": "Caracterizan al proceso ordinario laboral colombiano:",
     "s": [
      "La oralidad y concentración en audiencias",
      "La libre apreciación de la prueba conforme a la sana crítica, sin sujeción a tarifa legal",
      "La facultad y el deber del juez de decretar pruebas de oficio para el esclarecimiento de la verdad",
      "La imposibilidad de conciliar por versar sobre derechos laborales"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (arts. 42, 61 y 54 C.P.T.S.S.): oralidad, libre convicción y pruebas de oficio son rasgos definitorios. La 4 es falsa: los derechos inciertos y discutibles SÍ son conciliables; la conciliación es incluso etapa obligatoria (audiencia del art. 77).",
     "b": "C.P.T.S.S. arts. 42, 54, 61, 77",
     "d": 2
    },
    {
     "t": 1,
     "c": "Proceso Laboral",
     "q": "La técnica de resolver por EXCLUSIÓN que enseñó el docente sirve para el examen porque:",
     "o": [
      "Permite adivinar sin estudiar",
      "Cuando no se domina la respuesta directa, descartar las opciones claramente erróneas (p. ej., las ancladas en el domicilio del demandante) aumenta la probabilidad de acertar la correcta",
      "Garantiza siempre la respuesta correcta",
      "Solo funciona en preguntas de competencia"
     ],
     "a": 1,
     "e": "Es una habilidad metodológica: identificar y eliminar los distractores que contradicen una regla firme reduce el universo de opciones. El docente la ilustró con la competencia territorial, pero aplica a todo el examen — habilidad transversal valiosa.",
     "b": "Metodología PGN",
     "d": 1
    },
    {
     "t": 3,
     "c": "Proceso Laboral",
     "af": "En segunda instancia el reparto nacional también puede operar bajo las disposiciones del parágrafo respectivo",
     "rz": "la finalidad de equilibrar cargas y agilizar la resolución de controversias de puro derecho no se agota en la primera instancia",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el propio texto extiende la posibilidad de reparto nacional a la segunda instancia para controversias jurídicas sin pruebas, coherente con el objetivo de descongestión y equilibrio de cargas.",
     "b": "Nuevo C.P.T.",
     "d": 2
    },
    {
     "t": 1,
     "c": "Proceso Laboral",
     "q": "La primera audiencia del proceso ordinario laboral (art. 77 C.P.T.S.S.) es de:",
     "o": [
      "Solo alegatos y sentencia",
      "Conciliación, decisión de excepciones previas, saneamiento y fijación del litigio",
      "Únicamente práctica de pruebas",
      "Lectura de la demanda"
     ],
     "a": 1,
     "e": "La audiencia del art. 77 concentra conciliación obligatoria, resolución de excepciones previas, saneamiento del proceso y fijación del litigio. Es pieza clave de la oralidad y la concentración laborales.",
     "b": "C.P.T.S.S. art. 77",
     "d": 1
    },
    {
     "t": 1,
     "c": "Seguridad Social",
     "q": "En la SUSTITUCIÓN PENSIONAL, la tesis jurisprudencial vigente expuesta en clase reconoce el derecho, tratándose de compañero o compañera permanente, a quien acredite:",
     "o": [
      "Convivencia con el causante durante los últimos 5 años anteriores a la muerte",
      "Cualquier convivencia, sin importar el tiempo",
      "Solo el vínculo matrimonial vigente",
      "Haber dependido económicamente sin convivencia"
     ],
     "a": 0,
     "e": "La regla: para el compañero(a) permanente, convivencia con el causante durante los últimos 5 años anteriores al fallecimiento; para el cónyuge con sociedad conyugal vigente, 5 años en cualquier tiempo. Este es el criterio que dirime los conflictos entre beneficiarios que el docente ilustró con casos reales.",
     "b": "Ley 100/1993 art. 47 · Jurisprudencia",
     "d": 1
    },
    {
     "t": 2,
     "c": "Seguridad Social",
     "q": "Son prestaciones del Sistema General de Pensiones:",
     "s": [
      "La pensión de vejez",
      "La pensión de invalidez de origen común",
      "La pensión de sobrevivientes (y la sustitución pensional)",
      "El auxilio de cesantía"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 — las tres contingencias del sistema pensional (vejez, invalidez, muerte). La 4 es falsa: la cesantía es una prestación social a cargo del empleador, no una pensión del SGP.",
     "b": "Ley 100/1993 · CST",
     "d": 2
    },
    {
     "t": 1,
     "c": "Seguridad Social",
     "q": "La Ley 2381 de 2024 (reforma pensional) estructura el sistema de protección para la vejez sobre un modelo de:",
     "o": [
      "Un único régimen de ahorro individual",
      "PILARES (solidario, semicontributivo, contributivo y de ahorro voluntario), con un componente de prima media y otro complementario de ahorro individual",
      "La eliminación de Colpensiones",
      "La capitalización privada obligatoria total"
     ],
     "a": 1,
     "e": "La reforma adopta el esquema de pilares (solidario, semicontributivo, contributivo con un umbral en prima media, y ahorro voluntario), integrando administración pública y privada por tramos de ingreso. Dato normativo reciente de alto valor — confirma vigencia y régimen de transición.",
     "b": "Ley 2381/2024",
     "d": 1
    },
    {
     "t": 3,
     "c": "Seguridad Social",
     "af": "Cuando concurren cónyuge y compañero(a) permanente con convivencias simultáneas, la pensión de sobrevivientes puede dividirse en proporción al tiempo de convivencia con el causante",
     "rz": "la jurisprudencia ha privilegiado el criterio material de convivencia efectiva sobre el mero vínculo formal para distribuir el derecho",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: ante convivencias simultáneas o sucesivas, la Corte ha admitido la distribución proporcional al tiempo de convivencia, dando primacía a la convivencia real — precisamente los «cuentos» de sustitución que narró el docente.",
     "b": "Ley 100/1993 art. 47 · Jurisprudencia CSJ y C. Const.",
     "d": 3
    },
    {
     "t": 1,
     "c": "Seguridad Social",
     "q": "La pensión de INVALIDEZ de origen común exige, por regla general, acreditar una pérdida de capacidad laboral igual o superior al:",
     "o": [
      "25%",
      "50%",
      "60% (y un mínimo de semanas cotizadas en un período determinado)",
      "75%"
     ],
     "a": 2,
     "e": "Se requiere PCL igual o superior al 50% para calificar como inválido; el derecho a la pensión exige además haber cotizado un mínimo de semanas (generalmente 50 en los 3 años anteriores a la estructuración). La cifra del 50% de PCL es el umbral de invalidez; el 60% referido corresponde a invalidez «severa» en ciertos efectos — verifica el supuesto exacto de la pregunta.",
     "b": "Ley 100/1993 arts. 38-39",
     "d": 1
    },
    {
     "t": 1,
     "c": "Seguridad Social",
     "q": "El principio de que el juez de seguridad social debe entender que «detrás del expediente hay vida», enfatizado en clase, se traduce jurídicamente en:",
     "o": [
      "Fallar siempre a favor del solicitante",
      "Aplicar los principios de la seguridad social (universalidad, solidaridad, favorabilidad) y valorar la realidad de la convivencia y la dependencia, más allá del formalismo documental",
      "Ignorar los requisitos legales",
      "Resolver por equidad pura sin norma"
     ],
     "a": 1,
     "e": "La invitación humanística del docente tiene anclaje normativo: los principios del art. 48 C.P. y de la Ley 100 orientan al juez a interpretar los requisitos a la luz de la finalidad protectora del sistema, valorando la realidad material — sin renunciar a la legalidad.",
     "b": "C.P. art. 48 · Ley 100/1993",
     "d": 1
    },
    {
     "t": 2,
     "c": "Seguridad Social",
     "q": "Son principios constitucionales del servicio público de seguridad social (art. 48 C.P.):",
     "s": [
      "Eficiencia",
      "Universalidad",
      "Solidaridad",
      "Gratuidad absoluta en todos los regímenes"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 — eficiencia, universalidad y solidaridad son los principios expresos del art. 48. La 4 es falsa: el sistema es contributivo en su componente principal; no hay gratuidad absoluta general.",
     "b": "C.P. art. 48",
     "d": 2
    },
    {
     "t": 1,
     "c": "Seguridad Social",
     "q": "La CONDICIÓN MÁS BENEFICIOSA en materia pensional permite que:",
     "o": [
      "Se apliquen siempre las normas vigentes al momento del fallo",
      "Se aplique una norma anterior más favorable, ya derogada, cuando el afiliado consolidó una expectativa legítima bajo su vigencia, en supuestos de pensión de invalidez o sobrevivientes",
      "Se ignore el régimen de transición",
      "El juez fije libremente el monto"
     ],
     "a": 1,
     "e": "La condición más beneficiosa, de construcción jurisprudencial, protege expectativas legítimas: permite acudir a la norma derogada inmediatamente anterior cuando el afiliado cumplió sus densidades de cotización bajo ella, evitando la desprotección por el tránsito normativo — típico en invalidez y sobrevivientes.",
     "b": "Jurisprudencia CSJ y C. Const.",
     "d": 1
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Laboral · Contrato realidad",
     "q": "Una persona presta servicios de forma personal, cumpliendo horario y recibiendo instrucciones diarias de un supervisor, pero firmó un contrato de prestación de servicios civil. Al terminar, reclama prestaciones sociales. La empresa alega que no hubo relación laboral porque el contrato era civil. Conforme al principio de primacía de la realidad:",
     "o": [
      "Se configura un contrato realidad si concurren la prestación personal, la subordinación y la remuneración, con independencia de la denominación dada por las partes",
      "Solo hay contrato de trabajo si las partes lo denominaron expresamente así",
      "Prevalece lo pactado por escrito, pues las partes eligieron libremente un contrato civil",
      "No hay relación laboral si el contratista emitía facturas y estaba inscrito en el RUT"
     ],
     "a": 0,
     "e": "El principio de primacía de la realidad (art. 53 C.P.; art. 23 CST) hace prevalecer los hechos sobre las formas: si concurren prestación personal, subordinación y remuneración, hay contrato de trabajo cualquiera sea la denominación. · Dar prevalencia a lo escrito desconoce la primacía de la realidad. · La facturación o el RUT son indicios formales que no desvirtúan la subordinación probada. · Exigir que las partes lo denominen 'de trabajo' subordina la realidad a la etiqueta, justo lo que el principio proscribe.",
     "b": "C.P. art. 53 · CST art. 23 · primacía de la realidad"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Laboral · Estabilidad reforzada",
     "q": "Un trabajador con una afección de salud diagnosticada, conocida por el empleador, es despedido sin autorización del inspector del trabajo. El empleador alega que adujo una justa causa objetiva. Conforme a la estabilidad laboral reforzada:",
     "o": [
      "La estabilidad reforzada solo protege a quien tenga calificada una pérdida de capacidad laboral superior al 50%",
      "Se presume que el despido obedeció a la condición de salud; para que sea eficaz requiere autorización del inspector del trabajo, y sin ella procede el reintegro e indemnización",
      "El despido es válido si se invocó cualquier justa causa, sin más trámite",
      "El empleador puede despedir libremente si paga la indemnización legal ordinaria"
     ],
     "a": 1,
     "e": "La estabilidad laboral reforzada protege a quien está en condición de debilidad manifiesta por salud: se presume que el despido obedeció a ella y, sin autorización del inspector, el despido es ineficaz, procediendo reintegro e indemnización (Ley 361/1997 art. 26; jurisprudencia constitucional). · Invocar 'cualquier justa causa' sin autorización no basta. · Exigir pérdida de capacidad superior al 50% restringe indebidamente la protección, que cobija la debilidad manifiesta sin ese umbral. · Pagar la indemnización ordinaria no sustituye la autorización ni sanea la ineficacia.",
     "b": "Ley 361 de 1997, art. 26 · C. Const. (SU-049/2017 y ss.) · estabilidad reforzada"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Laboral · Justas causas y debido proceso",
     "q": "Un empleador despide a un trabajador invocando una falta grave prevista en el reglamento interno, pero no lo cita a descargos ni le da oportunidad de defenderse. Conforme al régimen de terminación con justa causa:",
     "o": [
      "El despido es válido: la justa causa objetiva hace innecesario cualquier trámite",
      "La justa causa debe existir y comprobarse, pero además debe respetarse el debido proceso disciplinario cuando la falta se funda en el reglamento; su omisión puede viciar el despido",
      "El trabajador solo puede reclamar si prueba que la falta no ocurrió",
      "El debido proceso disciplinario solo aplica en el sector público"
     ],
     "a": 1,
     "e": "La terminación con justa causa por faltas disciplinarias exige, además de la causa, respetar el debido proceso (citación a descargos, oportunidad de defensa), especialmente cuando la falta se sustenta en el reglamento; su omisión puede tornar ineficaz el despido (jurisprudencia CSJ y C. Const.). · Afirmar que la justa causa hace innecesario todo trámite desconoce esa garantía. · Cargar al trabajador con probar la inexistencia de la falta invierte la carga. · Restringir el debido proceso al sector público es errado: también rige en relaciones laborales privadas de origen reglamentario.",
     "b": "CST art. 62 · C. Const. C-593/2014 · debido proceso disciplinario"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Derecho Laboral · Salario",
     "q": "Un empleador pacta con el trabajador que ciertos pagos habituales (auxilios de alimentación y transporte por encima del legal) 'no constituyen salario'. Al liquidar prestaciones, no los incluye. Conforme al CST:",
     "o": [
      "Los pagos que retribuyen directamente el servicio y son habituales constituyen salario pese al pacto; solo pueden excluirse los conceptos que la ley permite (art. 128 CST)",
      "El pacto es válido: las partes pueden excluir del salario cualquier pago que acuerden",
      "La exclusión salarial requiere autorización del Ministerio del Trabajo",
      "Todo auxilio es salario y nunca puede excluirse"
     ],
     "a": 0,
     "e": "Constituye salario todo lo que retribuye directamente el servicio de manera habitual; el art. 128 CST permite excluir solo ciertos conceptos (los que no retribuyen el trabajo, como beneficios o auxilios extralegales expresamente pactados como no salariales dentro de sus límites). Los pagos que sí retribuyen el servicio son salario pese al pacto. · Afirmar que puede excluirse 'cualquier' pago desborda el art. 128. · Sostener que 'todo auxilio es salario' ignora las exclusiones legales válidas. · La exclusión no requiere autorización ministerial: opera por acuerdo dentro de los límites legales.",
     "b": "CST arts. 127-128 · naturaleza salarial de los pagos"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Seguridad Social · Pensión de invalidez",
     "q": "Un afiliado sufre una pérdida de capacidad laboral del 60% por enfermedad de origen común. Solicita pensión de invalidez. La administradora la niega alegando que no cotizó 50 semanas en los tres años anteriores a la estructuración, aunque el afiliado sí las tiene en otro período. Conforme a la Ley 860 de 2003:",
     "o": [
      "La pensión procede con solo acreditar el 50% de pérdida, sin densidad de semanas",
      "Procede si acredita invalidez de al menos 50% y 50 semanas cotizadas dentro de los tres años anteriores a la fecha de estructuración, requisitos que debe verificar la administradora",
      "La pensión se niega: se exigen 50 semanas en cualquier momento de la vida laboral",
      "Solo procede si la invalidez es de origen laboral, no común"
     ],
     "a": 1,
     "e": "La pensión de invalidez de origen común exige invalidez igual o superior al 50% y 50 semanas cotizadas en los tres años anteriores a la estructuración (Ley 860/2003 art. 1). · Exigir las semanas 'en cualquier momento de la vida laboral' cambia la regla de densidad prevista. · Prescindir de la densidad de semanas desconoce un requisito legal. · Limitarla al origen laboral confunde el régimen de invalidez común con el del sistema de riesgos laborales.",
     "b": "Ley 860 de 2003, art. 1 · pensión de invalidez de origen común"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Seguridad Social · Pensión de sobrevivientes",
     "q": "Fallece un afiliado que convivía con su compañera permanente desde hacía siete años; también sobrevive una excónyuge con quien tuvo sociedad conyugal pero de quien estaba separado de hecho hacía años. Ambas reclaman la pensión de sobrevivientes. Conforme a la Ley 100 y la jurisprudencia:",
     "o": [
      "La excónyuge separada de hecho conserva siempre el 100% por la sociedad conyugal",
      "La pensión se pierde por existir dos reclamantes",
      "La pensión corresponde íntegramente a la cónyuge por el vínculo matrimonial vigente",
      "La compañera permanente que acredita convivencia con el causante en los últimos años tiene derecho; y puede haber lugar a distribución proporcional cuando concurran convivencia simultánea o derechos de cónyuge separada con vínculo vigente y aportes"
     ],
     "a": 3,
     "e": "El derecho a la sobrevivencia se ancla en la convivencia real con el causante; la jurisprudencia admite la convivencia como criterio y, en casos de concurrencia (convivencia simultánea, o cónyuge con vínculo vigente y aportes frente a compañera permanente), la distribución proporcional (Ley 100/1993 art. 47; jurisprudencia CSJ y C. Const.). · Dar todo a la cónyuge por el solo vínculo desconoce el requisito de convivencia. · Afirmar que se pierde por haber dos reclamantes es falso: se resuelve la titularidad o se distribuye. · Sostener que la excónyuge separada conserva siempre el 100% por la sociedad conyugal confunde el régimen patrimonial con el derecho pensional.",
     "b": "Ley 100 de 1993, art. 47 (mod. Ley 797/2003) · jurisprudencia sobre convivencia"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Proceso Laboral · Recurso de casación",
     "q": "En un proceso ordinario laboral, la sentencia de segunda instancia condena por una suma inferior al mínimo legal exigido para casar. La parte vencida quiere recurrir en casación. Conforme al CPTSS:",
     "o": [
      "La cuantía es irrelevante: la casación protege la ley, no el interés de la parte",
      "La casación procede solo si la sentencia fue unánime",
      "La casación laboral solo procede cuando el interés económico para recurrir supera la cuantía mínima legal; por debajo de ella, es improcedente",
      "Procede la casación siempre que la sentencia sea de segunda instancia"
     ],
     "a": 2,
     "e": "La casación laboral (CPTSS) exige que el interés económico para recurrir supere la cuantía mínima legal; sin ese interés, el recurso es improcedente. · Afirmar que procede 'siempre' contra sentencias de segunda instancia ignora el requisito de cuantía. · La unanimidad de la sentencia no es un presupuesto del recurso. · Sostener que la cuantía es irrelevante desconoce que la casación laboral está condicionada al interés económico mínimo.",
     "b": "CPTSS (Código Procesal del Trabajo y de la Seguridad Social) · cuantía para casar"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Proceso Laboral · Carga de la prueba",
     "q": "En un proceso laboral, el trabajador afirma haber laborado horas extras; el empleador lo niega. El empleador es quien tiene el control de los registros de jornada. Conforme al régimen probatorio laboral:",
     "o": [
      "El empleador nunca tiene carga probatoria en el proceso laboral",
      "La carga de probar las horas extras recae siempre y exclusivamente en el trabajador",
      "El trabajador debe probar la existencia del trabajo suplementario, pero el juez valora que los registros de jornada están bajo control del empleador, pudiendo aplicar reglas de carga y valoración favorables ante su renuencia",
      "Las horas extras se presumen siempre a favor del trabajador"
     ],
     "a": 2,
     "e": "En principio quien alega el trabajo suplementario debe probarlo, pero el juez laboral valora quién controla la prueba (registros de jornada) y puede extraer consecuencias de la renuencia del empleador a aportarlos, dentro de la libre valoración y las cargas probatorias. · Afirmar que la carga es 'siempre y exclusivamente' del trabajador ignora la posición probatoria del empleador. · Presumir 'siempre' las horas extras a favor del trabajador carece de sustento. · Sostener que el empleador 'nunca' tiene carga desconoce sus deberes probatorios y documentales.",
     "b": "CPTSS · carga y valoración de la prueba en el proceso laboral"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Laboral Colectivo · Fuero sindical",
     "q": "Un trabajador aforado (directivo sindical) es despedido sin que el empleador haya solicitado previamente el permiso judicial de levantamiento del fuero. El trabajador acude a la justicia. Conforme al régimen del fuero sindical:",
     "o": [
      "El despido es válido si se invocó justa causa, aunque no se haya levantado el fuero",
      "El levantamiento del fuero lo decide el propio empleador",
      "El despido sin el previo levantamiento judicial del fuero es ineficaz, y procede la acción de reintegro del trabajador aforado",
      "El fuero sindical solo protege frente a despidos sin justa causa"
     ],
     "a": 2,
     "e": "El fuero sindical impide despedir, desmejorar o trasladar al aforado sin previa autorización judicial (levantamiento del fuero); hacerlo sin ella torna ineficaz el despido y habilita la acción de reintegro (CST arts. 405 y ss.). · Invocar justa causa sin levantar el fuero no valida el despido: primero debe obtenerse el permiso. · El fuero protege también frente a despidos con justa causa (que deben canalizarse por el permiso judicial). · El levantamiento lo decide el juez, no el empleador.",
     "b": "CST arts. 405-411 · fuero sindical y acción de reintegro"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Laboral · Prescripción",
     "q": "Un trabajador reclama salarios y prestaciones causados hace más de tres años, sin haber presentado antes reclamo escrito ni demanda. El empleador propone prescripción. Conforme al CST:",
     "o": [
      "No hay prescripción: los derechos laborales son imprescriptibles por ser irrenunciables",
      "La prescripción es de diez años como toda acción civil",
      "Las acciones laborales prescriben en tres años desde que la obligación se hizo exigible, término interrumpible por una sola vez con el reclamo escrito; la irrenunciabilidad no impide la prescripción",
      "La irrenunciabilidad convierte todo derecho laboral en imprescriptible"
     ],
     "a": 2,
     "e": "Las acciones laborales prescriben en tres años contados desde la exigibilidad, con interrupción por una sola vez mediante reclamo escrito (CST arts. 488 y 489). La irrenunciabilidad de los derechos no equivale a imprescriptibilidad: el derecho existe, pero la acción para exigirlo prescribe. · Afirmar la imprescriptibilidad confunde irrenunciabilidad con imprescriptibilidad. · Aplicar el término civil de diez años desconoce el régimen laboral especial. · Repetir que la irrenunciabilidad vuelve imprescriptible todo derecho reitera el mismo error conceptual.",
     "b": "CST arts. 488-489 · prescripción trienal laboral"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Derecho Laboral · Terminación sin justa causa",
     "q": "Un empleador termina un contrato a término indefinido sin justa causa. El trabajador reclama. Conforme al CST, la consecuencia principal es:",
     "o": [
      "El pago de la indemnización por despido sin justa causa tarifada según el tiempo de servicio y el tipo de contrato",
      "El reintegro obligatorio al cargo en todos los casos",
      "La nulidad del despido y el pago de todos los salarios dejados de percibir",
      "Ninguna consecuencia, pues el empleador puede terminar libremente"
     ],
     "a": 0,
     "e": "El despido sin justa causa de un contrato indefinido genera, como regla, el pago de la indemnización tarifada según el tiempo de servicio (CST art. 64), no el reintegro (que procede en supuestos especiales como fuero o estabilidad reforzada). · El reintegro 'en todos los casos' no es la consecuencia general. · Hablar de nulidad y salarios caídos corresponde a supuestos de ineficacia especial, no al despido sin justa causa ordinario. · Afirmar que no hay consecuencia desconoce el deber indemnizatorio.",
     "b": "CST art. 64 · indemnización por despido sin justa causa"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Seguridad Social · Régimen aplicable",
     "q": "Una persona cotizó muchos años en el régimen de prima media y luego se trasladó al de ahorro individual; al pensionarse, discute cuál régimen le aplica y si conserva un régimen de transición. Conforme a la Ley 100 y sus reformas:",
     "o": [
      "El traslado entre regímenes hace perder siempre todo derecho pensional",
      "El afiliado elige libremente el régimen más favorable al momento de pensionarse",
      "Siempre aplica el régimen de ahorro individual por ser el más reciente",
      "El régimen aplicable y la eventual conservación del régimen de transición dependen de los requisitos legales de edad, tiempo cotizado a la fecha de entrada en vigencia y de las reglas sobre traslados, que deben verificarse en concreto"
     ],
     "a": 3,
     "e": "La determinación del régimen y del régimen de transición depende de requisitos legales concretos (edad y semanas o tiempo a la fecha de vigencia de la Ley 100; reglas y límites de traslado), que deben verificarse caso a caso (Ley 100/1993; Acto Legislativo 01/2005). · Afirmar que 'siempre' aplica el de ahorro individual ignora esas reglas. · Sostener que el afiliado elige el más favorable al pensionarse desconoce los límites legales de traslado. · Decir que el traslado hace perder 'siempre' todo derecho es falso: se conserva lo cotizado, con reglas de acumulación.",
     "b": "Ley 100 de 1993 · Acto Legislativo 01 de 2005 · regímenes y transición"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Derecho Laboral · Principios",
     "q": "Al resolver una duda sobre cuál de dos interpretaciones de una norma laboral aplicar a un caso concreto, el juez debe guiarse por el principio de:",
     "o": [
      "Interpretación restrictiva, limitando siempre los derechos",
      "In dubio pro empleador, para proteger la actividad económica",
      "In dubio pro operario, prefiriendo, ante una duda seria sobre el sentido de la norma, la interpretación más favorable al trabajador",
      "Libre interpretación, escogiendo cualquier sentido posible"
     ],
     "a": 2,
     "e": "El principio in dubio pro operario (art. 53 C.P.; art. 21 CST) ordena que, ante una duda seria y objetiva sobre el sentido de una norma, se prefiera la interpretación más favorable al trabajador. · La 'libre interpretación' sin criterio favorable desconoce el principio protector. · El in dubio pro empleador invierte la regla constitucional. · La interpretación restrictiva de derechos contradice el carácter tutelar del derecho laboral.",
     "b": "C.P. art. 53 · CST art. 21 · in dubio pro operario"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Laboral · Tercerización",
     "q": "Una empresa contrata a través de una cooperativa de trabajo asociado a personas que ejecutan labores permanentes y misionales de la empresa, bajo su subordinación. Los trabajadores reclaman ser empleados directos. Conforme al marco vigente sobre intermediación laboral:",
     "o": [
      "La cooperativa es la única empleadora y la empresa nunca responde",
      "La tercerización es siempre válida por la autonomía de la empresa",
      "Los trabajadores asociados no tienen ninguna acción laboral",
      "Si la cooperativa se usa para intermediación laboral en labores permanentes y misionales bajo subordinación de la empresa usuaria, se desnaturaliza la figura y puede declararse la relación laboral con la beneficiaria, que responde"
     ],
     "a": 3,
     "e": "Las cooperativas de trabajo asociado no pueden usarse para intermediación laboral en actividades permanentes y misionales bajo subordinación de la usuaria; hacerlo desnaturaliza la figura y permite declarar la relación laboral con la empresa beneficiaria, que responde (Ley 1233/2008; Decreto 2025/2011). · Afirmar que la cooperativa es la única empleadora y la empresa 'nunca' responde desconoce esa desnaturalización. · Sostener que la tercerización es 'siempre' válida ignora sus límites legales. · Negar toda acción a los asociados desconoce la primacía de la realidad.",
     "b": "Ley 1233 de 2008 · Decreto 2025 de 2011 · intermediación laboral"
    }
   ],
   "rel": "laboral",
   "ambito": "Específico Laboral · Derecho Laboral y Seguridad Social"
  },
  {
   "id": "teoria",
   "numero": "T6",
   "fecha": "Tema",
   "titulo": "Filosofía, Argumentación, Hermenéutica y Dogmática",
   "docente": "Banco consolidado · módulos EJRLB y metodología PGN",
   "resumen": "Kelsen, Hart, Dworkin, Alexy, Radbruch, Ferrajoli, antinomias, textura abierta y teoría de la argumentación aplicada a la función judicial. Incluye Argumentación Jurídica (Dr. Daniel Sarmiento): justificación interna/externa, falacias y sesgos cognitivos.",
   "preguntas": [
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "Para Kelsen, la norma fundante básica (Grundnorm) es una norma positiva puesta por el constituyente originario.",
     "rz": "En la Teoría Pura, la validez de cada norma deriva de otra superior en la estructura escalonada, hasta llegar a un presupuesto lógico-trascendental del conocimiento jurídico que no es una norma puesta sino supuesta.",
     "a": 3,
     "e": "La afirmación es falsa: la Grundnorm no es una norma positiva, sino una hipótesis presupuesta por la ciencia jurídica. La razón es verdadera y describe correctamente la construcción escalonada (Stufenbau).",
     "b": "Kelsen, Teoría Pura del Derecho · Módulo EJRLB Filosofía del Derecho",
     "d": 3
    },
    {
     "t": 2,
     "c": "Filosofía del Derecho",
     "q": "Respecto de la teoría de H.L.A. Hart puede afirmarse que:",
     "s": [
      "La regla de reconocimiento es una regla secundaria que suministra los criterios de identificación del derecho válido",
      "La regla de reconocimiento deriva su validez de la norma fundante básica kelseniana",
      "La textura abierta del lenguaje jurídico genera casos de penumbra en los que el juez ejerce discrecionalidad",
      "El punto de vista interno corresponde al observador externo que solo registra regularidades de conducta"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3. La regla de reconocimiento no deriva de la Grundnorm: es una práctica social cuya existencia es una cuestión de hecho (2 falsa). El punto de vista interno es el del participante que acepta las reglas como pautas de conducta, no el del observador externo (4 falsa).",
     "b": "Hart, El Concepto de Derecho",
     "d": 3
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "La denominada «fórmula de Radbruch» sostiene que",
     "o": [
      "toda ley positiva debe obedecerse incondicionalmente por razones de seguridad jurídica",
      "cuando la contradicción entre la ley positiva y la justicia alcanza una medida insoportable, la ley, como «derecho injusto», debe ceder ante la justicia",
      "el derecho y la moral son sistemas normativos totalmente independientes y sin conexión posible",
      "la justicia de la ley depende exclusivamente de su eficacia social"
     ],
     "a": 1,
     "e": "Tras la experiencia del nacionalsocialismo, Radbruch sostuvo que la seguridad jurídica cede cuando la injusticia de la ley positiva es extrema e insoportable, e incluso que la norma que ni siquiera pretende la justicia carece de naturaleza jurídica.",
     "b": "Radbruch, Arbitrariedad legal y derecho supralegal (1946)",
     "d": 2
    },
    {
     "t": 2,
     "c": "Filosofía del Derecho",
     "q": "Respecto de la teoría de Ronald Dworkin puede afirmarse que:",
     "s": [
      "Los principios poseen una dimensión de peso o importancia de la que carecen las reglas",
      "Las reglas se aplican a la manera del «todo o nada»",
      "En los casos difíciles el juez no crea derecho con discrecionalidad fuerte, pues los principios ofrecen una respuesta correcta",
      "El derecho válido se identifica exclusivamente mediante un test de pedigrí u origen"
     ],
     "a": 0,
     "e": "Son correctas 1, 2 y 3, tesis centrales de «Los derechos en serio». La opción 4 es la tesis positivista que Dworkin ataca: precisamente porque los principios no se identifican por su pedigrí, la regla de reconocimiento resulta insuficiente.",
     "b": "Dworkin, Taking Rights Seriously · Módulo EJRLB Argumentación Judicial",
     "d": 2
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "En la teoría de Alexy, las colisiones entre principios se resuelven mediante ponderación, estableciendo relaciones de precedencia condicionada, y no mediante la declaración de invalidez de uno de ellos.",
     "rz": "Los principios son mandatos de optimización que ordenan que algo se realice en la mayor medida posible dentro de las posibilidades jurídicas y fácticas existentes.",
     "a": 0,
     "e": "Ambas son verdaderas y la razón explica la afirmación: como los principios admiten cumplimiento gradual, su colisión no se resuelve en el plano de la validez (propio de las reglas) sino en el del peso, según las circunstancias del caso.",
     "b": "Alexy, Teoría de los Derechos Fundamentales",
     "d": 3
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "Frente a una antinomia entre una norma superior anterior y una norma inferior posterior (antinomia de segundo grado entre los criterios jerárquico y cronológico), la solución aceptada es que",
     "o": [
      "prevalece la norma posterior por el criterio cronológico",
      "prevalece la norma superior anterior, pues el criterio jerárquico prima sobre el cronológico",
      "ambas normas se invalidan recíprocamente",
      "el juez elige libremente la norma aplicable"
     ],
     "a": 1,
     "e": "En los conflictos entre criterios, el jerárquico (lex superior) prevalece sobre el cronológico (lex posterior): la norma inferior posterior no puede derogar la superior anterior.",
     "b": "Bobbio, Teoría General del Derecho",
     "d": 1
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "Según Norberto Bobbio, es posible adoptar el positivismo jurídico como enfoque metodológico sin comprometerse con el positivismo ideológico.",
     "rz": "El positivismo ideológico sostiene que el derecho, por el solo hecho de ser positivo, es justo y debe ser obedecido incondicionalmente, tesis que no se sigue de estudiar el derecho tal como es.",
     "a": 0,
     "e": "Ambas son verdaderas y la razón explica la afirmación: Bobbio distingue el positivismo como modo de acercarse al estudio del derecho (describir el derecho que es), como teoría y como ideología; aceptar el primero no implica la adhesión valorativa del último.",
     "b": "Bobbio, El positivismo jurídico",
     "d": 3
    },
    {
     "t": 2,
     "c": "Dogmática Jurídica",
     "q": "En materia de lagunas normativas y su integración es cierto que:",
     "s": [
      "La analogía legis extiende la regla prevista para un supuesto específico a un caso semejante no regulado",
      "La analogía iuris acude a los principios generales que se inducen del conjunto del ordenamiento",
      "El artículo 8º de la Ley 153 de 1887 ordena aplicar las leyes que regulen casos o materias semejantes y, en su defecto, la doctrina constitucional y las reglas generales de derecho",
      "En materia penal la analogía procede in malam partem cuando la gravedad del caso lo exige"
     ],
     "a": 0,
     "e": "Son correctas 1, 2 y 3. La opción 4 es inadmisible: el principio de legalidad estricta solo tolera la analogía in bonam partem en materia penal (art. 6º C.P. y art. 6º Ley 599 de 2000).",
     "b": "Ley 153 de 1887, art. 8º · Art. 6º Ley 599 de 2000",
     "d": 3
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "Para el realismo jurídico de Alf Ross, afirmar que una norma es «derecho vigente» significa que",
     "o": [
      "fue promulgada conforme a la norma fundante básica",
      "es socialmente eficaz entre los ciudadanos, con independencia de los jueces",
      "constituye una directiva que con probabilidad será aplicada por los tribunales, porque estos la viven como socialmente obligatoria",
      "es intrínsecamente justa según la conciencia jurídica popular"
     ],
     "a": 2,
     "e": "Ross traduce la vigencia a un enunciado de probabilidad sobre el comportamiento judicial futuro: el derecho vigente es el conjunto de directivas que previsiblemente operarán en las decisiones de los tribunales por ser sentidas como vinculantes.",
     "b": "Ross, Sobre el derecho y la justicia",
     "d": 2
    },
    {
     "t": 2,
     "c": "Dogmática Jurídica",
     "q": "Sobre la justificación de las decisiones judiciales puede afirmarse que:",
     "s": [
      "La justificación interna atañe a la validez lógica de la inferencia entre las premisas y la conclusión",
      "La justificación externa se satisface con la sola corrección formal del silogismo judicial",
      "La justificación externa exige aportar razones sobre la corrección de la premisa normativa y de la premisa fáctica",
      "En los casos fáciles la justificación externa resulta lógicamente imposible"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3 (Wróblewski, MacCormick, Alexy). La justificación externa es precisamente lo que excede al silogismo (2 falsa) y es posible —y debida— también en los casos fáciles, aunque sea menos exigente (4 falsa).",
     "b": "Módulo EJRLB Argumentación Judicial · Wróblewski",
     "d": 2
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "En el garantismo de Ferrajoli, una norma puede estar vigente y, sin embargo, ser inválida.",
     "rz": "Para Ferrajoli la validez exige la coherencia sustancial de la norma con los contenidos de las normas superiores —especialmente los derechos fundamentales—, y no solo la observancia del procedimiento formal de producción.",
     "a": 0,
     "e": "Ambas son verdaderas y la razón explica la afirmación: la distinción entre vigencia (existencia formal) y validez (compatibilidad sustancial) es la base de la crítica garantista al paleopositivismo y del papel del juez como garante de los derechos.",
     "b": "Ferrajoli, Derecho y razón",
     "d": 3
    },
    {
     "t": 1,
     "c": "Dogmática Jurídica",
     "q": "La distinción entre «disposición» y «norma» significa que",
     "o": [
      "ambas expresiones son sinónimas en la teoría del derecho",
      "la disposición es el enunciado lingüístico del texto legal y la norma es el significado que la interpretación le atribuye, pudiendo una disposición expresar varias normas",
      "la norma es el texto escrito y la disposición su interpretación",
      "solo las disposiciones constitucionales contienen normas"
     ],
     "a": 1,
     "e": "La distinción (Crisafulli, Guastini) explica, entre otras cosas, las sentencias interpretativas o condicionadas: la Corte expulsa una de las normas (significados) manteniendo la disposición (texto).",
     "b": "Guastini, Interpretar y argumentar · Jurisprudencia sobre sentencias condicionadas",
     "d": 2
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "La tesis hartiana de la «textura abierta» del derecho sostiene que",
     "o": [
      "todas las normas jurídicas son radicalmente indeterminadas",
      "los términos clasificatorios generales poseen un núcleo de significado claro y una zona de penumbra, en la cual el juez debe ejercer discrecionalidad",
      "la indeterminación del derecho se elimina con una buena técnica legislativa",
      "solo el lenguaje constitucional padece indeterminación"
     ],
     "a": 1,
     "e": "Hart toma de Waismann la idea de open texture: ni el precedente ni la legislación eliminan la penumbra de los términos generales, de modo que en los casos marginales el juez completa el derecho; sin que ello implique, como en el escepticismo extremo, que todo caso sea indeterminado.",
     "b": "Hart, El Concepto de Derecho, cap. VII",
     "d": 1
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "Según Dworkin, en los casos difíciles el juez crea derecho nuevo ejerciendo una discrecionalidad en sentido fuerte.",
     "rz": "Para Dworkin, los principios jurídicos vinculan al juez incluso allí donde las reglas no ofrecen respuesta, por lo que existe, en principio, una única respuesta correcta que el juez debe descubrir.",
     "a": 3,
     "e": "La afirmación es falsa: describe la posición de Hart que Dworkin combate. La razón es verdadera y expresa la tesis dworkiniana de la respuesta correcta y del juez Hércules como aplicador —no creador— del derecho.",
     "b": "Dworkin, Los derechos en serio",
     "d": 3
    },
    {
     "t": 2,
     "c": "Dogmática Jurídica",
     "q": "Sobre los conceptos de validez, vigencia y eficacia puede afirmarse que:",
     "s": [
      "La validez alude a la pertenencia de la norma al ordenamiento conforme a sus criterios de producción",
      "La eficacia social es condición necesaria y suficiente de la validez de cada norma individualmente considerada",
      "Una norma puede ser válida y, no obstante, carecer de eficacia social",
      "Para Kelsen, la eficacia general del ordenamiento es jurídicamente irrelevante para la validez"
     ],
     "a": 1,
     "e": "Son correctas 1 y 3. En Kelsen la eficacia no es fundamento de validez de cada norma (2 falsa), pero la eficacia general del ordenamiento sí es condición —conditio sine qua non, no per quam— de su validez, por lo que tampoco es irrelevante (4 falsa).",
     "b": "Kelsen, Teoría Pura del Derecho · Módulo EJRLB Filosofía del Derecho",
     "d": 2
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "La «pretensión de corrección» formulada por Alexy sustenta una conexión conceptual necesaria entre el derecho y la moral.",
     "rz": "Todo sistema jurídico y todo acto jurídico institucional formulan, al menos implícitamente, una pretensión de ser correctos o justos, cuya negación explícita resultaría performativamente contradictoria.",
     "a": 0,
     "e": "Ambas son verdaderas y la razón explica la afirmación: del argumento de la pretensión de corrección deriva Alexy su no positivismo moderado, junto con el argumento de la injusticia (fórmula de Radbruch) y el de los principios.",
     "b": "Alexy, El concepto y la validez del derecho",
     "d": 3
    },
    {
     "t": 2,
     "c": "Dogmática Jurídica",
     "q": "Sobre los criterios de solución de antinomias normativas es cierto que:",
     "s": [
      "El criterio cronológico prevalece siempre sobre el jerárquico",
      "La ley general posterior deroga, automáticamente y en todos los casos, la ley especial anterior",
      "Las antinomias solo pueden presentarse entre normas de idéntica jerarquía",
      "En el conflicto entre el criterio jerárquico y el cronológico prevalece el jerárquico: la norma superior anterior prima sobre la inferior posterior"
     ],
     "a": 3,
     "e": "Solo es correcta la opción 4. El jerárquico prima sobre el cronológico (1 falsa); conforme a la Ley 57 de 1887 y a la doctrina, la especialidad resiste en principio a la ley general posterior, salvo voluntad derogatoria clara (2 falsa); y las antinomias pueden darse entre niveles distintos (3 falsa).",
     "b": "Bobbio, Teoría General del Derecho · Leyes 57 y 153 de 1887",
     "d": 2
    },
    {
     "t": 1,
     "c": "Dogmática Jurídica",
     "q": "El aporte central del finalismo de Welzel a la teoría del delito consistió en",
     "o": [
      "ubicar el dolo y la culpa como formas de la culpabilidad",
      "trasladar el dolo y la culpa de la culpabilidad al tipo, como consecuencia del concepto ontológico de acción final",
      "suprimir la categoría de la antijuridicidad",
      "negar toda relevancia a la voluntad en la acción"
     ],
     "a": 1,
     "e": "Para el finalismo la acción humana es ejercicio de actividad final; por ello el dolo pertenece al tipo subjetivo y la culpabilidad queda como puro juicio de reproche (conciencia de antijuridicidad, exigibilidad), estructura que influyó decisivamente en la dogmática y en el Código Penal de 2000.",
     "b": "Welzel, Derecho Penal Alemán · Dogmática de la Ley 599 de 2000",
     "d": 1
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "En el caso analizado en clase, la Procuraduría rechazó el acceso a la justicia por no haberse agotado un requisito de procedibilidad, aplicando la norma en su tenor literal; el Consejo de Estado corrigió esa decisión invocando la prevalencia del derecho de acceso a la administración de justicia. La postura de la Procuraduría refleja el:",
     "o": [
      "Iusnaturalismo racionalista",
      "Positivismo jurídico (a la manera de Kelsen): aplicación estricta de la norma como condición del sistema",
      "Realismo jurídico norteamericano",
      "Constitucionalismo principialista de Alexy"
     ],
     "a": 1,
     "e": "La aplicación literal del requisito, desatendiendo consideraciones sustanciales, ejemplifica el positivismo kelseniano: la validez y aplicación de la norma como dato del sistema. La corrección del Consejo de Estado, en cambio, opera desde la prevalencia de principios constitucionales (acceso a la justicia, art. 228 y 229 C.P.).",
     "b": "Kelsen · C.P. arts. 228-229",
     "d": 2
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "Para Kelsen, la validez de una norma no depende de su justicia o de su contenido moral, sino de haber sido creada conforme al procedimiento previsto por una norma superior",
     "rz": "en la Teoría Pura del Derecho la validez se explica por la estructura escalonada del ordenamiento, cuyo vértice es la norma hipotética fundamental",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: Kelsen separa derecho y moral; la validez es intrasistemática (Stufenbau), y la Grundnorm cierra la cadena de validez. Base teórica del positivismo que el docente contrastó con las posturas principialistas.",
     "b": "Kelsen, Teoría Pura del Derecho",
     "d": 3
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "La tesis de H.L.A. Hart sobre la «textura abierta» del derecho sostiene que:",
     "o": [
      "Todas las normas son siempre indeterminadas",
      "El lenguaje jurídico tiene un núcleo de significado claro y una zona de penumbra donde el juez ejerce discrecionalidad para resolver casos difíciles",
      "El juez nunca crea derecho",
      "El derecho se reduce a la moral"
     ],
     "a": 1,
     "e": "Hart: las reglas, por el lenguaje, tienen casos claros (núcleo) y casos dudosos (penumbra); en estos el juez decide con discrecionalidad. Frente a esto, Dworkin objetará que aun en casos difíciles hay respuesta correcta vía principios.",
     "b": "Hart, El Concepto de Derecho",
     "d": 1
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "Para Dworkin, en los casos difíciles el juez no ejerce discrecionalidad fuerte, sino que debe hallar la respuesta correcta integrando reglas y principios",
     "rz": "el derecho no se compone solo de reglas aplicables por todo o nada, sino también de principios que operan con una dimensión de peso",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: Dworkin distingue reglas (todo-o-nada) de principios (dimensión de peso) y, contra Hart, niega la discrecionalidad fuerte, postulando la «única respuesta correcta» (el juez Hércules). Contraste medular de la clase.",
     "b": "Dworkin, Los Derechos en Serio",
     "d": 2
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "La «fórmula de Radbruch» resuelve la tensión entre seguridad jurídica y justicia estableciendo que:",
     "o": [
      "La ley siempre prevalece sobre la justicia",
      "La injusticia extrema no es derecho: la ley positiva debe ceder ante la justicia cuando su contradicción con ella alcanza una medida intolerable",
      "La justicia carece de relevancia jurídica",
      "El juez debe aplicar la ley aunque sea genocida"
     ],
     "a": 1,
     "e": "Radbruch: normalmente prima la seguridad (ley positiva), pero cuando la ley es «intolerablemente injusta» deja de ser derecho válido. Fórmula clave en el tránsito del positivismo hacia posturas que reincorporan la justicia — muy usada tras regímenes totalitarios.",
     "b": "Radbruch, Arbitrariedad legal y derecho supralegal",
     "d": 1
    },
    {
     "t": 2,
     "c": "Filosofía del Derecho",
     "q": "Sobre la teoría de los principios de Robert Alexy son ciertas:",
     "s": [
      "Los principios son mandatos de optimización, que ordenan realizar algo en la mayor medida posible según las posibilidades fácticas y jurídicas",
      "La colisión de principios se resuelve mediante ponderación",
      "La ley de la ponderación relaciona el grado de afectación de un principio con la importancia de satisfacer el otro",
      "Las reglas también se aplican por ponderación, igual que los principios"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: para Alexy los principios son mandatos de optimización y su colisión se resuelve ponderando (test de proporcionalidad). La 4 es falsa: las reglas se aplican por subsunción (todo-o-nada), no por ponderación — distinción esencial reglas/principios.",
     "b": "Alexy, Teoría de los Derechos Fundamentales",
     "d": 2
    },
    {
     "t": 1,
     "c": "Filosofía del Derecho",
     "q": "El principio de proporcionalidad, herramienta central del control constitucional contemporáneo, se compone de los subprincipios de:",
     "o": [
      "Legalidad, publicidad y motivación",
      "Idoneidad, necesidad y proporcionalidad en sentido estricto (ponderación)",
      "Oralidad, inmediación y concentración",
      "Buena fe, confianza legítima y seguridad"
     ],
     "a": 1,
     "e": "Los tres subprincipios: idoneidad (la medida sirve al fin), necesidad (no hay medio menos lesivo igualmente eficaz) y proporcionalidad en sentido estricto (ponderación costo-beneficio entre principios). Es la estructura del juicio que aplica la Corte Constitucional.",
     "b": "Alexy · Jurisprudencia C. Const.",
     "d": 1
    },
    {
     "t": 3,
     "c": "Filosofía del Derecho",
     "af": "La decisión judicial que sacrifica el derecho sustancial en aras de un rigorismo formal puede ser reprochada desde la filosofía del derecho contemporánea",
     "rz": "tanto el principialismo como el propio artículo 228 de la Constitución subordinan las formas a la efectividad del derecho material",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la crítica al formalismo (caso de la Procuraduría en clase) se apoya en el principialismo y en el mandato del art. 228 C.P. de prevalencia del derecho sustancial — puente entre la teoría y la práctica judicial.",
     "b": "C.P. art. 228",
     "d": 2
    },
    {
     "t": 1,
     "c": "Argumentación Jurídica",
     "q": "En la teoría estándar de la argumentación jurídica (Atienza), la JUSTIFICACIÓN INTERNA de una decisión se refiere a:",
     "o": [
      "La corrección material de las premisas",
      "La validez lógica de la inferencia: que la conclusión se siga de las premisas (normativa y fáctica) conforme a las reglas de la lógica",
      "La motivación política del fallo",
      "La bondad moral del juez"
     ],
     "a": 1,
     "e": "La justificación interna atiende a la coherencia lógica entre premisas y conclusión (subsunción válida). La justificación externa, en cambio, evalúa la corrección o solidez de las propias premisas (por qué esa norma, por qué esos hechos). Distinción central de Wróblewski recogida por Atienza.",
     "b": "Atienza, Curso de Argumentación Jurídica",
     "d": 1
    },
    {
     "t": 1,
     "c": "Argumentación Jurídica",
     "q": "La JUSTIFICACIÓN EXTERNA de una decisión judicial se ocupa de:",
     "o": [
      "La mera concatenación silogística",
      "La fundamentación de las premisas mismas: la elección e interpretación de la norma aplicable y la valoración de la prueba que sustenta la premisa fáctica",
      "La redacción gramatical de la sentencia",
      "El cumplimiento de plazos procesales"
     ],
     "a": 1,
     "e": "La justificación externa justifica las premisas: por qué esa norma y esa interpretación (premisa normativa) y por qué se tienen por probados esos hechos (premisa fáctica). Es donde se juega la calidad argumentativa real de la motivación.",
     "b": "Atienza",
     "d": 1
    },
    {
     "t": 3,
     "c": "Argumentación Jurídica",
     "af": "Una decisión puede ser lógicamente válida (justificada internamente) y, sin embargo, incorrecta o injusta",
     "rz": "la validez lógica solo garantiza que la conclusión se sigue de las premisas, no que las premisas sean verdaderas, adecuadas o justas",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: un silogismo impecable a partir de una premisa normativa mal elegida o de hechos mal probados produce una conclusión válida pero incorrecta. Por eso la justificación externa es indispensable — idea nuclear de la clase.",
     "b": "Atienza",
     "d": 2
    },
    {
     "t": 1,
     "c": "Argumentación Jurídica",
     "q": "Una FALACIA (Atienza, La guerra de las falacias) es:",
     "o": [
      "Todo argumento con el que no estamos de acuerdo",
      "Un argumento que parece válido o correcto pero no lo es, y que puede resultar persuasivo pese a su incorrección lógica o material",
      "Cualquier error gramatical",
      "Una premisa verdadera mal ubicada"
     ],
     "a": 1,
     "e": "La falacia es un argumento incorrecto con apariencia de corrección, capaz de persuadir indebidamente. Distinguir falacias formales (fallo en la estructura lógica) de las informales (ambigüedad, apelaciones indebidas) es destreza clave del juez para no ser inducido a error ni incurrir en ellas.",
     "b": "Atienza, La guerra de las falacias",
     "d": 1
    },
    {
     "t": 2,
     "c": "Argumentación Jurídica",
     "q": "Son ejemplos de falacias informales relevantes en el razonamiento judicial:",
     "s": [
      "Ad hominem (atacar a la persona en lugar del argumento)",
      "Ad verecundiam mal empleada (apelación indebida a la autoridad)",
      "Petición de principio (dar por probado lo que se debe demostrar)",
      "Modus ponens (afirmar el antecedente para inferir el consecuente)"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: ad hominem, apelación indebida a la autoridad y petición de principio son falacias. La 4 es falsa: el modus ponens es una forma de inferencia VÁLIDA, no una falacia — distractor típico para quien confunde forma válida con falacia.",
     "b": "Atienza · Lógica",
     "d": 2
    },
    {
     "t": 3,
     "c": "Argumentación Jurídica",
     "af": "Los SESGOS COGNITIVOS pueden afectar la imparcialidad y la calidad de la decisión judicial aun en jueces de buena fe",
     "rz": "heurísticos como el anclaje, la confirmación o la disponibilidad operan de forma no consciente en la valoración de la prueba y la construcción de las premisas",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la literatura sobre sesgos (Kahneman; Kohan en el módulo) muestra que anclaje, sesgo de confirmación y heurística de disponibilidad distorsionan juicios sin intención — de ahí la importancia de protocolos, motivación explícita y autocrítica.",
     "b": "Kohan, Sesgos cognitivos",
     "d": 2
    },
    {
     "t": 1,
     "c": "Argumentación Jurídica",
     "q": "El SESGO DE CONFIRMACIÓN, especialmente peligroso en la valoración probatoria, consiste en:",
     "o": [
      "Confirmar la identidad de los testigos",
      "La tendencia a buscar, interpretar y recordar la información de modo que confirme las hipótesis o creencias previas del juzgador, descartando la evidencia en contrario",
      "La obligación de confirmar las notificaciones",
      "Un método válido de análisis probatorio"
     ],
     "a": 1,
     "e": "El sesgo de confirmación lleva a sobrevalorar lo que respalda la hipótesis inicial y a minimizar lo que la contradice — grave en la prueba, donde el juez debe mantener apertura y someter su hipótesis a refutación. Conocerlo es el primer paso para contrarrestarlo.",
     "b": "Kohan",
     "d": 2
    },
    {
     "t": 1,
     "c": "Argumentación Jurídica",
     "q": "El marco dentro del cual el juez despliega su creatividad argumentativa —según la síntesis del docente— está dado por:",
     "o": [
      "La libre convicción sin límites",
      "La Constitución y la ley, el debido proceso y la tutela jurisdiccional efectiva, dentro de los cuales el razonamiento puede ser dinámico y creativo",
      "Las preferencias personales del juez",
      "Únicamente el precedente vertical"
     ],
     "a": 1,
     "e": "El docente insistió: las reglas del juego son la Constitución, la ley, el debido proceso y la tutela judicial efectiva; dentro de ese marco, el jurista puede —y debe— argumentar con creatividad y rigor. Libertad argumentativa no es arbitrariedad: es razonamiento justificado dentro del ordenamiento.",
     "b": "C.P. arts. 29, 228, 229",
     "d": 1
    },
    {
     "t": 1,
     "d": 2,
     "c": "Hermenéutica Jurídica",
     "q": "La interpretación GRAMATICAL o literal de la ley consiste en:",
     "o": [
      "Atender al espíritu o finalidad de la norma",
      "Atender al sentido propio de las palabras de la ley, según su tenor literal y las reglas del lenguaje",
      "Acudir a la voluntad histórica del legislador",
      "Aplicar la norma por analogía"
     ],
     "a": 1,
     "e": "El elemento gramatical (art. 27 C.C.) parte del tenor literal: cuando el sentido de la ley es claro, no se desatiende su tenor a pretexto de consultar su espíritu. Es el punto de partida de la interpretación.",
     "b": "C.C. arts. 27-32 · Hermenéutica"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Hermenéutica Jurídica",
     "q": "Conforme al art. 30 del Código Civil, «el contexto de la ley servirá para ilustrar el sentido de cada una de sus partes, de manera que haya entre todas ellas la debida correspondencia y armonía». Esto corresponde al criterio:",
     "o": [
      "Gramatical",
      "Sistemático",
      "Histórico",
      "Analógico"
     ],
     "a": 1,
     "e": "La interpretación sistemática entiende cada disposición dentro del conjunto del ordenamiento, buscando coherencia entre las partes. El art. 30 C.C. es su base legal en Colombia.",
     "b": "C.C. art. 30 · Interpretación sistemática"
    },
    {
     "t": 3,
     "d": 3,
     "c": "Hermenéutica Jurídica",
     "af": "Cuando el sentido de la ley es claro, no se desatenderá su tenor literal a pretexto de consultar su espíritu",
     "rz": "pero bien se puede, para interpretar una expresión oscura de la ley, recurrir a su intención o espíritu, claramente manifestados en ella misma o en la historia fidedigna de su establecimiento",
     "a": 1,
     "e": "Ambas son verdaderas (art. 27 C.C.), pero la razón no explica la afirmación: describe la regla complementaria para los pasajes OSCUROS, no el fundamento de la regla sobre los claros. Son dos mandatos distintos del mismo artículo. Clave B.",
     "b": "C.C. art. 27"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Hermenéutica Jurídica",
     "q": "El criterio TELEOLÓGICO de interpretación se orienta a:",
     "o": [
      "La sola literalidad del texto",
      "La finalidad o los fines que persigue la norma (su ratio legis)",
      "El orden de los artículos",
      "El idioma en que se redactó"
     ],
     "a": 1,
     "e": "La interpretación teleológica indaga el fin o propósito de la norma (para qué existe), superando la literalidad cuando esta frustra el objetivo perseguido. Es central en el Estado constitucional.",
     "b": "Hermenéutica · Interpretación teleológica"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Hermenéutica Jurídica",
     "q": "Un juez halla que dos normas vigentes, de igual jerarquía, regulan el mismo supuesto de forma incompatible; una es general y anterior, la otra especial y posterior. Para resolver la antinomia, el criterio que prima es:",
     "o": [
      "La norma general, por abarcar más casos",
      "La norma especial y posterior, por los criterios de especialidad y cronología",
      "La de mayor extensión",
      "Ninguna: debe abstenerse de fallar"
     ],
     "a": 1,
     "e": "Ante antinomias entre normas de igual jerarquía operan los criterios de especialidad (lex specialis) y cronológico (lex posterior). Aquí la norma especial y posterior desplaza a la general anterior en el punto de conflicto. El juez no puede abstenerse: debe integrar el ordenamiento.",
     "b": "Hermenéutica · Antinomias · Ley 57/1887"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Hermenéutica Jurídica",
     "q": "La ANALOGÍA como método de integración del derecho procede cuando:",
     "o": [
      "Existe una norma clara y directamente aplicable",
      "Hay un vacío o laguna y se aplica a un caso no regulado la norma prevista para un caso semejante, por identidad de razón",
      "La ley prohíbe expresamente su uso en todo el derecho",
      "Se quiere derogar una norma"
     ],
     "a": 1,
     "e": "La analogía (art. 8 Ley 153/1887; art. 12 CGP) llena vacíos aplicando a un caso no previsto la regla de otro semejante, cuando media la misma razón (ubi eadem ratio). No procede si hay norma directa, ni en materia penal in malam partem.",
     "b": "Ley 153/1887 art. 8 · CGP art. 12 · Analogía"
    },
    {
     "t": 3,
     "d": 2,
     "c": "Hermenéutica Jurídica",
     "af": "En caso de insuficiencia de la ley, el juez debe acudir a los principios generales del derecho para resolver el asunto",
     "rz": "el ordenamiento jurídico se concibe como un sistema pleno, de modo que el juez no puede dejar de fallar so pretexto de silencio, oscuridad o insuficiencia de la ley",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la plenitud del ordenamiento (art. 230 C.P.; art. 48 Ley 153/1887) impone el deber de fallar integrando con analogía, principios generales, doctrina constitucional y equidad. La prohibición del non liquet fundamenta el recurso a los principios.",
     "b": "C.P. art. 230 · Ley 153/1887 · Plenitud del ordenamiento"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Hermenéutica Jurídica",
     "q": "El aforismo «donde la ley no distingue, no le es dado distinguir al intérprete» significa que:",
     "o": [
      "El intérprete puede crear excepciones no previstas",
      "Si la norma no establece distinciones, el intérprete no debe introducir distinciones que la ley no hizo",
      "La ley siempre tiene lagunas",
      "Se debe interpretar en contra del texto"
     ],
     "a": 1,
     "e": "El aforismo (ubi lex non distinguit, nec nos distinguere debemus) limita al intérprete: no puede agregar condiciones o excepciones que el legislador no estableció. Preserva la literalidad y la seguridad jurídica.",
     "b": "Hermenéutica · Aforismos de interpretación"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Argumentación · Ratio decidendi vs. obiter dicta",
     "q": "En una sentencia, la Corte resuelve el caso con base en una regla determinante, pero incluye además comentarios generales sobre un tema no decisivo para el fallo. Un litigante invoca esos comentarios como precedente vinculante. Jurídicamente:",
     "o": [
      "Los obiter dicta prevalecen sobre la ratio por ser más generales",
      "Todo lo dicho por la Corte en la sentencia es vinculante por igual",
      "La distinción entre ratio y obiter no existe en el derecho colombiano",
      "Solo la ratio decidendi —la regla necesaria para resolver el caso— tiene fuerza vinculante como precedente; los comentarios no decisivos son obiter dicta, con valor persuasivo"
     ],
     "a": 3,
     "e": "Solo la ratio decidendi (la regla necesaria para decidir) constituye precedente vinculante; el obiter dictum tiene valor persuasivo, no obligatorio (jurisprudencia constitucional sobre precedente). · Afirmar que 'todo' vincula por igual borra la distinción. · Sostener que el obiter prevalece invierte la jerarquía argumentativa. · Negar la distinción desconoce doctrina consolidada del precedente en Colombia.",
     "b": "C. Const. (T-292/2006 y ss.) · ratio decidendi y obiter dicta"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Argumentación · Distinción de casos",
     "q": "Un juez enfrenta un caso cuyos hechos son relevantemente distintos de los de un precedente aparentemente aplicable. Si quiere apartarse del precedente, la técnica correcta es:",
     "o": [
      "Aplicar el precedente aunque los hechos sean distintos, para garantizar igualdad",
      "Declarar derogado el precedente",
      "Distinguir el caso (distinguishing): mostrar por qué los hechos materialmente relevantes difieren, de modo que la ratio del precedente no cubre el caso; o, si aplica, apartarse con carga argumentativa reforzada",
      "Ignorar el precedente sin mención alguna, por su autonomía judicial"
     ],
     "a": 2,
     "e": "Frente a un precedente, el juez puede distinguir el caso si los hechos materialmente relevantes difieren (la ratio no lo cubre); si es aplicable y quiere apartarse, debe hacerlo con carga argumentativa reforzada y explícita. · Ignorarlo sin mención viola el deber de respeto al precedente y la igualdad. · 'Declarar derogado' un precedente confunde jurisprudencia con ley. · Aplicarlo pese a hechos distintos desconoce que el precedente opera sobre supuestos análogos.",
     "b": "C. Const. · técnica del precedente: distinguishing y carga argumentativa"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Argumentación · Fundamento determinante",
     "q": "En un fallo con varios argumentos, se pide identificar cuál constituye el fundamento determinante de la decisión. El criterio correcto para hallarlo es:",
     "o": [
      "El que cita más normas",
      "Aquel sin el cual la decisión no se sostendría, es decir, el que guarda relación necesaria y suficiente con la parte resolutiva",
      "El primero que aparece en la motivación",
      "El argumento más extenso del texto"
     ],
     "a": 1,
     "e": "El fundamento determinante (ratio) es el argumento sin el cual la decisión no se sostendría: guarda relación necesaria con lo resuelto. · La extensión del argumento no determina su carácter decisivo. · El orden de aparición en la motivación es irrelevante. · La cantidad de normas citadas no convierte a un argumento en determinante.",
     "b": "Argumentación jurídica · identificación de la ratio decidendi"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Argumentación · Reglas vs. principios",
     "q": "Un juez enfrenta un conflicto entre dos normas: una regla precisa que ordena una consecuencia y un principio constitucional que apunta en sentido distinto. Conforme a la teoría de la argumentación (Alexy), la diferencia estructural relevante es que:",
     "o": [
      "Los principios siempre derrotan a las reglas",
      "Las reglas carecen de valor normativo frente a los principios",
      "Las reglas se aplican por subsunción y en la lógica del 'todo o nada'; los principios son mandatos de optimización que se aplican mediante ponderación, en distinta medida según las posibilidades fácticas y jurídicas",
      "Las reglas y los principios se aplican exactamente igual, mediante subsunción"
     ],
     "a": 2,
     "e": "Para Alexy, las reglas se aplican por subsunción ('todo o nada'), mientras los principios son mandatos de optimización que se realizan en distinta medida y, en colisión, se resuelven por ponderación. · Afirmar que se aplican 'igual' borra la distinción estructural. · Sostener que los principios 'siempre' derrotan a las reglas ignora que las reglas, como concreción de principios, tienen prevalencia prima facie. · Negar valor normativo a las reglas es contrario a su carácter vinculante.",
     "b": "Teoría de la argumentación · R. Alexy · reglas y principios"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Argumentación · Falacias",
     "q": "En un debate jurídico, una parte, en lugar de refutar el argumento del contrario, descalifica a la persona que lo formula ('no hay que oírlo porque es inexperto'). Este proceder constituye la falacia de:",
     "o": [
      "Apelación a la autoridad (ad verecundiam)",
      "Petición de principio (petitio principii)",
      "Falso dilema",
      "Ataque a la persona (ad hominem), que desvía la discusión del argumento hacia quien lo sostiene"
     ],
     "a": 3,
     "e": "La falacia ad hominem ataca a quien argumenta en vez de refutar el argumento, desviando el debate. · La petición de principio da por probado lo que se debe demostrar (razonamiento circular), distinto del ataque personal. · El falso dilema reduce artificialmente las opciones a dos. · La apelación a la autoridad invoca a un experto como si zanjara la cuestión, distinta del ataque a la persona.",
     "b": "Argumentación · falacias informales · ad hominem"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Argumentación · Estructura del argumento",
     "q": "En un argumento jurídico deductivo (silogismo), la premisa mayor está constituida, típicamente, por:",
     "o": [
      "La opinión personal del juez",
      "Los hechos probados del caso",
      "La conclusión o parte resolutiva",
      "La norma jurídica aplicable (premisa normativa), de la que, junto con los hechos, se deriva la conclusión"
     ],
     "a": 3,
     "e": "En el silogismo jurídico la premisa mayor es la norma aplicable, la menor son los hechos probados, y de su conjunción se deriva la conclusión. · Los hechos probados son la premisa menor, no la mayor. · La conclusión es el resultado, no una premisa. · La opinión personal no es una premisa jurídica válida: la decisión se funda en la norma y los hechos.",
     "b": "Argumentación · silogismo jurídico · premisa mayor y menor"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Argumentación · Interpretación",
     "q": "Una norma admite una lectura literal que conduce a un resultado absurdo o contrario a su finalidad. El juez, para evitarlo, prefiere una interpretación acorde con el propósito de la norma. Este proceder corresponde a:",
     "o": [
      "La creación de una norma nueva por el juez",
      "Una interpretación contra legem prohibida",
      "Una interpretación teleológica (y sistemática), que atiende a la finalidad de la norma y a su coherencia con el ordenamiento, corrigiendo el resultado absurdo de la lectura literal aislada",
      "Analogía in malam partem"
     ],
     "a": 2,
     "e": "Cuando la literalidad conduce al absurdo, la interpretación teleológica y sistemática permite atender la finalidad de la norma y su coherencia con el sistema, superando la lectura literal aislada. · No es contra legem: se mantiene dentro del sentido posible de la norma conforme a su fin. · No es analogía in malam partem, que crea consecuencias gravosas no previstas. · No es crear una norma nueva: es interpretar la existente conforme a su propósito.",
     "b": "Hermenéutica · interpretación teleológica y sistemática · C.C. arts. 30-32"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Argumentación · Carga de la argumentación",
     "q": "Un juez decide apartarse de un precedente vinculante que resolvía casos análogos. Para que su decisión sea legítima, la teoría del precedente exige que:",
     "o": [
      "Consulte previamente a la Corte Suprema",
      "Simplemente no mencione el precedente, en ejercicio de su autonomía",
      "Obtenga el consentimiento de las partes",
      "Cumpla una carga de argumentación reforzada: haga explícito el precedente, exponga razones suficientes y transparentes para apartarse y garantice los principios de igualdad y confianza legítima"
     ],
     "a": 3,
     "e": "Apartarse de un precedente exige carga argumentativa reforzada: reconocerlo, dar razones suficientes y transparentes, y salvaguardar la igualdad y la confianza legítima. · Omitir el precedente sin mención viola el deber de respeto y la igualdad. · No se requiere consulta previa a la Corte Suprema. · El consentimiento de las partes es ajeno a la legitimidad de apartarse del precedente.",
     "b": "C. Const. · carga argumentativa para apartarse del precedente · igualdad"
    }
   ],
   "rel": "transversal",
   "ambito": "Transversal · Filosofía del derecho, Teoría jurídica, Hermenéutica y Argumentación (conocimientos generales)"
  },
  {
   "id": "transversales",
   "numero": "T8",
   "fecha": "Tema",
   "titulo": "Formación Judicial y Organización de la Rama",
   "docente": "Banco consolidado · módulos EJRLB y metodología PGN",
   "resumen": "Módulos transversales EJRLB: ética judicial, argumentación, género, despacho judicial y estructura de la Rama Judicial. Incluye Enfoques Diferenciales y perspectiva de género (Dra. Liliana Rojas). Incluye Ley Estatutaria de Administración de Justicia (Dr. Daniel Sarmiento) y Competencias/juicio situacional (Dra. Giovanna Rosso).",
   "preguntas": [
    {
     "t": 1,
     "c": "Formación Judicial EJRLB",
     "q": "El criterio sistemático de interpretación consiste en:",
     "o": [
      "Atender el tenor literal de las palabras de la ley",
      "Indagar la voluntad histórica del legislador",
      "Entender la norma dentro del contexto del ordenamiento jurídico como un todo coherente",
      "Buscar el fin social de la norma"
     ],
     "a": 2,
     "e": "El módulo de Interpretación Judicial de la EJRLB recoge los criterios clásicos (gramatical, histórico, sistemático y teleológico): el sistemático exige leer la disposición en armonía con el conjunto del ordenamiento.",
     "b": "Módulo EJRLB Interpretación Judicial · Arts. 27-32 C.C.",
     "d": 2
    },
    {
     "t": 1,
     "c": "Formación Judicial EJRLB",
     "q": "En argumentación jurídica, la justificación interna de una decisión se refiere a:",
     "o": [
      "La solidez y corrección de las premisas normativa y fáctica",
      "La validez lógica de la inferencia entre las premisas y la conclusión",
      "La aceptación social del fallo",
      "El estilo de redacción de la providencia"
     ],
     "a": 1,
     "e": "El módulo de Argumentación Judicial distingue la justificación interna (corrección lógico-deductiva del silogismo) de la externa (razones que sustentan la premisa normativa y la premisa fáctica).",
     "b": "Módulo EJRLB Argumentación Judicial en Debates Orales y Escritos",
     "d": 1
    },
    {
     "t": 1,
     "c": "Formación Judicial EJRLB",
     "q": "El principio de congruencia de la sentencia (art. 281 CGP) impide al juez civil, por regla general:",
     "o": [
      "Interpretar la demanda",
      "Condenar por cantidad superior o por objeto distinto del pretendido, o por causa diferente a la invocada",
      "Valorar pruebas de oficio",
      "Declarar excepciones probadas"
     ],
     "a": 1,
     "e": "La sentencia debe estar en consonancia con los hechos y pretensiones aducidos; las facultades ultra y extra petita son excepcionales (por ejemplo, en asuntos de familia y agrarios).",
     "b": "Art. 281 CGP · Módulo EJRLB Estructura de la Sentencia",
     "d": 1
    },
    {
     "t": 1,
     "c": "Formación Judicial EJRLB",
     "q": "En ética judicial, la diferencia entre independencia e imparcialidad radica en que:",
     "o": [
      "Son sinónimos",
      "La independencia protege al juez de injerencias externas al proceso; la imparcialidad garantiza equidistancia frente a las partes y al objeto del litigio",
      "La imparcialidad solo aplica a los jueces colegiados",
      "La independencia se predica únicamente del poder ejecutivo"
     ],
     "a": 1,
     "e": "El Código Iberoamericano de Ética Judicial y el módulo de Ética Judicial de la EJRLB distinguen la independencia (frente a presiones de otros poderes o actores) de la imparcialidad (posición del juez frente a las partes y la causa).",
     "b": "Código Iberoamericano de Ética Judicial · Módulo EJRLB Ética Judicial",
     "d": 1
    },
    {
     "t": 1,
     "c": "Formación Judicial EJRLB",
     "q": "Juzgar con perspectiva de género implica que el juez:",
     "o": [
      "Falle siempre a favor de la mujer",
      "Identifique y corrija situaciones estructurales de desigualdad y estereotipos que incidan en el caso, sin comprometer su imparcialidad",
      "Invierta la carga de la prueba en todos los procesos",
      "Aplique la ley solo cuando favorezca a la parte débil"
     ],
     "a": 1,
     "e": "El módulo EJRLB de Perspectiva de Género en la Decisión Judicial, con fundamento en la CEDAW y la Convención de Belém do Pará, lo concibe como un deber metodológico de análisis del contexto de desigualdad, compatible con la imparcialidad.",
     "b": "Módulo EJRLB Perspectiva de Género · CEDAW · Belém do Pará",
     "d": 2
    },
    {
     "t": 1,
     "c": "Organización Judicial",
     "q": "Según la Ley 270 de 1996, el ingreso a los cargos de carrera judicial se produce:",
     "o": [
      "Por libre nombramiento y remoción",
      "Con base en concurso de méritos y proceso de selección",
      "Por elección popular",
      "Por cooptación de los tribunales"
     ],
     "a": 1,
     "e": "La carrera judicial se funda en el carácter profesional de funcionarios y empleados, la eficacia y el mérito: el ingreso exige concurso y la conformación del registro de elegibles.",
     "b": "Arts. 156 y ss. Ley 270 de 1996",
     "d": 1
    },
    {
     "t": 1,
     "c": "Organización Judicial",
     "q": "El registro de elegibles conformado en los concursos de la Rama Judicial tiene una vigencia de:",
     "o": [
      "Dos años",
      "Tres años",
      "Cuatro años",
      "Vigencia indefinida"
     ],
     "a": 2,
     "e": "El art. 165 de la Ley 270 de 1996 dispone que el registro de elegibles tiene vigencia de cuatro años; la administración de la carrera corresponde al Consejo Superior de la Judicatura.",
     "b": "Art. 165 Ley 270 de 1996",
     "d": 1
    },
    {
     "t": 1,
     "c": "Organización Judicial",
     "q": "Constituye causal de impedimento del juez, entre otras (art. 141 CGP):",
     "o": [
      "Haber estudiado en la misma universidad que el apoderado",
      "Tener interés directo o indirecto en el proceso, o haber conocido de él en instancia anterior",
      "Residir en el mismo municipio de una de las partes",
      "Haber fallado casos similares"
     ],
     "a": 1,
     "e": "El art. 141 del CGP enumera las causales taxativas: interés en el proceso, haber conocido de él antes, parentesco, amistad íntima o enemistad grave, entre otras. El juez tiene el deber de declararse impedido tan pronto advierta la causal.",
     "b": "Arts. 140 a 142 CGP",
     "d": 1
    },
    {
     "t": 1,
     "c": "Formación Judicial EJRLB",
     "q": "El criterio sistemático de interpretación de la ley consiste en",
     "o": [
      "atender exclusivamente el tenor literal de las palabras",
      "indagar la voluntad histórica del legislador",
      "entender la norma dentro del contexto del ordenamiento jurídico como un todo coherente",
      "buscar únicamente la finalidad social de la norma"
     ],
     "a": 2,
     "e": "El módulo de Interpretación Judicial de la EJRLB recoge los criterios clásicos (gramatical, histórico, sistemático y teleológico): el sistemático exige leer la disposición en armonía con el conjunto del ordenamiento.",
     "b": "Módulo EJRLB Interpretación Judicial · Arts. 27 a 32 C.C.",
     "d": 2
    },
    {
     "t": 2,
     "c": "Organización Judicial",
     "q": "En relación con la carrera judicial regulada en la Ley 270 de 1996 es cierto que:",
     "s": [
      "El ingreso a los cargos de carrera se realiza con base en concurso de méritos",
      "Su administración corresponde al Consejo Superior de la Judicatura",
      "El registro de elegibles tiene una vigencia de cuatro (4) años",
      "Los cargos de juez de la República son de libre nombramiento y remoción"
     ],
     "a": 0,
     "e": "Las opciones 1, 2 y 3 corresponden a los arts. 156 y ss. y 165 de la Ley 270. Los cargos de juez son de carrera, no de libre nombramiento y remoción.",
     "b": "Arts. 156 y 165 Ley 270 de 1996",
     "d": 2
    },
    {
     "t": 3,
     "c": "Formación Judicial EJRLB",
     "af": "El juez puede apartarse de la doctrina probable y del precedente exponiendo clara y razonadamente los fundamentos jurídicos que justifican su decisión.",
     "rz": "El registro de elegibles conformado en los concursos de la Rama Judicial tiene una vigencia de cuatro años.",
     "a": 1,
     "e": "Ambas proposiciones son verdaderas (art. 7º CGP y art. 165 Ley 270), pero la vigencia del registro de elegibles nada explica sobre las cargas argumentativas para apartarse del precedente.",
     "b": "Art. 7º CGP · Art. 165 Ley 270 de 1996",
     "d": 3
    },
    {
     "t": 1,
     "c": "Enfoques Diferenciales",
     "q": "Administrar justicia con PERSPECTIVA DE GÉNERO significa, según la jurisprudencia y los módulos de la Comisión Nacional de Género de la Rama Judicial:",
     "o": [
      "Fallar siempre a favor de la mujer",
      "Identificar y corregir estereotipos y relaciones de poder desiguales, valorar el contexto de discriminación y remover barreras para garantizar igualdad material en la decisión",
      "Aplicar un derecho distinto según el sexo de las partes",
      "Una recomendación sin efectos jurídicos"
     ],
     "a": 1,
     "e": "La perspectiva de género es un método de análisis: detecta asimetrías y estereotipos, contextualiza la discriminación estructural y ajusta la valoración probatoria y la interpretación para lograr igualdad sustantiva (arts. 13 y 43 C.P.; CEDAW; Convención de Belém do Pará). No es parcialidad, sino corrección de sesgos.",
     "b": "C.P. arts. 13, 43 · CEDAW · Belém do Pará",
     "d": 1
    },
    {
     "t": 3,
     "c": "Enfoques Diferenciales",
     "af": "El ENFOQUE DIFERENCIAL obliga a considerar las condiciones particulares de sujetos de especial protección constitucional al momento de decidir",
     "rz": "la igualdad material exige tratar de manera distinta a quienes se encuentran en situaciones de desventaja o vulnerabilidad, para no perpetuar la discriminación",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el enfoque diferencial (mujeres, niñez, personas con discapacidad, grupos étnicos, personas mayores) deriva de la igualdad material del art. 13 C.P. — tratar igual a los iguales y distinto a los desiguales para remover barreras.",
     "b": "C.P. art. 13 · Jurisprudencia C. Const.",
     "d": 3
    },
    {
     "t": 1,
     "c": "Enfoques Diferenciales",
     "q": "La concepción DUALISTA de los derechos humanos expuesta en clase (Peces-Barba) sostiene que estos tienen:",
     "o": [
      "Solo una dimensión jurídica positiva",
      "Una dimensión ética (pretensiones morales justificadas ligadas a la dignidad) y una dimensión jurídica (su incorporación al derecho positivo, que los hace exigibles)",
      "Únicamente una dimensión política",
      "Una naturaleza puramente iusnaturalista"
     ],
     "a": 1,
     "e": "La tesis dualista integra la dimensión ética (los derechos como pretensiones morales fundadas en la dignidad) y la jurídica (positivización que los torna exigibles), superando la pugna entre iusnaturalismo y positivismo radical: uno necesita del otro.",
     "b": "Peces-Barba",
     "d": 1
    },
    {
     "t": 3,
     "c": "Enfoques Diferenciales",
     "af": "El derecho al CUIDADO ha sido reconocido por la Corte Constitucional, que ha ordenado a las EPS servicios de cuidador o asistente personal en ciertos casos",
     "rz": "históricamente la labor de cuidado ha recaído de forma desproporcionada en las mujeres, afectando sus proyectos de vida, por lo que el Estado y la sociedad comparten esa carga en virtud del principio de solidaridad",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la Corte ha avanzado en el reconocimiento del cuidado como derecho, ordenando asistencia personal y destacando que la carga no puede recaer solo en la familia (mujeres), sino compartirse por solidaridad — con perspectiva de género.",
     "b": "Jurisprudencia C. Const. · C.P. arts. 43, 49",
     "d": 3
    },
    {
     "t": 2,
     "c": "Enfoques Diferenciales",
     "q": "Integran el marco normativo de la igualdad y no discriminación aplicable por el juez:",
     "s": [
      "El artículo 13 de la Constitución",
      "La CEDAW (Convención sobre la eliminación de todas las formas de discriminación contra la mujer)",
      "La Convención de Belém do Pará sobre violencia contra la mujer",
      "Un régimen que excluye a los hombres de la protección contra la discriminación"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: art. 13 C.P., CEDAW y Belém do Pará son parámetros vinculantes (bloque de constitucionalidad). La 4 es falsa: la igualdad protege a toda persona; el enfoque de género no excluye a los hombres, que también pueden ser cuidadores o víctimas.",
     "b": "C.P. art. 13 · CEDAW · Belém do Pará",
     "d": 2
    },
    {
     "t": 1,
     "c": "Enfoques Diferenciales",
     "q": "La INTERSECCIONALIDAD, como herramienta de análisis, se refiere a:",
     "o": [
      "La suma aritmética de normas aplicables",
      "La concurrencia de varios factores de discriminación (género, etnia, discapacidad, edad, pobreza) que se entrecruzan y agravan la situación de vulnerabilidad de una persona",
      "La competencia entre jurisdicciones",
      "Un método exclusivo del derecho penal"
     ],
     "a": 1,
     "e": "La interseccionalidad reconoce que las discriminaciones no operan aisladas: una mujer indígena con discapacidad enfrenta una vulnerabilidad cualitativamente distinta. El juez debe leer el caso considerando esa superposición para dar respuesta adecuada.",
     "b": "Jurisprudencia C. Const.",
     "d": 1
    },
    {
     "t": 1,
     "c": "Enfoques Diferenciales",
     "q": "Frente a un caso de violencia basada en género, la valoración probatoria con perspectiva de género implica, entre otras cosas:",
     "o": [
      "Invertir siempre la carga de la prueba contra el hombre",
      "Analizar el contexto, evitar exigir pruebas imposibles, no revictimizar y reconocer el valor del testimonio de la víctima en contextos de violencia intrafamiliar o sexual",
      "Descartar el testimonio de la víctima por interés",
      "Exigir prueba científica en todos los casos"
     ],
     "a": 1,
     "e": "La perspectiva de género en la prueba manda contextualizar, no imponer estándares probatorios inalcanzables, evitar la revictimización y ponderar adecuadamente el testimonio de la víctima —frecuentemente la única prueba directa en violencia intrafamiliar/sexual— sin estereotipos que lo descalifiquen a priori.",
     "b": "Jurisprudencia C. Const. y CSJ",
     "d": 1
    },
    {
     "t": 3,
     "c": "Enfoques Diferenciales",
     "af": "Los derechos fundamentales positivizados resultan más exigibles que las meras aspiraciones morales no incorporadas al ordenamiento",
     "rz": "en un régimen democrático la consagración expresa de un derecho (p. ej., la protesta) refuerza su protección, mientras su ausencia formal —como en una dictadura— debilita su exigibilidad",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: es el corolario práctico de la tesis dualista de clase — la dimensión jurídica (positivización) convierte la pretensión moral en derecho exigible; su supresión, típica de regímenes autoritarios, erosiona la garantía.",
     "b": "Peces-Barba",
     "d": 3
    },
    {
     "t": 1,
     "c": "Ley Estatutaria de Administración de Justicia",
     "q": "La AUTONOMÍA E INDEPENDENCIA judicial, garantía estructural de la administración de justicia, significa que:",
     "o": [
      "El juez puede fallar sin sujeción a la Constitución y la ley",
      "El juez decide con base en el ordenamiento jurídico, libre de injerencias indebidas, pero SOMETIDO al imperio de la Constitución y la ley",
      "El juez no responde por sus decisiones",
      "El juez puede apartarse del debido proceso"
     ],
     "a": 1,
     "e": "Independencia no es arbitrariedad: el juez resuelve sin presiones externas ni internas, pero vinculado a la Constitución y la ley (art. 230 C.P.; Ley 270/1996). El docente advirtió que invocar la 'independencia' para decidir contra derecho es una falacia.",
     "b": "C.P. art. 230 · Ley 270/1996",
     "d": 2
    },
    {
     "t": 3,
     "c": "Ley Estatutaria de Administración de Justicia",
     "af": "El hecho de ser juez no confiere por sí mismo una presunción de acierto ni exime de fundamentar debidamente las decisiones",
     "rz": "la autonomía judicial protege la decisión frente a injerencias, pero no releva al juez del deber de motivación conforme al ordenamiento, ni convierte su sola investidura en garantía de corrección",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: fue la advertencia enfática de clase — la independencia no es una 'presunción de legalidad' automática por la investidura; el juez debe motivar y sujetarse al derecho, y su formación concreta determina la calidad de sus fallos.",
     "b": "Ley 270/1996",
     "d": 3
    },
    {
     "t": 2,
     "c": "Ley Estatutaria de Administración de Justicia",
     "q": "Son principios de la administración de justicia (Ley 270 de 1996) que orientan al juez:",
     "s": [
      "El acceso a la justicia",
      "La celeridad y la eficiencia",
      "La autonomía e independencia, y la responsabilidad de los funcionarios judiciales",
      "La gratuidad absoluta que excluye toda condena en costas"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: acceso, celeridad, eficiencia, autonomía, independencia y responsabilidad son principios de la Ley 270/1996. La 4 es falsa: la administración de justicia es gratuita como principio, pero ello no excluye la condena en costas a la parte vencida.",
     "b": "Ley 270/1996",
     "d": 2
    },
    {
     "t": 1,
     "c": "Ley Estatutaria de Administración de Justicia",
     "q": "El principio de PREVALENCIA DEL DERECHO SUSTANCIAL en la administración de justicia (art. 228 C.P. y Ley 270) implica que el juez:",
     "o": [
      "Debe privilegiar las formas procesales sobre el fondo",
      "No puede sacrificar la justicia material por un rigorismo formal, evitando el exceso ritual manifiesto",
      "Puede ignorar el procedimiento",
      "Solo aplica normas sustanciales, nunca procesales"
     ],
     "a": 1,
     "e": "La prevalencia del derecho sustancial ordena que las formas sirvan a la efectividad de los derechos; su desconocimiento por formalismo excesivo configura un defecto (exceso ritual manifiesto) corregible incluso por tutela. No autoriza saltarse el procedimiento, sino interpretarlo teleológicamente.",
     "b": "C.P. art. 228 · Ley 270/1996",
     "d": 2
    },
    {
     "t": 3,
     "c": "Ley Estatutaria de Administración de Justicia",
     "af": "El juez debe ser prudente al trasladar argumentos y precedentes de una especialidad a otra, pues cada jurisdicción tiene reglas propias",
     "rz": "lo que es válido en materia civil puede no serlo en laboral o administrativo, dadas las particularidades de términos, recursos y principios de cada área",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la 'prudencia' que insistió el docente — argumentar en civil con fundamentos laborales (o viceversa) puede romper el esquema, porque cada especialidad tiene sus reglas. El juez integral conoce las fronteras entre jurisdicciones.",
     "b": "Ley Estatutaria de Administración de Justicia",
     "d": 2
    },
    {
     "t": 1,
     "c": "Ley Estatutaria de Administración de Justicia",
     "q": "La estructura de la Rama Judicial, conforme a la Constitución y la Ley 270, comprende como altas cortes:",
     "o": [
      "Solo la Corte Suprema de Justicia",
      "La Corte Constitucional, la Corte Suprema de Justicia, el Consejo de Estado y la Comisión Nacional de Disciplina Judicial, además del Consejo Superior de la Judicatura",
      "Únicamente la Corte Constitucional",
      "La Fiscalía General de la Nación como máximo tribunal"
     ],
     "a": 1,
     "e": "La Rama Judicial se integra por la jurisdicción constitucional (Corte Constitucional), la ordinaria (Corte Suprema), la de lo contencioso administrativo (Consejo de Estado), la disciplinaria (Comisión Nacional de Disciplina Judicial) y los órganos de administración y gobierno (Consejo Superior de la Judicatura). La Fiscalía integra la Rama pero no es tribunal de cierre.",
     "b": "C.P. arts. 116, 228 ss. · Ley 270/1996",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias y Aptitudes",
     "q": "Las PRUEBAS DE JUICIO SITUACIONAL (PJS) empleadas en concursos de la Rama Judicial evalúan:",
     "o": [
      "Conocimientos memorísticos de normas",
      "La capacidad de la persona para analizar situaciones laborales o profesionales realistas y elegir la respuesta más adecuada conforme a competencias y valores institucionales",
      "La velocidad de lectura",
      "La aptitud física"
     ],
     "a": 1,
     "e": "Las PJS presentan escenarios verosímiles del ejercicio del cargo y piden elegir la actuación más apropiada. Miden competencias comportamentales (juicio, ética, relaciones interpersonales, orientación al servicio), no memoria normativa. Es prueba distinta de la de conocimientos.",
     "b": "FORMATO PJS",
     "d": 1
    },
    {
     "t": 3,
     "c": "Competencias y Aptitudes",
     "af": "En una prueba de juicio situacional no siempre hay una única respuesta 'correcta' en abstracto, sino opciones más y menos adecuadas según el perfil de competencias esperado",
     "rz": "estas pruebas valoran el ajuste del comportamiento elegido a las competencias y valores institucionales, más que la aplicación de una regla técnica cerrada",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: las PJS gradúan las respuestas por su idoneidad frente al perfil del cargo; conviene elegir la conducta que mejor concilie legalidad, ética, servicio y prudencia institucional, no la más 'ingeniosa'.",
     "b": "Metodología PJS",
     "d": 3
    },
    {
     "t": 1,
     "c": "Competencias y Aptitudes",
     "q": "Entre las recomendaciones de estudio y manejo de la ansiedad para el examen, la docente sugirió, con respaldo en la neurociencia del aprendizaje:",
     "o": [
      "Estudiar con el celular al lado para responder rápido",
      "Estudiar en bloques de concentración plena (p. ej., una hora) sin el celular cerca, aprovechando la neuroplasticidad mediante práctica y repetición",
      "No descansar nunca",
      "Memorizar sin comprender"
     ],
     "a": 1,
     "e": "La docente enfatizó bloques de concentración real sin distractores (el celular reduce una hora a 30-40 minutos efectivos) y el papel de la práctica repetida, que fortalece las conexiones sinápticas (neuroplasticidad). El aprendizaje profundo vence al memorístico.",
     "b": "Neurociencia del aprendizaje",
     "d": 1
    },
    {
     "t": 2,
     "c": "Competencias y Aptitudes",
     "q": "Son competencias comportamentales habitualmente evaluadas en la selección de servidores judiciales:",
     "s": [
      "La orientación al servicio y la ética en el ejercicio",
      "El razonamiento y la toma de decisiones bajo presión",
      "Las relaciones interpersonales y el trabajo en equipo",
      "La afinidad política con el nominador"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: servicio, juicio/decisión y relaciones interpersonales son competencias evaluadas. La 4 es abiertamente contraria a los principios de mérito, imparcialidad e independencia que rigen la carrera judicial.",
     "b": "Perfiles de competencias",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias y Aptitudes",
     "q": "Frente a un ítem de juicio situacional que plantea un conflicto entre un compañero y el aspirante en el despacho, la respuesta mejor valorada suele ser aquella que:",
     "o": [
      "Impone la autoridad y sanciona de inmediato",
      "Prioriza el diálogo, la solución institucional del conflicto y el cuidado del clima laboral, sin desatender el cumplimiento de las funciones",
      "Ignora el problema para no 'cargarse'",
      "Escala el conflicto a instancias externas de entrada"
     ],
     "a": 1,
     "e": "Las PJS premian conductas que concilian eficacia y buen trato: abordar el conflicto por vías institucionales, preservar el ambiente y la continuidad del servicio. Ni autoritarismo, ni evasión, ni escalamiento prematuro — prudencia y orientación a la solución.",
     "b": "Metodología PJS",
     "d": 1
    },
    {
     "t": 3,
     "c": "Competencias y Aptitudes",
     "af": "La preparación para las pruebas psicotécnicas y de competencias es tan importante como el estudio de los contenidos jurídicos",
     "rz": "en los concursos de la Rama estas pruebas tienen valor dentro del puntaje total y evalúan dimensiones que el examen de conocimientos no captura",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: descuidar las pruebas de competencias/psicotécnicas es un error frecuente; ponderan en el resultado y miden juicio, ética y habilidades que el examen de conocimientos no mide. Conviene practicarlas con anticipación.",
     "b": "Convocatoria 28",
     "d": 2
    }
   ],
   "rel": "institucional",
   "ambito": "Institucional · Formación judicial y organización de la Rama"
  },
  {
   "id": "publico",
   "numero": "T10",
   "fecha": "Tema",
   "titulo": "Derecho Administrativo y Responsabilidad del Estado",
   "docente": "resp. del Estado, acto administrativo y control judicial",
   "resumen": "Responsabilidad patrimonial del Estado (art. 90 C.P., daño antijurídico, títulos de imputación), medios de control del CPACA, acto administrativo y nulidad electoral. Sesiones de los Dres. Martín Bermúdez y Samuel Urueta. Incluye Contrato Estatal y Derecho Electoral (Dra. Calero), Extinción de Dominio (Dr. Páez) y Justicia y Paz (Dr. Pérez).",
   "preguntas": [
    {
     "t": 1,
     "c": "Responsabilidad del Estado",
     "q": "El fundamento constitucional de la responsabilidad patrimonial del Estado es el artículo 90 de la Constitución, cuyo eje es:",
     "o": [
      "La culpa probada del agente estatal en todos los casos",
      "El DAÑO ANTIJURÍDICO imputable a la acción u omisión de las autoridades públicas, que la víctima no está en el deber jurídico de soportar",
      "La mera existencia de un perjuicio, con o sin imputación",
      "La responsabilidad exclusivamente contractual"
     ],
     "a": 1,
     "e": "El art. 90 C.P. centra la responsabilidad en el daño antijurídico —el que la víctima no tiene el deber jurídico de soportar— imputable al Estado. Es un régimen objetivado en su fundamento: importa la antijuridicidad del daño, no necesariamente la culpa.",
     "b": "C.P. art. 90 · Jurisprudencia C.E. · Módulo Resp. del Estado",
     "d": 1
    },
    {
     "t": 2,
     "c": "Responsabilidad del Estado",
     "q": "Son títulos de imputación de la responsabilidad extracontractual del Estado reconocidos por el Consejo de Estado:",
     "s": [
      "La falla del servicio",
      "El daño especial",
      "El riesgo excepcional",
      "La responsabilidad objetiva por el solo hecho de existir un perjuicio, sin imputación alguna"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: falla del servicio (subjetivo), y los objetivos daño especial (rompimiento de la igualdad ante las cargas públicas por actuación lícita) y riesgo excepcional (creación de un riesgo). La 4 es falsa: siempre se requiere imputación; no hay responsabilidad sin nexo imputable.",
     "b": "Jurisprudencia C.E. · Módulo Resp. del Estado",
     "d": 2
    },
    {
     "t": 1,
     "c": "Responsabilidad del Estado",
     "q": "El medio de control idóneo para reclamar los daños causados por un hecho, omisión, operación administrativa u ocupación de inmueble imputable al Estado es:",
     "o": [
      "La nulidad y restablecimiento del derecho",
      "La reparación directa (art. 140 CPACA)",
      "La nulidad electoral",
      "La acción de tutela"
     ],
     "a": 1,
     "e": "La reparación directa (art. 140 CPACA) procede cuando la causa del daño es un hecho, una omisión, una operación administrativa o la ocupación temporal o permanente de un inmueble —no un acto administrativo, que se ataca por nulidad y restablecimiento.",
     "b": "CPACA art. 140 · Módulo Resp. del Estado",
     "d": 1
    },
    {
     "t": 3,
     "c": "Responsabilidad del Estado",
     "af": "Cuando una persona ha sido condenada en proceso penal, en el posterior proceso de responsabilidad no puede volver a discutirse la existencia del hecho ni su autoría, sino, a lo sumo, el monto de los perjuicios",
     "rz": "la declaratoria de responsabilidad penal produce efectos de cosa juzgada que vinculan al juez de la responsabilidad en cuanto a la ocurrencia del hecho y su autor",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: fue el punto de clase sobre los efectos de la cosa juzgada penal (antiguo art. 28 C. Penal; art. 57 Ley 600) — la condena penal impide rediscutir hecho y autoría; queda abierto el debate sobre los perjuicios.",
     "b": "Ley 600/2000 art. 57",
     "d": 3
    },
    {
     "t": 1,
     "c": "Responsabilidad del Estado",
     "q": "La CADUCIDAD del medio de control de reparación directa es, por regla general, de:",
     "o": [
      "Cuatro meses",
      "Dos años contados a partir del día siguiente al de la ocurrencia del hecho, omisión, operación u ocupación, con reglas especiales en ciertos supuestos",
      "Diez años",
      "No caduca en ningún caso"
     ],
     "a": 1,
     "e": "Art. 164 CPACA: dos años desde el día siguiente al hecho dañoso (o desde que se conoció, en daños de conocimiento diferido). Existen reglas especiales, y la jurisprudencia ha exceptuado la caducidad frente a graves violaciones de DDHH y crímenes de lesa humanidad.",
     "b": "CPACA art. 164 · Jurisprudencia C.E.",
     "d": 1
    },
    {
     "t": 1,
     "c": "Responsabilidad del Estado",
     "q": "La FALLA DEL SERVICIO como título de imputación exige acreditar:",
     "o": [
      "Solo el daño, sin más",
      "Un funcionamiento anormal o defectuoso del servicio (o su no funcionamiento o funcionamiento tardío), el daño antijurídico y el nexo causal",
      "Que el agente actuó con dolo penal",
      "La ruptura de la igualdad ante las cargas públicas por acto lícito"
     ],
     "a": 1,
     "e": "La falla del servicio es el título subjetivo por excelencia: se prueba la anormalidad en la prestación (no funcionó, funcionó mal o tardíamente), el daño antijurídico y el nexo. La ruptura de la igualdad por acto lícito (opción D) describe el daño especial, otro título distinto.",
     "b": "Jurisprudencia C.E. · Módulo Resp. del Estado",
     "d": 1
    },
    {
     "t": 3,
     "c": "Responsabilidad del Estado",
     "af": "El daño especial permite comprometer la responsabilidad del Estado aun cuando su actuación haya sido lícita",
     "rz": "impone reparar cuando una actividad legítima del Estado rompe la igualdad de los ciudadanos ante las cargas públicas, causando a algunos un daño anormal y especial",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el daño especial es un título objetivo — no se reprocha ilicitud, sino que se restablece la igualdad ante las cargas públicas cuando la actuación lícita del Estado sacrifica desproporcionadamente a una persona.",
     "b": "Jurisprudencia C.E.",
     "d": 2
    },
    {
     "t": 2,
     "c": "Responsabilidad del Estado",
     "q": "Son CAUSALES EXIMENTES de responsabilidad (causa extraña) que rompen el nexo causal:",
     "s": [
      "La fuerza mayor",
      "El hecho exclusivo y determinante de un tercero",
      "La culpa exclusiva de la víctima",
      "El caso fortuito interno propio de la actividad riesgosa creada por el Estado"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: fuerza mayor, hecho de tercero y culpa de la víctima son causas extrañas que exoneran. La 4 es discutible/falsa como eximente en riesgo excepcional: el caso fortuito interno, ligado a la actividad riesgosa del propio Estado, no suele exonerar en regímenes objetivos.",
     "b": "Jurisprudencia C.E.",
     "d": 2
    },
    {
     "t": 1,
     "c": "Responsabilidad del Estado",
     "q": "La privación injusta de la libertad da lugar a responsabilidad del Estado principalmente cuando:",
     "o": [
      "Nunca, pues es una carga que todos deben soportar",
      "La persona es absuelta o se precluye a su favor porque el hecho no existió, no lo cometió, o la conducta no era típica —y, según la jurisprudencia, también en otros supuestos donde el daño resulta antijurídico",
      "Solo si hubo dolo del fiscal",
      "Únicamente cuando la detención excede diez años"
     ],
     "a": 1,
     "e": "La privación injusta genera responsabilidad, sobre todo cuando se absuelve porque el hecho no existió, el sindicado no lo cometió o la conducta era atípica (in dubio pro reo incluido, con matices jurisprudenciales). El eje es la antijuridicidad del daño que la persona no debía soportar.",
     "b": "Jurisprudencia C.E. y C. Const. (SU-072/2018 y ss.)",
     "d": 1
    },
    {
     "t": 3,
     "c": "Responsabilidad del Estado",
     "af": "En reparación directa puede ser relevante determinar si la víctima obtuvo previamente algún tipo de reparación por el mismo daño",
     "rz": "lo ya recibido puede descontarse para evitar una doble reparación, en aplicación del principio de reparación integral sin enriquecimiento",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: fue el punto de la 'parte silenciosa' que mencionó Bermúdez — la reparación integral no puede convertirse en fuente de enriquecimiento; lo ya percibido por el mismo daño se pondera para no reparar dos veces.",
     "b": "Principio de reparación integral",
     "d": 2
    },
    {
     "t": 1,
     "c": "Acto Administrativo y Control Judicial",
     "q": "A través del medio de control de NULIDAD ELECTORAL (art. 139 CPACA) únicamente pueden demandarse:",
     "o": [
      "Todos los actos administrativos generales",
      "Los actos electorales: elecciones por voto popular, elecciones por cuerpos colegiados, nombramientos y llamamientos",
      "Los contratos estatales",
      "Las sentencias judiciales"
     ],
     "a": 1,
     "e": "La nulidad electoral está reservada a los actos electorales, que según el art. 139 CPACA son de cuatro tipos: elecciones por voto popular, elecciones por cuerpos colegiados, nombramientos y llamamientos. No procede contra actos administrativos ordinarios.",
     "b": "CPACA art. 139",
     "d": 1
    },
    {
     "t": 1,
     "c": "Acto Administrativo y Control Judicial",
     "q": "La diferencia entre una ELECCIÓN y un NOMBRAMIENTO, como actos electorales, radica en que:",
     "o": [
      "La elección la hace una sola persona y el nombramiento un cuerpo plural",
      "La elección la realiza un número plural de personas (voto popular o cuerpo colegiado), mientras el nombramiento lo hace una sola persona (p. ej., el Presidente al designar un ministro)",
      "No hay diferencia jurídica",
      "La elección es siempre por voto popular y el nombramiento por sorteo"
     ],
     "a": 1,
     "e": "Distinción de clase: elección = decisión de un número plural (electorado o cuerpo colegiado, como el Senado eligiendo magistrados de la Corte Constitucional); nombramiento = decisión de una sola autoridad (el Presidente nombrando un ministro).",
     "b": "CPACA art. 139",
     "d": 1
    },
    {
     "t": 1,
     "c": "Acto Administrativo y Control Judicial",
     "q": "El LLAMAMIENTO como acto electoral, regulado por la Ley 5ª de 1992, opera para:",
     "o": [
      "Designar ministros",
      "Suplir las curules ante la falta absoluta de un congresista (por muerte, condena penal con inhabilidad, etc.)",
      "Elegir al Presidente",
      "Nombrar notarios"
     ],
     "a": 1,
     "e": "El llamamiento cubre la falta absoluta de un congresista (fallecimiento, condena penal que ordena su inhabilidad, renuncia): se llama al siguiente en la lista. Es un acto electoral cuestionable por nulidad electoral, como precisó el docente.",
     "b": "Ley 5ª/1992 · CPACA art. 139",
     "d": 1
    },
    {
     "t": 3,
     "c": "Acto Administrativo y Control Judicial",
     "af": "El acto administrativo goza de presunción de legalidad y es, por regla general, de obligatorio cumplimiento mientras no sea suspendido o anulado por el juez",
     "rz": "la presunción de legalidad garantiza la eficacia de la función administrativa, sin perjuicio del control judicial que puede desvirtuarla",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la presunción de legalidad (base del régimen de los actos administrativos) los hace ejecutivos y ejecutorios; solo el juez, mediante los medios de control del CPACA, puede desvirtuarla (nulidad, suspensión provisional).",
     "b": "CPACA",
     "d": 2
    },
    {
     "t": 2,
     "c": "Acto Administrativo y Control Judicial",
     "q": "Son medios de control del CPACA distintos de la nulidad electoral:",
     "s": [
      "La nulidad simple (art. 137)",
      "La nulidad y restablecimiento del derecho (art. 138)",
      "La reparación directa (art. 140)",
      "La acción de tutela contra la ley"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: nulidad simple, nulidad y restablecimiento, y reparación directa son medios de control del CPACA. La 4 es falsa: la tutela no procede contra la ley en abstracto (art. 6 D. 2591/1991) y no es un medio de control contencioso.",
     "b": "CPACA arts. 137, 138, 140",
     "d": 2
    },
    {
     "t": 1,
     "c": "Acto Administrativo y Control Judicial",
     "q": "La NULIDAD Y RESTABLECIMIENTO DEL DERECHO se distingue de la nulidad simple porque:",
     "o": [
      "No requiere acto administrativo",
      "Además de la anulación del acto (generalmente particular), persigue el restablecimiento del derecho subjetivo lesionado y, en su caso, la reparación del daño",
      "Solo procede contra actos generales",
      "Es imprescriptible"
     ],
     "a": 1,
     "e": "La nulidad y restablecimiento (art. 138 CPACA) ataca actos que lesionan derechos subjetivos y busca, además de la nulidad, restablecer el derecho e indemnizar; la nulidad simple protege la legalidad objetiva (actos generales, o particulares con interés para la legalidad) y no persigue restablecimiento individual.",
     "b": "CPACA arts. 137-138",
     "d": 2
    },
    {
     "t": 1,
     "c": "Acto Administrativo y Control Judicial",
     "q": "La SUSPENSIÓN PROVISIONAL de un acto administrativo en el proceso contencioso:",
     "o": [
      "Es automática con la sola presentación de la demanda",
      "Es una medida cautelar que el juez decreta cuando la violación de las normas invocadas surge del análisis del acto y su confrontación con las normas superiores o con las pruebas allegadas",
      "Solo la puede pedir la administración",
      "Procede únicamente en nulidad electoral"
     ],
     "a": 1,
     "e": "La suspensión provisional (arts. 229-231 CPACA) es una cautelar que exige que la infracción surja del acto confrontado con las normas superiores o con las pruebas; ya no requiere una violación 'manifiesta' como en el régimen anterior, pero sí un juicio de probabilidad de la ilegalidad.",
     "b": "CPACA arts. 229-231",
     "d": 1
    },
    {
     "t": 3,
     "c": "Acto Administrativo y Control Judicial",
     "af": "La resolución que hace un nombramiento en un concurso de méritos es un acto administrativo susceptible de control judicial",
     "rz": "todo acto que produce efectos jurídicos y proviene del ejercicio de la función administrativa está sujeto al control de legalidad ante la jurisdicción de lo contencioso administrativo",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: fue la duda resuelta en clase — los actos de nombramiento derivados de concursos son actos administrativos controlables (por nulidad electoral si califican como acto electoral, o por nulidad y restablecimiento según el caso), pues emanan de la función administrativa.",
     "b": "CPACA",
     "d": 3
    },
    {
     "t": 1,
     "c": "Contrato Estatal y Electoral",
     "q": "Cuando la JURISDICCIÓN DE LO CONTENCIOSO ADMINISTRATIVO produce el acto (p. ej., el Consejo de Estado designa magistrados de tribunal), el control de ese acto corresponde a:",
     "o": [
      "El mismo Consejo de Estado que lo profirió",
      "La jurisdicción ordinaria (la Corte Suprema de Justicia), en un esquema de control cruzado",
      "La Corte Constitucional en única instancia",
      "No hay control posible"
     ],
     "a": 1,
     "e": "Regla de control cruzado destacada en clase: cuando el acto lo produce la propia jurisdicción contenciosa, lo controla la ordinaria (la Corte Suprema controla decisiones del Consejo de Estado y viceversa), para preservar la imparcialidad. Aplica a designaciones que, siendo materialmente de nombramiento, son revisables por nulidad electoral.",
     "b": "Jurisprudencia",
     "d": 2
    },
    {
     "t": 1,
     "c": "Contrato Estatal y Electoral",
     "q": "Para escoger el medio de control adecuado frente a un nombramiento cuestionado, la docente insistió en identificar:",
     "o": [
      "El color político del nominado",
      "El móvil y la finalidad de la demanda (las pretensiones concretas del actor), pues de ellos depende si procede la nulidad electoral o la nulidad y restablecimiento del derecho",
      "El domicilio del demandante",
      "La cuantía del salario del cargo"
     ],
     "a": 1,
     "e": "El móvil y la finalidad (las pretensiones) orientan la escogencia: si se persigue la sola legalidad del acto electoral, nulidad electoral; si se busca además restablecer un derecho subjetivo del aspirante, nulidad y restablecimiento. Leer la intención de la demanda es clave para no equivocar la vía.",
     "b": "CPACA arts. 138-139",
     "d": 1
    },
    {
     "t": 2,
     "c": "Contrato Estatal",
     "q": "Son principios de la contratación estatal (Ley 80 de 1993 y concordantes):",
     "s": [
      "Transparencia",
      "Economía",
      "Responsabilidad",
      "Secreto y reserva de todas las etapas del proceso de selección"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3: transparencia, economía y responsabilidad son principios rectores (art. 23 Ley 80/1993), junto con la selección objetiva. La 4 es falsa: rige la publicidad, no el secreto; la reserva es excepcional.",
     "b": "Ley 80/1993 art. 23",
     "d": 2
    },
    {
     "t": 1,
     "c": "Contrato Estatal",
     "q": "El medio de control de CONTROVERSIAS CONTRACTUALES (art. 141 CPACA) procede para:",
     "o": [
      "Atacar actos electorales",
      "Que se declare la existencia o nulidad del contrato estatal, su incumplimiento, y se ordenen las restituciones, indemnizaciones o revisiones a que haya lugar",
      "Reclamar daños por hechos u omisiones ajenos a todo contrato",
      "Cuestionar leyes"
     ],
     "a": 1,
     "e": "Las controversias contractuales (art. 141 CPACA) permiten discutir la existencia, validez, interpretación, revisión y cumplimiento del contrato estatal y las pretensiones consecuenciales. Se distingue de la reparación directa (daños extracontractuales) y de la nulidad electoral.",
     "b": "CPACA art. 141",
     "d": 1
    },
    {
     "t": 3,
     "c": "Contrato Estatal y Electoral",
     "af": "Un acto que designa a un magistrado de tribunal, aunque materialmente sea un nombramiento, puede ser controlable por el medio de control de nulidad electoral",
     "rz": "la jurisprudencia ha entendido con amplitud el objeto de la nulidad electoral, que abarca elecciones, nombramientos y llamamientos de dignatarios y funcionarios",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: la docente mostró la amplitud del medio de control de nulidad electoral, que cobija nombramientos (no solo elecciones por voto popular), incluidos los de altos funcionarios designados por corporaciones judiciales.",
     "b": "CPACA art. 139",
     "d": 3
    },
    {
     "t": 1,
     "c": "Extinción de Dominio",
     "q": "La acción de EXTINCIÓN DE DOMINIO (Ley 1708 de 2014) se caracteriza por ser:",
     "o": [
      "Una pena accesoria dentro del proceso penal",
      "Una acción autónoma, real, de contenido patrimonial y de naturaleza jurisdiccional, independiente de la responsabilidad penal del afectado",
      "Un trámite administrativo de la Fiscalía",
      "Una medida cautelar transitoria"
     ],
     "a": 1,
     "e": "La extinción de dominio es autónoma e independiente de la acción penal (art. 18 Ley 1708/2014): recae sobre los bienes (acción real), no requiere condena penal previa ni la sobrevive, y persigue declarar la pérdida del derecho de dominio a favor del Estado sin contraprestación.",
     "b": "Ley 1708/2014 arts. 15-18",
     "d": 2
    },
    {
     "t": 2,
     "c": "Extinción de Dominio",
     "q": "Son causales de extinción de dominio (Ley 1708 de 2014) los bienes que:",
     "s": [
      "Provienen directa o indirectamente de una actividad ilícita",
      "Han sido utilizados como medio o instrumento para la comisión de actividades ilícitas",
      "Constituyen un incremento patrimonial no justificado",
      "Pertenecen a un tercero de buena fe exenta de culpa"
     ],
     "a": 0,
     "e": "Correctas 1, 2 y 3 (art. 16 Ley 1708/2014): origen ilícito, instrumento del delito e incremento injustificado son causales. La 4 es precisamente el límite de la acción: el tercero de buena fe exenta de culpa está protegido y sus bienes no se extinguen.",
     "b": "Ley 1708/2014 arts. 16 y 3",
     "d": 2
    },
    {
     "t": 3,
     "c": "Extinción de Dominio",
     "af": "La extinción de dominio no vulnera la garantía de la propiedad privada del artículo 58 constitucional",
     "rz": "la Constitución solo protege la propiedad adquirida con arreglo a las leyes civiles y con justo título, no la que tiene origen o destinación ilícita",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: el art. 34 C.P. autoriza la extinción por sentencia judicial en casos de enriquecimiento ilícito, perjuicio al patrimonio público o grave deterioro de la moral social; la propiedad protegida (art. 58) es la de origen lícito, de modo que no hay lesión a la garantía.",
     "b": "C.P. arts. 34 y 58 · Ley 1708/2014",
     "d": 2
    },
    {
     "t": 1,
     "c": "Justicia y Paz",
     "q": "Las Salas de Justicia y Paz (Ley 975 de 2005) tienen competencia para juzgar:",
     "o": [
      "Solo delitos de narcotráfico",
      "Cualquier delito cometido durante y con ocasión de la pertenencia al grupo armado organizado al margen de la ley, respecto de personas postuladas por el Gobierno e imputadas por la Fiscalía",
      "Exclusivamente crímenes de lesa humanidad",
      "Delitos comunes de personas no desmovilizadas"
     ],
     "a": 1,
     "e": "Las Salas de Justicia y Paz pueden juzgar cualquier delito cometido en virtud del conflicto por postulados (aunque el grueso sean crímenes de guerra y de lesa humanidad). Los delitos ajenos a la militancia —narcotráfico y homicidios a título personal— no acceden a los beneficios, como precisó el docente.",
     "b": "Ley 975/2005",
     "d": 1
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Medios de control",
     "q": "Una empresa participa en una licitación y es descalificada por un acto administrativo particular. Considera que la decisión es ilegal y que, además, le causó perjuicios económicos concretos. Quiere que se anule el acto y que se le indemnice. El medio de control idóneo es:",
     "o": [
      "La nulidad simple, porque persigue defender la legalidad del acto de descalificación",
      "La controversia contractual, porque el conflicto surge de un proceso de contratación",
      "La reparación directa, porque hubo un daño económico a la empresa",
      "La nulidad y restablecimiento del derecho, que permite anular el acto particular y obtener el restablecimiento e indemnización de los perjuicios"
     ],
     "a": 3,
     "e": "La nulidad y restablecimiento del derecho (art. 138 CPACA) procede cuando se ataca un acto administrativo particular que lesiona un derecho subjetivo y se busca, además de la anulación, el restablecimiento e indemnización. · La nulidad simple protege la legalidad objetiva y no persigue restablecimiento individual. · La reparación directa exige que la causa del daño sea un hecho, omisión u operación, no un acto administrativo. · La controversia contractual supone un contrato ya celebrado; aquí el acto de descalificación es precontractual y se ataca por nulidad y restablecimiento.",
     "b": "CPACA (Ley 1437/2011) arts. 137, 138, 140, 141"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Reparación directa",
     "q": "Un puente construido por el Estado colapsa por una falla de mantenimiento y causa daños a varios vehículos. Los afectados quieren demandar al Estado. Considerando el origen del daño, procede:",
     "o": [
      "La reparación directa, ya que el daño proviene de un hecho u omisión (falla en el mantenimiento), no de un acto administrativo",
      "La controversia contractual con el constructor del puente",
      "La acción de tutela, por tratarse de un daño a bienes",
      "La nulidad y restablecimiento del derecho, pues hubo una decisión estatal defectuosa"
     ],
     "a": 0,
     "e": "La reparación directa (art. 140 CPACA) procede cuando el daño proviene de un hecho, una omisión, una operación administrativa o la ocupación de un inmueble; la falla de mantenimiento es una omisión imputable al Estado. · La nulidad y restablecimiento exige un acto administrativo como causa del daño, que aquí no existe. · La controversia contractual vincularía al constructor por el contrato, pero los afectados no son parte de él. · La tutela no es la vía para reparar perjuicios patrimoniales que tienen medio de control ordinario idóneo.",
     "b": "CPACA art. 140 · reparación directa por omisión"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Caducidad",
     "q": "Una persona sufre un daño por una operación administrativa el 10 de marzo. Presenta la demanda de reparación directa dos años y un mes después, alegando que solo consultó un abogado tardíamente. Conforme al CPACA, la demanda:",
     "o": [
      "Debe admitirse, pues la caducidad no corre mientras la víctima ignore sus derechos",
      "Debe admitirse, porque la reparación directa no está sujeta a caducidad",
      "Debe admitirse solo si el daño proviene de graves violaciones a los derechos humanos",
      "Debe rechazarse por caducidad: el término de dos años se cuenta desde el día siguiente al hecho, omisión u operación, salvo reglas especiales, y el desconocimiento del derecho no lo suspende"
     ],
     "a": 3,
     "e": "La reparación directa caduca en dos años contados desde el día siguiente al hecho, omisión, operación u ocupación (art. 164 CPACA); el desconocimiento del derecho por la víctima no suspende el término. · Afirmar que la caducidad no corre por ignorancia del derecho carece de sustento legal. · Sostener que la reparación directa no caduca es falso: sí tiene término. · La excepción por graves violaciones de DDHH y crímenes de lesa humanidad existe, pero no cubre este daño ordinario, de modo que no salva la demanda tardía.",
     "b": "CPACA art. 164 · caducidad de la reparación directa"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Títulos de imputación",
     "q": "Durante una operación legítima de erradicación, el Estado causa un daño anormal y especial a un particular que no estaba obligado a soportarlo, pese a que la actuación fue lícita y sin falla. El título de imputación aplicable es:",
     "o": [
      "El riesgo excepcional, por el solo hecho de existir un perjuicio",
      "La culpa exclusiva de la víctima, que exonera al Estado",
      "El daño especial, que compromete al Estado por el rompimiento de la igualdad ante las cargas públicas causado por una actuación lícita",
      "La falla del servicio, porque siempre que hay daño hay anormalidad en el servicio"
     ],
     "a": 2,
     "e": "El daño especial es el título objetivo que responsabiliza al Estado cuando una actuación lícita rompe la igualdad ante las cargas públicas, causando un daño anormal y especial que la víctima no debía soportar. · La falla del servicio exige anormalidad o defecto en la prestación, que aquí no existe (la actuación fue lícita). · La culpa exclusiva de la víctima es una eximente, no un título, y no aparece en los hechos. · El riesgo excepcional supone la creación de un riesgo por actividades peligrosas, distinto del rompimiento de la igualdad por acto lícito.",
     "b": "Jurisprudencia C.E. · daño especial · C.P. art. 90"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Derecho Administrativo · Presunción de legalidad",
     "q": "Mientras se tramita la nulidad de un acto administrativo, la administración pretende ejecutarlo. El demandante pide que no se aplique hasta la sentencia. Conforme al CPACA, el acto:",
     "o": [
      "Solo puede ejecutarse si el demandante presta caución",
      "Goza de presunción de legalidad y es ejecutorio, salvo que el juez decrete su suspensión provisional como medida cautelar",
      "No puede ejecutarse: la sola presentación de la demanda suspende sus efectos",
      "Es inejecutable por versar sobre él un proceso judicial"
     ],
     "a": 1,
     "e": "El acto administrativo goza de presunción de legalidad y es ejecutorio; su aplicación solo se detiene si el juez decreta la suspensión provisional como cautela (arts. 229-231 CPACA). · Afirmar que la sola demanda suspende los efectos desconoce la presunción de legalidad. · Sostener que el proceso lo vuelve inejecutable confunde la existencia del litigio con la suspensión, que debe decretarse. · La caución la presta, en su caso, quien pide la cautela, no es condición para que la administración ejecute su acto.",
     "b": "CPACA arts. 88, 229-231 · presunción de legalidad y suspensión provisional"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Suspensión provisional",
     "q": "En una nulidad y restablecimiento, el demandante solicita la suspensión provisional del acto. El juez revisa. Conforme al CPACA vigente, para decretarla debe constatar que:",
     "o": [
      "La violación de las normas invocadas surge del análisis del acto demandado y su confrontación con las normas superiores o con las pruebas allegadas",
      "La violación sea manifiesta y ostensible a simple vista, sin necesidad de confrontación alguna",
      "La administración esté de acuerdo con la suspensión",
      "El demandante haya ganado ya en primera instancia"
     ],
     "a": 0,
     "e": "El CPACA vigente exige que la infracción surja del análisis del acto confrontado con las normas superiores invocadas o con las pruebas allegadas con la solicitud (art. 231). · Exigir una violación 'manifiesta a simple vista sin confrontación' revive el estándar del código anterior, ya superado. · Requerir sentencia previa favorable desnaturaliza la cautela, que es anticipada. · Condicionarla al acuerdo de la administración contradice el carácter de medida que se decreta frente a ella.",
     "b": "CPACA art. 231 · requisitos de la suspensión provisional"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Agotamiento y silencio",
     "q": "Un ciudadano presenta un recurso de reposición contra un acto y la administración no resuelve en el término legal. Quiere acudir a la jurisdicción. Conforme al CPACA, ante el silencio administrativo negativo:",
     "o": [
      "La falta de respuesta configura un acto ficto positivo que le concede lo pedido",
      "Puede entender negado el recurso por silencio administrativo negativo y acudir a la jurisdicción, sin perjuicio del deber de la administración de decidir",
      "Pierde el derecho a demandar por no haber respuesta expresa",
      "Debe esperar indefinidamente a que la administración resuelva de fondo antes de demandar"
     ],
     "a": 1,
     "e": "El silencio administrativo negativo permite entender agotada la vía y acceder a la jurisdicción, sin que ello releve a la administración de su deber de resolver (arts. 83-84 CPACA). · Esperar indefinidamente contradice la finalidad del silencio negativo. · El silencio positivo es excepcional y solo opera cuando la ley expresamente lo prevé, no como regla. · Sostener que se pierde el derecho a demandar por falta de respuesta invierte el sentido de la figura, que precisamente habilita el acceso.",
     "b": "CPACA arts. 83-84 · silencio administrativo negativo"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Nulidad electoral",
     "q": "Un ciudadano pretende cuestionar el nombramiento de un funcionario, alegando que el nombrado estaba inhabilitado. El nombramiento es un acto electoral. El medio de control y el término son:",
     "o": [
      "Nulidad electoral, con el término de caducidad especial y breve que la ley prevé para los actos electorales",
      "Nulidad y restablecimiento del derecho, dentro de los cuatro meses siguientes",
      "Controversia contractual, sin término de caducidad",
      "Reparación directa, dentro de los dos años"
     ],
     "a": 0,
     "e": "Los actos electorales —incluidos los nombramientos— se atacan por el medio de control de nulidad electoral (art. 139 CPACA), sujeto a un término de caducidad especial y breve. · La nulidad y restablecimiento procede contra actos particulares no electorales; usarla aquí confunde la naturaleza del acto. · La reparación directa exige un daño por hecho u omisión, no la ilegalidad de un nombramiento. · La controversia contractual supone un contrato, ajeno a un acto de nombramiento.",
     "b": "CPACA art. 139 · nulidad electoral · caducidad especial"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Derecho Administrativo · Excepción de ilegalidad",
     "q": "Un juez advierte que, para resolver un caso, debe aplicar un acto administrativo de carácter general que estima contrario a la ley, aunque no ha sido anulado. Conforme al ordenamiento, el juez:",
     "o": [
      "Debe abstenerse de fallar hasta que otro juez lo anule",
      "Puede inaplicarlo al caso concreto por vía de la excepción de ilegalidad, sin que ello implique anularlo con efectos generales",
      "Debe anularlo él mismo en la sentencia con efectos erga omnes",
      "Debe aplicarlo sin más, pues goza de presunción de legalidad mientras no sea anulado"
     ],
     "a": 1,
     "e": "La excepción de ilegalidad permite al juez inaplicar a un caso concreto un acto administrativo general contrario a la ley, sin anularlo con efectos generales (esa anulación corresponde al proceso de nulidad). · Aplicarlo 'sin más' desconoce la excepción de ilegalidad. · Anularlo con efectos erga omnes excede la competencia del juez en ese proceso: confunde inaplicación con anulación. · Abstenerse de fallar viola la prohibición de non liquet.",
     "b": "CPACA · excepción de ilegalidad (inaplicación al caso concreto)"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Privación injusta de la libertad",
     "q": "Una persona es detenida, procesada y finalmente absuelta porque se probó que el hecho no existió. Pretende que el Estado responda. Conforme a la jurisprudencia del Consejo de Estado:",
     "o": [
      "Procede solo si se prueba dolo o culpa grave del fiscal",
      "Procede únicamente si la detención superó un mínimo de cinco años",
      "Procede la reparación por privación injusta de la libertad, pues la absolución porque el hecho no existió evidencia un daño antijurídico que la persona no debía soportar",
      "No procede indemnización: la detención es una carga que todos deben soportar"
     ],
     "a": 2,
     "e": "La privación injusta genera responsabilidad, especialmente cuando la absolución obedece a que el hecho no existió, el sindicado no lo cometió o la conducta era atípica: el daño es antijurídico y la persona no debía soportarlo. · Afirmar que es una carga soportable niega el daño antijurídico. · Exigir dolo o culpa grave del fiscal traslada un estándar propio de la acción de repetición, no de la responsabilidad del Estado frente a la víctima. · Fijar un mínimo de años como condición no tiene sustento.",
     "b": "Jurisprudencia C.E. y C. Const. · privación injusta de la libertad · C.P. art. 90"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Derecho Administrativo · Acción de repetición",
     "q": "El Estado es condenado a pagar por el daño causado dolosamente por uno de sus agentes y efectivamente paga la condena. Frente al agente, el Estado:",
     "o": [
      "Debe ejercer la acción de repetición contra el agente que actuó con dolo o culpa grave, para recuperar lo pagado",
      "Solo puede sancionarlo disciplinariamente, sin recuperación económica",
      "Puede descontarlo del salario del agente sin proceso alguno",
      "No puede recuperar nada, pues la condena recayó sobre la entidad"
     ],
     "a": 0,
     "e": "La acción de repetición (art. 90 inc. 2 C.P.; Ley 678/2001) obliga al Estado a repetir contra el agente que por dolo o culpa grave dio lugar a la condena, para recuperar lo pagado. · Sostener que no puede recuperar nada desconoce el mandato de repetición. · Descontarlo del salario sin proceso vulnera el debido proceso: la repetición se ejerce judicialmente. · Reducirlo a lo disciplinario ignora la dimensión patrimonial resarcitoria de la repetición.",
     "b": "C.P. art. 90 inc. 2 · Ley 678 de 2001 · acción de repetición"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Control cruzado",
     "q": "El Consejo de Estado, como corporación, profiere un acto de contenido electoral (una designación). Un ciudadano quiere controlarlo judicialmente. Conforme al esquema de control, corresponde conocer a:",
     "o": [
      "La Corte Constitucional, en única instancia",
      "La Comisión Nacional de Disciplina Judicial",
      "La jurisdicción ordinaria (Corte Suprema de Justicia), en un esquema de control cruzado que preserva la imparcialidad",
      "El propio Consejo de Estado que profirió el acto, por especialidad en lo contencioso"
     ],
     "a": 2,
     "e": "Cuando el acto electoral lo profiere la propia jurisdicción contenciosa, opera el control cruzado: lo revisa la jurisdicción ordinaria (Corte Suprema), para preservar la imparcialidad. · Atribuirlo al mismo Consejo de Estado comprometería la imparcialidad al ser juez y parte. · La Corte Constitucional no es la vía para controlar la legalidad de un acto electoral. · La Comisión Nacional de Disciplina Judicial ejerce función disciplinaria, no control de legalidad de actos electorales.",
     "b": "Jurisprudencia · control cruzado de actos electorales"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Derecho Administrativo · Nulidad simple",
     "q": "Un ciudadano, sin alegar lesión a un derecho subjetivo propio, pretende que se anule un acto administrativo general por ser contrario a la ley, en defensa de la legalidad. El medio de control es:",
     "o": [
      "La reparación directa, por el interés en la legalidad",
      "La controversia contractual, por versar sobre actuación administrativa",
      "La nulidad y restablecimiento del derecho, por atacar un acto administrativo",
      "La nulidad simple (por inconstitucionalidad o ilegalidad), que protege la legalidad objetiva y puede ejercer cualquier persona"
     ],
     "a": 3,
     "e": "La nulidad simple (art. 137 CPACA) protege la legalidad objetiva del ordenamiento y puede ejercerla cualquier persona, sin necesidad de alegar lesión a un derecho subjetivo. · La nulidad y restablecimiento exige la lesión de un derecho subjetivo y persigue indemnización, ausentes aquí. · La reparación directa requiere un daño por hecho u omisión, no el mero interés en la legalidad. · La controversia contractual supone un contrato, inexistente en el supuesto.",
     "b": "CPACA art. 137 · nulidad simple"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Derecho Administrativo · Conflicto de principios",
     "q": "Una entidad, invocando celeridad y eficacia administrativa, expide un acto que afecta a un particular sin darle oportunidad de ser oído previamente, pese a que la ley preveía un trámite de audiencia. Al controlar el acto, el juez debe:",
     "o": [
      "Ordenar rehacer el trámite sin efecto sobre el acto ya expedido",
      "Validar el acto, porque la eficacia administrativa justifica prescindir de trámites que retrasan la gestión",
      "Anular el acto por vulneración del debido proceso administrativo, pues la eficacia no autoriza sacrificar las garantías que la ley expresamente exige",
      "Aplicar el silencio administrativo positivo a favor del particular"
     ],
     "a": 2,
     "e": "El debido proceso administrativo (art. 29 C.P.; art. 3 CPACA) es una garantía que la eficacia no puede sacrificar cuando la ley exige un trámite de audiencia; su omisión vicia el acto. · Validar el acto por eficacia invierte la relación entre principios y garantías. · Ordenar rehacer el trámite dejando incólume el acto viciado es contradictorio: el vicio afecta la validez del acto. · El silencio positivo no opera aquí: no es la consecuencia de un vicio de procedimiento, sino una figura excepcional y reglada.",
     "b": "C.P. art. 29 · CPACA art. 3 · debido proceso administrativo"
    }
   ],
   "rel": "administrativo",
   "ambito": "Específico Administrativo · Derecho Administrativo y Responsabilidad del Estado"
  },
  {
   "id": "logica",
   "numero": "T11",
   "fecha": "Aptitudes",
   "titulo": "Razonamiento Lógico",
   "docente": "Prueba de aptitudes · silogismos, validez y proposiciones",
   "resumen": "Razonamiento lógico-formal del examen de la Rama: validez de silogismos, inferencias, proposiciones y la distinción entre verdad (de los enunciados) y validez (de los razonamientos). Basado en el material de razonamiento del concurso.",
   "preguntas": [
    {
     "t": 1,
     "c": "Razonamiento Lógico · Silogismos",
     "q": "Suponga verdaderas: P1: «Algunos elefantes son leones». P2: «Todos los leones tienen tres ojos». ¿Qué conclusión se sigue con NECESIDAD?",
     "o": [
      "Todos los elefantes tienen tres ojos",
      "Algunos elefantes tienen tres ojos",
      "Ningún elefante tiene tres ojos",
      "No se puede concluir nada sobre los elefantes"
     ],
     "a": 1,
     "e": "De «algunos elefantes son leones» y «todos los leones tienen tres ojos» se sigue necesariamente que ESOS elefantes-leones tienen tres ojos, es decir, «algunos elefantes tienen tres ojos» (particular afirmativa). No se puede afirmar «todos», porque P1 solo habla de «algunos». La validez es formal: no importa que el contenido sea absurdo.",
     "b": "Lógica formal · Silogismo categórico (figura Darii)",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Silogismos",
     "q": "Suponga verdaderas: P1: «Todos los rifles son automóviles». P2: «Ningún automóvil es una máquina». ¿Qué se concluye con necesidad?",
     "o": [
      "Algunos rifles son máquinas",
      "Ningún rifle es una máquina",
      "Todos los rifles son máquinas",
      "No se puede determinar"
     ],
     "a": 1,
     "e": "Si todo rifle es automóvil y ningún automóvil es máquina, entonces ningún rifle puede ser máquina (universal negativa). Es el modo Celarent: la conclusión hereda la negación total. La verdad material de las premisas es irrelevante para la validez.",
     "b": "Lógica formal · Silogismo (Celarent)",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Silogismos",
     "q": "Suponga verdaderas: P1: «Todos los cangrejos son pájaros». P2: «Algunos pájaros son azules». ¿Qué se concluye con necesidad sobre los cangrejos?",
     "o": [
      "Todos los cangrejos son azules",
      "Algunos cangrejos son azules",
      "Nada se sigue con necesidad respecto del color de los cangrejos",
      "Ningún cangrejo es azul"
     ],
     "a": 2,
     "e": "Falacia del término medio no distribuido. Que «algunos pájaros» sean azules no garantiza que los cangrejos (que son un subconjunto de los pájaros) caigan dentro de esos «algunos». La conclusión no se sigue: es indeterminada. Este es el error clásico que el examen busca detectar.",
     "b": "Lógica formal · Falacia del medio no distribuido",
     "d": 3
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Validez",
     "q": "Analice: P1: «Ningún músico compone canciones ilógicas». P2: «Algunos que componen canciones ilógicas son reggaetoneros». C: «Algunos reggaetoneros no son músicos». El razonamiento es:",
     "o": [
      "Válido",
      "Inválido",
      "No se puede determinar la validez",
      "Válido solo si las premisas son verdaderas"
     ],
     "a": 0,
     "e": "Es VÁLIDO. Quienes componen canciones ilógicas están, por P1, fuera del conjunto de los músicos. P2 dice que algunos reggaetoneros están en ese grupo (componen ilógicas); luego esos reggaetoneros no son músicos: «algunos reggaetoneros no son músicos». La conclusión se sigue necesariamente (modo Ferio).",
     "b": "Lógica formal · Silogismo (Ferio)",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Validez",
     "q": "Analice: P1: «Ningún ilógico es capitán de un avión». P2: «Todo bebé es ilógico». C: «Ningún bebé es capitán de un avión». El razonamiento es:",
     "o": [
      "Válido",
      "Inválido",
      "Indeterminado",
      "Inválido por premisa falsa"
     ],
     "a": 0,
     "e": "VÁLIDO (Celarent). Si todo bebé es ilógico y ningún ilógico es capitán, ningún bebé es capitán. La validez atañe a la forma —la relación necesaria entre premisas y conclusión—, no a la verdad de los enunciados. Recuerde: un razonamiento se califica de válido/inválido, no de verdadero/falso.",
     "b": "Lógica formal · Validez vs. verdad",
     "d": 3
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Validez",
     "q": "Analice: P1: «Todos los árboles son plantas». P2: «Algunos árboles son arbustos». C: «Ninguna planta es un arbusto». El razonamiento es:",
     "o": [
      "Válido",
      "Inválido",
      "Indeterminado",
      "Válido en la primera figura"
     ],
     "a": 1,
     "e": "INVÁLIDO. De hecho, de P2 se sigue que ALGUNAS plantas sí son arbustos (los árboles que son arbustos son plantas). La conclusión «ninguna planta es arbusto» contradice lo que las premisas implican: es un salto ilícito de lo particular a una negación universal.",
     "b": "Lógica formal · Inferencia inmediata",
     "d": 3
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Validez",
     "q": "P1: «Ningún miembro del Opus Dei es ateo». P2: «Algunos católicos son miembros del Opus Dei». C: «Algunos católicos son ateos». El razonamiento es:",
     "o": [
      "Válido",
      "Inválido",
      "Indeterminado",
      "Válido si hay católicos ateos"
     ],
     "a": 1,
     "e": "INVÁLIDO. De las premisas se sigue lo contrario: «algunos católicos NO son ateos» (los que son del Opus Dei, que por P1 no son ateos). Concluir que «algunos católicos son ateos» no se desprende de las premisas; es una conclusión ilícita.",
     "b": "Lógica formal · Silogismo inválido",
     "d": 3
    },
    {
     "t": 3,
     "c": "Razonamiento Lógico · Teoría",
     "af": "El calificativo de «verdadero» o «falso» se aplica a los enunciados, mientras que el de «válido» o «inválido» se aplica a los razonamientos",
     "rz": "la validez es una característica formal que atañe a la relación necesaria entre premisas y conclusión, con independencia del contenido o veracidad de las proposiciones",
     "a": 0,
     "e": "Ambas verdaderas y la razón explica la afirmación: un razonamiento puede ser válido con premisas falsas (p. ej., «los seres terrestres tienen alas; los marcianos son terrestres; luego los marcianos tienen alas»). La verdad es de los enunciados; la validez, de la forma del argumento.",
     "b": "Lógica formal · Validez y verdad",
     "d": 1
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Proposiciones",
     "q": "En lógica, una PROPOSICIÓN es una frase declarativa que puede ser verdadera o falsa. ¿Cuál de las siguientes es una proposición?",
     "o": [
      "«¿Cuál es la temperatura en este momento?»",
      "«¡Ojalá llueva pronto!»",
      "«El Consejo de Estado hace parte del poder legislativo en Colombia»",
      "«Estudie con disciplina para el concurso»"
     ],
     "a": 2,
     "e": "Solo la tercera es una proposición: es declarativa y tiene valor de verdad (de hecho es falsa: el Consejo de Estado es cabeza de la jurisdicción de lo contencioso administrativo, no del legislativo). Las preguntas, exclamaciones y órdenes no son proposiciones porque no se pueden afirmar ni negar.",
     "b": "Lógica · Proposiciones vs. enunciados",
     "d": 1
    },
    {
     "t": 1,
     "c": "Razonamiento Lógico · Validez",
     "q": "P1: «Los mamíferos son seres de sangre caliente». P2: «Ningún reptil es de sangre caliente». C: «Ningún reptil es mamífero». El razonamiento es:",
     "o": [
      "Válido",
      "Inválido",
      "Indeterminado",
      "Válido solo empíricamente"
     ],
     "a": 0,
     "e": "VÁLIDO (Camestres). Si todo mamífero es de sangre caliente y ningún reptil lo es, ningún reptil puede ser mamífero. Aquí, además, las premisas y la conclusión son verdaderas, pero lo decisivo es que la conclusión se sigue necesariamente de las premisas.",
     "b": "Lógica formal · Silogismo (Camestres)",
     "d": 2
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Lógico · Condicionales",
     "q": "Se sabe que «Si llueve, entonces la cancha se moja». Se observa que la cancha NO está mojada. ¿Qué se concluye con validez?",
     "o": [
      "No se puede concluir nada",
      "La cancha se mojará después",
      "No llovió (por modus tollens)",
      "Llovió"
     ],
     "a": 2,
     "e": "Por modus tollens: de «si P entonces Q» y «no Q», se sigue «no P». Si la cancha no está mojada, no llovió. · Concluir que 'llovió' contradice el dato. · Afirmar que 'se mojará después' agrega información no dada. · Sí se puede concluir: negar el consecuente permite negar el antecedente.",
     "b": "Lógica proposicional · modus tollens"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Lógico · Condicionales",
     "q": "De la premisa «Si estudia, aprueba», un estudiante concluye: «No estudió, luego no aprobó». Este razonamiento es:",
     "o": [
      "Inválido: es la falacia de negación del antecedente, pues podría aprobar por otra vía",
      "Válido, porque estudiar es necesario para aprobar",
      "Válido, por modus tollens",
      "Válido, por modus ponens"
     ],
     "a": 0,
     "e": "Negar el antecedente («no estudió») no permite negar el consecuente: es una falacia, pues el consecuente podría darse por otras causas (aprobar sin estudiar). · No es modus tollens (que niega el consecuente, no el antecedente). · No es modus ponens (que afirma el antecedente). · La premisa dice que estudiar es suficiente, no necesario, para aprobar.",
     "b": "Lógica proposicional · falacia de negación del antecedente"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Lógico · Negación",
     "q": "La negación correcta de la proposición «Todos los estudiantes aprobaron» es:",
     "o": [
      "Todos los estudiantes reprobaron",
      "Al menos un estudiante no aprobó",
      "Algunos estudiantes aprobaron",
      "Ningún estudiante aprobó"
     ],
     "a": 1,
     "e": "La negación de un universal afirmativo («todos son») es un particular negativo: «al menos uno no». · 'Ningún estudiante aprobó' es la contraria, no la contradictoria (afirma más de lo necesario). · 'Todos reprobaron' equivale a 'ninguno aprobó', mismo exceso. · 'Algunos aprobaron' es compatible con que todos aprobaran: no niega el enunciado.",
     "b": "Lógica · negación de proposiciones categóricas"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Lógico · Silogismos",
     "q": "Premisas: «Todos los jueces son abogados» y «Algunos abogados son profesores». ¿Qué se concluye con necesidad sobre los jueces y los profesores?",
     "o": [
      "Todos los jueces son profesores",
      "Nada se sigue con necesidad respecto de jueces y profesores",
      "Algunos jueces son profesores",
      "Ningún juez es profesor"
     ],
     "a": 1,
     "e": "El término medio ('abogados') no está distribuido de forma que conecte necesariamente jueces con profesores: que 'algunos abogados' sean profesores no garantiza que los jueces estén entre ellos. La conclusión es indeterminada. · 'Algunos jueces son profesores' no se sigue (podrían no serlo). · 'Ningún juez es profesor' tampoco se sigue. · 'Todos los jueces son profesores' es un salto injustificado.",
     "b": "Lógica formal · falacia del término medio no distribuido"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Razonamiento Lógico · Conectores",
     "q": "La proposición «Estudia derecho Y trabaja» es verdadera únicamente cuando:",
     "o": [
      "Al menos una de las dos afirmaciones es verdadera",
      "Ambas afirmaciones son verdaderas a la vez",
      "Ninguna de las dos es verdadera",
      "Una es verdadera y la otra falsa"
     ],
     "a": 1,
     "e": "La conjunción ('Y') es verdadera solo si ambos componentes son verdaderos. · 'Al menos una' describe la disyunción ('O'), no la conjunción. · 'Ninguna verdadera' hace falsa la conjunción. · 'Una sí y otra no' también la hace falsa.",
     "b": "Lógica proposicional · conjunción"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Lógico · Conectores",
     "q": "La disyunción inclusiva «Presenta la demanda O paga la multa» es FALSA solamente cuando:",
     "o": [
      "Se cumple exactamente una",
      "No se cumple ninguna de las dos",
      "Se cumple al menos una",
      "Se cumplen las dos cosas"
     ],
     "a": 1,
     "e": "La disyunción inclusiva es falsa únicamente cuando ambos componentes son falsos (no ocurre ninguno). · Cumplir ambas la hace verdadera. · Cumplir al menos una la hace verdadera. · Cumplir exactamente una también la hace verdadera.",
     "b": "Lógica proposicional · disyunción inclusiva"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Lógico · Validez",
     "q": "Analice: P1: «Ningún funcionario deshonesto merece confianza». P2: «Algunos servidores públicos merecen confianza». C: «Algunos servidores públicos no son funcionarios deshonestos». El razonamiento es:",
     "o": [
      "Válido",
      "Inválido",
      "Válido solo si las premisas son verdaderas en la realidad",
      "Indeterminado"
     ],
     "a": 0,
     "e": "Es válido: quienes merecen confianza están, por P1, fuera del conjunto de los deshonestos; como algunos servidores públicos merecen confianza (P2), esos no son deshonestos. · No es inválido: la conclusión se sigue necesariamente. · No es indeterminado: hay conexión lógica. · La validez es formal e independiente de la verdad material de las premisas.",
     "b": "Lógica formal · silogismo válido"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Razonamiento Lógico · Proposiciones",
     "q": "¿Cuál de los siguientes enunciados es una proposición (susceptible de ser verdadera o falsa)?",
     "o": [
      "¡Estudia con disciplina!",
      "La Corte Suprema es el máximo tribunal de la jurisdicción ordinaria",
      "Ojalá gane el concurso",
      "¿Presentaste la demanda a tiempo?"
     ],
     "a": 1,
     "e": "Solo el enunciado declarativo sobre la Corte Suprema tiene valor de verdad (es una proposición, y verdadera). · La pregunta no afirma ni niega. · La orden (exhortación) no tiene valor de verdad. · El deseo ('ojalá') tampoco es verdadero o falso.",
     "b": "Lógica · proposiciones vs. otros enunciados"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Lógico · Equivalencias",
     "q": "El enunciado «Si eres juez, entonces eres abogado» es lógicamente equivalente a:",
     "o": [
      "Eres juez y no eres abogado",
      "Si no eres abogado, entonces no eres juez",
      "No eres juez o no eres abogado",
      "Si eres abogado, entonces eres juez"
     ],
     "a": 1,
     "e": "Un condicional 'si P entonces Q' equivale a su contrarrecíproco 'si no Q entonces no P'. · 'Si eres abogado entonces eres juez' es el recíproco, no equivalente. · 'Eres juez y no abogado' es precisamente la negación del condicional. · 'No eres juez o no eres abogado' no equivale al condicional dado.",
     "b": "Lógica proposicional · contrarrecíproco"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Lógico · Problemas",
     "q": "Cuatro personas —P, Q, R y S— hacen fila. P está antes que Q. R está justo detrás de P. S no es el último. ¿Quién podría NO estar determinado con certeza en su posición?",
     "o": [
      "R está último",
      "Aunque P y R quedan al frente en ese orden, la posición exacta de Q y S puede admitir más de una disposición según se ubique S",
      "El orden queda completamente determinado: P, R, Q, S",
      "P está último"
     ],
     "a": 1,
     "e": "P va antes que Q y R está justo detrás de P (P, R...); pero 'S no es el último' y el resto de condiciones no fijan de manera única dónde entran Q y S, de modo que puede haber más de una disposición válida. · Afirmar un único orden 'P, R, Q, S' asume lo que las premisas no garantizan. · R no está último (está tras P, al frente). · P no está último (está antes que Q y con R detrás).",
     "b": "Razonamiento lógico · ordenamientos y series"
    }
   ],
   "rel": "transversal",
   "ambito": "Transversal · Aptitudes: Razonamiento lógico-dialéctico (todos los cargos)"
  },
  {
   "id": "verbal",
   "numero": "T12",
   "fecha": "Aptitudes",
   "titulo": "Razonamiento Verbal",
   "docente": "Prueba de aptitudes · analogías, léxico y coherencia",
   "resumen": "Comprensión y razonamiento verbal: analogías, sinónimos y antónimos en contexto literario, y ordenamiento de oraciones para lograr coherencia. Basado en el material de competencias lingüísticas del concurso.",
   "preguntas": [
    {
     "t": 1,
     "c": "Razonamiento Verbal · Analogías",
     "q": "ESFERO es a ESCRITURA como DESTORNILLADOR es a:",
     "o": [
      "Tornillo",
      "Mecánica",
      "Talabartería",
      "Herramienta"
     ],
     "a": 1,
     "e": "La relación es instrumento → actividad/campo para el que sirve: el esfero sirve para la escritura; el destornillador, para la mecánica. «Tornillo» es el objeto sobre el que actúa (no la actividad); «herramienta» es la categoría del destornillador, no su función. La analogía exige mantener el MISMO tipo de relación.",
     "b": "Razonamiento verbal · Analogías de función",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Analogías",
     "q": "PÁJARO es a BANDADA como:",
     "o": [
      "Lobo a jauría",
      "Ratón a plaga",
      "Pez a cúmulo",
      "Abeja a colmena"
     ],
     "a": 0,
     "e": "Relación individuo → nombre colectivo propio de esa especie. La bandada es el colectivo de pájaros; la jauría, el de lobos. «Plaga» y «cúmulo» no son los colectivos correctos (el de peces es «cardumen» o «banco»); «colmena» es el lugar de las abejas, no su colectivo (que es «enjambre»).",
     "b": "Razonamiento verbal · Nombres colectivos",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Analogías",
     "q": "PRESIDENTE es a DEMOCRACIA como:",
     "o": [
      "Primer ministro a parlamento",
      "Dictador a golpe",
      "Alcalde a gobernación",
      "Rey a monarquía"
     ],
     "a": 3,
     "e": "Relación gobernante → forma de gobierno que encabeza. El presidente encabeza (una) democracia (república); el rey encabeza la monarquía. El «primer ministro» no es a «parlamento» la misma relación (el parlamento es un órgano, no una forma de gobierno personificada por él); «dictador a golpe» mezcla gobernante con un acto.",
     "b": "Razonamiento verbal · Analogías de correspondencia",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Léxico",
     "q": "«Al comienzo de su locura anunciaba con latinajos APREMIANTES sus urgencias cotidianas» (García Márquez). El sinónimo de APREMIANTES es:",
     "o": [
      "Incesantes",
      "Perniciosos",
      "Perentorios",
      "Intencionados"
     ],
     "a": 2,
     "e": "«Apremiante» = que apremia, urge, no admite demora: su sinónimo es «perentorio» (urgente, determinante, improrrogable). «Incesante» es continuo (no necesariamente urgente); «pernicioso» es dañino; «intencionado» es deliberado. El contexto («urgencias») confirma la idea de urgencia.",
     "b": "Razonamiento verbal · Sinónimos en contexto",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Léxico",
     "q": "«Sabemos de otra SUPERSTICIÓN de aquel tiempo: la del hombre del libro…» (Borges). El antónimo de SUPERSTICIÓN es:",
     "o": [
      "Sapiencia",
      "Erudición",
      "Perspicacia",
      "Incredulidad"
     ],
     "a": 3,
     "e": "Superstición es creencia irracional, crédula; su antónimo es «incredulidad» (falta de creencia, escepticismo). «Sapiencia» y «erudición» son saber acumulado, y «perspicacia» es agudeza: se oponen a la ignorancia o la torpeza, no específicamente a la credulidad supersticiosa.",
     "b": "Razonamiento verbal · Antónimos en contexto",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Léxico",
     "q": "«…por una precisa TRANSLITERACIÓN es casi imposible, dada la ausencia de vocales…» (Borges). El sinónimo de TRANSLITERACIÓN es:",
     "o": [
      "Transmutación",
      "Transpolación",
      "Transcripción",
      "Transformación"
     ],
     "a": 2,
     "e": "Transliterar es representar los signos de un sistema de escritura con los de otro: su sinónimo es «transcripción» (pasar a otra grafía). «Transmutación» y «transformación» implican cambio de naturaleza; «transpolación» (o extrapolación) es trasladar conclusiones a otro ámbito. El contexto (vocales, escritura) fija el sentido gráfico.",
     "b": "Razonamiento verbal · Sinónimos técnicos",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Analogías",
     "q": "ARTESANO es a VASIJA como:",
     "o": [
      "Albañil a casa",
      "Jurista a leyes",
      "Ingeniero a puente",
      "Plomero a tubería"
     ],
     "a": 2,
     "e": "Relación agente → obra que crea con su técnica. El artesano crea la vasija; el ingeniero crea (diseña y construye) el puente. El albañil ejecuta, pero no «crea» la casa como obra propia de diseño; el jurista aplica o interpreta las leyes, no las fabrica; el plomero instala tubería, no la produce. La mejor correspondencia creador→obra es ingeniero→puente.",
     "b": "Razonamiento verbal · Analogías de creación",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Orden",
     "q": "Ordene para formar un párrafo con sentido: (1) Se convirtió en el campeón más joven del país. (2) Cuando nació, era tan bello que todos lo preferían. (3) Pronto demostró que sería el mejor en agility. (4) Esta es la historia de un Border Collie que se hizo campeón. (5) A los dos meses todos jugaban con él, era muy inquieto. El orden correcto es:",
     "o": [
      "2, 5, 3, 1, 4",
      "4, 2, 5, 3, 1",
      "1, 2, 4, 5, 3",
      "3, 2, 1, 4, 5"
     ],
     "a": 1,
     "e": "El párrafo pide una secuencia narrativa: presentación (4: «esta es la historia…»), nacimiento (2), crecimiento a los dos meses (5), desarrollo de la aptitud (3) y desenlace (1: se convirtió en campeón). La oración 4 es la marco introductoria; ubicarla al inicio y cerrar con el logro da coherencia: 4, 2, 5, 3, 1.",
     "b": "Razonamiento verbal · Coherencia y cohesión",
     "d": 3
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Analogías",
     "q": "TELEVISIÓN es a IMAGEN como PARTITURA es a:",
     "o": [
      "Nota",
      "Ritmo",
      "Sonido",
      "Timbre"
     ],
     "a": 2,
     "e": "Relación soporte/medio → aquello que codifica y transmite. La televisión transmite imagen; la partitura codifica sonido (música). «Nota» y «ritmo» son elementos internos del sonido, no el todo que la partitura representa; «timbre» es una cualidad del sonido. El paralelo medio→contenido global es partitura→sonido.",
     "b": "Razonamiento verbal · Analogías medio-contenido",
     "d": 2
    },
    {
     "t": 1,
     "c": "Razonamiento Verbal · Léxico",
     "q": "«Fui tras él tratando de EMPAREJARME a su paso hasta que disminuyó la prisa». El antónimo de EMPAREJARME (igualar el paso) es:",
     "o": [
      "Alinearme",
      "Supeditarme",
      "Desencajarme",
      "Rezagarme"
     ],
     "a": 3,
     "e": "Emparejarse aquí es alcanzar e igualar el ritmo del otro. Su antónimo es «rezagarme» (quedarse atrás, perder el paso). «Alinearme» es ponerse en línea (afín, no opuesto); «supeditarme» es someterme; «desencajarme» es salirse de lugar. La oposición avanzar-a-la-par / quedarse-atrás es la correcta.",
     "b": "Razonamiento verbal · Antónimos en contexto",
     "d": 2
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Verbal · Analogías",
     "q": "MÉDICO es a HOSPITAL como JUEZ es a:",
     "o": [
      "Ley",
      "Sentencia",
      "Justicia",
      "Juzgado"
     ],
     "a": 3,
     "e": "La relación es profesional → lugar donde ejerce su función. El médico ejerce en el hospital; el juez, en el juzgado. · 'Ley' es el instrumento que aplica, no el lugar. · 'Sentencia' es el producto de su labor. · 'Justicia' es el valor o fin que persigue, no el lugar físico.",
     "b": "Razonamiento verbal · analogías de lugar"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Verbal · Analogías",
     "q": "EFÍMERO es a PERDURABLE como:",
     "o": [
      "Fugaz a permanente",
      "Rápido a veloz",
      "Escaso a insuficiente",
      "Breve a corto"
     ],
     "a": 0,
     "e": "La relación es de antonimia: efímero (que dura poco) se opone a perdurable. 'Fugaz' (breve) se opone a 'permanente'. · 'Rápido/veloz' son sinónimos, no antónimos. · 'Escaso/insuficiente' son afines. · 'Breve/corto' son sinónimos.",
     "b": "Razonamiento verbal · analogías de antonimia"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Verbal · Léxico",
     "q": "En «El testigo ofreció un relato PROLIJO de los hechos», la palabra PROLIJO significa:",
     "o": [
      "Detallado y esmerado, a veces en exceso",
      "Confuso y desordenado",
      "Falso o inventado",
      "Breve y superficial"
     ],
     "a": 0,
     "e": "Prolijo significa cuidadoso, detallado y extenso (a veces excesivamente minucioso). · 'Confuso y desordenado' es casi lo opuesto. · 'Breve y superficial' contradice el sentido. · 'Falso' no forma parte del significado.",
     "b": "Razonamiento verbal · léxico en contexto"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Verbal · Inferencia",
     "q": "«Aunque la reforma prometía celeridad, los términos procesales terminaron alargándose por la falta de jueces.» Del enunciado se infiere que:",
     "o": [
      "Los términos procesales se eliminaron",
      "La reforma no tenía relación con la celeridad",
      "La escasez de jueces neutralizó el efecto que la reforma buscaba",
      "La reforma logró su objetivo de celeridad"
     ],
     "a": 2,
     "e": "El 'aunque' contrapone la promesa de celeridad con el resultado contrario causado por la falta de jueces: la escasez neutralizó el objetivo. · Afirmar que 'logró la celeridad' contradice el texto. · 'Se eliminaron los términos' no se dice. · Que 'no tenía relación con la celeridad' contradice que la prometía.",
     "b": "Razonamiento verbal · inferencia y conectores contraargumentativos"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Verbal · Orden",
     "q": "Ordene para formar un párrafo coherente: (1) Por ello, el juez debe motivar sus decisiones. (2) La motivación es una garantía del debido proceso. (3) Toda decisión judicial afecta derechos. (4) Sin motivación, el afectado no podría controvertir el fallo. El orden más coherente es:",
     "o": [
      "3, 1, 4, 2",
      "3, 4, 2, 1",
      "1, 2, 3, 4",
      "2, 4, 3, 1"
     ],
     "a": 0,
     "e": "La secuencia lógica parte del hecho (3: toda decisión afecta derechos), deriva el deber (1: por ello debe motivar), explica la consecuencia de no hacerlo (4: sin motivación no se podría controvertir) y cierra con el fundamento (2: la motivación es garantía del debido proceso): 3, 1, 4, 2. · '1, 2, 3, 4' empieza por 'por ello' sin antecedente. · '2, 4, 3, 1' rompe el hilo causal. · '3, 4, 2, 1' deja 'por ello' al final, sin conexión.",
     "b": "Razonamiento verbal · coherencia y cohesión"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Verbal · Idea principal",
     "q": "«La independencia judicial no es un privilegio del juez, sino una garantía para el ciudadano: asegura que sus casos se decidan conforme a derecho y no según presiones externas.» La idea principal es:",
     "o": [
      "Los jueces gozan de privilegios especiales",
      "La independencia judicial existe para proteger al ciudadano, garantizando decisiones conforme a derecho",
      "Los ciudadanos presionan a los jueces",
      "El derecho cambia según las presiones externas"
     ],
     "a": 1,
     "e": "El texto reformula la independencia como garantía para el ciudadano, no como privilegio del juez: esa es la tesis central. · 'Privilegios especiales' es justo lo que el texto niega. · 'Los ciudadanos presionan' invierte el sentido (la independencia protege frente a presiones). · 'El derecho cambia según presiones' contradice la idea de decidir conforme a derecho.",
     "b": "Razonamiento verbal · identificación de la idea principal"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Verbal · Léxico",
     "q": "El antónimo de EXHAUSTIVO, en «un análisis exhaustivo del expediente», es:",
     "o": [
      "Somero",
      "Completo",
      "Minucioso",
      "Riguroso"
     ],
     "a": 0,
     "e": "Exhaustivo (completo, que agota el tema) se opone a somero (superficial, hecho por encima). · 'Completo', 'minucioso' y 'riguroso' son sinónimos o afines de exhaustivo, no antónimos.",
     "b": "Razonamiento verbal · antónimos en contexto"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Verbal · Inferencia",
     "q": "«El acuerdo se firmó, si bien ninguna de las partes quedó plenamente satisfecha.» De la oración se desprende que:",
     "o": [
      "No se logró ningún acuerdo",
      "Solo una parte firmó",
      "Hubo acuerdo pese a una satisfacción parcial de ambas partes",
      "Las partes quedaron totalmente conformes"
     ],
     "a": 2,
     "e": "'Si bien' introduce una concesión: hubo acuerdo, aunque la satisfacción no fue plena para ninguna. · 'Totalmente conformes' contradice 'ninguna quedó plenamente satisfecha'. · 'No se logró acuerdo' contradice 'se firmó'. · 'Solo una parte firmó' no se infiere: habla de 'las partes'.",
     "b": "Razonamiento verbal · conectores concesivos"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Razonamiento Verbal · Analogías",
     "q": "PRÓLOGO es a LIBRO como PREÁMBULO es a:",
     "o": [
      "Autor",
      "Página",
      "Constitución",
      "Capítulo"
     ],
     "a": 2,
     "e": "La relación es texto introductorio → obra que encabeza. El prólogo introduce el libro; el preámbulo introduce la Constitución. · 'Página' es una parte física, no la obra. · 'Autor' es quien la escribe. · 'Capítulo' es una división interna, no el todo introducido.",
     "b": "Razonamiento verbal · analogías de correspondencia"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Razonamiento Verbal · Comprensión",
     "q": "«La norma es clara en abstracto, pero su aplicación a este caso genera dudas porque los hechos no encajan del todo en el supuesto previsto.» El texto plantea, ante todo, un problema de:",
     "o": [
      "Vigencia temporal de la norma",
      "Subsunción de los hechos en el supuesto normativo",
      "Validez de la norma",
      "Redacción gramatical de la norma"
     ],
     "a": 1,
     "e": "El texto contrasta una norma clara con hechos que no encajan del todo en su supuesto: es un problema de subsunción (encaje de los hechos en la hipótesis normativa). · No cuestiona la validez de la norma. · No trata su vigencia temporal. · No alude a su redacción gramatical, que se dice clara.",
     "b": "Razonamiento verbal · comprensión · subsunción"
    }
   ],
   "rel": "transversal",
   "ambito": "Transversal · Aptitudes: Razonamiento verbal (todos los cargos)"
  },
  {
   "id": "comportamentales",
   "numero": "T13",
   "fecha": "Comportamental",
   "titulo": "Competencias Comportamentales",
   "docente": "Prueba comportamental · Decreto 815 de 2018 y enfoque diferencial",
   "resumen": "Juicio situacional según el marco de competencias del Decreto 815 de 2018: orientación al ciudadano, orientación a resultados, trabajo en equipo, adaptación al cambio, manejo de conflictos, niveles del empleo y enfoque diferencial de derechos. No hay respuestas 'ingeniosas': se elige la conducta que mejor se ajusta a la competencia y a los valores del servicio público.",
   "preguntas": [
    {
     "t": 1,
     "c": "Competencias · Orientación al usuario y al ciudadano",
     "q": "Los representantes de la comunidad manifiestan que la formulación del programa desconoce las realidades socioeconómicas y culturales de los municipios. Para avanzar pese a la dificultad, usted propone:",
     "o": [
      "Informar a la comunidad que en esta fase del proyecto es inviable abrir un nuevo diagnóstico de necesidades",
      "Diseñar una metodología en la que cada estrategia planteada sea validada con los principales líderes de la comunidad",
      "Revisar únicamente entre el equipo técnico las observaciones sobre las necesidades ya identificadas"
     ],
     "a": 1,
     "e": "La conducta que mejor expresa orientación al ciudadano y trabajo con la comunidad es co-construir: validar cada estrategia con los líderes comunitarios integra sus realidades y legitima el programa. La opción A cierra la participación; la C excluye a la comunidad del análisis. La clave está en incluir, no en imponer ni en aplazar.",
     "b": "Decreto 815/2018 · Orientación al usuario y al ciudadano",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Aprendizaje continuo",
     "q": "Ingresó hace poco y tuvo una capacitación breve. Para actualizarse sobre las actividades misionales y prestar mejor servicio, la conducta que mejor refleja aprendizaje continuo es:",
     "o": [
      "Consultar los datos directamente con las personas que trabajan en las áreas misionales",
      "Consultar la información de la capacitación y el sitio web de la entidad",
      "Investigar de forma autónoma en los repositorios y la documentación institucional sobre las actividades misionales"
     ],
     "a": 2,
     "e": "Aprendizaje continuo implica gestionar las propias fuentes de información confiables. Investigar de manera autónoma en los repositorios institucionales muestra iniciativa y rigor (conducta asociada del Decreto 815). Consultar a colegas o revisar la web son válidos, pero la conducta más completa y autónoma es la gestión propia de fuentes documentales.",
     "b": "Decreto 815/2018 · Aprendizaje continuo",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Orientación a resultados",
     "q": "Debe apoyar la organización del archivo porque en una semana habrá auditoría de Control Interno. Para cumplir en el tiempo establecido, la conducta más orientada a resultados es:",
     "o": [
      "Llevar un diario de campo de las actividades realizadas cada día",
      "Redactar una bitácora de las dificultades diarias del proceso",
      "Elaborar un cuadro de control para monitorear diariamente el progreso de la actividad"
     ],
     "a": 2,
     "e": "Orientación a resultados se asocia a «diseñar y utilizar indicadores para medir y comprobar los resultados» (Decreto 815). Un cuadro de control con seguimiento del avance permite gestionar el cumplimiento contra la meta y el plazo. El diario y la bitácora registran, pero no miden el progreso hacia el objetivo.",
     "b": "Decreto 815/2018 · Orientación a resultados",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Trabajo en equipo y colaboración",
     "q": "Tras enviar un documento, varios compañeros dicen que es confuso y poco claro el proceso descrito. Frente a esto, usted les solicita:",
     "o": [
      "Concertar una reunión en la que se realicen los ajustes necesarios para dar claridad al documento",
      "Volver a leer el documento varias veces para que interioricen mejor el proceso",
      "Comentar por escrito las dudas puntuales que tienen sobre el proceso"
     ],
     "a": 0,
     "e": "La respuesta más colaborativa y orientada a la solución es reunir al equipo para ajustar el documento conjuntamente: reconoce la retroalimentación y mejora el producto. Pedir que «lo lean varias veces» traslada el problema al lector y niega la falla de claridad; pedir dudas por escrito es útil pero menos resolutivo que co-corregir.",
     "b": "Decreto 815/2018 · Trabajo en equipo · Comunicación efectiva",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Adaptación al cambio",
     "q": "Un líder que no se ha adaptado a la nueva cultura digital le expone los contratiempos con las TIC que han llevado a incumplir metas. Usted opta por:",
     "o": [
      "Expresarle su malestar por no seguir el conducto regular y hablar primero con su jefe",
      "Escucharlo con calma y acompañarlo a comprender las nuevas tendencias y la transformación digital de la institución",
      "Reportar de inmediato el incumplimiento a la dependencia de talento humano"
     ],
     "a": 1,
     "e": "La adaptación al cambio y el liderazgo de personas se expresan escuchando y acompañando el tránsito hacia la cultura digital, no sancionando la iniciativa de acercarse. La opción A castiga la comunicación; la C escala sin antes apoyar. Acompañar el cambio es la conducta esperada.",
     "b": "Decreto 815/2018 · Adaptación al cambio",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Niveles del empleo (Decreto 815)",
     "q": "Cuatro funcionarios preparan el concurso. MARTHA crea horarios para estudiar con disciplina; CARLOS investiga los tipos de prueba para anticiparse a los temas; JUAN propone crear grupos de estudio. ¿Quién actúa con la lógica propia del nivel del JUEZ (directivo/estratégico)?",
     "o": [
      "MARTHA",
      "CARLOS",
      "JUAN"
     ],
     "a": 1,
     "e": "El nivel directivo/decisor (juez) se define por la visión estratégica y la anticipación: CARLOS se anticipa a los temas investigando el tipo de prueba, actuación propia de quien planea y prevé. MARTHA organiza y ejecuta con método (perfil técnico); JUAN articula al grupo (colaboración/asistencial). La clave es asociar la conducta al rol.",
     "b": "Decreto 815/2018 · Niveles del empleo público",
     "d": 3
    },
    {
     "t": 1,
     "c": "Competencias · Niveles del empleo (Decreto 815)",
     "q": "En el mismo caso, ¿quién realiza una acción propia del nivel TÉCNICO (organiza y aplica método/herramientas)?",
     "o": [
      "MARTHA",
      "CARLOS",
      "JUAN"
     ],
     "a": 0,
     "e": "El nivel técnico se asocia a organizar el trabajo y aplicar herramientas y procedimientos: MARTHA crea horarios y estructura el estudio con disciplina, conducta de confiabilidad técnica y responsabilidad. CARLOS anticipa (directivo) y JUAN articula al equipo (apoyo/colaboración).",
     "b": "Decreto 815/2018 · Niveles del empleo público",
     "d": 3
    },
    {
     "t": 1,
     "c": "Competencias · Niveles del empleo (Decreto 815)",
     "q": "En el mismo caso, ¿quién realiza una acción propia del nivel ASISTENCIAL (apoya y facilita el trabajo conjunto)?",
     "o": [
      "MARTHA",
      "CARLOS",
      "JUAN"
     ],
     "a": 2,
     "e": "El nivel asistencial se asocia a apoyar y facilitar la labor del grupo: JUAN propone crear grupos de estudio y colaborar entre todos, conducta de soporte y trabajo conjunto. CARLOS decide/anticipa (directivo) y MARTHA organiza el método (técnico).",
     "b": "Decreto 815/2018 · Niveles del empleo público",
     "d": 3
    },
    {
     "t": 1,
     "c": "Competencias · Enfoque diferencial y DDHH",
     "q": "Juan Pérez, hombre trans, radica un derecho de petición para corregir su nombre y género en un documento oficial, invocando su identidad de género reconocida. A usted le corresponde responder. Lo procedente es:",
     "o": [
      "Aplazar la decisión hasta que adjunte copia de la historia clínica que evidencie la reasignación",
      "Contestar de fondo verificando el cumplimiento de los requisitos legales del trámite, sin exigencias adicionales ni discriminatorias",
      "Responder solo cuando la Registraduría certifique previamente el nuevo nombre"
     ],
     "a": 1,
     "e": "El enfoque diferencial y el derecho a la identidad de género (T-063/2015 y corrección de componente de sexo por vía notarial, Decreto 1227/2015) impiden exigir historia clínica o pruebas médicas de «reasignación»: eso es discriminatorio. Corresponde tramitar de fondo verificando solo los requisitos legales del trámite, con enfoque de derechos.",
     "b": "C.P. art. 13 · T-063/2015 · Decreto 1227/2015 · Enfoque diferencial",
     "d": 3
    },
    {
     "t": 1,
     "c": "Competencias · Enfoque diferencial y DDHH",
     "q": "Un miembro de una comunidad étnica solicita copia, en su lengua materna, del texto de una ley que le atañe. Al funcionario le corresponde:",
     "o": [
      "Aclarar al peticionario que la norma está en español y no hay obligación de traducirla",
      "Disponer o gestionar la traducción del documento, en garantía del derecho a la información con enfoque diferencial étnico",
      "Orientar que avise al líder de su pueblo para que este asuma la traducción"
     ],
     "a": 1,
     "e": "El derecho fundamental de petición y de acceso a la información, leído con enfoque diferencial étnico y el Convenio 169 OIT, obliga a la administración a remover barreras lingüísticas: gestionar la traducción a la lengua propia. Remitir al líder o negar por «está en español» desconoce la diversidad étnica y el deber de accesibilidad.",
     "b": "C.P. arts. 7, 10, 23 · Convenio 169 OIT · Enfoque diferencial",
     "d": 3
    },
    {
     "t": 1,
     "c": "Competencias · Enfoque diferencial y DDHH",
     "q": "Un ciudadano con movilidad reducida pide adecuar el acceso de una sede que es bien de patrimonio histórico. Se le pide proyectar la respuesta. Lo procedente es:",
     "o": [
      "Indicar que, en coordinación con el Ministerio de Cultura, se diseñará un plan especial de adecuación que concilie accesibilidad y protección del patrimonio",
      "Manifestar que, por ser edificación patrimonial, debe abstenerse de realizar cualquier obra",
      "Expresar que, por ser inmueble arrendado, la entidad está exenta de acondicionar los espacios"
     ],
     "a": 0,
     "e": "La accesibilidad es un derecho (Ley 1618/2013; Convención sobre los Derechos de las Personas con Discapacidad). No puede negarse sin más por el valor patrimonial: procede armonizar ambos deberes mediante un plan especial con el Ministerio de Cultura. Negar por patrimonio o por ser arrendado elude una obligación constitucional de ajustes razonables.",
     "b": "Ley 1618/2013 · CDPD · Enfoque diferencial (discapacidad)",
     "d": 3
    },
    {
     "t": 1,
     "c": "Competencias · Compromiso ético y con la entidad",
     "q": "Un compañero atraviesa un momento familiar difícil por la enfermedad de un familiar, lo que le genera errores y retrasa al grupo. La conducta más adecuada es:",
     "o": [
      "No mencionar nada y dedicarse solo a su propio trabajo",
      "Hablar con el compañero, escucharlo y ofrecerle apoyo, ayudándole razonablemente en su labor mientras supera el momento",
      "Reportar de inmediato los errores a la jefatura para que se tomen medidas"
     ],
     "a": 1,
     "e": "El compromiso con las personas y el trabajo en equipo llevan a acompañar al compañero y sostener el cumplimiento colectivo con apoyo humano y profesional. Ignorarlo abandona al equipo; reportar de entrada, sin diálogo ni apoyo, no es la primera conducta esperada. La empatía operativa concilia el cuidado y la meta.",
     "b": "Decreto 815/2018 · Compromiso · Trabajo en equipo",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Transparencia e integridad",
     "q": "Para cumplir las metas de su área, la actitud que mejor expresa integridad en el servicio público es:",
     "o": [
      "Cumplirlas con total transparencia, ajustándose a los procedimientos y a la normativa",
      "Cumplirlas por cualquier medio disponible con tal de alcanzar el indicador",
      "Priorizar el cumplimiento aunque implique omitir algún control interno"
     ],
     "a": 0,
     "e": "La integridad y transparencia (valores del servicio público, Ley 1952/2019 y Código de Integridad) exigen alcanzar las metas dentro de la legalidad y los procedimientos. La eficacia no justifica saltarse controles: el «fin» no legitima el «medio» en la función pública.",
     "b": "Ley 1952/2019 · Código de Integridad · Transparencia",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Adaptación al cambio",
     "q": "Se anuncia una reestructuración de la planta de personal de su dependencia. La conducta que mejor refleja adaptación al cambio y compromiso es:",
     "o": [
      "Esperar a que la reestructuración esté lista y acatar lo que resulte",
      "Participar de manera proactiva, compartir el conocimiento del equipo y aportar información clave para el proceso",
      "Limitarse a aceptar los cambios sin intervenir"
     ],
     "a": 1,
     "e": "La adaptación al cambio no es pasividad: implica participar constructivamente, aportar información y facilitar la transición (conducta asociada del Decreto 815). Esperar o solo «aceptar» son actitudes reactivas; la esperada es la colaboración proactiva con el objetivo institucional.",
     "b": "Decreto 815/2018 · Adaptación al cambio",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Orientación al usuario y al ciudadano",
     "q": "Ante las quejas y sugerencias de los usuarios de la entidad, la conducta más completa de orientación al ciudadano es:",
     "o": [
      "Ser receptivo y dar contestación oportuna a cada requerimiento",
      "Escuchar y, cuando sea posible, entrevistarse con los usuarios para comprender mejor su necesidad",
      "Dar trazabilidad a las quejas para llegar al origen del problema y prevenir su repetición"
     ],
     "a": 2,
     "e": "Aunque responder oportuno y escuchar son deseables, la conducta más madura y sistémica es dar trazabilidad para identificar la causa raíz y prevenir que el problema se repita: mejora el servicio de forma estructural, no solo caso a caso. Es orientación al ciudadano con enfoque de mejora continua.",
     "b": "Decreto 815/2018 · Orientación al usuario · Mejora continua",
     "d": 2
    },
    {
     "t": 1,
     "c": "Competencias · Manejo de conflictos",
     "q": "En su grupo hay conflictos constantes entre dos compañeros. Como integrante del mismo equipo, la conducta más adecuada es:",
     "o": [
      "Escuchar y confrontar respetuosamente a ambas partes con información correcta, buscando restablecer la relación",
      "Reportar de inmediato a ambos ante la jefatura para que los sancione",
      "Mantenerse al margen para no involucrarse en el conflicto"
     ],
     "a": 0,
     "e": "El manejo de conflictos y la comunicación efectiva llevan a mediar con respeto, escuchar a ambas partes y buscar restablecer la relación con base en información objetiva. Reportar para sancionar de entrada o inhibirse no resuelven el clima laboral; la conducta esperada es la gestión constructiva del conflicto.",
     "b": "Decreto 815/2018 · Manejo de conflictos · Relaciones interpersonales",
     "d": 2
    }
   ],
   "rel": "transversal",
   "ambito": "Transversal · Psicotécnica y competencias comportamentales (Decreto 815; todos los cargos)"
  },
  {
   "id": "ofimatica",
   "numero": "T14",
   "fecha": "Aptitudes",
   "titulo": "Habilidades Digitales y Ofimáticas",
   "docente": "Prueba de aptitudes · manejo ofimático y recursos digitales (Instructivo)",
   "resumen": "Proceso de aptitudes del examen de la Rama: manejo de procesadores de texto y PDF, hojas de cálculo, presentaciones, correo, navegación segura, compresión, respaldo, colaboración en la nube y seguridad de la información.",
   "preguntas": [
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "En un procesador de texto, la combinación de teclas Ctrl + Z sirve para:",
     "o": [
      "Guardar el documento",
      "Deshacer la última acción",
      "Copiar el texto seleccionado",
      "Cerrar el programa"
     ],
     "a": 1,
     "e": "Ctrl + Z deshace la última acción; Ctrl + Y (o Ctrl + Shift + Z) la rehace. Guardar es Ctrl + G/S, copiar Ctrl + C.",
     "b": "Ofimática · Procesadores de texto"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Un archivo con extensión .pdf se caracteriza porque:",
     "o": [
      "Solo puede abrirse en Microsoft Word",
      "Conserva el formato del documento independientemente del dispositivo o programa con que se abra",
      "Es una hoja de cálculo",
      "No puede protegerse con contraseña"
     ],
     "a": 1,
     "e": "El PDF (formato de documento portátil) preserva la maquetación en cualquier equipo; puede protegerse, firmarse y, según su creación, permitir o no edición. No es exclusivo de Word.",
     "b": "Ofimática · PDF"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "En una hoja de cálculo, la celda C1 contiene la fórmula =SUMA(A1:A10)/B1. Si A1:A10 suman 200 y B1 vale 0, el resultado que se muestra es:",
     "o": [
      "200",
      "0",
      "Un error de división por cero (p. ej., #¡DIV/0!)",
      "20"
     ],
     "a": 2,
     "e": "Dividir entre cero no está definido: la hoja devuelve un error del tipo #¡DIV/0!. Es un caso típico que exige revisar el denominador antes de confiar en el cálculo.",
     "b": "Ofimática · Hojas de cálculo"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Para enviar un mismo correo a varios destinatarios SIN que unos vean la dirección de los otros, se deben ubicar las direcciones en el campo:",
     "o": [
      "Para (To)",
      "CC (con copia)",
      "CCO (con copia oculta / BCC)",
      "Asunto"
     ],
     "a": 2,
     "e": "El campo CCO/BCC oculta las direcciones entre destinatarios, protegiendo sus datos personales. «Para» y «CC» dejan visibles todas las direcciones a todos.",
     "b": "Ofimática · Correo electrónico · Protección de datos"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Comprimir una carpeta en un archivo .zip sirve principalmente para:",
     "o": [
      "Eliminar los archivos originales",
      "Reducir el tamaño y agrupar varios archivos en uno solo para almacenarlos o enviarlos con mayor facilidad",
      "Convertir los archivos a PDF",
      "Encriptar el disco duro"
     ],
     "a": 1,
     "e": "La compresión agrupa y reduce el peso de los archivos en un contenedor único (.zip, .rar), facilitando su envío y almacenamiento; no borra los originales ni cambia su tipo.",
     "b": "Ofimática · Compresión de archivos"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "En una presentación de diapositivas, el «modo patrón de diapositivas» (o patrón/slide master) se utiliza para:",
     "o": [
      "Reproducir la presentación",
      "Definir de manera uniforme el diseño, fuentes y elementos que se repiten en todas las diapositivas",
      "Insertar una sola imagen",
      "Imprimir en blanco y negro"
     ],
     "a": 1,
     "e": "El patrón de diapositivas fija el diseño global (tipografías, logos, marcadores) que se hereda en todas las diapositivas, garantizando consistencia y ahorro de tiempo.",
     "b": "Ofimática · Presentaciones"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Un funcionario debe compartir con varios colegas un documento para que TODOS puedan editarlo simultáneamente y quede una sola versión actualizada. La opción más adecuada es:",
     "o": [
      "Enviar el archivo adjunto por correo a cada uno y luego unir manualmente las versiones",
      "Alojar el documento en una herramienta colaborativa en la nube (p. ej., un documento compartido) y otorgar permisos de edición",
      "Imprimirlo y repartir copias",
      "Guardarlo en una memoria USB y pasarla de escritorio en escritorio"
     ],
     "a": 1,
     "e": "El trabajo colaborativo en la nube permite edición simultánea, control de versiones y una única fuente actualizada. Enviar adjuntos genera múltiples versiones que luego hay que conciliar a mano, con riesgo de error.",
     "b": "Ofimática · Herramientas de colaboración en la nube"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "En la navegación web, el candado y el prefijo «https://» en la barra de direcciones indican que:",
     "o": [
      "La página es gratuita",
      "La conexión con el sitio está cifrada, lo que protege la información transmitida",
      "El sitio no tiene publicidad",
      "La página se abrirá más rápido"
     ],
     "a": 1,
     "e": "HTTPS cifra la comunicación entre el navegador y el servidor (TLS), protegiendo datos como contraseñas. No garantiza por sí solo que el sitio sea legítimo, pero sí que el canal está cifrado.",
     "b": "Ofimática · Navegación segura"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Usted recibe un correo, en apariencia del área de sistemas, que le pide «confirmar urgentemente su usuario y contraseña» haciendo clic en un enlace. Lo más adecuado es:",
     "o": [
      "Responder de inmediato con las credenciales para no perder el acceso",
      "No entregar credenciales, no hacer clic en el enlace y verificar por un canal oficial, pues puede tratarse de phishing",
      "Reenviar el correo a todos sus compañeros",
      "Cambiar la contraseña por una más corta y fácil"
     ],
     "a": 1,
     "e": "Ninguna área legítima pide contraseñas por correo. La solicitud urgente de credenciales vía enlace es el patrón clásico de phishing: no se responde, no se hace clic y se verifica por un canal oficial. Es seguridad de la información básica.",
     "b": "Ofimática · Seguridad de la información"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Para conservar una copia de seguridad que sobreviva al daño físico del computador, la práctica recomendada es:",
     "o": [
      "Guardar todo únicamente en el disco duro del mismo equipo",
      "Mantener respaldos en un medio externo y/o en la nube, siguiendo una política de copias periódicas",
      "Imprimir todos los archivos",
      "No guardar nada para ahorrar espacio"
     ],
     "a": 1,
     "e": "La regla de respaldo (idealmente varias copias, en medios distintos, una fuera del sitio) protege frente a fallas de hardware, robo o ransomware. Depender solo del disco local deja los datos en un único punto de falla.",
     "b": "Ofimática · Almacenamiento y respaldo"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "En una hoja de cálculo, para que al copiar una fórmula una referencia a una celda NO cambie (permanezca fija), se usa:",
     "o": [
      "El formato de celda como texto",
      "Una referencia relativa (A1)",
      "La función PROMEDIO",
      "Una referencia absoluta con el signo $ (por ejemplo, $A$1)"
     ],
     "a": 3,
     "e": "La referencia absoluta fija fila y columna con el signo $ ($A$1), de modo que no cambia al copiar la fórmula. · La referencia relativa (A1) sí se ajusta al copiar. · El formato de texto no afecta el comportamiento de las referencias. · PROMEDIO es una función, ajena a la fijación de referencias.",
     "b": "Ofimática · referencias absolutas y relativas"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "La combinación de teclas Ctrl + F, en la mayoría de programas y navegadores, sirve para:",
     "o": [
      "Imprimir",
      "Buscar texto dentro del documento o página",
      "Cerrar la ventana",
      "Guardar el archivo"
     ],
     "a": 1,
     "e": "Ctrl + F abre la función de búsqueda de texto. · Guardar es Ctrl + S/G. · Cerrar suele ser Ctrl + W o Alt + F4. · Imprimir es Ctrl + P.",
     "b": "Ofimática · atajos de teclado"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Para citar y ordenar automáticamente las fuentes y generar una tabla de contenido que se actualice sola, en un procesador de texto conviene usar:",
     "o": [
      "Escribir todo manualmente y numerar a mano",
      "Un programa de presentaciones",
      "Una hoja de cálculo",
      "Los estilos de título y las herramientas de referencias/tabla de contenido del programa"
     ],
     "a": 3,
     "e": "Aplicar estilos de título permite generar y actualizar automáticamente la tabla de contenido, y las herramientas de referencias gestionan citas y bibliografía. · Hacerlo manualmente es propenso a errores y no se actualiza. · Una hoja de cálculo no genera tablas de contenido de un texto. · Un programa de presentaciones no es la herramienta para documentos extensos.",
     "b": "Ofimática · estilos y tabla de contenido"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Un funcionario debe enviar un documento oficial garantizando que el destinatario pueda verificar quién lo firmó y que no fue alterado tras la firma. La herramienta adecuada es:",
     "o": [
      "Proteger el archivo con una contraseña de apertura",
      "Escribir el nombre al final del documento",
      "Una firma electrónica o digital, que permite autenticar el firmante e integridad del documento",
      "Cambiar el color de la fuente del nombre"
     ],
     "a": 2,
     "e": "La firma electrónica/digital autentica al firmante y garantiza la integridad (detecta alteraciones posteriores). · Escribir el nombre no autentica ni protege contra alteraciones. · Cambiar el color de la fuente no tiene efecto jurídico ni técnico. · La contraseña de apertura restringe el acceso, pero no acredita quién firmó ni la integridad tras la firma.",
     "b": "Ofimática · firma electrónica y digital · integridad"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "La diferencia práctica entre «Guardar» y «Guardar como» en un procesador de texto es que «Guardar como» permite:",
     "o": [
      "Cerrar el programa sin guardar",
      "Crear una copia con otro nombre, ubicación o formato, conservando el archivo original",
      "Eliminar el documento",
      "Imprimir en doble cara"
     ],
     "a": 1,
     "e": "'Guardar como' crea una copia con nuevo nombre, ubicación o formato, sin sobrescribir el original; 'Guardar' actualiza el mismo archivo. · No sirve para cerrar sin guardar. · No elimina el documento. · No controla la impresión.",
     "b": "Ofimática · gestión de archivos"
    },
    {
     "t": 1,
     "d": 3,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Al recibir un archivo adjunto inesperado con extensión ejecutable (por ejemplo, .exe) de un remitente desconocido, la conducta más segura es:",
     "o": [
      "Reenviarlo a los compañeros para que opinen",
      "Abrirlo de inmediato para ver de qué se trata",
      "Guardarlo en una carpeta compartida por si acaso",
      "No abrirlo, no ejecutarlo y verificar o eliminar, pues los ejecutables de origen desconocido son un vector común de malware"
     ],
     "a": 3,
     "e": "Los ejecutables (.exe) de remitentes desconocidos son un vector típico de malware; lo seguro es no abrirlos ni ejecutarlos y verificar por canal confiable o eliminar. · Abrirlo de inmediato es justo el riesgo. · Reenviarlo propaga el posible peligro. · Guardarlo en una carpeta compartida expone a otros usuarios.",
     "b": "Ofimática · seguridad de la información · malware"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "En un correo electrónico, el campo «Asunto» sirve para:",
     "o": [
      "Adjuntar archivos",
      "Escribir la dirección del destinatario",
      "Indicar de forma breve el tema o motivo del mensaje",
      "Definir el color del texto"
     ],
     "a": 2,
     "e": "El 'Asunto' resume brevemente el tema del correo, ayudando a identificarlo y priorizarlo. · Los archivos se agregan con 'Adjuntar'. · La dirección va en 'Para'. · El color del texto se define con las herramientas de formato.",
     "b": "Ofimática · correo electrónico"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Para localizar rápidamente todas las apariciones de una palabra en un documento largo y cambiarlas por otra, la herramienta idónea es:",
     "o": [
      "La función «Buscar y reemplazar»",
      "Leer todo el documento y corregir a mano",
      "Cambiar el tamaño de la fuente",
      "Insertar un salto de página"
     ],
     "a": 0,
     "e": "'Buscar y reemplazar' localiza todas las apariciones y las sustituye de una vez, con opción de revisar cada una. · Corregir a mano es lento y propenso a omisiones. · El tamaño de fuente no afecta el contenido. · Un salto de página organiza el diseño, no reemplaza texto.",
     "b": "Ofimática · buscar y reemplazar"
    },
    {
     "t": 1,
     "d": 2,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Una contraseña más segura frente a ataques se caracteriza por:",
     "o": [
      "Combinar longitud suficiente con mayúsculas, minúsculas, números y símbolos, evitando datos personales predecibles",
      "Ser corta y fácil de recordar, como una fecha",
      "Ser el nombre del usuario",
      "Repetir la misma en todos los servicios"
     ],
     "a": 0,
     "e": "Una contraseña robusta combina longitud y variedad de caracteres, evitando datos personales predecibles. · Ser corta y basada en una fecha la hace vulnerable. · El nombre del usuario es fácilmente adivinable. · Repetir la misma contraseña propaga el riesgo si una se filtra.",
     "b": "Ofimática · seguridad · contraseñas"
    },
    {
     "t": 1,
     "d": 1,
     "c": "Habilidades Digitales y Ofimáticas",
     "q": "Un archivo guardado «en la nube» (por ejemplo, en un servicio de almacenamiento en línea) se caracteriza por:",
     "o": [
      "Poder consultarse desde distintos dispositivos con conexión y credenciales, y facilitar copias de respaldo",
      "Solo poder abrirse en el computador donde se creó",
      "Borrarse al apagar el equipo",
      "No poder compartirse con nadie"
     ],
     "a": 0,
     "e": "El almacenamiento en la nube permite acceder al archivo desde varios dispositivos con conexión y credenciales, y sirve de respaldo. · No queda atado a un solo equipo. · No se borra al apagar el computador. · Sí puede compartirse mediante permisos.",
     "b": "Ofimática · almacenamiento en la nube"
    }
   ],
   "rel": "transversal",
   "ambito": "Transversal · Aptitudes: Habilidades digitales y ofimáticas (todos los cargos)"
  },
  {
   "id": "renta-juridicas",
   "numero": "T13",
   "fecha": "Tema",
   "titulo": "Renta — Personas Jurídicas",
   "docente": "Material propio",
   "resumen": "Elementos del impuesto de renta de personas jurídicas: tarifa, patrimonio, activos, deducciones y compensaciones.",
   "preguntas": [
    {
     "t": 1,
     "c": "Tarifa general de renta",
     "d": 2,
     "q": "Una sociedad nacional está calculando el impuesto de renta a cargo por el año gravable 2023. El contador propone aplicar la tarifa transitoria del 34% prevista para el año 2017, argumentando que es la tarifa más alta y por tanto la más segura frente a una fiscalización. ¿Es correcta esa decisión?",
     "o": [
      "No, porque el artículo 240 del ET fijó la tarifa general en 30% a partir del año gravable 2022 en adelante, y la tarifa del 34% solo rigió como régimen transitorio para el año 2017",
      "Sí, porque ante cualquier duda sobre la tarifa aplicable, la norma tributaria exige aplicar la tarifa más alta históricamente vigente para evitar sanciones por inexactitud",
      "No, porque desde el año 2022 la tarifa general se calcula multiplicando el patrimonio líquido por el porcentaje de renta presuntiva, sin relación con el 30% ni el 34%",
      "Sí, porque la tarifa transitoria del 34% continúa vigente indefinidamente para las sociedades que no acrediten haber optado por el régimen simple"
     ],
     "a": 0,
     "e": "El artículo 240 del ET, modificado por la Ley 2010 de 2019, estableció una reducción gradual de la tarifa general (32% en 2020, 31% en 2021 y 30% a partir de 2022 en adelante). La tarifa del 34% fue un parágrafo transitorio aplicable únicamente al año gravable 2017 y no revive para periodos posteriores.",
     "b": "Art. 240 del ET, parágrafo transitorio 1 y Ley 2010 de 2019."
    },
    {
     "t": 1,
     "c": "Renta presuntiva",
     "d": 3,
     "q": "Una sociedad, al preparar su declaración de renta del año gravable 2022, compara su renta líquida ordinaria con la renta presuntiva calculada aplicando el 1,5% al patrimonio líquido del año anterior, siguiendo el procedimiento que usaba antes de la reforma de 2019. ¿Es correcto ese proceder?",
     "o": [
      "No, porque la Ley 2010 de 2019 redujo gradualmente la tarifa de renta presuntiva hasta llegar a 0% a partir del año gravable 2021, por lo que para 2022 no debe calcularse ni compararse renta presuntiva alguna",
      "Sí, porque el 1,5% corresponde a la tarifa vigente para el sistema de renta presuntiva desde el año 2020 y continúa aplicándose en los años siguientes sin variación",
      "No, porque desde 2019 el sistema de renta presuntiva fue derogado en su totalidad y sustituido íntegramente por el régimen simple de tributación para todas las sociedades",
      "Sí, porque aunque la tarifa se haya reducido, la comparación entre renta líquida ordinaria y renta presuntiva sigue siendo obligatoria para efectos de determinar la renta exenta"
     ],
     "a": 0,
     "e": "La Ley 2010 de 2019 dispuso una disminución gradual de la tarifa de renta presuntiva hasta llegar a 0% para el año gravable 2021 y los siguientes. Esto significa que, aunque el sistema de renta presuntiva formalmente subsiste en el Estatuto Tributario, para 2021 en adelante su efecto es nulo, por lo que no tiene sentido práctico calcularlo ni compararlo con la renta líquida ordinaria bajo la tarifa histórica del 1,5%.",
     "b": "Ley 2010 de 2019; art. 188 del ET."
    },
    {
     "t": 1,
     "c": "Provisión de cartera",
     "d": 3,
     "q": "Una empresa tiene una cuenta por cobrar con 14 meses de vencida. Bajo el método individual de provisión para deudas de dudoso o difícil cobro, el contador provisiona el 15% del valor nominal, aplicando por error la tabla del método general (que asigna 15% a mora superior a 12 meses). ¿Cuál es el error y qué porcentaje debió aplicarse?",
     "o": [
      "Aplicó la tabla del método general en lugar del método individual; bajo este último, la cuota razonable puede llegar hasta el 33% anual del valor nominal de cada deuda con más de un año de vencida",
      "No hay error: los métodos individual y general son equivalentes y ambos permiten provisionar como máximo el 15% para deudas con más de 12 meses de mora",
      "El error está en el porcentaje, pero el método sí era el correcto; bajo el método individual la provisión máxima para más de un año de vencida es del 10%, no del 15%",
      "El error es que ninguno de los dos métodos aplica a cuentas con más de 12 meses de vencidas, pues a partir de ese plazo la deuda debe darse de baja directamente como pérdida"
     ],
     "a": 0,
     "e": "El Decreto 1625 de 2016 contempla dos métodos distintos: el individual, que permite provisionar hasta el 33% anual del valor nominal de cada deuda con más de un año de vencida, y el general, con una tabla escalonada según meses de mora (5% de 3 a 6 meses, 10% de 6 a 12 meses, 15% más de 12 meses). Son métodos alternativos y no deben mezclarse; si la empresa eligió el método individual, la cuota aplicable para esa deuda es hasta el 33%, no el 15% de la tabla general.",
     "b": "Num. 1.2.1.18.20 del Decreto 1625 de 2016."
    },
    {
     "t": 1,
     "c": "Baja de inventarios",
     "d": 2,
     "q": "Una empresa reporta un faltante de inventario del 4% de la suma del inventario inicial más las compras del periodo, atribuido a mermas propias de mercancía de fácil destrucción, sin acreditar fuerza mayor ni caso fortuito. ¿Puede deducir la totalidad de ese faltante conforme al artículo 64 del ET?",
     "o": [
      "No, porque sin acreditar fuerza mayor o caso fortuito el límite deducible por faltantes de fácil destrucción o pérdida es del 3% de la suma del inventario inicial más las compras; el excedente no es deducible",
      "Sí, porque el artículo 64 no establece ningún límite porcentual para faltantes de mercancía de fácil destrucción, siempre que se trate de bienes perecederos",
      "No, porque los faltantes de inventario nunca son deducibles bajo ninguna circunstancia, independientemente de su origen o de si se acredita fuerza mayor",
      "Sí, porque el límite del 3% solo aplica a empresas del sector agropecuario y esta regla no se extiende a los demás sectores económicos"
     ],
     "a": 0,
     "e": "El artículo 64 del ET permite disminuir el inventario final hasta en un 3% de la suma del inventario inicial más las compras, por faltantes de fácil destrucción o pérdida. Solo si se demuestra fuerza mayor o caso fortuito pueden aceptarse disminuciones mayores a ese 3%. Al no acreditarse esas causales, el excedente sobre el 3% no es deducible.",
     "b": "Art. 64 del ET."
    },
    {
     "t": 1,
     "c": "Arrendamiento financiero",
     "d": 3,
     "q": "Una empresa suscribe un contrato de arrendamiento sobre maquinaria. Al final del contrato NO se transfiere la propiedad, NO existe opción de compra ventajosa, pero el plazo pactado cubre la mayor parte de la vida económica del activo. La empresa lo clasifica como arrendamiento operativo, argumentando que basta con que no se cumplan los dos primeros criterios para descartar la naturaleza financiera. ¿Es correcta esa clasificación?",
     "o": [
      "No, porque basta con que se cumpla al menos uno de los criterios del test (en este caso, que el plazo cubra la mayor parte de la vida económica del activo) para que el contrato se clasifique como arrendamiento financiero",
      "Sí, porque la transferencia de propiedad y la opción de compra ventajosa son los únicos criterios determinantes; sin ellos, el contrato es necesariamente operativo",
      "No, porque todo arrendamiento de maquinaria se presume financiero por la naturaleza del activo, independientemente de las condiciones pactadas en el contrato",
      "Sí, porque el criterio del plazo frente a la vida económica del activo solo es relevante en arrendamientos de bienes inmuebles, no de maquinaria"
     ],
     "a": 0,
     "e": "El test tributario de arrendamiento financiero contempla cinco criterios independientes, y basta con que se cumpla uno solo (respuesta 'SÍ' a cualquiera de ellos) para que el contrato se clasifique como financiero. En este caso, aunque no se cumplan los dos primeros criterios, el tercero (que el plazo cubra la mayor parte de la vida económica del activo) sí se cumple, lo que obliga a clasificarlo como financiero y no operativo.",
     "b": "Test de características de arrendamiento financiero, régimen tributario vigente desde enero de 2017."
    },
    {
     "t": 1,
     "c": "Leaseback / retroarriendo",
     "d": 3,
     "q": "La sociedad A vende una maquinaria que tenía registrada como inventario (no como activo fijo) a la sociedad B, quien se la arrienda nuevamente a A bajo la modalidad de leasing. A sostiene que este es un contrato de retroarriendo o leaseback conforme al artículo 127-1 del ET, con el tratamiento tributario especial que allí se prevé. ¿Es correcto ese tratamiento?",
     "o": [
      "No, porque el artículo 127-1 exige que el activo objeto del arrendamiento tenga la naturaleza de activo fijo para el proveedor, condición que no se cumple al tratarse de un inventario",
      "Sí, porque el leaseback solo exige que el proveedor y el arrendatario posterior sean la misma persona, condición que en este caso sí se cumple plenamente",
      "No, porque el leaseback exige que intervengan al menos tres partes distintas en la operación, y en este caso solo participan la sociedad A y la sociedad B",
      "Sí, porque cualquier operación de venta seguida de arrendamiento del mismo bien se considera automáticamente leaseback, sin importar la naturaleza contable del activo vendido"
     ],
     "a": 0,
     "e": "El artículo 127-1 del ET exige dos condiciones concurrentes para el tratamiento especial de retroarriendo: que el proveedor del bien y el arrendatario posterior sean la misma persona, y que el activo tenga la naturaleza de activo fijo para el proveedor. Al tratarse de un inventario (no un activo fijo) para la sociedad A, no se cumple la segunda condición, por lo que la operación no puede tratarse bajo el régimen especial de leaseback del artículo 127-1.",
     "b": "Art. 127-1 del ET."
    },
    {
     "t": 1,
     "c": "Activos biológicos",
     "d": 2,
     "q": "Una empresa agroindustrial posee, de un lado, una plantación de café que produce fruto en el periodo actual y seguirá produciendo en periodos posteriores, y de otro lado, ganado de engorde destinado a ser vendido dentro del ciclo ordinario del negocio en el año en curso. El contador aplica depreciación fiscal a ambos activos por igual. ¿Es correcto ese tratamiento?",
     "o": [
      "No, porque solo la plantación de café es un activo biológico productor (tratado como propiedad, planta y equipo y sujeto a depreciación); el ganado de engorde es un activo biológico consumible, tratado como inventario y no sujeto a depreciación",
      "Sí, porque todos los activos biológicos, sin distinción entre productores y consumibles, están sujetos a depreciación fiscal por línea recta según el artículo 92 del ET",
      "No, porque ni la plantación de café ni el ganado de engorde son depreciables fiscalmente, ya que los activos biológicos están excluidos de depreciación en cualquier caso",
      "Sí, porque la depreciación fiscal de activos biológicos depende del sector económico del contribuyente y no de la clasificación entre productores y consumibles"
     ],
     "a": 0,
     "e": "El artículo 92 del ET distingue entre activos biológicos productores (como las plantas de café, que producen fruto en varios periodos), que reciben el tratamiento tributario de propiedad, planta y equipo y sí están sujetos a depreciación por línea recta; y activos biológicos consumibles (como el ganado de engorde destinado a la venta en el ciclo ordinario), que reciben el tratamiento de inventarios y no son sujetos de depreciación.",
     "b": "Art. 92 del ET."
    },
    {
     "t": 1,
     "c": "Compensación de pérdidas y renta presuntiva",
     "d": 3,
     "q": "Una sociedad generó pérdidas fiscales en el año gravable 2015 y, en ese mismo año, un exceso de renta presuntiva sobre la renta líquida ordinaria. En el año gravable 2028 pretende compensar ambos conceptos contra la renta líquida ordinaria de ese periodo. ¿Es procedente esa compensación?",
     "o": [
      "No es procedente ninguna de las dos: las pérdidas fiscales solo son compensables dentro de los doce periodos gravables siguientes (hasta 2027) y el exceso de renta presuntiva dentro de los cinco años siguientes (hasta 2020), plazos ya vencidos para el año 2028",
      "Sí es procedente compensar ambas, porque tanto las pérdidas fiscales como el exceso de renta presuntiva pueden arrastrarse indefinidamente mientras la sociedad continúe en operación",
      "Es procedente compensar las pérdidas fiscales (que no tienen límite temporal), pero no el exceso de renta presuntiva, que solo puede compensarse en el año inmediatamente siguiente a su generación",
      "No es procedente compensar las pérdidas fiscales por haber transcurrido el plazo, pero sí el exceso de renta presuntiva, que puede compensarse hasta diez años después de generado"
     ],
     "a": 0,
     "e": "El régimen de compensaciones distingue dos plazos distintos: las pérdidas fiscales se pueden compensar con las rentas líquidas ordinarias obtenidas dentro de los doce periodos gravables siguientes a su generación, mientras que el exceso de renta presuntiva sobre la renta ordinaria se compensa dentro de los cinco años siguientes. Para pérdidas y excesos generados en 2015, ambos plazos ya se vencieron antes del año gravable 2028 (2027 y 2020, respectivamente).",
     "b": "Compensación de pérdidas fiscales y excesos de renta presuntiva, régimen del ET."
    }
   ]
  },
  {
   "id": "esal-rte",
   "numero": "T14",
   "fecha": "Tema",
   "titulo": "Renta — ESAL y Régimen Tributario Especial",
   "docente": "Material propio",
   "resumen": "Requisitos de calificación y permanencia en el Régimen Tributario Especial, distribución indirecta de excedentes y determinación del beneficio neto.",
   "preguntas": [
    {
     "t": 1,
     "c": "Calificación en el RTE",
     "d": 2,
     "q": "Una corporación sin ánimo de lucro, legalmente constituida, argumenta ante la DIAN que por su sola condición de entidad no lucrativa debe ser automáticamente clasificada como contribuyente del Régimen Tributario Especial, sin necesidad de ningún trámite adicional. ¿Es correcta esa posición conforme al artículo 19 del ET vigente?",
     "o": [
      "No, porque desde la Ley 1819 de 2016 las ESAL son, por regla general, contribuyentes del régimen ordinario, y solo excepcionalmente pueden solicitar ante la DIAN su calificación como contribuyentes del Régimen Tributario Especial cumpliendo requisitos específicos",
      "Sí, porque la condición de entidad sin ánimo de lucro constituida legalmente es, por sí sola, suficiente para el ingreso automático al Régimen Tributario Especial, tal como ocurría antes de 2016 y continúa vigente hoy",
      "No, porque desde 2016 las ESAL quedaron excluidas por completo de cualquier posibilidad de acceder al Régimen Tributario Especial, sin importar su objeto social",
      "Sí, pero únicamente si la entidad tiene más de diez años de constituida, requisito adicional que sustituyó a la calificación previa exigida antes de la reforma de 2016"
     ],
     "a": 0,
     "e": "Antes de la Ley 1819 de 2016, la sola condición de ESAL con objeto social de interés general daba acceso al régimen especial. Desde la reforma, el artículo 19 del ET invirtió la regla: las ESAL son en principio contribuyentes del régimen ordinario, y solo de manera excepcional y previa solicitud pueden calificar al Régimen Tributario Especial, cumpliendo los requisitos de estar legalmente constituidas, desarrollar una actividad meritoria del artículo 359 y no distribuir ni reembolsar excedentes ni aportes.",
     "b": "Art. 19 del ET, modificado por la Ley 1819 de 2016."
    },
    {
     "t": 1,
     "c": "Distribución indirecta de excedentes",
     "d": 3,
     "q": "Una fundación calificada en el Régimen Tributario Especial paga honorarios de asesoría legal al cónyuge del representante legal. La fundación demuestra que el pago corresponde a precios comerciales promedio del mercado para ese tipo de servicios y que la transacción fue debidamente registrada ante la DIAN. ¿Constituye esto una distribución indirecta de excedentes conforme al artículo 356-1 del ET?",
     "o": [
      "No, porque el artículo 356-1 exige precisamente que ese tipo de pagos a parientes hasta cuarto grado se realicen a precios comerciales para no configurar una distribución indirecta; al cumplirse esa condición y registrarse la transacción, no hay distribución indirecta",
      "Sí, porque cualquier pago a un pariente hasta cuarto grado de un representante legal se considera, sin excepción alguna, una distribución indirecta de excedentes que activa el procedimiento de exclusión del artículo 364-3",
      "No, porque el artículo 356-1 solo regula pagos a los propios fundadores y representantes legales, y no cobija a sus cónyuges ni parientes bajo ninguna circunstancia",
      "Sí, porque el registro ante la DIAN de este tipo de contratos únicamente sirve para efectos informativos y no tiene ninguna incidencia sobre la calificación jurídica del pago como distribución indirecta"
     ],
     "a": 0,
     "e": "El artículo 356-1 del ET somete a un régimen de control los pagos a fundadores, aportantes, representantes legales, administradores y sus parientes hasta cuarto grado (entre otros supuestos), pero permite que dichos pagos no se consideren distribución indirecta de excedentes cuando se realicen a precios comerciales promedio y se registren ante la DIAN. Al cumplirse ambas condiciones, la operación descrita no configura la conducta prohibida.",
     "b": "Art. 356-1 del ET."
    },
    {
     "t": 1,
     "c": "Remuneración de cargos directivos",
     "d": 3,
     "q": "Una entidad del Régimen Tributario Especial con ingresos brutos anuales de 5.000 UVT destina el 35% de su gasto total anual al pago de remuneraciones (nómina, contratación y comisiones) de las personas que ejercen cargos directivos y gerenciales. ¿Cumple esta entidad el límite legal previsto en el artículo 356-1 del ET?",
     "o": [
      "No, porque al tener ingresos brutos anuales superiores a 3.500 UVT, la remuneración a cargos directivos y gerenciales no puede exceder el 30% del gasto total anual de la entidad, límite que en este caso se supera",
      "Sí, porque el límite del 30% solo aplica a entidades con ingresos brutos inferiores a 3.500 UVT; al superar ese umbral, la entidad queda exenta de cualquier límite porcentual",
      "No, porque el límite aplicable en este caso es del 20%, no del 30%, dado que la entidad supera ampliamente el umbral de 3.500 UVT en ingresos brutos anuales",
      "Sí, porque el límite del 30% se calcula sobre los ingresos brutos anuales y no sobre el gasto total, por lo que el 35% del gasto total no resulta relevante para esta evaluación"
     ],
     "a": 0,
     "e": "El artículo 356-1 del ET establece que, para entidades del Régimen Tributario Especial con ingresos brutos anuales superiores a 3.500 UVT, la remuneración total (dinero o especie, por nómina, contratación o comisión) a las personas que ejercen cargos directivos y gerenciales no podrá exceder el 30% del gasto total anual de la entidad. Al destinar el 35%, la entidad excede ese límite legal.",
     "b": "Art. 356-1 del ET."
    },
    {
     "t": 1,
     "c": "Reinversión del beneficio neto",
     "d": 3,
     "q": "Una ESAL calificada en el Régimen Tributario Especial obtuvo un beneficio neto o excedente en el año gravable 2023. Su máximo órgano de dirección aprueba un plazo de reinversión de tres años, en lugar de reinvertirlo dentro del año siguiente a su obtención. ¿Es válida esa decisión sin necesidad de autorización adicional de la DIAN?",
     "o": [
      "Sí, porque el artículo 360 del ET permite extender el plazo de reinversión hasta cinco años, siempre que esté debidamente aprobado por el máximo órgano de dirección de la entidad, sin requerir autorización previa de la DIAN para plazos dentro de ese límite",
      "No, porque el plazo de reinversión del beneficio neto es siempre de un año improrrogable, y cualquier extensión, sin importar su duración, requiere autorización previa de la DIAN mediante resolución",
      "Sí, pero solo si el plazo no excede de dos años, ya que el artículo 360 fija ese límite máximo para extensiones aprobadas exclusivamente por el órgano de dirección de la entidad",
      "No, porque la extensión del plazo de reinversión solo puede aprobarla la Asamblea General y nunca otro órgano de dirección, así sea el máximo órgano estatutario de la entidad"
     ],
     "a": 0,
     "e": "El artículo 358 del ET fija como regla general la reinversión del beneficio neto dentro del año siguiente a su obtención, pero el artículo 360 permite extender ese plazo hasta un máximo de cinco años, siempre que esté aprobado por el máximo órgano de dirección de la entidad. Solo si el plazo requerido supera los cinco años se necesita autorización expresa de la DIAN mediante resolución. Como en el caso el plazo aprobado es de tres años (dentro del límite de cinco), no se requiere esa autorización adicional.",
     "b": "Art. 358 y 360 del ET."
    },
    {
     "t": 1,
     "c": "Egresos improcedentes",
     "d": 2,
     "q": "Al determinar el beneficio neto o excedente de una entidad del Régimen Tributario Especial, la DIAN identifica egresos improcedentes que fueron incluidos en la depuración. ¿Cuál es el tratamiento tributario aplicable a esos egresos improcedentes?",
     "o": [
      "Se detraen del beneficio neto o excedente determinado y quedan sometidos a una tarifa del veinte por ciento (20%)",
      "Se detraen del beneficio neto, pero no generan ningún impuesto adicional, limitándose su efecto a la simple depuración contable de la declaración",
      "Determinan automáticamente la exclusión inmediata del Régimen Tributario Especial, sin posibilidad de que la entidad continúe calificada en el régimen",
      "Se gravan a la tarifa general del régimen ordinario de renta (30% a partir de 2022), en lugar de la tarifa especial del 20% aplicable a este régimen"
     ],
     "a": 0,
     "e": "Conforme al Decreto 1625 de 2016, cuando existan egresos improcedentes en la determinación del beneficio neto o excedente, estos se detraen del cálculo y quedan sometidos a una tarifa especial del 20%, distinta del tratamiento general del beneficio neto exento cuando se reinvierte correctamente.",
     "b": "Art. 1.2.1.5.1.24, parágrafo 4, del Decreto 1625 de 2016."
    }
   ]
  },
  {
   "id": "renta-naturales",
   "numero": "T15",
   "fecha": "Tema",
   "titulo": "Renta — Personas Naturales",
   "docente": "Material propio",
   "resumen": "Residencia fiscal, sistema cedular, rentas exentas y renta por comparación patrimonial de personas naturales.",
   "preguntas": [
    {
     "t": 1,
     "c": "Residencia fiscal",
     "d": 3,
     "q": "Un ciudadano extranjero ingresó a Colombia el 15 de enero de 2020 y salió definitivamente el 10 de septiembre del mismo año, permaneciendo de forma continua 232 días dentro del país durante ese periodo de 365 días. La empresa que lo contrató sostiene que no es residente fiscal en Colombia porque no completó un año calendario completo en el país. ¿Es correcta esa posición?",
     "o": [
      "No, porque basta con permanecer, continua o discontinuamente, más de 183 días calendario dentro de un periodo cualquiera de 365 días calendario para adquirir la calidad de residente fiscal, sin que se exija completar un año calendario",
      "Sí, porque la residencia fiscal en Colombia solo se adquiere cuando la permanencia cubre un año calendario completo, del 1 de enero al 31 de diciembre, sin excepciones",
      "No, porque la residencia fiscal para extranjeros se adquiere con la sola inscripción en el RUT, independientemente del número de días de permanencia efectiva en el país",
      "Sí, porque el conteo de 183 días solo aplica a nacionales colombianos; los extranjeros requieren un mínimo de 365 días continuos de permanencia para ser considerados residentes"
     ],
     "a": 0,
     "e": "El artículo 10 del ET establece que una persona natural, sin importar su nacionalidad, es residente fiscal en Colombia cuando permanece, de forma continua o discontinua, más de 183 días calendario dentro de un periodo cualquiera de 365 días calendario consecutivos. En el ejemplo, los 232 días de permanencia continua superan ese umbral, por lo que la persona sí adquiere la condición de residente fiscal para el año gravable 2020, sin que se requiera completar un año calendario completo.",
     "b": "Art. 10 del ET."
    },
    {
     "t": 1,
     "c": "Residencia fiscal de nacionales",
     "d": 3,
     "q": "Un ciudadano colombiano cumple con uno de los criterios adicionales de residencia fiscal para nacionales previstos en el artículo 10 del ET (distintos al conteo de 183 días), pero acredita que más del 50% de sus ingresos anuales tienen su fuente en el país donde reside habitualmente en el exterior. ¿Se le considera residente fiscal colombiano?",
     "o": [
      "No, porque el parágrafo 2 del artículo 10 del ET excluye de la calidad de residente fiscal a los nacionales que, aunque cumplan alguno de esos criterios adicionales, acrediten que más del 50% de sus ingresos o activos tienen origen en el país donde residen",
      "Sí, siempre, porque el cumplimiento de cualquiera de los criterios adicionales del numeral 3 del artículo 10 genera residencia fiscal de forma automática e irrestricta, sin excepciones posibles",
      "No, porque los criterios adicionales del numeral 3 del artículo 10 solo aplican a extranjeros, nunca a nacionales colombianos, quienes se rigen exclusivamente por el conteo de 183 días",
      "Sí, porque la excepción del 50% de ingresos o activos solo opera cuando el nacional además demuestra residencia fiscal formal en un país con convenio de doble tributación vigente con Colombia"
     ],
     "a": 0,
     "e": "El numeral 3 del artículo 10 del ET establece criterios adicionales de residencia fiscal aplicables a nacionales colombianos (como tener cónyuge o hijos residentes en el país, o que la mayoría de sus bienes estén administrados en Colombia). Sin embargo, el parágrafo 2 de ese mismo artículo excluye de esa condición a quienes acrediten que más del 50% de sus ingresos anuales o de sus activos tienen origen en el país donde residen habitualmente, precisamente el supuesto descrito en el caso.",
     "b": "Art. 10, numeral 3 y parágrafo 2, del ET."
    },
    {
     "t": 1,
     "c": "Sistema cedular",
     "d": 2,
     "q": "Un profesional independiente que presta servicios de consultoría jurídica, sin vinculación laboral, factura honorarios y pretende deducir de su cédula general los gastos de arriendo de su oficina y los materiales de trabajo, además de aplicar la renta exenta del 25% prevista para rentas de trabajo. ¿Es correcto ese tratamiento?",
     "o": [
      "No es correcto en su totalidad: los ingresos por honorarios y servicios personales dentro de las rentas de trabajo no admiten la imputación de costos y gastos, aunque sí tienen derecho a la renta exenta del 25%",
      "Sí es correcto en su totalidad: los honorarios permiten tanto la deducción plena de costos y gastos asociados como la renta exenta del 25%, sin ninguna restricción adicional",
      "No es correcto en ningún aspecto: los honorarios no dan derecho ni a deducir costos y gastos ni a aplicar la renta exenta del 25%, beneficio reservado exclusivamente a los salarios",
      "Sí es correcto, pero solo respecto de los costos y gastos; la renta exenta del 25% no aplica a quienes perciben ingresos por honorarios sino únicamente a quienes tienen relación laboral"
     ],
     "a": 0,
     "e": "Dentro de la cédula general, las rentas de trabajo (que incluyen honorarios y servicios personales) no permiten imputar costos y gastos asociados a su generación, pero sí conservan el derecho a la renta exenta del 25% prevista para esta categoría de ingresos. El profesional puede aplicar la exención del 25%, pero no puede deducir el arriendo de oficina ni los materiales como costos o gastos dentro de esta cédula.",
     "b": "Régimen de la cédula general — rentas de trabajo, ET."
    },
    {
     "t": 1,
     "c": "Rentas exentas — pensiones",
     "d": 2,
     "q": "Un pensionado colombiano, beneficiario de una pensión de jubilación de fuente nacional reconocida bajo la Ley 100 de 1993, recibe en un año gravable el equivalente a 14.000 UVT por este concepto y pretende declarar la totalidad como renta exenta en la cédula de pensiones. ¿Es procedente ese tratamiento?",
     "o": [
      "No, porque el numeral 5 del artículo 206 del ET limita la renta exenta de pensiones de fuente nacional bajo la Ley 100 de 1993 a un máximo de 12.000 UVT anuales; el exceso sobre ese monto sí forma parte de la base gravable",
      "Sí, porque las pensiones de jubilación de fuente nacional reconocidas bajo la Ley 100 de 1993 están exentas en su totalidad, sin límite alguno en UVT, a diferencia de las pensiones de fuente extranjera",
      "No, porque las pensiones de jubilación nunca son objeto de renta exenta bajo ningún límite; deben declararse en su totalidad como ingreso gravado en la cédula de pensiones",
      "Sí, porque el límite de 12.000 UVT solo aplica a pensiones de invalidez o de sobrevivientes, mientras que las pensiones de jubilación no tienen ningún tope para la exención"
     ],
     "a": 0,
     "e": "El numeral 5 del artículo 206 del ET establece que las rentas exentas por pensiones de jubilación, invalidez, vejez, sobrevivientes y riesgos laborales, de fuente nacional y reconocidas conforme a la Ley 100 de 1993, no pueden superar 12.000 UVT anuales. El monto que exceda ese límite pierde el carácter de exento y debe incluirse en la base gravable de la cédula de pensiones.",
     "b": "Art. 206, numeral 5 y parágrafo 3, del ET."
    },
    {
     "t": 1,
     "c": "Renta por comparación patrimonial",
     "d": 3,
     "q": "Un contribuyente declara para el año gravable 2023 una renta gravable, rentas exentas y ganancia ocasional neta cuya suma es sensiblemente inferior al incremento real que tuvo su patrimonio líquido frente al año 2022, sin que logre justificar el origen de esa diferencia (por ejemplo, mediante herencias, donaciones o rentas ya declaradas en años anteriores). ¿Qué figura tributaria resulta aplicable a este caso?",
     "o": [
      "La renta por comparación patrimonial del artículo 236 del ET, que grava el crecimiento patrimonial no justificado cuando la renta gravable, las exentas y la ganancia ocasional neta declaradas resultan inferiores al incremento real del patrimonio líquido",
      "La sanción por inexactitud del artículo 647 del ET, que se aplicaría automáticamente sin necesidad de que la DIAN adelante un proceso de determinación previo sobre el origen del incremento patrimonial",
      "El impuesto al patrimonio, que grava directamente cualquier incremento patrimonial de un año a otro, sin relación con la renta gravable ni con las rentas exentas declaradas por el contribuyente",
      "La sanción por no declarar del artículo 643 del ET, aplicable a quien no incluya la totalidad de los activos poseídos al cierre del periodo gravable en su declaración de renta"
     ],
     "a": 0,
     "e": "El artículo 236 del ET regula la renta por comparación patrimonial: cuando la suma de la renta gravable, las rentas exentas y la ganancia ocasional neta declaradas resulta inferior a la diferencia entre el patrimonio líquido del año gravable y el del año inmediatamente anterior, y el contribuyente no logra justificar esa diferencia, se configura esta renta especial, que busca gravar el incremento patrimonial no justificado (posible indicio de ingresos no declarados).",
     "b": "Art. 236 y 237 del ET."
    }
   ]
  },
  {
   "id": "ganancia-ocasional",
   "numero": "T16",
   "fecha": "Tema",
   "titulo": "Impuesto de Ganancia Ocasional",
   "docente": "Material propio",
   "resumen": "Hechos generadores, tarifas y exenciones del impuesto complementario de ganancia ocasional.",
   "preguntas": [
    {
     "t": 1,
     "c": "Hecho generador — venta de activos",
     "d": 2,
     "q": "Una sociedad vende un lote de terreno que hacía parte de su activo fijo y que había sido adquirido 18 meses antes de la venta. El contador declara la utilidad obtenida como ganancia ocasional, aplicando la tarifa del 10%. ¿Es correcto ese tratamiento?",
     "o": [
      "No, porque el artículo 300 del ET exige que el activo fijo haya hecho parte del patrimonio del contribuyente por un término de dos años o más para que su enajenación genere ganancia ocasional; al tratarse de 18 meses, la utilidad debe tributar como renta ordinaria",
      "Sí, porque cualquier venta de un activo fijo, sin importar el tiempo de posesión, siempre genera ganancia ocasional gravada a la tarifa del 10% para personas jurídicas",
      "No, porque los activos fijos de las sociedades nunca generan ganancia ocasional en su enajenación, tratamiento reservado exclusivamente a las personas naturales",
      "Sí, porque el término de dos años del artículo 300 del ET solo aplica a inmuebles rurales, y en el caso de un lote urbano no se exige ningún término mínimo de posesión"
     ],
     "a": 0,
     "e": "El artículo 300 del ET considera ganancia ocasional la utilidad en la enajenación de activos fijos poseídos por el contribuyente durante dos años o más. Si el bien se poseyó por un tiempo inferior (en este caso 18 meses), la utilidad obtenida en su venta debe tratarse como renta líquida ordinaria y no como ganancia ocasional, con las implicaciones tarifarias correspondientes.",
     "b": "Art. 300 del ET."
    },
    {
     "t": 1,
     "c": "Tarifas de ganancia ocasional",
     "d": 2,
     "q": "Una persona natural residente recibió en el mismo año gravable una herencia y, por separado, un premio de lotería. Al preparar la declaración, el contador aplica la tarifa del 10% a ambos ingresos por tratarse, en su criterio, de la misma categoría de ganancia ocasional. ¿Es correcto ese tratamiento?",
     "o": [
      "No, porque aunque ambos son ganancias ocasionales, las provenientes de loterías, rifas, apuestas y similares están gravadas a la tarifa del 20%, mientras que las herencias tributan a la tarifa general del 10%",
      "Sí, porque el Estatuto Tributario unificó en el 10% la tarifa de toda ganancia ocasional a partir de la Ley 2010 de 2019, sin distinción según su origen",
      "No, porque ambos ingresos deben gravarse a la tarifa del 20%, reservándose el 10% únicamente para la enajenación de activos fijos poseídos por dos años o más",
      "Sí, pero solo si la persona es residente fiscal; de no serlo, ambos ingresos estarían gravados a una tarifa del 33% como renta ordinaria y no como ganancia ocasional"
     ],
     "a": 0,
     "e": "El Estatuto Tributario fija dos tarifas distintas para el impuesto de ganancia ocasional: 10% como tarifa general (aplicable, entre otros, a herencias, legados, donaciones y a la venta de activos fijos poseídos por dos años o más), y 20% específicamente para las ganancias ocasionales provenientes de loterías, rifas, apuestas y similares (art. 317 del ET). Aplicar el 10% al premio de lotería es incorrecto.",
     "b": "Art. 314 y 317 del ET."
    },
    {
     "t": 1,
     "c": "Exención por herencia — legitimarios vs. terceros",
     "d": 3,
     "q": "Dos personas reciben bienes por causa de muerte de un mismo causante: su hija (legitimaria) recibe una asignación por herencia, y un amigo cercano del causante (sin ningún vínculo de parentesco) recibe un legado. Ambos pretenden aplicar la exención del 20% del valor recibido, sin límite de UVT, por tratarse de bienes recibidos por causa de muerte. ¿Es correcto ese planteamiento para ambos?",
     "o": [
      "No es correcto para ninguno en esos términos: la hija, como legitimaria, no accede a la exención del 20% (reservada a personas diferentes de los legitimarios y el cónyuge supérstite), y el amigo sí puede aplicarla, pero únicamente hasta el tope de 2.290 UVT, no de forma ilimitada",
      "Sí es correcto para ambos: la exención del 20% aplica por igual a legitimarios y a terceros no legitimarios, y en ambos casos sin ningún límite máximo en UVT",
      "No es correcto para ninguno: la exención del 20% del artículo 307 del ET fue derogada y sustituida por la exención fija de 7.700 UVT, aplicable únicamente a inmuebles de vivienda urbana",
      "Sí es correcto solo para la hija, en su calidad de legitimaria, mientras que el amigo, al no tener parentesco con el causante, no tiene derecho a ninguna exención sobre el legado recibido"
     ],
     "a": 0,
     "e": "El numeral 4 del artículo 307 del ET reserva la exención del 20% de los bienes y derechos recibidos por concepto de herencias, legados o donaciones para personas diferentes de los legitimarios y del cónyuge supérstite, y la sujeta a un tope máximo de 2.290 UVT. Los legitimarios (como los hijos) y el cónyuge supérstite no acceden a esta exención específica del 20%, aunque sí pueden beneficiarse de otras exenciones del mismo artículo, como las 3.490 UVT por concepto de porción conyugal, herencia o legado.",
     "b": "Art. 307, numerales 3 y 4, del ET."
    },
    {
     "t": 1,
     "c": "Utilidad en venta de vivienda",
     "d": 3,
     "q": "Una persona natural vende su apartamento de habitación, que poseía desde hacía más de cinco años, con una utilidad de $600.000.000 sobre el costo fiscal. Del total recibido por la venta, deposita únicamente el 60% en una cuenta de ahorro para el fomento de la construcción (AFC) o similar, destinando el resto a otros fines. ¿Puede aplicar sin restricciones la exención de las primeras 7.500 UVT prevista en el artículo 311-1 del ET?",
     "o": [
      "No sin restricciones: el artículo 311-1 condiciona la exención a que la totalidad de los dineros recibidos por la venta sean depositados en las cuentas destinadas para tal fin; al depositar solo el 60%, la exención no opera en los términos plenos previstos en la norma",
      "Sí, porque la exención de 7.500 UVT opera de manera automática por el solo hecho de tratarse de la vivienda de habitación del contribuyente, sin condicionarse al destino que se dé a los recursos recibidos por la venta",
      "No, porque la exención del artículo 311-1 fue derogada y sustituida integralmente por la exención general de 7.700 UVT aplicable a cualquier inmueble, sin relación con su destinación como vivienda de habitación",
      "Sí, porque el requisito de depósito de los dineros en cuentas AFC solo aplica cuando el vendedor no es residente fiscal en Colombia, situación distinta a la planteada en el caso"
     ],
     "a": 0,
     "e": "El artículo 311-1 del ET exime las primeras 7.500 UVT de la utilidad en la venta de la casa o apartamento de habitación, pero condiciona expresamente ese beneficio a que la totalidad de los dineros recibidos por la venta sean depositados en las cuentas de ahorro destinadas para el fomento de la construcción o similares. Si solo se deposita una parte de los recursos, no se cumple la condición legal para acceder a la exención en los términos plenos previstos en la norma.",
     "b": "Art. 311-1 del ET."
    },
    {
     "t": 1,
     "c": "Premios en competencias",
     "d": 3,
     "q": "Un deportista profesional recibe un premio en dinero como recompensa por su clasificación en una competencia atlética. La entidad pagadora, asumiendo que se trata de un premio similar a los de lotería o rifa, le practica retención en la fuente a título de ganancia ocasional con la tarifa del 20%. ¿Es correcto ese tratamiento?",
     "o": [
      "No, porque los premios recibidos como recompensa por la clasificación en una competencia se gravan como renta ordinaria a la tarifa del contribuyente que lo percibe, con posibilidad de afectarlo con costos y deducciones, y no como ganancia ocasional del 20%",
      "Sí, porque cualquier premio en dinero, sin importar su origen (competencias deportivas, loterías, rifas o similares), se grava uniformemente como ganancia ocasional a la tarifa del 20%",
      "No, porque este tipo de premios está completamente exento del impuesto sobre la renta y del impuesto de ganancia ocasional, al tratarse de un reconocimiento al mérito deportivo",
      "Sí, pero la tarifa correcta sería del 10% y no del 20%, por tratarse de una ganancia ocasional distinta a las provenientes específicamente de loterías, rifas y apuestas"
     ],
     "a": 0,
     "e": "El régimen de ganancias ocasionales excluye expresamente de esa categoría a los premios recibidos como recompensa por la clasificación en competencias (deportivas, científicas o similares): estos se gravan como renta ordinaria, a la tarifa del contribuyente que los percibe, y permiten la afectación con costos y deducciones, a diferencia de los premios de loterías, rifas y apuestas, que sí constituyen ganancia ocasional gravada al 20%.",
     "b": "Régimen de premios y recompensas por competencias, ET."
    }
   ]
  },
  {
   "id": "iva",
   "numero": "T17",
   "fecha": "Tema",
   "titulo": "Impuesto sobre las Ventas (IVA)",
   "docente": "Material propio",
   "resumen": "Elementos del IVA: sujetos, base gravable, bienes gravados, exentos y excluidos, e impuestos descontables.",
   "preguntas": [
    {
     "t": 1,
     "c": "Excluidos vs. exentos",
     "d": 3,
     "q": "Dos comerciantes distribuyen el mismo tipo de bienes de consumo humano y vestuario: uno los introduce y comercializa en el departamento de Guainía, y el otro en el departamento de Amazonas, cumpliendo este último con el requisito adicional de ser una sociedad domiciliada allí con actividad económica exclusiva en ese departamento. Un asesor les indica que, al tratarse de bienes de la misma naturaleza, ambos reciben idéntico tratamiento en IVA y ninguno puede solicitar impuestos descontables. ¿Es correcta esa afirmación?",
     "o": [
      "No, porque el tratamiento es distinto: los bienes en Guainía están excluidos del IVA (art. 424, numeral 13, del ET) y no generan derecho a descontables, mientras que los mismos bienes en Amazonas están exentos (art. 477 del ET), lo que sí permite tomar los impuestos descontables asociados",
      "Sí, porque tanto la exclusión como la exención producen exactamente los mismos efectos jurídicos y económicos: en ambos casos no se genera IVA y tampoco se pueden tomar impuestos descontables asociados a esas operaciones",
      "No, porque en realidad es al contrario: los bienes en Amazonas están excluidos sin derecho a descontables, mientras que los de Guainía están exentos y sí otorgan derecho a solicitar los impuestos descontables asociados",
      "Sí, porque el Estatuto Tributario unificó el tratamiento de bienes de consumo humano y vestuario en todos los departamentos fronterizos a partir de la Ley 1819 de 2016, sin distinción alguna entre ellos"
     ],
     "a": 0,
     "e": "El artículo 424, numeral 13, del ET excluye del IVA ciertos bienes (consumo humano y animal, vestuario, aseo, medicamentos, materiales de construcción) cuando se introducen y comercializan en Guainía, Guaviare, Vaupés y Vichada. Los bienes excluidos no causan IVA y no generan derecho a impuestos descontables. En cambio, el artículo 477 del ET declara exentos esos mismos bienes cuando se comercializan en el departamento de Amazonas, cumpliendo requisitos adicionales; los bienes exentos sí causan IVA (a tarifa 0%) y sí otorgan derecho a los impuestos descontables asociados. Ambos regímenes, aunque parecidos en apariencia, tienen efectos jurídicos distintos.",
     "b": "Art. 424, numeral 13, y art. 477 del ET."
    },
    {
     "t": 1,
     "c": "Base gravable — operaciones accesorias",
     "d": 3,
     "q": "Una tienda vende un electrodoméstico gravado con IVA y, en la misma factura, cobra el servicio de transporte del bien hasta el domicilio del comprador, prestado por ella misma como parte integral de la operación. Un asesor sostiene que, como el transporte de por sí está excluido del IVA, debe facturarse por separado sin generar el impuesto. ¿Es correcto ese criterio?",
     "o": [
      "No, porque cuando el servicio accesorio (como el transporte) es prestado por el mismo responsable que vende el bien principal y hace parte integral de la operación, el IVA se calcula sobre el valor total de la operación, incluyendo el transporte, así este último sea excluido cuando se presta de forma independiente",
      "Sí, porque cualquier servicio excluido del IVA conserva esa condición sin importar quién lo preste o si hace parte integral de una operación gravada, de modo que siempre debe facturarse por separado y sin el impuesto",
      "No, porque el transporte de mercancías nunca está excluido del IVA, independientemente de quién lo preste, por lo que en cualquier caso debe facturarse con el impuesto de forma separada del bien principal",
      "Sí, porque el artículo 447 del ET exige expresamente separar en la factura el valor del bien principal del valor de cualquier servicio accesorio, así sea prestado por el mismo vendedor, para efectos de la base gravable del IVA"
     ],
     "a": 0,
     "e": "El artículo 447 del ET establece que la base gravable incluye los gastos de financiación, accesorios, y demás erogaciones complementarias a la operación principal, aun cuando esos elementos, considerados de forma independiente, no se encuentren sometidos a imposición o se hallen excluidos o exentos. Cuando el servicio de transporte lo presta el mismo vendedor como parte integral de la venta, el IVA se calcula sobre el valor total (bien más transporte). La exclusión del transporte solo opera cuando este es prestado de forma independiente por un tercero distinto al vendedor del bien.",
     "b": "Art. 447 del ET."
    },
    {
     "t": 1,
     "c": "Impuestos descontables — requisitos",
     "d": 3,
     "q": "Un responsable de IVA pretende tomar como descontable el impuesto pagado en la compra de insumos, soportado únicamente en un tiquete generado por una máquina registradora con sistema POS, sin contar con factura electrónica. Adicionalmente, esos insumos se destinaron exclusivamente a una actividad excluida del IVA que desarrolla la empresa. ¿Puede tomar el descontable en este caso?",
     "o": [
      "No, por dos razones concurrentes: los documentos equivalentes POS no otorgan derecho a impuestos descontables conforme al artículo 616-1 del ET, y adicionalmente el artículo 488 exige que el costo o gasto esté asociado a operaciones gravadas con IVA, condición que tampoco se cumple al destinarse a una actividad excluida",
      "Sí, porque cualquier documento que acredite el pago del IVA, incluidos los tiquetes POS, es suficiente soporte para tomar el impuesto como descontable, sin importar la actividad a la que se destinen los insumos adquiridos",
      "No, únicamente por la falta de factura electrónica; si el mismo insumo se hubiera destinado a una actividad gravada, el tiquete POS habría sido soporte suficiente para tomar el descontable",
      "Sí, porque el artículo 488 del ET no exige ninguna relación entre el costo o gasto y el tipo de actividad (gravada, exenta o excluida) del responsable, bastando con que el gasto sea deducible en el impuesto de renta"
     ],
     "a": 0,
     "e": "Existen dos limitaciones independientes que impiden el descontable en este caso: primero, el parágrafo 4 del artículo 616-1 del ET establece que los documentos equivalentes generados por máquinas POS no otorgan derecho a impuestos descontables (se requiere factura electrónica); segundo, el artículo 488 del ET exige que el IVA descontable corresponda a costos o gastos computables en renta y, además, que estén destinados a operaciones gravadas con IVA — requisito que tampoco se cumple al destinarse los insumos a una actividad excluida.",
     "b": "Art. 616-1, parágrafo 4, y art. 488 del ET."
    },
    {
     "t": 1,
     "c": "Régimen simple y periodicidad del IVA",
     "d": 2,
     "q": "Una empresa inscrita en el régimen simple de tributación, responsable del IVA, considera que por pertenecer a ese régimen queda exonerada de realizar cualquier pago de IVA hasta el momento de presentar su declaración anual consolidada. ¿Es correcto ese entendimiento?",
     "o": [
      "No, porque aunque el régimen simple presenta una declaración anual consolidada del IVA, la norma exige transferir de forma anticipada el impuesto (IVA generado menos IVA descontable) de manera bimestral durante el año",
      "Sí, porque el régimen simple de tributación exime completamente del pago anticipado del IVA, difiriendo la totalidad del pago hasta la presentación de la declaración anual consolidada",
      "No, porque los responsables del régimen simple deben presentar y pagar el IVA de forma bimestral igual que cualquier otro responsable, sin que exista una declaración anual consolidada para este régimen",
      "Sí, pero únicamente durante el primer año de inscripción en el régimen simple; a partir del segundo año, el pago pasa a ser trimestral en lugar de bimestral"
     ],
     "a": 0,
     "e": "El artículo 915 del ET dispone que los responsables del régimen simple de tributación que también sean responsables de IVA deben presentar una declaración anual consolidada del impuesto, pero eso no los exime de transferir de forma anticipada, de manera bimestral, el valor del IVA generado menos el IVA descontable durante el año.",
     "b": "Art. 915 del ET."
    },
    {
     "t": 1,
     "c": "Sujeto jurídico vs. sujeto económico",
     "d": 2,
     "q": "En una cadena de comercialización de un bien gravado con IVA, el consumidor final paga el impuesto incluido en el precio, pero es el comerciante minorista quien debe facturarlo, recaudarlo, declararlo y pagarlo a la DIAN. Un estudiante afirma que el comerciante minorista es el 'responsable económico' del impuesto, mientras que el consumidor final sería el 'responsable jurídico'. ¿Es correcta esa clasificación?",
     "o": [
      "No, es al contrario: el comerciante minorista es el responsable jurídico (obligado a facturar, recaudar, declarar y pagar el impuesto ante la DIAN), mientras que el consumidor final es el responsable económico, quien soporta la carga real del tributo",
      "Sí, la clasificación es correcta tal como se plantea: quien recibe el dinero del impuesto (el comerciante) es el responsable económico, y quien finalmente lo asume en su patrimonio es el responsable jurídico",
      "No, porque en materia de IVA no existe esa distinción entre responsable jurídico y económico; solo existe la figura única del 'sujeto pasivo', que reúne ambas calidades en una sola persona",
      "Sí, aunque parcialmente: el comerciante minorista sería responsable económico solo en la etapa final de la cadena, mientras que en las etapas anteriores (productor, distribuidor) sería responsable jurídico"
     ],
     "a": 0,
     "e": "En el IVA se distinguen dos calidades distintas: el responsable jurídico, que es quien tiene la obligación formal y sustancial de facturar, recaudar, declarar y pagar el impuesto ante la DIAN (en este caso, el comerciante minorista), y el responsable económico (o sujeto pasivo económico), que es quien realmente soporta la carga del impuesto al pagarlo dentro del precio del bien o servicio (el consumidor final). La afirmación del estudiante invierte ambos conceptos.",
     "b": "Elementos del sujeto pasivo del IVA, régimen del ET."
    }
   ]
  },
  {
   "id": "impuesto-consumo",
   "numero": "T18",
   "fecha": "Tema",
   "titulo": "Impuesto Nacional al Consumo",
   "docente": "Material propio",
   "resumen": "Impuesto nacional al consumo, bolsas plásticas y cannabis: causación, responsables y régimen simplificado.",
   "preguntas": [
    {
     "t": 1,
     "c": "Régimen simplificado — restaurantes y bares",
     "d": 3,
     "q": "Una persona natural que opera un restaurante obtuvo en el año anterior ingresos brutos de 3.200 UVT provenientes de esa actividad, y solo tiene un establecimiento de comercio. Durante el año en curso, celebra una única operación gravada por cuantía individual de 3.600 UVT. ¿Debe inscribirse previamente como responsable del impuesto nacional al consumo de restaurantes y bares por esa operación?",
     "o": [
      "Sí, porque aunque cumple los requisitos generales para no ser responsable (ingresos del año anterior inferiores a 3.500 UVT y un solo establecimiento), la norma exige inscripción previa cuando se celebra una operación individual igual o superior a 3.500 UVT",
      "No, porque el cumplimiento de los dos requisitos generales (ingresos inferiores a 3.500 UVT y un solo establecimiento) exonera de cualquier obligación de inscripción, sin importar la cuantía de operaciones individuales que se celebren durante el año",
      "Sí, porque al operar un restaurante, la persona siempre es responsable del impuesto nacional al consumo, independientemente del monto de sus ingresos o del número de establecimientos que posea",
      "No, porque el umbral de 3.500 UVT solo aplica a los ingresos brutos anuales totales y no a operaciones individuales, las cuales nunca generan la obligación de inscripción, sin importar su cuantía"
     ],
     "a": 0,
     "e": "El artículo 512-13 del ET exonera de la calidad de responsables del impuesto al consumo de restaurantes y bares a quienes, cumpliendo los dos requisitos generales (ingresos brutos del año anterior inferiores a 3.500 UVT y máximo un establecimiento), no obstante deben inscribirse previamente como responsables cuando celebren una operación gravada por cuantía individual igual o superior a 3.500 UVT. En el caso planteado, la operación de 3.600 UVT supera ese umbral, activando la obligación de inscripción previa.",
     "b": "Art. 512-13 del ET."
    },
    {
     "t": 1,
     "c": "Retiro del régimen de no responsables",
     "d": 2,
     "q": "Un comerciante de restaurante y bar, ya inscrito como responsable del impuesto nacional al consumo, solicita su retiro del régimen alegando que en el último año fiscal cumplió las condiciones para ser no responsable (ingresos bajo el umbral y un solo establecimiento). ¿Es suficiente ese único año para autorizar el retiro?",
     "o": [
      "No, porque la norma exige que el responsable demuestre el cumplimiento de las condiciones de no responsable durante los tres años fiscales anteriores a la solicitud de retiro, no solo el último año",
      "Sí, porque basta con acreditar el cumplimiento de las condiciones durante el año fiscal inmediatamente anterior a la solicitud para que proceda automáticamente el retiro del régimen",
      "No, porque una vez inscrito como responsable del impuesto al consumo, la ley no contempla ninguna posibilidad de retiro posterior del régimen, sin importar las condiciones que se acrediten",
      "Sí, siempre que además presente una certificación de un contador público que avale el cumplimiento de las condiciones durante ese único año fiscal"
     ],
     "a": 0,
     "e": "La normativa dispone que los responsables del impuesto al consumo de restaurantes y bares que ya se registraron solo pueden solicitar su retiro del régimen cuando demuestren que, durante los tres años fiscales anteriores a la solicitud, cumplieron por cada año las condiciones señaladas para tener la calidad de no responsables. Un solo año de cumplimiento no es suficiente para acceder al retiro.",
     "b": "Régimen del impuesto nacional al consumo de restaurantes y bares, art. 512-13 del ET."
    },
    {
     "t": 1,
     "c": "Impuesto a las bolsas plásticas",
     "d": 2,
     "q": "Un supermercado entrega, sin cobro adicional, bolsas plásticas biodegradables certificadas por el Ministerio de Ambiente y Desarrollo Sostenible para que los clientes carguen sus productos. El administrador considera que de todas formas debe liquidar el impuesto a las bolsas plásticas y discriminarlo en la factura, por tratarse de bolsas plásticas entregadas para cargar productos adquiridos. ¿Es correcto ese criterio?",
     "o": [
      "No, porque las bolsas plásticas biodegradables certificadas como tales por el Ministerio de Ambiente y Desarrollo Sostenible están expresamente excluidas de la causación del impuesto a las bolsas plásticas",
      "Sí, porque el impuesto a las bolsas plásticas grava toda bolsa entregada con la finalidad de cargar productos adquiridos, sin ninguna excepción relacionada con su composición o certificación ambiental",
      "No, porque ninguna bolsa plástica entregada por un supermercado causa este impuesto; solo lo causan las bolsas entregadas por establecimientos de comida rápida y restaurantes",
      "Sí, pero solo debe liquidarse a la tarifa reducida del 0%, ya que las bolsas biodegradables siempre tributan a esa tarifa mínima en lugar de estar completamente excluidas"
     ],
     "a": 0,
     "e": "La normativa del impuesto nacional al consumo de bolsas plásticas excluye expresamente de su causación a las bolsas biodegradables certificadas como tales por el Ministerio de Ambiente y Desarrollo Sostenible, junto con otros supuestos como las bolsas reutilizables con características técnicas para múltiples usos y las utilizadas como material de empaque de productos preempacados. No corresponde liquidar el impuesto ni discriminarlo en la factura para este tipo de bolsas.",
     "b": "Bolsas plásticas que no causan el impuesto, régimen del impuesto nacional al consumo."
    },
    {
     "t": 1,
     "c": "Impuesto al consumo de cannabis medicinal",
     "d": 3,
     "q": "Un transformador de cannabis retira, de su propio inventario de productos transformados, una cantidad para formar parte de los activos fijos de su empresa (no para la venta a un tercero). El contador sostiene que, al no existir una venta a un tercero, no se causa el impuesto nacional al consumo de cannabis. ¿Es correcto ese criterio?",
     "o": [
      "No, porque la normativa asimila a 'ventas' —para efectos de este impuesto— los retiros o disminuciones de inventarios de productos transformados a partir de cannabis realizados por el propio responsable para su uso o para formar parte de sus activos fijos, generando la causación del impuesto",
      "Sí, porque el impuesto al consumo de cannabis solo se causa cuando existe una transferencia a título oneroso o gratuito a un tercero distinto del transformador, nunca en los retiros internos de inventario",
      "No, porque los retiros de inventario para activos fijos están expresamente exentos del impuesto al consumo de cannabis, a diferencia de los retiros para consumo propio del transformador, que sí lo causan",
      "Sí, porque el hecho generador de este impuesto exige, sin excepción, la emisión de una factura de venta a un adquirente identificado, documento que no existe en un retiro interno de inventario"
     ],
     "a": 0,
     "e": "La normativa del impuesto nacional al consumo de cannabis considera 'ventas' —hecho generador del impuesto— no solo las transferencias a título oneroso o gratuito a terceros, sino también los retiros o disminuciones de inventarios de productos transformados a partir de cannabis que haga el propio responsable para su uso personal o para formar parte de sus activos fijos. Por tanto, el retiro descrito sí causa el impuesto, contrario a lo sostenido por el contador.",
     "b": "Hecho generador del impuesto nacional al consumo de cannabis, régimen del ET."
    },
    {
     "t": 1,
     "c": "Obligaciones de responsables del INC",
     "d": 2,
     "q": "Un prestador del servicio de telefonía móvil, responsable del régimen común del impuesto nacional al consumo, sostiene que sus obligaciones formales (inscripción en el RUT, facturación, recaudo, declaración y pago) son distintas y más simples que las de un responsable del impuesto sobre las ventas (IVA). ¿Es correcta esa afirmación?",
     "o": [
      "No, porque los responsables del régimen común del impuesto nacional al consumo deben cumplir las mismas obligaciones formales señaladas para los responsables del IVA: inscribirse en el RUT, facturar el impuesto, recaudarlo, presentar la declaración bimestral correspondiente y pagar el impuesto recaudado",
      "Sí, porque los responsables del impuesto al consumo están exonerados de presentar cualquier tipo de declaración periódica, a diferencia de los responsables del IVA, que sí deben hacerlo",
      "No, porque en realidad las obligaciones de los responsables del impuesto al consumo son más exigentes: además de las obligaciones del IVA, deben llevar una contabilidad separada exclusiva para este tributo",
      "Sí, porque los responsables del impuesto al consumo solo deben inscribirse en el RUT, sin obligación de facturar ni de presentar declaraciones periódicas del tributo"
     ],
     "a": 0,
     "e": "La normativa establece que los responsables del régimen común del impuesto nacional al consumo deben cumplir las mismas obligaciones formales previstas para los responsables del impuesto sobre las ventas: inscribirse en el RUT, facturar el impuesto, recaudarlo, presentar la declaración bimestral correspondiente y pagar el impuesto recaudado. No existe, por tanto, un régimen formal más simple ni más complejo entre ambos tributos en este aspecto.",
     "b": "Obligaciones de los responsables del impuesto nacional al consumo, régimen del ET."
    }
   ]
  }
 ],
 "materiales": [
  {
   "modulo": "Accin de Tutela",
   "url": "https://drive.google.com/drive/folders/1ZHcVOd7mJf8fUOk6QTBTEJ94dD9MK8K2",
   "archivos": [
    "Incidente de desacato en la accin de tutela -precongreso Yopal Laura Huertas.pptx",
    "Transcripcio n Laura Huertas Montero.txt",
    "bibliograf a complementaria capacitacin tutela.docx",
    "m11-8.pdf"
   ]
  },
  {
   "modulo": "Acto administrativo y control judicial",
   "url": "https://drive.google.com/drive/folders/1BlK_P29fqs7R5TnyFSTwhH8aSmUg3nVq",
   "archivos": [
    "Control judicial del acto administrativo - ICDP.pptx",
    "Copia de He ctor Santaella. Debates y dilemas en materia de control judicial del acto administrativo.pdf",
    "He ctor Santaella. Debates y dilemas en materia de control judicial del acto administrativo.pdf",
    "Transcripcio n Samuel Ureta Rojas.txt"
   ]
  },
  {
   "modulo": "Aptitudes y competencias",
   "url": "https://drive.google.com/drive/folders/1k-9PpgRLwYP6S51JZPx6rBLnIwByVU7m",
   "archivos": [
    "Copia de Competencias y aptitudes - Paul Cifuentes.pptx.pdf",
    "Copia de Links de consulta.rtf",
    "Copia de Operadores lo gicos.docx",
    "Copia de Transcripcio n Paul Cifuentes.txt"
   ]
  },
  {
   "modulo": "Argumentacin jurdica",
   "url": "https://drive.google.com/drive/folders/1BUXXCIb22ZcKYgfTTFmFkTIrX1x15alh",
   "archivos": [
    "452 modulo argumentacion pj.pdf",
    "Curso-de-Argumentacion-Juridica-Manuel-Atienza.pdf",
    "La-guerra-de-las-falacias-by-Manuel-Atienza-z-lib.org .pdf",
    "Transcripcio n Daniel Ricardo Sarmiento 1.txt",
    "Transcripcio n Daniel Ricardo Sarmiento 2.txt",
    "sesgos-cognitivos-toma-de-decisiones-kohan.pdf"
   ]
  },
  {
   "modulo": "Aspectos Procesales",
   "url": "https://drive.google.com/drive/folders/1MywutlDlaYHXHxDUWZntYOc_CNa6mEU3",
   "archivos": [
    "ICDP PROCESAL ADMINISTRATIVO 2026.pptx",
    "Transcripcio n Ricardo Ricardo Ezqueda.txt"
   ]
  },
  {
   "modulo": "Aspectos procesales de la responsabilidad del Estado",
   "url": "https://drive.google.com/drive/folders/148SdptEHc8xeRcIifIVTPoXGH6UbZA6V",
   "archivos": [
    "Transcripcio n Marti n Bermu dez Mun oz.txt"
   ]
  },
  {
   "modulo": "Bienes y tierras",
   "url": "https://drive.google.com/drive/folders/1ePuAMjUreCqyB9T7-vpjgxR6g5gZxIxo",
   "archivos": [
    "20260820 DT Bienes y Tierras ICDP Convocatoria 28.pdf",
    "Transcripcio n Jaime Gusto Correa.txt"
   ]
  },
  {
   "modulo": "Competencias aptitudes y o habilidades 1",
   "url": "https://drive.google.com/drive/folders/170M6xvNHYEv0Ag4NKgxuIJhgHY1ffP3m",
   "archivos": [
    "ESTRUCTURAS DE PRUEBAS EN CONCURSOS 22 AGOSTO 2026.pdf",
    "FORMATO MODELO DE PRUEBAS DE JUICIO SITUACIONAL PJS.docx",
    "FORMATOS Y MODELOS DE PRUEBAS ESCRITAS-25 JULIO 2026.pdf",
    "LAS PRUEBAS EN LA SELECCIO N DE PERSONAL 18 DE JULIO 2026.pdf",
    "Transcripcio n Giovanna Rosso 3.txt",
    "Transcripcio n Giovanna Rosso London o 2.txt",
    "Trasncripcio n Giovanna Rosso London o.txt"
   ]
  },
  {
   "modulo": "Competencias aptitudes y o habilidades 2",
   "url": "https://drive.google.com/drive/folders/170M6xvNHYEv0Ag4NKgxuIJhgHY1ffP3m",
   "archivos": [
    "ESTRUCTURAS DE PRUEBAS EN CONCURSOS 22 AGOSTO 2026.pdf",
    "FORMATO MODELO DE PRUEBAS DE JUICIO SITUACIONAL PJS.docx",
    "FORMATOS Y MODELOS DE PRUEBAS ESCRITAS-25 JULIO 2026.pdf",
    "LAS PRUEBAS EN LA SELECCIO N DE PERSONAL 18 DE JULIO 2026.pdf",
    "Transcripcio n Giovanna Rosso 3.txt",
    "Transcripcio n Giovanna Rosso London o 2.txt",
    "Trasncripcio n Giovanna Rosso London o.txt"
   ]
  },
  {
   "modulo": "Competencias aptitudes y o habilidades 3",
   "url": "https://drive.google.com/drive/folders/170M6xvNHYEv0Ag4NKgxuIJhgHY1ffP3m",
   "archivos": [
    "ESTRUCTURAS DE PRUEBAS EN CONCURSOS 22 AGOSTO 2026.pdf",
    "FORMATO MODELO DE PRUEBAS DE JUICIO SITUACIONAL PJS.docx",
    "FORMATOS Y MODELOS DE PRUEBAS ESCRITAS-25 JULIO 2026.pdf",
    "LAS PRUEBAS EN LA SELECCIO N DE PERSONAL 18 DE JULIO 2026.pdf",
    "Transcripcio n Giovanna Rosso 3.txt",
    "Transcripcio n Giovanna Rosso London o 2.txt",
    "Trasncripcio n Giovanna Rosso London o.txt"
   ]
  },
  {
   "modulo": "Consejo Seccionales de la Judicatura",
   "url": "https://drive.google.com/drive/folders/1afXZ1GvenTE_MbXep8j6WdpKmPecZ4bu",
   "archivos": [
    "Microcurr culo CONSEJO SECCIONAL DE LA JUDICATURA ajustado jul 14 2026.pdf",
    "Transcripcio n De bora Guerra.rtf"
   ]
  },
  {
   "modulo": "Contrato estatal y controversias contractuales Derecho electoral",
   "url": "https://drive.google.com/drive/folders/1Joc1tRCMuu6gyekPWL63QEUuTOIcpDA1",
   "archivos": [
    "FalloAMerlanoNulidad.pdf",
    "Lecturas.rtf",
    "SE-DECLARA-NULA-ELECCIO N-DE-LA-GOBERNADORA-DE-LA-GUAJIRA.pdf",
    "Transcripcio n Mari a Andrea Calero Tafur.txt"
   ]
  },
  {
   "modulo": "Datos Diplomado Convocatoria No. 28",
   "url": "https://drive.google.com/drive/folders/1aq8wjjF4oSXOza1mQR9L95MunwxMRsdj",
   "archivos": []
  },
  {
   "modulo": "Derecho Constitucional",
   "url": "https://drive.google.com/drive/folders/1rAdIpoHys2eQVxL0k2XJrUL8qWjpuE97",
   "archivos": [
    "Copia de Derecho Constitucional 2026 - Edgar Andre s Quiroga Natale.pdf",
    "Copia de Portada Libro Derecho y Justicia Constitucional 2024 - Edgar Andre s Quiroga Natale 1 .pdf",
    "Copia de Transcripcio n Edgar Andre s Quiroga Natale.txt",
    "Derecho Constitucional 2026 - Edgar Andre s Quiroga Natale.pdf",
    "Portada Libro Derecho y Justicia Constitucional 2024 - Edgar Andre s Quiroga Natale 1 .pdf",
    "Transcripcio n Edgar Andre s Quiroga Natale.txt"
   ]
  },
  {
   "modulo": "Derecho Laboral Colectivo",
   "url": "https://drive.google.com/drive/folders/1BgACG8-LfZiaSusjpcbOtpwbnzvWIYyp",
   "archivos": [
    "Derecho Laboral Colectivo Unificado 4 horas.pptx",
    "Derecho laboral colectivo.pptx",
    "Guion estudio Derecho Laboral Colectivo Convocatoria 28.docx",
    "Transcripcioo n Mo nica Hidalgo.txt"
   ]
  },
  {
   "modulo": "Derecho Laboral Individual",
   "url": "https://drive.google.com/drive/folders/1W2PbN6ktR-_WxFP4fvE-hi7Y4427t6Lm",
   "archivos": [
    "Pla Rodriguez Americo - Los principios del derecho del trabajo.pdf",
    "Presentacio n CONVOCATORIA 28. Derecho Laboral Individual.pptx",
    "Presentacion Derecho Laboral Individual.pptx",
    "SL1439-2021.pdf",
    "SL2857-2023.pdf",
    "SL5288-2021.doc",
    "Transcripcio n Edgar David Pe rez.txt"
   ]
  },
  {
   "modulo": "Derecho Penal General",
   "url": "https://drive.google.com/drive/folders/1KgcceOE5u6aea1sgf-ulc4Q-cdxF_1K_",
   "archivos": [
    "CASO 1.pdf",
    "Transcripcio n Jose Mari a Pela ez.rtf"
   ]
  },
  {
   "modulo": "Derecho de infancia y adolescencia",
   "url": "https://drive.google.com/drive/folders/1ePg0oQ21wK2fqrc7cDE8CJ3TgCAglqX7",
   "archivos": [
    "Bibliografi a sobre derechos de la nin ez.rtf",
    "Proceso Administrativo de Restablecimiento de Derechos.pdf",
    "Transcripcio n Natalia Margarita Rueda Vallejo.rtf"
   ]
  },
  {
   "modulo": "Enfoques Diferenciales Derechos humanos",
   "url": "https://drive.google.com/drive/folders/1uxBvMkKfKt6i9VrwS1AfLI9oOUfwnB0_",
   "archivos": [
    "CASO BEDOYA LIMA Y OTRA VS. COLOMBIA.pdf",
    "Clase de Derechos Humanos.pptx",
    "Derechos humanos qu son tipos ejemplos y cmo se protegen.pdf",
    "Educacin jur dica en el posconflicto Derechos humanos y mecanismos de proteccin.pdf",
    "Enfoques Diferenciales y Justicia.pptx",
    "Herramientas para la aplicacin del enfoque de g nero en la administracin de justicia.pdf",
    "Interseccionalidad.pdf",
    "Ley Jineth bedoya.pdf",
    "Mdulo de Autoformacin Perspectivas de G nero en el Acceso a la Justicia.pdf",
    "Mdulo de Formacin Autodirigida T cnicas de Interrogatorio con Enfoque Diferencial de Sujetos .pdf",
    "STC9593-2026.pdf",
    "Transcripccio n Clase Liliana Rojas.txt"
   ]
  },
  {
   "modulo": "Extincin de dominio",
   "url": "https://drive.google.com/drive/folders/1KTuU2Ns1e6MYcoOy_RJfz9KYCg4xaAnV",
   "archivos": [
    "Capacitacion Extincion Dominio Convocatoria 28 2.pptx",
    "Transcripcio n Juan Camilo Pa ez.rtf"
   ]
  },
  {
   "modulo": "Filosofa del Derecho",
   "url": "https://drive.google.com/drive/folders/1NZlU5wnzHkjbAiv1jnMpSjucivu0htmA",
   "archivos": [
    "FILOSOF A DEL DERECHO - ICDP.pptx",
    "Rbrica ICDP.pdf",
    "TALLER 2 ICDP.pdf",
    "Transcripcio n Edgar Fabian Garzo n Buenaventura.txt"
   ]
  },
  {
   "modulo": "Justicia y Paz",
   "url": "https://drive.google.com/drive/folders/15FpYJA4iATAH8JSbWS6xyZIwclJrVeR0",
   "archivos": [
    "JUSTICIA Y PAZ. ICDP 2026.pdf",
    "Transcripcio n Carlos Andre s Pe rez .rtf"
   ]
  },
  {
   "modulo": "Ley 2213 de 2022",
   "url": "https://drive.google.com/drive/folders/1Tfmj11oULcxpu3umBNCBtEiICePne21D",
   "archivos": [
    "Ley 2213 de 2022.pdf",
    "Transcripcio n Nattan Nisimblat Murillo.txt"
   ]
  },
  {
   "modulo": "Ley Estatutaria de Administracin de Justicia",
   "url": "https://drive.google.com/drive/folders/1BUXXCIb22ZcKYgfTTFmFkTIrX1x15alh",
   "archivos": [
    "452 modulo argumentacion pj.pdf",
    "Curso-de-Argumentacion-Juridica-Manuel-Atienza.pdf",
    "La-guerra-de-las-falacias-by-Manuel-Atienza-z-lib.org .pdf",
    "Transcripcio n Daniel Ricardo Sarmiento 1.txt",
    "Transcripcio n Daniel Ricardo Sarmiento 2.txt",
    "sesgos-cognitivos-toma-de-decisiones-kohan.pdf"
   ]
  },
  {
   "modulo": "Obligaciones y contratos",
   "url": "https://drive.google.com/drive/folders/1TjSze-u405NyCc5TxDYf3XJ92m5pTpTO",
   "archivos": [
    "Transcripcio n Daniel Ricardo Sarmiento.rtf",
    "libros-derecho-abierto-uniandes 1 .pdf"
   ]
  },
  {
   "modulo": "Proceso Laboral",
   "url": "https://drive.google.com/drive/folders/19A7Y4Q6vwVb3YJIwacvxCU_R1OeSLjOU",
   "archivos": [
    "Links de Consulta.rtf",
    "Samir Alberto Bonett Ortiz - Proceso laboral 24.07.26.docx",
    "Transcripcio n Samir Bonett Ortiz.txt"
   ]
  },
  {
   "modulo": "Proceso Penal",
   "url": "https://drive.google.com/drive/folders/1hbL-W6thGYgx2HtqLUemcT-q06Ff-Vo4",
   "archivos": [
    "CARTILLA ESTRUCTURA DEL PROCESO.pdf",
    "CARTILLA PPIO OPORTUNIDAD.pdf",
    "MODULO PROCESAL PENAL.pptx",
    "SISTEMA PROBATORIO - JJU.pdf",
    "Transcripcio n Luisa Caldas Botero.txt"
   ]
  },
  {
   "modulo": "Responsabilidad Civil",
   "url": "https://drive.google.com/drive/folders/1ecCHg6GGwJcl9VsIgTkAqhkQuLud63tI",
   "archivos": [
    "Libro DanS os.pdf",
    "PPT Clase ICDP Agosto 2026.pptx",
    "SC072-2025 2013-00141-01 .pdf",
    "SC780-2020-2010-00053-01.pdf",
    "Transcripcio n Maximiliano Aramburo Calle.txt"
   ]
  },
  {
   "modulo": "Responsabilidad del Estado",
   "url": "https://drive.google.com/drive/folders/1BWrZwwBEOisXjkmHQGwshF-3d9Lbgn7M",
   "archivos": [
    "15001-23-31-000-2000-03838-01 19146 .pdf",
    "2019-00169-01 Tutela Unificacio n Privacio n de la Libertad copia.pdf",
    "25000-23-26-000-2001-00852-01 28675 .pdf",
    "25000-23-26-000-2003-00208-01 28769 IJ completa.pdf",
    "41793 Responsabilidad me dica Fallecimiento Recien nacido.docx",
    "42990 - Sentencia Supervalores NV F.docx",
    "43647 error judicial Trebilcock - Sancio n abogado.docx",
    "44.572 UNIFICACION PERJUICIOS MATERIALES DAN O EMERGENTE LUCRO CENSANTE.docx",
    "44670 Afectacio n ambiental cerros orientales NV SA F 63 .docx",
    "44670 Afectacio n ambiental cerros orientales NV SA F.docx",
    "45518 Amputacio n pierna .docx",
    "51012 RPG Salvamento F.docx",
    "54064 masacre Currulao F.docx",
    "59969- Secuestro.pdf",
    "68702 AG.- Nin os fundacio n.pdf",
    "ART. DANZ OS DERECHOS FUNDAMENTALES copia.pdf",
    "C-037-96 copia.rtf",
    "C-038-06 copia.rtf",
    "C-644-11 copy.rtf",
    "CE SENTENCIA UNIFICACIO N PENSIO N INVALIDEZ NO EXCLUYE LUCRO CESANTE.pdf",
    "CE-29-julio-de-1947-El-Siglo-c.-Nacion 1 .pdf",
    "Caducidad lesa humanidad.pdf",
    "Dan o emergente.pdf",
    "Dialnet-OrigenYEvolucionDeLasTeoriasSobreLaResponsabilidad-4696257 copia.pdf",
    "F15001233100020000383801S3ADJUNTASENTENCIA20150422112254.doc",
    "Incendio causa determinante.docx",
    "Inexistencia de titulos.pdf",
    "LA PROBABILIDAD PREPONDERANTE COMO CRITERIO DE CAUSALIDAD EN LA RESPONSABILIDAD CIVIL EXTRACONTRACTUAL.pdf",
    "Las causales eximentes de responsabilidad.pdf",
    "Las formas de reparacin en la responsabilidad del Estado- hacia su unificacin sustancial en todas las acciones contra el Estado.pdf",
    "Pe rdida de oportunidad en me dica.pdf",
    "Privacin injusta masiva.docx",
    "Pro logo responsabilidad del Estado GSL.pdf",
    "Referentes dan o inmaterial Consejo de Estado.pdf",
    "Responsabilidad actos del constituyenteSentencia 470 de 1995 Consejo de Estado.pdf",
    "Responsabilidad extracontractual.pdf.pdf",
    "Responsabilidad por actos del constituyente.docx",
    "S-21-07-1922-GJ-29-218.pdf",
    "causa determinante.pdf",
    "club el nogal.doc",
    "iii UNIFICACION ENRIQUECIMIENTO SIN CAUSA.doc",
    "para metros de la prueba del dan o antijuri dico y los perjuicios en la jurisprudencia del consejo de estado.pdf",
    "responsabilidad extracontracual del estado derivada de la actividad contractual casos excepcionales.pdf",
    "riesgo excecpcional.pdf"
   ]
  },
  {
   "modulo": "Seguridad Social",
   "url": "https://drive.google.com/drive/folders/1Nz3_kkCIDSOaZnCTwtn2O6Pud4X4Flwb",
   "archivos": [
    "Presentacion Principios Ley 100.pptx",
    "Transcripcio n Carlos Adolfo Prieto Monroy.txt",
    "ppt clase pensiones.pptx"
   ]
  },
  {
   "modulo": "Sociedades",
   "url": "https://drive.google.com/drive/folders/1l_ysGzUOTxxUozMb8SnT27L0sG0g_SxQ",
   "archivos": [
    "Ley 222 de 1995.pdf",
    "Transcripcio n Omar Ca rdenas Caicedo.txt"
   ]
  },
  {
   "modulo": "Teora General de la Prueba",
   "url": "https://drive.google.com/drive/folders/19DVAcY8i1TvOALDSIii_ISUwOLfYLjG7",
   "archivos": [
    "ICDP DIPLOMADO CONVOCATORIA RJ - TEORI A GENERAL DE LA PRUEBA.pdf",
    "Transcripcio n Ulises Canosa Sua rez.txt"
   ]
  },
  {
   "modulo": "Teora General del Proceso",
   "url": "https://drive.google.com/drive/folders/1mzIrvzVR8kE3uDEbkF3CpFKTI9n1j7jH",
   "archivos": [
    "260715 Teori a general del proceso - Aspectos clave Curso jueces y magistrados .pdf",
    "Links de consulta.txt",
    "Transcripcio n Mo nica Alejandra Leo n Gil.txt"
   ]
  }
 ],
 "driveUrl": "https://drive.google.com/drive/folders/1aq8wjjF4oSXOza1mQR9L95MunwxMRsdj"
};
