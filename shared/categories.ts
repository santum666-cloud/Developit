export const TRAINING_AREAS = [
  "Desarrollo Full Stack",
  "Programación",
  "Preparación Entornos de Trabajo",
  "Bases de Datos",
  "Inteligencia Artificial",
  "Transformación Digital",
  "Idiomas",
  "Expresión Oral y Escrita",
  "Escritura",
  "Lectura",
] as const;

export const BLOG_CATEGORIES = [
  "Todas",
  ...TRAINING_AREAS
] as const;
