async function enviarForm() {
    const formEl = document.querySelector(".contact-form");
  
    formEl.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const nameForm = formEl.querySelector(".form-input-name").value;
      const emailForm = formEl.querySelector(".form-input-email").value;
      const messageForm = formEl.querySelector(".form-textarea").value;
  
      const objData = {
        to: "aguscribioli@gmail.com",
        message: `
            <u><b>Nombre</b></u>: ${nameForm}
            <br><br><u><b>Email</b></u>: ${emailForm}
            <br><br><u><b>Mensaje</b></u>: ${messageForm}
            `,
      };
  
      const url = "https://apx-api.vercel.app/api/utils/dwf";
  
      await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(objData),
      });
      formEl.reset();
    });
}

function contactComponent(el) {
    const componentEl = document.createElement("div");

    componentEl.innerHTML = `
    <div class="contacto_form-container">
        <div class="contacto_title">
            <h2>Escribime</h2>
        </div>
        <form class="contact-form">
            <div class="form-input-desktop">
                <label for="" class="form-label">
                    <div class="form-name">Nombre</div>
                    <input class="form-input-name" type="text" placeholder="Tu nombre">
                </label>
                <label for="" class="form-label">
                    <div class="form-name">Email</div>
                    <input class="form-input-email" type="email" placeholder="tu@mail.com">
                </label>
            </div>
            <label for="" class="form-label">
                <div class="form-name">Mensaje</div>
                <textarea class="form-textarea"></textarea>
            </label>
            <button class="form-button">
                <div class="form-button-text">Enviar</div>
                <img class="form-button-img" src="./images/form-button-img.png">
            </button>
        </form>
    </div>
    `;

    el.appendChild(componentEl)
    enviarForm();
}