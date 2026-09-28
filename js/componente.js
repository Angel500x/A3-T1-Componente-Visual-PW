const MiModal = {
  // Función principal para abrir el modal
  abrir: function (opciones = {}) {
    // 1. Configuración por defecto (si no le pasan parámetros)
    const titulo = opciones.titulo || 'Notificación';
    const mensaje = opciones.mensaje || 'Este es un mensaje modal por defecto.';
    const textoBoton = opciones.textoBoton || 'Aceptar';

    // 2. Si ya existe un modal en pantalla, lo eliminamos antes de crear uno nuevo
    this.cerrar();

    // 3. Crear el fondo oscuro (Overlay)
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'custom-modal-overlay';

    // 4. Inyectar la estructura HTML interna
    overlay.innerHTML = `
      <div class="modal-container">
        <div class="modal-header">
          <h3>${titulo}</h3>
          <button class="modal-close-btn" id="modal-btn-x">&times;</button>
        </div>
        <div class="modal-body">
          <p>${mensaje}</p>
        </div>
        <div class="modal-footer">
          <button class="modal-footer-btn" id="modal-btn-ok">${textoBoton}</button>
        </div>
      </div>
    `;

    // 5. Agregar el modal al cuerpo de la página
    document.body.appendChild(overlay);

    // 6. Activar la animación de entrada (mostrar)
    setTimeout(() => overlay.classList.add('active'), 10);

    // 7. ASIGNAR EVENTOS INTERACTIVOS (Escuchar acciones del usuario)
    
    // Clic en la X de cerrar
    document.getElementById('modal-btn-x').onclick = () => this.cerrar();

    // Clic en el botón Aceptar
    document.getElementById('modal-btn-ok').onclick = () => this.cerrar();

    // Clic fuera de la caja blanca (en la parte oscura)
    overlay.onclick = (e) => {
      if (e.target === overlay) this.cerrar();
    };

    // Presionar la tecla Escape
    document.onkeydown = (e) => {
      if (e.key === 'Escape') this.cerrar();
    };
  },

  // Función para cerrar y eliminar el modal de la pantalla
  cerrar: function () {
    const overlay = document.getElementById('custom-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      // Espera a que termine la animación CSS para removerlo del DOM
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 300);
    }
  }
};