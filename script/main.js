const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-minuto-segundo");
const dataDialog = document.getElementById("data-dialog");
const horaDialog = document.getElementById("hora-dialog");

const btnBaterPonto = document.getElementById("bater-ponto");
const confirmarDialog = document.getElementById("confirmar-dialog");
const fecharDialogBtn = document.getElementById("fechar-dialog");

btnBaterPonto.addEventListener("click", () => {
    confirmarDialog.showModal();
});
fecharDialogBtn.addEventListener("click", () => { // funcao anonima
    confirmarDialog.close();
});

diaSemana.textContent = getCurrentDay();
diaMesAno.textContent = getCurrentDate();
horaMinSeg.textContent = getCurrentHour();
dataDialog.textContent = getCurrentDate();
horaDialog.textContent = getCurrentHour();

function getCurrentDay() {
    const date = new Date;
    const diasDaSemana = {
        0: "Domingo",
        1: "Segunda-feira",
        2: "Terça-feira",
        3: "Quarta-feira",
        4: "Quinta-feira",
        5: "Sexta-feira",
        6: "Sábado"
    };
    return diasDaSemana[date.getDay()];   
}

function printCurrentHour() {
    horaMinSeg.textContent = getCurrentHour();
}

function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString();
    //return formatDate(date.getDate(date)) + "/" + formatDate(date.getMonth(date) + 1) + "/" + date.getFullYear()
}
function getCurrentHour() {
    const date = new Date();
    return date.toLocaleTimeString();
}

setInterval(printCurrentHour,1000);

/*function formatDateAndTime(date) {
    return date.toString().padStart(2,'0');
}
*/
