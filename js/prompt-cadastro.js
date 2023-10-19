function invokePrompt() {
    let modalBG = document.createElement("div");
    document.body.appendChild(modalBG);
    modalBG.setAttribute("id", "modal-cadastro");
    modalBG.innerHTML = `
    \n<div class="cadastro-box">
    \n\t<span id="exit">&#10006;</span>
    \n\t<div class="container">
    \n\t\t<h2>Palmilhas Terapêuticas: da Ciência aos Negócios</h2><br>
    \n\t\t<h3>Inscreva-se já!</h3>
    \n\t</div>
    \n\t<form id="cadastro-prompt">
    \n\t\t<input type="text" name="user_name" id="cadastro_nome" placeholder="Seu nome...">
    \n\t\t<input type="email" name="user_email" id="cadastro_email" placeholder="Seu e-mail...">
    \n\t\t<button type="submit" class="my-button">ENVIAR</button>
    \n\t</form>
    \n</div>
    `;
    let box = modalBG.firstElementChild;
    setTimeout(() => {
        modalBG.style.opacity = "1";
        box.style.opacity = "1";
        box.style.top = "0";
    }, 10);
    document.getElementById("exit").addEventListener("click", () => {
        box.style.top = box.clientHeight + window.innerHeight + "px";
        modalBG.style.opacity = "0";
        setTimeout(modalBG.remove(), 2000);
    });
};


