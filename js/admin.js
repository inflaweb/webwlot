document.addEventListener("DOMContentLoaded", function () {
    verificarAdmin();
    cargarReservas();
});

function verificarAdmin() {
    if (localStorage.getItem("sesionActiva") !== "true") {
        alert("Debes iniciar sesión");
        window.location.href = "inicio.html";
    }

    if (localStorage.getItem("rol") !== "admin") {
        alert("Acceso solo para administrador");
        window.location.href = "inicio.html";
    }
}

function cargarReservas() {
    const tabla = document.querySelector("#tablaReservas tbody");
    tabla.innerHTML = "";

    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    reservas.forEach((reserva, index) => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${reserva.nombre}</td>
            <td>${reserva.telefono}</td>
            <td>${reserva.fecha}</td>
            <td>${reserva.personas}</td>
            <td>${reserva.paquete}</td>
            <td>
                <button onclick="editarReserva(${index})">Editar</button>
                <button onclick="eliminarReserva(${index})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

function eliminarReserva(index) {
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.splice(index, 1);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    cargarReservas();
}

function editarReserva(index) {
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    const nuevoNombre = prompt("Nuevo nombre:", reservas[index].nombre);
    const nuevoTelefono = prompt("Nuevo teléfono:", reservas[index].telefono);

    if (nuevoNombre && nuevoTelefono) {
        reservas[index].nombre = nuevoNombre;
        reservas[index].telefono = nuevoTelefono;

        localStorage.setItem("reservas", JSON.stringify(reservas));
        cargarReservas();
    }
}
