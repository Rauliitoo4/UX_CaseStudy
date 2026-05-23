# DIU26
Prácticas Diseño Interfaces de Usuario - Sabores con Encanto

[Guiones de prácticas](./GuionesPracticas/)

Actualizado: 23/05/2026

---

## 🔗 Enlaces del proyecto

| Recurso | Enlace |
|--------|--------|
| 🎨 Figma (P3) | [Ver diseño](https://www.figma.com/design/kh3VvDpBz8eGqK6z3bIJjP/p3) |
| 🌐 Web publicada (P4) | [sabores-con-encanto.surge.sh](https://sabores-con-encanto.surge.sh) |
| 💻 Código fuente (P4) | [Ver en GitHub](https://github.com/Rauliitoo4/UX_CaseStudy/tree/master/P4) |

---

## Paso 0. My UX-Case Study

Grupo: DIU3.rrc. Curso: 2025/26

**Nombre del Proyecto:** Sabores con Encanto

**Descripción:** Sabores con Encanto es un restaurante de fusión gourmet que combina técnicas culinarias de distintas culturas con ingredientes de temporada. La propuesta digital permite explorar la carta, reservar mesa en tiempo real y descubrir la filosofía del restaurante de forma sencilla e inmersiva.

**Logotipo:**

![Logo Sabores con Encanto](P3/logo.png)

**Slogan:** *Donde cada plato cuenta una historia*

**Miembros:**

👤 Raúl Redondo Chicano [:octocat:](https://github.com/Rauliitoo4)

---

## Proceso de Diseño

## Paso 1. UX User & Desk Research & Análisis

### 1.a User Research Plan

El contexto analizado es el sector de la hostelería gourmet y la experiencia gastronómica en Granada. El objetivo es entender cómo los usuarios buscan, evalúan y reservan en restaurantes online. La estrategia combina análisis de la competencia, definición de perfiles de usuario y revisión experta de usabilidad sobre webs existentes del sector. Se priorizan usuarios con distintos niveles tecnológicos y motivaciones de visita (ocio, trabajo, ocasiones especiales).

### 1.b Competitive Analysis

Se analizaron tres competidores del sector fast food y burger gourmet: **Goiko**, **The Champions Burger** y **Five Guys**. Se seleccionó **Goiko** como caso principal de estudio por ser la propuesta más completa digitalmente, con carta online, sistema de reservas y presencia mobile. Sus puntos fuertes son el diseño visual y la claridad de los CTAs, mientras que sus debilidades principales son la falta de buscador avanzado, filtros en la carta y mapa del sitio.

### 1.c Personas

**Carlos (22, estudiante):** Busca restaurantes con buen ambiente y precios visibles. Quiere ver el menú completo y poder reservar en pocos pasos sin tener que llamar.

**Ana (34, periodista):** Busca disponibilidad de mesa para esta noche y quiere saber cómo es el ambiente del restaurante antes de tomar la decisión.

### 1.d User Journey Map

Se definieron dos journey maps: el de Carlos, que intenta reservar mesa desde el móvil en el último momento y se encuentra con dificultades para confirmar disponibilidad en tiempo real; y el de Ana, que investiga el restaurante desde el ordenador antes de una reunión y necesita información clara sobre la carta y el ambiente.

### 1.e Usability Review

Enlace al documento: [Usability-review.xlsx](./P1/Usability-review.xlsx)

URL analizada: [goiko.com](https://www.goiko.com/es/carta/hamburguesas/)

**Valoración obtenida: 75.83 / 100 — Buena**

La web de Goiko ofrece una experiencia visualmente atractiva y con buena arquitectura de navegación. Sus puntos fuertes son la claridad de los CTAs, el rendimiento técnico y la legibilidad del contenido. Las debilidades más destacadas son la ausencia de un buscador avanzado con filtros, la falta de mapa del sitio y la escasa ayuda contextual en los formularios, aspectos que afectan especialmente a usuarios con menor experiencia digital.

---

## Paso 2. UX Design

### 2.a Reframing / Ideación

A partir del análisis de Goiko y las experiencias de los usuarios ficticios, se identificaron las carencias principales del sector: falta de filtros en la carta, ausencia de reservas en tiempo real y experiencia mobile poco optimizada. La propuesta de valor de Sabores con Encanto se centra en resolver estas fricciones ofreciendo una experiencia digital completa, elegante y sin complicaciones.

**Feedback Capture Grid:**

| Interesante | Críticas |
|-------------|----------|
| Diseño visual atractivo en competidores | Sin filtros ni buscador en la carta |
| CTAs claros para añadir al carrito | Reservas poco visibles o inexistentes |
| **Preguntas** | **Nuevas ideas** |
| ¿Puedo ver disponibilidad antes de reservar? | Reserva en tiempo real con confirmación inmediata |
| ¿Hay platos sin gluten o vegetarianos? | Carta filtrable por categoría, alérgenos y precio |

### 2.b ScopeCanvas

La propuesta se articula en tres pilares: **menú filtrable** (por categoría, alérgenos y precio), **reserva en tiempo real** (con confirmación inmediata) y **experiencia visual inmersiva** que transmita la identidad gourmet del restaurante. El objetivo es fidelizar tanto a usuarios jóvenes que valoran la autonomía digital como a perfiles profesionales que necesitan información clara y rápida.

### 2.c User Flow / Task Analysis

Se definieron dos flujos principales:

- **Consulta de carta:** Inicio → Menú → Filtro por categoría → Detalle de plato → Añadir
- **Reserva de mesa:** Inicio → Reservar → Seleccionar fecha/hora/comensales → Confirmar → Confirmación

Además se elaboró una **User Task Matrix** identificando las tareas más frecuentes y su importancia para cada perfil de usuario.

### 2.d IA: Sitemap + Labelling

| Término | Significado | Icono |
|---------|-------------|-------|
| Menú | Carta de platos filtrable por categoría | UtensilsCrossed |
| Reservar | Formulario de reserva de mesa | Calendar |
| Nosotros | Historia y filosofía del restaurante | Info |
| Contacto | Información de contacto y localización | MapPin |
| Buscar | Búsqueda de platos por nombre | Search |

### 2.e Wireframes

Bocetos Lo-Fi diseñados en Figma para las vistas principales: Landing, Carta, Detalle de plato, Reserva, Búsqueda, Nuestra Historia, Contacto y Confirmación de reserva. Se realizó una primera versión con posiciones fijas y una segunda con grid layout responsive.

---

## Paso 3. Mi UX-Case Study (diseño)

### 3.a Moodboard

![Moodboard](P3/Moodboard.png)

Guía de estilos visual creada en Figma con paleta de colores elegante (negro carbón `#2A2A2A`, dorado `#C9A84C`, crema marfil `#F5F0E8` y rojo vino `#8B0000`), tipografía **Cormorant Garamond** para transmitir sofisticación, e imágenes de alta calidad que reflejan la identidad gourmet del restaurante. El logotipo combina tipografía serif y un símbolo minimalista que evoca la gastronomía de autor.

### 3.b Landing Page

![Landing Page](P3/LandingPage.png)

Landing page diseñada en Figma con hero de imagen a pantalla completa con overlay oscuro, headline impactante (*"Donde cada plato cuenta una historia"*), dos CTAs principales (Reservar mesa / Ver carta) y sección de platos destacados. Generada con apoyo de **Figma Make** y ajustada manualmente para mantener coherencia con el Design System.

### 3.c Guidelines

Patrones IU seleccionados: **Sticky navbar** para navegación persistente, **cards** para mostrar platos con imagen, nombre, descripción y precio, **filtros por categoría** en la carta, **formulario de reserva paso a paso** con indicador de progreso y **jerarquía visual de botones** (primary dorado / secondary outline / disabled gris).

### 3.d Mockup

![Layout](P3/Layout.png)

Mockup Hi-Fi en Figma con 8 pantallas: Landing, Carta, Detalle de plato, Reserva, Resultados de búsqueda, Nuestra Historia, Contacto y Confirmación de reserva. Diseño con autolayout responsive y componentes con variantes para simular interacciones.

[Ver en Figma](https://www.figma.com/design/kh3VvDpBz8eGqK6z3bIJjP/p3)

---

## Paso 4. Pruebas de Evaluación

### 4.a Reclutamiento de usuarios

**Caso B asignado:** DIU2.AKA — Los Pajaritos (rediseño de Epicureum, cafetería de especialidad)

Se reclutaron 10 participantes distribuidos en 5 para el Caso A y 5 para el Caso B, con perfiles variados en edad, género y competencia digital.

| ID | Sexo/Edad | Ocupación | Exp.TIC | Plataforma | Caso |
|----|-----------|-----------|---------|------------|------|
| P01 | H / 22 | Estudiante | Media | Web | A |
| P02 | M / 35 | Profesora | Media | Web | A |
| P03 | H / 25 | Informático | Alta | Web | A |
| P04 | M / 62 | Jubilada | Baja | Web | A |
| P05 | H / 21 | Estudiante | Media | Web | A |
| P06 | H / 52 | Autónomo | Baja | Web | B |
| P07 | M / 28 | Diseñadora | Alta | Web | B |
| P08 | H / 45 | Empresario | Media | Web | B |
| P09 | M / 20 | Estudiante | Media | Web | B |
| P10 | M / 49 | Administrativa | Baja | Web | B |

### 4.b Diseño de las pruebas

Se realizaron tres pruebas por usuario sobre el prototipo Figma del caso asignado:
1. **Navegación libre** por la Landing Page (5 minutos)
2. **Tarea 1:** Encontrar un producto en la carta y añadirlo al pedido
3. **Tarea 2:** Reservar una mesa / consultar disponibilidad

Duración aproximada: 5-10 minutos por sesión. Se registró si el usuario necesitó ayuda para completar cada tarea.

### 4.c Cuestionario SUS

Se utilizó el cuestionario SUS estándar de 10 preguntas mediante **Tally.so**, ampliado con preguntas demográficas (edad, género, competencia digital, uso de gafas, rol). Enlace al formulario: https://tally.so/r/81R8Wx

Los resultados se analizaron con **sus.mixality.de**. Resultados:

| ID | Caso | SUS Score | Etiqueta |
|----|------|-----------|----------|
| P01 | A | 50.0 | Marginal |
| P02 | A | 42.5 | Pobre |
| P03 | A | 92.5 | Excelente |
| P04 | A | 7.5 | Pobre |
| P05 | A | 52.5 | Marginal |
| P06 | B | 7.5 | Pobre |
| P07 | B | 92.5 | Excelente |
| P08 | B | 45.0 | Pobre |
| P09 | B | 57.5 | Marginal |
| P10 | B | 15.0 | Pobre |

**Media Caso A (Sabores con Encanto): 49.0 — Marginal**
**Media Caso B (Los Pajaritos): 43.5 — Pobre**

El patrón es claro: usuarios con alta competencia digital obtienen puntuaciones excelentes (92.5) mientras que los de baja competencia obtienen puntuaciones muy bajas (7.5-15.0), lo que indica que ambos diseños necesitan mejorar su accesibilidad para perfiles menos digitalizados.

### 4.d A/B Testing

| Métrica | Caso A (Sabores con Encanto) | Caso B (Los Pajaritos) |
|---------|------------------------------|------------------------|
| Media SUS | 49.0 | 43.5 |
| Etiqueta | Marginal | Pobre |
| Mejor puntuación | 92.5 | 92.5 |
| Peor puntuación | 7.5 | 7.5 |

**Conclusión:** El Caso A resulta ligeramente más usable que el Caso B. Ambos diseños presentan dificultades para usuarios con baja competencia digital.

### 4.e Aplicación del método Eye Tracking

Se utilizó **GazeRecorder** sobre capturas de pantalla de las 3 páginas principales del Caso B (Landing, Carta y El Local). Las capturas se realizaron con la extensión **FireShot** sobre el prototipo Figma en modo presentación.

**Resultados Landing Page:** La atención se concentra en el headline y el botón "Pedir y Recoger", confirmando una jerarquía visual efectiva. Los botones secundarios (Reservar, Ver Carta) reciben menos atención.

**Resultados La Carta:** Los usuarios focalizan en imágenes y precios antes que en los filtros de categoría.

**Resultados El Local:** Los indicadores de ambiente (aforo, ruido) — propuesta de valor diferencial — no captan suficiente atención visual. Se recomienda rediseñar esta sección.

Resultados en [P5/](./P5/)

### 4.f Usability Report de B

Informe de usabilidad completo del Caso B (DIU2.AKA — Los Pajaritos) elaborado por DIU3.rrc, incluyendo análisis SUS, Eye Tracking y auditoría de accesibilidad con Lighthouse (90/100).

Enlace al informe: [P4_UsabReport_DIU2AKA_doneby_DIU3_rrc.md](./P5/Usability-Report/UsabilityReport.md)

---

## Paso 5. Exportación y Documentación

### 5.a Exportación a HTML/React

El diseño de Figma se exportó a React usando **Vite + Tailwind CSS + Lucide React**. Se implementaron los componentes principales del Design System respetando la paleta de colores y tipografía de la práctica 3: `Navbar`, `Button` (variantes primary/secondary/disabled), `DishCard`, `Hero` y `Footer`.

🌐 Web publicada: [sabores-con-encanto.surge.sh](https://sabores-con-encanto.surge.sh)
💻 Código fuente: [P4/](./P4/)

### 5.b Documentación con Storybook

Se documentaron los 4 componentes principales con **Storybook**, incluyendo las variantes de cada uno. La documentación permite visualizar y probar cada componente de forma aislada con controles interactivos. Evidencias en [P4/](./P4/).

---

## Conclusiones finales & Valoración de las prácticas

El proceso de diseño siguiendo metodología UX ha permitido construir un producto digital coherente y bien fundamentado, desde la investigación inicial hasta la implementación en React. Lo más valioso ha sido la conexión directa entre el Design System definido en Figma y los componentes React, que garantizó la consistencia visual en todo momento. El uso de Tailwind CSS facilitó enormemente la traducción de tokens de diseño a código. Como área de mejora, habría sido interesante involucrar usuarios reales en fases más tempranas del diseño para validar decisiones antes del prototipado Hi-Fi.
