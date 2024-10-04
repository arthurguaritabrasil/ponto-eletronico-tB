import { getCurrentDate, getCurrentHour } from "../modules/timeUtils.js";
import { saveRegisterInLocalStorage } from "../modules/storageInLocal.js";
import { GenerateUUID } from "../modules/utils.js";
import { getLocalization } from "../modules/localization.js";
import { alternateDisplay } from "../modules/utils.js";

export function runEventsListeners() {
    const btnBaterPonto = document.getElementById("bater-ponto");
    const fecharAlertaBtn = document.getElementById("fechar-alerta");
    const alertaRegistro = document.getElementById("alerta-registro-de-ponto");
    const confirmarDialog = document.getElementById("confirmar-dialog");
    const fecharDialogBtn = document.getElementById("fechar-dialog");
    const confirmarPonto = document.getElementById("btnConfirmar");

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
        alternateDisplay('alerta-registro-de-ponto');
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

    alertaRegistro.style.display = 'block';

    setTimeout(() => {
        alertaRegistro.style.display = 'none'; // ok
    },5000);
}
