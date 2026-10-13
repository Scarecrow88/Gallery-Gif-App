function loadGallery (containerId) {
    const container = document.getElementById (containerId);
    fetch ('./js/images.json')
        .then (response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json ();
        })
        .then (images => {
            renderImages (images, container);
        })
        .catch (error => {
            console.error ('Error al cargar images.json:', error);
        });
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
document.addEventListener ('DOMContentLoaded', function () {
    loadGallery ('gallerycontainer');
});