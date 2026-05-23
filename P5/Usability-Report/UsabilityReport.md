# Usability Report — Caso B: DIU2.AKA (Los Pajaritos)

**Evaluado por:** DIU3.rrc — Raúl Redondo Chicano  
**Fecha:** 23/05/2026  
**Proyecto evaluado:** Los Pajaritos — Rediseño de Epicureum (cafetería de especialidad y espacio de trabajo)  
**Repositorio Caso B:** https://github.com/javiirruizz/UX_CaseStudy  
**Prototipo Figma:** https://www.figma.com/design/47rnJBn5ntFzjEDtrpU3lU/Sin-título

---

## 1. Resumen Ejecutivo

Este informe presenta los resultados de la evaluación de usabilidad del proyecto **Los Pajaritos** (DIU2.AKA), un rediseño de la plataforma digital de la cafetería Epicureum. La evaluación se ha realizado mediante un estudio entre-sujetos (Between-Subjects) combinando Eye Tracking, cuestionario SUS y auditoría de accesibilidad con Lighthouse.

Los resultados del cuestionario SUS arrojan una puntuación media de **43.5/100 (Pobre)** para el Caso B, frente a **49.0/100 (Marginal)** del Caso A. Esta diferencia se explica principalmente por las dificultades de los perfiles con competencia digital baja para completar tareas en el prototipo. El análisis de Eye Tracking revela una jerarquía visual efectiva en la Landing Page, con alta concentración de atención en el headline y los CTAs principales. La auditoría de accesibilidad con Lighthouse otorga una puntuación de **90/100**, con dos issues menores identificados.

---

## 2. Metodología y Reclutamiento

### 2.1 Diseño del estudio

Se ha aplicado un modelo **Between-Subjects** con 10 participantes distribuidos en dos grupos:
- **5 usuarios → Caso A** (Sabores con Encanto)
- **5 usuarios → Caso B** (Los Pajaritos)

Dado que no fue posible reclutar usuarios completamente independientes, se adaptó a un modelo **Within-Subjects parcial**, donde los participantes evaluaron un único caso para evitar el sesgo de aprendizaje.

### 2.2 Tabla de participantes

| ID | Edad | Género | Comp. Digital | Gafas/Lentillas | Rol | Caso |
|----|------|--------|---------------|-----------------|-----|------|
| P01 | 22 | H | Media | No | Estudiante | A |
| P02 | 35 | M | Media | Sí | Otro | A |
| P03 | 25 | H | Alta | Sí | Otro | A |
| P04 | 62 | M | Baja | Sí | Otro | A |
| P05 | 21 | H | Media | No | Estudiante | A |
| P06 | 52 | H | Baja | Sí | Otro | B |
| P07 | 28 | M | Alta | No | Estudiante | B |
| P08 | 45 | H | Media | Sí | Trabajador | B |
| P09 | 20 | M | Media | Sí | Estudiante | B |
| P10 | 49 | M | Baja | No | Otro | B |

### 2.3 Tareas propuestas

Cada usuario realizó las siguientes tareas sobre el prototipo:
1. **Navegación libre** por la Landing Page (5 minutos)
2. **Tarea 1:** Encontrar un producto en la carta y añadirlo al pedido
3. **Tarea 2:** Reservar una mesa en el local
4. **Tarea 3:** Consultar información sobre accesibilidad del local

---

## 3. Resultados del Cuestionario SUS

### 3.1 Puntuaciones individuales

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

### 3.2 Comparativa A/B

| | Caso A (Sabores con Encanto) | Caso B (Los Pajaritos) |
|--|--|--|
| **Media SUS** | 49.0 | 43.5 |
| **Etiqueta** | Marginal | Pobre |
| **Mejor puntuación** | 92.5 (P03, Alta competencia) | 92.5 (P07, Alta competencia) |
| **Peor puntuación** | 7.5 (P04, Baja competencia) | 7.5 (P06, Baja competencia) |

### 3.3 Conclusiones SUS

Ambos casos presentan puntuaciones similares, lo que indica que **ninguno de los dos diseños está optimizado para usuarios con baja competencia digital**. El patrón es claro: los usuarios con competencia digital alta obtienen puntuaciones excelentes (92.5) mientras que los de competencia baja obtienen puntuaciones muy bajas (7.5-15.0).

Para el Caso B específicamente, el principal problema detectado es la **complejidad percibida** del sistema de fidelización (Club Pajaritos) y el flujo de pedido online, que resultan confusos para usuarios poco familiarizados con plataformas digitales.

**El Caso A resulta ligeramente más usable que el Caso B** (49.0 vs 43.5), aunque la diferencia no es estadísticamente significativa dada la muestra reducida.

---

## 4. Análisis de Eye Tracking

### 4.1 Metodología

Se utilizó **GazeRecorder** (gazerecorder.com) para registrar el movimiento ocular de los participantes sobre capturas estáticas de las 3 páginas principales del Caso B: Landing Page, La Carta y El Local. Se registró 1 sesión con datos válidos.

### 4.2 Resultados por página

#### Landing Page
El heatmap revela que la atención se concentra principalmente en:
- **Headline** ("Café de Especialidad y tu Rincón Ideal para Trabajar") — zona de máxima atención (rojo)
- **Botón "Pedir y Recoger"** — segundo punto de mayor atención
- **Zona superior derecha** — atención dispersa en la imagen de fondo

