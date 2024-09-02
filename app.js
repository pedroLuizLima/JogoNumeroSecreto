//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Doidera';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 100';
let listaNumerosSorteados = [];
let Num = 100;
let tentativa = 1;

let NumeroSecreto = gerarNumAleatorio();
console.log(NumeroSecreto);
mensagemInicial();

function exibirTextoNaTela(tag, texto){
    let LocalASerColocado = document.querySelector(tag);
    LocalASerColocado.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Joguinho Daora');
    exibirTextoNaTela('p', `Digite um número de 1 a ${Num}`);
}

function conferirChute(){
    let chute = document.querySelector('input').value;
    if(chute == NumeroSecreto){
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
    let mensagemAcerto = `Você descobriu o número secreto em ${tentativa} ${palavraTentativa}.`
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemAcerto);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if(chute < NumeroSecreto){
        exibirTextoNaTela('p', `O Número secreto é maior que ${chute}.`);
    }
    else{
        exibirTextoNaTela('p', `O Número secreto é menor que ${chute}.`);
    }
    tentativa++;
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * Num + 1);
    let quantidadeDeNumerosNaLista = listaNumerosSorteados.length;
    
    if(quantidadeDeNumerosNaLista == Num){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroAleatorio)){
        return gerarNumAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroAleatorio);
        console.log(listaNumerosSorteados);
        return numeroAleatorio;
    }
} 

function reiniciarJogo(){
    mensagemInicial();
    limparCampo();
    NumeroSecreto = gerarNumAleatorio();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
}