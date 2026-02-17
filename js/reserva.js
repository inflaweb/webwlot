document.addEventListener("DOMContentLoaded", () => {
    const reservaForm = document.getElementById("reservaForm");

    reservaForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Obtenemos el email del usuario desde el localStorage
        const emailUsuario = localStorage.getItem("usuario");

        if (!emailUsuario) {
            alert("Debes iniciar sesión para realizar una reserva.");
            window.location.href = "inicio.html";
            return;
        }

        const datosReserva = {
            nombre: document.getElementById("nombre").value,
            telefono: document.getElementById("telefono").value,
            fecha: document.getElementById("fecha").value,
            personas: document.getElementById("personas").value,
            paquete: document.getElementById("paquete").value,
            email: emailUsuario // Enviamos el email de la sesión activa
        };

        try {
            const response = await fetch("php/guardar_reserva.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosReserva)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                reservaForm.reset(); // Limpia el formulario tras el éxito
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            console.error("Error en la reserva:", error);
            alert("Hubo un problema al conectar con el servidor.");
        }
    });
});