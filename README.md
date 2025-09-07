# Carrossel de Imagens Responsivo

Um carrossel de imagens interativo e totalmente responsivo, criado com **HTML, CSS e JavaScript puro (Vanilla JS)**. Este projeto demonstra a manipulação do DOM e o gerenciamento de eventos para criar um componente de UI moderno e funcional.

## 🚀 Live Demo

**Visualize o projeto em ação acessando o link do GitHub Pages:**

### **[https://edumoreiira.github.io/Carrossel/](https://edumoreiira.github.io/Carrossel/)**

## ✨ Funcionalidades

  - **Navegação Intuitiva:** Setas de "anterior" e "próximo" para fácil navegação.
  - **Arrastar para Navegar (Drag-and-Slide):** Interaja com o carrossel arrastando as imagens com o mouse.
  - **Indicadores de Posição:** Botões de controle que indicam e permitem navegar para um slide específico.
  - **Loop Infinito:** O carrossel cria um efeito de loop contínuo, clonando o primeiro e o último slide para uma transição suave.
  - **Design Responsivo:** O layout se adapta perfeitamente a diferentes tamanhos de tela.
  - **Animações Suaves:** Transições fluidas ao trocar de slides.

## 💻 Tecnologias Utilizadas

  - **HTML5**
  - **CSS3**
  - **JavaScript (ES6+)**

## ⚙️ Como Utilizar

Como este é um projeto front-end puro, não há necessidade de um servidor ou de instalação de dependências.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/edumoreiira/Carrossel.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Carrossel
    ```
3.  **Abra o arquivo `index.html` no seu navegador de preferência.**

## 🤝 Boas Práticas e Destaques do Código

Este projeto, embora simples, foi construído com atenção a detalhes importantes de JavaScript, HTML e CSS.

### JavaScript

  * **Manipulação Direta do DOM:** Todo o controle do carrossel é feito com JavaScript puro, selecionando elementos através de `document.querySelector` e `document.querySelectorAll`.
  * **Atributos `data-*` para Seleção:** O uso de atributos `data-slide` no HTML (`data-slide="img-wrapper"`, `data-slide="img"`, etc.) cria um acoplamento mais baixo entre o JS e o CSS, tornando o código mais legível e fácil de manter.
  * **Gerenciamento de Estado:** Um objeto `state` é utilizado para manter e gerenciar informações cruciais como a posição atual, o índice do slide e o movimento do mouse.
  * **Eventos do Mouse para a Funcionalidade de Arrastar:** A funcionalidade de "arrastar para navegar" é implementada com uma combinação dos eventos `mousedown`, `mousemove` e `mouseup`.
  * **Loop Infinito com Clonagem de Slides:** Para criar a ilusão de um loop infinito, o primeiro e o último slide são clonados e posicionados nas extremidades opostas do carrossel. O código então utiliza o evento `transitionend` para "saltar" para o slide original sem animação, garantindo uma experiência contínua.
  * **Prevenção de Comportamentos Padrão:** O evento `dragstart` é prevenido para evitar que o navegador arraste a imagem como um objeto, permitindo uma implementação de arrastar personalizada.

### HTML & CSS

  * **Estrutura Semântica:** O HTML é estruturado de forma clara e semântica para facilitar o entendimento e a estilização.
  * **Transições CSS para Animações:** As animações de deslizamento são controladas pela propriedade `transition` do CSS, que é ativada ou desativada dinamicamente pelo JavaScript para garantir movimentos suaves ou saltos instantâneos.
