let nota = -1;

while (nota < 0 || nota > 10) {
  nota = prompt("Informe uma nota entre 0 e 10:");
  if (nota < 0 || nota > 10) {
    alert("Informe um valor válido!");
  }
}

alert("A nota inserida foi: " + nota);