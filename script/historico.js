document.addEventListener("DOMContentLoaded", function() {
    const tipoFiltro = document.getElementById('tipoFiltro');

    tipoFiltro.addEventListener('change', function() {
        carregarHistorico(tipoFiltro.value);
    });

    carregarHistorico('todos');
});

function carregarHistorico(filtroTipo) {
    const container = document.getElementById("historicoContainer");
    container.innerHTML = "";

    let historicoPontos = JSON.parse(localStorage.getItem('register')) || [];
    
    if (historicoPontos.length === 0) {
        container.innerHTML = "Nenhum registro encontrado.";
        return;
    }

    let pontosFiltrados = historicoPontos.reverse().filter(ponto => {
        return filtroTipo === 'todos' || ponto.tipo === filtroTipo;
    });

    if (pontosFiltrados.length === 0) {
        container.innerHTML = "Nenhum ponto encontrado para o filtro selecionado.";
        return;
    }

    pontosFiltrados.forEach(ponto => {
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
