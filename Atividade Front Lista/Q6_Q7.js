function Resultados() {
    let numeros = [];
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
      let numero = parseFloat(document.getElementById("numero" + i).value);
      numeros.push(numero);
      soma += numero;
    }

    let maiorNumero = Math.max(...numeros);
    let media = soma / numeros.length;

    document.getElementById("resultadoMaior").innerHTML = "Maior número: " + maiorNumero;
    document.getElementById("resultadoSoma").innerHTML = "Soma dos números: " + soma;
    document.getElementById("resultadoMedia").innerHTML = "Média dos números: " + media.toFixed(2);
  }