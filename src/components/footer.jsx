import React from 'react';
import '../css/footerContent.css';
function Footer () {
    return (
        <footer className="footerleads">
            <h2>Contactanos</h2>
                <div className="footerform">
                    <input type="email" placeholder="Tu correo"/>
                    <button>Enviar</button>
                </div>
                <p>© 2026 Todos los derechos reservados</p>
        </footer>
    );
}
export default Footer;