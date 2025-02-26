// Lazy Loading para imágenes
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-src]");

    const lazyLoad = (img) => {
        img.setAttribute("src", img.getAttribute("data-src"));
        img.onload = () => {
            img.removeAttribute("data-src");
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach((img) => {
        observer.observe(img);
    });
});

// Precarga de imágenes importantes
const preloadImages = () => {
    const imagesToPreload = [
        "banco de imagenes/1.webp",
        "banco de imagenes/2.webp",
        "banco de imagenes/3.webp",
        "banco de imagenes/4.webp",
        "banco de imagenes/5.webp",
        "banco de imagenes/6.webp",
        "banco de imagenes/7.webp",
        "banco de imagenes/8.webp",
        "banco de imagenes/9.webp",
        "banco de imagenes/10.webp",
        "aliadosimg/a1.webp",
        "aliadosimg/a2.webp",
        "aliadosimg/a3.webp",
        "aliadosimg/a4.webp",
        "aliadosimg/a5.webp",
        "aliadosimg/a6.webp",
        "aliadosimg/a7.webp",
        "aliadosimg/a8.webp",
        "banco de imagenes/face.webp",
        "banco de imagenes/ing.webp",
        "banco de imagenes/x.webp",
        "banco de imagenes/y.webp",
    ];

    imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

// Precargar imágenes cuando el navegador esté inactivo
if ("requestIdleCallback" in window) {
    requestIdleCallback(preloadImages);
} else {
    // Si el navegador no soporta requestIdleCallback, precargar inmediatamente
    preloadImages();
}