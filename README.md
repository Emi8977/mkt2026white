# The Osas | Marketing & Ads — White

Landing page de una sola página para The Osas, una agencia de marketing y publicidad enfocada en estrategia, publicidad digital, contenido y crecimiento comercial.

## Stack

- React 18 con JavaScript y JSX
- Vite como herramienta de desarrollo y build
- CSS propio con variables y layout centralizado en `src/styles/`
- `framer-motion` para animaciones sutiles
- `lucide-react` para iconos
- `react-helmet-async` para SEO y metadatos dinámicos

## Qué incluye la web

La aplicación está pensada como una landing page comercial de alto impacto, con foco en conversión y claridad de oferta.

### Secciones principales

1. Header con navegación por secciones y botón principal de WhatsApp.
2. Hero con propuesta de valor, CTAs principales y panel visual.
3. Nosotros con historia, enfoque y presentación del equipo.
4. Servicios con oferta clara en estrategia, anuncios y contenidos visuales.
5. Cotizador interactivo integrado con WhatsApp para diagnosticar la necesidad de la marca.
6. Sectores con copy más fluido, sin lenguaje artificial ni placeholders.
7. Proceso con el flujo de trabajo de The Osas.
8. Casos con estilo preparado para mostrar resultados reales.
9. FAQ con acordeón para responder dudas frecuentes.
10. Contacto con formulario validado y envío real por Formspree.
11. Footer con branding, redes y política de privacidad.

### Arquitectura del proyecto

- `src/App.jsx`: shell principal y composición de la landing
- `src/data/site.js`: contenido central del sitio (copy, enlaces, servicios, FAQs, contacto)
- `src/components/layout/`: header, footer y política de privacidad
- `src/components/sections/`: cada bloque visible del sitio
- `src/styles/`: tokens, estilos globales y layout responsive
- `public/`: logo, favicon, imágenes y assets estáticos para Vercel

## Cambios implementados recientemente

- Se creó la versión visual “White”, con fondo blanco predominante y una identidad más limpia, corporativa y expresiva.
- Se aplicaron bordes lila gruesos en tarjetas, pasos, resultados, FAQ y elementos destacados.
- Se incorporaron estados hover en verde para los desplegables FAQ y CTAs principales.
- Se corrigió y dejó operativo el menú hamburguesa mobile.
- Se removed el enlace “Cotizador” del navbar para simplificar la navegación principal.
- El CTA principal sigue siendo por WhatsApp y el flujo del cotizador permanece disponible desde otras partes del sitio.
- Se ajustó la copy para evitar text placeholders y lenguaje repetitivo.
- Se dejaron los assets estáticos en `public/` para que funcionen correctamente en Vercel.
- Se integró el formulario con Formspree: `https://formspree.io/f/meaogwkw`.
- Se centralizó el contenido en `src/data/site.js` para facilitar futuras ediciones.
- Se agregaron metadatos SEO y estructura JSON-LD para mejorar la indexación.

## Diseño y UX

La versión White usa un estilo minimalista y corporativo con carácter. El fondo blanco domina la experiencia, mientras el lila estructura paneles y tarjetas, y el verde identifica acciones y estados interactivos. El diseño prioriza claridad, lectura rápida y llamados a la acción visibles.

### Paleta de la versión White

- **Primario de marca:** `#3b3bf4` para navegación, bordes fuertes, títulos destacados y elementos de identidad.
- **Secundario / CTA:** `#caf93a` para botones principales, acciones de WhatsApp y estados hover.
- **Blanco de marca:** `#e9e9ff` para fondos suaves, etiquetas y superficies de apoyo.
- **Lila:** `#9b9bdd` para navbar, panel Level UP, formulario de contacto y tarjetas destacadas.
- **Lila oscuro de contraste:** `#8585c7` para los desplegables de FAQ.
- **Texto principal:** `#17172f` para una lectura oscura sobre fondos claros.

La tipografía prioriza `Articulat CF` para títulos y textos, con `DM Sans` como fallback web disponible. Las animaciones se mantienen sutiles y respetan `prefers-reduced-motion`.

La navegación por sección se maneja con scroll suave y URL limpia, evitando hashes innecesarios en la barra del navegador. También se incorpora soporte para `prefers-reduced-motion` para mejorar la accesibilidad.

## SEO y metadatos

La landing usa `react-helmet-async` para actualizar título, descripción, Open Graph, Twitter Card y canonical URL de forma dinámica.

También se generan datos estructurados con JSON-LD para servicios y FAQ, mejorando la comprensión del sitio por parte de buscadores.

## Formspree y WhatsApp

- Formulario de contacto: https://formspree.io/f/meaogwkw
- WhatsApp principal: configurable desde `src/data/site.js`
- Cotizador: genera un mensaje listo para enviar por WhatsApp con la información de diagnóstico

## Google Analytics 4

La integración de GA4 está preparada de forma opcional mediante una variable de entorno de Vite. Mientras no se configure un ID real, no se carga ningún script de Google y la web sigue funcionando normalmente.

### Configuración local

1. Copiar `.env.example` como `.env`.
2. Reemplazar el placeholder por el ID de medición real de GA4:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Reiniciar el servidor de desarrollo después de modificar `.env`.

El ID debe tener el formato `G-XXXXXXXXXX`. No se deben guardar credenciales privadas en variables `VITE_`, ya que son valores visibles en el navegador.

### Configuración en Vercel

En el proyecto de Vercel, ir a **Settings > Environment Variables** y crear:

- Name: `VITE_GA_MEASUREMENT_ID`
- Value: el ID real de medición de GA4
- Environments: `Production`, `Preview` y `Development` según corresponda

Después de guardar la variable, ejecutar un nuevo deploy. La integración inicializa GA4 una sola vez y deja disponible `trackEvent` para eventos de conversión como el inicio y finalización del cotizador.

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Generar una build de producción:

```bash
npm run build
```

Vista previa de la build:

```bash
npm run preview
```

## Deploy

Este proyecto está orientado a despliegue en Vercel.

Recomendaciones:

- Mantener los archivos públicos en `public/`
- Confirmar el dominio final antes de lanzar en producción
- Revisar la configuración de `siteContent.brand.domain` y enlaces canonicals
- Validar los enlaces de WhatsApp y Formspree en producción

## Estado actual

- Landing funcional y responsive
- Menú mobile operativo
- Navbar limpio sin el enlace de Cotizador
- Logotipo y favicon integrados
- Copy revisada y lista para presentación
- Formulario conectado con Formspree
- GA4 preparado con variable de entorno, pendiente de cargar el ID de medición real
- Build validada con `npm run build`

## Pendientes opcionales

- Confirmar dominio definitivo
- Reemplazar casos genéricos por casos reales aprobados
- Revisar detalle final de SEO y performance en producción