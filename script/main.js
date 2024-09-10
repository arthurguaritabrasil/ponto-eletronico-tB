const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-minuto-segundo");
const dataDialog = document.getElementById("data-dialog");
const horaDialog = document.getElementById("hora-dialog");

const btnBaterPonto = document.getElementById("bater-ponto");
const confirmarDialog = document.getElementById("confirmar-dialog");
const fecharDialogBtn = document.getElementById("fechar-dialog");
const confirmarPonto = document.getElementById("btnConfirmar");

btnBaterPonto.addEventListener("click", () => {
    confirmarDialog.showModal();
});
fecharDialogBtn.addEventListener("click", () => { // funcao anonima
    confirmarDialog.close();
});
confirmarPonto.addEventListener("click", () => {

    let typeRegister = document.getElementById("opcoes-ponto").value;


    let ponto = {
        "data": getCurrentDate(),
        "hora": getCurrentHour(),
        "localizacao": {
            "latitude": "",
            "longitude": "",
        },
        "id": Math.floor(Math.random() * 10000),
        "tipo":typeRegister
    }
    
    console.log(ponto);

    saveRegisterInLocalStorage(ponto);

    localStorage.setItem("lastTypeRegister",typeRegister); 

    // mensagem de confirmacao

    confirmarDialog.close();
});

let registerLocalStorage = getRegisterLocalStorage();

diaSemana.textContent = getCurrentDay();
diaMesAno.textContent = getCurrentDate();
horaMinSeg.textContent = getCurrentHour();

dataDialog.textContent = "Data: " + getCurrentDate();

function saveRegisterInLocalStorage(register) {
    registerLocalStorage.push(register);
    localStorage.setItem("register",JSON.stringify(registerLocalStorage));
}

function getRegisterLocalStorage() {
    let registers = localStorage.getItem("register");

    if (!registers) {
        return [];
    }

    // to-do: garantir que estou retornar um array ao inves de uma string
    return JSON.parse(registers);
}

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
    horaDialog.textContent = "Hora: " + getCurrentHour();
}

function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString();
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

function getLocalization() {
    if (!navigator.geolocation) {
        return "Não é possível obter a localização em seu navegador";
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        return position;
    }, (error) => {
        if (error == "[object GeolocationPositionError]") {
            //localization.textContent = `O usuário não permitiu o acesso a localização`;
            return 0;
        }
        //localization.textContent = `Erro ao obter a localização: ${error}`
    });
}









/* async function showCity(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `http://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}`;

    try {
        const response = await fetch (url);
        console.log(response)
        const data = await response.json();
        const city = data.address.city;
        return `Cidade: ${city}`;
    } catch (error) {
        console.log(error);
        return `Erro: ${error}`;
    }
} */


