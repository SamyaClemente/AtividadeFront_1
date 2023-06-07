function calcularAnos() {
    let populacaoAInput = document.getElementById("populacaoA");
    let taxaCrescimentoAInput = document.getElementById("taxaA");
    let populacaoBInput = document.getElementById("populacaoB");
    let taxaCrescimentoBInput = document.getElementById("taxaB");

    let populacaoA = parseInt(populacaoAInput.value);
    let taxaCrescimentoA = parseFloat(taxaCrescimentoAInput.value);
    let populacaoB = parseInt(populacaoBInput.value);
    let taxaCrescimentoB = parseFloat(taxaCrescimentoBInput.value);

    if (
      isNaN(populacaoA) || isNaN(taxaCrescimentoA) ||
      isNaN(populacaoB) || isNaN(taxaCrescimentoB)
    ) {
      alert("Insira valores válidos.");
      return;
    }

    taxaCrescimentoA = 1 + taxaCrescimentoA / 100;
    taxaCrescimentoB = 1 + taxaCrescimentoB / 100;

    let anos = 0;
    while (populacaoA < populacaoB) {
      populacaoA *= taxaCrescimentoA;
      populacaoB *= taxaCrescimentoB;
      anos++;
    }

    alert(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou seja igual a população do país B.`);
  }