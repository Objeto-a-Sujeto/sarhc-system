
# 📖 Guía de Usuario de S.A.R.H.C.

## 📋 Tabla de Contenidos

- [Introducción](#introducción)
- [Primeros Pasos](#primeros-pasos)
- [Interfaz Principal](#interfaz-principal)
- [Catálogo de Especímenes](#catálogo-de-especímenes)
- [Agregar Nuevo Espécimen](#agregar-nuevo-especimen)
- [Búsqueda y Filtros](#búsqueda-y-filtros)
- [Evaluación Ética](#evaluación-ética)
- [Exportación de Datos](#exportación-de-datos)
- [Análisis y Estadísticas](#análisis-y-estadísticas)
- [Configuración](#configuración)
- [Preguntas Frecuentes](#preguntas-frecuentes)

## 🌟 Introducción

**S.A.R.H.C.** (Sistema de Adaptación de Restos Humanos en Colección) es una herramienta ética para la catalogación de restos humanos en colecciones científicas, museológicas y de investigación.

### Principios Fundamentales

#### 🌉 Semantic Bridge
- Integración con ontología BCHR
- Compatibilidad con WebProtégé
- URIs estándar FMA para anatomía

#### 🔒 Air-Gapped
- Funcionamiento completo offline
- No depende de APIs externas
- Datos locales y autónomos

#### 🤝 Dignity by Design
- Inferencia ética automática
- Protección de comunidades
- Restricciones basadas en contexto

## 🚀 Primeros Pasos

### Acceso al Sistema

1. **Abrir el navegador** y navegar a la URL del sistema
2. **Interface principal** se carga automáticamente
3. **No requiere registro** - acceso inmediato

### Configuración Inicial

#### Modo Visual
- **Claro**: Ideal para entornos iluminados
- **Oscuro**: Mejor para trabajo prolongado
- **Sistema**: Sigue preferencia del sistema operativo

#### Idioma
- Actualmente disponible en español
- Próximamente más idiomas

## 🖥️ Interfaz Principal

### Estructura de la Pantalla

```
┌─────────────────────────────────────────────────────────────┐
│ [☰] S.A.R.H.C.  [🔍 Buscar...] [🔔] [🌙]                │ Header
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────┐                                           │
│ │ 📊 Catálogo │                                           │ Sidebar
│ │ ➕ Agregar   │                                           │
│ │ 📈 Análisis  │                                           │
│ │ ⚙️ Config   │                                           │
│ │ ❓ Ayuda     │                                           │
│ │             │                                           │
│ │ Estadísticas│                                           │
│ │ Total: 12   │                                           │
│ │ Restringidos│                                           │
│ └─────────────┘                                           │
│                                                         │ Main
│                                                         │ Content
│                                                         │
│                                                         │
└─────────────────────────────────────────────────────────────┘
```

### Elementos de Navegación

#### Header
- **☰ Menú**: Toggle del sidebar
- **S.A.R.H.C.**: Logo y nombre del sistema
- **🔍 Búsqueda**: Búsqueda rápida de especímenes
- **🔔 Notificaciones**: Alertas éticas y del sistema
- **🌙/☀️ Tema**: Cambio entre modo claro/oscuro

#### Sidebar
- **📊 Catálogo**: Vista principal de especímenes
- **➕ Agregar**: Formulario para nuevos especímenes
- **📈 Análisis**: Estadísticas y métricas
- **⚙️ Configuración**: Preferencias del sistema
- **❓ Ayuda**: Documentación y soporte

#### Panel de Estadísticas
- **Total especímenes**: Número total en el catálogo
- **Restringidos**: Especímenes con acceso limitado
- **Alto riesgo**: Especímenes de alto riesgo ético
- **Con reclamos**: Especímenes con reclamos activos

## 📋 Catálogo de Especímenes

### Vista Principal

El catálogo muestra todos los especímenes del sistema en formato de tarjetas informativas.

### Elementos de Cada Tarjeta

```
┌─────────────────────────────────────────────────────────────┐
│ HRC-2024-001                    [Excelente] [🔝] [👁️] [📥] │
│ Cráneo • Contexto Arqueológico                              │
│ 📍 Sitio arqueológico El Mirador, Guatemala                  │
│ ℹ️ Resto de excavación prehispánica                         │
│ 📅 2024-01-15 • 👤 Dr. María González                      │
│                                                         │
│ [🔴 Alto Riesgo] [🚫 Restringido] [⚠️ Reclamo Activo]       │
└─────────────────────────────────────────────────────────────┘
```

### Información Mostrada

#### Datos Principales
- **ID de Inventario**: Identificador único
- **Anatomía**: Parte anatómica (ej. Cráneo, Fémur)
- **Origen**: Contexto de procedencia
- **Estado de Conservación**: Excelente, Bueno, Regular, Pobre

#### Ubicación y Contexto
- **📍 Procedencia**: Ubicación geográfica o institución
- **ℹ️ Significado Cultural**: Importancia cultural o comunitaria
- **📅 Fecha**: Fecha de incorporación al catálogo
- **👤 Investigador**: Responsable del espécimen

#### Estado Ético
- **🔴 Alto Riesgo**: Contextos sensibles
- **🚫 Restringido**: Acceso limitado automáticamente
- **⚠️ Reclamo Activo**: Reclamos comunitarios pendientes

#### Acciones Rápidas
- **🔝 Editar**: Modificar información del espécimen
- **👁️ Ver**: Detalles completos del espécimen
- **📥 Exportar**: Descargar en formato JSON-LD

### Filtros del Catálogo

#### Por Estado
- **Todos**: Muestra todos los especímenes
- **Restringidos**: Solo especímenes con acceso limitado
- **No restringidos**: Solo especímenes de acceso público

#### Por Búsqueda
- **Por ID**: Buscar por identificador de inventario
- **Por Anatomía**: Buscar por parte anatómica
- **Por Origen**: Buscar por contexto de procedencia

## ➕ Agregar Nuevo Espécimen

### Acceso al Formulario

1. **Click en "➕ Agregar"** en el sidebar
2. **Formulario completo** se despliega
3. **Campos obligatorios** marcados con asterisco (*)

### Secciones del Formulario

#### 📄 Información Básica

```
ID de Inventario *        [HRC-2024-013        ]
Anatomía *               [Cráneo ▼           ]
Contexto de Origen *     [Arqueológico ▼    ]
Investigador Responsable [Dr. Juan Pérez     ]
Fecha de Colección       [2024-12-12         ]
Procedencia              [Ubicación específica]
```

**Campos Obligatorios:**
- **ID de Inventario**: Identificador único (ej. HRC-2024-013)
- **Anatomía**: Selección de parte anatómica estándar FMA
- **Contexto de Origen**: Clasificación ética del contexto

**Opciones de Anatomía:**
- **Cabeza**: Cráneo, Mandíbula
- **Extremidades**: Húmero, Fémur, Radio, Tibia
- **Torax**: Costilla, Clavícula
- **Columna**: Vértebra cervical
- **Pelvis**: Pelvis

**Contextos de Origen:**
- **Arqueológico**: Bajo riesgo
- **Donación**: Bajo riesgo
- **Médico**: Riesgo medio
- **Indígena**: Alto riesgo
- **Colonial**: Alto riesgo
- **Desconocido**: Alto riesgo

#### 🛡️ Evaluación Ética

```
☑️ Reclamo activo por comunidad de origen
☐ Revisión ética completada
☐ Consulta comunitaria realizada

Significado Cultural
[Descripción del significado cultural o importancia para comunidades...]
```

**Evaluación Automática:**
El sistema aplica automáticamente las siguientes reglas:

1. **Alto Riesgo + Reclamo Activo** = Restringido
2. **Contexto Indígena/Colonial** = Restringido
3. **Significado Cultural (>50 caracteres)** = Restringido

#### ⚙️ Opciones Avanzadas

```
Estado de Conservación     [Bueno ▼]
Valor Científico          [Medio ▼]
Prioridad de Preservación [Normal ▼]
Estado de Repatriación    [No aplica ▼]
```

**Estados de Conservación:**
- **Excelente**: Perfectamente preservado
- **Bueno**: Leve desgaste normal
- **Regular**: Daño moderado
- **Pobre**: Daño significativo

**Valores Científicos:**
- **Bajo**: Limitado valor investigativo
- **Medio**: Valor investigativo moderado
- **Alto**: Alto valor investigativo
- **Crítico**: Esencial para investigación

#### 📝 Notas Adicionales

```
Notas Adicionales
[Observaciones adicionales sobre el espécimen, contexto de descubrimiento,
condiciones de preservación, importancia para la investigación, etc.]
```

### Estado Ético en Tiempo Real

El formulario muestra en tiempo real el resultado de la evaluación ética:

```
┌─────────────────────────────────────────┐
│ Estado Ético Actual                    │
├─────────────────────────────────────────┤
│ Nivel de Riesgo:    [Alto 🔴]         │
│ Restricción Visual:  [Restringido 🚫]   │
└─────────────────────────────────────────┘
```

### Acciones Finales

#### Botones de Acción
```
[📥 Exportar JSON-LD]  [💾 Guardar en Catálogo]
```

**Exportar JSON-LD:**
- Descarga inmediata del espécimen
- Formato compatible con WebProtégé
- Incluye todos los datos semánticos

**Guardar en Catálogo:**
- Agrega el espécimen al sistema
- Aplica inferencia ética automática
- Actualiza estadísticas

## 🔍 Búsqueda y Filtros

### Búsqueda Rápida

#### Barra de Búsqueda (Header)
```
🔍 Buscar especímenes...
[Buscar por ID, anatomía u origen...]
```

**Funcionalidades:**
- **Búsqueda Full-text**: Busca en todos los campos
- **Autocompletado**: Sugerencias mientras escribes
- **Resaltado**: Resultados destacados visualmente

#### Ejemplos de Búsqueda
- **"HRC-2024"**: Encuentra especímenes por ID
- **"Cráneo"**: Encuentra por anatomía
- **"Arqueológico"**: Encuentra por contexto
- **"María"**: Encuentra por investigador

### Filtros Avanzados

#### Filtro por Estado
```
[Todos ▼] [12 especímenes]
```

**Opciones:**
- **Todos**: Muestra todos los especímenes (12)
- **Restringidos**: Solo acceso limitado (4)
- **No restringidos**: Solo acceso público (8)

#### Filtros Combinados
Puedes combinar búsqueda y filtros para resultados precisos:
1. **Buscar** "Cráneo"
2. **Filtrar** por "Restringidos"
3. **Resultado**: Cráneos con acceso limitado

### Ordenamiento

Los resultados se ordenan automáticamente por:
1. **Fecha de incorporación** (más reciente primero)
2. **ID de inventario** (orden alfabético)
3. **Nivel de riesgo** (alto riesgo primero)

## 🧠 Evaluación Ética

### Algoritmo de Inferencia

El sistema utiliza un algoritmo de inferencia ética basado en reglas:

#### Regla Principal
```
SI riesgo = 'alto' Y reclamoActivo = verdadero
ENTONCES restringido = verdadero
```

#### Reglas Adicionales
```
SI origen = 'INDIGENOUS' O 'COLONIAL'
ENTONCES restringido = verdadero

SI significadoCultural > 50 caracteres
ENTONCES restringido = verdadero
```

### Niveles de Riesgo

| Contexto | Riesgo | Descripción | Criterio de Restricción |
|-----------|--------|-------------|------------------------|
| **Arqueológico** | Bajo | Excavaciones documentadas | Reclamo activo |
| **Donación** | Bajo | Donaciones voluntarias | Reclamo activo |
| **Médico** | Medio | Colecciones históricas | Reclamo activo |
| **Desconocido** | Alto | Procedencia no documentada | Automático |
| **Indígena** | Alto | Comunidades originarias | Automático |
| **Colonial** | Alto | Período colonial | Automático |

### Indicadores Visuales

#### Colores de Riesgo
- **🔴 Rojo**: Alto riesgo - Restringido automáticamente
- **🟡 Amarillo**: Riesgo medio - Evaluar caso por caso
- **🟢 Verde**: Bajo riesgo - Generalmente público

#### Iconos de Estado
- **🚫 Restringido**: Acceso limitado
- **⚠️ Reclamo Activo**: Reclamo comunitario pendiente
- **✅ Público**: Acceso sin restricciones

### Proceso de Evaluación

#### Paso 1: Clasificación Automática
1. **Identificar contexto** de origen
2. **Asignar nivel de riesgo** según tabla
3. **Evaluar reclamos** activos

#### Paso 2: Análisis Cultural
1. **Evaluar significado cultural** del texto
2. **Considerar longitud** (>50 caracteres)
3. **Determinar sensibilidad** contextual

#### Paso 3: Decisión Final
1. **Aplicar reglas** de inferencia
2. **Generar recomendación** automática
3. **Permitir override** manual (si aplica)

## 📤 Exportación de Datos

### Formato JSON-LD

S.A.R.H.C. exporta datos en formato JSON-LD compatible con WebProtégé y otras plataformas semánticas.

#### Estructura del Export
```json
{
  "@context": "https://raw.githubusercontent.com/biohumanities/bchr/main/bchr.ttl",
  "@type": "HumanRemains",
  "inventoryID": "HRC-2024-001",
  "hasAnatomy": "FMA:7295",
  "hasOrigin": "ARCHAEOLOGICAL",
  "isVisuallyRestricted": false,
  "claimStatus": "inactive",
  "notes": "Resto de excavación prehispánica",
  "collectionDate": "2024-01-15",
  "provenance": "Sitio arqueológico El Mirador, Guatemala",
  "condition": "good",
  "researcher": "Dr. María González",
  "ethicalReview": false,
  "communityConsultation": false,
  "culturalSignificance": "Resto de excavación prehispánica",
  "repatriationStatus": "none",
  "scientificValue": "medium",
  "preservationPriority": "normal"
}
```

### Proceso de Exportación

#### Exportación Individual
1. **Click en 📥** en la tarjeta del espécimen
2. **Descarga automática** del archivo JSON-LD
3. **Nombre de archivo**: `sarhc-HRC-2024-001.jsonld`

#### Exportación Masiva
1. **Seleccionar especímenes** con checkboxes
2. **Click en "Exportar Seleccionados"**
3. **Archivo ZIP** con todos los JSON-LD

### Integración con WebProtégé

#### Importación a WebProtégé
1. **Abrir WebProtégé**
2. **Crear nuevo proyecto** o abrir existente
3. **Importar** archivo JSON-LD
4. **Mapear** ontología BCHR automáticamente

#### Validación Semántica
- **@context**: Ontología BCHR válida
- **@type**: Clase HumanRemains estándar
- **Propiedades**: Propiedades BCHR válidas
- **URIs**: FMA y BCHR estándar

## 📊 Análisis y Estadísticas

### Dashboard Principal

#### Métricas Generales
```
┌─────────────────────────────────────────────────────────────┐
│ 📊 Total Especímenes        📈 12                        │
│ 🚫 Restringidos              🔴 4 (33%)                   │
│ ⚠️ Alto Riesgo               🟡 6 (50%)                   │
│ 🗣️ Con Reclamos              🟠 3 (25%)                   │
└─────────────────────────────────────────────────────────────┘
```

### Distribución por Contexto

#### Gráfico de Barras
```
Contexto Arqueológico    ████████████████████ 5 (42%)
Donación                ████████████ 2 (17%)
Colección Médica         ████████ 2 (17%)
Contexto Indígena       ██████ 2 (17%)
Contexto Colonial       ███ 1 (8%)
Origen Desconocido       █ 0 (0%)
```

#### Tabla Detallada
| Contexto | Cantidad | Porcentaje | Restringidos |
|----------|----------|------------|--------------|
| Arqueológico | 5 | 42% | 0 |
| Donación | 2 | 17% | 0 |
| Médico | 2 | 17% | 0 |
| Indígena | 2 | 17% | 2 |
| Colonial | 1 | 8% | 1 |
| Desconocido | 0 | 0% | 0 |

### Análisis por Anatomía

#### Distribución Anatómica
- **Cráneo**: 3 especímenes (25%)
- **Fémur**: 2 especímenes (17%)
- **Mandíbula**: 1 espécimen (8%)
- **Costilla**: 1 espécimen (8%)
- **Vértebra cervical**: 1 espécimen (8%)
- **Húmero**: 1 espécimen (8%)
- **Pelvis**: 1 espécimen (8%)
- **Tibia**: 1 espécimen (8%)
- **Radio**: 1 espécimen (8%)
- **Clavícula**: 1 espécimen (8%)

### Tendencias Temporales

#### Incorporación Mensual
```
Enero 2024    ████████████████████ 7 especímenes
Febrero 2024  ████████████ 4 especímenes
Marzo 2024    ██████ 2 especímenes
Diciembre 2024 █ 1 espécimen
```

### Estado de Conservación

#### Distribución por Condición
- **Excelente**: 3 especímenes (25%)
- **Bueno**: 6 especímenes (50%)
- **Regular**: 2 especímenes (17%)
- **Pobre**: 1 espécimen (8%)

## ⚙️ Configuración

### Configuración General

#### Modo Visual
```
Modo Oscuro
[Cambiar entre tema claro y oscuro]

[🌙] [☀️]
```

**Funcionalidades:**
- **Automático**: Sigue preferencia del sistema
- **Claro**: Fondo blanco, texto oscuro
- **Oscuro**: Fondo oscuro, texto claro
- **Persistencia**: Guarda preferencia localmente

#### Información del Sistema
```
Versión:           1.0.0
Ontología:         BCHR (Biohumanities)
Formato Exportación: JSON-LD
Última Actualización: 2024-12-12
```

### Preferencias de Usuario

#### Configuración de Visualización
- **Tamaño de tarjetas**: Compacto, Normal, Grande
- **Ordenamiento**: Fecha, ID, Riesgo
- **Vista por defecto**: Catálogo, Análisis

#### Configuración de Exportación
- **Formato por defecto**: JSON-LD
- **Incluir metadatos**: Sí/No
- **Compresión**: ZIP individual

### Configuración Avanzada

#### Opciones de Desarrollo
```
Modo Debug:          [Desactivado]
Logs del Sistema:    [Activados]
Cache de Datos:      [Activado]
Validación Semántica: [Activada]
```

#### Integraciones Externas
```
WebProtégé:          [Configurado]
GitHub:              [Conectado]
Analytics:           [Desactivado]
```

## ❓ Preguntas Frecuentes

### Preguntas Generales

#### **¿Qué es S.A.R.H.C.?**
S.A.R.H.C. es un sistema ético para catalogar restos humanos en colecciones, con inferencia automática de restricciones basadas en contexto cultural y reclamos comunitarios.

#### **¿Es gratuito?**
Sí, el sistema es completamente gratuito y de código abierto.

#### **¿Funciona offline?**
Sí, S.A.R.H.C. está diseñado para funcionar completamente sin conexión a internet (Air-Gapped).

### Uso del Sistema

#### **¿Cómo agrego un nuevo espécimen?**
1. Click en "➕ Agregar" en el sidebar
2. Completa los campos obligatorios (ID, Anatomía, Origen)
3. El sistema evaluará éticamente automáticamente
4. Click en "Guardar en Catálogo"

#### **¿Qué significa "Restringido"?**
Un espécimen restringido tiene acceso limitado debido a:
- Alto riesgo ético (contexto indígena, colonial, desconocido)
- Reclamos activos de comunidades
- Significado cultural importante

#### **¿Puedo cambiar una decisión automática?**
Actualmente, las decisiones éticas son automáticas basadas en reglas predefinidas. En futuras versiones se permitirá override con justificación.

### Técnicas

#### **¿Qué formato usa para exportar?**
S.A.R.H.C. exporta en formato JSON-LD, compatible con WebProtégé y otras plataformas semánticas.

#### **¿Qué ontología utiliza?**
Utiliza la ontología BCHR (Biohumanities Cultural Heritage) y URIs estándar FMA para anatomía.

#### **¿Cómo integro con WebProtégé?**
1. Exporta el espécimen en JSON-LD
2. Importa el archivo en WebProtégé
3. La ontología BCHR se mapea automáticamente

### Problemas Comunes

#### **No puedo agregar un espécimen**
Verifica que:
- El ID de inventario sea único
- Los campos obligatorios estén completos
- No haya caracteres especiales en el ID

#### **La búsqueda no funciona**
Intenta:
- Usar términos más simples
- Verificar la ortografía
- Limpiar el campo y escribir de nuevo

#### **El tema no cambia**
Recarga la página o:
- Verifica las preferencias del navegador
- Limpia el caché local
- Intenta en modo incógnito

### Soporte

#### **¿Dónde puedo obtener ayuda?**
- **Discord**: [SARHC Community](https://discord.gg/sarhc)
- **Email**: soporte@sarhc.system
- **GitHub**: [Issues](https://github.com/TU_USUARIO/sarhc-system/issues)

#### **¿Cómo reporto un error?**
1. Describe el problema detalladamente
2. Incluye pasos para reproducirlo
3. Adjunta capturas de pantalla si aplica
4. Especifica navegador y versión

#### **¿Cómo sugiero una mejora?**
- Crea un issue en GitHub con la etiqueta "enhancement"
- Describe la funcionalidad deseada
- Explica el caso de uso

---


