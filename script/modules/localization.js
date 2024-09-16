export async function getLocalization() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude} = position.coords;
                resolve({ latitude, longitude });
            },
            (error) => reject("Erro ao obter a localização: " + error.message)
        );
        } else {
            reject("O navegador não suporta geolocalização");
        }
    });
}