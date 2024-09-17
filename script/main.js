import { runEventsListeners } from "./components/events.js";
import { getLastPoint } from "./modules/storageInLocal.js";
import { getCurrentDay, getCurrentDate, getCurrentHour, printCurrentHour } from "./modules/timeUtils.js";

const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-minuto-segundo");
const dataDialog = document.getElementById("data-dialog");
const horaDialog = document.getElementById("hora-dialog");
const confirmarDialog = document.getElementById("confirmar-dialog");
const fecharDialogBtn = document.getElementById("fechar-dialog");
const confirmarPonto = document.getElementById("btnConfirmar");
const lastPoint = document.getElementById("ultimo-ponto");

diaSemana.textContent = getCurrentDay();
diaMesAno.textContent = getCurrentDate();
horaMinSeg.textContent = getCurrentHour();

dataDialog.textContent = "Data: " + getCurrentDate();

setInterval(() => printCurrentHour(horaMinSeg,horaDialog),1000);

runEventsListeners(confirmarDialog, fecharDialogBtn, confirmarPonto);

setInterval(() => {
    lastPoint.textContent = getLastPoint();
});