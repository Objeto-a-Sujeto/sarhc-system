# 🧬 S.A.R.H.C. - Sistema de Adaptación de Restos Humanos en Colección

<div align="center">

![SARHC Logo](https://img.shields.io/badge/SARHC-v1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey?style=for-the-badge)
![Language](https://img.shields.io/badge/language-TypeScript-blue?style=for-the-badge)
![Framework](https://img.shields.io/badge/framework-Next.js-black?style=for-the-badge)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TU_USUARIO/sarhc-system)
[![Live Demo](https://img.shields.io/badge/demo-live-orange?style=for-the-badge)](https://tu-demo.netlify.app)

**Sistema ético de catalogación de restos humanos con inferencia automática y compatibilidad WebProtégé**

[![Star History Chart](https://api.star-history.com/svg?repos=TU_USUARIO/sarhc-system&type=Date)](https://star-history.com/#TU_USUARIO/sarhc-system&Date)

</div>

## 📋 Tabla de Contenidos

- [🌟 Características Principales](#-características-principales)
- [🚀 Quick Start](#-quick-start)
- [📖 Documentación](#-documentación)
- [🏗️ Arquitectura](#️-arquitectura)
- [🛠️ Tecnologías](#️-tecnologías)
- [📊 Proyecto en Acción](#-proyecto-en-acción)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)
- [📞 Contacto y Soporte](#-contacto-y-soporte)
- [🙏 Agradecimientos](#-agradecimientos)

## 🌟 Características Principales

### 🧠 **Inteligencia Ética Automática**
- **Inferencia contextual**: Aplica restricciones basadas en nivel de riesgo y reclamos activos
- **Evaluación en tiempo real**: Decisiones éticas automáticas durante la catalogación
- **Algoritmos transparentes**: Reglas claras y documentadas para la toma de decisiones

### 🔗 **Integración Semántica Avanzada**
- **Compatibilidad WebProtégé**: Trabaja seamlessly con ontología BCHR estándar
- **URIs FMA estándar**: Integración con Foundational Model of Anatomy
- **Exportación JSON-LD**: Formato semántico estándar para interoperabilidad

### 🎨 **Experiencia de Usuario Superior**
- **Diseño responsivo**: Funciona perfectamente en móviles, tablets y escritorio
- **Modo claro/oscuro**: Interfaz adaptable con toggle de tema persistente
- **Interfaz intuitiva**: Diseño centrado en el usuario con shadcn/ui components

### 🔒 **Seguridad y Privacidad**
- **Air-Gapped Ready**: Operación completa sin conexión a internet
- **Datos locales**: Autonomía completa sin dependencias externas
- **Privacidad garantizada**: Sin tracking ni recolección de datos personales

### 📈 **Análisis y Estadísticas**
- **Dashboard en tiempo real**: Métricas actualizadas instantáneamente
- **Visualizaciones interactivas**: Gráficos y tablas dinámicas
- **Exportación flexible**: Múltiples formatos de salida de datos

### 🔍 **Búsqueda Avanzada**
- **Búsqueda full-text**: Encuentra especímenes por cualquier campo
- **Filtros combinados**: Búsqueda precisa por múltiples criterios
- **Autocompletado inteligente**: Sugerencias contextuales mientras escribes

## 🚀 Quick Start

### 🌐 **Despliegue Rápido (Recomendado)**

#### **Netlify (1-Click Deploy)**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TU_USUARIO/sarhc-system)

1. **Fork este repositorio** 🍴
2. **Conecta con Netlify** 🔗
3. **Despliega automáticamente** 🚀

#### **Vercel**
```bash
# Importar desde GitHub
1. Ve a [vercel.com](https://vercel.com)
2. "New Project" → "Import Git Repository"
3. Selecciona `sarhc-system`
4. "Deploy"
```

#### **GitHub Pages**
```bash
# Configurar para GitHub Pages
npm run build
# Subir a rama gh-pages
git subtree push --prefix out origin gh-pages
```

### 💻 **Desarrollo Local**

#### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn
- Git

#### **Instalación y Ejecución**
```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/sarhc-system.git
cd sarhc-system

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación.

### 🐳 **Docker (Opcional)**
```bash
# Construir imagen
docker build -t sarhc-system .

# Ejecutar contenedor
docker run -p 3000:3000 sarhc-system
```

## 📖 Documentación

| Documento | Descripción | Enlace |
|-----------|-------------|--------|
| 📋 **Guía de Usuario** | Manual completo para usuarios finales | [docs/USER-GUIDE.md](./docs/USER-GUIDE.md) |
| 🔧 **Guía de Despliegue** | Instrucciones detalladas de despliegue | [README-DEPLOYMENT.md](./README-DEPLOYMENT.md) |
| 🔌 **Referencia de API** | Documentación completa de la API REST | [docs/API.md](./docs/API.md) |
| 🛡️ **Guía Ética** | Principios y mejores prácticas éticas | [docs/ETHICAL-GUIDE.md](./docs/ETHICAL-GUIDE.md) |
| 📖 **Documentación Técnica** | Arquitectura y detalles técnicos | [docs/TECHNICAL.md](./docs/TECHNICAL.md) |

## 🏗️ Arquitectura

### 📁 **Estructura del Proyecto**
```
S.A.R.H.C./
├── 📁 src/                    # Código fuente
│   ├── 📁 app/               # App Router Next.js 15
│   │   ├── 📁 api/           # API routes
│   │   ├── 📄 layout.tsx     # Layout principal
│   │   ├── 📄 page.tsx       # Página principal
│   │   └── 📄 globals.css    # Estilos globales
│   ├── 📁 components/        # Componentes React
│   │   ├── 📄 SARHCApp.tsx   # Componente principal
│   │   └── 📁 ui/            # shadcn/ui components
│   └── 📁 lib/               # Utilidades
│       └── 📄 utils.ts        # Helper functions
├── 📁 public/                # Archivos estáticos
│   ├── 📄 bchr.ttl          # Ontología WebProtégé
│   ├── 📄 vocab_data.json   # Datos operativos
│   └── 📄 logo.svg          # Logo del sistema
├── 📁 docs/                 # Documentación
├── 📄 package.json          # Dependencias
├── 📄 next.config.ts        # Configuración Next.js
├── 📄 tailwind.config.ts    # Configuración Tailwind
├── 📄 tsconfig.json         # Configuración TypeScript
└── 📄 netlify.toml          # Configuración Netlify
```

### 🏛️ **Principios Arquitectónicos**

#### **🌉 Semantic Bridge**
- Integración nativa con ontología BCHR
- URIs estándar FMA para anatomía humana
- Exportación JSON-LD compatible con WebProtégé

#### **🔒 Air-Gapped**
- Funcionamiento completo offline
- No depende de APIs externas
- Datos locales y autónomos

#### **🤝 Dignity by Design**
- Inferencia ética automática
- Restricciones basadas en contexto cultural
- Protección de comunidades originarias

### 🧠 **Algoritmo de Inferencia Ética**

```typescript
// REGLA PRINCIPAL
SI riesgo = 'alto' Y reclamoActivo = verdadero
ENTONCES restringido = verdadero

// REGLAS ADICIONALES
SI origen = 'INDIGENOUS' O 'COLONIAL'
ENTONCES restringido = verdadero

SI significadoCultural > 50 caracteres
ENTONCES restringido = verdadero
```

## 🛠️ Tecnologías

### **Frontend Stack**
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **Next.js** | 15.3.5 | Framework React con App Router |
| **React** | 18.2.0 | Biblioteca de UI |
| **TypeScript** | 5.3.2 | Tipado estático |
| **Tailwind CSS** | 3.3.6 | Framework de CSS |
| **shadcn/ui** | Latest | Componentes UI modernos |
| **Lucide React** | 0.294.0 | Iconos modernos |
| **next-themes** | 0.2.1 | Manejo de temas |

### **Backend Stack**
| Tecnología | Descripción |
|------------|-------------|
| **API Routes** | Endpoints RESTful de Next.js |
| **JSON-LD** | Formato de datos semánticos |
| **WebProtégé** | Integración con ontología BCHR |
| **FMA** | Foundational Model of Anatomy URIs |

### **Development Tools**
| Herramienta | Uso |
|-------------|-----|
| **ESLint** | Linting de código |
| **Prettier** | Formato de código |
| **npm** | Gestión de paquetes |
| **Git** | Control de versiones |

## 📊 Proyecto en Acción

### 🎯 **Contextos de Origen y Niveles de Riesgo**

| Contexto | Riesgo | Descripción | Restricción Automática |
|-----------|--------|-------------|------------------------|
| **Arqueológico** | 🟢 Bajo | Excavaciones documentadas | Solo con reclamo activo |
| **Donación** | 🟢 Bajo | Donaciones voluntarias | Solo con reclamo activo |
| **Médico** | 🟡 Medio | Colecciones históricas | Solo con reclamo activo |
| **Desconocido** | 🔴 Alto | Procedencia no documentada | Automática |
| **Indígena** | 🔴 Alto | Comunidades originarias | Automática |
| **Colonial** | 🔴 Alto | Período colonial | Automática |

### 📄 **Formato de Exportación JSON-LD**

```json
{
  "@context": "https://raw.githubusercontent.com/biohumanities/bchr/main/bchr.ttl",
  "@type": "HumanRemains",
  "inventoryID": "HRC-2024-001",
  "hasAnatomy": "FMA:7295",
  "hasOrigin": "ARCHAEOLOGICAL",
  "isVisuallyRestricted": false,
  "claimStatus": "inactive",
  "culturalSignificance": "Resto de excavación prehispánica",
  "collectionDate": "2024-01-15",
  "provenance": "Sitio arqueológico El Mirador, Guatemala",
  "condition": "good",
  "researcher": "Dr. María González",
  "ethicalReview": false,
  "communityConsultation": false,
  "repatriationStatus": "none",
  "scientificValue": "medium",
  "preservationPriority": "normal"
}
```

### 📈 **Estadísticas en Tiempo Real**

```
📊 Total Especímenes        📈 12
🚫 Restringidos              🔴 4 (33%)
⚠️ Alto Riesgo               🟡 6 (50%)
🗣️ Con Reclamos              🟠 3 (25%)
```

## 🤝 Contribuir

¡Contribuciones son bienvenidas! Si quieres contribuir al proyecto S.A.R.H.C., por favor sigue estos pasos:

### 🍴 **Fork y Clone**
```bash
# Fork el repositorio
git clone https://github.com/TU_USUARIO/sarhc-system.git
cd sarhc-system
```

### 🌿 **Crear Feature Branch**
```bash
git checkout -b feature/nueva-funcionalidad
```

### 💾 **Commit y Push**
```bash
# Hacer cambios
git add .
git commit -m "feat: agregar nueva funcionalidad"
git push origin feature/nueva-funcionalidad
```

### 🔄 **Pull Request**
1. Ve a la página del repositorio
2. Click en "New Pull Request"
3. Selecciona tu branch
4. Completa la descripción
5. Click en "Create Pull Request"

### 📝 **Guía de Estilo**

- **Commits**: Usa [Conventional Commits](https://www.conventionalcommits.org/)
- **Código**: Sigue las guías de ESLint y Prettier
- **Documentación**: Actualiza la documentación relevante
- **Tests**: Asegúrate de que todos los tests pasen

### 🐛 **Reportar Issues**

Para reportar bugs o solicitar nuevas funcionalidades:

1. Ve a [Issues](https://github.com/TU_USUARIO/sarhc-system/issues)
2. Click en "New Issue"
3. Usa las plantillas proporcionadas
4. Proporciona toda la información relevante

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para detalles.

```
MIT License

Copyright (c) 2024 S.A.R.H.C. - Sistema de Adaptación de Restos Humanos en Colección

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contacto y Soporte

### 📧 **Contacto Directo**
- **Email**: soporte@sarhc.system
- **Issues**: [GitHub Issues](https://github.com/TU_USUARIO/sarhc-system/issues)

### 💬 **Comunidad**
- **Discord**: [SARHC Community](https://discord.gg/sarhc)
- **Discussions**: [GitHub Discussions](https://github.com/TU_USUARIO/sarhc-system/discussions)

### 📖 **Recursos**
- **Wiki**: [Documentación completa](https://docs.sarhc.system)
- **API Docs**: [Referencia de API](https://api.sarhc.system)
- **Demo**: [Demostración en vivo](https://tu-demo.netlify.app)

### 🐛 **Soporte Técnico**
Para asistencia técnica:

1. **Revisa la documentación** - La mayoría de las preguntas están respondidas
2. **Busca en issues existentes** - Puede que tu problema ya esté resuelto
3. **Crea un nuevo issue** - Si no encuentras solución
4. **Contacta directamente** - Para asuntos urgentes

## 🙏 Agradecimientos

### 🏛️ **Proyectos Académicos**
- **Biohumanities Project** - Por la ontología BCHR
- **Foundational Model of Anatomy (FMA)** - Por las URIs anatómicas estándar
- **WebProtégé** - Por la plataforma de ontologías

### 🛠️ **Tecnologías Open Source**
- **Next.js** - Framework React moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes UI de alta calidad
- **Lucide** - Iconos modernos y consistentes

### 👥 **Contribuidores**
Gracias a todos los contribuidores que hacen posible este proyecto:

<a href="https://github.com/TU_USUARIO/sarhc-system/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=TU_USUARIO/sarhc-system" />
</a>

---

<div align="center">

**S.A.R.H.C.** - *Sistema de Adaptación de Restos Humanos en Colección*  
*Ética, Dignidad y Tecnología al servicio de la ciencia*

[![Website](https://img.shields.io/badge/website-sarhc.system-blue?style=for-the-badge)](https://sarhc.system)
[![Documentation](https://img.shields.io/badge/docs-latest-green?style=for-the-badge)](https://docs.sarhc.system)
[![API](https://img.shields.io/badge/api-v1.0-orange?style=for-the-badge)](https://api.sarhc.system)

Made with ❤️ for ethical scientific research

</div>

</div>
