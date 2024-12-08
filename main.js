function limpaDados ()  {
    const limparPeso = document.querySelector('.peso');
    const limparAltura = document.querySelector('.altura');
    limparPeso.value = '';
    limparAltura.value = '';
}

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
    const estatistica = abaixoPeso? 'abaixo do peso': pesoNormal?'com o peso normal':
          sobrePeso?'com sobrepeso': `com obesidade grau ${obeso}`;

if (isNaN(valorImc)) {    
    let corDoTexto = document.getElementById('mensagem-exibida');
    corDoTexto.style.color = 'red';
    corDoTexto.style.padding = '3% 3%';
    return `Digite a altura em CM e o peso para calcular o IMC`; 
} 
else if (valorImc < 40 && valorImc > 25){
    let corDoTexto = document.getElementById('mensagem-exibida');
    corDoTexto.style.color = 'red';
    return `O seu IMC é ${valorImc.toFixed(2)} e você está ${estatistica}`;
} else {
    let corDoTexto = document.getElementById('mensagem-exibida');
    corDoTexto.style.color = '#0b7748';
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
    limpaDados();
}
