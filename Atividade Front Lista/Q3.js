function validarInformacoes() {
    let nomeInput = document.getElementById("nome");
    let idadeInput = document.getElementById("idade");
    let salarioInput = document.getElementById("salario");
    let sexoInput = document.getElementsByName("sexo");
    let estadoCivilInput = document.getElementsByName("estadoCivil");

    let nome = nomeInput.value;
    let idade = parseInt(idadeInput.value);
    let salario = parseFloat(salarioInput.value);
    let sexo, estadoCivil;

    if (nome.length <= 3) {
      alert("O nome deve ter mais de 3 caracteres.");
      return;
    }

    if (idade < 0 || idade > 150) {
      alert("A idade deve estar entre 0 e 150.");
      return;
    }

    if (salario <= 0) {
      alert("O salário deve ser maior que zero.");
      return;
    }

    for (let i = 0; i < sexoInput.length; i++) {
      if (sexoInput[i].checked) {
        sexo = sexoInput[i].value;
        break;
      }
    }

    if (sexo !== "f" && sexo !== "m") {
      alert("Selecione uma opção válida para o sexo.");
      return;
    }
    
    for (let i = 0; i < estadoCivilInput.length; i++) {
      if (estadoCivilInput[i].checked) {
        estadoCivil = estadoCivilInput[i].value;
        break;
      }
    }
  
    if (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
      alert("Selecione uma opção válida para o estado civil.");
      return;
    }

    alert("Informações válidas!");
  }