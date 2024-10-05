import { runEventsListeners } from "./components/events.js";
import { getLastPoint } from "./services/storageInLocal.js";
import { getCurrentDay, getCurrentDate, getCurrentHour, printCurrentHour } from "./utils/timeUtils.js";

const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-minuto-segundo");
const dataDialog = document.getElementById("data-dialog");
const horaDialog = document.getElementById("hora-dialog");
const lastPoint = document.getElementById("ultimo-ponto");

function initDateAndTime() {
    diaSemana.textContent = getCurrentDay();
    diaMesAno.textContent = getCurrentDate();
    horaMinSeg.textContent = getCurrentHour();
    dataDialog.textContent = "Data: " + getCurrentDate();
}

setInterval(() => {
    lastPoint.textContent = getLastPoint();
}, 1000);

setInterval(() => printCurrentHour(horaMinSeg, horaDialog), 1000);

initDateAndTime();
runEventsListeners();