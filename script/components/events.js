import { getCurrentDate, getCurrentHour } from "../modules/timeUtils.js";
import { saveRegisterInLocalStorage } from "../modules/storageInLocal.js";
import { GenerateUUID } from "../modules/utils.js";
import { getLocalization } from "../modules/localization.js";

export function runEventsListeners(confirmarDialog, fecharDialogBtn, confirmarPonto) {
    const btnBaterPonto = document.getElementById("bater-ponto");
    const fecharAlertaBtn = document.getElementById("fechar-alerta");
    const alertaRegistro = document.getElementById("alerta-registro-de-ponto");

    btnBaterPonto.addEventListener("click", () => {
        confirmarDialog.showModal();
    });
    fecharDialogBtn.addEventListener("click", () => {
        confirmarDialog.close();
    });
    confirmarPonto.addEventListener("click", () => {
        criarPonto(confirmarDialog, alertaRegistro);
    });
    fecharAlertaBtn.addEventListener("click", () => {
        alertaRegistro.classList.add("hidden");
    });
}

async function criarPonto(confirmarDialog, alertaRegistro) {
    let typeRegister = document.getElementById("opcoes-ponto").value;
    let localization = await getLocalization(); // Espera pela localização

    let ponto = {
        "nome": "Iuri Games",
        "data": getCurrentDate(),
        "hora": getCurrentHour(),
        "tipo": typeRegister,
        "id": GenerateUUID(),
        "localizacao": {
            "latitude": localization.latitude,
            "longitude": localization.longitude,
        }
    };

    console.log(ponto);

    saveRegisterInLocalStorage(ponto);

    localStorage.setItem("lastTypeRegister", typeRegister);
    localStorage.setItem("lastTimeRegister", ponto.hora);
    localStorage.setItem("lastDataRegister", ponto.data);

    confirmarDialog.close();

    alertaRegistro.classList.remove("hidden");

    setTimeout(() => {
        alertaRegistro.classList.add("hidden");
    },5000);
}
