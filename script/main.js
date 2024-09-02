const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-minuto-segundo");

const btnBaterPonto = document.getElementById("bater-ponto");
btnBaterPonto.addEventListener("click",register);

diaSemana.textContent = getCurrentDay();
diaMesAno.textContent = getCurrentDate();
horaMinSeg.textContent = getCurrentHour();

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

/*function formatDateAndTime(date) {
    return date.toString().padStart(2,'0');
}
*/

function getCurrentHour() {
    const date = new Date();
    return date.toLocaleTimeString();
    //return formatDate(GetHours()) + ":" + formatDate(GetMinutes()) + ":" + formatDate(GetSeconds());
}

function register() {
    // Abrir <dialogue> com no mínimo 4 botões
    alert("Ponto registrado com sucesso")
}

setInterval(printCurrentHour,1000);




/*
function GetHours() {
    const date = new Date();
    return date.getHours();
}

function GetMinutes() {
    const date = new Date();
    return date.getMinutes();
}

function GetSeconds() {
    const date = new Date();
    return date.getSeconds();
}
*/