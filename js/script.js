const images = [
    'img/fondo1.jpeg',
    'img/fondo2.jpeg',
    'img/fondo3.jpeg',
    

];

// Selecciona el contenedor <main> como fondo dinámico
const mainElement = document.querySelector('main');

let currentIndex = 0;

// Función para cambiar el fondo
function changeBackground() {
    mainElement.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Ciclo entre imágenes
}

// Cambia la imagen cada 5 segundos (5000 ms)
setInterval(changeBackground, 5000);

// Inicializa el fondo con la primera imagen
changeBackground();



function toggleMenu() {
    document.querySelector('.navMenu').classList.toggle('active');
}



document.getElementById("btnRevsita").addEventListener("click", function() {
    window.location.href = "ediciones.html";
});


function mostrarAlerta() {
    alert("Lo sentimos, esta información no está disponible. Pruebe más tarde.");
}
