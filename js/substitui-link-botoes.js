// Define o link do grupo
  const linkBotao = "__LINK_BOTAO__";

  // Seleciona todos os elementos com a classe
  const botoes = document.querySelectorAll(".link-botao");

  // Adiciona o link em cada um
  botoes.forEach(botao => {
    botao.setAttribute("href", linkBotao);
    botao.setAttribute("target", "_blank"); // abre em nova aba
    botao.setAttribute("rel", "noopener noreferrer"); // segurança
  });