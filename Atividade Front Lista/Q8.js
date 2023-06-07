function numerosImpares() {
    let numerosImpares = "";
    for (let i = 1; i <= 50; i++) {
      if (i % 2 !== 0) {
        numerosImpares += i + " ";
      }
    }
    document.getElementById("resultado").innerHTML = numerosImpares;
  }