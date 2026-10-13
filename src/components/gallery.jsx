import '../css/figureGalleryContent.css';
import { useEffect, useState } from "react";
function Gallery () {
    const [images, setImages] = useState ([]);
    useEffect (() => {
        fetch ("./js/images.json")
            .then ((response) => {
                if (!response.ok) {
                    throw new Error (`Error HTTP: ${response.status}`);
                }
                return response.json ();
            })
            .then ((data) => {
                setImages (data);
            })
            .catch ((error) => {
                console.error ("Error al cargar images.json:", error);
            });
    }, []);
    return (
        <section className="figuregallerybox">
            <div id="gallerycontainer">
                {images.map ((img, index) => (
                    <figure className="figureitem" key={index}>
                        <img src={img.src} alt={img.alt} />
                        <figcaption>{img.caption}</figcaption>
                        <div className="worklayer"></div>
                    </figure>
                ))}
            </div>
        </section>
    );
}
export default Gallery;