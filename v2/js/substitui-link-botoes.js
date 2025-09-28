// Define o link do grupo
  const linkBotao = "https://go.hotmart.com/L101632637N?ap=a9b5";

  // Seleciona todos os elementos com a classe
  const botoes = document.querySelectorAll(".link-botao");

  // Adiciona o link em cada botão com a classe 'linkBotao'
  botoes.forEach(botao => {
    botao.setAttribute("href", linkBotao);
    botao.setAttribute("target", "_blank"); // abre em nova aba
    botao.setAttribute("rel", "noopener noreferrer"); // segurança
  });
