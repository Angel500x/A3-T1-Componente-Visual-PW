# 🚀 Componente Visual: Modal Interactivo Reutilizable (JS Vanilla)

---

## 📌 Portada y Descripción General

* **Proyecto:** Componente Visual Modal
* **Materia:** Programación Web
* **Tecnologías:** HTML5, CSS3, JavaScript — *Sin frameworks ni librerías externas.*

### ❓ ¿Qué problema resuelve este componente?
En la creación de interfaces web interactivas, interrumpir la navegación para mostrar avisos, alertas de confirmación o contenido emergente suele requerir código repetitivo o dependencias pesadas como Bootstrap o bibliotecas externas. 

**`MiModal`** resuelve este problema ofreciendo un componente ligero, dinámico y totalmente reutilizable que genera e inyecta la ventana emergente en el DOM únicamente cuando se necesita, gestionando sus propios estilos, animaciones y eventos de cierre de forma independiente.

---

## 📦 Instalación e Integración

Para incluir **MiModal** en cualquier proyecto web, integra los archivos `componente.css` y `componente.js` en el archivo HTML:

```
html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Proyecto Web</title>
  
  <!-- 1. Estilos del componente visual -->
  <link rel="stylesheet" href="css/componente.css">
</head>
<body>

  <!-- Contenido de tu página -->

  <!-- 2. Script de la librería del componente -->
  <script src="js/componente.js"></script>
</body>
</html>
```

## Guía de Uso y Ejemplos de Código
El componente expone el objeto global MiModal con su método .abrir(). se puede personalizar el título, mensaje y texto del botón.
NOTA: Se puede crear otro archivo js con esta guia de uso para despues solo importarlo en el html

### 1. Modal Informativo Básico
```
MiModal.abrir({
  titulo: 'ℹ️ Información General',
  mensaje: 'Modal con contenido informativo.',
  textoBoton: 'Entendido'
});
```

### 2. Modal de Confirmación o Éxito
```
MiModal.abrir({
  titulo: '✅ ¡Operación Exitosa!',
  mensaje: 'Guardado correctamente en el sistema.',
  textoBoton: 'Excelente'
});
```
### 3. Modal de Advertencia o Seguridad
```
MiModal.abrir({
  titulo: '⚠️ Advertencia de Seguridad',
  mensaje: 'Esta acción requiere confirmación. ¿Deseas continuar con el proceso?',
  textoBoton: 'Aceptar y Cerrar'
});
```