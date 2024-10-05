import { getCurrentDate, getCurrentHour } from "../utils/timeUtils.js";
import { saveRegisterInLocalStorage, updateLastRegister } from "../services/storageInLocal.js";
import { GenerateUUID } from "../utils/uuidUtils.js";
import { getLocalization } from "../services/localization.js";
import { showAlert, closeAlert } from "./alerts.js";
import { showDialog, closeDialog } from "./dialogs.js";

export function runEventsListeners() {
    const btnBaterPonto = document.getElementById("bater-ponto");
    const confirmarDialog = document.getElementById("confirmar-dialog");
    const confirmarPonto = document.getElementById("btnConfirmar");
    const fecharAlerta = document.getElementById("fechar-alerta");
    const alertaRegistro = document.getElementById("alerta-registro-de-ponto");
    const btnFecharDialog = document.getElementById("fechar-dialog");

    btnBaterPonto.addEventListener("click", () => {
        showDialog(confirmarDialog);
    });
    confirmarPonto.addEventListener("click", () => {
        criarPonto(confirmarDialog);
    });
    fecharAlerta.addEventListener("click", () => {
        closeDialog(alertaRegistro);
    })
    btnFecharDialog.addEventListener("click", () => {
        closeDialog(confirmarDialog);
    })
}

async function criarPonto(confirmarDialog) {

    let typeRegister = document.getElementById("opcoes-ponto").value;
    let localization = await getLocalization();

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
    updateLastRegister(ponto);

    closeDialog(confirmarDialog);
    showAlert();
}
