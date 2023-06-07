function validarSenha() {
  const user = document.getElementById("user").value;
  const senha = document.getElementById("senha").value;

  if (user===senha) {
    alert("Nome de usuário e senha devem ser diferentes.");
  }
}




