const form = document.getElementById('form-atividade');
const imgAprovado = ' <img src="./imagens.projeto/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = ' <img src="./imagens.projeto/reprovado.png" alt="Emoji triste"/>'
const spanAprovado = '<span class="resultado aprovado" >Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado" >Reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima"));

const atividade = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    AdicionarLinha();
    AtualizarTabela();
    AtualizaMediaFinal();

});

function AdicionarLinha() {

    const inputNomeAtividade = document.getElementById('Nome-Atividade');
    const inputNotaAtividade = document.getElementById('Nota-Atividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`a atividades ${inputNomeAtividade.value} ja foi adicionada !`);
    }else {
    
        atividade.push(parseFloat(inputNomeAtividade.value));
        notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`;
    linha += '</tr>';

    linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    
}


function AtualizarTabela() {
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function AtualizaMediaFinal(){
    
    const MediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = MediaFinal;
    document.getElementById('media-final-resultado').innerHTML =  MediaFinal >= notaMinima ?  spanAprovado :spanReprovado;
}

function calculaMediaFinal(){
    
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}
