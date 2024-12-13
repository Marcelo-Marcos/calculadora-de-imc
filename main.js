@import url('reset.css');


/* Estilização da página para mobile*/
body {
  background: linear-gradient(90.50deg,  #0C6DF5 20%, #1B31F5 40%, #0C23F5 60%,
  #0CB6F5 70%, #1B31F5 80%, #0C6DF5 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.caixa__titulo {
  text-align: center;
  background-color: #0b7748;
  width: 100%;
  border-radius: 25px 25px 0 0;
}

.titulo {
  font-size: 1.5rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  color: #FFFF;
  margin-top: 5%;
}


.calculadora {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 25px;
  height: 100%;
  width: 80vw;
  margin-top: 10%;
  gap: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.5);
  transition: 1s;
}

.calculadora:hover {
  box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 1);
}

.caixa__principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 40px 40px 0 0;
  border-top: 3px solid #000000;
  padding: 5% 3% 3% 3%;
  background-color: #fff;
  margin-top: 10%;
}

.caixa__secundaria {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}

span {
  font-size: 1rem;
  font-weight: 600;
}

.peso,
.altura {
  width: 59%;
  font-size: 1.2rem;
  padding-left: 1%;
}

input::placeholder {
  padding-left: 1%;
}

.botao {
  font-size: 1.2rem;
  font-weight: 600;
  width: 40%;
  border: 1px solid #000000;
  background-color: #0b7748;
  color: #FFFF;
  border-radius: 2px;
  transition: 1s;
}

.botao:hover {
  background-color: #547e6b;
}

#caixa__lista {
  display: none;
  width: 100%;
}

ul {
  display: flex;
  justify-content: center;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid black;
  width: 40%;
}

.lista__cabecalho {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.5em;
  background-color: #ebe9e9;
}

.lista__texto {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5em;
}

.seu-peso,
.seu-imc {
  display: flex;
  text-align: center;
  background-color: #FFB200;
}

.ideal-peso,
.ideal-imc {
  display: flex;
  text-align: center;
  color: #FFF;
  background-color: #547e6b;
}

#mensagem-exibida {
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  width: 95%;
  text-align: center;
  margin-top: 0;
  background-color: #ebe9e9;
  border-radius: 20px;
}

