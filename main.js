function obesidade (valorObesidade) {
    const obesidadeGrau1 = valorObesidade < 35,
    obesidadeGrau2 = valorObesidade < 40,
     estatistica = obesidadeGrau1?'1': obesidadeGrau2?'2': '3';

 return estatistica;
}

function mostraImc (valorImc) {
const obeso = obesidade(valorImc);
const abaixoPeso = valorImc < 18.5,
   pesoNormal = valorImc < 25,
   sobrePeso = valorImc < 30;
const estatistica = abaixoPeso? 'abaixo do peso': pesoNormal?'com o peso normal': sobrePeso?'com sobrepeso': `com obesidade grau ${obeso}`;

if (isNaN(valorImc)) {    
let corDoTexto = document.getElementById('mensagem-exibida');
corDoTexto.style.color = 'red';
return `Digite a altura em CM e o peso para calcular o IMC`; 
} else {
 let corDoTexto = document.getElementById('mensagem-exibida');
 corDoTexto.style.color = 'green';
 return `O seu IMC é ${valorImc.toFixed(2)} e você está ${estatistica}`;
}

}

function atualizaResultadoNaTela (valorImcCalculado) {
const resultadoCalculo = mostraImc(valorImcCalculado);
const imc = document.querySelector('p');
imc.innerHTML = resultadoCalculo;
}

function calculaImc (peso, altura) {
altura = altura / 100;
const resultado = peso / (altura * altura)

atualizaResultadoNaTela(resultado);
}

function registraImc () {
let peso = document.querySelector('.peso').value;
let altura = document.querySelector('.altura').value;

calculaImc(peso, altura);

}
