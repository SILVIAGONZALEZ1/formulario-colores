const form = document.getElementById('registroForm');
const contrasena = document.getElementById('contrasena');
const confirmar = document.getElementById('confirmar');
const tooltipContrasena = document.getElementById('tooltipContrasena');

// Función para mostrar tooltips
function mostrarTooltip(event) {
    const tooltip = event.target.nextElementSibling;
    tooltip.style.display = 'block';
}

// Función para ocultar tooltips
function ocultarTooltip(event) {
    const tooltip = event.target.nextElementSibling;
    tooltip.style.display = 'none';
}

// Eventos para tooltips
tooltipContrasena.addEventListener('mouseover', mostrarTooltip);
tooltipContrasena.addEventListener('mouseout', ocultarTooltip);

// Validar confirmación de contraseña
confirmar.addEventListener('input', function() {
    const contrasenaValue = contrasena.value.trim();
    const confirmarValue = confirmar.value.trim();

    if (confirmarValue === '') {
        document.getElementById('feedbackConfirmar').textContent = '';
        return;
    }

    if (contrasenaValue === confirmarValue) {
        document.getElementById('feedbackConfirmar').textContent = 'Las contraseñas coinciden.';
        document.getElementById('feedbackConfirmar').style.color = 'green';
    } else {
        document.getElementById('feedbackConfirmar').textContent = 'Las contraseñas no coinciden.';
        document.getElementById('feedbackConfirmar').style.color = 'red';
    }
});

// Validar longitud de contraseña al perder el foco
contrasena.addEventListener('blur', function() {
    const contrasenaValue = contrasena.value.trim();

    if (contrasenaValue.length < 8) {
        document.getElementById('feedbackContrasena').textContent = 'La contraseña debe tener al menos 8 caracteres.';
    } else {
        document.getElementById('feedbackContrasena').textContent = '';
    }
});

// Validar email al perder el foco
document.getElementById('email').addEventListener('blur', function() {
    const emailValue = this.value.trim();

    if (!validarEmail(emailValue)) {
        document.getElementById('feedbackEmail').textContent = 'Ingrese un email válido.';
    } else {
        document.getElementById('feedbackEmail').textContent = '';
    }
});

// Validar nombre al perder el foco
document.getElementById('nombre').addEventListener('blur', function() {
    const nombreValue = this.value.trim();

    if (nombreValue === '') {
        document.getElementById('feedbackNombre').textContent = 'Por favor, ingrese su nombre.';
    } else {
        document.getElementById('feedbackNombre').textContent = '';
    }
});

// Función para validar email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
