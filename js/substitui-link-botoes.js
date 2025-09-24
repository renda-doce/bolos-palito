// Define o link do grupo
  const linkGrupo = "https://wa.me/5511975037855?text=Olá%2C%20tenho%20interesse%20no%20curso!";

  // Seleciona todos os elementos com a classe
  const botoes = document.querySelectorAll(".link-botao");

  // Adiciona o link em cada um
  botoes.forEach(botao => {
    botao.setAttribute("href", linkGrupo);
    botao.setAttribute("target", "_blank"); // abre em nova aba
    botao.setAttribute("rel", "noopener noreferrer"); // segurança
  });