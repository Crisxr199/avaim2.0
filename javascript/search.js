function searchPublication() {
    // Obtén el valor del input de búsqueda
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Verifica si el término de búsqueda no está vacío
    if (searchTerm.trim() === "") {
        alert("Por favor, ingresa un término de búsqueda.");
        return;
    }

    // Busca en la página el término ingresado
    const elements = document.querySelectorAll("h2, p"); // Elementos donde buscar
    let found = false;

    elements.forEach((element) => {
        if (element.textContent.toLowerCase().includes(searchTerm)) {
            found = true;
            element.scrollIntoView({ behavior: "smooth", block: "center" }); // Desplázate al elemento
            element.style.backgroundColor = "#ffff99"; // Resalta el elemento
            setTimeout(() => {
                element.style.backgroundColor = ""; // Quita el resaltado después de 2 segundos
            }, 2000);
        }
    });

    // Si no se encuentra el término, muestra un mensaje
    if (!found) {
        alert("No se encontraron resultados para: " + searchTerm);
    }
}


// desenfoque para hamburguesa menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector(".nav");
    const body = document.body;

    // Función para abrir/cerrar el menú
    hamburger.addEventListener("click", function () {
        if (window.innerWidth <= 768) { // Solo activar en móviles
            nav.classList.toggle("active");
            hamburger.classList.toggle("open");

            // Aplicar o quitar el desenfoque del body (excepto el menú y el ícono)
            if (nav.classList.contains("active")) {
                const blurOverlay = document.createElement("div");
                blurOverlay.id = "blur-overlay";
                blurOverlay.style.position = "fixed";
                blurOverlay.style.top = "0";
                blurOverlay.style.left = "0";
                blurOverlay.style.width = "100%";
                blurOverlay.style.height = "100%";
                blurOverlay.style.backdropFilter = "blur(5px)";
                blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                blurOverlay.style.zIndex = "998"; // Debajo del menú y el ícono
                body.appendChild(blurOverlay);

                // Animación de despliegue del menú
                nav.style.transition = "transform 0.3s ease, opacity 0.3s ease";
                nav.style.transform = "translateY(0)";
                nav.style.opacity = "1";
            } else {
                // Eliminar el desenfoque
                const blurOverlay = document.getElementById("blur-overlay");
                if (blurOverlay) {
                    body.removeChild(blurOverlay);
                }

                // Animación de repliegue del menú
                nav.style.transform = "translateY(-100%)";
                nav.style.opacity = "0";
            }
        }
    });

    // Cerrar el menú al hacer clic en un enlace (solo en móviles)
    const navLinks = document.querySelectorAll(".nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) { // Solo en móviles
                nav.classList.remove("active");
                hamburger.classList.remove("open");

                // Eliminar el desenfoque
                const blurOverlay = document.getElementById("blur-overlay");
                if (blurOverlay) {
                    body.removeChild(blurOverlay);
                }

                // Animación de repliegue del menú
                nav.style.transform = "translateY(-100%)";
                nav.style.opacity = "0";
            }
        });
    });

    // Cerrar el menú al hacer clic fuera de él (solo en móviles)
    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 768) { // Solo en móviles
            if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                nav.classList.remove("active");
                hamburger.classList.remove("open");

                // Eliminar el desenfoque
                const blurOverlay = document.getElementById("blur-overlay");
                if (blurOverlay) {
                    body.removeChild(blurOverlay);
                }

                // Animación de repliegue del menú
                nav.style.transform = "translateY(-100%)";
                nav.style.opacity = "0";
            }
        }
    });

    // Ocultar el ícono hamburguesa en pantallas grandes
    function handleResize() {
        if (window.innerWidth > 768) {
            nav.classList.remove("active");
            hamburger.classList.remove("open");
            const blurOverlay = document.getElementById("blur-overlay");
            if (blurOverlay) {
                body.removeChild(blurOverlay);
            }
            nav.style.transform = "translateY(0)";
            nav.style.opacity = "1";
        }
    }

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar al cargar la página
});