import { getCurrentDate, getCurrentHour } from "./timeUtils.js";
import { saveRegisterInLocalStorage } from "./storageInLocal.js";


export function runEventsListeners(confirmarDialog, fecharDialogBtn, confirmarPonto) {
    const btnBaterPonto = document.getElementById("bater-ponto");
    btnBaterPonto.addEventListener("click", () => {
        confirmarDialog.showModal();
    });
    fecharDialogBtn.addEventListener("click", () => {
        confirmarDialog.close();
    });
    confirmarPonto.addEventListener("click", () => criarPonto(confirmarDialog));
}

function criarPonto(confirmarDialog) {
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
    confirmarDialog.close();
}