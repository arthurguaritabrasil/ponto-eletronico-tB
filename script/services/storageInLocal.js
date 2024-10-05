export function saveRegisterInLocalStorage(register) {
    let registerLocalStorage = getRegisterLocalStorage();
    registerLocalStorage.push(register);
    localStorage.setItem("register",JSON.stringify(registerLocalStorage));
}

export function getRegisterLocalStorage() {
    let registers = localStorage.getItem("register");

    if (!registers) {
        return [];
    }
    return JSON.parse(registers);
}

export function updateLastRegister(ponto) {
    localStorage.setItem("lastTypeRegister", ponto.tipo);
    localStorage.setItem("lastTimeRegister", ponto.hora);
    localStorage.setItem("lastDataRegister", ponto.data);
}

export function getLastPoint() {
    let lastType = localStorage.getItem("lastTypeRegister");
    let lastDate = localStorage.getItem("lastDataRegister");
    let lastTime = localStorage.getItem("lastTimeRegister");

    return "Ultimo ponto registrado: \n" + lastType + "\nàs " + lastTime + "\nde " + lastDate;
}