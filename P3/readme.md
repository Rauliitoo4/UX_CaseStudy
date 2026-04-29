# DIU - Practica 3, entregables

- [Moodboard (diseño visual + logotipo)](Moodboard.png)   
- [Landing Page](LandingPage.png)
- [Mockup: LAYOUT HI-FI versión png](Layout.png)
- [Mockup: LAYOUT HI-FI versión pdf](Layout.pdf)
- [Publicación del Case Study](figma.com)

## Briefing — Proceso de Diseño
 
**Proyecto:** Sabores con Encanto — Restaurante de Fusión Gourmet  
**Autor:** Raúl Redondo Chicano

### Proceso de diseño
 
El proceso de diseño de esta práctica ha partido de los wireframes Lo-Fi desarrollados en la P2, evolucionándolos hacia un prototipo Hi-Fi completo con identidad visual definida.
 
**Moodboard y guía de estilos**  
El primer paso fue definir la dirección visual del proyecto. Se optó por una estética elegante y sofisticada basada en una paleta de negro carbón (#1A1A1A), dorado cálido (#C9A84C) y crema marfil (#F5F0E8), que transmite la sofisticación de la alta cocina sin perder calidez. La tipografía combina Cormorant Garamond para títulos, aportando distinción y carácter, con Inter para el cuerpo de texto, garantizando legibilidad y accesibilidad.
 
**Landing Page**  
Se diseñó una página de aterrizaje con estructura clara: navbar, hero con headline evocador, sección de beneficios con 3 propuestas de valor, sección emocional con quote de marca y footer. Se utilizó Figma Make como herramienta de apoyo para generar una estructura base, sobre la que se iteró manualmente ajustando colores, tipografía y espaciado para adaptarla a la guía de estilos del proyecto.
 
**Design System**  
Se creó un Design System ligero siguiendo la metodología Atomic Design, organizado en tres niveles. En el nivel de Foundations se definieron los tokens de color, la escala tipográfica modular (H1-H3, Body, Label, Caption) y el sistema de espaciado basado en 8px. En el nivel de Átomos se diseñaron botones en tres estados (primario, secundario y desactivado), inputs de formulario en estado default y activo, e iconos de Lucide. En el nivel de Moléculas se construyeron la card de plato, la barra de búsqueda y los tabs de navegación. Finalmente, en el nivel de Organismos se desarrollaron la Navbar, el Hero y el Footer con Auto Layout para garantizar comportamiento responsive.
 
**Layout Hi-Fi**  
Se diseñaron 8 pantallas completas reutilizando los componentes del Design System: Home, Menú/Carta, Detalle de plato, Reservar mesa, Búsqueda, Nosotros, Contacto y Confirmación de reserva. Todas las pantallas mantienen coherencia visual y estructural gracias al uso sistemático de los componentes definidos.
 
**Simulación**  
Se implementó la simulación de interacción en modo Prototipo de Figma, conectando los flujos principales de usuario: exploración del menú, reserva de mesa y navegación general. La simulación puede visualizarse a través del enlace público de Figma en modo presentación: [Ver prototipo interactivo](ENLACE_FIGMA_AQUI). Se aplicó animación de transición entre pantallas para simular una experiencia fluida.
 
---
 
### Herramientas utilizadas
 
- **Figma** — Diseño del moodboard, design system, layout y prototipado
- **Figma Make** — Generación de estructura base de la landing page
- **Lucide.dev** — Iconografía
- **Google Fonts** — Tipografías (Cormorant Garamond e Inter)
- **Unsplash** — Imágenes de referencia y contenido visual
---
 
## Conclusiones
 
El diseño de Sabores con Encanto ha resuelto los principales problemas detectados en el análisis de Goiko (P1): menú filtrable por categorías, disponibilidad de reserva en tiempo real, horarios visibles y una experiencia visual coherente con la propuesta gastronómica.
 
El uso de un Design System propio basado en Atomic Design ha sido la decisión más relevante de la práctica: ha garantizado consistencia en todas las pantallas y ha agilizado significativamente el proceso de maquetación Hi-Fi, permitiendo reutilizar componentes de forma modular. La paleta negro/dorado ha resultado especialmente efectiva para transmitir la identidad de alta cocina que el proyecto requería.
 
Como aprendizaje, destacar que dedicar tiempo a definir bien el Design System al principio ahorra mucho trabajo en la fase de Layout, ya que los componentes se reutilizan directamente en todas las pantallas. El uso de Auto Layout ha facilitado además la adaptabilidad de los componentes a diferentes contextos dentro del mismo diseño.
