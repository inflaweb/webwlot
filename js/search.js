async function buscarPaquetes() {

    const keyword = document.getElementById("searchInput").value;
    const duracion = document.getElementById("duracion").value;
    const meseros = document.getElementById("meseros").value;

    const response = await fetch(`search.php?keyword=${keyword}&duracion=${duracion}&meseros=${meseros}`);
    const data = await response.json();

    const container = document.querySelector('.container');
    container.innerHTML = "";

    data.forEach(paquete => {
        container.innerHTML += `
            <div class="card">
                <h2>${paquete.name}</h2>
                <h3>${paquete.comida}</h3>
                <p>${paquete.descripcion}</p>
                <p><strong>Duración:</strong> ${paquete.duracion}</p>
                <p><strong>Meseros:</strong> ${paquete.meseros}</p>
            </div>
        `;
    });
}
