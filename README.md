# bolos-palito
Landing page bolos de palito

## Como alterar o link para checkout:

- Entrar na pasta `js` (se clicar enquanto pressiona o CTRL, abre em outra aba pra continuar lendo esse guia).
- Abrir o arquivo `substitui-link-botoes.js`
- Clicar no botão `Edit this file`para editar o arquivo (botão com formato de lápis).
- Na linha abaixo, substituir o texto entre parenteses pelo link que quer que os botões tenham:

```javascript
const linkBotao = "link-do-grupo";
```
- Clicar em `Commit changes...` e preencher a Commit message com uma mensagem significativa, como `Alteração de link` (nesse caso). Também pode deixar a mensagem padrão que é menos significativa. As outras opções pode deixar como estão.
- Clicar em `Commit changes`

## Acompanhando a atualização
Você pode acompanhar, no menu Actions, se as alterações estão sendo ou já foram realizadas.
- Se a última entrada `pages build and deployment` estiver com o circulo "checkado" verde, as alterações já estão disponíveis no site.
- Se estiver com o círculo vermelho e um `x`, houve falha na atualização
- Se estiver com um circulo em movimento, amarelo, você pode clicar em cima para ver o andamento
  - Nesse caso, haverá as etapas `build`, `report build status` e `deploy`. Para que a página esteja no ar, todas as etapas devem estar com o circulo verde "checado".


## Alterar tema:
Teste os temas com a página https://bolo-no-palito.rendadoce.blog/temas.html

Para mudar o tema, no arquivo index.html, no começo da tag body, adicione no início do atributo class o tema correspondente. Por exemplo, para o tema red, a tag fica:
```html
  <body class="theme-red bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
```

Os temas possíveis são:
- ![#3b82f6](https://placehold.co/15x15/3b82f6/3b82f6.png) `#3b82f6` theme-blue
- ![#10b981](https://placehold.co/15x15/10b981/10b981.png) `#10b981` theme-green
- ![#ef4444](https://placehold.co/15x15/ef4444/ef4444.png) `#ef4444` theme-red
- ![#d97706](https://placehold.co/15x15/d97706/d97706.png) `#d97706` theme-gold
- ![#8b5cf6](https://placehold.co/15x15/8b5cf6/8b5cf6.png) `#8b5cf6` theme-purple
- ![#ec4899](https://placehold.co/15x15/ec4899/ec4899.png) `#ec4899` theme-pink
- ![#14b8a6](https://placehold.co/15x15/14b8a6/14b8a6.png) `#14b8a6` theme-teal
- ![#6b7280](https://placehold.co/15x15/6b7280/6b7280.png) `#6b7280` theme-gray

Páginas adicionada para cada cor:
- https://bolo-no-palito.rendadoce.blog/red.html
- https://bolo-no-palito.rendadoce.blog/green.html
- https://bolo-no-palito.rendadoce.blog/blue.html
- https://bolo-no-palito.rendadoce.blog/gold.html
- https://bolo-no-palito.rendadoce.blog/purple.html
- https://bolo-no-palito.rendadoce.blog/pink.html
- https://bolo-no-palito.rendadoce.blog/teal.html
- https://bolo-no-palito.rendadoce.blog/gray.html