# Instrucciones de Deployment - Developit

## Archivo de Build
**Archivo:** `developit-test-build.tar.gz` (13 MB)

## Pasos para Deployment en Hostinger

### 1. Subir el archivo al servidor
- Accede al panel de control de Hostinger
- Ve al administrador de archivos (File Manager)
- Navega al directorio raíz de tu dominio (normalmente `public_html`)

### 2. Descomprimir el archivo
```bash
# Sube developit-test-build.tar.gz a public_html
# Luego ejecuta en el terminal SSH o usa la opción de extraer del File Manager:
tar -xzf developit-test-build.tar.gz
```

### 3. Verificar estructura
Después de descomprimir, deberías tener:
```
public_html/
  └── test/
      ├── .htaccess
      ├── index.html
      ├── favicon.png
      └── assets/
          ├── index-[hash].css
          ├── index-[hash].js
          └── [imágenes].png
```

### 4. Configuración del .htaccess
El archivo `.htaccess` ya está incluido en `/test/` con:
- ✅ Routing SPA (todas las rutas redirigen a index.html)
- ✅ Compresión GZIP para mejor rendimiento
- ✅ Caché de assets estáticos (imágenes, CSS, JS)
- ✅ Headers de seguridad (X-Frame-Options, X-Content-Type-Options)
- ✅ RewriteBase configurado para `/test/`

### 5. Acceder a la aplicación
Tu sitio estará disponible en:
```
https://tudominio.com/test/
```

## Funcionalidades Incluidas

### Páginas
- ✅ Home con hero carousel
- ✅ Cursos (con filtros por categoría vía URL)
- ✅ Blog (con búsqueda y filtros)
- ✅ Nosotros
- ✅ Carreras
- ✅ Contacto (formulario)
- ✅ Login y Registro
- ✅ Política de Privacidad
- ✅ Páginas de curso individual y módulos

### Componentes Flotantes
- ✅ **Chatbot**: Asistente virtual en todas las páginas (esquina inferior derecha)
- ✅ **Scroll to Top**: Botón para volver arriba (aparece al hacer scroll)
- Ambos botones tienen el mismo tamaño (48px × 48px) y están apilados verticalmente

### Navegación
- ✅ Menú con 11 áreas de formación en dropdown
- ✅ Links del footer funcionan correctamente
- ✅ Filtros de cursos por categoría desde footer
- ✅ Modo claro/oscuro (theme toggle)
- ✅ Scroll automático al cambiar de página

### Tecnologías
- React + TypeScript
- Vite (build optimizado)
- Tailwind CSS
- Shadcn/ui components
- SPA routing con Wouter

## Notas Importantes
- La aplicación es una SPA (Single Page Application), por eso necesita el .htaccess
- Las rutas funcionan correctamente gracias a la configuración de RewriteBase
- Los assets están versionados con hash para evitar problemas de caché
- La compresión está habilitada para mejor rendimiento

## Soporte
Si encuentras algún problema con el deployment, verifica:
1. Que el archivo .htaccess esté en `/test/` (no en la raíz)
2. Que mod_rewrite esté habilitado en el servidor
3. Que los permisos de archivos sean correctos (644 para archivos, 755 para directorios)
