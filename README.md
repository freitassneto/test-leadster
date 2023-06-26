# Teste Leadster - Olívio Freitas
Repositório do teste técnico para vaga de FrontEnd na Leadster

## As decisões tomadas:
A princípio as decisões tomadas basearam-se no que foi pedido no teste. E depois fui adaptando ao longo do desenvolvimento do código.

Os botões de filtragem, acima da lista de vídeos eu decidi que enquanto a tela fosse ficando menor, os botões fossem pulando uma linha e alinhando à esquerda. Primeiro o Select de ordenação por data e depois os botões de filtro em si.

Da mesma forma para os cards de vídeos. Para estes, ao clicar no modal incorporei a biblioteca "React YouTube", para incorporar o vídeo ao modal e fazê-lo tocar.

Na responsividade do componente de "Call to Action" decidi colocar o texto acima da imagem, pois senti que o texto explicaria melhor o gráfico do componente.

## Como organizei o código:
Preferi organizar o código da index em componentes, de acordo com o Layout. Por questão de organização para facilitar futuras implementações da aplicação.

<br>
<br>

# As funcionalidades e instruções de como rodar o código:
Primeiro, instale as dependências do projeto, com o comando:
```bash
# usando npm
npm install
# usando Yarn
yarn
```

Depois, rode a aplicação com o comando:
```bash
# usando npm
npm run dev
# usando Yarn
yarn dev
```