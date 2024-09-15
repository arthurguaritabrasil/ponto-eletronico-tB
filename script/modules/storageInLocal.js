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