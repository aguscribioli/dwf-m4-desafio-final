function showFooter(el) {
    const componentEl = document.createElement("footer");
    
    componentEl.innerHTML = `
    <div class="footer_container">
            <div class="footer-container-image">
                <a href="./index.html">
                    <img src="./images/logo.png" height="100%" width="100%">
                </a>
            </div>
            <div class="footer-container-links">
                <a href="./index.html" class="footer-links">
                    <img src="./images/footer-home.png" class="footer-links-img">
                    <p class="footer-links-p">Home</p>
                </a>
                <a href="./servicios.html" class="footer-links">
                    <img src="./images/footer-user.png" class="footer-links-img">
                    <p class="footer-links-p">Servicios</p>
                </a>
                <a href="./contacto.html" class="footer-links">
                    <img src="./images/footer-phone.png" class="footer-links-img">
                    <p class="footer-links-p">Contacto</p>
                </a>
            </div>
            <div class="footer-container-redes-sociales">
                <a href="https://www.linkedin.com/in/agustin-gabriel-cribioli/" class="footer-redes-sociales">
                    <img src="./images/footer-linkedin.png" height="100%" width="100%">
                </a>
                <a href="https://github.com/aguscribioli" class="footer-redes-sociales">
                    <img src="./images/footer-github.png" height="100%" width="100%">
                </a>
            </div>
            <div class="footer-container-copyright">
                <p class="footer-copyright-p">© 2023 -</p>
                <a href="https://apx.school/" class="footer-copyright-link">https://apx.school</a>
            </div>
    </div>`

    el.appendChild(componentEl);
};