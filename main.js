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

function calculoImcPesoIdeal (Altura) {
    const altura = Altura / 100;
    const pesoIdeal = 24.99 * (altura * altura);

    metricaideal(pesoIdeal.toFixed(2));
}

function mostraImc (valorImc) {
    const obeso = obesidade(valorImc);
    const abaixoPeso = valorImc < 18.5,
          pesoNormal = valorImc < 25,
          sobrePeso = valorImc < 30;
    const estatistica = abaixoPeso? 'abaixo do peso': pesoNormal?'com o peso normal':
          sobrePeso?'com sobrepeso': `com obesidade grau ${obeso}`;

    if (isNaN(valorImc) || valorImc === Infinity) {    
        let listaDados = document.getElementById('caixa__lista');
        listaDados.style.display = 'none';

        let corDoTexto = document.getElementById('mensagem-exibida');
        corDoTexto.style.color = '#FF2929';
        corDoTexto.style.padding = '5% 5%';

        return `Digite a altura em CM e o peso para calcular o IMC`; 
    } 
    else if (valorImc < 18.5){
        let corDoTexto = document.getElementById('mensagem-exibida');
        corDoTexto.style.color = '#FFB200';

        return `O seu IMC é ${valorImc.toFixed(2)} e você está ${estatistica}`;
    }
    else if (valorImc < 30 && valorImc > 25){
        let corDoTexto = document.getElementById('mensagem-exibida');
        corDoTexto.style.color = '#FFB200';

        return `O seu IMC é ${valorImc.toFixed(2)} e você está ${estatistica}`;
    }
    else if (valorImc > 30){
        let corDoTexto = document.getElementById('mensagem-exibida');
        corDoTexto.style.color = '#FF2929';

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
    const resultado = peso / (altura * altura);

    metricaAtual(resultado, peso);
    atualizaResultadoNaTela(resultado);
}

function metricaAtual (imcMetricaAtual, pesoMetricaAtual) {
    const listaImcAtual = document.querySelector('.seu-imc');
    const listaPesoAtual = document.querySelector('.seu-peso');


    listaImcAtual.innerHTML = imcMetricaAtual.toFixed(2);
    listaPesoAtual.innerHTML = `${pesoMetricaAtual}kg`;

    let listaDados = document.getElementById('caixa__lista');
    listaDados.style.display = 'block';

    limpaDados();
}

function metricaideal (pesoMetricaIdeal) {
    const listaImcIdeal = document.querySelector('.ideal-imc');
    const listaPesoIdeal = document.querySelector('.ideal-peso');

    listaImcIdeal.innerHTML = 'Maior que 18.5 e menor que 25';
    listaPesoIdeal.innerHTML = `${pesoMetricaIdeal}kg`;
}

function registraImc () {
    let peso = document.querySelector('.peso').value;
    let altura = document.querySelector('.altura').value;

    calculaImc(peso, altura);
    calculoImcPesoIdeal(altura);
}
