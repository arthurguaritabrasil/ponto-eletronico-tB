document.addEventListener("DOMContentLoaded", function() {
    carregarHistorico();
});

function carregarHistorico() {
    const container = document.getElementById("historicoContainer");
    let historicoPontos = JSON.parse(localStorage.getItem('register')) || [];
    if (historicoPontos.lenght  === 0) {
        container.innerHTML = "Nenhum registro encontrado.";
        return;
    }

    let limitePontos = historicoPontos.reverse().slice(0, 10);

    limitePontos.forEach(ponto => {
        let pontoDiv = document.createElement('div');
        pontoDiv.classList.add('ponto');
        pontoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${ponto.nome}</p>
            <p><strong>Data:</strong> ${ponto.data}</p>
            <p><strong>Hora:</strong> ${ponto.hora}</p>
            <p><strong>Tipo:</strong> ${ponto.tipo}</p>
            <p><strong>Latitude:</strong> ${ponto.localizacao.latitude}</p>
            <p><strong>Longitude:</strong> ${ponto.localizacao.longitude}</p>
        `;
        container.appendChild(pontoDiv);
    });
}