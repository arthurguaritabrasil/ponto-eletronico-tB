import { getCurrentDate, getCurrentHour } from "../modules/timeUtils.js";
import { saveRegisterInLocalStorage } from "../modules/storageInLocal.js";
import { GenerateUUID } from "../modules/utils.js";
import { getLocalization } from "../modules/localization.js";

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

async function criarPonto(confirmarDialog, mensagemSucesso) {
    let typeRegister = document.getElementById("opcoes-ponto").value;

    let localization = await getLocalization(); // esperar a promise ser resolvida

    let ponto = {
        "nome":"Iuri Games",
        "data": getCurrentDate(),
        "hora": getCurrentHour(),
        "tipo": typeRegister,
        "id": GenerateUUID(),
        "localizacao": {
            "latitude":localization.latitude,
            "longitude":localization.longitude,
        }
    };

    console.log(ponto);

    saveRegisterInLocalStorage(ponto);

    localStorage.setItem("lastTypeRegister", typeRegister);
    localStorage.setItem("lastTimeRegister", ponto.hora);
    localStorage.setItem("lastDataRegister", ponto.data);

    console.log(ponto.data);


    mensagemSucesso.style.display = "block";
    setTimeout(() => {
        confirmarDialog.close();
        mensagemSucesso.style.display = "none";
    },5000);
}