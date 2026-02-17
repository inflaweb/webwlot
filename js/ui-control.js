document.addEventListener("DOMContentLoaded", () => {
    const elementosAdmin = [
        document.getElementById("adminLink"),
        document.getElementById("adminIcon"),
        document.getElementById("adminSection")
    ];
    
    const authText = document.getElementById("authText");
    const authBtn = document.getElementById("authBtn");
    const rol = localStorage.getItem("rol");
    const sesionActiva = localStorage.getItem("sesionActiva");

    // Mostrar/Ocultar elementos de administrador
    const esAdmin = (sesionActiva === "true" && rol === "admin");
    elementosAdmin.forEach(el => {
        if (el) el.style.display = esAdmin ? "block" : "none";
    });

    // Gestionar botón de Iniciar/Cerrar Sesión
    if (sesionActiva === "true" && authText) {
        authText.innerText = "Salir";
        if (authBtn) {
            authBtn.onclick = (e) => {
                e.preventDefault();
                localStorage.clear();
                alert("Has cerrado sesión");
                window.location.href = "inicio.html";
            };
        }
    }
});