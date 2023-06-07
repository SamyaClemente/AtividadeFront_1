function NumerosInteiros() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    var numeros = "";
    var inicio = Math.min(numero1, numero2);
    var fim = Math.max(numero1, numero2);

    for (var i = inicio; i <= fim; i++) {
      numeros += i + " ";
    }

    document.getElementById("resultado").innerHTML = "Números inteiros: " + numeros;
  }