function imprimirNumeros() {
    let numerosAbaixo = "";
    for (let i = 1; i <= 20; i++) {
      numerosAbaixo += i + "<br>";
    }
    document.getElementById("numerosAbaixo").innerHTML = numerosAbaixo;
    let numerosLadoALado = "";
    for (let i = 1; i <= 20; i++) {
      numerosLadoALado += i + " ";
    }
    document.getElementById("numerosLadoALado").innerHTML = numerosLadoALado;
  }