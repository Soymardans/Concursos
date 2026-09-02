/* ═══════════════════════════════════════════════════════════
   BANCO DE PREGUNTAS — archivo de datos
   ═══════════════════════════════════════════════════════════
   Este es el ÚNICO archivo que editas. No toques index.html.

   Formato de cada pregunta:
   { "c": "Área o categoría", "q": "Enunciado...",
     "o": ["Opción A","Opción B","Opción C","Opción D"],
     "a": 1,   // índice (0=A,1=B,2=C,3=D) de la respuesta correcta
     "e": "Explicación de por qué es esa la respuesta.",
     "b": "Fuente o fundamento (opcional)." }

   Para agregar un tema nuevo, copia un bloque completo dentro
   de "temas" (no olvides la coma entre bloques) y cámbiale el
   id, título y preguntas.
   ═══════════════════════════════════════════════════════════ */

const BANCO = {
  "kicker": "Estudio personal",
  "titulo": "Mi banco de preguntas",
  "subtitulo": "Práctica por temas, con seguimiento de progreso guardado en este navegador.",
  "temas": [
    {
      "id": "tema-ejemplo",
      "titulo": "Tema de ejemplo",
      "preguntas": [
        {
          "c": "Ejemplo",
          "q": "Esta es una pregunta de ejemplo. ¿Cuál opción es la correcta?",
          "o": ["Opción A", "Opción B (correcta)", "Opción C", "Opción D"],
          "a": 1,
          "e": "Esta es la explicación de por qué la opción B es la correcta.",
          "b": "Fuente o referencia (opcional)."
        }
      ]
    }
  ]
};
