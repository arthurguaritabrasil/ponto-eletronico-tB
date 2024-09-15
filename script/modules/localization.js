export function getLocalization() {
    if (!navigator.geolocation) {
        return "Não é possível obter a localização";
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        return { latitude, longitude };
    }, (error) => {
        return `Erro ao obter a localização: ${error.message}`;
    });
}