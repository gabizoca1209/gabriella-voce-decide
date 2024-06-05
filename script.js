const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual a cor dos olhos do Dayvison?",
    alternativas: [
      "Azuis" ,
      "Verdes"
    ]
  },

  {
    enunciado: "Quem é o melhor vilão Jason ou Fred Krügger?",
    alternativas: [
      "Jason",
      "Fred Krügger"
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  }
];

let atual = 0;
let perguntaAtual;

function mostraAlternativa() {
  for (const alternativa of perguantaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button"); 
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();