**Conclusión:** La jerarquía visual es efectiva. El mensaje principal y el CTA primario captan correctamente la atención del usuario. Sin embargo, los botones secundarios (Reservar, Ver Carta) reciben menos atención de la deseable.

#### La Carta
La atención se distribuye entre las imágenes de los productos y los precios, con menor atención a las categorías de filtrado.

**Conclusión:** Los usuarios focalizan en el contenido visual antes que en la navegación por categorías, lo que podría dificultar la búsqueda de productos específicos.

#### El Local
La atención se concentra en la fotografía del espacio, con escasa atención a los indicadores de accesibilidad y nivel de ruido.

**Conclusión:** Los indicadores de ambiente (aforo, nivel de ruido) — que son la propuesta de valor diferencial del proyecto — no están captando suficiente atención visual. Se recomienda rediseñar esta sección para destacar más estos elementos.

---

## 5. Auditoría de Accesibilidad (Caso B)

### 5.1 Herramientas utilizadas
- **Lighthouse (Google Chrome DevTools)** — análisis automático
- Análisis realizado sobre el prototipo Figma en modo presentación

### 5.2 Puntuación general

| Métrica | Puntuación |
|---------|-----------|
| **Accesibilidad** | 90/100 |
| Performance | 31/100 |
| Best Practices | 96/100 |
| SEO | 66/100 |

### 5.3 Issues detectados

#### Categoría: Operable
**Error:** `[user-scalable="no"]` en el elemento `<meta name="viewport">`  
**Criterio WCAG incumplido:** Criterio 1.4.4 — Cambio de tamaño del texto (Nivel AA)  
**Impacto:** Los usuarios con baja visión no pueden hacer zoom en la página para ampliar el contenido, lo que reduce significativamente la accesibilidad para este colectivo.  
**Recomendación:** Eliminar `user-scalable=no` y `maximum-scale` del meta viewport para permitir el zoom del navegador.

#### Categoría: Robusto
**Error:** Elementos con `role="dialog"` o `role="alertdialog"` sin nombre accesible  
**Criterio WCAG incumplido:** Criterio 4.1.2 — Nombre, función, valor (Nivel A)  
**Impacto:** Los lectores de pantalla no pueden identificar ni anunciar correctamente los diálogos modales, impidiendo su uso a personas con discapacidad visual.  
**Recomendación:** Añadir atributo `aria-label` o `aria-labelledby` a todos los elementos con role="dialog".

#### Categoría: Perceptible
**Observación:** Las fotografías de fondo en la Landing no tienen texto alternativo (`alt`), lo que impide que los lectores de pantalla transmitan la información visual a usuarios con discapacidad visual.  
**Criterio WCAG incumplido:** Criterio 1.1.1 — Contenido no textual (Nivel A)  
**Recomendación:** Añadir atributos `alt` descriptivos a todas las imágenes con contenido informativo.

### 5.4 Valoración general de accesibilidad

El Caso B obtiene una **puntuación de accesibilidad de 90/100**, lo que indica un nivel técnico bueno. Los 20 criterios superados incluyen contraste de colores adecuado, estructura de encabezados correcta y navegación por teclado funcional. Los principales problemas detectados son de nivel A y AA según WCAG 2.1, y su corrección es relativamente sencilla. Se recomienda abordarlos antes del despliegue en producción.

---

## 6. Conclusiones y Recomendaciones

### 6.1 Fortalezas del Caso B

- **Propuesta de valor diferencial clara:** Los indicadores de ambiente (aforo, ruido, accesibilidad física) son una idea innovadora y bien fundamentada
- **Diseño visual atractivo:** El moodboard y la identidad visual son coherentes y profesionales
- **Buena accesibilidad técnica:** 90/100 en Lighthouse es una puntuación alta para un prototipo
- **Jerarquía visual efectiva** en la Landing Page, confirmada por el Eye Tracking

### 6.2 Debilidades y recomendaciones

| Problema | Impacto | Recomendación |
|---------|---------|---------------|
| Baja usabilidad para usuarios con competencia digital baja (SUS 7.5-15) | Alto | Simplificar el flujo de pedido y el Club Pajaritos con onboarding guiado |
| Los indicadores de ambiente no captan atención (Eye Tracking) | Medio | Rediseñar la sección "El Local" para destacar visualmente los indicadores de aforo y ruido |
| `user-scalable=no` impide zoom | Alto | Eliminar esta restricción del viewport |
| Diálogos sin nombre ARIA | Medio | Añadir `aria-label` a todos los `role="dialog"` |
| Imágenes sin texto alternativo | Alto | Añadir atributos `alt` descriptivos |
| Complejidad del sistema de fidelización | Alto | Reducir pasos para acumular y canjear puntos |

### 6.3 Valoración final

El proyecto Los Pajaritos es una propuesta bien conceptualizada con una identidad visual sólida y una propuesta de valor diferencial interesante. Sin embargo, necesita mejorar significativamente la usabilidad para usuarios con baja competencia digital, que representan una parte importante del público objetivo de una cafetería. Las correcciones de accesibilidad son menores y fácilmente implementables. Con estas mejoras, el proyecto tiene potencial para alcanzar una puntuación SUS de 65-70 (Bueno).

---

*Informe elaborado por DIU3.rrc como parte de la asignatura Diseño de Interfaces de Usuario, curso 2025/26, Universidad de Granada.*
