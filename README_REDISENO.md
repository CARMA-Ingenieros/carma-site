# CARMA · Rediseño HDPE + Servicios Ambientales

## Alcance
Rediseño integral de interfaz y contenido en español. Dos líneas comerciales: soluciones HDPE (termofusión, electrofusión, instalación/mantenimiento) y servicios ambientales (monitoreo, estudios, supervisión, asesoría/permisos, residuos y capacitación).

18 páginas estáticas: inicio; nosotros; dos líneas comerciales; nueve servicios; sectores; contacto; privacidad; confirmación; error 404. No se publican construcción general, ingeniería general ni Analytics. Sus rutas anteriores redirigen al inicio.

## Construcción
Requiere Node.js 18 o posterior; Netlify usa Node.js 22. No requiere instalar dependencias.

```sh
npm run check
npm run build
node tests/audit.mjs
```

La carpeta publicada es `public/`, configurada en `netlify.toml`. Los archivos HTML anteriores en la raíz se conservan como antecedente, pero NO forman parte de la nueva publicación. No editar `public/`: se regenera.

- `web/build.mjs`: contenido, servicios, plantillas y generación de páginas.
- `web/site.css`: identidad visual y diseño adaptable.
- `web/site.js`: menú, filtros, presentación, cotización y WhatsApp.
- `img/brand.webp`: adaptación horizontal del logotipo CARMA proporcionado por el titular, sin redibujar el símbolo.
- `img/ambiental.png`, `img/hdpe.png`: imágenes preexistentes del repositorio, utilizadas como ilustración, no como acreditación de experiencia.

## Referencias de diseño
Se tomaron referencias de composición y organización de Ogreen, Hamek y ForestSoil: grandes cabeceras fotográficas, categorías de servicios, fichas interiores, bloques de información y contacto visible. El código y los textos son nuevos; no se copiaron clientes, proyectos, certificaciones, fotografías ni contenidos de esos competidores.
- https://ogreen.com.pe/
- https://hamek.com.pe/
- https://forestsoil.com.pe/servicios/

## Contactos
Se conservó el correo verificado en el sitio existente: `contacto@carmaingenieros.com`. WhatsApp: `51967051416`. Ubicación: Tacna, Perú. Los datos están centralizados en `SITE` en `web/build.mjs`. El teléfono de WhatsApp también figura en `web/site.js`.

## Formulario y publicación
Formulario estático `cotizacion-carma`, preparado para Netlify Forms, con honeypot y consentimiento. La detección de formularios y las notificaciones al correo deben comprobarse en la administración de Netlify después del despliegue. No se ha enviado una solicitud comercial real ni se ha verificado recepción de correo.

El botón de WhatsApp prepara el mensaje; el visitante debe enviarlo dentro de WhatsApp. La vista local nunca muestra un envío de formulario como exitoso. No se incorporaron analítica, cookies publicitarias ni credenciales.

Antes de fusionar/publicar: revisar la vista previa, confirmar especialidades efectivamente disponibles, comprobar formulario y política de tratamiento de datos con la operación real de la empresa. No se anuncian equipos propios, acreditaciones, aprobaciones garantizadas o experiencia no verificada.

## Validación
Compilación y sintaxis verificadas localmente. Revisión de las 18 páginas a 320, 390, 768 y 1440 px: sin desbordamientos laterales ni errores JavaScript en esa prueba. Menú móvil, cierre con Escape, filtros (3 HDPE / 3 ambientales / 6 en inicio) y campos HDPE comprobados. El script `tests/audit.mjs` comprueba rutas locales, anclas, títulos únicos, H1 y formulario.

Las capturas y la maqueta local adjuntas utilizan fotografías ilustrativas de archivos proporcionados previamente por el titular; la rama GitHub conserva las fotografías preexistentes del repositorio. La composición y el código son los mismos, pero esas capturas no son capturas de un despliegue público.

La entrega se realiza en la rama `rediseno-hdpe-ambiental` para revisión mediante pull request. Crear el pull request no equivale a publicar en el dominio de producción. Para revertir un eventual despliegue, volver al despliegue anterior de Netlify o revertir el commit de integración; el historial original no se elimina.
