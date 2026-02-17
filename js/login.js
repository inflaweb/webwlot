document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Ruta actualizada a la carpeta php/
    const response = await fetch("php/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
        localStorage.setItem("sesionActiva", "true");
        localStorage.setItem("rol", data.rol);
        localStorage.setItem("usuario", data.usuario);
        window.location.href = (data.rol === "admin") ? "admin.html" : "index.html";
    } else {
        alert(data.message);
    }
});