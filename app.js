//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Seleciona os elementos necessários
const inputNome = document.getElementById('amigo');
const addButton = document.getElementById('addButton');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const drawButton = document.getElementById('drawButton');

// Lista para armazenar os amigos adicionados
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = inputNome.value.trim();
    
    // Verifica se o nome não está vazio
    if (nome !== '') {
        amigos.push(nome);
        atualizarLista();
        inputNome.value = '';  // Limpa o campo de entrada
        inputNome.focus();  // Foca no campo de entrada novamente
    } else {
        alert('Por favor, digite um nome.');
    }
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário ter pelo menos 2 amigos para sortear!');
        return;
    }

    const sorteio = [...amigos];  // Cria uma cópia do array para o sorteio
    let resultadosSorteio = [];
    const amigosRestantes = [...amigos];  // Cria um novo array para armazenar os amigos restantes

    // Realiza o sorteio
    for (let i = 0; i < sorteio.length; i++) {
        let indexSorteado;
        
        // Sorteia de forma que ninguém sorteie a si mesmo
        do {
            indexSorteado = Math.floor(Math.random() * amigosRestantes.length);
        } while (amigosRestantes[indexSorteado] === sorteio[i]);

        resultadosSorteio.push({ de: sorteio[i], para: amigosRestantes[indexSorteado] });
        amigosRestantes.splice(indexSorteado, 1);  // Remove o sorteado da lista
    }

    // Exibe os resultados
    exibirResultado(resultadosSorteio);
}

// Função para exibir os resultados do sorteio
function exibirResultado(resultados) {
    resultado.innerHTML = '';  // Limpa os resultados anteriores

    resultados.forEach((sorteio) => {
        const li = document.createElement('li');
        li.textContent = `${sorteio.de} sorteou ${sorteio.para}`;
        resultado.appendChild(li);
    });
}

// Adiciona eventos aos botões
addButton.addEventListener('click', adicionarAmigo);
drawButton.addEventListener('click', sortearAmigo);
