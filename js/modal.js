    function abrirModalInfo() {
      MiModal.abrir({
        titulo: 'ℹ️ Información General',
        mensaje: 'Modal con contenido informativo.',
        textoBoton: 'Entendido'
      });
    }

    function abrirModalExito() {
      MiModal.abrir({
        titulo: '✅ ¡Exito!',
        mensaje: 'Guardado correctamente en el sistema.',
        textoBoton: 'Excelente'
      });
    }

    function abrirModalAlerta() {
      MiModal.abrir({
        titulo: '⚠️ Advertencia de Seguridad',
        mensaje: 'Esta acción requiere confirmación. ¿Deseas continuar?',
        textoBoton: 'Aceptar y Cerrar'
      });
    }