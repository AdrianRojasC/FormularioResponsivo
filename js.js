document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-registro');
    const resumenCompra = document.createElement('div');
    resumenCompra.id = 'resumen-compra';
    const resumenYagradecimiento = document.querySelector('.resumen-y-agradecimiento');
    resumenYagradecimiento.appendChild(resumenCompra);

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombreCompleto = document.getElementById('nombre-completo');
        const correo = document.getElementById('correo');
        const telefono = document.getElementById('telefono');
        const tipoEntrada = document.getElementById('tipo-entrada');

        const esValido = [nombreCompleto, correo, telefono, tipoEntrada].every((campo) => campo.checkValidity());

        if (esValido) {
            // Mostrar resumen de compra
            resumenCompra.innerHTML = `
                <h2>Resumen de compra</h2>
                <p>Nombre: ${nombreCompleto.value}</p>
                <p>Correo: ${correo.value}</p>
                <p>Teléfono: ${telefono.value}</p>
                <p>Tipo de Entrada: ${tipoEntrada.value}</p>
            `;

            // Mostrar mensaje de agradecimiento
            const gracias = document.createElement('div');
            gracias.id = 'gracias';
            gracias.textContent = '¡Gracias por tu registro, en breve recibiras un correo!';
            resumenYagradecimiento.appendChild(gracias);

            // Reiniciar formulario
            formulario.reset();
        }
    });
});
