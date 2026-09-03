# Mi banco de preguntas

Sitio estático para GitHub Pages. Banco de preguntas con seguimiento de progreso por tema y por área.
Este `index.html` lee el formato `DIPLOMADO` (variable `dias`, tipos de pregunta 1/2/3), así que es compatible con bancos de preguntas ya generados en ese formato.

## Archivos

| Archivo | Función |
|---|---|
| `index.html` | Toda la aplicación (diseño y lógica). No lo edites. |
| `data.js` | Banco de preguntas. Es el único archivo que editas. Debe definir `const DIPLOMADO = { titulo, subtitulo, dias: [...] }`. |

## Publicar en GitHub Pages (una sola vez)

1. Crea un repositorio en GitHub (público o privado, funciona igual).
2. Sube `index.html` y `data.js` a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En "Branch" elige `main` y carpeta `/ (root)`. Guarda.
5. Espera 1-2 minutos. Tu sitio queda en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

## Flujo para agregar preguntas nuevas

1. Sube tu PDF o Word a Claude, en el chat.
2. Pídele que te genere el bloque de preguntas en el formato de `data.js` de este proyecto.
3. Copia el bloque que te entregue y pégalo dentro del arreglo `"temas"`, como un tema nuevo.
4. Sube el `data.js` actualizado a tu repositorio (reemplazando el anterior). GitHub Pages se actualiza solo en 1-2 minutos.

El progreso se guarda en el navegador (localStorage), así que se conserva entre visitas en el mismo dispositivo.
