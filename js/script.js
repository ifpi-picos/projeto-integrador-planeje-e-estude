// Função para salvar nota
function salvarNota() {
    const textoNota = document.getElementById('nota-text').value;
    if (textoNota.trim()) {
        const listaNotas = document.getElementById('lista-notas');
        const novaNota = document.createElement('p');
        novaNota.textContent = textoNota;
        listaNotas.appendChild(novaNota);
        document.getElementById('nota-text').value = '';
    } else {
        alert('Digite uma nota antes de salvar.');
    }
}

// Função para adicionar recurso
function adicionarRecurso() {
    const recursoInput = document.getElementById('recurso-input');
    const textoRecurso = recursoInput.value;
    if (textoRecurso.trim()) {
        const listaRecursos = document.getElementById('lista-recursos');
        const novoRecurso = document.createElement('li');
        novoRecurso.textContent = textoRecurso;
        listaRecursos.appendChild(novoRecurso);
        recursoInput.value = '';
    } else {
        alert('Digite um recurso antes de adicionar.');
    }
}

// Função para salvar anotação
function salvarAnotacao() {
    const textoAnotacao = document.getElementById('anotacao-text').value;
    if (textoAnotacao.trim()) {
        const listaAnotacoes = document.getElementById('lista-anotacoes');
        const novaAnotacao = document.createElement('p');
        novaAnotacao.textContent = textoAnotacao;
        listaAnotacoes.appendChild(novaAnotacao);
        document.getElementById('anotacao-text').value = '';
    } else {
        alert('Digite uma anotação antes de salvar.');
    }
}
