import { getCurrentDate, getCurrentHour } from "./timeUtils.js";
import { saveRegisterInLocalStorage } from "./storageInLocal.js";


export function runEventsListeners(confirmarDialog, fecharDialogBtn, confirmarPonto) {
    const btnBaterPonto = document.getElementById("bater-ponto");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    btnBaterPonto.addEventListener("click", () => {
        confirmarDialog.showModal();
        mensagemSucesso.style.display = "none";
    });
    fecharDialogBtn.addEventListener("click", () => {
        confirmarDialog.close();
    });
    confirmarPonto.addEventListener("click", () =>  {
        criarPonto(confirmarDialog,mensagemSucesso)}
    );
}

function criarPonto(confirmarDialog, mensagemSucesso) {
    let typeRegister = document.getElementById("opcoes-ponto").value;

    let ponto = {
        "nome":"Iuri Games",
        "data": getCurrentDate(),
        "hora": getCurrentHour(),
        "tipo": typeRegister,
        "id": "1",
        "localizacao": {
            "latitude":"",
            "longitude":"",
        }
    };

    console.log(ponto);

    saveRegisterInLocalStorage(ponto);
    localStorage.setItem("lastTypeRegister",typeRegister);

    mensagemSucesso.style.display = "block";
    setTimeout(() => {
        confirmarDialog.close();
        mensagemSucesso.style.display = "none";
    },10000);
}