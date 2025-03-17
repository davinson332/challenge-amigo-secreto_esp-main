let amigos = [];

// Agregar amigo
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (!nombre) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

// Actualizar lista
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
    document.getElementById("tituloListaAmigos").style.display = amigos.length > 0 ? "block" : "none";
}

// Sortear amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    document.getElementById("tituloResultado").style.display = "block";
    document.getElementById("resultado").textContent = amigoSorteado;
}

// Resetear sorteo
function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("tituloListaAmigos").style.display = "none";
    document.getElementById("tituloResultado").style.display = "none";
}

// Crear fuegos artificiales
for (let i = 0; i < 20; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 10 + "vh";
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    firework.style.animationDelay = (Math.random() * 2) + "s";
    document.body.appendChild(firework);
}
