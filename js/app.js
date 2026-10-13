function loadGallery (containerId) {
    const container = document.getElementById (containerId);
    const xhr = new XMLHttpRequest ();
    xhr.open ('GET', './js/images.json', true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status === 200) {
            const images = xhr.response;
            renderImages (images, container);
        } 
        else {
            console.error ('Error al cargar images.json:', xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error ('Error de red al intentar cargar images.json');
    };
    xhr.send ();
}
function renderImages (images, container) {
    container.innerHTML = ''; // Limpia antes de renderizar
    images.forEach (function (img) {
        const figure = document.createElement ('figure');
        figure.className = 'figureitem';
        const image = document.createElement ('img');
        image.src = img.src;
        image.alt = img.alt;
        const caption = document.createElement ('figcaption');
        caption.textContent = img.caption;
        const workLayer = document.createElement ('div');
        workLayer.className = 'worklayer';
        figure.appendChild (image);
        figure.appendChild (caption);
        figure.appendChild (workLayer);
        container.appendChild (figure);
    });
}
// Ejecutar cuando el DOM esté listo
document.addEventListener ('DOMContentLoaded', function () {
    loadGallery ('gallerycontainer');
});