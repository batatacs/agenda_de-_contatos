const form = document.getElementById('form-atividade');
const imgWhats = '<img src="./images/whats.png" alt="whatssap" />';
const contato = [];
const telefone = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nomePessoa');
    const inputTelefoneContato = document.getElementById('telefone');

    if(contato.includes(inputNomeContato.value)) {
        alert(`o contato : ${inputNomeContato.value} ja foi inserido`);
    } else  {
        contato.push(inputNomeContato.value);
        telefone.push(parseFloat(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;  
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td>${imgWhats}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    inputNomeContato.value ='';
    inputTelefoneContato.value ='';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
