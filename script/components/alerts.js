export function showAlert() {
    const alertaRegistro = document.getElementById("alerta-registro-de-ponto");
    alertaRegistro.showModal();
    setTimeout(() => {
        closeAlert(alertaRegistro)
    }, 5000)
}

export function closeAlert(alertaRegistro) {
    alertaRegistro.close();
}