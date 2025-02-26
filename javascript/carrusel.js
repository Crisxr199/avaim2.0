document.addEventListener('DOMContentLoaded', () => {
    const carruselInner = document.querySelector('.carrusel-inner');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        if (currentIndex < carruselInner.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarrusel();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carruselInner.children.length - 1;
        }
        updateCarrusel();
    });

    function updateCarrusel() {
        const offset = -currentIndex * 100;
        carruselInner.style.transform = `translateX(${offset}%)`;
    }
});

//IFRAME

 // Cargar la API de YouTube
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-video', {
            events: {
                'onReady': onPlayerReady
        }
    });
}

 function onPlayerReady(event) {
     // Aquí puedes controlar el video
     event.target.playVideo(); // Reproducir automáticamente
 }

// CARROUSEL 2

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".ali");

    // Cargar imágenes desde el atributo data-src
    images.forEach(img => {
        img.src = img.getAttribute("data-src");
    });
});