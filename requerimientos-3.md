# Requerimientos 3

## Configuración de WhatsApp para el desarrollador

### Botón final del cotizador

El botón final del cotizador debe abrir WhatsApp con un mensaje prellenado a partir de las respuestas del wizard.

**URL base:**

```text
https://wa.me/5492615157515?text=[MENSAJE_CODIFICADO]
```

### Lógica

El valor de `[MENSAJE_CODIFICADO]` se arma dinámicamente con las cuatro partes del wizard:

1. Servicio
2. Sector
3. Etapa
4. Datos de contacto

El mensaje debe codificarse en formato URL utilizando `encodeURIComponent` antes de incorporarse al enlace de WhatsApp.

### Mensaje base

```text
Hola! Vengo desde la web de The Osas. Me interesa: [SERVICIO].

Mi marca está en el sector [SECTOR], en etapa [ETAPA].

Mi nombre es [NOMBRE] y mi contacto es [EMAIL/TEL].
```

### Comportamiento esperado

- El usuario completa el cotizador.
- El sistema recopila las selecciones de Servicio, Sector, Etapa y Datos de contacto.
- Se reemplazan los valores dinámicos del mensaje base.
- Se genera el mensaje final.
- Se aplica `encodeURIComponent(message)`.
- Se construye la URL final con `https://wa.me/`.
- Se abre WhatsApp para que el usuario revise y envíe el mensaje.

El frontend no debe enviar automáticamente el mensaje. Solo debe abrir WhatsApp con el contenido prellenado.

### Configuración

El número de WhatsApp debe mantenerse en una única constante o fuente de configuración para evitar hardcodearlo en varios componentes.