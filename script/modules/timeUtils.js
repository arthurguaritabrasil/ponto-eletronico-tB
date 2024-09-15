export function getCurrentDay() {
    const date = new Date;
    const diasDaSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    return diasDaSemana[date.getDay()];   
}

export function getCurrentDate() {
    const date = new Date();
    return new Date().toLocaleDateString();
}

export function getCurrentHour() {
    const date = new Date();
    return new Date().toLocaleTimeString();
}

export function printCurrentHour(horaMinSeg,horaDialog) {
    horaMinSeg.textContent = getCurrentHour();
    horaDialog.textContent = "Hora: " + getCurrentHour();
}