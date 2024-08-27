const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-minuto-segundo");

diaSemana.textContent = getCurrentDay();
diaMesAno.textContent = getCurrentDate();
horaMinSeg.textContent = getCurrentHour();

const btnBaterPonto = document.getElementById("bater-ponto")


function getCurrentDay() {
    const date = new Date;
    const diasDaSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"]
    return diasDaSemana[date.getDay()];   
}

function printCurrentHour() {
    horaMinSeg.textContent = getCurrentHour();
}

function getCurrentDate() {
    const date = new Date();
    return date.getDate() + "/" + (((date.getMonth() + 1) < 9) ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "/" + date.getFullYear();
}

function getCurrentHour() {
    return (GetHours() < 9 ? "0" + GetHours() : GetHours()) + ":" + (GetMinutes() < 9 ? "0" + GetMinutes() : GetMinutes()) + ":" + ((GetSeconds() < 9) ? "0" + GetSeconds(): GetSeconds());
}

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

function register() {
    alert("aaa")
}

setInterval(printCurrentHour,1000);