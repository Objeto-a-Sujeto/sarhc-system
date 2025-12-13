## 📄 **ETHICAL-GUIDE.md**

<div style="background: #f6f8fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  <button onclick="navigator.clipboard.writeText(document.querySelector('#ethical-content').textContent); this.textContent='✅ Copiado!'; setTimeout(() => this.textContent='📋 Copiar ETHICAL-GUIDE.md', 2000)" style="background: #0969da; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">📋 Copiar ETHICAL-GUIDE.md</button>
</div>

<div id="ethical-content" style="display: none;">
```markdown
# 🛡️ Guía Ética de S.A.R.H.C.

## 📋 Tabla de Contenidos

- [Introducción](#introducción)
- [Principios Éticos](#principios-éticos)
- [Marco Legal](#marco-legal)
- [Proceso de Evaluación](#proceso-de-evaluación)
- [Criterios de Restricción](#criterios-de-restricción)
- [Gestión de Reclamos](#gestión-de-reclamos)
- [Consultas Comunitarias](#consultas-comunitarias)
- [Repatriación](#repatriación)
- [Casos de Estudio](#casos-de-estudio)
- [Mejores Prácticas](#mejores-prácticas)

## 🌟 Introducción

S.A.R.H.C. (Sistema de Adaptación de Restos Humanos en Colección) está diseñado con un enfoque centrado en la ética y el respeto a la dignidad humana. Esta guía establece los principios y procedimientos que rigen el manejo ético de restos humanos en colecciones científicas.

### Propósito

- **Proteger la dignidad** de las personas cuyos restos están en colecciones
- **Respetar los derechos** de las comunidades de origen
- **Facilitar la investigación** científica responsable
- **Promover la transparencia** en el manejo de colecciones

### Alcance

Esta guía aplica a:
- Instituciones de investigación
- Museos y colecciones
- Proyectos arqueológicos
- Colecciones médicas históricas
- Cualquier entidad que maneje restos humanos

## 🏛️ Principios Éticos

### 1. Dignidad Humana

Los restos humanos representan personas que vivieron, amaron y fueron amadas. Deben ser tratados con el máximo respeto y dignidad.

#### Directrices
- **Lenguaje respetuoso**: Evitar términos deshumanizantes
- **Manejo cuidadoso**: Procedimientos que preserven la integridad
- **Almacenamiento adecuado**: Condiciones que respeten la dignidad

### 2. Consentimiento Informado

El consentimiento (o falta thereof) debe ser documentado y respetado.

#### Tipos de Consentimiento
- **Consentimiento explícito**: Documentado por el individuo
- **Consentimiento comunitario**: Aprobación de la comunidad
- **Consentimiento presunto**: Basado en evidencia histórica
- **Sin consentimiento**: Requiere consideración especial

### 3. Beneficio Compartido

Los beneficios de la investigación deben compartirse con las comunidades de origen.

#### Formas de Beneficio
- **Acceso a resultados**: Informes y publicaciones accesibles
- **Capacitación**: Programas educativos para comunidades
- **Repatriación**: Devolución cuando sea apropiado
- **Co-autoría**: Reconocimiento a contribuciones comunitarias

### 4. Transparencia

Todos los procesos deben ser transparentes y documentados.

#### Elementos de Transparencia
- **Documentación completa**: Registros detallados de procedimientos
- **Acceso público**: Información disponible para stakeholders
- **Toma de decisiones**: Procesos claros y justificables
- **Rendición de cuentas**: Mecanismos de supervisión

## ⚖️ Marco Legal

### Legislación Internacional

#### Declaración de las Naciones Unidas sobre los Derechos de los Pueblos Indígenas (2007)
- **Artículo 12**: Derecho a mantener, controlar y proteger su patrimonio cultural
- **Artículo 31**: Derecho a mantener, controlar y proteger su patrimonio cultural y conocimiento tradicional

#### Convenio de Nagoya (2010)
- **Acceso y participación justa y equitativa** en los beneficios derivados de la utilización de recursos genéticos

#### Recomendación de la UNESCO sobre el Estatuto de los Restos Humanos (2005)
- **Protección de los restos humanos** contra tráfico y comercialización
- **Respeto a la dignidad humana** y creencias culturales

### Legislación Nacional

#### Guatemala
- **Ley de Patrimonio Cultural**: Protección de restos arqueológicos
- **Código de Salud**: Regulaciones sobre manejo de tejidos humanos

#### México
- **Ley Federal sobre Monumentos y Zonas Arqueológicos**
- **Ley General de Salud**

#### Estados Unidos
- **Native American Graves Protection and Repatriation Act (NAGPRA)**
- **National Museum of the American Indian Act**

## 🔍 Proceso de Evaluación

### Evaluación Inicial

Todo espécimen debe pasar por una evaluación ética inicial:

#### Paso 1: Clasificación de Contexto
```typescript
interface ContextEvaluation {
  origin: 'archaeological' | 'donation' | 'medical' | 'indigenous' | 'colonial' | 'unknown';
  riskLevel: 'low' | 'medium' | 'high';
  documentation: 'complete' | 'partial' | 'none';
  consent: 'explicit' | 'community' | 'presumed' | 'none';
}
```

#### Paso 2: Identificación de Stakeholders
- **Comunidades de origen**: Descendientes directos
- **Instituciones**: Museos, universidades
- **Investigadores**: Científicos, académicos
- **Gobiernos**: Autoridades locales y nacionales

#### Paso 3: Evaluación de Impacto
```typescript
interface ImpactAssessment {
  culturalImpact: 'low' | 'medium' | 'high';
  scientificValue: 'low' | 'medium' | 'high' | 'critical';
  communityConcern: 'none' | 'low' | 'medium' | 'high';
  legalCompliance: 'compliant' | 'partial' | 'non-compliant';
}
```

### Evaluación Continua

La evaluación ética no es un evento único, sino un proceso continuo:

#### Revisión Anual
- **Estado de conservación**: Cambios en las condiciones
- **Nueva información**: Descubrimientos científicos o históricos
- **Cambios legales**: Nueva legislación o regulaciones
- **Interés comunitario**: Nuevos reclamos o solicitudes

#### Revisión por Evento
- **Publicación**: Antes de publicar investigación
- **Exhibición**: Antes de exhibir públicamente
- **Préstamo**: Antes de prestar a otras instituciones
- **Repatriación**: Antes de considerar devolución

## 🚫 Criterios de Restricción

### Niveles de Riesgo

#### Bajo Riesgo
**Contextos**: Arqueológico documentado, Donación voluntaria

**Criterios**:
- ✅ Documentación completa y verificable
- ✅ Consentimiento explícito o comunitario
- ✅ No hay reclamos activos
- ✅ No hay significado cultural sensible

**Restricciones**: Generalmente público con supervisión

#### Riesgo Medio
**Contextos**: Colecciones médicas históricas

**Criterios**:
- ⚠️ Documentación parcial
- ⚠️ Consentimiento presunto
- ⚠️ Posible significado cultural
- ⚠️ Reclamos potenciales

**Restricciones**: Acceso limitado, requerimiento de justificación

#### Alto Riesgo
**Contextos**: Indígena, Colonial, Desconocido

**Criterios**:
- 🚫 Documentación inexistente o dudosa
- 🚫 Sin consentimiento verificable
- 🚫 Significado cultural significativo
- 🚫 Reclamos activos o probables

**Restricciones**: Acceso muy restringido, solo con autorización especial

### Algoritmo de Decisión

```typescript
function evaluateRestrictions(specimen: Specimen): RestrictionLevel {
  let riskLevel = 'low';
  let restrictions = [];

  // Evaluar contexto de origen
  if (['INDIGENOUS', 'COLONIAL', 'UNKNOWN'].includes(specimen.origin)) {
    riskLevel = 'high';
    restrictions.push('cultural_sensitivity');
  }

  // Evaluar reclamos activos
  if (specimen.claimActive) {
    riskLevel = 'high';
    restrictions.push('active_claim');
  }

  // Evaluar significado cultural
  if (specimen.culturalSignificance && specimen.culturalSignificance.length > 50) {
    riskLevel = 'medium';
    restrictions.push('cultural_significance');
  }

  // Evaluar documentación
  if (!specimen.provenance || specimen.provenance.length < 10) {
    riskLevel = 'high';
    restrictions.push('poor_documentation');
  }

  return {
    level: riskLevel,
    restrictions: restrictions,
    requiresApproval: riskLevel === 'high'
  };
}
```

## 📢 Gestión de Reclamos

### Tipos de Reclamos

#### Reclamos Comunitarios
- **Repatriación**: Devolución a comunidad de origen
- **Acceso limitado**: Restricción de acceso público
- **Procedimientos específicos**: Requerimientos culturales
- **Consulta continua**: Participación en decisiones

#### Reclamos Individuales
- **Descendientes directos**: Familiares biológicos
- **Herencias culturales**: Miembros de la misma cultura
- **Intereses académicos**: Investigadores con conexiones culturales

#### Reclamos Institucionales
- **Gobiernos**: Autoridades nacionales o locales
- **Museos**: Otras instituciones con derechos
- **Universidades**: Instituciones educativas

### Proceso de Manejo de Reclamos

#### Paso 1: Recepción
- **Registro formal**: Documentación del reclamo
- **Verificación inicial**: Comprobación básica de legitimidad
- **Notificación**: Informar a todos los stakeholders
- **Plazos**: Establecer timeline para respuesta

#### Paso 2: Investigación
- **Recopilación de evidencia**: Documentos, testimonios, investigación histórica
- **Consulta experta**: Antropólogos, historiadores, expertos legales
- **Diálogo comunitario**: Reuniones con representantes
- **Análisis de precedentes**: Casos similares resueltos

#### Paso 3: Decisión
- **Evaluación ética**: Aplicación de principios guía
- **Consideración legal**: Cumplimiento de legislación
- **Impacto práctico**: Consecuencias de la decisión
- **Documentación**: Justificación completa

#### Paso 4: Implementación
- **Comunicación**: Informar la decisión a todas las partes
- **Ejecución**: Implementar la decisión de manera respetuosa
- **Seguimiento**: Monitorear cumplimiento
- **Evaluación**: Revisar el proceso

### Marco Temporal

#### Reclamos Urgentes
- **Respuesta inicial**: 48 horas
- **Investigación completa**: 30 días
- **Decisión final**: 60 días

#### Reclamos Estándar
- **Respuesta inicial**: 1 semana
- **Investigación completa**: 90 días
- **Decisión final**: 120 días

## 🤝 Consultas Comunitarias

### Principios de Consulta

#### Consentimiento Libre, Previo e Informado (CLPI)
- **Libre**: Sin coerción ni manipulación
- **Previo**: Antes de tomar decisiones
- **Informado**: Con toda la información relevante

#### Participación Significativa
- **No solo tokenismo**: Participación real y efectiva
- **Poder de decisión**: Capacidad de influir en resultados
- **Respeto mutuo**: Reconocimiento de diferentes conocimientos

### Proceso de Consulta

#### Fase 1: Preparación
- **Identificación de comunidades**: Determinar grupos relevantes
- **Comprensión cultural**: Investigar tradiciones y protocolos
- **Preparación de materiales**: Información accesible y culturalmente apropiada
- **Logística**: Ubicación, tiempo, facilitadores

#### Fase 2: Ejecución
- **Reuniones iniciales**: Presentación y discusión
- **Grupos focales**: Discusiones más profundas
- **Entrevistas individuales**: Perspectivas personales
- **Visitas al sitio**: Conexión con el lugar

#### Fase 3: Seguimiento
- **Retroalimentación**: Compartir resultados de la consulta
- **Implementación**: Actuar sobre las recomendaciones
- **Monitoreo**: Evaluar el impacto
- **Relación continua**: Mantener la comunicación

### Mejores Prácticas

#### Comunicación
- **Lenguaje claro**: Evitar jerga técnica
- **Traducción**: Usar idiomas locales
- **Materiales visuales**: Apoyar con imágenes y diagramas
- **Tiempo adecuado**: Permitir procesamiento y discusión

#### Respeto Cultural
- **Protocolos locales**: Seguir costumbres culturales
- **Autoridades tradicionales**: Incluir líderes comunitarios
- **Espacios sagrados**: Respetar lugares de importancia
- **Conocimiento tradicional**: Valorar sabiduría local

## 🏠 Repatriación

### Fundamentos de la Repatriación

#### Derecho a la Autodeterminación
- **Control cultural**: Las comunidades tienen derecho a controlar su patrimonio
- **Identidad cultural**: Los restos son parte de la identidad cultural
- **Continuidad histórica**: Conexión con ancestros y tradiciones

#### Justicia Histórica
- **Colonialismo**: Corregir injusticias históricas
- **Restitución**: Devolver lo que fue tomado injustamente
- **Reconciliación**: Construir relaciones basadas en respeto

### Criterios de Repatriación

#### Evidencia de Conexión
- **Geográfica**: Procedencia del área comunitaria
- **Cultural**: Prácticas culturales coincidentes
- **Histórica**: Documentación de conexión
- **Lingüística**: Evidencia lingüística

#### Viabilidad Práctica
- **Capacidad comunitaria**: Recursos para manejar los restos
- **Infraestructura**: Instalaciones apropiadas
- **Conocimiento**: Expertos culturales disponibles
- **Apoyo continuo**: Asistencia técnica y financiera

### Proceso de Repatriación

#### Solicitud
- **Formal**: Por escrito con documentación de apoyo
- **Comunitaria**: Apoyo de la comunidad
- **Evidencia**: Pruebas de conexión cultural
- **Plan**: Propuesta de manejo post-repatriación

#### Evaluación
- **Verificación**: Comprobar la evidencia
- **Consulta**: Hablar con todas las partes interesadas
- **Impacto**: Evaluar consecuencias
- **Legalidad**: Cumplir con la legislación

#### Implementación
- **Preparación**: Logística y coordinación
- **Ceremonia**: Respetar protocolos culturales
- **Transferencia**: Manejo respetuoso
- **Seguimiento**: Apoyo continuo

### Casos de Éxito

#### Kennewick Man (Estados Unidos)
- **Conflicto**: Restos de 9,000 años
- **Resolución**: Repatriación a tribus nativas
- **Lección**: Importancia de la consulta comunitaria

#### Restos Indígenas Australianos
- **Proceso**: Repatriación masiva
- **Colaboración**: Trabajo con comunidades aborígenes
- **Resultado**: Devolución de miles de restos

## 📚 Casos de Estudio

### Caso 1: Restos Arqueológicos Documentados

#### Situación
- **Contexto**: Excavación arqueológica formal
- **Documentación**: Permisos, registros, informes
- **Comunidad**: No hay comunidad de origen identificable
- **Consentimiento**: Presunto del estado

#### Evaluación Ética
- **Riesgo**: Bajo
- **Restricciones**: Mínimas
- **Acceso**: Público con supervisión
- **Investigación**: Permitida con aprobación

#### Recomendaciones
- ✅ Mantener en colección con cuidado
- ✅ Permitir investigación científica
- ✅ Exhibición educativa apropiada
- ✅ Documentación completa accesible

### Caso 2: Restos Indígenas con Reclamo Activo

#### Situación
- **Contexto**: Colección médica histórica
- **Procedencia**: Indocumentada, probablemente colonial
- **Comunidad**: Comunidad indígena identificada
- **Reclamo**: Repatriación activa

#### Evaluación Ética
- **Riesgo**: Alto
- **Restricciones**: Máximas
- **Acceso**: Solo con autorización comunitaria
- **Investigación**: Limitada o prohibida

#### Recomendaciones
- 🔄 Iniciar proceso de repatriación
- 🤝 Consulta continua con comunidad
- 📚 Documentar el proceso completamente
- 🛡️ Proteger hasta resolución

### Caso 3: Donación con Significado Cultural

#### Situación
- **Contexto**: Donación voluntaria individual
- **Documentación**: Consentimiento explícito del donante
- **Comunidad**: Comunidad cultural identificada
- **Significado**: Importancia cultural significativa

#### Evaluación Ética
- **Riesgo**: Medio
- **Restricciones**: Moderadas
- **Acceso**: Limitado pero permitido
- **Investigación**: Con supervisión cultural

#### Recomendaciones
- 🤝 Consultar con comunidad cultural
- 📖 Desarrollar protocolos culturales
- 👥 Incluir expertos culturales
- 📚 Educar sobre significado cultural

## ✨ Mejores Prácticas

### Manejo Físico

#### Almacenamiento
- **Temperatura controlada**: Condiciones ambientales estables
- **Seguridad**: Protección contra daño o robo
- **Acceso limitado**: Solo personal autorizado
- **Inventario**: Registro completo y actualizado

#### Manejo
- **Capacitación**: Personal entrenado en manejo ético
- **Protocolos**: Procedimientos estandarizados
- **Equipamiento**: Herramientas apropiadas
- **Respeto**: Trato digno en todo momento

### Documentación

#### Registros
- **Completos**: Toda la información disponible
- **Accesibles**: Fácilmente recuperables
- **Actualizados**: Mantenidos al día
- **Seguros**: Protegidos contra pérdida

#### Metadatos
- **Contexto**: Información cultural e histórica
- **Procedencia**: Historia completa del espécimen
- **Investigación**: Resultados de estudios previos
- **Restricciones**: Estado actual de acceso

### Educación y Capacitación

#### Personal
- **Entrenamiento ético**: Sensibilización cultural
- **Conocimiento cultural**: Entender diferentes perspectivas
- **Habilidades de comunicación**: Diálogo respetuoso
- **Conciencia histórica**: Entender contextos coloniales

#### Comunidad
- **Programas educativos**: Informar sobre colecciones
- **Visitaciones guiadas**: Acceso controlado y educativo
- **Materiales educativos**: Recursos apropiados culturalmente
- **Diálogo continuo**: Mantener comunicación abierta

### Tecnología y Digitalización

#### Digitalización
- **3D scanning**: Crear modelos digitales
- **Fotografía**: Documentación visual completa
- **Bases de datos**: Información estructurada y accesible
- **Acceso remoto**: Reducir manejo físico

#### Compartición
- **Plataformas online**: Acceso controlado a datos
- **Colaboración**: Compartir con comunidades
- **Transparencia**: Información pública disponible
- **Control**: Mecanismos de supervisión

## 📋 Checklist Ético

### Antes de Adquirir
- [ ] ¿Hay documentación completa de procedencia?
- [ ] ¿Hay consentimiento verificable?
- [ ] ¿Hay comunidades de origen identificables?
- [ ] ¿Hay reclamos existentes o potenciales?
- [ ] ¿Cuál es el valor científico vs. cultural?
- [ ] ¿Hay alternativas menos sensibles?

### Durante el Manejo
- [ ] ¿El personal está entrenado éticamente?
- [ ] ¿Las condiciones de almacenamiento son apropiadas?
- [ ] ¿Hay registro completo de todo manejo?
- [ ] ¿Se respetan las restricciones de acceso?
- [ ] ¿Hay supervisión adecuada?

### Para Investigación
- [ ] ¿La investigación tiene valor significativo?
- [ ] ¿Hay alternativas menos invasivas?
- [ ] ¿Se ha consultado con comunidades?
- [ ] ¿Los resultados serán compartidos?
- [ ] ¿Hay revisión ética independiente?

### Para Exhibición
- [ ] ¿La exhibición es educativa y respetuosa?
- [ ] ¿Hay consentimiento para exhibición pública?
- [ ] ¿El contexto es apropiado?
- [ ] ¿Hay información cultural completa?
- [ ] ¿Hay mecanismos de retroalimentación?

## 🔄 Revisión y Actualización

Esta guía debe ser revisada y actualizada regularmente:

### Frecuencia
- **Anual**: Revisión general y actualización
- **Por evento**: Después de casos significativos
- **Cuando sea necesario**: Por cambios legales o sociales

### Proceso de Actualización
- **Consulta**: Expertos éticos, comunidades, instituciones
- **Revisión**: Casos recientes y mejores prácticas
- **Validación**: Revisión por pares y expertos
- **Implementación**: Comunicación de cambios

---

**Esta guía es un documento vivo que evoluciona con el aprendizaje y la experiencia. Su propósito es guiar hacia prácticas más éticas y respetuosas en el manejo de restos humanos.**

**¿Necesitas asesoramiento ético para un caso específico? Contáctanos en ethics@sarhc.system**
```
</div>

**📋 Instrucciones:**
1. Haz clic en el botón "📋 Copiar ETHICAL-GUIDE.md" 
2. El contenido se copiará automáticamente a tu portapapeles
3. Pega el contenido en tu archivo docs/ETHICAL-GUIDE.md en GitHub